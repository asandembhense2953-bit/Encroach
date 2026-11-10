import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SLIDES, SLIDE_INTERVAL_MS } from "../../data/content.js";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [bar, setBar] = useState({ left: 0, width: 0 });
  const [photoOk, setPhotoOk] = useState(true);
  const tabRefs = useRef([]);
  const slide = SLIDES[active];

  // Move the lime segment under the active tab.
  useLayoutEffect(() => {
    const measure = () => {
      const el = tabRefs.current[active];
      if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Auto-advance, unless paused or the viewer prefers reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return undefined;
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-photo">
              {photoOk && <img src={`${import.meta.env.BASE_URL}hero.webp`} alt="" onError={() => setPhotoOk(false)} />}
      </div>

      <div className="hero-panel">
        <div className="hero-copy">
          <h1 key={active} className="fade">
            {slide.lines.map((l, i) => (
              <span className="line" key={l}>
                {l}
                {i === slide.lines.length - 1 && (
                  <>
                    {" "}
                    <em>{slide.emphasis}</em>
                  </>
                )}
              </span>
            ))}
          </h1>

          <div className="progress" aria-hidden="true">
            <span className="progress-seg" style={{ left: bar.left, width: bar.width }} />
          </div>

          <div className="tabs" role="tablist" aria-label="Focus areas">
            {SLIDES.map((s, i) => (
              <button
                key={s.tab}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? "tab on" : "tab"}
                onClick={() => setActive(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>

          <p key={`t${active}`} className="hero-text fade">
            {slide.text}
          </p>
        </div>
      </div>
    </section>
  );
}
