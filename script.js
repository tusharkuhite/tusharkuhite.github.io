// --- Scroll Reveal Animations ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// --- Navbar Effects ---
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Add background glass effect only after scrolling
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 12, 0.8)';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'var(--bg-card)';
        nav.style.boxShadow = 'none';
    }

    // Active Link Highlighting
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- Simple Mouse Glow Effect (Optional Premium Touch) ---
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    if (glow) {
        const x = e.clientX;
        const y = e.clientY;
        // Subtle drift toward mouse position
        glow.style.left = `${x - 300}px`;
        glow.style.top = `${y - 300}px`;
    }
});

// --- Console Easter Egg ---
console.log('%c Crafted with ❤️ for Tushar Kuhite ', 'background: #6366f1; color: #fff; padding: 10px; border-radius: 5px; font-weight: bold;');
console.log('%c "Quality is not an act, it is a habit." - Aristotle ', 'color: #94a3b8; font-style: italic;');
