import { useEffect, useState } from "react";
import { CloseIcon } from "./Icons.jsx";

export default function SearchPanel({ onClose }) {
  const [q, setQ] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    if (q.trim()) setSent(true);
  };

  return (
    <div className="search" role="dialog" aria-label="Search">
      <form className="search-inner" onSubmit={submit}>
        <label htmlFor="site-search" className="sr">
          Search the site
        </label>
        <input
          id="site-search"
          autoFocus
          type="search"
          placeholder="Search the site"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setSent(false);
          }}
        />
        <button type="submit" className="btn lime">
          Search
        </button>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close search">
          <CloseIcon />
        </button>
      </form>
      {sent && <p className="search-note">Search is not connected yet. It will use the site search once the backend exists.</p>}
    </div>
  );
}
