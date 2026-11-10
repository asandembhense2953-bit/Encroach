import { Link } from "react-router-dom";
import { INTRO } from "../../data/content.js";
import { ArrowIcon, CheckIcon } from "../../components/Icons.jsx";

export default function Intro() {
  return (
    <section className="band light">
      <div className="wrap intro">
        <div>
          <p className="eyebrow">{INTRO.eyebrow}</p>
          <h2>{INTRO.title}</h2>
          <p className="lead">{INTRO.text}</p>
          <Link className="more" to={INTRO.cta.to}>
            {INTRO.cta.label}
            <ArrowIcon />
          </Link>
        </div>
        <ul className="points">
          {INTRO.points.map((p) => (
            <li key={p}>
              <CheckIcon />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
