// Toggle Navbar on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 60, // Offset for fixed navbar
        behavior: 'smooth'
    });

    // Close the navbar on mobile after clicking
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});
