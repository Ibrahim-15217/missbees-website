import { useMemo, useState } from "react";
import galleryItems, { galleryCategories } from "../data/gallery";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import FilterBar from "../components/FilterBar";
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
      <Seo
        title="Gallery"
        description="View food, restaurant atmosphere, events and the team behind Missbees Restaurant & Catering."
      />

      <PageHero
        crumb="Gallery"
        eyebrow="Our Gallery"
        title="Moments & Memories"
        sub="Food, restaurant atmosphere, events and the faces behind the flavours."
      />

      <section className="section section--cream">
        <div className="container">
<FilterBar
            label="Filter gallery by category"
            categories={galleryCategories}
            active={active}
            onChange={setActive}
          />

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