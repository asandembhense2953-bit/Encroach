export const SERVICES = {
  hero: {
    eyebrow: "OUR SERVICES",
    title: "Services",
    tagline: "Expert solutions. Real impact.",
  },
  // text = short summary on the card. details + points = shown under "Read more".
  cards: [
    {
      icon: "software",
      title: "Software Development",
      text: "Custom web and mobile apps and enterprise systems, built to scale.",
      details: "Custom web & mobile apps, enterprise systems, AI solutions, and legacy modernisation. Built with modern frameworks and delivered on time.",
      points: ["Custom CRM & ERP", "Mobile apps (iOS & Android)", "Cloud-native SaaS platforms"],
    },
    {
      icon: "security",
      title: "Cyber Security",
      text: "Protect your business with testing, monitoring and compliance.",
      details: "Penetration testing, SOC-as-a-Service, compliance (POPIA/GDPR), threat hunting, and zero-trust architecture. Protect what matters most.",
      points: ["Vulnerability assessments", "24/7 Security Operations Centre", "Employee phishing training"],
    },
    {
      icon: "devops",
      title: "DevOps & Automation",
      text: "Faster, safer releases with automated pipelines and cloud.",
      details: "CI/CD pipelines, infrastructure as code, Kubernetes orchestration, monitoring, and cloud cost optimisation. Move faster with confidence.",
      points: ["AWS, Azure & Google Cloud", "GitOps & Terraform", "Automated deployment pipelines"],
    },
    {
      icon: "cabling",
      title: "Structured Cabling",
      text: "Certified office, campus and fibre cabling that lasts.",
      details: "CAT6A, fibre optic, data centre cabling, PoE installations, and full building infrastructure. Certified, future-proof wiring solutions.",
      points: ["Office & campus cabling", "Fibre to the building (FTTB)", "10-year warranty on all installs"],
    },
    {
      icon: "network",
      title: "Network Engineering",
      text: "Reliable Wi-Fi, SD-WAN and secure networks for every site.",
      details: "Wi-Fi 6E deployment, SD-WAN, firewall configuration, network segmentation, and 5G-ready infrastructure. Reliable connectivity, always.",
      points: ["Enterprise Wi-Fi & mesh", "MPLS & broadband failover", "Remote site connectivity"],
    },
    {
      icon: "consulting",
      title: "Consulting and Advisory Services",
      text: "Expert help with funding, grants and tender applications.",
      details: "We provide expert guidance to South African SMEs seeking funding and financial support. Our team assists with identifying opportunities and navigating the full application process for finance from various sources.",
      points: [
        "Funding needs assessment & strategy",
        "SETA grant & discretionary funding applications",
        "Tender preparation and submission support",
        "Finance for operational needs and business expansion",
        "Business case development and investment readiness",
      ],
    },
  ],
  enquire: { label: "Enquire", to: "/contact" },
  how: {
    title: "How We Work",
    tagline: "A clear process. Lasting results.",
    steps: [
      { icon: "consult", title: "Consult", text: "We understand your needs." },
      { icon: "plan", title: "Plan", text: "We design a solution." },
      { icon: "deliver", title: "Deliver", text: "We bring the plan to life." },
      { icon: "support", title: "Support", text: "We help you succeed." },
    ],
  },
  cta: {
    title: "Let’s grow together",
    text: "Get in touch with us today.",
    button: { label: "Contact Us", to: "/contact" },
  },
};