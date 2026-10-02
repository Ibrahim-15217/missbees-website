# Missbees Restaurant & Catering Website — Implementation Plan

This document describes the step-by-step implementation of the Missbees website, from project setup to final deployment.

Reference: `WEBSITE_SPECIFICATION.md` for full feature and requirement details.

---

## Phase 1 — Project Setup

**Goal:** Create and configure the project foundation.

### Tasks

1. Create the project with Vite + React.
2. Install dependencies.
3. Configure styling (Tailwind CSS or custom CSS).
4. Set up Git repository (with `.gitignore` excluding `.env`, `node_modules`, build output).
5. Create the folder structure from the specification.
6. Create `src/data/restaurant.js` with placeholder restaurant data.
7. Set up environment file (`.env`) for form/email service keys.
8. Create a favicon.

### Test

- Project runs locally.
- No console errors.
- Styling loads correctly.
- Development server works.
- Git is initialized and `.gitignore` is correct.

---

## Phase 2 — Global UI

**Goal:** Build the shared layout and reusable components.

### Tasks

1. Build the `Navbar` component:
   - Logo + restaurant name
   - Links: Home, About, Menu, Gallery, Contact
   - CTA button ("View Menu")
   - Responsive hamburger menu for mobile
2. Build the `Footer` component:
   - Restaurant info (logo, name, short description)
   - Navigation links
   - Contact info (phone, email, address)
   - Social media links
   - Compact opening hours
   - Copyright line
3. Build reusable `Button` component (variants: primary, secondary, ghost).
4. Build `SectionTitle` component (consistent section headings).
5. Set up global styles:
   - CSS variables for the colour system
   - Typography (headings + body fonts)
   - Base reset and spacing
   - Button/link focus states for accessibility
6. Implement the responsive grid and layout utilities.

### Test

- View on desktop, tablet, and mobile.
- Navigation links work (including smooth scrolling / routing).
- Mobile menu opens, closes, and navigates correctly.
- Footer renders all sections correctly.
- Responsiveness verified across breakpoints.

---

## Phase 3 — Homepage

**Goal:** Build the complete Home page.

### Tasks

1. **Hero section:**
   - Background image with overlay
   - Tagline + short description
   - "Explore Our Menu" and "Contact Us" buttons
2. **Restaurant introduction:**
   - Image + short description + "Read More" link to About
3. **Featured dishes:**
   - Display 3–6 items from `src/data/menu.js` marked as featured
   - FoodCard component: image, name, short description, price
   - "View Full Menu" button
4. **Why Choose Us** (if client confirms the characteristics):
   - Grid of 3–6 quality points
5. **Gallery preview:**
   - Responsive grid of images with hover effects
   - Click opens lightbox
   - "View Gallery" button
6. **Opening hours:**
   - Use real hours from the client (fall back to a table placeholder marked for update)
7. **Location preview:**
   - Address, map embed, "Get Directions" button, phone number
8. **Call-to-action section:**
   - Closing CTA with "View Menu" and "Contact Us" buttons
9. Add fade-in scroll animations (subtle).

### Test

- All sections render.
- All buttons navigate correctly.
- Images load with alt text.
- Mobile layout works for every section.
- No console errors.

---

## Phase 4 — Menu

**Goal:** Build the Menu page with filtering.

### Tasks

1. Define menu categories in `src/data/menu.js` (All, Starters, Main Courses, Rice, Grills, Pasta, Soups, Desserts, Drinks — only those relevant to the restaurant).
2. Build the Menu page:
   - Category filter buttons
   - Grid of FoodCards
   - Food image, name, description, price
   - Optional badges (Popular, New, etc., only when confirmed)
3. Implement JavaScript client-side filtering:
   - "All" shows everything
   - Selecting a category filters items instantly
   - No page reload
4. Empty state message if a category has no items.

### Test

- Every category button works.
- Correct dishes appear for each category.
- Prices and descriptions display correctly.
- Filters work on mobile.
- No console errors.

---

## Phase 5 — About

**Goal:** Build the About page.

### Tasks

1. **Restaurant story:**
   - Founding story, philosophy, mission
2. **Restaurant values:**
   - Quality, hospitality, freshness, customer satisfaction (or client-confirmed values)
3. **Founder / Team:**
   - Founder information with photo and short biography
   - Staff/team cards if information is provided
4. **Restaurant environment:**
   - Photos of interior, exterior, dining area, kitchen (where appropriate)
5. Style the page consistently with the site design.

### Test

- Content is accurate and complete.
- Images load with alt text.
- Layout is responsive.
- Navigation works (page accessible from navbar and footer).

---

## Phase 6 — Gallery

**Goal:** Build the Gallery page with lightbox.

### Tasks

1. Define gallery categories: All, Food, Restaurant, Events, Team (+ Catering setups where relevant).
2. Build responsive gallery grid with hover effects.
3. Add category filtering.
4. Build the lightbox:
   - Opens on image click
   - Displays full image
   - Next/previous controls
   - Close button (and Escape key)
   - Keyboard arrow navigation for accessibility
5. Lazy-load images to preserve performance.

### Test

- Images open in lightbox.
- Next/previous controls work.
- Close button and Escape key work.
- Category filters work.
- Mobile layout works.
- Images load without long delays.

---

## Phase 7 — Contact

**Goal:** Build the Contact page including communication features.

### Tasks

1. **Contact information block:**
   - Phone, email, WhatsApp, address, opening hours
2. **Contact form:**
   - Fields: Full Name, Email Address, Phone Number (optional), Subject, Message
   - Submit button
3. **Form validation:**
   - Required fields
   - Valid email format
   - Minimum message length
   - Inline error messages
4. **Email/Form service integration:**
   - Configure selected service (Formspree, Web3Forms, or EmailJS)
   - Use environment variable for the endpoint/key
   - Success message after submission
   - Error handling on failure
5. **WhatsApp button:**
   - Floating button opening wa.me link with the restaurant number
   - Optional predefined message
6. **Click-to-call:**
   - Phone number as `tel:` link
7. **Google Maps:**
   - Embedded map
   - "Get Directions" button

### Test

- Send a real test inquiry and confirm it reaches the restaurant email.
- Validation blocks invalid submissions correctly.
- WhatsApp link opens with the correct number.
- Phone link opens the device phone app (test on mobile).
- Map loads and directions button works.

---

## Phase 8 — Catering (if part of Phase 1)

**Goal:** Add catering information and enquiry handling.

### Tasks

1. Build a catering section/service page:
   - Wedding catering
   - Birthday/event catering
   - Corporate catering
   - Private events
   - Catering packages
2. Build the **Catering Enquiry Form**:
   - Customer name
   - Email/phone
   - Event type
   - Event date
   - Event location
   - Number of guests
   - Requested service
   - Message
   - Submit
3. Route catering enquiries to the same email service as the contact form (or a dedicated inbox if configured).

### Test

- Form submits successfully.
- Enquiry reaches the restaurant email.
- Event type dropdown works.
- Date and guest number validate correctly.

---

## Phase 9 — Events & News (content sections)

**Goal:** Add events and news/updates sections.

### Tasks

1. **Events section:**
   - Upcoming events list
   - Previous events with photographs and descriptions
2. **News/Updates section:**
   - New menu announcements
   - Promotions
   - Business updates
   - Activities
3. Add testimonials:
   - Customer reviews and feedback display

### Test

- Content displays correctly.
- Event photos load.
- Layout is responsive.
- Sections are linked from the navbar/footer where applicable.

---

## Phase 10 — FAQ

**Goal:** Build the FAQ page.

### Tasks

1. Build the FAQ list with common questions (menu, opening hours, location, contacts, catering, delivery/takeaway where relevant).
2. Implement expand/collapse interaction:
   - Click question toggles answer
   - Smooth animation
   - Accordion behaviour with one open at a time (or allow multiple)
   - Keyboard accessible (Enter/Space to toggle)
   - `aria-expanded` attributes for accessibility

### Test

- Questions expand.
- Questions collapse.
- Only the intended items toggles.
- Mobile usability is good.
- No console errors.

---

## Phase 11 — SEO & Accessibility

**Goal:** Optimize the site for search engines and accessibility.

### Tasks

1. **SEO per page:**
   - Unique page titles
   - Meta descriptions
   - Semantic headings (one H1 per page)
   - Descriptive URLs (e.g. `/menu`, `/contact`)
   - Open Graph metadata
   - Twitter card metadata
   - Favicon
2. **Accessibility:**
   - Alt text for every image
   - Proper heading hierarchy
   - Form labels linked to inputs
   - Visible focus states
   - Good colour contrast (check against WCAG AA)
   - Descriptive button/link text
   - Accessible mobile navigation
3. Add JSON-LD structured data for the restaurant (recommended):
   - Name, address, phone, opening hours

### Test

- Browser title is correct on every page.
- Social preview (Open Graph) renders correctly.
- Alt text present on images.
- Heading structure is logical.
- Tab navigation reaches all controls.
- Focus outlines visible.

---

## Phase 12 — Performance Optimization

**Goal:** Make the site fast on all devices.

### Tasks

1. Compress/resize all images.
2. Convert images to WebP where possible.
3. Lazy-load below-the-fold and gallery images.
4. Remove unused CSS and JavaScript.
5. Load fonts efficiently (preconnect, `font-display: swap`, subset fonts).
6. Minimize dependencies.
7. Enable caching via the hosting platform.
8. Use responsive image sizes (`srcset`/`sizes` where beneficial).

### Test

- Measure initial load time on desktop.
- Measure on mobile.
- Measure on a throttled/slow network.
- Confirm no oversized network requests.
- Confirm recommended image formats are used.

---

## Phase 13 — Final QA

**Goal:** Verify every page and feature works end to end.

### Test every page

```
Home       -- hero, intro, featured dishes, why choose us,
              gallery preview, opening hours, location, CTA
About      -- story, values, founder/team, environment
Menu       -- categories, filtering, cards, prices
Gallery    -- grid, filters, lightbox controls
FAQ        -- expand/collapse
Contact    -- info, form, map, directions
Footer     -- links, socials, hours
```

### Test every feature

```
Navigation            -- navbar, footer, mobile menu
Buttons               -- all CTAs route and behave correctly
Forms                 -- validation, success, error paths
Phone                 -- tel: link works on mobile
WhatsApp              -- wa.me link opens correctly
Maps                  -- embed loads, directions open
Images                -- load, alt text, lazy-loading
Responsive design     -- mobile, tablet, desktop, large desktop
SEO                   -- titles, descriptions, meta
Accessibility         -- keyboard, focus, contrast, labels
Browser compatibility -- Chrome, Firefox, Safari, Edge
```

### Deliverables

- [ ] All agreed pages implemented.
- [ ] Content accurate.
- [ ] No major console errors.
- [ ] All checklist items complete.

---

## Phase 14 — Client Review & Revisions

**Goal:** Get client approval before launch.

### Tasks

1. Present the staging build to the client.
2. Collect feedback on content, design, and functionality.
3. Apply approved revisions.
4. Confirm real business information is used (name, address, phone, WhatsApp, email, hours, menu, prices, images, socials).

### Test

- Client confirms all information is correct.
- Client approves design and functionality.

---

## Phase 15 — Deployment

**Goal:** Deploy the website to production.

### Tasks

1. Push the project to a GitHub repository.
2. Connect to hosting:
   - Vercel / Netlify / Cloudflare Pages
3. Configure environment variables in the hosting settings (form/email keys).
4. Enable HTTPS (default on the recommended platforms).
5. Optionally connect a custom domain.
6. Submit the site to Google Search Console and connect Google Analytics (if requested).
7. Verify the live site.

### Test

- Website is live.
- HTTPS works.
- Contact form works on production.
- WhatsApp, phone, and maps work on production.
- No console errors on production.
- Custom domain resolves (if connected).

---

## Phase 16 — Post-Launch

**Goal:** Hand over and support.

### Tasks

1. Provide the client with a handover summary:
   - How the site is structured
   - How to request content updates
   - Hosting account access
2. Document how to update content files (`src/data/menu.js`, `src/data/restaurant.js`, `src/data/gallery.js`).
3. Plan Phase 2 (optional future work):
   - Online ordering
   - Reservations
   - Payments
   - Customer accounts
   - Admin dashboard

---

## Definition of Done

The Missbees website is considered complete when:

1. All agreed pages are implemented.
2. Restaurant content is accurate.
3. Menu items and prices are correct.
4. Images are optimized.
5. Contact form successfully delivers inquiries.
6. Phone and WhatsApp links work.
7. Google Maps works.
8. Social media links work.
9. Website works on mobile, tablet, and desktop.
10. No major console errors exist.
11. Basic SEO has been implemented.
12. Accessibility basics have been addressed.
13. Performance has been checked.
14. The website has been deployed successfully.
15. The client has reviewed and approved the final version.