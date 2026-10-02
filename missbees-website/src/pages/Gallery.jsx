import { useMemo, useState } from "react";
import galleryItems, { galleryCategories } from "../data/gallery";
import PageHero from "../components/PageHero";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";
import Reveal from "../components/Reveal";

function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === active),
    [active]
  );

  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Our Gallery"
        title="Moments & Memories"
        sub="Food, restaurant atmosphere, events and the faces behind the flavours."
      />

      <section className="section section--cream">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter gallery by category">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80}>
                <GalleryCard
                  item={item}
                  onOpen={() => setLightboxIndex(i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

export default Gallery;