import { TESTIMONIALS } from "../../data/content.js";

export default function Testimonials() {
  return (
    <section className="band light">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{TESTIMONIALS.eyebrow}</p>
          <h2>{TESTIMONIALS.title}</h2>
        </header>
        <div className="cards three">
          {TESTIMONIALS.items.map((t) => (
            <figure className="card quote" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
