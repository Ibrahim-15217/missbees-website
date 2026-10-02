import restaurant from "../data/restaurant";

function OpeningHours({ compact = false, footer = false }) {
  const className = footer
    ? "hours hours--footer"
    : "hours";

  return (
    <ul className={className} style={{ maxWidth: "none" }}>
      {restaurant.openingHours.map((row) => (
        <li
          key={row.day}
          className="hours__row"
          style={!compact ? undefined : { padding: "0.45rem 0" }}
        >
          <span className="hours__day">{row.day}</span>
          <span className="hours__time">{row.hours}</span>
        </li>
      ))}
    </ul>
  );
}

export default OpeningHours;