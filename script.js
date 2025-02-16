// script.js
document.addEventListener('mousemove', (e) => {
  const heroSection = document.querySelector('.hero-section');
  const x = (window.innerWidth - e.pageX) / 20;
  const y = (window.innerHeight - e.pageY) / 20;
  heroSection.style.backgroundPosition = `${x}px ${y}px`;
});
