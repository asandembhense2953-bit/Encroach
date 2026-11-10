import { NEWS } from "../../data/news.js";

export default function NewsHero() {
  const { eyebrow, title, tagline } = NEWS.hero;

  return (
    <section className="nws-hero">
      <div className="wrap">
        <p className="nws-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <span className="nws-bar" aria-hidden="true" />
        <p className="nws-tagline">{tagline}</p>
      </div>
    </section>
  );
}