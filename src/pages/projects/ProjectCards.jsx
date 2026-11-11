import { PROJECTS } from "../../data/projects.js";

export default function ProjectCards() {
  const { items } = PROJECTS;
  const base = import.meta.env.BASE_URL;

  return (
    <section className="prj-list">
      <div className="wrap">
        <ul className="prj-grid">
          {items.map((p) => (
            <li key={p.id}>
              <div className="prj-photo">
                <img src={`${base}${encodeURI(p.photo.slice(1))}`} alt="" loading="lazy" />
                <span className={`prj-pill ${p.tone}`}>{p.tag}</span>
              </div>
              <div className="prj-body">
                <h3>{p.title}</h3>
                <p className="prj-text">{p.text}</p>
                <div className="prj-foot">
                  <span>{p.duration} • {p.place}</span>
                  <strong className="prj-result">{p.result}</strong>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}