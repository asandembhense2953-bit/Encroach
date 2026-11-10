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
            return (
              <li key={d.label}>
                <Icon />
                <div>
                  <strong>{d.label}</strong>
                  <span>{d.value}</span>
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