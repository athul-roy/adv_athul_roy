// Always start at top (avoid refresh jumping down)
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("reveal-visible"));
}

// Elements
const bgMain = document.querySelector(".hero-bg-main");
const bgGold = document.querySelector(".hero-bg-gold");
const bgParticles = document.querySelector(".hero-bg-particles");
const stripImg = document.querySelector(".strip-image");
const header = document.querySelector(".site-header");
const brandName = document.querySelector(".brand-name");
const brandSub = document.querySelector(".brand-sub");

// Smart Header Behavior
let lastScrollY = window.scrollY;
let upScrollDistance = 0;
const SCROLL_THRESHOLD = 50; // px to scroll up before showing header

// Device performance check
const isLowEndDevice =
  navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

const handleScroll = () => {
  const y = window.scrollY;
  const isCompact = window.innerWidth <= 900;
  const scrollingDown = y > lastScrollY;

  // Disable parallax animations on low-end hardware
  if (!isLowEndDevice) {
    if (bgMain) bgMain.style.transform = `translateY(${y * -0.10}px) scale(1.03)`;
    if (bgGold) bgGold.style.transform = `translateY(${y * -0.16}px) translateX(${y * 0.03}px)`;
    if (bgParticles) bgParticles.style.transform = `translateY(${y * -0.05}px)`;
    if (stripImg) stripImg.style.transform = `translateY(${y * -0.06}px)`;
  }

  // Auto-close menu while scrolling
  if (isCompact && navLinks.classList.contains("nav-open")) {
    navLinks.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (isCompact) {
    if (scrollingDown && y > 60) {
      upScrollDistance = 0;
      header.style.transform = "translateY(-100%)";
    } else {
      upScrollDistance += lastScrollY - y;

      if (upScrollDistance > SCROLL_THRESHOLD) {
        header.style.transform = "translateY(0)";
        brandName.textContent = "Adv. Athul Roy";
        if (brandSub) brandSub.style.opacity = "0";
        navToggle.style.opacity = "0";
        navToggle.style.pointerEvents = "none";
      }
    }
  }

  // Top section → Full branding restored
  if (y <= 60) {
    header.style.transform = "translateY(0)";
    brandName.textContent = "Advocate Athul Roy";
    brandSub.style.opacity = "1";
    navToggle.style.opacity = "1";
    navToggle.style.pointerEvents = "auto";
  }

  lastScrollY = y;
};

window.addEventListener("scroll", handleScroll, { passive: true });

// Desktop-only tilt for portrait
const portraitWrap = document.querySelector(".hero-portrait-wrap");
if (portraitWrap && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    portraitWrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

// Lazy-load Google Map
const contactMap = document.querySelector(".contact-map");
if (contactMap && contactMap.dataset.mapSrc) {
  if ("IntersectionObserver" in window) {
    const mapObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactMap.src = contactMap.dataset.mapSrc;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    mapObserver.observe(contactMap);
  } else {
    contactMap.src = contactMap.dataset.mapSrc;
  }
}