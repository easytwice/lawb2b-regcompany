<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('Content-Security-Policy: default-src \'none\'; frame-ancestors \'none\'');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode(
        ['success' => $success, 'message' => $message],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

function postString(string $key): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        respond(422, false, 'Invalid request data.');
    }

    return trim($value);
}

function clientFingerprint(string $ip): string
{
    return substr(hash('sha256', $ip), 0, 12);
}

function securityLog(string $event, string $ip): void
{
    error_log('LAW B2B lead form: ' . $event . '; client=' . clientFingerprint($ip));
}

function rateLimitExceeded(string $ip): bool
{
    $directory = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'lawb2b-rate-limit';
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        securityLog('rate-limit storage unavailable', $ip);
        return true;
    }

    $path = $directory . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        securityLog('rate-limit lock unavailable', $ip);
        return true;
    }

    $raw = stream_get_contents($handle);
    $decoded = is_string($raw) && $raw !== '' ? json_decode($raw, true) : [];
    $timestamps = is_array($decoded) ? $decoded : [];
    $now = time();
    $windowStart = $now - 600;
    $timestamps = array_values(array_filter(
        $timestamps,
        static fn ($timestamp): bool => is_int($timestamp) && $timestamp > $windowStart
    ));

    $limited = count($timestamps) >= 5;
    if (!$limited) {
        $timestamps[] = $now;
    }

    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($timestamps, JSON_UNESCAPED_SLASHES) ?: '[]');
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    @chmod($path, 0600);

    return $limited;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

$contentLength = filter_var($_SERVER['CONTENT_LENGTH'] ?? 0, FILTER_VALIDATE_INT);
if ($contentLength === false || $contentLength > 16384) {
    respond(413, false, 'Request too large.');
}

$contentType = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
if (!preg_match('#^(?:application/x-www-form-urlencoded|multipart/form-data)(?:;|$)#i', $contentType)) {
    respond(415, false, 'Unsupported content type.');
}

$requestedWith = (string) ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '');
if (!hash_equals('XMLHttpRequest', $requestedWith)) {
    respond(400, false, 'Invalid request.');
}

$allowedOrigins = ['https://lawb2b.ru', 'https://www.lawb2b.ru'];
$origin = strtolower(rtrim((string) ($_SERVER['HTTP_ORIGIN'] ?? ''), '/'));
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    $remoteAddress = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unavailable');
    securityLog('rejected origin', $remoteAddress);
    respond(403, false, 'Request origin is not allowed.');
}

$website = postString('website');
if ($website !== '') {
    // Silently accept bot submissions without sending an email.
    respond(200, true, 'Request accepted.');
}

$startedAt = filter_var($_POST['started_at'] ?? null, FILTER_VALIDATE_INT);
$now = (int) round(microtime(true) * 1000);
if ($startedAt === false || $startedAt <= 0 || ($now - $startedAt) < 1800) {
    respond(422, false, 'Please wait a moment and try again.');
}

$name = postString('name');
$phone = postString('phone');
$language = postString('language');
$consent = postString('consent');

$nameLength = function_exists('mb_strlen') ? mb_strlen($name, 'UTF-8') : strlen($name);
$digitsOnly = preg_replace('/\D+/', '', $phone) ?? '';

if (
    $name === ''
    || $nameLength < 2
    || $nameLength > 100
    || preg_match('//u', $name) !== 1
    || preg_match('/[\x00-\x1F\x7F]/u', $name)
) {
    respond(422, false, 'Please enter a valid name.');
}

if (
    $phone === ''
    || strlen($phone) > 32
    || strlen($digitsOnly) < 7
    || strlen($digitsOnly) > 18
    || !preg_match('/^[0-9+\-().\s]+$/u', $phone)
) {
    respond(422, false, 'Please enter a valid phone number.');
}

if ($consent !== 'yes') {
    respond(422, false, 'Privacy consent is required.');
}

$language = $language === 'en' ? 'English' : 'Русский';
$remoteAddress = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
$ip = filter_var($remoteAddress, FILTER_VALIDATE_IP) !== false ? $remoteAddress : 'unavailable';
$userAgent = substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? 'unavailable'), 0, 500);
$userAgent = trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $userAgent) ?? 'unavailable');
$submittedAt = gmdate('Y-m-d H:i:s') . ' UTC';

if (rateLimitExceeded($ip)) {
    header('Retry-After: 600');
    securityLog('rate limit exceeded', $ip);
    respond(429, false, 'Too many requests. Please try again later.');
}

$recipient = 'easy-twice@yandex.ru';
$subjectText = 'Новая заявка с сайта LAW B2B';
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';
$body = implode("\r\n", [
    'Новая заявка с сайта lawb2b.ru',
    '',
    'Имя: ' . $name,
    'Телефон: ' . $phone,
    'Язык страницы: ' . $language,
    'Согласие с политикой: да',
    'Дата отправки: ' . $submittedAt,
    'IP: ' . $ip,
    'User-Agent: ' . $userAgent,
]);

$headers = implode("\r\n", [
    'From: LAW B2B Website <noreply@lawb2b.ru>',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$sent = @mail($recipient, $subject, $body, $headers);
if (!$sent) {
    securityLog('mail transport failed', $ip);
    respond(500, false, 'The server could not send the request.');
}

respond(200, true, 'Request sent.');
