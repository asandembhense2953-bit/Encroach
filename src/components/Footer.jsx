import { Link } from "react-router-dom";
import { BRAND, FOOTER, SOCIAL } from "../data/content.js";
import { FootChevron, Logo, SocialIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glass">
        <div className="footer-main">
          <div className="foot-brand">
            <Link className="brand" to="/" aria-label={`${BRAND.name} home`}>
              <Logo className="brand-logo" />
              <span className="brand-rule" aria-hidden="true" />
              <span className="brand-text">
                <span className="brand-name">{BRAND.name}</span>
                <span className="brand-tag">{BRAND.tagline}</span>
              </span>
            </Link>
            <span className="foot-accent" aria-hidden="true" />
            <p className="foot-blurb">{FOOTER.blurb}</p>
          </div>

          {FOOTER.columns.map((col) => (
            <nav className="foot-col" key={col.title} aria-label={col.title}>
              <h2 className="foot-title">{col.title}</h2>
              <ul className="foot-links">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to}>
                      <FootChevron />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="foot-col foot-connect">
            <h2 className="foot-title">{FOOTER.connect.title}</h2>
            <p>{FOOTER.connect.text}</p>
            <ul className="social">
              {SOCIAL.map((s) => (
                <li key={s.id}>
                  <a href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <SocialIcon id={s.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Encroach Business Solutions and Projects. All Rights Reserved.</p>
          <ul className="legal">
            {FOOTER.legal.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}