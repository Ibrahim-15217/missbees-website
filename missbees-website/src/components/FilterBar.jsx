import { useEffect, useRef, useState } from "react";

function FilterBar({ label, categories, active, onChange }) {
  const barRef = useRef(null);
  const [overflow, setOverflow] = useState({ left: false, right: false });

  const updateOverflow = () => {
    const el = barRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setOverflow({
      left: el.scrollLeft > 4,
      right: el.scrollLeft < maxScroll - 4 && maxScroll > 0,
    });
  };

  useEffect(() => {
    updateOverflow();
    const el = barRef.current;
    if (el) {
      el.addEventListener("scroll", updateOverflow, { passive: true });
      window.addEventListener("resize", updateOverflow);
      const activeBtn = el.querySelector(".filter-btn.active");
      if (activeBtn) {
        activeBtn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      }
      return () => {
        el.removeEventListener("scroll", updateOverflow);
        window.removeEventListener("resize", updateOverflow);
      };
    }
  }, [categories]);

  const scrollByAmount = (amount) => {
    barRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="filter-bar-wrap">
      <div
        className="filter-bar"
        ref={barRef}
        role="group"
        aria-label={label}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? "active" : ""}`}
            onClick={() => onChange(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {overflow.left && (
        <button
          className="filter-bar__arrow filter-bar__arrow--left"
          onClick={() => scrollByAmount(-240)}
          aria-label="Scroll filters left"
        >
          &lsaquo;
        </button>
      )}
      {overflow.right && (
        <button
          className="filter-bar__arrow filter-bar__arrow--right"
          onClick={() => scrollByAmount(240)}
          aria-label="Scroll filters right"
        >
          &rsaquo;
        </button>
      )}
    </div>
  );
}

export default FilterBar;