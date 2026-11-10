import { ABOUT } from "../../data/content.js";

export default function AboutHero() {
  const { eyebrow, title, tagline } = ABOUT.hero;

  return (
    <section className="about-hero">
      <div className="wrap">
        <p className="about-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="about-tagline">{tagline}</p>
        <span className="about-bar" aria-hidden="true" />
      </div>
    </section>
  );
}