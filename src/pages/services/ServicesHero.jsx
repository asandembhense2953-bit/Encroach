import { SERVICES } from "../../data/services.js";

export default function ServicesHero() {
  const { eyebrow, title, tagline } = SERVICES.hero;

  return (
    <section className="svc-hero">
      <div className="wrap">
        <p className="svc-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="svc-tagline">{tagline}</p>
        <span className="svc-bar" aria-hidden="true" />
      </div>
    </section>
  );
}