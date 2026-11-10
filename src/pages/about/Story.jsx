import { ABOUT } from "../../data/content.js";
import AboutIcon from "./AboutIcon.jsx";

export default function Story() {
  const { who, mission } = ABOUT;

  return (
    <section className="about-story">
      <div className="wrap about-story-grid">
        <div>
          <p className="about-kicker">{who.eyebrow}</p>
          <h2 className="about-heading">{who.title}</h2>
          {who.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="mission-card">
          <h2>{mission.title}</h2>
          <div className="mission-grid">
            {mission.items.map((item) => (
              <div className="mission-item" key={item.title}>
                <AboutIcon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}