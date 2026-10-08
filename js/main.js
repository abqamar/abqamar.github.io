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

const WEB3FORMS_KEY = "6e02536d-546e-4f55-b7f5-3f564f7971be";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;
const $ = (sel) => document.querySelector(sel);

/* ---------- Render sections ---------- */
$("#skills").innerHTML = SKILLS.map(
  (s) => `
  <div class="skill">
    <div class="skill-top"><span><i class="${s.icon}"></i>${s.name}</span><span>${s.level}%</span></div>
    <div class="bar"><div class="bar-fill" data-level="${s.level}"></div></div>
  </div>`
).join("");

$("#timeline").innerHTML = EXPERIENCE.map(
  (e) => `
  <div class="tl-item reveal">
    <span class="tl-dot"></span>
    <div class="glass card tl-card">
      <span class="tl-date"><i class="fa-regular fa-calendar"></i>${e.date}</span>
      <h4 class="tl-role">${e.role}</h4>
      <p class="tl-company">${e.company}${e.outsourced ? ` <em>· Outsourced: ${e.outsourced}</em>` : ""}</p>
      <p class="tl-loc"><i class="fa-solid fa-location-dot"></i>${e.location}</p>
      <p class="tl-desc">${e.desc}</p>
    </div>
  </div>`
).join("");

const link = (href, icon, label) =>
  href ? `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}" title="${label}"><i class="${icon}"></i></a>` : "";

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

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("visible");
      el.querySelectorAll(".bar-fill").forEach((b) => (b.style.width = b.dataset.level + "%"));
      el.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(el);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// stagger hero entrance
document.querySelectorAll(".hero .reveal").forEach((el, i) => el.style.setProperty("--d", `${i * 0.1}s`));

/* ---------- Navigation ---------- */
const navWrap = $(".nav-wrap");
const navLinks = $("#navLinks");
const menuToggle = $("#menuToggle");

window.addEventListener("scroll", () => navWrap.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

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
      card.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-6px)`;
    });
    card.addEventListener("pointerleave", () => (card.style.transform = ""));
  });
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
    const count = Math.min(70, Math.floor((w * h) / 22000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
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
      ctx.fillStyle = "rgba(180, 200, 255, 0.55)";
      ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(124, 92, 255, ${0.18 * (1 - d / 130)})`;
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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  if (!name || !email || !message) {
    showToast("Please fill in all fields", "error");
    return;
  }

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
