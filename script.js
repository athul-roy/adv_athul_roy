document.addEventListener('DOMContentLoaded', () => {
  // --- QUOTE GENERATOR ---
  const quotes = [
    '"The law is reason, free from passion." — Aristotle',
    '"Integrity is the essence of everything successful."',
    '"Justice delayed is justice denied." — William E. Gladstone',
    '"Injustice anywhere is a threat to justice everywhere." — MLK Jr.',
    '"The life of the law has not been logic: it has been experience." — Oliver Wendell Holmes Jr.'
  ];
  
  const quoteDisplay = document.getElementById('quote-display');
  if(quoteDisplay) {
    quoteDisplay.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  }

  // --- PRELOADER REMOVAL ---
  const preloader = document.getElementById('preloader');
  const body = document.body;

  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    body.classList.remove('loading-state');
  }, 3000); 

  // --- SCROLL ANIMATIONS ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- PARALLAX & HEADER SCROLL ---
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;

    const header = document.querySelector('.site-header');
    if (scrolled > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPct = (winScroll / height) * 100;
    document.querySelector('.scroll-bar').style.width = scrolledPct + "%";

    const scrollTopBtn = document.getElementById('scrollToTop');
    if (scrolled > 600) scrollTopBtn.classList.add('visible');
    else scrollTopBtn.classList.remove('visible');
  });

  document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- MOBILE MENU ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});