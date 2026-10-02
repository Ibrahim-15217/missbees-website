import restaurant from "../data/restaurant";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const values = [
  { title: "Quality", text: "The best ingredients, prepared with care in every single dish." },
  { title: "Hospitality", text: "You are a guest, not a customer. That is how we treat you." },
  { title: "Freshness", text: "Everything is prepared fresh, daily — never frozen shortcuts." },
  { title: "Satisfaction", text: "We are not happy until you are. Every plate, every time." },
];

const team = [
  {
    name: "Mrs. Abba",
    role: "Founder & Head of Operations",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chef Ibrahim",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fatima B.",
    role: "Catering Manager",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80",
  },
];

function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Us"
        title="The Story of Missbees"
        sub="Fresh ingredients, authentic recipes and warm hospitality — whether it is a quick lunch or a wedding for five hundred."
      />

      <section className="section section--cream">
        <div className="container">
          <div className="story-grid">
            <Reveal className="story-grid__media">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
                alt="The Missbees restaurant interior"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">How Missbees Began</h2>
              <p className="section-sub">{restaurant.about}</p>
              <p className="section-sub" style={{ marginTop: "1rem" }}>
                {restaurant.founding} — {restaurant.name.split(" ")[0]} as a small,
                family-run kitchen, we have grown into a home for authentic Nigerian
                flavours and the trusted caterer for celebrations across the city.
              </p>
            </Reveal>
          </div>

          <div style={{ marginTop: "5rem" }}>
            <Reveal>
              <SectionTitle
                eyebrow="Our Mission"
                title="To feed every celebration"
                sub="Fresh ingredients, authentic recipes and warm hospitality — whether it is a quick lunch or a wedding for five hundred. That mission has never changed."
                center
              />
            </Reveal>
            <div className="grid grid--4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 4) * 100}>
                  <div className="value-card">
                    <h3 className="value-card__title">{v.title}</h3>
                    <p className="value-card__text">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Founder & Team"
              title="The People Behind the Taste"
              sub="A team that cares about your experience as much as your plate."
              center
            />
          </Reveal>
          <div className="grid grid--3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 100}>
                <article className="team-card">
                  <div className="team-card__media">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="team-card__body">
                    <h3 className="team-card__name">{member.name}</h3>
                    <p className="team-card__role">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="stats">
            <Reveal>
              <div>
                <div className="stats__num">100%</div>
                <div className="stats__label">Fresh Daily</div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="stats__num">500+</div>
                <div className="stats__label">Events Served</div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <div className="stats__num">30+</div>
                <div className="stats__label">Menu Dishes</div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div>
                <div className="stats__num">4.9</div>
                <div className="stats__label">Guest Rating</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;