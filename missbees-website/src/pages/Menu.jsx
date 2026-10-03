import { useMemo, useState } from "react";
import menuItems, { categories } from "../data/menu";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import FilterBar from "../components/FilterBar";
import FoodCard from "../components/FoodCard";
import Reveal from "../components/Reveal";

function Menu() {
  const [active, setActive] = useState("All");

  const items = useMemo(
    () =>
      active === "All"
        ? menuItems
        : menuItems.filter((m) => m.category === active),
    [active]
  );

  return (
    <>
      <Seo
        title="Menu & Prices"
        description="Browse the Missbees menu — jollof rice, grills, soups, pasta and more, prepared fresh daily."
      />

      <PageHero
        crumb="Menu"
        eyebrow="From Our Kitchen"
        title="Our Menu"
        sub="Classic Nigerian dishes and more, cooked fresh and served with love. Prices in Naira."
      />

      <section className="section section--cream">
        <div className="container">
          <FilterBar
            label="Filter menu by category"
            categories={categories}
            active={active}
            onChange={setActive}
          />

          {items.length === 0 ? (
            <p className="notice" style={{ textAlign: "center" }}>
              No dishes available in this category at the moment.
            </p>
          ) : (
            <div className="grid grid--3">
              {items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 80}>
                  <FoodCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Menu;