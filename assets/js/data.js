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
    category: "Repairs",
    duration: "1–2 days",
    warranty: "12 months",
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
    category: "Repairs",
    duration: "Same day",
    warranty: "6 months",
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
    category: "Renovation",
    duration: "2–3 weeks",
    warranty: "3 years",
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
    category: "Renovation",
    duration: "1–3 days",
    warranty: "12 months",
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
    category: "Renovation",
    duration: "1–4 days",
    warranty: "12 months",
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
    category: "Repairs",
    duration: "2–4 days",
    warranty: "5 years",
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
    category: "Maintenance",
    duration: "1–3 hours",
    warranty: "3 months",
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
    category: "Maintenance",
    duration: "1–2 hours",
    warranty: "3 months",
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

/* Each project has a detail page: project.html?p={slug} */
const PROJECTS = [
  {
    slug: "bukit-timah-facade-repaint", title: "Modern facade repaint", area: "Bukit Timah", tag: "Painting", service: "painting",
    property: "Landed · Semi-D", duration: "6 days", budget: "S$8k–10k", year: 2025,
    img: IMG("1600585154340-be6161a56a0c", 900), gallery: ["1600585154526-990dced4db0d", "1541123603104-512919d6a96c"],
    summary: "A 20-year-old semi-D with chalking, faded paint and hairline cracks. We pressure-washed, sealed the cracks and recoated the whole facade in a weather-shield system rated for Singapore's rain.",
    scope: ["High-pressure wash & mould treatment", "Crack sealing with elastomeric filler", "Alkali-resistant primer", "2 coats weather-shield topcoat", "Gate & grille repainting", "Full site clean-up"],
    review: { name: "Daniel Lim", text: "The house looks newer than when we bought it. Crew was careful with the plants and finished a day early." },
  },
  {
    slug: "punggol-5-room-refresh", title: "5-room full refresh", area: "Punggol", tag: "Renovation", service: "painting",
    property: "HDB · 5-room BTO", duration: "3 weeks", budget: "S$28k–34k", year: 2025,
    img: IMG("1615873968403-89e068629265", 900), gallery: ["1600566753086-00f18fb6b3ea", "1618221195710-dd6b41faaea6"],
    summary: "Young family moving into a resale 5-room. One team handled painting, vinyl flooring, lighting and new carpentry so the flat was move-in ready in three weeks.",
    scope: ["Whole-home repaint", "SPC vinyl over existing tiles", "New LED lighting points", "Built-in wardrobes & TV console", "HDB permit handling", "Post-reno chemical cleaning"],
    review: { name: "Priya Nair", text: "One WhatsApp group, one coordinator, zero chasing. Exactly what we needed with a baby on the way." },
  },
  {
    slug: "changi-landed-extension", title: "Landed home extension", area: "Changi", tag: "Construction", service: "waterproofing",
    property: "Landed · Terrace", duration: "9 weeks", budget: "S$65k–80k", year: 2024,
    img: IMG("1600566753190-17f0baa2a6c3", 900), gallery: ["1600585154526-990dced4db0d", "1600566753086-00f18fb6b3ea"],
    summary: "A rear extension adding a family room and a covered terrace, with BCA submissions, structural works, roof waterproofing and finishing all under one contract.",
    scope: ["BCA & URA submissions", "RC structure & brickwork", "Torch-on roof membrane", "Electrical & lighting", "Sliding glass doors", "Tiling & painting"],
    review: { name: "Grace Teo", text: "They handled every permit and kept us updated with photos every day. Not a single leak through the monsoon." },
  },
  {
    slug: "tampines-bath-waterproofing", title: "Master bath waterproofing", area: "Tampines", tag: "Waterproofing", service: "waterproofing",
    property: "HDB · 4-room", duration: "4 days", budget: "S$2.8k–3.5k", year: 2025,
    img: IMG("1584622650111-993a426fbf0a", 900), gallery: ["1523413651479-597eb2da0ad6", "1584622650111-993a426fbf0a"],
    summary: "Water was seeping into the unit below. We traced it to a failed membrane under the shower, hacked the floor, re-membraned and passed a 24-hour ponding test before retiling.",
    scope: ["Moisture & thermal leak tracing", "Floor hacking & screeding", "Cementitious membrane, 2 coats", "24-hour ponding test", "Anti-slip floor tiles", "5-year warranty issued"],
    review: { name: "Rachel Tan", text: "Neighbour downstairs finally has a dry ceiling. Clean work and a proper 5-year warranty." },
  },
  {
    slug: "clementi-living-flooring", title: "Living room flooring", area: "Clementi", tag: "Flooring", service: "flooring",
    property: "Condo · 3-bedroom", duration: "3 days", budget: "S$4k–5k", year: 2025,
    img: IMG("1595846519845-68e298c2edd8", 900), gallery: ["1618221195710-dd6b41faaea6", "1631679706909-1844bbd07221"],
    summary: "Dull, scratched marble brought back to a mirror finish with diamond polishing and crystallisation, plus new skirting throughout the living and dining area.",
    scope: ["Furniture protection & moving", "Diamond grinding (5 stages)", "Crack & chip filling", "Crystallisation finish", "New skirting", "Daily dust control"],
    review: { name: "Kevin Ho", text: "Floors look brand new. They covered everything and left the place cleaner than before." },
  },
  {
    slug: "novena-dining-lighting", title: "Dining & lighting rework", area: "Novena", tag: "Electrical", service: "electrical",
    property: "Condo · 2-bedroom", duration: "2 days", budget: "S$3k–4k", year: 2024,
    img: IMG("1617104551722-3b2d51366400", 900), gallery: ["1600607687644-c7171b42498f", "1541123603104-512919d6a96c"],
    summary: "Tired downlights replaced with a layered lighting plan: dimmable pendants over the dining table, warm cove lights and smart switches, with MCST approval handled for the owner.",
    scope: ["Lighting layout plan", "Pendant & cove lighting", "Dimmers & smart switches", "Concealed wiring", "MCST paperwork", "EMA test certificate"],
    review: { name: "Joanne Koh", text: "The dining room feels like a restaurant now. Neat wiring and no patchy ceiling afterwards." },
  },
  {
    slug: "bishan-kitchen-cabinets", title: "Shaker kitchen makeover", area: "Bishan", tag: "Kitchen", service: "kitchen-cabinet",
    property: "Condo · 3-bedroom", duration: "16 days", budget: "S$14k–18k", year: 2025,
    img: IMG("1600489000022-c2086d79f9d4", 900), gallery: ["1484154218962-a197022b5858", "1556911220-bff31c812dba"],
    summary: "Custom shaker cabinets in deep slate with a quartz top, open shelving and full-height storage, built from a 3D render the owner signed off before production.",
    scope: ["3D design & render", "Marine-ply carcass", "Soft-close hinges & runners", "Quartz countertop", "Open oak shelving", "Under-cabinet LED"],
    review: { name: "Marcus Wong", text: "Came out exactly like the 3D render. The quartz top is gorgeous." },
  },
  {
    slug: "sengkang-white-kitchen", title: "Bright white kitchen", area: "Sengkang", tag: "Kitchen", service: "kitchen-cabinet",
    property: "HDB · 4-room", duration: "12 days", budget: "S$9k–12k", year: 2024,
    img: IMG("1484154218962-a197022b5858", 900), gallery: ["1556911220-bff31c812dba", "1600489000022-c2086d79f9d4"],
    summary: "A dark, cramped HDB kitchen opened up with white handleless cabinets, a breakfast island and pendant lighting to make the space feel twice the size.",
    scope: ["Hacking of old cabinets", "Handleless top & bottom cabinets", "Breakfast island", "Sintered stone top", "Pendant lights", "New sink & tap"],
    review: { name: "Alvin Chua", text: "Our kitchen used to be the darkest room. Now it's where everyone hangs out." },
  },
  {
    slug: "bedok-bathroom-plumbing", title: "Bathroom re-piping", area: "Bedok", tag: "Plumbing", service: "plumbing",
    property: "HDB · 3-room", duration: "2 days", budget: "S$1.8k–2.4k", year: 2025,
    img: IMG("1523413651479-597eb2da0ad6", 900), gallery: ["1584622650111-993a426fbf0a", "1585704032915-c3400ca199e7"],
    summary: "Corroded 30-year-old pipes replaced with concealed copper piping, a new instant water heater and modern mixers, without hacking the existing wall tiles.",
    scope: ["Pressure & leak testing", "Concealed copper re-piping", "Instant water heater", "Mixer & shower set", "Basin & waste trap", "PUB-licensed sign-off"],
    review: { name: "Mdm Lee", text: "Strong water pressure again and no more rusty water. Very polite plumbers." },
  },
  {
    slug: "queenstown-feature-walls", title: "Feature wall repaint", area: "Queenstown", tag: "Painting", service: "painting",
    property: "HDB · 5-room", duration: "2 days", budget: "S$2.2k–2.8k", year: 2025,
    img: IMG("1631679706909-1844bbd07221", 900), gallery: ["1541123603104-512919d6a96c", "1618221195710-dd6b41faaea6"],
    summary: "A warm, neutral palette across the living, dining and two bedrooms, with a limewash feature wall behind the sofa, all using low-VOC paint so the family could stay in.",
    scope: ["Colour consultation", "Wall patching & sanding", "Low-VOC emulsion", "Limewash feature wall", "Ceiling repaint", "Furniture covering"],
    review: { name: "Nurul Aziz", text: "Zero smell, done over a weekend and the limewash wall is everyone's favourite." },
  },
  {
    slug: "yishun-aircon-overhaul", title: "Bedroom aircon overhaul", area: "Yishun", tag: "Aircon", service: "aircon",
    property: "HDB · 4-room", duration: "1 day", budget: "S$600–900", year: 2025,
    img: IMG("1600607687644-c7171b42498f", 900), gallery: ["1586023492125-27b2c045efd7", "1600607687644-c7171b42498f"],
    summary: "Three weak, leaking fan coils fully dismantled and chemically overhauled, with gas topped up and the drainage re-routed to stop the dripping for good.",
    scope: ["Full dismantle of 3 fan coils", "Chemical overhaul", "Gas pressure check & top-up", "Drain pipe re-routing", "Condenser wash", "Performance test"],
    review: { name: "Siti Rahman", text: "The bedrooms are properly cold again and the dripping has completely stopped." },
  },
  {
    slug: "marine-parade-hallway-mounting", title: "Hallway mirrors & shelving", area: "Marine Parade", tag: "Mounting", service: "drilling",
    property: "Condo · 2-bedroom", duration: "4 hours", budget: "S$350–500", year: 2025,
    img: IMG("1581858726788-75bc0f6a952d", 900), gallery: ["1558618666-fcd25c85cd64", "1581858726788-75bc0f6a952d"],
    summary: "A floating console, round mirror, art rail and concealed cable trunking, all laser-levelled and anchored properly into concrete walls.",
    scope: ["Pipe & cable detection", "Floating console mounting", "Mirror & art rail", "Concealed trunking", "Laser levelling", "Dust-free drilling"],
    review: { name: "Ben Tay", text: "Everything is perfectly level and there's not a speck of dust. Quick and tidy." },
  },
  {
    slug: "novena-clinic-refit", title: "Medical clinic refit", area: "Novena", tag: "Renovation", service: "electrical",
    property: "Commercial · Clinic", duration: "4 weeks", budget: "S$45k–55k", year: 2025,
    img: IMG("1519494026892-80bbd2d6fd0d", 900), gallery: ["1497366216548-37526070297c", "1497366811353-6870744d04b2"],
    summary: "A GP clinic refit carried out over nights and weekends so patients were never turned away, with new consult rooms, clinical lighting, hand-wash points and an accessible toilet.",
    scope: ["Night & weekend phasing", "Drywall consult rooms", "Clinical-grade lighting", "Hand-wash points & plumbing", "Accessible toilet", "Fire safety sign-off"],
    review: { name: "Dr. Aaron Seah", text: "We didn't lose a single clinic day. Their site lead coordinated with building management so we never had to." },
  },
  {
    slug: "jurong-east-cafe-fitout", title: "Neighbourhood café fit-out", area: "Jurong East", tag: "Construction", service: "plumbing",
    property: "Commercial · F&B", duration: "5 weeks", budget: "S$38k–46k", year: 2024,
    img: IMG("1554118811-1e0d58224f24", 900), gallery: ["1501339847302-ac426a4a7cbb", "1445116572660-236099ec97a0"],
    summary: "An empty shell unit turned into a 40-seat café, including grease-trap plumbing, kitchen exhaust, a feature bar counter and an SFA-compliant layout.",
    scope: ["SFA-compliant layout", "Grease trap & floor traps", "Kitchen exhaust ducting", "3-phase power upgrade", "Bar counter carpentry", "Tiling & feature lighting"],
    review: { name: "Hui Min Goh", text: "Opened on the date we promised our landlord. The bar counter is what everyone photographs." },
  },
];

/* Property type ("sector") is the first part of the property label */
const SECTORS = ["HDB", "Condo", "Landed", "Commercial"];
const sectorOf = (p) => p.property.split(" · ")[0];

/* About page */
const MILESTONES = [
  { year: "2012", title: "Two vans, one promise", text: "Founded in Geylang by a licensed electrician and a plumber who were tired of no-show contractors." },
  { year: "2015", title: "BCA registration", text: "Registered with the Building & Construction Authority and took on our first landed renovations." },
  { year: "2018", title: "Five regional hubs", text: "Crews stationed in the East, West, North, North-East and Central regions for faster arrivals." },
  { year: "2021", title: "WhatsApp-first booking", text: "Instant photo quotes on WhatsApp, now how 70% of our customers book." },
  { year: "2024", title: "18,000 jobs", text: "Passed 18,000 completed jobs, with a 4.9★ average rating from over 1,700 reviews." },
];

const VALUES = [
  { icon: "tag", title: "Price before work", text: "A firm, itemised quote you approve before we lift a tool. No call-out surprises." },
  { icon: "award", title: "Licensed, in-house crew", text: "Our own EMA- and PUB-licensed technicians, never random subcontractors." },
  { icon: "clock", title: "On time, every time", text: "Live arrival updates on WhatsApp. If we're late, your call-out fee is waived." },
  { icon: "shield", title: "Work we stand behind", text: "Every job is under warranty, up to 5 years on waterproofing." },
];

const TEAM = [
  { name: "Jason Ong", role: "Founder & EMA Licensed Electrician", years: 18 },
  { name: "Ahmad Firdaus", role: "Head of Plumbing (PUB Licensed)", years: 15 },
  { name: "Mei Ling Chen", role: "Customer Operations Lead", years: 9 },
  { name: "Ravi Kumar", role: "Renovation Project Manager", years: 14 },
];

const CERTS = [
  { name: "BCA Registered", text: "Building & Construction Authority contractor registration", issuer: "BCA Singapore", ref: "CW01 · Grade C3", valid: "2027" },
  { name: "EMA Licensed", text: "Licensed electrical workers for all installation work", issuer: "Energy Market Authority", ref: "LEW · Grade 8", valid: "2027" },
  { name: "PUB Licensed", text: "Licensed plumbers for water service work", issuer: "PUB, Singapore's National Water Agency", ref: "LP · Water service work", valid: "2026" },
  { name: "bizSAFE Level 3", text: "Workplace safety & health risk management certified", issuer: "Workplace Safety & Health Council", ref: "Risk management", valid: "2026" },
  { name: "ISO 9001:2015", text: "Quality management system for all site and office operations", issuer: "Accredited certification body", ref: "Quality management", valid: "2027" },
  { name: "ISO 45001:2018", text: "Occupational health & safety management system", issuer: "Accredited certification body", ref: "OH&S management", valid: "2027" },
];

/* How we work: the four commitments every crew signs up to */
const PILLARS = [
  { icon: "hardhat", title: "Safety", text: "Toolbox briefing before every job, PPE on every site and dust barriers in every home. Your family and our crew go home safe.", proof: "0 lost-time incidents in 2025" },
  { icon: "heart", title: "Integrity", text: "The price we quote is the price you pay. If we find something extra, we stop, show you a photo and let you decide.", proof: "98% of jobs billed at quoted price" },
  { icon: "users", title: "Teamwork", text: "One coordinator and one WhatsApp group for the whole job. Electricians, plumbers and carpenters plan the work together.", proof: "1 point of contact per project" },
  { icon: "award", title: "Quality", text: "Every job is signed off against a checklist, photographed and covered by a written warranty of up to five years.", proof: "Under 1% warranty call-backs" },
];

/* Safety & sustainability figures: { value, dec?, suffix?, label } */
const IMPACT = [
  { value: 1.2, dec: 1, suffix: "M", label: "Accident-free work hours" },
  { value: 100, suffix: "%", label: "Crew trained in-house each year" },
  { value: 42, suffix: "t", label: "Renovation waste recycled in 2025" },
  { value: 90, suffix: "%", label: "Jobs using low-VOC paint" },
];

/* Brands our crew installs and services */
const BRANDS = ["Nippon Paint", "Dulux", "Daikin", "Mitsubishi Electric", "Grohe", "Häfele", "Schneider Electric", "Philips", "TOTO", "Sika", "Joven", "Blum"];

/* Insights / latest updates: insights.html?a={slug} */
const NEWS = [
  {
    slug: "hdb-reno-permit-guide", cat: "Guides", date: "2026-09-18", read: 6,
    title: "HDB renovation permits: what needs one and what doesn't",
    img: IMG("1503387762-592deb58ef4e", 900),
    excerpt: "Hacking, window replacement and toilet works need approval. Painting and most carpentry don't. Here's the short list.",
    body: [
      "Most small repairs in an HDB flat need no permit at all. Painting, replacing tiles over existing ones, built-in carpentry and changing light fittings can all go ahead without HDB approval.",
      "You'll need a permit for hacking walls or floors, replacing windows, works in the bathroom that touch the waterproofing membrane, and anything involving gas pipes. As an HDB-registered renovation contractor we apply for these on your behalf.",
      "Approval usually takes 1–3 working days for straightforward jobs. We build that into the schedule so your start date doesn't slip.",
    ],
  },
  {
    slug: "academy-first-cohort", cat: "Academy", date: "2026-08-30", read: 3,
    title: "Ferron Academy graduates its first apprentice cohort",
    img: IMG("1581578731548-c64695cc6952", 900),
    excerpt: "Fourteen apprentices completed 12 weeks of electrical, plumbing and waterproofing training, and all fourteen joined our crews.",
    body: [
      "Fourteen apprentices have completed the first 12-week Ferron Academy programme, covering electrical basics, plumbing, waterproofing and site safety.",
      "Each apprentice spent half the programme in our Geylang workshop and half on live jobs, paired with a senior technician. All fourteen have now joined our regional crews.",
      "Applications for the next intake open in November. Homeowner workshops continue every month.",
    ],
  },
  {
    slug: "monsoon-leak-checklist", cat: "Guides", date: "2026-08-12", read: 4,
    title: "Before the monsoon: a 10-minute leak checklist",
    img: IMG("1584622650111-993a426fbf0a", 900),
    excerpt: "Check silicone joints, floor traps and the ceiling under your bathroom before the November rains arrive.",
    body: [
      "The north-east monsoon brings Singapore's heaviest rain from November. Ten minutes of checking now can save a ceiling repair later.",
      "Look for cracked or black silicone around the shower and basin, slow-draining floor traps, and any brown staining on the ceiling below your bathroom or under the aircon trunking.",
      "Spot something? Send us a photo on WhatsApp and we'll tell you whether it's a quick reseal or a job for full waterproofing.",
    ],
  },
  {
    slug: "fifth-regional-hub", cat: "Company", date: "2026-07-02", read: 2,
    title: "New Punggol hub cuts north-east arrival times",
    img: IMG("1565008447742-97f6f38c985c", 900),
    excerpt: "A new crew base near Punggol Digital District brings average arrival times in Sengkang and Punggol under 35 minutes.",
    body: [
      "We've opened a new crew base near Punggol Digital District, our sixth across the island.",
      "With eight technicians and two vans stationed there, average arrival times in Punggol, Sengkang and Hougang are now under 35 minutes.",
    ],
  },
  {
    slug: "clinic-refit-case-study", cat: "Projects", date: "2026-06-15", read: 5,
    title: "How we refitted a working clinic without closing it",
    img: IMG("1519494026892-80bbd2d6fd0d", 900),
    excerpt: "Phased night and weekend work kept a busy Novena GP clinic open throughout a four-week refit.",
    body: [
      "A busy GP clinic in Novena needed new consult rooms, lighting and an accessible toilet, but couldn't afford to close.",
      "We split the job into eleven night and weekend phases, sealing off each zone with dust barriers and handing it back clean before morning clinic.",
      "Read the full project, including scope and budget, on the project page.",
    ],
  },
  {
    slug: "low-voc-switch", cat: "Company", date: "2026-05-20", read: 3,
    title: "Why 90% of our paint jobs now use low-VOC paint",
    img: IMG("1562259949-e8e7689d7828", 900),
    excerpt: "Low-VOC paint lets families stay home during repainting, and it's now our default at no extra cost.",
    body: [
      "Low-VOC paints release far fewer fumes while drying, so most families can stay in the flat while we paint.",
      "We've made low-VOC paint our default on interior jobs at no extra charge. It's one part of a wider push that also saw us recycle 42 tonnes of renovation waste last year.",
    ],
  },
];

/* Ferron Academy: training for tradespeople and homeowners */
const ACADEMY = {
  about: "Ferron Academy runs hands-on courses for people entering the trades and short workshops for homeowners. Every course is taught by our own licensed technicians in our Geylang workshop and on live job sites.",
  goals: [
    "Grow the next generation of licensed, safety-first tradespeople in Singapore",
    "Give apprentices real site hours alongside a senior technician",
    "Help homeowners handle small fixes safely and know when to call a pro",
    "Raise workmanship standards across the home repair industry",
  ],
  conditions: [
    "Tradespeople courses: aged 18+, Singapore Citizen, PR or valid work pass",
    "Electrical and plumbing courses build towards EMA and PUB licensing requirements",
    "Homeowner workshops are open to everyone, with no experience needed",
    "Ferron customers and alumni get 30% off all course fees",
  ],
  steps: [
    { title: "Choose a course", text: "Filter by track, audience or format below." },
    { title: "Request a seat", text: "Send the enrolment form. We'll confirm on WhatsApp within a day." },
    { title: "Pay & prepare", text: "Pay by PayNow or card. Safety boots and PPE are provided." },
    { title: "Train & certify", text: "Attend, pass the practical assessment and receive your certificate." },
  ],
  faqs: [
    { q: "Do I get a certificate?", a: "Yes. Every course ends with a practical assessment and a Ferron Academy certificate. Licensing-track courses also count towards EMA or PUB requirements." },
    { q: "Can I get a job with Ferron afterwards?", a: "Top apprentices are offered roles on our crews. All fourteen graduates of our first cohort joined us." },
    { q: "Are the courses in English?", a: "Courses are taught in English, and our trainers can also assist in Mandarin, Malay and Tamil." },
    { q: "Can my company book a private session?", a: "Yes. We run private safety and maintenance training for property managers and facilities teams. Contact us for a quote." },
  ],
};

const TRACKS = [
  { name: "Electrical", icon: "bolt", text: "Wiring, DB boxes and safety testing" },
  { name: "Plumbing", icon: "drop", text: "Pipework, fittings and leak repair" },
  { name: "Waterproofing", icon: "shield", text: "Membranes, injection and ponding tests" },
  { name: "Carpentry & Finishing", icon: "cabinet", text: "Cabinetry, painting and flooring" },
  { name: "Site Safety", icon: "hardhat", text: "bizSAFE, PPE and risk assessment" },
  { name: "Project Management", icon: "doc", text: "Quoting, permits and client care" },
];

/* fee in S$; audience: Tradespeople | Homeowners; format: Course | Workshop */
const COURSES = [
  { slug: "electrical-fundamentals", title: "Domestic electrical fundamentals", track: "Electrical", audience: "Tradespeople", format: "Course", level: "Beginner", duration: "6 weeks", start: "2026-11-09", fee: 1450, seats: 4 },
  { slug: "db-box-testing", title: "DB box upgrades & safety testing", track: "Electrical", audience: "Tradespeople", format: "Course", level: "Intermediate", duration: "3 weeks", start: "2026-11-23", fee: 980, seats: 7 },
  { slug: "plumbing-essentials", title: "Plumbing essentials for HDB & condo", track: "Plumbing", audience: "Tradespeople", format: "Course", level: "Beginner", duration: "5 weeks", start: "2026-11-02", fee: 1280, seats: 2 },
  { slug: "membrane-waterproofing", title: "Bathroom membrane waterproofing", track: "Waterproofing", audience: "Tradespeople", format: "Course", level: "Intermediate", duration: "2 weeks", start: "2026-12-07", fee: 760, seats: 9 },
  { slug: "bizsafe-level-2", title: "bizSAFE Level 2: risk management", track: "Site Safety", audience: "Tradespeople", format: "Workshop", level: "All levels", duration: "2 days", start: "2026-10-27", fee: 320, seats: 12 },
  { slug: "quoting-and-permits", title: "Quoting, permits & client care", track: "Project Management", audience: "Tradespeople", format: "Workshop", level: "Intermediate", duration: "1 day", start: "2026-11-14", fee: 240, seats: 10 },
  { slug: "home-fix-basics", title: "Home fix basics: taps, traps & sealant", track: "Plumbing", audience: "Homeowners", format: "Workshop", level: "Beginner", duration: "3 hours", start: "2026-10-24", fee: 68, seats: 6 },
  { slug: "paint-like-a-pro", title: "Paint like a pro: prep, cut-in & finish", track: "Carpentry & Finishing", audience: "Homeowners", format: "Workshop", level: "Beginner", duration: "3 hours", start: "2026-11-07", fee: 75, seats: 11 },
  { slug: "home-electrical-safety", title: "Home electrical safety for families", track: "Electrical", audience: "Homeowners", format: "Workshop", level: "Beginner", duration: "2 hours", start: "2026-11-21", fee: 45, seats: 15 },
];

/* Careers: open roles */
const JOBS = [
  { title: "Licensed Electrician (LEW)", team: "Field crew", type: "Full-time", base: "East hub", exp: "3+ years" },
  { title: "PUB Licensed Plumber", team: "Field crew", type: "Full-time", base: "West hub", exp: "3+ years" },
  { title: "Waterproofing Specialist", team: "Field crew", type: "Full-time", base: "Central hub", exp: "2+ years" },
  { title: "Renovation Project Manager", team: "Projects", type: "Full-time", base: "Robert's Lane HQ", exp: "5+ years" },
  { title: "Customer Coordinator", team: "Operations", type: "Full-time", base: "Robert's Lane HQ", exp: "1+ years" },
  { title: "Apprentice Technician", team: "Academy", type: "12-week programme", base: "Geylang workshop", exp: "No experience" },
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
  hardhat: '<path d="M2 18h20M4 18v-3a8 8 0 0 1 16 0v3"/><path d="M10 7V5h4v2M12 7v5"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 3.1a4 4 0 0 1 0 7.8M22 21a7 7 0 0 0-5-6.7"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 5-10 16-10 0 11-4 17-9 17Z"/><path d="M4 21c3-6 7-9 11-11"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  map: '<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3ZM9 3v15M15 6v15"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
};

const icon = (name, cls = "") =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

const WA_ICON = '<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 17.9L.2 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z"/></svg>';
