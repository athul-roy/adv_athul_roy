:root {
  /* Palette: dark hero + gold + cream */
  --bg-page: #07060a;
  --bg-hero: #05050a;
  --bg-cream: #f5efe5;
  --bg-cream-soft: #f8f3ea;
  --panel-dark: #101118;
  --panel-soft: #181927;
  --panel-light: #ffffff;
  --text-main: #151316;
  --text-on-dark: #f8f6f2;
  --text-muted-dark: #b6b3c2;
  --text-muted-light: #7e7a84;
  --accent: #d4ae64;
  --accent-strong: #b8872e;
  --border-soft-dark: #262632;
  --border-soft-light: #e1d7c5;
  --radius-md: 16px;
  --shadow-soft: 0 28px 80px rgba(0, 0, 0, 0.9);
  --max-width: 1180px;
  --transition: 0.24s ease-out;
}

/* Base */

html,
body {
  background-color: var(--bg-page);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: var(--text-main);
}

/* Layout */

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

main {
  padding-top: 4.2rem;
}

.section {
  padding: 4rem 0;
  position: relative;
}

.section-light {
  background: var(--bg-cream);
}

.section-cream {
  background: var(--bg-cream-soft);
}

.narrow {
  max-width: 780px;
  margin: 0 auto;
}

/* Typography */

h1,
h2,
h3 {
  font-family: "Playfair Display", serif;
  font-weight: 500;
  margin: 0 0 0.75rem;
}

h2 {
  font-size: 1.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #29262f;
}

h3 {
  font-size: 1.05rem;
}

p {
  margin: 0 0 1rem;
  font-size: 0.95rem;
}

.section-intro {
  margin-bottom: 1.75rem;
}

/* HEADER */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background: rgba(5, 5, 10, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(18px);
  padding-top: env(safe-area-inset-top);
  transition: padding 0.25s ease-out, background 0.25s ease-out,
    transform 0.25s ease-out;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-on-dark);
  transition: font-size 0.25s ease-out, letter-spacing 0.25s ease-out;
}

.brand-sub {
  font-size: 0.78rem;
  color: var(--text-muted-dark);
  transition: opacity 0.25s ease-out;
}

.header-scrolled {
  background: rgba(5, 5, 10, 0.98);
}

.header-scrolled .brand-name {
  font-size: 0.86rem;
  letter-spacing: 0.18em;
}

/* NAV */

.nav {
  position: relative;
}

.nav-toggle {
  display: none;
  border: 1px solid var(--border-soft-dark);
  background: transparent;
  border-radius: 999px;
  padding: 0.35rem 0.6rem;
  font-size: 1rem;
  color: var(--text-on-dark);
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  font-size: 0.8rem;
  color: var(--text-muted-dark);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding-bottom: 0.2rem;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), #f8e2af);
  border-radius: 999px;
  transition: width var(--transition);
}

.nav-links a:hover {
  color: var(--text-on-dark);
}

.nav-links a:hover::after {
  width: 100%;
}

/* HERO */

.hero {
  position: relative;
  min-height: calc(100vh - 4.2rem);
  display: flex;
  align-items: center;
  padding: 5.6rem 0 4.6rem;
  overflow: hidden;
  background: radial-gradient(circle at top, #151621 0, #05050a 60%);
}

/* Hero layers */

.hero-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -3;
  will-change: transform;
}

.hero-bg-main {
  background-image: url("images/justice-hero.jpg");
  background-size: cover;
  background-position: center;
  filter: grayscale(25%) contrast(1.05) brightness(0.55);
  transform: scale(1.08);
}

.hero-bg-vignette {
  z-index: -2;
  background:
    radial-gradient(circle at top left, rgba(5, 5, 10, 0.9), transparent 50%),
    radial-gradient(circle at top right, rgba(5, 5, 10, 0.85), transparent 60%),
    radial-gradient(circle at bottom, rgba(3, 3, 5, 0.95), rgba(3, 3, 5, 1));
}

.hero-bg-gold {
  z-index: -1;
  background:
    linear-gradient(
      120deg,
      transparent 0%,
      rgba(212, 174, 100, 0.2) 30%,
      rgba(184, 135, 46, 0.55) 48%,
      rgba(212, 174, 100, 0.2) 65%,
      transparent 100%
    );
  mix-blend-mode: screen;
  transform: translateX(-45%);
  animation: goldSweep 10s ease-in-out infinite alternate;
}

.hero-bg-particles::before,
.hero-bg-particles::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.07) 0, transparent 50%),
    radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.06) 0, transparent 45%),
    radial-gradient(circle at 30% 80%, rgba(255, 255, 255, 0.05) 0, transparent 50%);
  opacity: 0.18;
  animation: particlesFloat 20s linear infinite;
}

/* Hero layout */

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.9fr);
  gap: 3.2rem;
  align-items: center;
}

.hero-copy {
  max-width: 480px;
  color: var(--text-on-dark);
}

.hero-heading-main {
  font-size: 2.4rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-heading-sub {
  font-size: 0.9rem;
  color: var(--text-muted-dark);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero-placeholder {
  margin-top: 1.2rem;
  font-size: 0.95rem;
  color: #d8d5e0;
}

/* Scroll cue (desktop only) */

.scroll-cue {
  margin-top: 2.2rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
}

.scroll-line {
  width: 2px;
  height: 32px;
  border-radius: 999px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollLine 1.6s ease-in-out infinite;
}

.scroll-text {
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted-dark);
}

/* Portrait */

.hero-visual {
  display: flex;
  justify-content: flex-end;
}

.hero-portrait-wrap {
  position: relative;
  width: 280px;
  max-width: 76vw;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(212, 174, 100, 0.9);
  background:
    radial-gradient(circle at 20% 0, rgba(212, 174, 100, 0.2), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(22, 65, 49, 0.6), transparent 70%),
    #05050a;
  box-shadow:
    0 26px 70px rgba(0, 0, 0, 0.95),
    0 0 0 1px rgba(0, 0, 0, 0.6);
  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow, border-color;
  animation: heroGlowPulse 7s ease-in-out infinite alternate;
}

.hero-portrait-glow {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 20% 0, rgba(212, 174, 100, 0.35), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(22, 65, 49, 0.75), transparent 70%);
  opacity: 0.85;
  pointer-events: none;
}

.hero-portrait {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transform: scale(1.02);
  transition: transform 0.6s ease-out;
}

.hero-portrait-wrap::after {
  content: "";
  position: absolute;
  left: -5%;
  right: -5%;
  bottom: -5%;
  height: 36%;
  background: linear-gradient(to bottom, transparent 0%, #05050a 90%);
  pointer-events: none;
}

.hero-portrait-wrap:hover .hero-portrait {
  transform: scale(1.06);
}

/* Sections & CTAs */

.section-light p,
.section-cream p {
  color: var(--text-muted-light);
}

.section-light h2,
.section-cream h2 {
  color: #28252f;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.6rem;
}

.cta-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(172, 148, 101, 0.5);
  text-decoration: none;
  font-size: 0.88rem;
  color: #3c3528;
  background: rgba(248, 243, 234, 0.92);
  backdrop-filter: blur(10px);
  transition: background var(--transition), border-color var(--transition),
    transform var(--transition), box-shadow var(--transition), color var(--transition);
}

.cta-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #23190a;
  border-color: transparent;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}

.cta-pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
  border-color: rgba(212, 174, 100, 0.8);
}

/* STRIP */

.strip {
  position: relative;
  overflow: hidden;
  background: #141017;
}

.strip-image {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
  filter: grayscale(35%) contrast(1.1) brightness(0.7);
  transform: translateY(0);
  transition: transform 0.25s linear;
  will-change: transform;
}

.strip-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(10, 8, 13, 0.95), rgba(10, 8, 13, 0.85));
}

.strip-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  color: var(--text-on-dark);
}

/* Practice cards */

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;
  margin-top: 1.2rem;
}

.card {
  border-radius: var(--radius-md);
  padding: 1.1rem 1rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.card-soft {
  background: #fdfaf5;
  border: 1px solid rgba(209, 192, 159, 0.4);
}

/* CONTACT SECTION */

.contact-section {
  background: #f7f5ef;
  padding: 5rem 2rem;
  text-align: center;
  color: #2c2c2c;
}

.section-title {
  font-size: 1.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-subtitle {
  margin-top: 0.6rem;
  font-size: 0.95rem;
  color: #7e7a84;
}

.contact-map-card {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 22px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.15);
}

.contact-map {
  width: 100%;
  height: 350px;
  border: none;
}

.contact-details {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
  font-size: 0.96rem;
}

.contact-details h3 {
  color: #b08a41;
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

.contact-details p {
  font-size: 1rem;
  font-weight: 500;
  margin: 0.2rem 0;
}

/* FOOTER */

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0 1.4rem;
  background: #0b0a10;
  color: var(--text-muted-dark);
}

.footer-inner {
  text-align: center;
  font-size: 0.8rem;
}

/* Reveal animation */

.reveal {
  opacity: 0;
  transform: translateY(16px) scale(0.97);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Animations */

@keyframes goldSweep {
  0% {
    transform: translateX(-55%);
  }
  100% {
    transform: translateX(10%);
  }
}

@keyframes particlesFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-40px);
  }
}

@keyframes scrollLine {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0.1;
  }
}

@keyframes heroGlowPulse {
  0% {
    box-shadow:
      0 26px 70px rgba(0, 0, 0, 0.95),
      0 0 0 1px rgba(0, 0, 0, 0.6);
    border-color: rgba(212, 174, 100, 0.7);
  }
  100% {
    box-shadow:
      0 32px 90px rgba(0, 0, 0, 1),
      0 0 18px rgba(212, 174, 100, 0.55);
    border-color: rgba(212, 174, 100, 1);
  }
}

/* Responsive */

@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.4rem;
  }

  .hero-visual {
    justify-content: center;
    order: -1; /* portrait first on mobile */
  }

  .hero-copy {
    max-width: 100%;
    text-align: center;
  }

  .scroll-cue {
    align-items: center;
  }

  .hero-heading-main {
    font-size: 2rem;
  }

  .hero {
    padding-top: 5.4rem;
    min-height: 90vh;
  }
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  main {
    padding-top: calc(3.6rem + env(safe-area-inset-top));
  }

  .header-inner {
    padding: 0.45rem 0;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 0.4rem);
    right: 0;
    flex-direction: column;
    background: #111016;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 0.6rem 0.9rem;
    min-width: 190px;
    max-width: 90vw;
    box-shadow: var(--shadow-soft);
    opacity: 0;
    transform: translateY(-4px);
    pointer-events: none;
    transition: opacity var(--transition), transform var(--transition);
  }

  .nav-links.nav-open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-links li + li {
    margin-top: 0.35rem;
  }

  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  /* Hide scroll cue on mobile */
  .scroll-cue {
    display: none;
  }

  .contact-section {
    padding-inline: 1.5rem;
  }

  .contact-map-card {
    border-radius: 16px;
  }
}

@media (max-width: 400px) {
  .nav-links {
    left: 0;
    right: 0;
    margin-inline: 1rem;
  }

  .contact-map {
    height: 260px;
  }
}