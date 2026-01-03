const themeBtn = document.getElementById('theme-btn');
const icon = themeBtn.querySelector('i');
const header = document.getElementById('main-header');
const heroTitle = document.querySelector('.hero h1');

themeBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const now = window.pageYOffset;
    header.classList.toggle('nav-scrolled', now > 60);

    if (window.innerWidth > 768 && Math.abs(now - lastScroll) > 2) {
        heroTitle.style.transform = `translateY(${now * 0.2}px)`;
        heroTitle.style.opacity = 1 - now / 700;
        lastScroll = now;
    }
}, { passive: true });

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));