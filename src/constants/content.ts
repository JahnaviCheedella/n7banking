export const navLinks = [
  { label: "SOLUTIONS", href: "#solutions", hasDropdown: true },
  { label: "RESOURCES", href: "#digital-banking", hasDropdown: true },
  { label: "ABOUT US", href: "#case-studies", hasDropdown: false },
];

export const heroContent = {
  headline: "The new foundation of modern banking",
  subheadline:
    "We drive innovation and growth, provide seamless customer experience and operational excellence",
  ctaPrimary: "REQUEST DEMO",
  ctaSecondary: "CONTACT US",
};

export const trustedByLogos = [
  { name: "SHELLS",        asset: "logoShell"       },
  { name: "SmartFinder",   asset: "logoSmartFinder"  },
  { name: "Zoomerr",       asset: "logoZoomerr"      },
  { name: "ArtVenue",      asset: "logoArtVenue"     },
  { name: "kontrastr",     asset: "logoKontrastr"    },
  { name: "WAVESMARATHON", asset: "logoWaves"        },
] as const;

export const solutionsContent = {
  heading: "All of our solutions are tailor-made to your needs",
  items: [
    {
      title: "Core Banking CB7",
      subtitle: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      icon: "iconCoreBanking",
    },
    {
      title: "Digital Banking N7",
      subtitle: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
      icon: "iconDigitalBanking",
    },
    {
      title: "Open Banking",
      subtitle: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      icon: "iconOpenBanking",
    },
    {
      title: "Loan Origination System",
      subtitle: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
      icon: "iconLoanOrigination",
    },
    {
      title: "Loan Management System",
      subtitle: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
      icon: "iconLoanManagement",
    },
  ],
};

export const coreBankingContent = {
  heading: "A complete cloud-based core banking.",
  subtitle: "Faster time to market with our cloud-based core banking services",
};

export const ckycContent = {
  heading: "Run a more efficient, flexible,and digitally connected corebanking system",
  subheading: "What you will get:",
  featuresLeft: [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ],
  featuresRight: [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ],
};

export const paperlessCTAContent = {
  heading: "Take the full advantage of going paper-less now.",
  subtitle:
    "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees.",
  ctaPrimary: "REQUEST DEMO",
  ctaSecondary: "CONTACT US",
};

export const tickerItems = [
  "Digital Banking", "AML Monitoring", "CKYC", "Open Banking", "Core Banking",
  "Mobile First", "Cloud Native", "Compliance Ready", "Real-Time Payments",
];

export const digitalBankingContent = {
  heading: "Digital banking out-of-the-box",
  body: "N7 helps your financial institution improve the client experience, automate and optimize procedures",
  cta: "REQUEST DEMO",
  cards: [
    {
      title: "Fully compliant with regulatory requirement",
      body: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
      features: [
        "Pre-integrated Security System",
        "Fully Compliant With Regulatory Requirement",
        "Digitally Connected Core",
      ],
      phoneImage: "phoneHome" as const,
      phoneLeft: true,
    },
    {
      title: "No legacy IT systems",
      body: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
      features: [
        "Adaptive & Intelligent API monetization",
        "Ambient User Experience",
        "Cloud-native With lower TCO",
      ],
      phoneImage: "phoneAnalytics" as const,
      phoneLeft: false,
    },
    {
      title: "No traditional branches",
      body: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
      features: [
        "Branchless & Paperless Banking",
        "Digital Transformation Capability",
        "Optimized, Adoptable and Scalable",
      ],
      phoneImage: "phoneProfile" as const,
      phoneLeft: true,
    },
  ],
};

export const caseStudiesContent = {
  heading: "Our Case Studies",
  items: [
    {
      tag: "getting started",
      title: "How we help brands reach out to more people",
      image: "gettingStarted" as const,
    },
    {
      tag: "compliance",
      title: "Automated AML reporting for modern financial institutions",
      image: "gettingStarted" as const,
    },
    {
      tag: "digital banking",
      title: "Building the next generation mobile banking experience",
      image: "gettingStarted" as const,
    },
  ],
};
