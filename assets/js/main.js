/* ==========================================================================
   Ferron Construction SG — shared UI
   Layout pieces (header, footer, drawer, FAB) are rendered here so every page
   shares them — the same split the React build will use as components.
   ========================================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
const waLink = (msg = "Hi Ferron, I'd like a quote.") => `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(msg)}`;
const svcBySlug = (s) => SERVICES.find((x) => x.slug === s);
const locBySlug = (s) => LOCATIONS.find((x) => x.slug === s);
const priceLabel = (s) => `From S$${s.from}${s.unit || ""}`;
const AV_COLORS = ["#ff5b1f", "#141311", "#5b6cff", "#16a37f", "#c2410c", "#7c3aed"];

const LOGO = `
  <span class="logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/></svg></span>
  <span>Ferron<small>CONSTRUCTION · SG</small></span>`;

/* ---------- Layout ---------- */
function renderLayout(active = "") {
  const megaItems = SERVICES.map((s) => `
    <a class="mega-item" href="service.html?s=${s.slug}">
      <span class="mi-ico">${icon(s.icon)}</span>
      <span><b>${s.name}</b><span>${s.tagline}</span></span>
    </a>`).join("");

  const header = `
  <div class="topbar">
    <div class="container">
      <div class="tb-left">
        <span class="live"><i></i> Technicians available now</span>
        <span class="tb-hide">${icon("clock")} ${COMPANY.hours}</span>
      </div>
      <div class="tb-right">
        <a class="tb-hide" href="mailto:${COMPANY.email}">${COMPANY.email}</a>
        <a href="tel:+${COMPANY.phoneRaw}"><b>${COMPANY.phone}</b></a>
      </div>
    </div>
  </div>
  <header class="nav" id="nav">
    <div class="container">
      <a href="index.html" class="logo" aria-label="Ferron Construction home">${LOGO}</a>
      <ul class="menu">
        <li><a href="index.html" class="${active === "home" ? "active" : ""}">Home</a></li>
        <li class="has-mega">
          <a href="services.html" class="${active === "services" ? "active" : ""}">Services
            <svg class="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m2 3.5 3 3 3-3"/></svg></a>
          <div class="mega">
            <div class="mega-grid">${megaItems}</div>
            <a class="mega-feature" href="contact.html">
              <img src="${IMG("1541888946425-d81bb19240f5", 600)}" alt="">
              <span class="eyebrow" style="color:#fff">24/7 Emergency</span>
              <b style="margin-top:10px">Burst pipe? Power trip?<br>We're 30 min away.</b>
            </a>
          </div>
        </li>
        <li><a href="areas.html" class="${active === "locations" ? "active" : ""}">Areas</a></li>
        <li><a href="projects.html" class="${active === "projects" ? "active" : ""}">Projects</a></li>
        <li><a href="about.html" class="${active === "about" ? "active" : ""}">About</a></li>
        <li><a href="contact.html" class="${active === "contact" ? "active" : ""}">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn btn-ghost" href="tel:+${COMPANY.phoneRaw}">${icon("phone")} Call</a>
        <a class="btn btn-ember" href="contact.html">Free quote ${icon("arrow")}</a>
        <button class="burger" id="burger" aria-label="Open menu">${icon("menu")}</button>
      </div>
    </div>
  </header>
  <div class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer-head">
      <a href="index.html" class="logo" style="color:#fff">${LOGO}</a>
      <button class="burger" id="drawerClose" style="display:grid;background:#fff;color:#141311" aria-label="Close menu">${icon("x")}</button>
    </div>
    <nav>
      <a href="index.html">Home ${icon("arrowUR")}</a>
      <a href="services.html">Services ${icon("arrowUR")}</a>
      <a href="areas.html">Service areas ${icon("arrowUR")}</a>
      <a href="projects.html">Projects ${icon("arrowUR")}</a>
      <a href="about.html">About us ${icon("arrowUR")}</a>
      <a href="contact.html">Get a quote ${icon("arrowUR")}</a>
    </nav>
    <div class="drawer-services">${SERVICES.map((s) => `<a class="chip" href="service.html?s=${s.slug}">${s.name}</a>`).join("")}</div>
    <div class="drawer-foot">
      <a class="btn btn-wa btn-lg" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON} WhatsApp us</a>
      <a class="btn btn-light btn-lg" href="tel:+${COMPANY.phoneRaw}">${icon("phone")} ${COMPANY.phone}</a>
    </div>
  </div>`;

  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <a href="index.html" class="logo">${LOGO}</a>
          <p style="max-width:36ch;margin:20px 0 0">Licensed home repair, renovation and maintenance specialists serving every neighbourhood in Singapore since 2012.</p>
          <form class="footer-news" onsubmit="event.preventDefault();this.innerHTML='<span style=&quot;padding:12px 14px;color:#fff&quot;>Thanks — you\\'re on the list ✓</span>'">
            <input type="email" required placeholder="Your email for maintenance tips">
            <button class="btn btn-ember">Join</button>
          </form>
          <div class="socials"><a href="#" aria-label="Facebook">Fb</a><a href="#" aria-label="Instagram">Ig</a><a href="#" aria-label="TikTok">Tk</a><a href="#" aria-label="YouTube">Yt</a></div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>${SERVICES.map((s) => `<li><a href="service.html?s=${s.slug}">${s.name}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Popular areas</h4>
          <ul>${LOCATIONS.slice(0, 8).map((l) => `<li><a href="location.html?area=${l.slug}">${l.name}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="services.html">All services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="areas.html">Service areas</a></li>
            <li><a href="index.html#reviews">Reviews</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
            <li><a href="contact.html">Contact &amp; quote</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+${COMPANY.phoneRaw}">${COMPANY.phone}</a></li>
            <li><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></li>
            <li>${COMPANY.address}</li>
            <li>${COMPANY.hours}</li>
          </ul>
        </div>
      </div>
      <div class="footer-word" aria-hidden="true">Ferron&nbsp;SG</div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Ferron Construction Pte. Ltd. · UEN 2012XXXXXK</span>
        <span>BCA Registered · EMA &amp; PUB Licensed · bizSAFE Level 3</span>
      </div>
    </div>
  </footer>
  <div class="fab">
    <a class="call" href="tel:+${COMPANY.phoneRaw}" aria-label="Call us">${icon("phone")}</a>
    <a class="wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp us">${WA_ICON}<span class="tip">Hi 👋 Need a quick quote?</span></a>
  </div>
  <div class="mbar">
    <a href="tel:+${COMPANY.phoneRaw}">${icon("phone")} Call</a>
    <a class="wa" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON} Chat</a>
    <a class="q" href="contact.html">Free quote</a>
  </div>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  // nav state
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // drawer
  const drawer = $("#drawer");
  const toggle = (open) => { drawer.classList.toggle("open", open); drawer.setAttribute("aria-hidden", !open); document.body.style.overflow = open ? "hidden" : ""; };
  $("#burger").onclick = () => toggle(true);
  $("#drawerClose").onclick = () => toggle(false);
  $$("#drawer a").forEach((a) => a.addEventListener("click", () => toggle(false)));
}

/* ---------- Effects ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
}

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, dec = +(el.dataset.dec || 0);
      const t0 = performance.now(), dur = 1800;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1), v = end * (1 - Math.pow(1 - p, 4));
        el.textContent = v.toLocaleString("en-SG", { minimumFractionDigits: dec, maximumFractionDigits: dec });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$("[data-count]").forEach((el) => io.observe(el));
}

function initParallax() {
  const els = $$("[data-parallax]");
  if (!els.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const run = () => {
    els.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      el.style.transform = `translate3d(0, ${(r.top * -0.12).toFixed(1)}px, 0) scale(1.04)`;
    });
  };
  addEventListener("scroll", () => requestAnimationFrame(run), { passive: true });
  run();
}

/* ---------- Components ---------- */
const serviceCard = (s, extra = "") => `
  <a class="svc reveal" href="service.html?s=${s.slug}${extra}">
    <img src="${s.img}" alt="${s.name} service" loading="lazy">
    <div class="svc-top"><span class="svc-ico">${icon(s.icon)}</span><span class="svc-go">${icon("arrowUR")}</span></div>
    <div>
      <h3>${s.name}</h3>
      <p>${s.tagline}</p>
      <div class="svc-list">${s.includes.slice(0, 4).map((i) => `<span>${i}</span>`).join("")}</div>
      <span class="price">${priceLabel(s)}</span>
    </div>
  </a>`;

const reviewCard = (r, i) => `
  <article class="review">
    <div class="stars">${icon("star").repeat(5)}</div>
    <blockquote>${r.text}</blockquote>
    <div class="review-who">
      <span class="av" style="background:${AV_COLORS[i % AV_COLORS.length]}">${r.name.split(" ").map((n) => n[0]).join("")}</span>
      <div><b>${r.name}</b><span>${r.area}</span></div>
      <span class="svc-badge">${r.service}</span>
    </div>
  </article>`;

const projBySlug = (s) => PROJECTS.find((x) => x.slug === s);
const areaSlug = (name) => LOCATIONS.find((l) => l.name === name)?.slug || "";

const projectCard = (p, i = 0) => `
  <a class="pj reveal" style="--d:${(i % 3) * 0.1}s" href="project.html?p=${p.slug}">
    <img src="${p.img}" alt="${p.title}" loading="lazy">
    <span class="pj-tag">${p.tag}</span>
    <div class="pj-info"><div><b>${p.title}</b><span>${icon("pin")} ${p.area}</span></div>${icon("arrowUR")}</div>
  </a>`;

/* Before / after slider: <div class="ba"> with two imgs, tags and .ba-handle */
function initBA(ba) {
  if (!ba) return;
  let drag = false;
  const set = (x) => {
    const r = ba.getBoundingClientRect();
    ba.style.setProperty("--pos", `${Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100))}%`);
  };
  ba.addEventListener("pointerdown", (e) => { drag = true; ba.setPointerCapture(e.pointerId); set(e.clientX); });
  ba.addEventListener("pointermove", (e) => drag && set(e.clientX));
  ba.addEventListener("pointerup", () => (drag = false));
  // gentle intro sweep when it scrolls into view
  new IntersectionObserver(([e], io) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    let t0;
    const sweep = (t) => {
      t0 ??= t;
      const p = Math.min((t - t0) / 1600, 1);
      if (!drag) ba.style.setProperty("--pos", `${50 + Math.sin(p * Math.PI * 2) * 22}%`);
      if (p < 1) requestAnimationFrame(sweep);
    };
    requestAnimationFrame(sweep);
  }, { threshold: 0.6 }).observe(ba);
}

/* Quote wizard — renders into an empty <form class="wizard">.
   Deep-link ?svc={slug} preselects a service. */
function mountWizard(form) {
  form.innerHTML = `
    <div class="wz-progress"><i class="done"></i><i></i><i></i></div>

    <div class="wz-step on" data-step="1">
      <h3>What do you need help with?</h3>
      <p>Pick the closest match — you can add details later.</p>
      <div class="opt-grid c4">${SERVICES.map((s, i) => `
        <label class="opt"><input type="radio" name="svc" value="${s.slug}" ${i === 0 ? "checked" : ""}>
        <span>${icon(s.icon)}${s.name}<small>${priceLabel(s)}</small></span></label>`).join("")}</div>
    </div>

    <div class="wz-step" data-step="2">
      <h3>Tell us about your place</h3>
      <p>This helps us send the right crew and estimate accurately.</p>
      <div class="opt-grid" style="margin-bottom:16px">
        <label class="opt"><input type="radio" name="prop" value="HDB flat" data-m="1" checked><span>HDB flat<small>3 to 5-room, executive</small></span></label>
        <label class="opt"><input type="radio" name="prop" value="Condo / EC" data-m="1.15"><span>Condo / EC<small>MCST approvals handled</small></span></label>
        <label class="opt"><input type="radio" name="prop" value="Landed" data-m="1.35"><span>Landed<small>Terrace, semi-D, bungalow</small></span></label>
        <label class="opt"><input type="radio" name="prop" value="Commercial" data-m="1.5"><span>Commercial<small>Office, retail, F&amp;B</small></span></label>
      </div>
      <div class="field-row">
        <div class="field"><label for="wzArea">Area</label><select id="wzArea">${LOCATIONS.map((l) => `<option value="${l.slug}">${l.name}</option>`).join("")}</select></div>
        <div class="field"><label for="wzWhen">When?</label>
          <select id="wzWhen"><option>Emergency (ASAP)</option><option selected>Within this week</option><option>Next 2–4 weeks</option><option>Just planning</option></select>
        </div>
      </div>
      <div class="est"><span>Estimated starting price</span><b id="wzEst">—</b></div>
    </div>

    <div class="wz-step" data-step="3">
      <h3>Where should we send your quote?</h3>
      <p>We'll reply on WhatsApp. No spam, ever.</p>
      <div class="field-row">
        <div class="field"><label for="wzName">Name</label><input id="wzName" required placeholder="Jane Tan"></div>
        <div class="field"><label for="wzPhone">Mobile</label><input id="wzPhone" required type="tel" placeholder="+65 9123 4567"></div>
      </div>
      <div class="field"><label for="wzNote">Describe the job (optional)</label><textarea id="wzNote" placeholder="e.g. Kitchen sink leaking under the cabinet since yesterday"></textarea></div>
    </div>

    <div class="wz-step" data-step="4">
      <div class="wz-done">
        <div class="ok">${icon("check")}</div>
        <h3>You're all set, <span id="doneName">friend</span>!</h3>
        <p class="muted" style="margin:8px auto 24px;max-width:40ch">A coordinator will WhatsApp your itemised quote within 15 minutes. Want it faster? Chat with us now.</p>
        <a class="btn btn-wa btn-lg" id="doneWa" target="_blank" rel="noopener">${WA_ICON} Continue on WhatsApp</a>
      </div>
    </div>

    <div class="wz-foot" id="wzFoot">
      <button type="button" class="wz-back" id="wzBack" hidden>← Back</button>
      <button type="button" class="btn btn-ember btn-lg" id="wzNext">Continue</button>
    </div>`;

  let cur = 1;
  const estimate = () => {
    const s = svcBySlug(form.svc.value);
    const m = +form.querySelector("[name=prop]:checked").dataset.m;
    const urgent = $("#wzWhen").selectedIndex === 0 ? 1.2 : 1;
    $("#wzEst").textContent = `S$${Math.round(s.from * m * urgent)}${s.unit || ""}+`;
  };
  form.addEventListener("change", estimate);

  const show = (n) => {
    cur = n;
    $$(".wz-step", form).forEach((s) => s.classList.toggle("on", +s.dataset.step === n));
    $$(".wz-progress i", form).forEach((b, i) => b.classList.toggle("done", i < n));
    $("#wzBack").hidden = n === 1;
    $("#wzNext").textContent = n === 3 ? "Send my quote" : "Continue";
    $("#wzFoot").style.display = n === 4 ? "none" : "";
    if (n === 2) estimate();
  };

  $("#wzNext").onclick = () => {
    if (cur === 3) {
      const name = $("#wzName"), phone = $("#wzPhone");
      [name, phone].forEach((f) => (f.style.boxShadow = f.value.trim() ? "" : "inset 0 0 0 2px #e2470f"));
      if (!name.value.trim() || !phone.value.trim()) return;
      const s = svcBySlug(form.svc.value), l = locBySlug($("#wzArea").value);
      $("#doneName").textContent = name.value.trim().split(" ")[0];
      $("#doneWa").href = waLink(`Hi Ferron, I'm ${name.value.trim()}. I need ${s.name} at my ${form.querySelector("[name=prop]:checked").value} in ${l.name} (${$("#wzWhen").value}). ${$("#wzNote").value}`);
    }
    show(cur + 1);
  };
  $("#wzBack").onclick = () => show(cur - 1);

  const pre = params.get("svc"), preArea = params.get("area");
  if (pre && form.querySelector(`[value="${pre}"]`)) form.querySelector(`[value="${pre}"]`).checked = true;
  if (preArea && locBySlug(preArea)) $("#wzArea").value = preArea;
}

/* Singapore outline (lon, lat) → simplified for the area map */
const SG_OUTLINE = [[103.62,1.30],[103.64,1.335],[103.67,1.37],[103.70,1.425],[103.735,1.44],[103.77,1.452],[103.80,1.448],[103.83,1.468],[103.86,1.45],[103.875,1.425],[103.91,1.425],[103.95,1.395],[103.985,1.395],[104.03,1.39],[104.045,1.36],[104.02,1.33],[103.98,1.315],[103.935,1.298],[103.89,1.29],[103.86,1.268],[103.83,1.262],[103.80,1.272],[103.76,1.282],[103.72,1.298],[103.68,1.285],[103.64,1.282]];
const LOC_COORDS = { tampines:[103.945,1.353], bedok:[103.927,1.324], "pasir-ris":[103.949,1.373], changi:[103.99,1.35], "jurong-east":[103.742,1.333], "jurong-west":[103.705,1.34], clementi:[103.765,1.315], "bukit-batok":[103.749,1.359], woodlands:[103.786,1.436], yishun:[103.835,1.425], sembawang:[103.82,1.445], "ang-mo-kio":[103.846,1.37], punggol:[103.902,1.405], sengkang:[103.895,1.391], hougang:[103.889,1.372], serangoon:[103.872,1.354], "toa-payoh":[103.848,1.334], bishan:[103.835,1.351], queenstown:[103.786,1.294], "bukit-timah":[103.796,1.33], novena:[103.844,1.32], "marine-parade":[103.905,1.302] };
const proj = ([lon, lat]) => [((lon - 103.6) * 1600 + 30).toFixed(1), ((1.49 - lat) * 1600).toFixed(1)];

function sgMapSVG() {
  const d = "M" + SG_OUTLINE.map((p) => proj(p).join(",")).join(" L") + " Z";
  const grid = Array.from({ length: 9 }, (_, i) => `<line class="grid-line" x1="${i * 100}" y1="0" x2="${i * 100}" y2="400"/>`).join("") +
               Array.from({ length: 5 }, (_, i) => `<line class="grid-line" x1="0" y1="${i * 100}" x2="800" y2="${i * 100}"/>`).join("");
  const pins = LOCATIONS.map((l) => {
    const [x, y] = proj(LOC_COORDS[l.slug]);
    return `<a href="location.html?area=${l.slug}" class="pin-dot" data-slug="${l.slug}" data-region="${l.region}">
      <circle class="halo" cx="${x}" cy="${y}" r="20"/><circle class="c" cx="${x}" cy="${y}" r="5"/>
      <text x="${x}" y="${y - 12}" text-anchor="middle">${l.name}</text></a>`;
  }).join("");
  return `<svg class="map" viewBox="0 0 800 400" role="img" aria-label="Map of Singapore service areas">
    ${grid}<path class="island" d="${d}" stroke-linejoin="round"/>${pins}</svg>`;
}

/* Replace <i data-i="name"> hooks in static markup with SVG icons */
function hydrateIcons(root = document) {
  $$("[data-i]", root).forEach((el) => {
    if (el.tagName === "I") el.outerHTML = icon(el.dataset.i);
    else el.innerHTML = icon(el.dataset.i);
  });
}
