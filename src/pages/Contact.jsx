import { CONTACT } from "../data/content.js";
import { GlobeMark } from "../components/Icons.jsx";
import ContactForm from "./contact/ContactForm.jsx";
import ContactDetails from "./contact/ContactDetails.jsx";

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <GlobeMark className="contact-globe" />
        <div className="contact-wrap">
          <p className="contact-eyebrow">{CONTACT.eyebrow}</p>
          <h1>{CONTACT.title}</h1>
          <p className="contact-intro">{CONTACT.intro}</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-wrap contact-grid">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
    </div>
  );
}