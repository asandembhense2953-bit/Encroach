import { Link } from "react-router-dom";
import { SERVICES } from "../../data/content.js";
import { ArrowIcon } from "../../components/Icons.jsx";
import ServicesIcon from "../services/ServicesIcon.jsx";

export default function Services() {
  return (
    <section className="band soft">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{SERVICES.eyebrow}</p>
          <h2>{SERVICES.title}</h2>
        </header>
        <div className="cards three">
          {SERVICES.items.map((s) => (
            <article className="card" key={s.title}>
              <span className="card-icon">
                <ServicesIcon name={s.icon} size={36} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <Link className="more center" to={SERVICES.cta.to}>
          {SERVICES.cta.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
