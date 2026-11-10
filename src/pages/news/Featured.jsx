import { Link } from "react-router-dom";
import { NEWS } from "../../data/news.js";
import { ArrowIcon } from "../../components/Icons.jsx";
import CalendarIcon from "./CalendarIcon.jsx";

export default function Featured() {
  const f = NEWS.featured;

  return (
    <section className="nws-featured wrap">
      <img src={f.photo} alt="" />
      <div className="nws-featured-text">
        <span className="nws-pill lime">{f.tag}</span>
        <p className="nws-meta">
          <span><CalendarIcon /> {f.date}</span>
          <span className="nws-sep" aria-hidden="true" />
          <span><CalendarIcon /> {f.category}</span>
        </p>
        <h2>{f.title}</h2>
        <p className="nws-featured-copy">{f.text}</p>
        <Link className="nws-read-btn" to={`/news/${f.id}`}>
          Read More
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}