/* ==========================================================================
   Home page
   ========================================================================== */
renderLayout("home");
hydrateIcons();

/* ---------- Hero ---------- */
$("#hfIco").innerHTML = icon("clock");
$("#hfIco2").innerHTML = icon("shield");
$("#heroWa").href = waLink();
$("#heroWa").insertAdjacentHTML("afterbegin", WA_ICON + " ");
$("#fService").innerHTML = SERVICES.map((s) => `<option value="${s.slug}">${s.name}</option>`).join("");
$("#fArea").innerHTML = REGIONS.map((r) =>
  `<optgroup label="${r}">${LOCATIONS.filter((l) => l.region === r).map((l) => `<option value="${l.slug}">${l.name}</option>`).join("")}</optgroup>`
).join("");
$("#finder").addEventListener("submit", (e) => {
  e.preventDefault();
  location.href = `service.html?s=${$("#fService").value}&area=${$("#fArea").value}`;
});

/* ---------- Marquee ---------- */
const mq = ["EMA Licensed Electricians", "PUB Licensed Plumbers", "BCA Registered", "bizSAFE Level 3", "Same-day Service", "Up to 5-yr Warranty", "Free Quotation", "24/7 Emergency"];
$("#marquee").innerHTML = [...mq, ...mq].map((t) => `<span class="marquee-item">${icon("star")}${t}</span>`).join("");

/* ---------- Services ---------- */
$("#bento").innerHTML = SERVICES.map((s) => serviceCard(s)).join("");
$$("#bento .svc").forEach((el, i) => el.style.setProperty("--d", `${(i % 4) * 0.08}s`));

/* ---------- Locations ---------- */
$("#sgMap").innerHTML = sgMapSVG();
let region = "All";
const setArea = (slug) => {
  const l = locBySlug(slug);
  $$(".pin-dot").forEach((p) => p.classList.toggle("on", p.dataset.slug === slug));
  $$(".area-link").forEach((a) => a.classList.toggle("on", a.dataset.slug === slug));
  $("#lpName").textContent = l.name;
  $("#lpMeta").textContent = `${l.region} region · ${l.homes} · Avg. arrival ~${l.eta} min`;
  $("#lpLink").href = `location.html?area=${l.slug}`;
  $("#lpLink").innerHTML = `Services in ${l.name} ${icon("arrow")}`;
};
const renderAreas = () => {
  const q = $("#locSearch").value.trim().toLowerCase();
  const list = LOCATIONS.filter((l) => (region === "All" || l.region === region) && l.name.toLowerCase().includes(q));
  $("#areaList").innerHTML = list.length
    ? list.map((l) => `<a class="area-link" data-slug="${l.slug}" href="location.html?area=${l.slug}">${l.name}${icon("arrowUR")}</a>`).join("")
    : `<p class="muted" style="grid-column:1/-1;margin:8px 0">No match — we likely still cover it. <a href="#quote" style="color:var(--ember);font-weight:600">Ask us →</a></p>`;
  const shown = new Set(list.map((l) => l.slug));
  $$(".pin-dot").forEach((p) => p.classList.toggle("dim", !shown.has(p.dataset.slug)));
  $$(".area-link").forEach((a) => a.addEventListener("mouseenter", () => setArea(a.dataset.slug)));
};
$("#regionFilter").innerHTML = ["All", ...REGIONS].map((r) => `<button class="chip ${r === "All" ? "active" : ""}" data-r="${r}">${r}</button>`).join("");
$("#regionFilter").addEventListener("click", (e) => {
  const b = e.target.closest(".chip"); if (!b) return;
  region = b.dataset.r;
  $$("#regionFilter .chip").forEach((c) => c.classList.toggle("active", c === b));
  renderAreas();
});
$("#locSearch").addEventListener("input", renderAreas);
$$(".pin-dot").forEach((p) => p.addEventListener("mouseenter", () => setArea(p.dataset.slug)));
renderAreas();
setArea("tampines");

/* ---------- Before / after ---------- */
initBA($("#ba"));

/* ---------- How we work ---------- */
$("#pillars").innerHTML = pillarCards();
$("#impact").innerHTML = impactStats();

/* ---------- Projects ---------- */
$("#projectGrid").innerHTML = PROJECTS.slice(0, 6).map(projectCard).join("");

/* ---------- Certificates & brands ---------- */
$("#certChips").innerHTML = CERTS.map((c) => `<span>${icon("award")} ${c.name}</span>`).join("");
$("#brands").innerHTML = brandStrip();

/* ---------- Reviews ---------- */
$("#ratingStars").innerHTML = icon("star").repeat(5);
$("#carousel").innerHTML = TESTIMONIALS.map(reviewCard).join("");
$("#carPrev").innerHTML = icon("arrow");
$("#carNext").innerHTML = icon("arrow");
const car = $("#carousel");
const step = () => car.querySelector(".review").offsetWidth + 14;
$("#carPrev").onclick = () => car.scrollBy({ left: -step(), behavior: "smooth" });
$("#carNext").onclick = () => car.scrollBy({ left: step(), behavior: "smooth" });

/* ---------- Latest updates ---------- */
$("#newsGrid").innerHTML = NEWS.slice(0, 3).map(newsCard).join("");

/* ---------- Quote wizard ---------- */
mountWizard($("#wizard"));

/* ---------- FAQ ---------- */
$("#faqList").innerHTML = FAQS.map((f, i) => `
  <details class="reveal" ${i === 0 ? "open" : ""}>
    <summary>${f.q}<span class="pm">${icon("plus")}</span></summary>
    <p>${f.a}</p>
  </details>`).join("");
$("#faqWa").href = waLink();
$("#faqCall").href = `tel:+${COMPANY.phoneRaw}`;

/* ---------- CTA ---------- */
$("#ctaCall").href = `tel:+${COMPANY.phoneRaw}`;
$("#ctaCall").innerHTML = `${icon("phone")} ${COMPANY.phone}`;
$("#ctaWa").href = waLink("Hi Ferron, I have an urgent job.");
$("#ctaWa").insertAdjacentHTML("afterbegin", WA_ICON + " ");

initReveal();
initCounters();
initParallax();
