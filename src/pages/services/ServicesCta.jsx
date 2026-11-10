import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services.js";
import { ArrowIcon } from "../../components/Icons.jsx";

export default function ServicesCta() {
  const { title, text, button } = SERVICES.cta;

  return (
    <section className="svc-cta">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn lime svc-cta-btn" to={button.to}>
          {button.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}