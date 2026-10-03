import restaurant from "../data/restaurant";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import Icon from "../components/icons";

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

const contactFields = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number (Optional)", type: "tel" },
  { name: "subject", label: "Subject", required: true },
  { name: "message", label: "Message", component: "textarea", required: true },
];

const cateringFields = [
  { name: "fullName", label: "Customer Name", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  {
    name: "eventType",
    label: "Event Type",
    component: "select",
    required: true,
    full: true,
    options: ["Wedding", "Birthday", "Corporate Event", "Private Event", "Other"],
  },
  { name: "eventDate", label: "Event Date", type: "date", required: true },
  { name: "eventLocation", label: "Event Location", required: true, full: true },
  { name: "guests", label: "Number of Guests", type: "number", required: true },
  {
    name: "service",
    label: "Requested Service",
    component: "select",
    required: true,
    full: true,
    options: ["Full Catering", "Buffet Service", "Finger Food / Small Chops", "Drinks Package", "Custom Request"],
  },
  { name: "message", label: "Message / Special Requests", component: "textarea", full: true },
];

const panelItems = [
  {
    icon: "phone",
    label: "Call Us",
    value: restaurant.phone,
    href: `tel:${restaurant.phone}`,
  },
  {
    icon: "mail",
    label: "Email Us",
    value: restaurant.email,
    href: `mailto:${restaurant.email}`,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`,
  },
  {
    icon: "pin",
    label: "Visit Us",
    value: restaurant.address,
    href: restaurant.mapDirections,
    gold: true,
  },
];

function Contact() {
  return (
    <>
      <Seo
        title="Contact & Catering Enquiries"
        description="Contact Missbees Restaurant & Catering by phone, email, WhatsApp or our contact form. Get a catering quote for your event."
      />

      <PageHero
        crumb="Contact"
        eyebrow="Talk to Us"
        title="Contact Missbees"
        sub="Questions, orders, reservations or event quotes — we would love to hear from you."
      />

      {/* INQUIRIES */}
      <section className="section section--cream contact-ribbon">
        <div className="container">
          <div className="contact-split">
            <Reveal>
              <div className="contact-panel">
                <div className="contact-panel__glow" aria-hidden="true" />
                <h2 className="contact-panel__title">Get in touch directly</h2>
                <p className="contact-panel__sub">Prefer to talk to a human? Reach us any of these ways.</p>

                <ul className="contact-list">
                  {panelItems.map((item) => (
                    <li key={item.label}>
                      <a className="contact-list__item" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        <span className={`contact-list__icon ${item.gold ? "contact-list__icon--gold" : ""}`}>
                          <Icon name={item.icon} />
                        </span>
                        <span>
                          <span className="contact-list__label">{item.label}</span>
                          <div className="contact-list__value">{item.value}</div>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="socials">
                  {Object.entries(restaurant.socialMedia).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={key}>
                      {socialIcons[key]}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h2 className="section-title" style={{ fontSize: "1.7rem", marginBottom: "0.4rem" }}>Send us a message</h2>
                <p className="section-sub" style={{ marginBottom: "1.5rem" }}>
                  Fill in the form and we will get back to you within 24 hours.
                </p>
                <ContactForm
                  fields={contactFields}
                  submitLabel="Send Inquiry"
                  note="Demo mode: add a VITE_FORM_ENDPOINT (e.g. Formspree) to receive messages by email." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Catering Enquiry"
              title="Plan Your Event With Us"
              sub="Tell us about your wedding, birthday, corporate or private event and we will craft a tailored quote."
              center
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="catering-banner">
              <span className="catering-banner__icon" aria-hidden="true">
                <Icon name="party" />
              </span>
              <div>
                <div className="catering-banner__title">Free consultation &amp; tasting available</div>
                <p className="catering-banner__text">We respond to every catering enquiry within 24 hours.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="packages">
              {restaurant.cateringPackages.map((p) => (
                <article className={`package-card ${p.popular ? "package-card--popular" : ""}`} key={p.name}>
                  {p.popular && <span className="package-card__badge">Most Popular</span>}
                  <h3 className="package-card__name">{p.name}</h3>
                  <div className="package-card__price">{p.price}</div>
                  <p className="package-card__suits">{p.suits}</p>
                  <ul className="package-card__features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="container" style={{ padding: 0, maxWidth: 860 }}>
              <ContactForm
                fields={cateringFields}
                submitLabel="Submit Catering Enquiry"
                note="Fields marked * are required."
                dark
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Find Us"
              title="Location & Directions"
              sub="We are easy to find. Drop by for a meal or ask us to bring the meal to you."
              center
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="map-wrap">
              <div className="map-frame">
                <iframe
                  src={restaurant.mapEmbed}
                  title="Map showing Missbees location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="map-section__card">
                <h3 className="section-title" style={{ fontSize: "1.2rem", color: "var(--color-warm-white)", marginBottom: "0.8rem" }}>
                  Visit us today
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-muted-dark)", marginBottom: "1rem" }}>
                  {restaurant.address}
                  <br />
                  Mon – Sat: 10:00 AM – 10:00 PM
                  <br />
                  Sunday: 12:00 PM – 10:00 PM
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
                  <Button href={restaurant.mapDirections} variant="gold">
                    Get Directions
                  </Button>
                  <Button href={`tel:${restaurant.phone}`} variant="outline">
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;