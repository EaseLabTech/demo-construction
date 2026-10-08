# Ferron Construction SG — HTML demo

**Live demo:** https://easelabtech.github.io/demo-construction/

Static client demo. Open `index.html` in a browser (no build step).

| Page | URL | Future Laravel route |
|---|---|---|
| Home | `index.html` | `/` |
| Service | `service.html?s=plumbing` | `/services/{service}` |
| Service × Area | `service.html?s=plumbing&area=tampines` | `/services/{service}/{location}` |
| Area | `location.html?area=bishan` | `/areas/{location}` |
| All services | `services.html` | `/services` |
| All areas | `areas.html` | `/areas` |
| Projects | `projects.html?sector=HDB&type=Kitchen&region=East&view=map` | `/projects` |
| Project | `project.html?p=bishan-kitchen-cabinets` | `/projects/{project}` |
| About | `about.html` | `/about` |
| Academy | `academy.html?track=Electrical&course=db-box-testing` | `/academy` |
| Careers | `careers.html?team=Field%20crew` | `/careers` |
| Insights | `insights.html?cat=Guides` | `/insights` |
| Insight article | `insights.html?a=hdb-reno-permit-guide` | `/insights/{post}` |
| Contact / quote | `contact.html?svc=plumbing&area=bedok` | `/contact` |

- `assets/js/data.js` — all content (services, locations, projects, reviews, FAQs, team, milestones, certificates, pillars, news, academy courses, jobs). Maps to API resources / DB tables.
- `assets/js/main.js` — shared layout (header, mega menu, drawer, footer, FABs) + reusable cards, quote wizard, before/after slider, certificates dialog, news cards, pillars and brand strip. These become React components.
- `assets/js/home.js` — home page interactions (finder, area map, before/after, quote wizard, carousel).
- `assets/css/style.css` — design tokens on `:root` (port to Tailwind config later).

Images are Unsplash placeholders; phone, email and stats are placeholder content to replace with the client's real details.
