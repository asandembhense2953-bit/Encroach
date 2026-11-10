# Encroach website

React (Vite) front end for Encroach Business Solutions and Projects. Front end only: no backend, login and search are demo screens.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Needs Node 18 or newer. When you host the build, set the host to send every URL to `index.html` (a "single page app" fallback), so a refresh on `/about` still works.

## Pages

| Page | Status |
| --- | --- |
| Home (`/`) | Built: hero, intro, services, how we work, news, call to action |
| Every other link | Shows a "Coming soon" page until it is built |

Every page gets the navbar and footer from `src/components/Layout.jsx`.

### Adding the next page

1. Create `src/pages/About.jsx` (one file per page; split big pages into `src/pages/about/`).
2. Add one line to `src/App.jsx`: `<Route path="about" element={<About />} />`
3. Put its text in `src/data/content.js`.

## Edit the content

All text, menu items, footer links and social links are in `src/data/content.js`.
Home sections, dropdown items and the PARTNER and GROW slides are sample copy. The LEARN slide matches the approved design.
Social links are `#` for now. Replace them with the real company pages.

## What is where

- `src/App.jsx` the list of pages (routes)
- `src/components/` parts used on every page: Navbar, Footer, Layout, Drawer, SearchPanel, LoginModal, Icons
- `src/pages/Home.jsx` the Home page, built from `src/pages/home/` sections
- `src/styles.css` design tokens, navbar, hero, panels; `src/styles/` Home, footer and placeholder page styles
- `public/hero.webp` hero photo (cut-out, the left person is softened to match the design)
- `docs/` the designs this was built from

## Next steps

- Replace the sample logo in `src/components/Icons.jsx` and `public/favicon.svg` with the official file if it differs.
- Connect Member login to the college SSO once College IT confirms the method.
- Build the remaining pages one by one: About, Services, News, Gallery, Contact.
