import { PROJECTS } from "../../data/projects.js";

export default function ProjectsHero() {
  const { eyebrow, title, tagline } = PROJECTS.hero;

  return (
    <section className="prj-hero">
      <div className="wrap">
        <p className="prj-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="prj-tagline">{tagline}</p>
        <span className="prj-bar" aria-hidden="true" />
      </div>
    </section>
  );
}