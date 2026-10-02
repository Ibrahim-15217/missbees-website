function SectionTitle({ eyebrow, title, sub, center = false }) {
  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

export default SectionTitle;