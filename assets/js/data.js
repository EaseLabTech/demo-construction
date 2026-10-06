/* ==========================================================================
   Ferron Construction SG — demo content
   In the Laravel + React build this file maps 1:1 to API resources:
   services, locations, projects, testimonials, faqs.
   ========================================================================== */

const IMG = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

const COMPANY = {
  name: "Ferron Construction",
  short: "Ferron",
  phone: "+65 8739 2376",
  phoneRaw: "6587392376",
  email: "hello@ferronconstruction.sg",
  address: "30 Robert's Lane #02-01, Singapore 218309",
  hours: "Mon–Sun · 8am–10pm · 24/7 emergency",
};

const SERVICES = [
  {
    slug: "electrical",
    name: "Electrical",
    icon: "bolt",
    tagline: "Licensed wiring, repairs & safety testing",
    img: IMG("1621905251189-08b45d6a269e"),
    from: 60,
    summary: "EMA-licensed electricians for rewiring, DB box upgrades, lighting, power points and full safety inspections for HDB, condo and landed homes.",
    includes: ["Full / partial rewiring", "DB box & RCCB replacement", "Lighting & fan installation", "Power point relocation", "Tripping & short-circuit fixes", "Electrical safety audit"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    icon: "drop",
    tagline: "Leaks, choke clearing & pipe works",
    img: IMG("1585704032915-c3400ca199e7"),
    from: 50,
    summary: "PUB-licensed plumbers who fix leaks, clear chokes and replace pipes fast — with transparent pricing before any work begins.",
    includes: ["Leak detection & repair", "Toilet / sink choke clearing", "Water heater installation", "Tap & mixer replacement", "Concealed pipe replacement", "Bowl & cistern repair"],
  },
  {
    slug: "kitchen-cabinet",
    name: "Kitchen Cabinets",
    icon: "cabinet",
    tagline: "Custom carpentry built to fit",
    img: IMG("1556911220-bff31c812dba"),
    from: 180,
    summary: "Made-to-measure cabinets, hinge and door replacements, and quartz or solid-surface tops for kitchens that work as hard as you do.",
    includes: ["Custom cabinet design", "Hinge & door replacement", "Quartz / sintered stone tops", "Soft-close upgrades", "Laminate re-facing", "Termite damage repair"],
  },
  {
    slug: "painting",
    name: "Painting",
    icon: "roller",
    tagline: "Interior, exterior & feature walls",
    img: IMG("1562259949-e8e7689d7828"),
    from: 250,
    summary: "Low-VOC, odour-less paint systems with full furniture protection. Most HDB flats repainted in a single day.",
    includes: ["Whole-home repainting", "Exterior & facade painting", "Feature & accent walls", "Ceiling & stain sealing", "Gate & grille painting", "Eco-friendly paints"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    icon: "floor",
    tagline: "Polishing, varnishing & vinyl",
    img: IMG("1600607687939-ce8a6c25118c"),
    from: 3,
    unit: "/sqft",
    summary: "Bring tired floors back to life — marble polishing, parquet varnishing, vinyl overlay and scratch repair with minimal downtime.",
    includes: ["Marble polishing & crystallising", "Parquet sanding & varnishing", "Vinyl / SPC overlay", "Tile replacement", "Scratch & chip repair", "Skirting installation"],
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    icon: "shield",
    tagline: "Roofs, toilets & terrace sealing",
    img: IMG("1584622650111-993a426fbf0a"),
    from: 300,
    summary: "Stop leaks at the source. Membrane and injection waterproofing for bathrooms, roofs and balconies — backed by up to 5-year warranty.",
    includes: ["Toilet floor waterproofing", "Roof & terrace membrane", "PU injection for cracks", "Wall seepage treatment", "Leak investigation", "Planter box sealing"],
  },
  {
    slug: "aircon",
    name: "Aircon Servicing",
    icon: "wind",
    tagline: "Cleaning, gas top-up & installs",
    img: IMG("1586023492125-27b2c045efd7"),
    from: 25,
    unit: "/unit",
    summary: "Keep cool and save on bills. General servicing, chemical wash, gas top-up and new system installation by certified technicians.",
    includes: ["General servicing", "Chemical wash & overhaul", "Gas top-up", "Leak & noise fixes", "New system installation", "Annual maintenance contracts"],
  },
  {
    slug: "drilling",
    name: "Drilling & Mounting",
    icon: "drill",
    tagline: "TVs, shelves, mirrors & more",
    img: IMG("1558618666-fcd25c85cd64"),
    from: 40,
    summary: "Precise, dust-controlled drilling into concrete, tile and glass — TV brackets, shelves, curtain rails and bathroom accessories.",
    includes: ["TV bracket mounting", "Shelving & racks", "Curtain & blind rails", "Mirror & art hanging", "Bathroom accessories", "Concealed cable trunking"],
  },
];

/* Singapore planning regions + popular service areas */
const REGIONS = ["Central", "East", "North", "North-East", "West"];

const LOCATIONS = [
  { slug: "tampines", name: "Tampines", region: "East", homes: "HDB · EC · Condo", eta: 35 },
  { slug: "bedok", name: "Bedok", region: "East", homes: "HDB · Condo · Landed", eta: 30 },
  { slug: "pasir-ris", name: "Pasir Ris", region: "East", homes: "HDB · Condo", eta: 40 },
  { slug: "changi", name: "Changi", region: "East", homes: "Landed · Condo", eta: 45 },
  { slug: "jurong-east", name: "Jurong East", region: "West", homes: "HDB · Condo", eta: 40 },
  { slug: "jurong-west", name: "Jurong West", region: "West", homes: "HDB · EC", eta: 45 },
  { slug: "clementi", name: "Clementi", region: "West", homes: "HDB · Condo · Landed", eta: 35 },
  { slug: "bukit-batok", name: "Bukit Batok", region: "West", homes: "HDB · Condo", eta: 40 },
  { slug: "woodlands", name: "Woodlands", region: "North", homes: "HDB · EC", eta: 45 },
  { slug: "yishun", name: "Yishun", region: "North", homes: "HDB · Condo", eta: 40 },
  { slug: "sembawang", name: "Sembawang", region: "North", homes: "HDB · EC · Landed", eta: 50 },
  { slug: "ang-mo-kio", name: "Ang Mo Kio", region: "North-East", homes: "HDB · Landed", eta: 30 },
  { slug: "punggol", name: "Punggol", region: "North-East", homes: "HDB · EC · Condo", eta: 40 },
  { slug: "sengkang", name: "Sengkang", region: "North-East", homes: "HDB · EC · Condo", eta: 35 },
  { slug: "hougang", name: "Hougang", region: "North-East", homes: "HDB · Landed", eta: 30 },
  { slug: "serangoon", name: "Serangoon", region: "North-East", homes: "HDB · Landed · Condo", eta: 30 },
  { slug: "toa-payoh", name: "Toa Payoh", region: "Central", homes: "HDB · Condo", eta: 25 },
  { slug: "bishan", name: "Bishan", region: "Central", homes: "HDB · Condo · Landed", eta: 25 },
  { slug: "queenstown", name: "Queenstown", region: "Central", homes: "HDB · Condo", eta: 25 },
  { slug: "bukit-timah", name: "Bukit Timah", region: "Central", homes: "Landed · Condo", eta: 30 },
  { slug: "novena", name: "Novena", region: "Central", homes: "Condo · Landed", eta: 20 },
  { slug: "marine-parade", name: "Marine Parade", region: "Central", homes: "HDB · Condo", eta: 25 },
];

const PROJECTS = [
  { title: "Modern facade repaint", area: "Bukit Timah", tag: "Painting", img: IMG("1600585154340-be6161a56a0c", 900) },
  { title: "5-room full refresh", area: "Punggol", tag: "Renovation", img: IMG("1615873968403-89e068629265", 900) },
  { title: "Landed home extension", area: "Changi", tag: "Construction", img: IMG("1600566753190-17f0baa2a6c3", 900) },
  { title: "Master bath waterproofing", area: "Tampines", tag: "Waterproofing", img: IMG("1584622650111-993a426fbf0a", 900) },
  { title: "Living room flooring", area: "Clementi", tag: "Flooring", img: IMG("1595846519845-68e298c2edd8", 900) },
  { title: "Dining & lighting rework", area: "Novena", tag: "Electrical", img: IMG("1617104551722-3b2d51366400", 900) },
];

const TESTIMONIALS = [
  { name: "Rachel Tan", area: "Tampines · HDB 4-room", service: "Waterproofing", text: "Leak from upstairs had been bugging us for months. Ferron found the source in an hour, sealed it, and gave us a 5-year warranty. Super clean work." },
  { name: "Daniel Lim", area: "Bukit Timah · Landed", service: "Electrical", text: "Full rewiring for a 30-year-old house. Clear quote, on schedule, and the team explained every step. Wouldn't go anywhere else now." },
  { name: "Priya Nair", area: "Punggol · BTO", service: "Painting", text: "Booked on WhatsApp in the morning, painters came the next day. Whole flat done in a day with zero smell. Amazing value." },
  { name: "Marcus Wong", area: "Bishan · Condo", service: "Kitchen Cabinets", text: "Custom cabinets came out exactly like the 3D render. Soft-close everything, quartz top is gorgeous. Highly recommend." },
  { name: "Siti Rahman", area: "Woodlands · HDB 5-room", service: "Aircon", text: "Chemical wash for 4 units — they were punctual, tidy, and the aircon is noticeably colder. Already signed the yearly package." },
  { name: "Kevin Ho", area: "Clementi · Condo", service: "Flooring", text: "Marble polishing made our floors look brand new. Crew covered all the furniture and cleaned up after. 10/10." },
];

const FAQS = [
  { q: "Are your technicians licensed?", a: "Yes. Our electricians are EMA-licensed, plumbers are PUB-licensed, and all crew are insured. We're happy to share licence numbers before any job." },
  { q: "How fast can you get to my place?", a: "For most areas in Singapore we arrive within 30–60 minutes for emergencies, and offer same-day or next-day slots for scheduled work." },
  { q: "Is the quotation really free?", a: "Absolutely. Send photos on WhatsApp for an instant estimate, or book a free on-site assessment. You only pay after you approve the quote." },
  { q: "Do you provide a warranty?", a: "All workmanship is covered by a minimum 3-month warranty, and waterproofing jobs come with up to a 5-year warranty." },
  { q: "Do you work on HDB, condo and landed homes?", a: "Yes — we handle HDB flats, ECs, condominiums, landed property and small commercial units, and we take care of HDB/MCST renovation permits." },
  { q: "What payment methods do you accept?", a: "PayNow, bank transfer, credit card and cash. Larger projects can be paid in milestones." },
];

const ICONS = {
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  drop: '<path d="M12 2.7s-7 7.6-7 12.3a7 7 0 0 0 14 0c0-4.7-7-12.3-7-12.3Z"/>',
  cabinet: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M9 10v2M15 10v2"/>',
  roller: '<rect x="3" y="3" width="15" height="6" rx="1.5"/><path d="M18 6h2.5v5H11v4"/><rect x="9.5" y="15" width="3" height="6.5" rx="1"/>',
  floor: '<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v6M15 9v6M9 15v6"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
  drill: '<path d="M4 6h10v6H4zM14 8h4M18 7v2M18 8h3M7 12l-1 8h4l1-8"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUR: '<path d="M7 17 17 7M8 7h9v9"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8Z"/><circle cx="7" cy="7" r="1.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
};

const icon = (name, cls = "") =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

const WA_ICON = '<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z"/></svg>';
