/* Code with Jallow — visual effects (no libraries). Safe to delete; the site works without it. */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  /* ---------- Scroll progress bar ---------- */
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.appendChild(bar);
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
    scrub();
  };

  /* ---------- Cursor glow (desktop only) ---------- */
  if (fine && !reduce) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    addEventListener("pointermove", (e) => glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`, { passive: true });
  }

  /* ---------- Headline word reveal ---------- */
  $$("[data-split]").forEach((el) => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((t) => {
            if (!t.trim()) return frag.appendChild(document.createTextNode(t));
            const w = document.createElement("span");
            w.className = "sw";
            const inner = document.createElement("span");
            inner.textContent = t;
            inner.style.animationDelay = 0.08 * i++ + "s";
            w.appendChild(inner);
            frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains("sw")) walk(n);
      });
    };
    walk(el);
  });

  /* ---------- Count-up numbers ---------- */
  const counters = $$("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target, to = +el.dataset.count, t0 = performance.now();
      if (reduce || to === 0) return (el.textContent = to);
      (function step(t) {
        const p = clamp((t - t0) / 1300, 0, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }), { threshold: 0.6 });
    counters.forEach((c) => io.observe(c));
  }

  /* ---------- Scroll-lit mission text ---------- */
  const scrubEl = $("[data-scrub]");
  let words = [];
  if (scrubEl) {
    const walk = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((t) => {
          if (!t.trim()) return frag.appendChild(document.createTextNode(t));
          const s = document.createElement("span");
          s.className = "sc"; s.textContent = t; words.push(s); frag.appendChild(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
    walk(scrubEl);
    if (reduce) words.forEach((w) => w.classList.add("on"));
  }
  function scrub() {
    if (!scrubEl || reduce) return;
    const r = scrubEl.getBoundingClientRect(), vh = innerHeight;
    const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.25), 0, 1) * words.length;
    words.forEach((w, i) => w.classList.toggle("on", i < p));
  }

  /* ---------- Magnetic buttons + hero tilt ---------- */
  if (fine && !reduce) {
    $$(".btn-primary, .btn-sun").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3 - 2}px)`;
      });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
    const ide = $("#ide"), wrap = $(".hero-stage");
    if (ide && wrap) {
      wrap.addEventListener("pointermove", (e) => {
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        wrap.style.setProperty("--ry", x * 10 + "deg");
        wrap.style.setProperty("--rx", -y * 8 + "deg");
      });
      wrap.addEventListener("pointerleave", () => { wrap.style.setProperty("--ry", "0deg"); wrap.style.setProperty("--rx", "0deg"); });
    }
  }

  /* ---------- Network constellation canvas (hero background) ---------- */
  const cv = $("#net");
  if (cv && !reduce) {
    const ctx = cv.getContext("2d");
    let W, H, pts = [], visible = true, mx = -999, my = -999;
    const size = () => {
      const r = cv.parentElement.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
      W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = W < 700 ? 28 : 64;
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    };
    size(); addEventListener("resize", size);
    cv.parentElement.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    cv.parentElement.addEventListener("pointerleave", () => (mx = my = -999));
    new IntersectionObserver((es) => (visible = es[0].isIntersecting)).observe(cv);
    (function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = mx - p.x, dy = my - p.y, d = Math.hypot(dx, dy);
        if (d < 150) { p.x -= dx * 0.012; p.y -= dy * 0.012; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        ctx.fillStyle = "rgba(0,224,255,.8)";
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.3); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(40,150,255,${(1 - d / 130) * 0.45})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(a.x - mx, a.y - my);
        if (dm < 170) { ctx.strokeStyle = `rgba(34,242,192,${(1 - dm / 170) * 0.7})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke(); }
      }
    })();
  }

  /* ---------- Live code editor (hero) ---------- */
  const code = $("#ide-code"), out = $("#ide-out");
  if (code && out) {
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const hl = {
      py: (s) => esc(s).replace(/(#.*$)|("[^"]*")|\b(for|in|def|return|if|else)\b|\b(print|range)\b|(\b\d+\b)/gm,
        (m, c, str, k, f, n) => c ? `<i class="c">${m}</i>` : str ? `<i class="s">${m}</i>` : k ? `<i class="k">${m}</i>` : f ? `<i class="f">${m}</i>` : `<i class="n">${m}</i>`),
      html: (s) => esc(s).replace(/(&lt;\/?)([a-z0-9]+)(&gt;)/gi, (m, a, t, b) => `<i class="p">${a}</i><i class="k">${t}</i><i class="p">${b}</i>`)
    };
    const tabs = {
      py: { file: "main.py", src: '# my first program\nname = "Basse"\nfor i in range(3):\n    print("Hello,", name)' },
      html: { file: "index.html", src: "<h1>Welcome!</h1>\n<p>I built this in class.</p>\n<button>Register</button>" }
    };
    const btns = $$(".ide-tabs button");
    let run = 0;
    const finish = (key) => {
      if (key === "py") out.innerHTML = '<span class="m">▶ output</span>' + Array(3).fill("Hello, Basse").map((l) => `<div>${l}</div>`).join("");
      else out.innerHTML = '<span class="m">▶ preview</span><div class="pv"><h4>Welcome!</h4><p>I built this in class.</p><b>Register</b></div>';
    };
    async function play(key, id) {
      btns.forEach((b) => b.classList.toggle("on", b.dataset.tab === key));
      out.innerHTML = ""; code.innerHTML = "";
      const src = tabs[key].src;
      for (let i = 1; i <= src.length; i++) {
        if (id !== run) return;
        code.innerHTML = hl[key](src.slice(0, i)) + '<span class="caret"></span>';
        await sleep(src[i - 1] === "\n" ? 260 : 38);
      }
      await sleep(250); if (id !== run) return;
      finish(key);
      await sleep(4200); if (id !== run) return;
      play(key === "py" ? "html" : "py", id);
    }
    btns.forEach((b) => b.addEventListener("click", () => play(b.dataset.tab, ++run)));
    if (reduce) { code.innerHTML = hl.py(tabs.py.src); finish("py"); }
    else play("py", ++run);
  }

  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
