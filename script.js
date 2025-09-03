// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mini form submit: launches whatsapp chat (example behaviour)
document.getElementById('miniForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fm = new FormData(e.target);
    const name = fm.get('name');
    const phone = fm.get('phone');
    const goal = fm.get('goal');
    const msg = encodeURIComponent(`Hi, I'm ${name}. My phone: ${phone}. Goal: ${goal}. I'd like a free consultation.`);
    const wa = 'https://wa.me/919876543210?text=' + msg; // REPLACE PHONE
    window.open(wa, '_blank');
});

// Contact form: basic mailto fallback
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fm = new FormData(e.target);
    const name = fm.get('name');
    const email = fm.get('email');
    const phone = fm.get('phone');
    const message = fm.get('message');
    // Try to open user's email client with prefilled message
    const subject = encodeURIComponent('New client enquiry from website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
});

// Testimonials controls
const controls = document.querySelectorAll('.testimonial-controls button');
const container = document.getElementById('videoContainer');
controls.forEach(btn => btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-vid');
    container.innerHTML = `<iframe src="${src}" title="Testimonial" allowfullscreen loading="lazy"></iframe>`;
}));

// Replace phone number links in the page in one place
function setPhone(phoneWithCountryNoPlus) {
    const waHref = `https://wa.me/${phoneWithCountryNoPlus}`;
    document.getElementById('waFloat').setAttribute('href', waHref);
    document.getElementById('waLink').setAttribute('href', waHref);
    // also update mini form behavior
    // Note: mini form uses hard-coded number in this template; if you change phone here, consider updating there too.
}

        // Example: if you want to programmatically set phone, call setPhone('919876543210')

