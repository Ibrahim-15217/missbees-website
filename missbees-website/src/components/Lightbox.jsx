import { useEffect, useCallback } from "react";

function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    },
    [items.length, index, onClose, onNavigate]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, item]);

  if (!item) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close lightbox">
        &times;
      </button>
      <button
        className="lightbox__btn lightbox__prev"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
      >
        &#8249;
      </button>
      <img className="lightbox__img" src={item.image} alt={item.title} onClick={(e) => e.stopPropagation()} />
      <button
        className="lightbox__btn lightbox__next"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        aria-label="Next image"
      >
        &#8250;
      </button>
      <p className="lightbox__caption">
        {item.title} &mdash; {index + 1} / {items.length}
      </p>
    </div>
  );
}

export default Lightbox;