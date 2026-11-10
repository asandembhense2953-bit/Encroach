import { Link } from "react-router-dom";
import { CALL_TO_ACTION as CTA } from "../../data/content.js";

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <h2>{CTA.title}</h2>
          <p>{CTA.text}</p>
        </div>
        <div className="cta-actions">
          <Link className="btn lime" to={CTA.primary.to}>
            {CTA.primary.label}
          </Link>
          <Link className="btn ghost" to={CTA.secondary.to}>
            {CTA.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
