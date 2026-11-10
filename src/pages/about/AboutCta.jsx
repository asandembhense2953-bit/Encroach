import { Link } from "react-router-dom";
import { ABOUT } from "../../data/content.js";
import { ArrowIcon } from "../../components/Icons.jsx";

export default function AboutCta() {
  const { title, button } = ABOUT.cta;

  return (
    <section className="about-cta">
      <div className="wrap">
        <h2>{title}</h2>
        <span className="about-bar center" aria-hidden="true" />
        <Link className="btn lime about-cta-btn" to={button.to}>
          {button.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}