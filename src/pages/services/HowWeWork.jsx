import { SERVICES } from "../../data/services.js";
import ServicesIcon from "./ServicesIcon.jsx";

export default function HowWeWork() {
  const { title, tagline, steps } = SERVICES.how;

  return (
    <section className="svc-how">
      <div className="wrap">
        <h2 className="svc-how-title">{title}</h2>
        <p className="svc-how-tagline">{tagline}</p>
        <span className="svc-bar center" aria-hidden="true" />
        <ol className="svc-steps">
          {steps.map((s) => (
            <li key={s.title}>
              <span className="svc-step-icon">
                <ServicesIcon name={s.icon} size={34} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}