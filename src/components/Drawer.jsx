import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV } from "../data/content.js";
import { CloseIcon } from "./Icons.jsx";

export default function Drawer({ onClose, onLogin, onSignUp }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="scrim" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer-top">
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu" autoFocus>
            <CloseIcon />
          </button>
        </div>
        <div className="drawer-actions">
          <button type="button" className="btn lime" onClick={onLogin}>
            Login
          </button>
          <button type="button" className="btn ghost" onClick={onSignUp}>
            Sign up
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Menu">
          {NAV.map((item) =>
            item.children ? (
              <details key={item.label}>
                <summary>{item.label}</summary>
                <ul>
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <Link to={c.href} onClick={onClose}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link key={item.label} className="drawer-link" to={item.href} onClick={onClose}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      </aside>
    </div>
  );
}