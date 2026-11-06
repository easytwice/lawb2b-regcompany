(() => {
  "use strict";

  const english = {
    skip: "Skip to content",
    navAria: "Main navigation",
    navServices: "Services",
    navPricing: "Pricing",
    navProcess: "Process",
    navFaq: "FAQ",
    languageAria: "Language selection",
    headerCta: "Consultation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mobileNavAria: "Mobile navigation",
    brandAria: "LAW B2B — home",
    heroEyebrow: "Legal support in China",
    heroTitle: "China · Company formation and ready-made companies",
    heroLead: "We set up companies in China end to end — from structure and documents to a business licence and corporate bank account.",
    heroPointsAria: "Key benefits",
    heroPointOneTitle: "Hong Kong & Shanghai",
    heroPointOneText: "local legal team",
    heroPointTwoTitle: "3–5 weeks",
    heroPointTwoText: "standard formation timeline",
    heroPointThreeTitle: "RU · EN · 中文",
    heroPointThreeText: "support in three languages",
    telegramAria: "Message us on Telegram",
    whatsappAria: "Message us on WhatsApp",
    formStatus: "Now accepting enquiries",
    formTitle: "Discuss your company formation",
    formIntro: "Leave your details and we will review the task and recommend a suitable structure.",
    formName: "Your name",
    formNamePlaceholder: "Name",
    formPhone: "Phone",
    formPhonePlaceholder: "+1 555 000 0000",
    formConsent: "I have read and agree to the",
    formPrivacy: "Privacy Policy",
    formSubmit: "Get a consultation",
    formNote: "We respond during business hours. The initial consultation is free.",
    formSending: "Sending…",
    formSuccess: "Thank you. Your request has been sent. We will contact you shortly.",
    formError: "We could not send the request. Please message us on Telegram or WhatsApp.",
    formValidation: "Please complete all required fields and accept the Privacy Policy.",
    metricsAria: "LAW B2B in numbers",
    metricYears: "years in the China market",
    metricCompanies: "companies incorporated",
    metricCities: "cities of presence",
    metricRating: "average client rating",
    presenceEyebrow: "Local presence",
    presenceTitle: "In Hong Kong or Shanghai",
    presenceLead: "Our lawyers in China handle the filings. The team supports your project from the initial review to receiving the corporate documents.",
    featureOneTitle: "Local lawyer",
    featureOneText: "Handles filings with SAMR and MOFCOM, responds to regulator requests and supports the business licence process.",
    featureTwoTitle: "Local representative",
    featureTwoText: "Receives correspondence from authorities and tracks the filing status and annual reporting deadlines.",
    featureThreeTitle: "In-house legal team",
    featureThreeText: "The work is handled by our own specialists. A preliminary legal assessment of your business is free.",
    featureFourTitle: "Direct bank coordination",
    featureFourText: "We coordinate with Bank of China and Chouzhou so the bank receives a properly prepared application pack.",
    featureFiveTitle: "Three working languages",
    featureFiveText: "The team works in Russian, English and Chinese. Documents and filings are prepared in Chinese.",
    pricingEyebrow: "Packages and pricing",
    pricingTitle: "How much does it cost to open a company in China?",
    pricingLead: "Choose a standalone service or a complete solution. The final scope is confirmed after the consultation.",
    packageChinaLabel: "Company in China",
    packageChinaTitle: "WFOE formation",
    packageChinaText: "For trading, services and a local presence in the Chinese market.",
    from: "from",
    packageChinaOne: "Structure and city selection",
    packageChinaTwo: "Company incorporation",
    packageChinaThree: "Registered address for 12 months",
    packageChinaFour: "Russian-language support",
    choosePackage: "Discuss this package",
    packageBankLabel: "Financial infrastructure",
    packageBankTitle: "Bank account opening",
    packageBankText: "Corporate and personal accounts with banks in China and Hong Kong.",
    packageBankOne: "Bank suitability review",
    packageBankTwo: "Application and document preparation",
    packageBankThree: "Opening process support",
    packageBankFour: "International payment setup",
    popular: "Popular solution",
    packageHkTitle: "Hong Kong company",
    packageHkText: "A convenient international jurisdiction for import, export and IT.",
    packageHkOne: "Formation in 5–7 days",
    packageHkTwo: "Company secretary",
    packageHkThree: "Registered address for one year",
    packageHkFour: "Corporate document set",
    packageFullLabel: "Complete solution",
    packageFullTitle: "Hong Kong + China account",
    packageFullText: "Company registration and a multi-currency account with full support.",
    packageFullOne: "Hong Kong company registration",
    packageFullTwo: "Multi-currency account opening",
    packageFullThree: "Support at every stage",
    packageFullFour: "Payments consultation",
    readyEyebrow: "Fast start",
    readyTitle: "Acquire a ready-made company in China with a bank account",
    readyText: "We review the legal history, documents and company status, then support the transaction and ownership transfer.",
    readyCta: "Request available options",
    lawEyebrow: "Legal framework",
    lawTitle: "2023 Company Law",
    lawLead: "Branch, representative office or WFOE — we select the form based on your activity, ownership and banking needs.",
    lawChangesTitle: "What the law changed",
    lawChangeOne: "100% foreign ownership is permitted outside the negative list.",
    lawChangeTwo: "The law sets no general minimum capital for a WFOE.",
    lawChangeThree: "A registered address is mandatory for a SAMR filing.",
    lawChangeFour: "Many activities require an industry-specific licence.",
    capitalKicker: "Registered capital",
    capitalTitle: "Five-year contribution period",
    capitalText: "Companies formed before 30 June 2024 have a transition period ending on 30 June 2027.",
    safeKicker: "Foreign exchange control",
    safeTitle: "Separate SAFE registration",
    safeText: "A foreign-currency account must be registered separately from the company's main RMB account.",
    legalNote: "Website materials are for general information only. Formation and tax requirements are confirmed for each specific project.",
    processEyebrow: "How it works",
    processTitle: "From company name to business licence",
    processLead: "The full cycle usually takes 3–5 weeks. Remote formation under a power of attorney is available as a separate option.",
    stepOneTitle: "Name and business scope",
    stepOneText: "We check three name options with SAMR, reserve an available name and compare the business scope with the negative list.",
    stepTwoTitle: "Document preparation",
    stepTwoText: "We prepare the articles, shareholder resolutions and capital and address documents, then file with SAMR and MOFCOM.",
    stepThreeTitle: "Company registration",
    stepThreeText: "The company is entered in the register and receives a business licence with its Unified Social Credit Code (USCC).",
    stepFourTitle: "Tax and company chop",
    stepFourText: "We complete tax registration, obtain the TIN and arrange the company chop. The company can then proceed with banking.",
    documentsKicker: "Minimum document set",
    documentsTitle: "What we need from you",
    documentsText: "Our team prepares the rest.",
    documentOne: "Passport copies for shareholders and director",
    documentTwo: "Proof of residential address in English",
    documentThree: "A 2–3 sentence business activity description",
    documentFour: "Three proposed company names",
    complianceEyebrow: "After formation",
    complianceTitle: "Annual company obligations",
    complianceLead: "We help you keep up with reporting calendars, tax deadlines and corporate disclosure requirements.",
    reportingTitle: "Reporting and deadlines",
    reportingOne: "Annual NECIPS report — from 1 January to 30 June.",
    reportingTwo: "Corporate disclosure requirements — State Council Regulation No. 654.",
    reportingThree: "Final corporate income tax reconciliation — by 31 May.",
    taxTitle: "Tax obligations",
    taxOne: "Standard corporate income tax rate — 25%.",
    taxTwo: "Eligible small enterprises may qualify for an effective 5% rate through the end of 2027.",
    taxThree: "Main VAT rates depend on the transaction: 13%, 9% or 6%.",
    changesTitle: "New requirements",
    changesOne: "The new VAT law applies from 1 January 2026.",
    changesTwo: "Registered capital must be contributed within five years.",
    changesThree: "A foreign-currency account requires separate SAFE registration.",
    audienceEyebrow: "Who it is for",
    audienceTitle: "Why businesses form a company in China",
    audienceLead: "A local legal entity helps build direct relationships with Chinese partners and operate inside the domestic market.",
    audienceOne: "Direct work with factories",
    audienceTwo: "Import and export",
    audienceThree: "Brand localisation",
    audienceFour: "Domestic market sales",
    reviewsEyebrow: "Client notes",
    reviewsTitle: "Businesses already operating in China",
    ratingCaption: "average client rating",
    reviewOne: "The company delivered 100%. Sergey, our manager, explained everything clearly. In just one month we prepared the required documents and opened a legal entity in Shanghai so we could sell directly on marketplaces with advantages available in the Chinese market.",
    reviewOneInitials: "PP",
    reviewOneAuthor: "Poplevin Pavel",
    reviewOneType: "Zelenograd · Marketplace trading",
    reviewTwo: "They helped us register a company focused on sourcing vehicles in China and supplying them to Russia, with the ability to pay logistics costs and other expenses directly from China.",
    reviewTwoInitials: "IK",
    reviewTwoAuthor: "Khromov Ivan",
    reviewTwoType: "Rostov-on-Don · Automotive business",
    reviewThree: "With LAW B2B's support, we opened a company for wholesale tea supplies from China.",
    reviewThreeInitials: "NS",
    reviewThreeAuthor: "Nikita Somov",
    reviewThreeType: "Saint Petersburg · Wholesale trade",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "What to know before you begin",
    faqLead: "During the consultation, we confirm the requirements for your activity and ownership structure.",
    faqOneQ: "Is my chosen activity open to foreign investors?",
    faqOneA: "It depends on the current negative list and industry rules. We review the activity before preparing documents.",
    faqTwoQ: "How much registered capital is required?",
    faqTwoA: "There is no general minimum for a WFOE, but the amount should match the business plan, expected costs and industry requirements.",
    faqThreeQ: "Can the company be formed remotely?",
    faqThreeA: "Yes, formation may be completed under a power of attorney. A fully remote process depends on the structure and bank procedures.",
    faqFourQ: "How long does formation take?",
    faqFourA: "A standard cycle takes 3–5 weeks after the full document set is ready. Hong Kong formation can be faster.",
    faqFiveQ: "Can you help open a corporate bank account?",
    faqFiveA: "Yes. We select a suitable bank, prepare the application and support the process. The bank makes the final decision.",
    faqSixQ: "How is a ready-made company different from a new formation?",
    faqSixA: "A ready-made company can shorten the launch timeline, but its history, liabilities and banking status must be reviewed before the transaction.",
    finalEyebrow: "First step",
    finalTitle: "Let's discuss your project",
    finalText: "Tell us what the company will do. We will recommend a structure, registration city and suitable package.",
    finalCta: "Send an enquiry",
    footerDescription: "Company formation, banking and legal support for businesses in China and Hong Kong.",
    footerNavigation: "Navigation",
    footerContacts: "Contacts",
    footerOffice: "Shanghai office",
    footerPrivacy: "Privacy Policy",
    footerDisclaimer: "LAW B2B is a private consulting company and is not a government authority.",
    privacyBack: "← Back to home",
    privacyHome: "Home page"
  };

  const textElements = [...document.querySelectorAll("[data-i18n]")];
  const ariaElements = [...document.querySelectorAll("[data-i18n-aria-label]")];
  const placeholderElements = [...document.querySelectorAll("[data-i18n-placeholder]")];

  const russian = {};
  textElements.forEach((element) => {
    const key = element.dataset.i18n;
    russian[key] = element.textContent.trim();
  });
  ariaElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    russian[key] = element.getAttribute("aria-label") || "";
  });
  placeholderElements.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    russian[key] = element.getAttribute("placeholder") || "";
  });

  Object.assign(russian, {
    menuClose: "Закрыть меню",
    formSending: "Отправляем…",
    formSuccess: "Спасибо. Заявка отправлена — мы свяжемся с вами в ближайшее время.",
    formError: "Не удалось отправить заявку. Напишите нам в Telegram или WhatsApp.",
    formValidation: "Заполните обязательные поля и примите политику конфиденциальности."
  });

  const metadata = {
    home: {
      ru: {
        title: "Открытие компании в Китае и Гонконге — LAW B2B",
        description: "Регистрация WFOE и компаний в Гонконге, открытие банковских счетов и сопровождение бизнеса в Китае."
      },
      en: {
        title: "Company Formation in China and Hong Kong — LAW B2B",
        description: "WFOE and Hong Kong company formation, corporate banking and ongoing legal support for businesses in China."
      }
    },
    privacy: {
      ru: {
        title: "Политика конфиденциальности — LAW B2B",
        description: "Политика обработки персональных данных посетителей сайта lawb2b.ru."
      },
      en: {
        title: "Privacy Policy — LAW B2B",
        description: "Privacy and personal data processing policy for visitors to lawb2b.ru."
      }
    }
  };

  const languageButtons = [...document.querySelectorAll("[data-lang]")];
  const formLanguageFields = [...document.querySelectorAll("[data-form-language]")];
  let currentLanguage = "ru";

  function replaceText(element, value) {
    const decorativeChild = element.querySelector(":scope > [aria-hidden='true']");
    if (!decorativeChild) {
      element.textContent = value;
      return;
    }

    [...element.childNodes].forEach((node) => {
      if (node !== decorativeChild) node.remove();
    });
    element.insertBefore(document.createTextNode(`${value} `), decorativeChild);
  }

  function setLanguage(language, persist = true) {
    const dictionary = language === "en" ? english : russian;
    currentLanguage = language;
    document.documentElement.lang = language;

    textElements.forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) replaceText(element, value);
    });

    ariaElements.forEach((element) => {
      const value = dictionary[element.dataset.i18nAriaLabel];
      if (value) element.setAttribute("aria-label", value);
    });

    placeholderElements.forEach((element) => {
      const value = dictionary[element.dataset.i18nPlaceholder];
      if (value) element.setAttribute("placeholder", value);
    });

    languageButtons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    formLanguageFields.forEach((field) => {
      field.value = language;
    });

    const page = document.body.dataset.page === "privacy" ? "privacy" : "home";
    const pageMetadata = metadata[page][language];
    document.title = pageMetadata.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.setAttribute("content", pageMetadata.description);

    const url = new URL(window.location.href);
    if (language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", url);

    if (persist) {
      try {
        window.localStorage.setItem("lawb2b-language", language);
      } catch (_) {
        // Language preference remains active for the current page.
      }
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const params = new URLSearchParams(window.location.search);
  let preferredLanguage = params.get("lang") === "en" ? "en" : "ru";
  if (!params.has("lang")) {
    try {
      preferredLanguage = window.localStorage.getItem("lawb2b-language") === "en" ? "en" : "ru";
    } catch (_) {
      preferredLanguage = "ru";
    }
  }
  setLanguage(preferredLanguage, false);

  const header = document.querySelector("[data-header]");
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentLanguage === "en" ? english.menuOpen : russian.menuOpen);
    document.body.classList.remove("menu-open");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }
    mobileMenu.hidden = false;
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", currentLanguage === "en" ? english.menuClose : russian.menuClose);
    document.body.classList.add("menu-open");
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) closeMenu();
  });

  const revealElements = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px" });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-accordion] details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) return;
      document.querySelectorAll("[data-accordion] details[open]").forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
  });

  document.querySelectorAll("[data-started-at]").forEach((field) => {
    field.value = String(Date.now());
  });

  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    const message = form.querySelector("[data-form-message]");
    const submitButton = form.querySelector("button[type='submit']");
    const submitText = form.querySelector("[data-submit-text]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const dictionary = currentLanguage === "en" ? english : russian;

      form.querySelectorAll("input").forEach((input) => {
        input.toggleAttribute("aria-invalid", !input.checkValidity());
      });

      if (!form.checkValidity()) {
        form.reportValidity();
        message.textContent = dictionary.formValidation;
        message.className = "form-message is-error";
        return;
      }

      submitButton.disabled = true;
      submitText.textContent = dictionary.formSending;
      message.textContent = "";
      message.className = "form-message";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "X-Requested-With": "XMLHttpRequest" }
        });
        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) throw new Error("Unexpected response");
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || "Request failed");

        message.textContent = dictionary.formSuccess;
        message.className = "form-message is-success";
        form.reset();
        form.querySelector("[data-form-language]").value = currentLanguage;
        form.querySelector("[data-started-at]").value = String(Date.now());
      } catch (_) {
        message.textContent = dictionary.formError;
        message.className = "form-message is-error";
      } finally {
        submitButton.disabled = false;
        submitText.textContent = dictionary.formSubmit;
      }
    });

    form.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => input.removeAttribute("aria-invalid"));
      input.addEventListener("change", () => input.removeAttribute("aria-invalid"));
    });
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
