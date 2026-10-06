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
(() => {
  const ba = $("#ba");
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
})();

/* ---------- Projects ---------- */
$("#projectGrid").innerHTML = PROJECTS.map((p, i) => `
  <a class="pj reveal" style="--d:${(i % 3) * 0.1}s" href="location.html?area=${LOCATIONS.find((l) => l.name === p.area)?.slug || ""}">
    <img src="${p.img}" alt="${p.title}" loading="lazy">
    <span class="pj-tag">${p.tag}</span>
    <div class="pj-info"><div><b>${p.title}</b><span>${icon("pin")} ${p.area}</span></div>${icon("arrowUR")}</div>
  </a>`).join("");

/* ---------- Reviews ---------- */
$("#ratingStars").innerHTML = icon("star").repeat(5);
$("#carousel").innerHTML = TESTIMONIALS.map(reviewCard).join("");
$("#carPrev").innerHTML = icon("arrow");
$("#carNext").innerHTML = icon("arrow");
const car = $("#carousel");
const step = () => car.querySelector(".review").offsetWidth + 14;
$("#carPrev").onclick = () => car.scrollBy({ left: -step(), behavior: "smooth" });
$("#carNext").onclick = () => car.scrollBy({ left: step(), behavior: "smooth" });

/* ---------- Quote wizard ---------- */
(() => {
  const form = $("#wizard");
  let cur = 1;
  $("#wzServices").innerHTML = SERVICES.map((s, i) => `
    <label class="opt"><input type="radio" name="svc" value="${s.slug}" ${i === 0 ? "checked" : ""}>
    <span>${icon(s.icon)}${s.name}<small>${priceLabel(s)}</small></span></label>`).join("");
  $("#wzArea").innerHTML = LOCATIONS.map((l) => `<option value="${l.slug}">${l.name}</option>`).join("");
  $("#okIco").innerHTML = icon("check");

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
      $("#doneWa").insertAdjacentHTML("afterbegin", WA_ICON + " ");
    }
    show(cur + 1);
  };
  $("#wzBack").onclick = () => show(cur - 1);

  // deep-link: index.html?svc=plumbing#quote preselects a service
  const pre = params.get("svc");
  if (pre && form.querySelector(`[value="${pre}"]`)) form.querySelector(`[value="${pre}"]`).checked = true;
})();

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
