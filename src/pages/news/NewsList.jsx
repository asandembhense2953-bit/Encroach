import { useState } from "react";
import { Link } from "react-router-dom";
import { NEWS } from "../../data/news.js";
import { ArrowIcon } from "../../components/Icons.jsx";
import CalendarIcon from "./CalendarIcon.jsx";

export default function NewsList() {
  const { items, perPage } = NEWS;
  const pages = Math.ceil(items.length / perPage);
  const [page, setPage] = useState(1);
  const shown = items.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="nws-list wrap">
      <ul className="nws-grid">
        {shown.map((n) => (
          <li key={n.id}>
            <div className="nws-photo">
                            <img src={`${import.meta.env.BASE_URL}${n.photo.slice(1)}`} alt="" loading="lazy" />
              <span className={`nws-pill ${n.tone}`}>{n.tag}</span>
            </div>
            <div className="nws-card-body">
              <h3>{n.title}</h3>
              <p className="nws-date"><CalendarIcon size={18} /> {n.date}</p>
              <p className="nws-text">{n.text}</p>
              <Link className="nws-more" to={`/news/${n.id}`}>
                Read More
                <ArrowIcon />
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <nav className="nws-pages" aria-label="News pages">
        {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            type="button"
            className={p === page ? "on" : ""}
            aria-current={p === page ? "page" : undefined}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          aria-label="Next page"
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          ›
        </button>
      </nav>
    </section>
  );
}