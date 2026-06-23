// === Mobile menu toggle ===
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// === Language toggle (PL <-> EN) ===
const langBtn = document.getElementById('langToggle');
const savedLang = localStorage.getItem('lang');
if (savedLang === 'en') document.body.classList.add('en');
langBtn?.addEventListener('click', () => {
  document.body.classList.toggle('en');
  localStorage.setItem('lang', document.body.classList.contains('en') ? 'en' : 'pl');
});

// === Fade-in animation on scroll ===
const revealEls = document.querySelectorAll('.section, .hero-inner, .card, .project');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
