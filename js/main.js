/* ==========================================================
   Muhammad Basit Qamar — Portfolio
   ========================================================== */

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
const $ = (sel) => document.querySelector(sel);

/* ---------- Render sections ---------- */
$("#skills").innerHTML = SKILLS.map(
  (s) => `
  <li class="skill">
    <div class="skill-top"><span><i aria-hidden="true" class="${s.icon}"></i>${s.name}</span><span>${s.level}%</span></div>
    <div class="bar" role="presentation"><div class="bar-fill" style="--level:${s.level / 100}"></div></div>
  </li>`
).join("");

$("#timeline").innerHTML = EXPERIENCE.map(
  (e) => `
  <li class="tl-item">
    <div>
      <p class="tl-date">${e.date}</p>
      <p class="tl-loc">${e.location}</p>
    </div>
    <div>
      <h3 class="tl-role">${e.role}</h3>
      <p class="tl-company">${e.company}${e.outsourced ? ` <em>· for ${e.outsourced}</em>` : ""}</p>
      <p class="tl-desc">${e.desc}</p>
    </div>
  </li>`
).join("");

const link = (href, icon, label, title) =>
  href ? `<a href="${href}" target="_blank" rel="noopener" aria-label="${title} on ${label}" title="${label}"><i aria-hidden="true" class="${icon}"></i></a>` : "";

$("#projectsGrid").innerHTML = PROJECTS.map(
  (p) => `
  <article class="project">
    <div class="project-media">
      <span class="project-tag">${p.tag}</span>
      <img src="${p.image}" alt="${p.title} app" loading="lazy" decoding="async">
    </div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-links">
        ${link(p.appStore, "fa-brands fa-app-store-ios", "App Store", p.title)}
        ${link(p.playStore, "fa-brands fa-google-play", "Google Play", p.title)}
        ${link(p.web, "fa-solid fa-globe", "the web", p.title)}
      </div>
    </div>
  </article>`
).join("");

const toolIcon = (d) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;

$("#toolsFeatured").innerHTML = DEV_TOOLS.filter((t) => t.category === "flutter").map(
  (t) => `
  <a class="tool-feature" href="${t.url}" target="_blank" rel="noopener">
    <span class="tool-icon">${toolIcon(t.icon)}</span>
    <span class="tool-text">
      <strong>${t.name}</strong>
      <small>${t.desc}</small>
    </span>
    <i class="fa-solid fa-arrow-up-right-from-square tool-go" aria-hidden="true"></i>
  </a>`
).join("");

$("#toolsGrid").innerHTML = DEV_TOOLS.filter((t) => t.category !== "flutter").map(
  (t) => `
  <a class="tool-tile" data-category="${t.category}" href="${t.url}" target="_blank" rel="noopener">
    <span class="tool-icon">${toolIcon(t.icon)}</span>
    <strong>${t.name}</strong>
    <small>${t.desc}</small>
  </a>`
).join("");

const M = window.Motion;
const useMotion = !!M && !reduceMotion;
const EASE = [0.32, 0.72, 0, 1];

document.querySelectorAll(".tool-filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    const cat = btn.dataset.filter;
    document.querySelectorAll(".tool-filter").forEach((b) => b.setAttribute("aria-pressed", b === btn));
    document.querySelectorAll(".tool-tile").forEach((tile) => {
      tile.hidden = cat !== "all" && tile.dataset.category !== cat;
    });
    // crossfade the filtered result in place
    if (useMotion) M.animate("#toolsGrid", { opacity: [0, 1] }, { duration: 0.25, ease: EASE });
  })
);

/* ---------- Motion: entrances ----------
   Springs, not fixed-duration easing: critically damped (no bounce) because nothing here
   carries gesture momentum. Hero animates on mount; every other group reveals once at 15% visibility.
   [data-reveal] = copy / mixed / card groups, [data-reveal-media] = standalone media,
   [data-stagger] = 2–4 sibling cards revealed 0.08s apart (no stagger on phones).
   Without Motion (CDN blocked or reduced motion) nothing is hidden. */
if (useMotion) {
  const { animate, inView } = M;
  const phone = matchMedia("(max-width: 640px)").matches;
  const TRAVEL = phone ? 16 : 28;
  const SPRING = { type: "spring", bounce: 0, duration: 0.8 };

  animate("[data-hero]", { opacity: [0, 1], y: [TRAVEL, 0] }, SPRING);
  animate("[data-hero-media]", { opacity: [0, 1], y: [TRAVEL * 2, 0] }, { ...SPRING, delay: 0.12 });

  const reveal = (el, keyframes, delay = 0) => {
    el.style.opacity = "0";
    // tall groups trigger as soon as they appear
    const amount = el.offsetHeight > innerHeight ? 0 : 0.15;
    inView(el, () => {
      animate(el, keyframes, { ...SPRING, delay }).then(() => (el.style.transform = ""));
    }, { amount });
  };

  document.querySelectorAll("[data-reveal]").forEach((el) => reveal(el, { opacity: [0, 1], y: [TRAVEL, 0] }));
  document.querySelectorAll("[data-reveal-media]").forEach((el) => reveal(el, { opacity: [0, 1], scale: [0.97, 1] }));
  document.querySelectorAll("[data-stagger]").forEach((group) => {
    const items = [...group.children];
    items.forEach((el) => (el.style.opacity = "0"));
    inView(group, () => {
      items.forEach((el, i) =>
        animate(el, { opacity: [0, 1], y: [TRAVEL, 0] }, { ...SPRING, delay: phone ? 0 : i * 0.08 })
          .then(() => (el.style.transform = ""))
      );
    }, { amount: 0.15 });
  });

  // The experience timeline is a progression of roles — reveal in reading order
  document.querySelectorAll(".tl-item").forEach((el) => reveal(el, { opacity: [0, 1], y: [TRAVEL, 0] }));

  // Stat counters tick up with their tiles
  inView(".stats", () => {
    document.querySelectorAll("[data-count]").forEach((c) =>
      animate(0, +c.dataset.count, { ...SPRING, duration: 1.2, onUpdate: (v) => (c.textContent = Math.round(v)) })
    );
  }, { amount: 0.15 });

  // Skill bars grow (transform only) when the skills tile appears
  inView(".tile-skills", () => {
    document.querySelectorAll(".bar-fill").forEach((b) =>
      animate(b, { scaleX: [0, +b.style.getPropertyValue("--level")] }, { ...SPRING, duration: 1 })
    );
  }, { amount: 0.15 });
}

/* ---------- Projects carousel ----------
   Native scroll-snap keeps momentum and rubber-banding; buttons just move one card. */
const strip = $("#projectsGrid");
const prevBtn = $("#projPrev");
const nextBtn = $("#projNext");
const step = () => strip.querySelector(".project").offsetWidth + parseFloat(getComputedStyle(strip).columnGap);
const syncCarousel = () => {
  prevBtn.disabled = strip.scrollLeft < 8;
  nextBtn.disabled = strip.scrollLeft > strip.scrollWidth - strip.clientWidth - 8;
};
prevBtn.addEventListener("click", () => strip.scrollBy({ left: -step(), behavior: reduceMotion ? "auto" : "smooth" }));
nextBtn.addEventListener("click", () => strip.scrollBy({ left: step(), behavior: reduceMotion ? "auto" : "smooth" }));
strip.addEventListener("scroll", syncCarousel, { passive: true });
window.addEventListener("resize", syncCarousel);
syncCarousel();

/* ---------- Navigation ---------- */
const navWrap = $(".nav-wrap");
const navLinks = $("#navLinks");
const menuToggle = $("#menuToggle");

let scrollTicking = false;
window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    navWrap.classList.toggle("scrolled", scrollY > 8);
    scrollTicking = false;
  });
}, { passive: true });

const setMenu = (open) => {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) { setMenu(false); menuToggle.focus(); }
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach((a) => {
        const on = a.getAttribute("href") === `#${entry.target.id}`;
        a.classList.toggle("active", on);
        on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

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
