/* Code with Jallow — site behaviour. You normally never need to edit this file. */
(function () {
  "use strict";

  /* ---------- Icons (inline SVG, lucide-style) ---------- */
  const P = {
    monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/>',
    keyboard: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>',
    "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01"/>',
    youtube: '<path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V3a5 5 0 0 0 5 5"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>'
  };
  const icon = (n, cls) =>
    `<svg ${cls ? `class="${cls}"` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;
  const WA_PATH =
    '<path fill="currentColor" d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.5a.6.6 0 0 0 0-.5c-.1-.1-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c2 .8 2.8.9 3.8.7a3.2 3.2 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/>';

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const statusLabel = (s) => (s === "available" ? "Available Now" : "Coming Soon");
  const feeText = (c) => (c.fee && c.fee.trim() ? esc(c.fee) : null);
  const waLink = (msg) => `https://wa.me/${SITE.whatsapp}${msg ? "?text=" + encodeURIComponent(msg) : ""}`;
  const fmtDate = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  /* ---------- Header / footer ---------- */
  const page = document.body.dataset.page || "";
  const nav = [
    ["index.html", "Home", "home"],
    ["about.html", "About", "about"],
    ["courses.html", "Courses", "courses"],
    ["news.html", "News", "news"],
    ["gallery.html", "Gallery", "gallery"],
    ["contact.html", "Contact", "contact"]
  ];

  function buildChrome() {
    const header = $("#site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML = `
        <div class="container nav">
          <a class="brand" href="index.html" aria-label="${esc(SITE.name)} home">
            <img src="images/logo.jpg" alt="" width="50" height="50">
            <span class="brand-text"><strong>${esc(SITE.name)}</strong><small>${esc(SITE.parent)}</small></span>
          </a>
          <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="menu">${icon("menu")}</button>
          <ul class="nav-links" id="menu">
            ${nav.map(([h, l, k]) => `<li><a href="${h}" ${k === page ? 'aria-current="page"' : ""}>${l}</a></li>`).join("")}
            <li><a class="btn btn-primary btn-sm" href="register.html">Register</a></li>
          </ul>
        </div>`;
      const btn = $(".menu-btn", header), menu = $("#menu", header);
      btn.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
        btn.innerHTML = icon(open ? "x" : "menu");
      });
    }

    const footer = $("#site-footer");
    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML = `
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="brand" href="index.html"><img src="images/logo.jpg" alt="" width="50" height="50">
                <span class="brand-text"><strong>${esc(SITE.name)}</strong><small>${esc(SITE.parent)}</small></span></a>
              <p>${esc(SITE.tagline)}. Practical ICT training for students, youths and communities in Basse and beyond.</p>
              <div class="socials">${socialLinks()}</div>
            </div>
            <div><h4>Explore</h4><ul>${nav.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
            <div><h4>Courses</h4><ul>${COURSES.slice(0, 5)
              .map((c) => `<li><a href="courses.html#${c.id}">${esc(c.name)}</a></li>`).join("")}
              <li><a href="courses.html">All courses →</a></li></ul></div>
            <div><h4>Get in touch</h4><ul>
              ${SITE.phones.map((p) => `<li><a href="tel:+220${p}">+220 ${p}</a></li>`).join("")}
              <li><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp us</a></li>
              <li>${esc(SITE.location)}</li></ul></div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} ${esc(SITE.name)} · ${esc(SITE.parent)}. All rights reserved.</span>
            <span>Made with care in The Gambia</span>
          </div>
        </div>
        <div class="flag" aria-hidden="true"></div>`;
    }

    const wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = waLink("Hello! I would like to know more about Code with Jallow courses.");
    wa.target = "_blank"; wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat on WhatsApp");
    wa.innerHTML = `<svg viewBox="0 0 24 24">${WA_PATH}</svg>`;
    document.body.appendChild(wa);
  }

  function socialLinks() {
    const names = { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", linkedin: "LinkedIn" };
    const items = Object.entries(SITE.social).filter(([, v]) => v).map(
      ([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener" aria-label="${names[k]}">${icon(k)}</a>`
    );
    items.unshift(`<a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24">${WA_PATH}</svg></a>`);
    return items.join("");
  }

  /* ---------- Renderers ---------- */
  function courseCard(c) {
    const n = String(COURSES.indexOf(c) + 1).padStart(2, "0");
    return `
      <article class="card course-card reveal">
        <span class="num" aria-hidden="true">${n}</span>
        <div class="card-top"><div class="icon-box">${icon(c.icon)}</div><span class="tag ${c.status}">${statusLabel(c.status)}</span></div>
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.tagline)}</p>
        <div class="meta"><span>${icon("clock", "mini")} ${esc(c.duration)}</span><a href="courses.html#${c.id}">Details →</a></div>
      </article>`;
  }

  /* Little illustration for each course tile on the home page */
  const keys = (rows) => rows.map((n, r) => `<div class="krow">${Array.from({ length: n }, (_, i) =>
    `<b style="--d:${((i * 7 + r * 3) % 11) * 0.23}s"></b>`).join("")}</div>`).join("");
  const VIS = {
    "basic-computer-skills": `<div class="vis vis-basic"><span>${icon("monitor")}</span><span>${icon("file-text")}</span><span>${icon("globe")}</span><span>${icon("shield")}</span></div>`,
    "typing-skills": `<div class="vis vis-keys">${keys([10, 9, 7])}<div class="space"></div></div>`,
    "microsoft-office": `<div class="vis vis-office"><b class="w">W</b><b class="x">X</b><b class="p">P</b></div>`,
    programming: `<div class="vis vis-code"><div class="langs"><b>C++</b><b>Java</b><b>Python</b></div>
      <pre><i class="k">class</i> <i class="f">Student</i>:
    <i class="k">def</i> <i class="f">learn</i>(self, skill):
        <i class="k">return</i> <i class="s">f"{skill} ✔"</i>

me = <i class="f">Student</i>()
<i class="f">print</i>(me.learn(<i class="s">"Python"</i>))</pre></div>`,
    "web-development": `<div class="vis vis-browser"><div class="bar"><i></i><i></i><i></i><span>yoursite.gm</span></div>
      <div class="page">
        <div class="mnav"><b></b><s></s><s></s><s></s></div>
        <div class="mhero">
          <div class="mtxt"><u class="h"></u><u class="h2"></u><u class="s"></u><em>Register</em></div>
          <div class="mimg"><span></span></div>
        </div>
      </div>
      <code class="float-code"><i class="p">&lt;</i><i class="k">h1</i><i class="p">&gt;</i>Welcome<i class="p">&lt;/</i><i class="k">h1</i><i class="p">&gt;</i></code></div>`,
    networking: `<div class="vis vis-net"><svg viewBox="0 0 200 110" fill="none" stroke="currentColor" stroke-width="1.5">
      <path class="flow" d="M100 55 40 22M100 55 165 25M100 55 45 90M100 55 160 88"/>
      <circle cx="100" cy="55" r="11" fill="#06183a"/><circle cx="40" cy="22" r="7" fill="#06183a"/><circle cx="165" cy="25" r="7" fill="#06183a"/>
      <circle cx="45" cy="90" r="7" fill="#06183a"/><circle cx="160" cy="88" r="7" fill="#06183a"/></svg></div>`,
    robotics: `<div class="vis vis-net"><svg viewBox="0 0 200 110" fill="none" stroke="currentColor" stroke-width="1.5">
      <path class="flow" d="M10 30h45l12 12h28M10 80h40l15-15h25M190 30h-45l-12 12h-18M190 80h-40l-15-15h-15"/>
      <rect x="82" y="38" width="36" height="34" rx="6" fill="#06183a"/><circle cx="100" cy="55" r="5" fill="currentColor"/></svg></div>`
  };

  function bentoCard(c) {
    return `
      <article class="card bento-card b-${c.id} reveal">
        ${VIS[c.id] || ""}
        <div class="b-body">
          <div class="card-top"><span class="tag ${c.status}">${statusLabel(c.status)}</span><span class="dur">${icon("clock", "mini")} ${esc(c.duration)}</span></div>
          <h3>${esc(c.name)}</h3>
          <p>${esc(c.tagline)}</p>
          <a class="more" href="courses.html#${c.id}">View details ${icon("arrow", "mini")}</a>
        </div>
      </article>`;
  }

  function courseDetail(c) {
    const fee = feeText(c);
    const open = c.registration === "Open";
    return `
      <article class="course-detail reveal" id="${c.id}">
        <div class="main">
          <h2><span class="icon-box" style="margin:0">${icon(c.icon)}</span>${esc(c.name)}<span class="tag ${c.status}">${statusLabel(c.status)}</span></h2>
          <p class="lead" style="font-size:1.05rem">${esc(c.description)}</p>
          <h4>What you will study</h4>
          <ul class="pills">${c.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          <h4>Learning outcomes</h4>
          <ul class="bullets">${c.outcomes.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
        </div>
        <aside class="side">
          <h4 style="margin-top:0">Fees &amp; course information</h4>
          <table class="facts">
            <tr><th>Course fee</th><td>${fee ? `<span class="fee">${fee}</span>` : `<span class="fee tbd">To be announced</span>`}</td></tr>
            <tr><th>Duration</th><td>${esc(c.duration)}</td></tr>
            <tr><th>Class schedule</th><td>${esc(c.schedule)}</td></tr>
            <tr><th>Learning mode</th><td>${esc(c.modes.join(" / "))}</td></tr>
            <tr><th>Registration</th><td>${esc(c.registration)}</td></tr>
          </table>
          ${open
            ? `<a class="btn btn-primary" href="register.html?course=${c.id}">Register for this course</a>`
            : `<a class="btn btn-outline" href="register.html?course=${c.id}">Join the waiting list</a>`}
        </aside>
      </article>`;
  }

  function postCard(p) {
    return `
      <article class="card post-card reveal">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">` : ""}
        <div class="body">
          <span class="tag available" style="background:var(--sky);color:var(--blue-dark)">${esc(p.category)}</span>
          <h3>${esc(p.title)}</h3>
          <time datetime="${esc(p.date)}">${fmtDate(p.date)}</time>
          <p>${esc(p.summary)}</p>
          ${p.body ? `<details><summary style="cursor:pointer;color:var(--blue-dark);font-weight:600">Read more</summary><p style="margin-top:12px">${esc(p.body)}</p></details>` : ""}
        </div>
      </article>`;
  }

  function galleryItem(g, i) {
    if (g.type === "video") {
      const yt = /youtube|youtu\.be|embed/.test(g.src);
      return `<figure data-cat="${esc(g.category)}">${yt
        ? `<iframe src="${esc(g.src)}" title="${esc(g.caption)}" loading="lazy" allowfullscreen></iframe>`
        : `<video src="${esc(g.src)}" controls preload="metadata"></video>`}
        <figcaption>${esc(g.caption)}</figcaption></figure>`;
    }
    return `<figure data-cat="${esc(g.category)}" data-i="${i}"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><figcaption>${esc(g.caption)}</figcaption></figure>`;
  }

  function founderSection(f) {
    const [tagA, tagB] = f.highlights;
    const glass = (h, cls) => h ? `<div class="glass ${cls}">${icon(h.icon)}<div><strong>${esc(h.title)}</strong><small>${esc(h.text)}</small></div></div>` : "";
    return `
      <div class="founder-grid">
        <div class="portrait reveal">
          <div class="ring"></div>
          <img src="${esc(f.photo)}" alt="${esc(f.name)}" loading="lazy">
          ${glass(tagA, "tag-a")}${glass(tagB, "tag-b")}
        </div>
        <div class="reveal">
          <span class="eyebrow">Meet the founder</span>
          <h2>${esc(f.name)}</h2>
          <p class="role">${esc(f.role)}</p>
          ${f.bio.map((p) => `<p>${esc(p)}</p>`).join("")}
          ${SITE.social.linkedin ? `<a class="btn btn-primary" href="${esc(SITE.social.linkedin)}" target="_blank" rel="noopener">${icon("linkedin")} Connect on LinkedIn</a>` : ""}
        </div>
      </div>`;
  }

  function render() {
    $$('[data-render="founder"]').forEach((el) => (el.innerHTML = founderSection(FOUNDER)));
    $$('[data-render="featured-courses"]').forEach((el) => (el.innerHTML = COURSES.slice(0, 6).map(courseCard).join("")));
    $$('[data-render="bento"]').forEach((el) => (el.innerHTML = COURSES.map(bentoCard).join("")));
    $$('[data-render="all-courses-cards"]').forEach((el) => (el.innerHTML = COURSES.map(courseCard).join("")));
    $$('[data-render="course-details"]').forEach((el) => (el.innerHTML = COURSES.map(courseDetail).join("")));
    $$('[data-render="latest-posts"]').forEach((el) => {
      el.innerHTML = POSTS.length ? POSTS.slice(0, 3).map(postCard).join("") : `<p class="empty">News and updates are coming soon.</p>`;
    });

    const news = $('[data-render="posts"]');
    if (news) {
      const cats = ["All", ...new Set(POSTS.map((p) => p.category))];
      const filters = $("#post-filters");
      const draw = (cat) => {
        const list = POSTS.filter((p) => cat === "All" || p.category === cat);
        news.innerHTML = list.length ? list.map(postCard).join("") : `<p class="empty">No posts here yet.</p>`;
        $$(".reveal", news).forEach((n) => n.classList.add("in"));
      };
      if (filters) {
        filters.innerHTML = cats.map((c, i) => `<button class="chip" aria-pressed="${i === 0}">${esc(c)}</button>`).join("");
        filters.addEventListener("click", (e) => {
          const b = e.target.closest(".chip"); if (!b) return;
          $$(".chip", filters).forEach((x) => x.setAttribute("aria-pressed", x === b));
          draw(b.textContent);
        });
      }
      draw("All");
    }

    const gal = $('[data-render="gallery"]');
    if (gal) {
      const cats = ["All", ...new Set(GALLERY.map((g) => g.category))];
      const filters = $("#gallery-filters");
      gal.innerHTML = GALLERY.map(galleryItem).join("");
      if (filters) {
        filters.innerHTML = cats.map((c, i) => `<button class="chip" aria-pressed="${i === 0}">${esc(c)}</button>`).join("");
        filters.addEventListener("click", (e) => {
          const b = e.target.closest(".chip"); if (!b) return;
          $$(".chip", filters).forEach((x) => x.setAttribute("aria-pressed", x === b));
          $$("figure", gal).forEach((f) => (f.style.display = b.textContent === "All" || f.dataset.cat === b.textContent ? "" : "none"));
        });
      }
      const lb = $("#lightbox");
      gal.addEventListener("click", (e) => {
        const f = e.target.closest("figure[data-i]"); if (!f || !lb) return;
        const g = GALLERY[f.dataset.i];
        $("img", lb).src = g.src; $("img", lb).alt = g.caption; $("p", lb).textContent = g.caption;
        lb.classList.add("open");
      });
      lb && lb.addEventListener("click", (e) => { if (e.target === lb || e.target.tagName === "BUTTON") lb.classList.remove("open"); });
      document.addEventListener("keydown", (e) => e.key === "Escape" && lb && lb.classList.remove("open"));
    }

    $$("[data-phone-list]").forEach((el) => (el.innerHTML = SITE.phones.map((p) => `<a href="tel:+220${p}">+220 ${p}</a>`).join(" &nbsp;/&nbsp; ")));
    $$("[data-wa]").forEach((el) => (el.href = waLink(el.dataset.wa)));
    $$("[data-socials]").forEach((el) => (el.innerHTML = socialLinks()));
    $$("[data-location]").forEach((el) => (el.textContent = SITE.location));
  }

  /* ---------- Forms ---------- */
  async function send(payload, summary) {
    if (!SITE.formEndpoint) {
      // Fallback until the Google Sheet is connected: open WhatsApp with the details.
      window.open(waLink(summary), "_blank", "noopener");
      return "whatsapp";
    }
    await fetch(SITE.formEndpoint, { method: "POST", mode: "no-cors", body: new URLSearchParams(payload) });
    return "sheet";
  }

  function wireForm(form, kind) {
    const err = $(".form-error", form.parentElement);
    const ok = $(".success", form.parentElement);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      err.classList.remove("show");
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      if (data.website) return; // honeypot: bots fill this, humans never see it
      if (kind === "registration") {
        const boxes = $$('input[name="interests"]', form);
        boxes[0].setCustomValidity(boxes.some((b) => b.checked) ? "" : "Please choose at least one area.");
        data.interests = fd.getAll("interests").join(", ");
      }
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const btn = $('button[type="submit"]', form);
      const label = btn.textContent; btn.disabled = true; btn.textContent = "Sending…";
      try {
        data.type = kind; data.submitted = new Date().toISOString();
        let summary;
        if (kind === "registration") {
          summary = `NEW REGISTRATION\nName: ${data.name}\nEmail: ${data.email}\nGender: ${data.gender}\nClass/Grade: ${data.grade}\nWhatsApp: ${data.phone}\nComputer level: ${data.level}\nComputer at home: ${data.computer}\nInterested in: ${data.interests}\nWhy join: ${data.reason}\nStudent: ${data.student}`;
        } else {
          summary = `MESSAGE from ${data.name} (${data.phone || data.email || "no contact"})\n${data.message}`;
        }
        await send(data, summary);
        form.style.display = "none";
        const nm = $("[data-name]", ok); if (nm) nm.textContent = (data.name || "").split(" ")[0];
        ok.classList.add("show");
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch (x) {
        err.textContent = "Sorry, something went wrong. Please try again or contact us on WhatsApp.";
        err.classList.add("show");
        btn.disabled = false; btn.textContent = label;
      }
    });
  }

  function initRegistration() {
    const form = $("#register-form"); if (!form) return;
    $("#grade", form).innerHTML = `<option value="" disabled selected>Choose…</option>` + FORM.grades.map((g) => `<option>${esc(g)}</option>`).join("");
    $("#level-options", form).innerHTML = FORM.levels.map((l, i) => `<label><input type="radio" name="level" value="${esc(l)}"${i ? "" : " required"}> ${esc(l)}</label>`).join("");
    $("#interest-options", form).innerHTML = FORM.interests.map((t) => `<label><input type="checkbox" name="interests" value="${esc(t)}"> ${esc(t)}</label>`).join("");
    wireForm(form, "registration");
  }

  /* ---------- Misc ---------- */
  function reveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) return items.forEach((n) => n.classList.add("in"));
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    items.forEach((n) => io.observe(n));
  }

  function visuals() {
    const typed = $("#typed");
    if (typed) {
      const phrases = ["learn --skill python", "learn --skill web-development", "learn --skill microsoft-office", "learn --skill networking", "learn --skill robotics", "learn --skill typing"];
      const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (still) typed.textContent = phrases[0];
      else {
        let i = 0, j = 0, del = false;
        (function tick() {
          const w = phrases[i];
          typed.textContent = " " + w.slice(0, j);
          if (!del && j < w.length) j++;
          else if (!del) { del = true; return setTimeout(tick, 1400); }
          else if (j > 0) j--;
          else { del = false; i = (i + 1) % phrases.length; }
          setTimeout(tick, del ? 28 : 65);
        })();
      }
    }
    const ticker = $("#ticker");
    if (ticker) {
      const words = ["Python", "HTML", "CSS", "JavaScript", "Java", "C++", "Word", "Excel", "PowerPoint", "Networking", "Robotics", "Typing"];
      const row = words.map((w) => `<span>${w}</span>`).join("");
      ticker.innerHTML = row + row;
    }
    const road = $("#roadmap");
    if (road) {
      road.innerHTML = COURSES.map((c, i) => `
        <li class="${c.status === "available" ? "" : "soon"}">
          <div class="node">${i + 1}</div>
          <div><a href="courses.html#${c.id}">${esc(c.name)}</a><small>${statusLabel(c.status)}</small></div>
        </li>`).join("");
    }
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", e.clientX - r.left + "px");
      card.style.setProperty("--y", e.clientY - r.top + "px");
    });
  }

  buildChrome();
  render();
  visuals();
  initRegistration();
  const contact = $("#contact-form"); if (contact) wireForm(contact, "message");
  $$("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
  reveal();
})();
