gsap.registerPlugin(ScrollTrigger);

// Reveal triggers globally
gsap.utils.toArray('.reveal-trigger').forEach(el => {
    gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
        }
    });
});

// About Statement Text Animation
const aboutStatement = document.querySelector('.about-statement');
if (aboutStatement) {
    const text = aboutStatement.innerHTML;
    aboutStatement.innerHTML = '';
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    tempDiv.childNodes.forEach(node => {
        if (node.nodeType === 3) {
            const words = node.nodeValue.split(' ');
            words.forEach(w => {
                if (w.trim()) {
                    const span = document.createElement('span');
                    span.className = 'anim-word';
                    span.style.display = 'inline-block';
                    span.textContent = w;
                    aboutStatement.appendChild(span);
                    aboutStatement.appendChild(document.createTextNode(' '));
                }
            });
        } else if (node.nodeType === 1) {
            const wrapper = document.createElement('span');
            wrapper.style.display = 'inline-block';
            wrapper.className = node.className;
            const words = node.textContent.split(' ');
            words.forEach(w => {
                if (w.trim()) {
                    const span = document.createElement('span');
                    span.className = 'anim-word highlight-word';
                    span.style.display = 'inline-block';
                    span.textContent = w;
                    wrapper.appendChild(span);
                    wrapper.appendChild(document.createTextNode(' '));
                }
            });
            aboutStatement.appendChild(wrapper);
            aboutStatement.appendChild(document.createTextNode(' '));
        }
    });

    gsap.from('.anim-word', {
        y: 40,
        opacity: 0,
        rotationX: -40,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.about-dark',
            start: "top 65%",
            end: "top 15%",
            scrub: 1
        }
    });

    gsap.to('.highlight-word', {
        scrollTrigger: {
            trigger: '.about-dark',
            start: "top 60%",
            end: "top 20%",
            scrub: true
        },
        color: '#1D1D1F',
        stagger: 0.1
    });
}

// Stack Grid Animation
const stackGrid = document.querySelector('.stack-grid');
if (stackGrid) {
    gsap.from('.stack-card', {
        scrollTrigger: {
            trigger: '.stack-grid',
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });
}

// Glass Card Animation
const aboutDark = document.querySelector('.about-dark');
if (aboutDark) {
    gsap.from('.about-glass-card', {
        scrollTrigger: {
            trigger: '.about-dark',
            start: "top 70%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
}

// Magnetic Hover Pill
const navLinksContainer = document.getElementById('nav-links');
const hoverPill = document.getElementById('nav-hover-pill');
if (navLinksContainer && hoverPill) {
    const navItems = navLinksContainer.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const rect = item.getBoundingClientRect();
            const containerRect = navLinksContainer.getBoundingClientRect();
            const offsetLeft = rect.left - containerRect.left;
            
            hoverPill.style.opacity = '1';
            hoverPill.style.width = `${rect.width}px`;
            hoverPill.style.transform = `translate(${offsetLeft}px, -50%) scale(1)`;
        });
    });

    navLinksContainer.addEventListener('mouseleave', () => {
        hoverPill.style.opacity = '0';
        const currentTransform = hoverPill.style.transform;
        if(currentTransform) {
            const translateMatch = currentTransform.match(/translate\(([^,]+),/);
            if(translateMatch) {
                hoverPill.style.transform = `translate(${translateMatch[1]}, -50%) scale(0.9)`;
            }
        }
    });
}

// Hero Parallax
const heroContent = document.getElementById('hero-content');
if (heroContent) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            const scale = Math.max(1 - (scrollY / window.innerHeight) * 0.15, 0.85);
            const opacity = Math.max(1 - (scrollY / (window.innerHeight * 0.6)), 0);
            heroContent.style.transform = `scale(${scale})`;
            heroContent.style.opacity = opacity;
        }
    });
}

// Projects Logic
const filterBtns = document.querySelectorAll('.filter-pill');
const projects = document.querySelectorAll('.project-showcase');
if (filterBtns.length > 0 && projects.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            projects.forEach(project => {
                project.style.opacity = '0';
                project.style.transform = 'translateY(40px)';
                setTimeout(() => {
                    if (filterValue === 'all' || project.getAttribute('data-category').includes(filterValue)) {
                        project.style.display = 'flex';
                        setTimeout(() => {
                            project.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        project.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    projects.forEach(project => {
        gsap.to(project, {
            scrollTrigger: {
                trigger: project,
                start: "top 85%",
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out"
        });

        const imageWrap = project.querySelector('.showcase-image');
        if (imageWrap) {
            project.addEventListener('mousemove', (e) => {
                const rect = imageWrap.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                imageWrap.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
                imageWrap.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                imageWrap.style.boxShadow = `0 40px 80px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.1)`;
            });

            project.addEventListener('mouseleave', () => {
                imageWrap.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                imageWrap.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`;
                imageWrap.style.boxShadow = `0 30px 60px rgba(0,0,0,0.08)`;
            });
        }
    });
}

// Cursor Blob
const cursorBlob = document.getElementById('cursor-blob');
const contentWrapper = document.querySelector('.content-wrapper');
if (cursorBlob && contentWrapper) {
    contentWrapper.addEventListener('mousemove', (e) => {
        const rect = contentWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cursorBlob.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 4000, fill: "forwards" });
    });
}

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
if (hamburger && mobileMenu) {
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    }
    hamburger.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });
}
