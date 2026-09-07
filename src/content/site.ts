/**
 * All editable website content lives here — Arabic (ar) and English (en).
 * Edit text, services, stats, testimonials, FAQ and contact details below.
 */

export type Lang = "ar" | "en";

export const contact = {
  phone: "+20 XXX XXX XXXX",
  email: "info@legalpoint.com",
  addressAr: "الإسكندرية، مصر",
  addressEn: "Alexandria, Egypt",
  hoursAr: "السبت – الخميس | 9:00 صباحًا – 6:00 مساءً",
  hoursEn: "Saturday – Thursday | 9:00 AM – 6:00 PM",
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  whatsapp: "#",
};

/** Easily editable statistics */
export const stats = [
  { value: "10+", ar: "سنوات من الخبرة", en: "Years of Experience" },
  { value: "500+", ar: "عميل", en: "Clients Served" },
  { value: "1000+", ar: "استشارة قانونية", en: "Legal Consultations" },
  { value: "95%", ar: "رضا العملاء", en: "Client Satisfaction" },
];

export const serviceIcons = [
  "scale",
  "fileText",
  "building",
  "gavel",
  "briefcase",
  "userCheck",
] as const;

export const t = {
  ar: {
    dir: "rtl" as const,
    brand: "Legal Point",
    metaTitle: "Legal Point | خدمات واستشارات قانونية احترافية",
    metaDescription:
      "Legal Point تقدم خدمات واستشارات قانونية احترافية للأفراد والشركات مع حلول قانونية موثوقة وسرية.",
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "about", label: "من نحن" },
      { id: "services", label: "خدماتنا" },
      { id: "why", label: "لماذا Legal Point" },
      { id: "contact", label: "تواصل معنا" },
    ],
    ctaBook: "احجز استشارتك",
    ctaContact: "تواصل معنا",
    menu: "القائمة",
    hero: {
      eyebrow: "مكتب استشارات وخدمات قانونية",
      headline: "حلول قانونية موثوقة. استشارات احترافية.",
      body: "تقدم Legal Point خدمات واستشارات قانونية متخصصة لمساعدتك على حماية حقوقك، ودعم أعمالك، واتخاذ قرارات قانونية بثقة.",
      secondary: "اكتشف خدماتنا",
      trust: [
        "استشارات قانونية متخصصة",
        "سرية وخصوصية تامة",
        "حلول قانونية تركز على العميل",
      ],
      imageAlt: "مكتب قانوني فاخر يضم ميزان العدالة ومجلدات قانونية",
    },
    about: {
      label: "من نحن",
      title: "شريكك القانوني الموثوق",
      body: "في Legal Point نؤمن بأن الدعم القانوني الفعّال يبدأ بفهم احتياجات عملائنا وأهدافهم. نقدم استشارات وخدمات قانونية احترافية وحلولًا عملية مصممة لتناسب الأفراد ورواد الأعمال والشركات.",
      values: [
        {
          title: "الخبرة",
          body: "معرفة قانونية متخصصة وحلول عملية تناسب مختلف الاحتياجات.",
        },
        {
          title: "النزاهة",
          body: "الشفافية والسرية والالتزام بأعلى المعايير المهنية.",
        },
        {
          title: "الالتزام",
          body: "دعم مستمر وتركيز كامل على تحقيق أفضل النتائج الممكنة لعملائنا.",
        },
      ],
    },
    services: {
      label: "خدماتنا",
      title: "خدماتنا القانونية",
      subtitle: "دعم قانوني شامل مصمم لتلبية احتياجاتك.",
      more: "معرفة المزيد",
      items: [
        {
          title: "الاستشارات القانونية",
          body: "استشارات قانونية متخصصة لمساعدتك على فهم حقوقك والتزاماتك والخيارات المتاحة أمامك.",
        },
        {
          title: "صياغة ومراجعة العقود",
          body: "صياغة ومراجعة وتحليل العقود لحماية مصالحك وتقليل المخاطر القانونية.",
        },
        {
          title: "قانون الشركات والأعمال",
          body: "دعم قانوني للشركات ورواد الأعمال والمشروعات الناشئة وأصحاب الأعمال.",
        },
        {
          title: "التمثيل القانوني",
          body: "تمثيل ودعم قانوني احترافي في النزاعات والإجراءات القانونية.",
        },
        {
          title: "الخدمات القانونية التجارية",
          body: "حلول قانونية للأنشطة التجارية والمعاملات والشراكات والعلاقات التجارية.",
        },
        {
          title: "الخدمات القانونية للأفراد",
          body: "استشارات ودعم قانوني للأفراد في مختلف المسائل والاحتياجات القانونية.",
        },
      ],
    },
    why: {
      label: "لماذا نحن",
      title: "لماذا تختار Legal Point؟",
      items: [
        { title: "الخبرة القانونية", body: "فريق قانوني متخصص يقدم حلولًا عملية وفعالة." },
        { title: "حلول مخصصة", body: "نصمم حلولنا وفقًا لاحتياجات كل عميل." },
        {
          title: "السرية والخصوصية",
          body: "نتعامل مع جميع الاستشارات والقضايا بأعلى مستويات الخصوصية والسرية.",
        },
        { title: "وضوح التواصل", body: "نشرح الأمور القانونية بطريقة واضحة وبسيطة." },
        { title: "دعم موثوق", body: "نلتزم بدعم عملائنا خلال جميع مراحل الخدمة القانونية." },
      ],
    },
    process: {
      label: "آلية العمل",
      title: "كيف نعمل؟",
      steps: [
        { title: "تواصل معنا", body: "شاركنا احتياجاتك القانونية." },
        { title: "الاستشارة", body: "ناقش حالتك مع فريقنا القانوني." },
        { title: "تحديد الحل", body: "نحدد أفضل استراتيجية وحل قانوني مناسب." },
        { title: "ابدأ بثقة", body: "اتخذ الخطوة التالية بدعم قانوني احترافي." },
      ],
    },
    testimonials: {
      label: "آراء العملاء",
      title: "آراء عملائنا",
      items: [
        {
          quote:
            "قدمت لنا Legal Point استشارة قانونية واضحة واحترافية وساعدتنا على فهم جميع الخيارات المتاحة أمامنا.",
          name: "أ. م.",
          role: "عميل أفراد",
        },
        {
          quote: "فريق محترف ومتجاوب وموثوق. شعرنا بالدعم الكامل طوال فترة التعامل.",
          name: "س. ح.",
          role: "صاحب شركة",
        },
        {
          quote:
            "ساعدنا الفريق على فهم التفاصيل القانونية وتقديم حلول عملية تناسب احتياجات أعمالنا.",
          name: "م. ع.",
          role: "مدير تنفيذي",
        },
      ],
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "أسئلة يتكرر طرحها",
      items: [
        {
          q: "كيف يمكنني حجز استشارة قانونية؟",
          a: "يمكنك حجز استشارتك بإرسال النموذج في قسم التواصل أو الاتصال بنا هاتفيًا، وسيتم التواصل معك لتحديد الموعد المناسب.",
        },
        {
          q: "ما هي الخدمات القانونية التي تقدمونها؟",
          a: "نقدم الاستشارات القانونية، وصياغة ومراجعة العقود، وخدمات قانون الشركات والأعمال، والتمثيل القانوني، والخدمات التجارية، وخدمات الأفراد.",
        },
        {
          q: "هل تقدمون خدمات قانونية للشركات؟",
          a: "نعم، نقدم دعمًا قانونيًا متكاملًا للشركات والمشروعات الناشئة ورواد الأعمال، من التأسيس إلى العقود والمعاملات التجارية.",
        },
        {
          q: "هل الاستشارات سرية؟",
          a: "جميع الاستشارات والمعلومات تُعامل بسرية تامة وفقًا لأعلى المعايير المهنية والأخلاقية.",
        },
        {
          q: "كم يستغرق الحصول على الاستشارة؟",
          a: "نتواصل معك عادةً في نفس يوم العمل، ويتم تحديد موعد الاستشارة في أقرب وقت مناسب لك.",
        },
        {
          q: "هل يمكنني التواصل معكم قبل اتخاذ قرار بشأن القضية؟",
          a: "بالتأكيد، يمكنك التواصل معنا لمناقشة حالتك ومعرفة الخيارات المتاحة قبل اتخاذ أي قرار.",
        },
      ],
    },
    finalCta: {
      title: "هل تحتاج إلى استشارة قانونية متخصصة؟",
      body: "تواصل مع Legal Point اليوم واتخذ خطوتك التالية بثقة.",
    },
    contactSection: {
      label: "تواصل معنا",
      title: "تحدث معنا حول احتياجاتك القانونية",
      body: "شاركنا تفاصيل احتياجك القانوني وسيقوم فريقنا بالتواصل معك.",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      hours: "ساعات العمل",
      mapLabel: "موقع المكتب",
      form: {
        name: "الاسم بالكامل",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        service: "الخدمة المطلوبة",
        servicePlaceholder: "اختر الخدمة",
        message: "رسالتك",
        submit: "إرسال الطلب",
        success: "تم إرسال طلبك بنجاح. سنتواصل معك قريبًا.",
      },
    },
    footer: {
      description: "خدمات واستشارات قانونية احترافية يمكنك الوثوق بها.",
      linksTitle: "روابط سريعة",
      contactTitle: "معلومات التواصل",
      links: [
        { id: "home", label: "الرئيسية" },
        { id: "about", label: "من نحن" },
        { id: "services", label: "خدماتنا" },
        { id: "contact", label: "تواصل معنا" },
        { id: "privacy", label: "سياسة الخصوصية" },
        { id: "terms", label: "الشروط والأحكام" },
      ],
      copyright: "© 2026 Legal Point. جميع الحقوق محفوظة.",
    },
  },

  en: {
    dir: "ltr" as const,
    brand: "Legal Point",
    metaTitle: "Legal Point | Professional Legal Services & Consultations",
    metaDescription:
      "Legal Point provides professional legal services and consultations for individuals and businesses with trusted, confidential, and practical legal solutions.",
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About Us" },
      { id: "services", label: "Services" },
      { id: "why", label: "Why Legal Point" },
      { id: "contact", label: "Contact" },
    ],
    ctaBook: "Book a Consultation",
    ctaContact: "Contact Us",
    menu: "Menu",
    hero: {
      eyebrow: "Legal Services & Consultation Office",
      headline: "Trusted Legal Solutions. Professional Advice.",
      body: "Legal Point provides professional legal services and consultations designed to protect your rights, support your business, and help you make confident legal decisions.",
      secondary: "Explore Our Services",
      trust: ["Professional Legal Advice", "Confidential & Secure", "Client-Focused Solutions"],
      imageAlt: "Premium law office with brass scales of justice and legal volumes",
    },
    about: {
      label: "About Us",
      title: "Your Trusted Legal Partner",
      body: "At Legal Point, we believe that effective legal support begins with understanding our clients and their goals. We provide professional legal consultations and practical legal solutions tailored to individuals, entrepreneurs, and businesses.",
      values: [
        { title: "Expertise", body: "Professional knowledge and practical legal guidance." },
        {
          title: "Integrity",
          body: "Transparency, confidentiality, and ethical professional standards.",
        },
        {
          title: "Commitment",
          body: "Dedicated support focused on achieving the best possible outcome for our clients.",
        },
      ],
    },
    services: {
      label: "Services",
      title: "Our Legal Services",
      subtitle: "Comprehensive legal support tailored to your needs.",
      more: "Learn More",
      items: [
        {
          title: "Legal Consultations",
          body: "Professional legal advice to help you understand your rights, obligations, and available options.",
        },
        {
          title: "Contract Review & Drafting",
          body: "Drafting, reviewing, and analyzing contracts to protect your interests and minimize legal risks.",
        },
        {
          title: "Corporate & Business Law",
          body: "Legal support for companies, startups, entrepreneurs, and business owners.",
        },
        {
          title: "Legal Representation",
          body: "Professional representation and legal support in disputes and legal proceedings.",
        },
        {
          title: "Commercial Legal Services",
          body: "Legal solutions for commercial activities, transactions, partnerships, and business relationships.",
        },
        {
          title: "Personal Legal Services",
          body: "Legal consultations and support for individuals in various personal and legal matters.",
        },
      ],
    },
    why: {
      label: "Why Us",
      title: "Why Choose Legal Point?",
      items: [
        {
          title: "Professional Expertise",
          body: "Experienced legal professionals focused on providing practical and effective solutions.",
        },
        {
          title: "Personalized Approach",
          body: "Every client receives solutions tailored to their specific situation and objectives.",
        },
        {
          title: "Confidentiality",
          body: "We handle every case and consultation with the highest level of privacy and confidentiality.",
        },
        {
          title: "Clear Communication",
          body: "We explain legal matters clearly and keep our clients informed.",
        },
        {
          title: "Reliable Support",
          body: "We remain committed to supporting our clients throughout the legal process.",
        },
      ],
    },
    process: {
      label: "Our Process",
      title: "How It Works",
      steps: [
        { title: "Contact Us", body: "Tell us about your legal needs." },
        { title: "Consultation", body: "Discuss your situation with our legal team." },
        { title: "Legal Strategy", body: "We identify the best legal approach for your case." },
        { title: "Take Action", body: "Move forward with professional legal support." },
      ],
    },
    testimonials: {
      label: "Testimonials",
      title: "What Our Clients Say",
      items: [
        {
          quote:
            "Legal Point provided clear and professional advice and helped us understand every option available to us.",
          name: "A. M.",
          role: "Private Client",
        },
        {
          quote:
            "Professional, responsive, and highly trustworthy. We felt supported throughout the entire process.",
          name: "S. H.",
          role: "Business Owner",
        },
        {
          quote:
            "The team explained everything clearly and provided practical legal solutions for our business.",
          name: "M. A.",
          role: "Managing Director",
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How can I book a legal consultation?",
          a: "Send the form in the contact section or call us directly, and our team will get back to you to schedule a suitable time.",
        },
        {
          q: "What legal services do you provide?",
          a: "We provide legal consultations, contract drafting and review, corporate and business law, legal representation, commercial legal services, and personal legal services.",
        },
        {
          q: "Do you provide legal services for businesses?",
          a: "Yes. We support companies, startups, and entrepreneurs from incorporation through contracts and commercial transactions.",
        },
        {
          q: "Are consultations confidential?",
          a: "Every consultation and document is handled with complete confidentiality under the highest professional and ethical standards.",
        },
        {
          q: "How quickly can I receive legal advice?",
          a: "We usually respond within the same business day and arrange your consultation at the earliest convenient time.",
        },
        {
          q: "Can I contact Legal Point before deciding to proceed with a case?",
          a: "Absolutely. You can reach out to discuss your situation and understand your options before making any decision.",
        },
      ],
    },
    finalCta: {
      title: "Need Professional Legal Advice?",
      body: "Speak with Legal Point today and take the next step with confidence.",
    },
    contactSection: {
      label: "Contact",
      title: "Let's Talk About Your Legal Needs",
      body: "Share the details of your legal matter and our team will get back to you.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Working Hours",
      mapLabel: "Office Location",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        service: "Service Required",
        servicePlaceholder: "Select a service",
        message: "Message",
        submit: "Send Inquiry",
        success: "Your inquiry has been sent. We will contact you shortly.",
      },
    },
    footer: {
      description: "Professional legal services and consultations you can trust.",
      linksTitle: "Quick Links",
      contactTitle: "Contact Information",
      links: [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contact" },
        { id: "privacy", label: "Privacy Policy" },
        { id: "terms", label: "Terms & Conditions" },
      ],
      copyright: "© 2026 Legal Point. All Rights Reserved.",
    },
  },
};

export type Copy = Omit<(typeof t)["en"], "dir"> & { dir: "rtl" | "ltr" };
