/* ==========================================================
   Muhammad Basit Qamar — Portfolio
   ========================================================== */

const ROLES = [
  "Senior Flutter Developer",
  "Senior Android Developer",
  "Java | Kotlin | NodeJS | Python | Dart Frog",
];

const SKILLS = [
  { name: "Dart", level: 95, icon: "fa-solid fa-code" },
  { name: "Java", level: 85, icon: "fa-brands fa-java" },
  { name: "Kotlin", level: 75, icon: "fa-brands fa-android" },
  { name: "JavaScript", level: 60, icon: "fa-brands fa-js" },
  { name: "Python", level: 50, icon: "fa-brands fa-python" },
  { name: "Firebase", level: 75, icon: "fa-solid fa-fire" },
];

const EXPERIENCE = [
  {
    company: "Microvision IT Solutions",
    outsourced: "Emirates Foundation",
    location: "Abu Dhabi, United Arab Emirates",
    role: "Lead Technical Consultant",
    date: "Oct 2021 - Present",
    desc: "Worked with Emirates Foundation on the Volunteers.ae platform, developing Flutter applications and implementing Python-based object detection solutions, with multiple projects nearing launch.",
  },
  {
    company: "Microvision IT Solutions",
    location: "Dubai, United Arab Emirates",
    role: "Technical Consultant",
    date: "Jan 2018 - Sept 2021",
    desc: "Provided technical leadership in developing and maintaining UAE government applications using Java, Android, Flutter, and Node.js, owning end-to-end component delivery while working in an Agile/Scrum environment to deliver high-quality apps on tight schedules.",
  },
  {
    company: "Treehouse Consultancy",
    outsourced: "Emitac Enterprise Solutions",
    location: "Dubai, United Arab Emirates",
    role: "Mobile Solutions Architect",
    date: "Oct 2016 - Dec 2017",
    desc: "Developed and maintained Android and hybrid applications using Java, upgraded apps to latest frameworks and APIs, supported UAE government applications, and collaborated with cross-functional teams to prototype and evaluate new technologies.",
  },
  {
    company: "Injazat Data Systems (Core 42)",
    location: "Abu Dhabi, United Arab Emirates",
    role: "Information Analyst",
    date: "May 2014 - May 2016",
    desc: "Led end-to-end mobile app delivery by gathering client requirements, creating technical documentation, developing and version-controlling applications, conducting comprehensive testing, and delivering secure solutions for Abu Dhabi Government clients while managing SAP Mobility, KONY, and Salesforce systems.",
  },
];

const PROJECTS = [
  {
    title: "Mamluk",
    tag: "Flutter",
    image: "assets/images/projects/mamluk.png",
    desc: "Mamluk is an online grocery shopping app with free home delivery. Customers browse fresh produce, pantry staples and household items, order in a few taps, and track their delivery from checkout to doorstep.",
    playStore: "https://play.google.com/store/apps/details?id=com.mamluk.app",
  },
  {
    title: "Volunteers.ae",
    tag: "Flutter",
    image: "assets/images/projects/volunteers.svg",
    desc: "Developed the Volunteers.ae Flutter app for Emirates Foundation, a nationwide UAE volunteering platform that connects users with community service opportunities and supports volunteer engagement across all Emirates.",
    appStore: "https://apps.apple.com/ae/app/volunteers-ae/id1287025745",
    playStore: "https://play.google.com/store/apps/details?id=ae.emiratesfoundation.volunteer",
  },
  {
    title: "UAE Football Association",
    tag: "Kotlin",
    image: "assets/images/projects/uaefa.png",
    desc: "Developed the official UAE Football Association (UAEFA) Android app in Kotlin, delivering news, match details, player statistics, competition standings, and national team info for UAE football fans in both Arabic and English.",
    playStore: "https://play.google.com/store/apps/details?id=com.uaefa.android.app",
  },
  {
    title: "Sharjah Town Planning & Survey",
    tag: "Java",
    image: "assets/images/projects/sdtps.png",
    desc: "Developed the SDTPS (Sharjah Directorate of Town Planning and Survey) Android app in Java, enabling users to access smart land planning services like tracking requests, booking appointments, viewing land maps, and managing property services for Sharjah residents and stakeholders.",
    playStore: "https://play.google.com/store/apps/details?id=com.tawasol.Sharka",
  },
  {
    title: "MBR Awards",
    tag: "Flutter",
    image: "assets/images/projects/mbr-awards.png",
    desc: "Developed the MBR Awards Voting app Mobile app in Flutter, under Dubai Sports Council Gov of Dubai. View the winners of every year and also vote for the next winners.",
    appStore: "https://apps.apple.com/ae/app/mbr-awards/id1133428510",
    playStore: "https://play.google.com/store/apps/details?id=com.mbr.androidapp",
    web: "https://www.mbrawards.ae/voting_web/",
  },
  {
    title: "Awqaf and Minors Affairs Foundation",
    tag: "Android",
    image: "assets/images/projects/awqaf.png",
    desc: "Awqaf and Minors Affairs Foundation (AMAF) is a Dubai government department responsible for the legal supervision over the Awqaf, its care and investment, as well as the well-being of minors. It manages, and invests such money through an Islamic perspective in full Sharia compliance as well as cares and empowers such minors.",
    playStore: "https://play.google.com/store/apps/details?id=ae.gov.amaf.android",
  },
  {
    title: "Islamic Affairs & Charitable Activities Department",
    tag: "Android",
    image: "assets/images/projects/iacad.jpg",
    desc: "The Department of Endowments in Dubai established on October 24, 1969, by the decree issued by the late Sheikh Rashid bin Saeed Al Maktoum, and the Department began to expand gradually until the Law No. (7) Of 1994 on issuing the Endowments and Islamic Affairs, followed by Law No. (2) Of 2011 on issuing the Islamic Affairs and Charitable Activities Department (IACAD), which included the functions and policies of the Department, which based on three axes: charitable work, Islamic affairs, mosques Affairs.",
    playStore: "https://play.google.com/store/apps/details?id=com.LinkDev.IACAD.app",
  },
];

const TOOLS_URL = "https://microtools.abqamar.dev/";

// Mirrors the tools on microtools.abqamar.dev — add one entry here when a tool is added there.
// Icons are the same Heroicons paths the tools site uses.
const DEV_TOOLS = [
  {
    name: "JSON to Dart",
    category: "flutter",
    desc: "Null-safe Flutter models in plain, Equatable, json_serializable or freezed style.",
    url: TOOLS_URL + "flutter/#json-to-dart",
    icon: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  },
  {
    name: ".env to Dart",
    category: "flutter",
    desc: "Obfuscated config classes or a <code>--dart-define-from-file</code> setup.",
    url: TOOLS_URL + "flutter/#env-to-dart",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  },
  {
    name: "Assets to Dart",
    category: "flutter",
    desc: "Drop your assets folder and get type-safe asset references.",
    url: TOOLS_URL + "flutter/#assets-to-dart",
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    name: "JSON Formatter",
    category: "data",
    desc: "Validate, pretty-print or minify JSON.",
    url: TOOLS_URL + "#json",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    name: "Base64 Encode/Decode",
    category: "data",
    desc: "Full UTF-8 support, including URL-safe mode.",
    url: TOOLS_URL + "#base64",
    icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    name: "Base64 Image Viewer",
    category: "data",
    desc: "Preview Base64 or data URI images safely.",
    url: TOOLS_URL + "#base64-image",
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    name: "Epoch Converter",
    category: "data",
    desc: "Unix timestamps to readable dates and back.",
    url: TOOLS_URL + "#epoch",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "UUID Generator",
    category: "data",
    desc: "RFC 4122 v4 UUIDs, one or a thousand at a time.",
    url: TOOLS_URL + "#uuid",
    icon: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5",
  },
  {
    name: "Password Generator",
    category: "security",
    desc: "Cryptographically secure passwords with a strength meter.",
    url: TOOLS_URL + "#password",
    icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
  },
  {
    name: "RSA Keys (PEM)",
    category: "security",
    desc: "Generate key pairs; encrypt, decrypt, sign and verify.",
    url: TOOLS_URL + "#rsa",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    name: "Case Converter",
    category: "text",
    desc: "UPPERCASE, lowercase, Title Case, camelCase and more.",
    url: TOOLS_URL + "#case",
    icon: "M3 19.5L7.5 6l4.5 13.5M4.5 15h6m4.5-2.25c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25v6.75m0-3.75h-2.625a1.875 1.875 0 100 3.75H19.5",
  },
  {
    name: "Whitespace Remover",
    category: "text",
    desc: "Strip spaces, tabs, line breaks and invisible characters.",
    url: TOOLS_URL + "#whitespace",
    icon: "M3.75 9h16.5m-16.5 6.75h16.5M8.25 4.5l-3 15m13.5-15l-3 15",
  },
  {
    name: "Lorem Ipsum",
    category: "text",
    desc: "Placeholder text by paragraphs, sentences or words.",
    url: TOOLS_URL + "#lorem",
    icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",
  },
];

const WEB3FORMS_KEY = "6e02536d-546e-4f55-b7f5-3f564f7971be";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;
const $ = (sel) => document.querySelector(sel);

/* ---------- Render sections ---------- */
$("#skills").innerHTML = SKILLS.map(
  (s) => `
  <div class="skill">
    <div class="skill-top"><span><i aria-hidden="true" class="${s.icon}"></i>${s.name}</span><span>${s.level}%</span></div>
    <div class="bar"><div class="bar-fill" data-level="${s.level}"></div></div>
  </div>`
).join("");

$("#timeline").innerHTML = EXPERIENCE.map(
  (e) => `
  <div class="tl-item reveal">
    <span class="tl-dot"></span>
    <div class="glass card tl-card">
      <span class="tl-date"><i aria-hidden="true" class="fa-regular fa-calendar"></i>${e.date}</span>
      <h3 class="tl-role">${e.role}</h3>
      <p class="tl-company">${e.company}${e.outsourced ? ` <em>· Outsourced: ${e.outsourced}</em>` : ""}</p>
      <p class="tl-loc"><i aria-hidden="true" class="fa-solid fa-location-dot"></i>${e.location}</p>
      <p class="tl-desc">${e.desc}</p>
    </div>
  </div>`
).join("");

const link = (href, icon, label) =>
  href ? `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}" title="${label}"><i aria-hidden="true" class="${icon}"></i></a>` : "";

$("#projectsGrid").innerHTML = PROJECTS.map(
  (p, i) => `
  <article class="project glass reveal" style="--d:${(i % 3) * 0.1}s">
    <div class="project-media">
      <span class="project-tag">${p.tag}</span>
      <img src="${p.image}" alt="${p.title}" loading="lazy">
    </div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-links">
        ${link(p.appStore, "fa-brands fa-app-store-ios", "App Store")}
        ${link(p.playStore, "fa-brands fa-google-play", "Google Play")}
        ${link(p.web, "fa-solid fa-globe", "Website")}
      </div>
    </div>
  </article>`
).join("");

const toolIcon = (d) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;

$("#toolsFeatured").innerHTML = DEV_TOOLS.filter((t) => t.category === "flutter").map(
  (t, i) => `
  <a class="tool-feature glass reveal" style="--d:${i * 0.1}s" href="${t.url}" target="_blank" rel="noopener">
    <span class="tool-icon">${toolIcon(t.icon)}</span>
    <span class="tool-text">
      <strong>${t.name}</strong>
      <small>${t.desc}</small>
    </span>
    <i class="fa-solid fa-arrow-up-right-from-square tool-go" aria-hidden="true"></i>
  </a>`
).join("");

$("#toolsGrid").innerHTML = DEV_TOOLS.filter((t) => t.category !== "flutter").map(
  (t, i) => `
  <a class="tool-tile glass reveal" style="--d:${(i % 5) * 0.08}s" data-category="${t.category}" href="${t.url}" target="_blank" rel="noopener">
    <span class="tool-icon">${toolIcon(t.icon)}</span>
    <strong>${t.name}</strong>
    <small>${t.desc}</small>
  </a>`
).join("");

document.querySelectorAll(".tool-filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    const cat = btn.dataset.filter;
    document.querySelectorAll(".tool-filter").forEach((b) => b.setAttribute("aria-pressed", b === btn));
    document.querySelectorAll(".tool-tile").forEach((tile) => {
      tile.hidden = cat !== "all" && tile.dataset.category !== cat;
    });
    const shown = [...document.querySelectorAll(".tool-tile:not([hidden])")];
    if (window.Motion && !reduceMotion) {
      Motion.animate(shown, { opacity: [0, 1], scale: [0.92, 1] }, { type: "spring", stiffness: 300, damping: 24, delay: Motion.stagger(0.04) })
        .then(() => shown.forEach((t) => (t.style.transform = "")));
    }
  })
);

/* ---------- Typewriter ---------- */
(function typewriter() {
  const el = $("#typed");
  if (reduceMotion) { el.textContent = ROLES[0]; return; }
  let r = 0, c = 0, deleting = false;
  (function tick() {
    const word = ROLES[r];
    el.textContent = word.slice(0, c);
    if (!deleting && c === word.length) { deleting = true; return setTimeout(tick, 1800); }
    if (deleting && c === 0) { deleting = false; r = (r + 1) % ROLES.length; }
    c += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 35 : 75);
  })();
})();

/* ---------- Reveal on scroll + skill bars + counters ---------- */
const countUp = (el) => {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1400;
  (function step(now) {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  })(start);
};

// Motion (motion.dev) drives the animations; without it (CDN blocked or reduced
// motion requested) the CSS transitions below take over, so content never stays hidden.
const M = window.Motion;
const useMotion = !!M && !reduceMotion;
const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 140, damping: 22, mass: 0.9 };

function fillExtras(el) {
  el.querySelectorAll(".bar-fill").forEach((b) => {
    if (useMotion) M.animate(b, { width: ["0%", b.dataset.level + "%"] }, { duration: 1.4, ease: EASE });
    else b.style.width = b.dataset.level + "%";
  });
  el.querySelectorAll("[data-count]").forEach((c) => {
    if (useMotion) M.animate(0, +c.dataset.count, { duration: 1.6, ease: EASE, onUpdate: (v) => (c.textContent = Math.round(v)) });
    else countUp(c);
  });
}

if (useMotion) {
  const { animate, inView, scroll, stagger } = M;
  document.documentElement.classList.add("has-motion");

  // hand control back to CSS (hover lifts etc.) once an entrance finishes
  const settle = (els) => [].concat(els).forEach((el) => {
    el.classList.add("revealed");
    el.style.transform = "";
    el.style.filter = "";
  });

  // Page load: hero copy rises line by line with a soft focus-pull
  const heroCopy = [...document.querySelectorAll(".hero-text .reveal")];
  animate(heroCopy, { opacity: [0, 1], y: [28, 0], filter: ["blur(6px)", "blur(0px)"] },
    { ...SPRING, delay: stagger(0.08, { startDelay: 0.15 }) }).then(() => settle(heroCopy));
  const heroVisual = $(".hero-visual");
  animate(heroVisual, { opacity: [0, 1] }, { duration: 0.8, delay: 0.3 });
  animate(".phone", { scale: [0.88, 1] }, { type: "spring", stiffness: 90, damping: 16, delay: 0.3 });
  animate(".chip", { opacity: [0, 1], filter: ["blur(4px)", "blur(0px)"] }, { duration: 0.5, delay: stagger(0.12, { startDelay: 0.8 }) });

  // Scroll-linked: gentle hero parallax as it leaves the viewport
  const hero = $(".hero");
  scroll(animate(heroVisual, { y: [0, 90] }, { ease: "linear" }), { target: hero, offset: ["start start", "end start"] });
  scroll(animate(".hero-text", { y: [0, 40], opacity: [1, 0.25] }, { ease: "linear" }), { target: hero, offset: ["start start", "end start"] });

  // Timeline line draws itself as you read down the experience
  const timeline = $("#timeline");
  const line = document.createElement("span");
  line.className = "timeline-progress";
  timeline.prepend(line);
  scroll(animate(line, { scaleY: [0, 1] }, { ease: "linear" }), { target: timeline, offset: ["start 75%", "end 60%"] });

  // Everything below the hero springs in as it enters; items in a row keep their stagger (--d)
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.closest(".hero")) return;
    const delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
    const fromX = el.classList.contains("tl-item") ? (el.matches(":nth-child(even)") ? 48 : -48) : 0;
    inView(el, () => {
      animate(el, { opacity: [0, 1], x: [fromX, 0], y: [fromX ? 0 : 32, 0] }, { ...SPRING, delay }).then(() => settle(el));
      fillExtras(el);
    }, { margin: "0px 0px -60px 0px" });
  });
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        fillExtras(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // stagger hero entrance
  document.querySelectorAll(".hero .reveal").forEach((el, i) => el.style.setProperty("--d", `${i * 0.1}s`));
}

/* ---------- Navigation ---------- */
const navWrap = $(".nav-wrap");
const navLinks = $("#navLinks");
const menuToggle = $("#menuToggle");

const progress = $("#scrollProgress");
let scrollTicking = false;
window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    navWrap.classList.toggle("scrolled", scrollY > 20);
    scrollTicking = false;
  });
}, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

/* ---------- Pointer effects: spotlight + 3D tilt ---------- */
if (finePointer && !reduceMotion) {
  const root = document.documentElement;
  window.addEventListener("pointermove", (e) => {
    root.style.setProperty("--mx", `${e.clientX}px`);
    root.style.setProperty("--my", `${e.clientY}px`);
  }, { passive: true });

  document.querySelectorAll(".tilt, .project").forEach((card) => {
    const max = card.classList.contains("project") ? 6 : 10;
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      if (useMotion) {
        M.animate(card, { rotateX: -y * max, rotateY: x * max, y: -6, transformPerspective: 900 }, { type: "spring", stiffness: 220, damping: 20 });
      } else {
        card.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-6px)`;
      }
    });
    card.addEventListener("pointerleave", () => {
      if (useMotion) M.animate(card, { rotateX: 0, rotateY: 0, y: 0 }, { type: "spring", stiffness: 160, damping: 18 });
      else card.style.transform = "";
    });
  });

  // magnetic primary buttons: lean toward the cursor, spring back on leave
  if (useMotion) {
    document.querySelectorAll(".btn-primary").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        M.animate(btn, { x: dx * 0.18, y: dy * 0.3 }, { type: "spring", stiffness: 260, damping: 18 });
      });
      btn.addEventListener("pointerleave", () => M.animate(btn, { x: 0, y: 0 }, { type: "spring", stiffness: 200, damping: 14 }));
    });
  }
}

/* ---------- Particle network background ---------- */
(function particles() {
  if (reduceMotion) return;
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  let w, h, dots;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(45, Math.floor((w * h) / 30000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.6 + 0.4,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180, 200, 255, 0.4)";
      ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(124, 92, 255, ${0.12 * (1 - d / 130)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  draw();
})();

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg, type = "") {
  const t = $("#toast");
  t.textContent = msg;
  t.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 4000);
}

/* ---------- Contact form (Web3Forms) ---------- */
const form = $("#contactForm");
const submitBtn = $("#submitBtn");
const formError = $("#formError");
const fields = ["#name", "#email", "#message"].map($);

fields.forEach((f) =>
  f.addEventListener("input", () => {
    f.removeAttribute("aria-invalid");
    if (fields.every((x) => x.value.trim())) formError.hidden = true;
  })
);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  if (!name || !email || !message) {
    fields.forEach((f) => (f.value.trim() ? f.removeAttribute("aria-invalid") : f.setAttribute("aria-invalid", "true")));
    formError.hidden = false;
    fields.find((f) => !f.value.trim()).focus();
    showToast("Please fill in all fields", "error");
    return;
  }
  formError.hidden = true;

  submitBtn.disabled = true;
  submitBtn.classList.add("loading");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, name, email, message }),
    });

    if (res.status === 200) {
      showToast("Message sent successfully!", "success");
      form.reset();
    } else {
      showToast("Failed to send message: " + (await res.text()), "error");
    }
  } catch (err) {
    showToast("Error: " + err, "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
  }
});

/* ---------- Clean up the old Flutter service worker ---------- */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
}
