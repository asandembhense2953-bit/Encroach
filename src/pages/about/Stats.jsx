import { ABOUT } from "../../data/content.js";

export default function Stats() {
  const { numbers, facts } = ABOUT.stats;

  return (
    <section className="about-stats">
      <div className="wrap">
        <ul className="stats-row">
          {numbers.map((n) => (
            <li key={n.label}>
              <strong>{n.value}</strong>
              <span>{n.label}</span>
            </li>
          ))}
        </ul>
        <ul className="facts-row">
          {facts.map((f) => (
            <li key={f.label}>
              <span>{f.label}</span>
              <strong>{f.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}