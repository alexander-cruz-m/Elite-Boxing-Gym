const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

ScrollReveal().reveal(
'.hero-content, .card, .gallery-container img, .pricing-card, .testimonial-card, .champion-card, .stat-box',
{
    distance:'50px',
    duration:1200,
    origin:'bottom',
    interval:150
});