// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Terms Page Animation
const termsCards = document.querySelectorAll('.terms-card');
if (termsCards.length > 0) {
    termsCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}
