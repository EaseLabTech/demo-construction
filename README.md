# Ferron Construction SG — HTML demo

**Live demo:** https://easelabtech.github.io/demo-construction/

Static client demo. Open `index.html` in a browser (no build step).

| Page | URL | Future Laravel route |
|---|---|---|
| Home | `index.html` | `/` |
| Service | `service.html?s=plumbing` | `/services/{service}` |
| Service × Area | `service.html?s=plumbing&area=tampines` | `/services/{service}/{location}` |
| Area | `location.html?area=bishan` | `/areas/{location}` |

- `assets/js/data.js` — all content (services, locations, projects, reviews, FAQs). Maps to API resources / DB tables.
- `assets/js/main.js` — shared layout (header, mega menu, drawer, footer, FABs) + reusable cards. These become React components.
- `assets/js/home.js` — home page interactions (finder, area map, before/after, quote wizard, carousel).
- `assets/css/style.css` — design tokens on `:root` (port to Tailwind config later).

Images are Unsplash placeholders; phone, email and stats are placeholder content to replace with the client's real details.
