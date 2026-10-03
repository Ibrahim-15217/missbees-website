import { Link } from "react-router-dom";

function Button({
  to,
  href,
  onClick,
  variant = "primary",
  size = "",
  children,
  className = "",
  type = "button",
}) {
  const classes = `btn btn--${variant} ${size ? `btn--${size}` : ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;