import { Link } from "react-router-dom";
import restaurant from "../data/restaurant";
import OpeningHours from "./OpeningHours";

const currentYear = new Date().getFullYear();

const socialIcons = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.3 1.2-3.3 3.4V11H8.3v3h2.9v7h2.3z" />
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.4 2.2 1.8 3.6 3.9 3.9v3c-1.5 0-2.9-.5-3.9-1.3v6.4c0 3.6-2.5 6.2-5.8 6.2-3.1 0-5.6-2.6-5.6-5.7 0-3.1 2.5-5.7 5.6-5.7h.5v3.1c-1.5.4-2.6 1.6-2.6 3.1 0 1.4 1 2.4 2.2 2.4 1.3 0 2.3-1.1 2.3-2.8V3h3.4z" />
    </svg>
  ),
  x: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.4 8.5L23 22h-6.9l-5.2-6.6L5 22H2l7.9-9L2 2h7.1l4.7 6 4.1-6z" />
    </svg>
  ),
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/images/logo.jpg" alt="Missbees logo" />
              <span className="footer__name">
                Miss<span>bees</span>
              </span>
            </div>
            <p className="footer__desc">{restaurant.description}</p>
          </div>

          <div>
            <h4 className="footer__title">Explore</h4>
            <nav className="footer__links" aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="footer__title">Contact</h4>
            <nav className="footer__links" aria-label="Contact information">
              <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>
              <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
              <span>{restaurant.address}</span>
              <span>Daily catering available</span>
            </nav>
          </div>

          <div>
            <h4 className="footer__title">Opening Hours</h4>
            <OpeningHours compact footer />
          </div>
        </div>

        <div className="footer__bottom">
          <div style={{ marginBottom: "0.8rem" }}>
            <div className="socials" style={{ justifyContent: "center" }}>
              {Object.entries(restaurant.socialMedia).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={key}>
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>
          <p>
            &copy; {currentYear} Missbees. All rights reserved. Built with{" "}
            <span aria-hidden="true">passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;