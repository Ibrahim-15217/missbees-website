function FoodCard({ item }) {
  const formatPrice = (price) => `N${price.toLocaleString("en-NG")}`;

  return (
    <article className="card">
      <div className="card__media">
        {item.badge && <span className="card__badge">{item.badge}</span>}
        <span className="card__cat">{item.category}</span>
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{item.name}</h3>
        <p className="card__desc">{item.description}</p>
        <div className="card__meta">
          <span className="card__price">{formatPrice(item.price)}</span>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;