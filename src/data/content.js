// All text on the site lives here. Edit freely.
// Items marked "sample" are placeholders until the real pages are decided.

export const BRAND = {
  name: "ENCROACH",
  tagline: "BUSINESS SOLUTIONS AND PROJECTS",
};

// Dropdown items are sample content.
export const NAV = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Overview", href: "/" },
      
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who we are", href: "/about" },
      { label: "Our team", href: "/about" },
      { label: "Partners", href: "/about" },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  
    { label: "Delivered Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

// First slide matches the approved design. Partner and Grow are sample copy.
export const SLIDES = [
  {
    tab: "INNOVATE",
    lines: ["Secure.", "Innovate.", "Connect."],
    emphasis: " ",
    text: "Encroach Business Solutions & Projects delivers world-class Software Development, Cyber Security, DevOps, Structured Cabling & Network Engineering across South Africa.",
  },
  
];

export const SLIDE_INTERVAL_MS = 7000;

// ---------- Home page (below the hero). All copy here is sample text. ----------

export const INTRO = {
  eyebrow: "WHO WE ARE",
  title: "A proudly South African technology powerhouse.",
  text: "We blend deep local market insight with international best practices to deliver reliable, scalable, and future-proof technology solutions for small and medium-sized businesses.",
  points: [
    "100% black-owned and established in 2018",
    "120+ projects delivered, 98% client retention",
    "24/7 support across South Africa",
  ],
  cta: { label: "About Encroach", to: "/about" },
};

export const SERVICES = {
  eyebrow: "WHAT WE DO",
  title: "Our services",
  items: [
    {
      icon: "software",
      title: "Software Development",
      text: "Custom web and mobile apps, enterprise systems, AI solutions, and legacy modernisation.",
    },
    {
      icon: "security",
      title: "Cyber Security",
      text: "Penetration testing, SOC-as-a-Service, POPIA/GDPR compliance and zero-trust architecture.",
    },
    {
      icon: "devops",
      title: "DevOps & Automation",
      text: "CI/CD pipelines, infrastructure as code, Kubernetes, monitoring and cloud cost optimisation.",
    },
    {
      icon: "cabling",
      title: "Structured Cabling",
      text: "CAT6A, fibre optic, data centre cabling and full building infrastructure.",
    },
    {
      icon: "network",
      title: "Network Engineering",
      text: "Wi-Fi 6E, SD-WAN, firewall configuration, network segmentation and 5G-ready infrastructure.",
    },
    {
      icon: "consulting",
      title: "Consulting and Advisory Services",
      text: "Expert guidance for South African SMEs seeking funding, grants and tender support.",
    },
  ],
  cta: { label: "View all services", to: "/services" },
};

export const TESTIMONIALS = {
  eyebrow: "TESTIMONIALS",
  title: "What our clients say",
  items: [
    {
      quote: "Encroach transformed our outdated network infrastructure into a secure, lightning-fast backbone. Their team was professional, on time, and gave us peace of mind.",
      name: "Thabo Mkhize",
      role: "CEO, Kinno's (Newcastle)",
    },
    {
      quote: "The custom inventory management software they built saved us over R800k in the first year. Their cyber security audit also prevented a major breach. 10/10 service!",
      name: "Naledi Khumalo",
      role: "Operations Director, Cape Agri Co-op",
    },
    {
      quote: "DevOps transformation + full office cabling done in record time. Their team understood our business needs better than anyone else we've worked with.",
      name: "Dr. Sipho Dlamini",
      role: "IT Manager, Netcare Hospitals",
    },
  ],
};

export const PROCESS = {
  eyebrow: "HOW WE WORK",
  title: "A simple way to get results",
  steps: [
    { title: "Listen", text: "We start by understanding your goals and challenges." },
    { title: "Plan", text: "Together we agree a clear, realistic plan of action." },
    { title: "Deliver", text: "Our team puts the plan to work and reports progress." },
    { title: "Support", text: "We stay close after launch to make the impact last." },
  ],
};

export const NEWS = {
  eyebrow: "NEWS & UPDATES",
  title: "Latest from Encroach",
  items: [
    { tag: "News", title: "Sample headline: a new project begins", to: "/news" },
    { tag: "Event", title: "Sample headline: join our next workshop", to: "/news" },
    { tag: "Update", title: "Sample headline: what is new in our services", to: "/news" },
  ],
  cta: { label: "All news", to: "/news" },
};

export const CALL_TO_ACTION = {
  title: "Let's build a better future together.",
  text: "Tell us about your business or project and we will help you take the next step.",
  primary: { label: "Contact us", to: "/contact" },
  secondary: { label: "Our services", to: "/services" },
};

// ---------- Footer (shown on every page) ----------

export const FOOTER = {
  blurb: "Proudly South African. Powering the digital future of African businesses.",
  columns: [
    {
      title: "QUICK LINKS",
      links: [
        { label: "About Encroach", to: "/about" },
        { label: "Our Services", to: "/services" },
        { label: "Projects", to: "/projects" },
        
        { label: "Careers", to: "/careers" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    
  ],
  connect: {
    title: "CONNECT WITH US",
    text: "Johannesburg • Mpumalanga • Newcastle. Serving all of South Africa & SADC region.",
  },
  
};

// Replace each url with the real company page when you have it.
export const SOCIAL = [
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/27828707544" },
  { id: "x", label: "X", url: "https://x.com/EncroachAnd" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/encroach-business-solutions-and-projects-it-business-solutions" },
];


// ---------- Contact page ----------

// The contact details below come from the approved design. Replace them with the real ones.
export const CONTACT = {
  eyebrow: "GET IN TOUCH",
  title: "Contact Us",
  intro: "Whether you need a full digital transformation, a security overhaul, or fibre cabling for your new office — our team is ready. We reply within 2 hours during business days.",
  // CHANGED: services from the HTML file
  subjects: [
    "General enquiry",
    "Software Development",
    "Cyber Security",
    "DevOps & Automation",
    "Structured Cabling",
    "Network Engineering",
    "Consulting and Advisory Services",
    "Other",
  ],
    details: [
    {
      icon: "mail",
      label: "Email the team",
      lines: [
        { text: "shabalalas@encroach.co.za", href: "mailto:shabalalas@encroach.co.za" },
        { text: "madonselasp@encroach.co.za", href: "mailto:madonselasp@encroach.co.za" },
      ],
    },
    {
      icon: "phone",
      label: "Call us directly",
      lines: [
        { text: "+27 82 870 7544", href: "tel:+27828707544" },
        { text: "+27 78 160 5062", href: "tel:+27781605062" },
      ],
    },
    { icon: "phone", label: "WhatsApp", value: "Chat on WhatsApp with +27 82 870 7544", href: "https://wa.me/27828707544" },
    { icon: "pin", label: "Visit our HQ", value: "143 River Rd, Kyalami Height, Midrand, Johannesburg, 1684" },
    { icon: "clock", label: "Office Hours", value: "Mon – Fri: 08:00 – 17:00 SAST" },
  ],
  mapUrl: "https://www.google.com/maps?q=143+River+Rd,+Kyalami+Heights,+Midrand,+1684&output=embed",
};


// ---------- About page ----------

export const ABOUT = {
  hero: {
    eyebrow: "LEARN MORE",
    title: "About Us",
    tagline: "Secure. Innovate. Connect.",
  },
  who: {
    eyebrow: "EST. 2018 • JOHANNESBURG, SOUTH AFRICA",
    title: "Who we are",
    paragraphs: [
      "Encroach Business Solutions and Projects is a 100% black-owned company. We are a proudly South African technology powerhouse.",
      "We blend deep local market insight with international best practices to deliver reliable, scalable, and future-proof technology solutions.",
      "Our vision is to be the trusted partner that empowers small and medium-sized businesses by solving their most pressing challenges — from technical infrastructure and cybersecurity to operational efficiency and sustainable growth.",
    ],
  },
  mission: {
    title: "Mission & Vision",
    items: [
      {
        icon: "mission",
        title: "Our Mission",
        text: "We exist to empower South African small and medium-sized businesses with reliable, innovative, and future-focused IT solutions.",
      },
      {
        icon: "vision",
        title: "Our Vision",
        text: "To be the trusted partner that empowers small and medium-sized businesses by solving their most pressing challenges — from technical infrastructure and cybersecurity to operational efficiency and sustainable growth.",
      },
    ],
  },
  stats: {
    numbers: [
      { value: "120+", label: "Projects delivered" },
      { value: "98%", label: "Client retention rate" },
      { value: "24/7", label: "Support across SA" },
    ],
    facts: [
      { label: "Head Office", value: "Johannesburg, Gauteng" },
      { label: "Branches", value: "Mpumalanga • Newcastle" },
      { label: "Clients in", value: "9 Provinces" },
    ],
  },
  values: {
    title: "Our Values",
    intro:
      "By blending international standards with local insight, we deliver customer-centric services built on respect, transparency, and excellence — helping our clients work smarter, grow faster, and achieve sustainable success.",
    items: [
      { icon: "integrity", title: "Respect", text: "We put our clients and people first." },
      { icon: "vision", title: "Transparency", text: "We keep our work clear and honest." },
      { icon: "excellence", title: "Excellence", text: "We deliver work built to last." },
    ],
  },
  // Add real team members here: { name, role, photo: "/team/name.webp" }. The Team section stays hidden while this list is empty.
  team: {
    title: "Our Team",
    members: [],
  },
  cta: {
    title: "Let’s build something unstoppable together.",
    button: { label: "Contact Us", to: "/contact" },
  },
};