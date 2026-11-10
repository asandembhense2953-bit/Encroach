import { ABOUT } from "../../data/content.js";

export default function Team() {
  const { title, members } = ABOUT.team;

  if (members.length === 0) return null;

  return (
    <section className="about-team">
      <div className="wrap">
        <h2 className="about-heading center">{title}</h2>
        <ul className="team-grid">
          {members.map((m) => (
            <li key={m.name}>
                            <img src={`${import.meta.env.BASE_URL}${m.photo.slice(1)}`} alt={m.name} width="120" height="120" loading="lazy" />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}