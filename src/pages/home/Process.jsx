import { PROCESS } from "../../data/content.js";

export default function Process() {
  return (
    <section className="band dark">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{PROCESS.eyebrow}</p>
          <h2>{PROCESS.title}</h2>
        </header>
        <ol className="steps">
          {PROCESS.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
