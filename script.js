/* -------------------------------------------------
   FORCE SCROLL TO TOP WHEN PAGE LOADS / RELOADS
-------------------------------------------------- */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 50);

  // <<< FIXED: Make hero visible immediately on load!
  if (document.querySelector(".hero-inner")) {
    document.querySelector(".hero-inner").classList.add("hero-visible");
  }
});

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Nav & UI elements
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const bgMain = document.querySelector(".hero-bg-main");
const bgGold = document.querySelector(".hero-bg-gold");
const bgParticles = document.querySelector(".hero-bg-particles");
const stripImg = document.querySelector(".strip-image");
const header = document.querySelector(".site-header");
const brandName = document.querySelector(".brand-name");
const brandSub = document.querySelector(".brand-sub");
const scrollBar = document.querySelector(".scroll-progress-bar");
const portraitWrap = document.querySelector(".hero-portrait-wrap");
const whatsappBtn = document.getElementById("whatsapp-btn");

// Mobile nav toggle
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("reveal-visible"));
}

// Performance check
const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

// Smart scroll behavior
let lastScrollY = window.scrollY;
const SCROLL_THRESHOLD = 50;
let upScrollDistance = 0;

// Highlight active nav links
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const highlightNav = () => {
  const scrollPos = window.scrollY + 200;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollPos >= top && scrollPos < top + height) {
      navItems.forEach((l) => l.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
};

// Main scroll handler
const handleScroll = () => {
  const y = window.scrollY;
  const scrollingDown = y > lastScrollY;
  const isCompact = window.innerWidth <= 900;

  // Scroll progress
  if (scrollBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = `${(y / docHeight) * 100}%`;
  }

  // Parallax - COMMENTED OUT FOR LIGHT THEME/STATIC BACKGROUND
  /*
  if (!isLowEndDevice) {
    if (bgMain) bgMain.style.transform = `translateY(${y * -0.1}px) scale(1.03)`;
    if (bgGold) bgGold.style.transform = `translateY(${y * -0.16}px) translateX(${y * 0.03}px)`;
    if (bgParticles) bgParticles.style.transform = `translateY(${y * -0.05}px)`;
    if (stripImg) stripImg.style.transform = `translateY(${y * -0.06}px)`;
  }
  */

  // Mobile smart hide
  if (isCompact) {
    if (scrollingDown && y > 60) {
      upScrollDistance = 0;
      header.style.transform = "translateY(-100%)";
      if (navLinks?.classList.contains("nav-open")) {
        navLinks.classList.remove("nav-open");
        navToggle?.setAttribute("aria-expanded", "false");
      }
    } else {
      upScrollDistance += lastScrollY - y;
      if (upScrollDistance > SCROLL_THRESHOLD && y > 60) {
        header.style.transform = "translateY(0)";
        brandName.textContent = "Adv. Athul Roy";
        brandSub.style.opacity = "0";
        // Hide nav toggle only if menu is closed for a cleaner header
        if (!navLinks?.classList.contains("nav-open")) {
          navToggle.style.opacity = "0";
          navToggle.style.pointerEvents = "none";
        }
      }
    }
  }

  // Restore when near top
  if (y <= 60) {
    header.style.transform = "translateY(0)";
    brandName.textContent = "Advocate Athul Roy";
    brandSub.style.opacity = "1";
    navToggle.style.opacity = "1";
    navToggle.style.pointerEvents = "auto";
  }

  // Header shadow
  header.classList.toggle("scrolled", y > 60);

  // Desktop WhatsApp fade
  if (whatsappBtn && window.innerWidth > 900) {
    if (scrollingDown && y > 140) {
      whatsappBtn.style.opacity = "0";
      whatsappBtn.style.pointerEvents = "none";
    } else {
      whatsappBtn.style.opacity = "1";
      whatsappBtn.style.pointerEvents = "auto";
    }
  }

  lastScrollY = y;
};

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

// WhatsApp → Scroll to Contact
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  });
}

// Portrait tilt
if (portraitWrap && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    portraitWrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

// Lazy-load Map
const contactMap = document.querySelector(".contact-map");
if (contactMap && contactMap.dataset.mapSrc) {
  const mapObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      contactMap.src = contactMap.dataset.mapSrc;
      mapObserver.disconnect();
    }
  }, { threshold: 0.2 });
  mapObserver.observe(contactMap);
}

// Scroll to Top Btn
const scrollTopBtn = document.getElementById("scrollTopBtn");
scrollTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  scrollTopBtn.classList.toggle("visible", y > 300);
});

// Premium: fade-in header on first load
window.addEventListener("load", () => {
  if (header) header.classList.add("header-visible");
});