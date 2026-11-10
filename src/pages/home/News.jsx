import { Link } from "react-router-dom";
import { NEWS } from "../../data/content.js";
import { ArrowIcon } from "../../components/Icons.jsx";

export default function News() {
  return (
    <section className="band light">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{NEWS.eyebrow}</p>
          <h2>{NEWS.title}</h2>
        </header>
        <div className="cards three">
          {NEWS.items.map((n) => (
            <Link className="card news-card" to={n.to} key={n.title}>
              <span className="tag">{n.tag}</span>
              <h3>{n.title}</h3>
              <span className="more">
                Read more
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
        <Link className="more center" to={NEWS.cta.to}>
          {NEWS.cta.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
