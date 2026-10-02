import { Link } from "react-router-dom";

function PageHero({ eyebrow, title, sub, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow page-hero__glow--gold" aria-hidden="true" />
      <div className="page-hero__glow page-hero__glow--red" aria-hidden="true" />
      <div className="page-hero__ring" aria-hidden="true" />
      <div className="container page-hero__inner">
        {crumb && (
          <nav className="page-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
        )}
        <span className="section-eyebrow">{eyebrow}</span>
        <h1 className="page-hero__title">{title}</h1>
        {sub && <p className="page-hero__sub">{sub}</p>}
      </div>
    </section>
  );
}

export default PageHero;