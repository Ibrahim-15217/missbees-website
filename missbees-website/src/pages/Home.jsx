import { Link } from "react-router-dom";
import restaurant from "../data/restaurant";
import menuItems from "../data/menu";
import galleryItems from "../data/gallery";
import testimonials from "../data/testimonials";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FoodCard from "../components/FoodCard";
import GalleryCard from "../components/GalleryCard";
import OpeningHours from "../components/OpeningHours";
import Reveal from "../components/Reveal";
import Icon from "../components/icons";

const heroBg =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80";

function Home() {
  const featured = menuItems.filter((m) => m.featured).slice(0, 6);
  const preview = galleryItems.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <span className="hero__badge">100% Nigerian Flavours &amp; Catering</span>
            <h1 className="hero__title">
              <em>Authentic Taste.</em>
              <br />
              Memorable Experience.
            </h1>
            <p className="hero__sub">{restaurant.description}</p>
            <div className="hero__cta">
              <Button to="/menu" variant="gold" size="lg">
                Explore Our Menu
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section section--cream">
        <div className="container">
          <div className="story-grid">
            <Reveal className="story-grid__media">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Inside the Missbees restaurant"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <span className="section-eyebrow">About Our Restaurant</span>
              <h2 className="section-title">Passion on every plate</h2>
              <p className="section-sub">{restaurant.about}</p>
              <div style={{ marginTop: "1.8rem" }}>
                <Button to="/about" variant="primary" size="lg">
                  Read More
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="From Our Kitchen"
              title="Featured Dishes"
              sub="Handpicked favourites our guests come back for again and again."
              center
            />
          </Reveal>
          <div className="grid grid--3">
            {featured.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 100}>
                <FoodCard item={item} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Button to="/menu" variant="dark" size="lg">
                View Full Menu
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="The Missbees Difference"
              title="Why Choose Us"
              sub="Everything we do is built on one promise: food worth remembering."
              center
            />
          </Reveal>
          <div className="grid grid--3">
            {restaurant.whyChooseUs.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100}>
                <div className="feature-card" style={{ background: "var(--color-panel)", borderColor: "var(--color-border-dark)" }}>
                  <div className="feature-card__icon">
                    <Icon name={f.icon} />
                  </div>
                  <h3 className="feature-card__title" style={{ color: "var(--color-warm-white)" }}>
                    {f.title}
                  </h3>
                  <p className="feature-card__text" style={{ color: "var(--color-muted-dark)" }}>
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Catering Services"
              title="We Cater Every Occasion"
              sub="From intimate gatherings to weddings with hundreds of guests, we bring the feast to you."
              center
            />
          </Reveal>
          <div className="grid grid--4">
            {restaurant.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 100}>
                <div className="service-card">
                  <div className="service-card__icon">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__text">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Button to="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Our Gallery"
              title="A Glimpse of Missbees"
              sub="Food, atmosphere and the moments we have been honoured to be part of."
              center
            />
          </Reveal>
          <div className="grid grid--3">
            {preview.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 100}>
                <Link to="/gallery" aria-label={`View gallery: ${item.title}`}>
                  <GalleryCard item={item} onOpen={() => {}} />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Button to="/gallery" variant="dark" size="lg">
                View Gallery
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="What People Say"
              title="Loved by Our Guests"
              center
            />
          </Reveal>
          <div className="grid grid--3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 100}>
                <blockquote className="quote" style={{ background: "var(--color-panel)" }}>
                  <p className="quote__text" style={{ color: "var(--color-warm-white)" }}>
                    {t.text}
                  </p>
                  <footer className="quote__author" style={{ color: "var(--color-muted-dark)" }}>
                    {t.name} <span>{t.event}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPENING HOURS + LOCATION */}
      <section className="section section--cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <SectionTitle
                eyebrow="Visit Us"
                title="Opening Hours"
                sub="Come hungry — we are here to feed you."
              />
              <div className="hours" style={{ maxWidth: "none", background: "var(--color-bg-dark)", borderRadius: "var(--radius)", padding: "1.6rem 1.8rem" }}>
                <OpeningHours compact />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionTitle
                eyebrow="Find Us"
                title="Our Location"
                sub={restaurant.address}
              />
              <div className="info-line">
                <span className="info-line__icon"><Icon name="pin" /></span>
                <div>
                  <div className="info-line__label">Address</div>
                  <div className="info-line__value">{restaurant.address}</div>
                </div>
              </div>
              <div className="info-line">
                <span className="info-line__icon"><Icon name="phone" /></span>
                <div>
                  <div className="info-line__label">Call Us</div>
                  <div className="info-line__value">
                    <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                <Button href={restaurant.mapDirections} variant="primary">
                  Get Directions
                </Button>
                <Button to="/contact" variant="dark">
                  Contact Page
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--color-bg-dark)", paddingTop: "3.5rem", paddingBottom: "6rem" }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <div className="cta__glow" aria-hidden="true" />
              <h3 className="cta__title">Ready for a Great Meal?</h3>
              <p className="cta__sub">Explore our menu or get in touch with us today. Let us make your next meal — or your next event — unforgettable.</p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <Button to="/menu" variant="gold" size="lg">
                  View Menu
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;