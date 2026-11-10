import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BRAND, NAV } from "../data/content.js";
import { Chevron, Logo, MenuIcon, SearchIcon } from "./Icons.jsx";

export default function Navbar({ onSearch, onMenu }) {
  const [open, setOpen] = useState(null); // label of the open dropdown
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  return (
    <header className="nav" ref={ref}>
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label={`${BRAND.name} home`}>
          <Logo className="brand-logo" />
          <span className="brand-rule" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-name">{BRAND.name}</span>
            <span className="brand-tag">{BRAND.tagline}</span>
          </span>
        </Link>

        <nav className="links" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div
                className="item"
                key={item.label}
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  className="link"
                  aria-expanded={open === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                >
                  {item.label}
                  <Chevron />
                </button>
                {open === item.label && (
                  <ul className="drop">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link to={c.href} onClick={() => setOpen(null)}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link className="link" key={item.label} to={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="tools">
          <span className="tools-rule" aria-hidden="true" />
          <button type="button" className="icon-btn" onClick={onSearch} aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className="icon-btn" onClick={onMenu} aria-label="Open menu">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
