import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import Button from "../components/Button";

function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
      />
      <PageHero
        crumb="404"
        eyebrow="Lost?"
        title="Page Not Found"
        sub="We could not find the page you are looking for. It may have moved, or the address may be wrong."
      />

      <section className="section section--cream">
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="stats__num"
            style={{ fontSize: "clamp(4rem, 12vw, 7rem)", marginBottom: "1rem", display: "block" }}
            aria-hidden="true"
          >
            404
          </div>
          <p className="section-sub" style={{ margin: "0 auto 2rem" }}>
            Let&apos;s get you back to the good stuff.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Button to="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button to="/menu" variant="dark" size="lg">
              View the Menu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;