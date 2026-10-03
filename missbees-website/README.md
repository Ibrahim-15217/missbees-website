# Missbees Restaurant & Catering — Website

A single-page-application website for Missbees Restaurant & Catering, built with React + Vite and deployed on Vercel.

## Tech Stack

- **React 19** + **Vite** (Oxc-powered builds)
- **react-router-dom** for client-side routing
- Plain CSS design system in `src/index.css` (no UI framework)

## Run Locally

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
```

Other scripts:

```bash
npm run lint     # Oxlint
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
  components/   UI pieces: Navbar, Footer, Button, FoodCard, ContactForm, Seo, JsonLd, ...
  pages/        Home, About, Menu, Gallery, FAQ, Contact, NotFound
  data/         All site content (edit these, not the components):
                  restaurant.js  — name, contact, hours, socials, services, catering packages
                  menu.js        — menu items, categories, prices, images
                  gallery.js     — gallery photos
                  faq.js         — FAQ entries
                  testimonials.js— customer quotes
                  events.js      — upcoming events + news updates
```

**Tip:** almost all visible text and prices live in `src/data/*`. Update those files to keep content in one place.

## Custom Domain & SEO

- `public/sitemap.xml` and `public/robots.txt` use `https://missbees-website.vercel.app`. Replace with your final domain before launch.
- Page titles/descriptions are set per-page via the `Seo` component (`src/components/Seo.jsx`).
- Structured data (Restaurant schema) is injected by `src/components/JsonLd.jsx` in `src/App.jsx`.

## Contact & Catering Forms

Forms run in **demo mode** (responses are only logged to the console) until a form endpoint is added:

1. Create `.env` in this folder (see `.env.example`).
2. Set `VITE_FORM_ENDPOINT=<your Formspree/Web3Forms/webhook URL>`.
3. Restart the dev server. The `ContactForm` component posts submissions there.

## Images

Current images are curated stock placeholders from Unsplash (`images.unsplash.com` URLs in `src/data/*`). Replace them with real Missbees photos when available by swapping the `image` fields in the data files.

## Deploy

Connected to Vercel via GitHub. Push to `master` to auto-deploy, or use the Vercel dashboard (Root Directory: `missbees-website`).