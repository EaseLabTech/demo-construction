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
initReel();
$("#fService").innerHTML =SERVICES.map((s) => `<option value="${s.slug}">${s.name}</option>`).join("");
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

/* ---------- Why Ferron slider ---------- */
const rs = $("#reasons");
const rsStep = () => rs.querySelector(".reason").offsetWidth + 14;
$("#rsPrev").innerHTML = icon("arrow");
$("#rsNext").innerHTML = icon("arrow");
$("#rsPrev").onclick = () => rs.scrollBy({ left: -rsStep(), behavior: "smooth" });
$("#rsNext").onclick = () => { rsAtEnd() ? rs.scrollTo({ left: 0, behavior: "smooth" }) : rs.scrollBy({ left: rsStep(), behavior: "smooth" }); };
initReasonsMotion();

/* ---------- Services ---------- */
$("#bento").innerHTML = SERVICES.map((s) => serviceCard(s)).join("");
$$("#bento .svc").forEach((el, i) => el.style.setProperty("--d", `${(i % 4) * 0.08}s`));

/* ---------- Locations ---------- */
$("#sgMap").innerHTML = snapMapSVG();
initSnapMap((slug) => setArea(slug));
let region = "All";
const setArea = (slug) => {
  const l = locBySlug(slug);
  $$(".pin-dot").forEach((p) => p.classList.toggle("on", p.dataset.slug === slug));
  $$(".area-link").forEach((a) => a.classList.toggle("on", a.dataset.slug === slug));
  $("#lpName").textContent = l.name;
  $("#lpMeta").textContent = `${l.region} region · ${l.homes} · Avg. arrival ~${l.eta} min`;
  $("#lpLink").href = `location.html?area=${l.slug}`;
  $("#lpLink").innerHTML = `Services in ${l.name} ${icon("arrow")}`;
  snapFocus(l);
  const lp = $("#locPanel");
  if (lp.dataset.slug !== slug) { lp.dataset.slug = slug; lp.classList.remove("flash"); void lp.offsetWidth; lp.classList.add("flash"); }
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
initBAV();
initFlow();

/* ---------- How we work ---------- */

/* ---------- Projects ---------- */
$("#projectGrid").innerHTML = PROJECTS.slice(0, 6).map(projectCard).join("");

/* ---------- Certificates & brands ---------- */
const CRED_ICONS = ["hardhat", "bolt", "drop", "shield", "award", "heart"];
$("#credGrid").innerHTML = CERTS.map((c, i) => `
  <button class="cred reveal" data-open-certs style="--d:${(i % 3) * 0.08}s" aria-label="${c.name} — view certificate">
    <span class="cred-top"><span class="cred-seal">${icon(CRED_ICONS[i] || "award")}</span><span class="cred-live"><i></i> Active</span></span>
    <small>${c.issuer}</small>
    <b>${c.name}</b>
    <span class="cred-text">${c.text}</span>
    <span class="cred-foot"><span>${c.ref}</span><span>${icon("check")} Valid to ${c.valid}</span></span>
  </button>`).join("");
// spotlight + gentle 3D tilt that follows the pointer
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) $$(".cred").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`); el.style.setProperty("--my", `${y * 100}%`);
    el.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
  });
  el.addEventListener("pointerleave", () => { el.style.transform = ""; });
});
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
initNews();

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

/* ---------- Hero reel: short handyman clips (Pexels), ~4s each ---------- */
function initReel() {
  const PX = "https://videos.pexels.com/video-files/";
  const POSTER = (id) => `https://images.pexels.com/videos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=1600`;
  const CLIPS = [
    { id: 6036763, file: "6036763-hd_1920_1080_30fps", label: "Repairs & fixes" },
    { id: 7584762, file: "7584762-hd_1280_720_25fps", label: "Plumbing" },
    { id: 6079417, file: "6079417-hd_1920_1080_24fps", label: "Electrical" },
    { id: 6474086, file: "6474086-hd_1920_1080_25fps", label: "Renovation" },
    { id: 5799450, file: "5799450-hd_1920_1080_25fps", label: "Painting" },
  ];
  const DUR = 4000;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  $("#reel").innerHTML = CLIPS.map((c, i) => `
    <video class="reel-slide${i ? "" : " on"}" muted playsinline loop preload="${i ? "none" : "auto"}"
      poster="${POSTER(c.id)}" aria-label="${c.label} in progress" src="${PX}${c.id}/${c.file}.mp4"></video>`).join("");
  $("#reelBar").innerHTML = CLIPS.map((c, i) => `
    <button class="reel-tab${i ? "" : " on"}" role="tab" aria-selected="${!i}" style="--dur:${DUR}ms">
      <span class="reel-prog"><i></i></span><span class="reel-lbl">${c.label}</span>
    </button>`).join("");

  const vids = $$("#reel video"), tabs = $$("#reelBar .reel-tab");
  let cur = 0, timer;

  const show = (n) => {
    const prev = vids[cur];
    cur = (n + vids.length) % vids.length;
    vids.forEach((v, i) => v.classList.toggle("on", i === cur));
    tabs.forEach((t, i) => {
      t.classList.toggle("on", i === cur);
      t.classList.toggle("done", i < cur);
      t.setAttribute("aria-selected", i === cur);
      t.classList.remove("run"); void t.offsetWidth; // restart progress animation
    });
    if (prev !== vids[cur]) setTimeout(() => prev.pause(), 900);
    const v = vids[cur];
    if (!reduced) { v.currentTime = 0; v.play().catch(() => {}); tabs[cur].classList.add("run"); }
    vids[(cur + 1) % vids.length].preload = "auto"; // warm up the next clip
    clearTimeout(timer);
    if (!reduced) timer = setTimeout(() => show(cur + 1), DUR);
  };

  tabs.forEach((t, i) => t.addEventListener("click", () => show(i)));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { clearTimeout(timer); vids[cur].pause(); } else show(cur);
  });
  show(0);
}

/* ---------- Why Ferron slider motion: stagger-in, autoplay, active card, progress ---------- */
function rsAtEnd() { return rs.scrollLeft + rs.clientWidth >= rs.scrollWidth - 8; }
function initReasonsMotion() {
  const cards = $$(".reason", rs);
  const bar = $("#rsProgress i");
  cards.forEach((c, i) => c.style.setProperty("--d", `${i * 0.12}s`));

  const update = () => {
    const max = rs.scrollWidth - rs.clientWidth;
    bar.style.transform = `scaleX(${max > 0 ? Math.max(0.12, (rs.scrollLeft + rs.clientWidth) / rs.scrollWidth) : 1})`;
    let best = 0, dist = Infinity;
    cards.forEach((c, i) => { const d = Math.abs(c.offsetLeft - rs.offsetLeft - rs.scrollLeft); if (d < dist) { dist = d; best = i; } });
    if (rsAtEnd()) best = cards.length - 1;
    cards.forEach((c, i) => c.classList.toggle("is-active", i === best));
  };
  rs.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  addEventListener("resize", update);
  update();

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let timer, visible = false, held = false;
  const tick = () => {
    clearTimeout(timer);
    if (!visible || held || document.hidden) return;
    timer = setTimeout(() => { $("#rsNext").click(); tick(); }, 3800);
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; rs.classList.toggle("playing", visible); tick(); }, { threshold: 0.4 }).observe(rs);
  const hold = (v) => () => { held = v; rs.classList.toggle("held", v); tick(); };
  rs.addEventListener("pointerenter", hold(true));
  rs.addEventListener("pointerleave", hold(false));
  rs.addEventListener("focusin", hold(true));
  rs.addEventListener("focusout", hold(false));
  rs.addEventListener("touchstart", hold(true), { passive: true });
  rs.addEventListener("touchend", () => setTimeout(hold(false), 4000), { passive: true });
  document.addEventListener("visibilitychange", tick);
}

/* ---------- Before / after: short paired clips with an animated wipe (≤6s each) ---------- */
function initBAV() {
  const V = (id, f) => `https://videos.pexels.com/video-files/${id}/${id}-${f}.mp4`;
  const P = (id) => `https://images.pexels.com/videos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=1600`;
  const ITEMS = [
    { title: "Living room", before: V(7348145, "hd_1280_720_25fps"), bPoster: P(7348145), after: V(7533207, "hd_1920_1080_30fps"),
      lead: "A dated Bukit Timah condo living room — new feature wall, lighting, flooring and fireplace surround, handed over in 12 working days.",
      scope: "Living room refresh", time: "12 working days", svc: "Carpentry · Lighting · Floor" },
    { title: "Kitchen", before: V(6473920, "hd_1280_720_25fps"), bPoster: P(6473920), after: V(15887132, "hd_1280_720_30fps"), aPoster: P(15887132),
      lead: "A gutted Tampines HDB kitchen rebuilt with an island, quartz tops, new plumbing points and soft-close cabinetry.",
      scope: "Kitchen remodel", time: "16 working days", svc: "Cabinets · Plumbing · Electrical" },
    { title: "Bathroom", before: V(6474177, "hd_1280_720_25fps"), bPoster: P(6474177), after: V(15887134, "hd_1280_720_30fps"), aPoster: P(15887134),
      lead: "Leaking 30-year-old bathroom in Bedok — re-waterproofed, re-tiled and fitted with a new vanity, tub and fixtures.",
      scope: "Bathroom makeover", time: "9 working days", svc: "Waterproofing · Tiling · Plumbing" },
    { title: "Open-plan home", before: V(855672, "hd_1280_720_24fps"), bPoster: "", after: V(7239172, "hd_1920_1080_25fps"),
      lead: "A 25-year-old 4-room HDB in Toa Payoh — walls opened up, rewired, repainted, re-floored and fitted with custom carpentry in 19 working days.",
      scope: "Full home refresh", time: "19 working days", svc: "Electrical · Paint · Floor" },
  ];
  const DUR = 6000, SWAP = 2400; // before plays ~2.6s, wipe, after plays to 6s
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  $("#bavStage").innerHTML = ITEMS.map((it, i) => `
    <div class="bav-slide${i ? "" : " on"}" style="--dur:${DUR}ms" aria-label="${it.title}: before and after">
      <video class="bav-a" muted playsinline preload="${i ? "none" : "auto"}" ${it.aPoster ? `poster="${it.aPoster}"` : ""} src="${it.after}"></video>
      <video class="bav-b" muted playsinline preload="${i ? "none" : "auto"}" ${it.bPoster ? `poster="${it.bPoster}"` : ""} src="${it.before}"></video>
      <span class="bav-line"></span>
      <span class="ba-tag l">Before</span><span class="ba-tag r">After</span>
    </div>`).join("");
  $("#bavTabs").innerHTML = ITEMS.map((it, i) => `
    <button class="bav-tab${i ? "" : " on"}" role="tab" aria-selected="${!i}" style="--dur:${DUR}ms"><span class="bav-prog"><i></i></span>${it.title}</button>`).join("");

  const slides = $$("#bavStage .bav-slide"), tabs = $$("#bavTabs .bav-tab");
  let cur = 0, timers = [], visible = false;
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const vids = (sl) => [$(".bav-b", sl), $(".bav-a", sl)];

  const show = (n) => {
    clear();
    slides.forEach((sl) => vids(sl).forEach((v) => v.pause()));
    cur = (n + ITEMS.length) % ITEMS.length;
    const it = ITEMS[cur], sl = slides[cur], [b, a] = vids(sl);
    slides.forEach((x, i) => x.classList.toggle("on", i === cur));
    tabs.forEach((t, i) => { t.classList.toggle("on", i === cur); t.setAttribute("aria-selected", i === cur); t.classList.remove("run"); });
    $("#bavLead").textContent = it.lead; $("#bavScope").textContent = it.scope; $("#bavTime").textContent = it.time; $("#bavSvc").textContent = it.svc;
    // warm up the next pair
    vids(slides[(cur + 1) % ITEMS.length]).forEach((v) => (v.preload = "auto"));
    sl.classList.remove("run"); void sl.offsetWidth;
    if (reduced || !visible) return;
    sl.classList.add("run"); tabs[cur].classList.add("run");
    b.currentTime = 0; a.currentTime = 0; b.play().catch(() => {});
    timers.push(setTimeout(() => a.play().catch(() => {}), SWAP - 300));
    timers.push(setTimeout(() => show(cur + 1), DUR));
  };

  tabs.forEach((t, i) => t.addEventListener("click", () => show(i)));
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? show(cur) : (clear(), vids(slides[cur]).forEach((v) => v.pause())); }, { threshold: 0.35 }).observe($("#bav"));
  document.addEventListener("visibilitychange", () => (document.hidden ? (clear(), vids(slides[cur]).forEach((v) => v.pause())) : visible && show(cur)));
  show(0);
}

/* ---------- How it works: step timeline + live chat preview ---------- */
function initFlow() {
  const STEPS = [
    { icon: "calendar", time: "2 min", title: "Book online", text: "Tell us what's wrong via the form or WhatsApp — photos help us quote faster.",
      chat: [["me", "Hi, my kitchen tap is leaking under the sink. Photo attached."], ["us", "Thanks! Booking <b>#FC-2481</b> received. A coordinator will confirm shortly."]] },
    { icon: "phone", time: "15 min", title: "We confirm", text: "A coordinator calls back to confirm details and lock in a slot that suits you.",
      chat: [["us", "<span class=\"fp-pro\"><img src=\"https://api.dicebear.com/9.x/avataaars/svg?seed=Arif&backgroundColor=b6e3f4\" alt=\"\"><span><b>Arif</b> · PUB-licensed plumber</span></span>Confirmed for <b>today, 2–4pm</b>. Live ETA will be sent on the way."], ["me", "Perfect, see you then."]] },
    { icon: "tag", time: "On-site", title: "Fixed quote", text: "Our technician inspects and gives a firm price. No work starts until you approve.",
      chat: [["us", "<span class=\"fp-quote\"><small>Fixed quote</small><b>S$180</b><span>Replace mixer tap + cartridge · parts &amp; labour</span><em>Approve</em></span>"], ["me", "Approved. Go ahead!"]] },
    { icon: "check", time: "Same day", title: "Job done", text: "Work completed, site cleaned, warranty issued. Pay by PayNow, card or cash.",
      chat: [["us", "All done — area cleaned. <b>12-month warranty #W-2481</b> sent to your email."], ["us", "<span class=\"fp-rate\">How did Arif do? <span>★★★★★</span></span>"]] },
  ];
  const DUR = 4200, reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  $("#flowSteps").innerHTML = STEPS.map((st, i) => `
    <li><button class="flow-step" data-i="${i}" style="--dur:${DUR}ms">
      <span class="flow-node">${icon(st.icon)}<span class="flow-done">${icon("check")}</span></span>
      <span class="flow-txt"><span class="flow-meta">Step 0${i + 1} · ${icon("clock")} ${st.time}</span><b>${st.title}</b><span class="flow-p">${st.text}</span></span>
      <span class="flow-bar"><i></i></span>
    </button></li>`).join("");
  $("#fpAva").innerHTML = LOGO.slice(0, LOGO.indexOf("</span>") + 7); // just the mark
  $("#fpSend").innerHTML = icon("arrow");
  $("#flowWa").href = waLink();
  $("#flowWa").insertAdjacentHTML("afterbegin", WA_ICON + " ");

  const btns = $$("#flowSteps .flow-step"), chat = $("#flowChat");
  let cur = -1, timers = [], visible = false;
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const bubble = ([who, html], fresh) => `<div class="fp-msg ${who}${fresh ? " fresh" : ""}">${html}</div>`;
  const scroll = () => chat.scrollTo({ top: chat.scrollHeight, behavior: reduced ? "auto" : "smooth" });

  const go = (n, animate = true) => {
    clear();
    cur = (n + STEPS.length) % STEPS.length;
    btns.forEach((b, i) => { b.classList.toggle("on", i === cur); b.classList.toggle("done", i < cur); b.classList.remove("run"); b.setAttribute("aria-current", i === cur ? "step" : "false"); });
    // history from earlier steps shows instantly; this step's messages arrive one by one
    chat.innerHTML = STEPS.slice(0, cur).flatMap((st) => st.chat).map((m) => bubble(m)).join("");
    scroll();
    const msgs = STEPS[cur].chat;
    if (!animate || reduced) { chat.insertAdjacentHTML("beforeend", msgs.map((m) => bubble(m)).join("")); scroll(); return; }
    void btns[cur].offsetWidth; btns[cur].classList.add("run");
    msgs.forEach((m, k) => {
      const at = 350 + k * 1300;
      if (m[0] === "us") timers.push(setTimeout(() => { chat.insertAdjacentHTML("beforeend", `<div class="fp-typing"><i></i><i></i><i></i></div>`); scroll(); }, at - 300));
      timers.push(setTimeout(() => { $(".fp-typing", chat)?.remove(); chat.insertAdjacentHTML("beforeend", bubble(m, true)); scroll(); }, at + (m[0] === "us" ? 500 : 0)));
    });
    if (visible) timers.push(setTimeout(() => go(cur + 1), DUR));
  };

  btns.forEach((b) => b.addEventListener("click", () => go(+b.dataset.i)));
  new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (visible && !was) go(cur < 0 ? 0 : cur); if (!visible) clear(); }, { threshold: 0.35 }).observe($("#flow"));
  go(0, false);
}

/* ---------- Latest updates: featured story + compact list, filterable by category ---------- */
function initNews() {
  const cats = ["All", ...new Set(NEWS.map((n) => n.cat))];
  const sorted = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
  const link = (n) => `insights.html?a=${n.slug}`;
  const render = (cat) => {
    const list = sorted.filter((n) => cat === "All" || n.cat === cat);
    const [f, ...rest] = list;
    const box = $("#newsX");
    box.classList.remove("swap"); void box.offsetWidth; box.classList.add("swap");
    box.innerHTML = `
      <a class="nx-feature" href="${link(f)}">
        <img src="${f.img.replace("w=900", "w=1400")}" alt="" loading="lazy">
        <span class="nx-chip">${f.cat}</span>
        <span class="nx-fbody">
          <small>${fmtDate(f.date)} · ${f.read} min read</small>
          <b>${f.title}</b>
          <span class="nx-ex">${f.excerpt}</span>
          <span class="nx-go">Read story ${icon("arrowUR")}</span>
        </span>
      </a>
      <div class="nx-list">${rest.slice(0, 4).map((n, i) => `
        <a class="nx-item" href="${link(n)}" style="--i:${i}">
          <span class="nx-thumb"><img src="${n.img.replace("w=900", "w=300")}" alt="" loading="lazy"></span>
          <span class="nx-txt"><span class="nx-meta"><em>${n.cat}</em> ${fmtDate(n.date)} · ${n.read} min</span><b>${n.title}</b></span>
          <span class="nx-arrow">${icon("arrowUR")}</span>
        </a>`).join("") || `<p class="nx-empty">More ${cat.toLowerCase()} stories coming soon. <a href="insights.html">Browse all insights →</a></p>`}
      </div>`;
  };
  $("#newsCats").innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " active"}" role="tab" aria-selected="${!i}" data-c="${c}">${c}</button>`).join("");
  $("#newsCats").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#newsCats .chip").forEach((c) => { c.classList.toggle("active", c === b); c.setAttribute("aria-selected", c === b); });
    render(b.dataset.c);
  });
  render("All");
}
