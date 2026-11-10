import { ABOUT } from "../../data/content.js";
import AboutIcon from "./AboutIcon.jsx";

export default function Values() {
  const { title, intro, items } = ABOUT.values;

  return (
    <section className="about-values">
      <div className="wrap">
        <h2 className="about-heading center">{title}</h2>
        <p className="values-intro">{intro}</p>
        <ul className="values-grid">
          {items.map((item) => (
            <li key={item.title}>
              <AboutIcon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}