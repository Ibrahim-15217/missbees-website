import { useEffect } from "react";

function setMeta(key, value, attr = "name") {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function Seo({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Missbees` : "Missbees | Authentic Nigerian Cuisine";
    document.title = fullTitle;
    setMeta("title", fullTitle, "property");
    setMeta("og:title", fullTitle, "property");

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, "property");
    }

    if (image) {
      setMeta("image", image, "property");
      setMeta("og:image", image, "property");
    }
  }, [title, description, image]);

  return null;
}

export default Seo;