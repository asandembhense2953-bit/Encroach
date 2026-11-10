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
      { label: "Latest updates", href: "/news" },
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
    // CHANGED: services from the HTML file
    children: [
      { label: "Software Development", href: "/services" },
      { label: "Cyber Security", href: "/services" },
      { label: "DevOps & Automation", href: "/services" },
      { label: "Structured Cabling", href: "/services" },
      { label: "Network Engineering", href: "/services" },
      { label: "Consulting and Advisory Services", href: "/services" },
    ],
  },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Latest news", href: "/news" },
      { label: "Events", href: "/news" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery" },
      { label: "Videos", href: "/gallery" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// First slide matches the approved design. Partner and Grow are sample copy.
export const SLIDES = [
  {
    tab: "INNOVATE",
    lines: ["Secure.", "Inovate.", "Connect."],
    emphasis: " ",
    text: "Encroach Business Solutions & Projects delivers world-class Software Development, Cyber Security, DevOps, Structured Cabling & Network Engineering across South Africa.",
  },
  
];

export const SLIDE_INTERVAL_MS = 7000;

// ---------- Home page (below the hero). All copy here is sample text. ----------

export const INTRO = {
  eyebrow: "WHO WE ARE",
  title: "Innovative business solutions. Lasting impact.",
  text: "Encroach Business Solutions and Projects helps organisations plan smarter, deliver projects on time and grow the skills of their people.",
  points: [
    "Clear advice built around your goals",
    "Projects managed from first plan to final hand-over",
    "Training that leaves your team stronger",
  ],
  cta: { label: "About Encroach", to: "/about" },
};

export const SERVICES = {
  eyebrow: "WHAT WE DO",
  title: "Our services",
  items: [
    {
      icon: "advisory",
      title: "Business advisory",
      text: "Practical guidance on strategy, systems and day-to-day operations.",
    },
    {
      icon: "project",
      title: "Project management",
      text: "Plans, people and progress tracking that keep every project on course.",
    },
    {
      icon: "training",
      title: "Training and development",
      text: "Hands-on learning that builds confidence and lasting skills.",
    },
  ],
  cta: { label: "View all services", to: "/services" },
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
  blurb: "Innovative business solutions for a smarter, more connected future.",
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
    {
      title: "FOR OUR CLIENTS",
      links: [
        { label: "Business Solutions", to: "/business-solutions" },
        { label: "Project Support", to: "/project-support" },
        { label: "Client Portal", to: "/client-portal" },
        { label: "FAQs", to: "/faqs" },
        { label: "Support", to: "/support" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", to: "/documentation" },
        { label: "News & Updates", to: "/news" },
        { label: "Case Studies", to: "/case-studies" },
        { label: "Downloads", to: "/downloads" },
        { label: "Help Centre", to: "/help-centre" },
      ],
    },
  ],
  connect: {
    title: "CONNECT WITH US",
    text: "Let's build a better future together.",
  },
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Sitemap", to: "/sitemap" },
  ],
};

// Replace each url with the real company page when you have it.
export const SOCIAL = [
  { id: "facebook", label: "Facebook", url: "#" },
  { id: "linkedin", label: "LinkedIn", url: "#" },
  { id: "youtube", label: "YouTube", url: "#" },
  { id: "x", label: "X", url: "#" },
];


// ---------- Contact page ----------

// The contact details below come from the approved design. Replace them with the real ones.
export const CONTACT = {
  eyebrow: "GET IN TOUCH",
  title: "Contact Us",
  intro: "We’d love to hear from you. Send us a message and we’ll get back to you.",
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
    { icon: "mail", label: "Email", value: "info@encroach.co.za" },
    { icon: "phone", label: "Phone", value: "+27 31 123 4567" },
    { icon: "pin", label: "Address", value: "123 Business Ave, Durban, KZN" },
    { icon: "clock", label: "Office Hours", value: "Mon – Fri: 08:00 – 17:00" },
  ],
  mapUrl: "https://www.google.com/maps?q=Durban&output=embed",
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
        text: "To be the trusted partner that empowers small and medium-sized businesses by solving their most pressing challenges.",
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