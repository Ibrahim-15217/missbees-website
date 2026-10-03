import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={close} aria-label="Missbees home">
          <img className="nav__logo" src="/images/logo.jpg" alt="Missbees logo" />
          <span className="nav__name">
            Miss<span>bees</span>
          </span>
        </NavLink>

        <button
          className={`nav__toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "active" : ""}`
              }
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav__cta">
            <Button to="/menu" variant="gold" size="sm" onClick={close}>
              View Menu
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;