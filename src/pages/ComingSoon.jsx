import { Link, useLocation } from "react-router-dom";

// Shown for every page that is not built yet.
export default function ComingSoon() {
  const { pathname } = useLocation();
  const name = pathname.replace(/^\//, "").replace(/-/g, " ") || "This page";

  return (
    <section className="soon">
      <div className="soon-inner">
        <p className="eyebrow">COMING SOON</p>
        <h1>{name}</h1>
        <p>This page is not built yet. We will add it next.</p>
        <Link className="btn lime" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
