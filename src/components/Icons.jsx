export function Logo({ className = "" }) {
  return (
    <svg className={className} viewBox="55 38 595 375" role="img" aria-label="Encroach logo">
      <defs>
        <linearGradient id="logo-lime" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9be22b" />
          <stop offset="1" stopColor="#6fc41f" />
        </linearGradient>
        <linearGradient id="logo-teal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#18a99c" />
          <stop offset="1" stopColor="#0b6d82" />
        </linearGradient>
      </defs>
      <polygon points="65,75 152,75 322,350 350,405" fill="url(#logo-lime)" />
      <polygon points="635,75 548,75 378,350 350,405" fill="url(#logo-lime)" />
      <polygon points="135,58 565,58 350,395" fill="url(#logo-teal)" stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
      <rect x="130" y="42" width="440" height="9" rx="3" fill="#fff" />
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="9">
        <circle cx="338" cy="175" r="72" />
        <ellipse cx="338" cy="175" rx="30" ry="72" />
        <path d="M266 175h144M280 135h116M280 215h116" strokeWidth="7" />
        <path d="M244 168c8-34 32-52 62-60M244 168l6-24M244 168l24-6" strokeWidth="8" />
      </g>
    </svg>
  );
}

export function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 12 8" width="11" height="7" aria-hidden="true">
      <path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 28 20" width="28" height="20" aria-hidden="true">
      <path d="M1 2h26M1 10h26M1 18h26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 12" width="16" height="12" aria-hidden="true">
      <path d="M1 6h13M9 1.5L14 6l-5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FootChevron() {
  return (
    <svg viewBox="0 0 8 12" width="8" height="12" aria-hidden="true">
      <path d="M1.5 1.5L6 6l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="var(--lime)" />
      <path d="M5.5 10.2l3 3 6-6.2" fill="none" stroke="#0b2a05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Service icons share one style: outline strokes drawn on a 48px grid.
const serviceProps = { viewBox: "0 0 48 48", width: 44, height: 44, fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export function AdvisoryIcon() {
  return (
    <svg {...serviceProps}>
      <path d="M6 40h36M10 40V26M20 40V16M30 40V22M40 40V8" />
      <path d="M8 18l10-8 8 6 14-10" />
    </svg>
  );
}

export function ProjectIcon() {
  return (
    <svg {...serviceProps}>
      <rect x="8" y="8" width="32" height="34" rx="4" />
      <path d="M17 8V5h14v3M16 20l3 3 6-6M16 33h16" />
    </svg>
  );
}

export function TrainingIcon() {
  return (
    <svg {...serviceProps}>
      <path d="M4 18L24 8l20 10-20 10z" />
      <path d="M12 23v10c0 3 6 6 12 6s12-3 12-6V23M44 18v12" />
    </svg>
  );
}

export const SERVICE_ICONS = { advisory: AdvisoryIcon, project: ProjectIcon, training: TrainingIcon };

export function SocialIcon({ id }) {
  const paths = {
    facebook: "M14 8.5V6.9c0-.8.2-1.2 1.3-1.2H17V2.5h-2.6C11.3 2.5 10 4.3 10 6.6v1.9H7.5v3.3H10v9.7h4v-9.7h2.6l.4-3.3z",
    linkedin: "M4.5 9h3.8v11.5H4.5zM6.4 3.3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM10.5 9h3.6v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.8h-3.8v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2h-3.8z",
    youtube: "M22 8.2a2.7 2.7 0 0 0-1.9-1.9C18.5 5.9 12 5.9 12 5.9s-6.5 0-8.1.4A2.7 2.7 0 0 0 2 8.2C1.6 9.8 1.6 12 1.6 12s0 2.2.4 3.8a2.7 2.7 0 0 0 1.9 1.9c1.6.4 8.1.4 8.1.4s6.5 0 8.1-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.6.4-3.8.4-3.8s0-2.2-.4-3.8zM10 15V9l5.2 3z",
    x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  };
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d={paths[id]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}


// ---------- Contact page ----------

const contactProps = { viewBox: "0 0 24 24", width: 28, height: 28, fill: "currentColor", "aria-hidden": true };

export function MailIcon() {
  return (
    <svg {...contactProps}>
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 6.3L2 5.9zM2 8.3l9.5 6a1 1 0 0 0 1 0L22 8.3v10.2a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...contactProps}>
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg {...contactProps}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...contactProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 6.5V12l3.5 2" />
    </svg>
  );
}

export function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path d="M10 5.5v5.5M10 13.5v1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export const CONTACT_ICONS = { mail: MailIcon, phone: PhoneIcon, pin: PinIcon, clock: ClockIcon };

export function GlobeMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="16" aria-hidden="true">
      <circle cx="200" cy="200" r="170" />
      <ellipse cx="200" cy="200" rx="75" ry="170" />
      <path d="M30 200h340M60 120h280M60 280h280" />
    </svg>
  );
}