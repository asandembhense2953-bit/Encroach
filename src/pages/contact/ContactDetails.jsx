import { CONTACT } from "../../data/content.js";
import { CONTACT_ICONS } from "../../components/Icons.jsx";

export default function ContactDetails() {
  return (
    <aside className="contact-side">
      <div className="contact-card">
        <h2 className="details-title">OUR DETAILS</h2>
        <ul className="details">
          {CONTACT.details.map((d) => {
            const Icon = CONTACT_ICONS[d.icon];
            const lines = d.lines ?? [{ text: d.value, href: d.href }];
            return (
              <li key={d.label}>
                <Icon />
                <div>
                  <strong>{d.label}</strong>
                  {lines.map((l) =>
                    l.href ? (
                      <a key={l.text} href={l.href} {...(l.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}>
                        {l.text}
                      </a>
                    ) : (
                      <span key={l.text}>{l.text}</span>
                    )
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="contact-card contact-map">
        <iframe title="Our location on the map" src={CONTACT.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </aside>
  );
}