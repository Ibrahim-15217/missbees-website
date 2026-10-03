import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import restaurant from "./data/restaurant";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollTop from "./components/ScrollTop";
import JsonLd from "./components/JsonLd";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function to24h(time) {
  const [clock, mer] = time.split(" ");
  let [h, m] = clock.split(":").map(Number);
  if (mer === "PM" && h !== 12) h += 12;
  if (mer === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  image: "/images/logo.jpg",
  telephone: restaurant.phone,
  email: restaurant.email,
  servesCuisine: "Nigerian",
  priceRange: "NGN",
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address,
    addressCountry: "NG",
  },
  openingHoursSpecification: restaurant.openingHours.map((row) => {
    const [opens, closes] = row.hours.split("–").map((s) => s.trim());
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.day,
      opens: to24h(opens),
      closes: to24h(closes || opens),
    };
  }),
  sameAs: Object.values(restaurant.socialMedia),
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <JsonLd data={restaurantSchema} />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollTop />
    </>
  );
}

export default App;