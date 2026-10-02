import { useEffect, useRef, useState } from "react";
import faqs from "../data/faq";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

function FaqItem({ faq, isOpen, onToggle }) {
  const panelRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      setHeight(panelRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className={`acc__item ${isOpen ? "open" : ""}`}>
      <button className="acc__btn" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <span className="acc__icon" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="acc__panel"
        ref={panelRef}
        style={{ maxHeight: isOpen ? `${height}px` : 0 }}
      >
        <p className="acc__panel-inner">{faq.a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        sub="Everything you might want to know about visiting or booking Missbees."
      />

      <section className="section section--cream">
        <div className="container">
          <div className="acc">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <FaqItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
          </div>
        </div>
        </section>
    </>
  );
}

export default FAQ;