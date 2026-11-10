import { Link } from "react-router-dom";
import { SERVICES } from "../../data/content.js";
import { ArrowIcon, SERVICE_ICONS } from "../../components/Icons.jsx";

export default function Services() {
  return (
    <section className="band soft">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{SERVICES.eyebrow}</p>
          <h2>{SERVICES.title}</h2>
        </header>
        <div className="cards three">
          {SERVICES.items.map((s) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <article className="card" key={s.title}>
                <span className="card-icon">
                  <Icon />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            );
          })}
        </div>
        <Link className="more center" to={SERVICES.cta.to}>
          {SERVICES.cta.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
