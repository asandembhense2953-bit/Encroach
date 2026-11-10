import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services.js";
import { ArrowIcon } from "../../components/Icons.jsx";
import ServicesIcon from "./ServicesIcon.jsx";

export default function ServiceCards() {
  const { cards, enquire } = SERVICES;

  return (
    <section className="svc-cards">
      <div className="wrap">
        <ul className="svc-grid">
          {cards.map((c) => (
            <li key={c.title}>
              <ServicesIcon name={c.icon} />
              <h2>{c.title}</h2>
              <p>{c.text}</p>
              <Link className="svc-enquire" to={enquire.to}>
                {enquire.label}
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}