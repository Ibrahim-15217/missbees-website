function GalleryCard({ item, onOpen }) {
  return (
    <figure className="g-card" onClick={() => onOpen(item)} role="button" tabIndex={0} aria-label={`Open image: ${item.title}`} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(item)}>
      <img src={item.image} alt={item.title} loading="lazy" />
      <figcaption className="g-card__overlay">
        <span className="g-card__title">{item.title}</span>
      </figcaption>
    </figure>
  );
}

export default GalleryCard;