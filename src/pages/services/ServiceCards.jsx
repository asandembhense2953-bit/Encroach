import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services.js";
import { ArrowIcon } from "../../components/Icons.jsx";
import ServicesIcon from "./ServicesIcon.jsx";

export default function ServiceCards() {
  const { cards, enquire } = SERVICES;
  const [open, setOpen] = useState(null);

  return (
    <section className="svc-cards">
      <div className="wrap">
        <ul className="svc-grid">
          {cards.map((c) => {
            const isOpen = open === c.title;
            return (
              <li key={c.title}>
                <ServicesIcon name={c.icon} />
                <h2>{c.title}</h2>
                <p>{c.text}</p>

                {isOpen && (
                  <div className="svc-more">
                    <p>{c.details}</p>
                    <ul className="svc-points">
                      {c.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <Link className="svc-enquire" to={enquire.to}>
                      {enquire.label}
                      <ArrowIcon />
                    </Link>
                  </div>
                )}

                <button
                  type="button"
                  className="svc-readmore"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : c.title)}
                >
                  {isOpen ? "Show less" : "Read more"}
                  <ArrowIcon />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}