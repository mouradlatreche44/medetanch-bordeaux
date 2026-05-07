// ======================= INIT =======================
function __mpBoot() {
    try { initNavbar(); } catch(e) { console.warn('initNavbar', e); }
    try { initMobileMenu(); } catch(e) { console.warn('initMobileMenu', e); }
    try { initParticles(); } catch(e) { console.warn('initParticles', e); }
    try { initMagneticCards(); } catch(e) { console.warn('initMagneticCards', e); }
    try { initReviewCarousel(); } catch(e) { console.warn('initReviewCarousel', e); }
    try { initDiagnostic(); } catch(e) { console.warn('initDiagnostic', e); }
    try { initStickyCTA(); } catch(e) { console.warn('initStickyCTA', e); }
    try { initSmoothScroll(); } catch(e) { console.warn('initSmoothScroll', e); }
    try { initBeforeAfter(); } catch(e) { console.warn('initBeforeAfter', e); }
    try { initParallaxFloats(); } catch(e) { console.warn('initParallaxFloats', e); }
    try { initFeatureCarousel(); } catch(e) { console.warn('initFeatureCarousel', e); }
    try { initMagneticButtons(); } catch(e) { console.warn('initMagneticButtons', e); }
    try { initCounters(); } catch(e) { console.warn('initCounters', e); }
    try { initStaggerReveals(); } catch(e) { console.warn('initStaggerReveals', e); }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __mpBoot);
} else {
    __mpBoot();
}

// ======================= NAVBAR =======================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ======================= MOBILE MENU =======================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const links = menu.querySelectorAll('a');
    let isOpen = false;

    function openMobileMenu() {
        isOpen = true;
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        navbar.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
        const lines = btn.querySelectorAll('.burger-line');
        lines[0].style.transform = 'translateY(8px) rotate(45deg)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'translateY(-4px) rotate(-45deg)';
        lines[2].style.width = '24px';
    }

    function closeMobileMenu() {
        isOpen = false;
        menu.style.visibility = 'hidden';
        menu.style.opacity = '0';
        navbar.classList.remove('menu-open');
        document.body.style.overflow = '';
        const lines = btn.querySelectorAll('.burger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '1';
        lines[2].style.transform = '';
        lines[2].style.width = '16px';
    }

    btn.addEventListener('click', () => {
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    links.forEach(link => link.addEventListener('click', closeMobileMenu));
}

// ======================= PARTICLES =======================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = 8 + Math.random() * 12 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        container.appendChild(particle);
    }
}

// ======================= 21st.dev — MAGNETIC CARDS =======================
function initMagneticCards() {
    const cards = document.querySelectorAll('.magnetic-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = -(y / rect.height) * 6;
            const rotateY = (x / rect.width) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ======================= 21st.dev — PARALLAX FLOATS =======================
function initParallaxFloats() {
    const floats = document.querySelectorAll('[data-parallax]');
    if (!floats.length) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        floats.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.1;
            const rect = el.getBoundingClientRect();
            const offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    }, { passive: true });
}

// ======================= BEFORE / AFTER SLIDER =======================
function initBeforeAfter() {
    const sliders = document.querySelectorAll('.ba-slider');

    sliders.forEach(slider => {
        const beforeEl = slider.querySelector('.ba-before');
        const beforeImg = beforeEl.querySelector('img');
        const handle = slider.querySelector('.ba-handle');
        let isDragging = false;

        // Make the before image match the full slider width
        function syncImageWidth() {
            beforeImg.style.width = slider.offsetWidth + 'px';
        }
        syncImageWidth();
        window.addEventListener('resize', syncImageWidth);

        function setPosition(x) {
            const rect = slider.getBoundingClientRect();
            let pct = ((x - rect.left) / rect.width) * 100;
            pct = Math.max(5, Math.min(95, pct));
            beforeEl.style.width = pct + '%';
            handle.style.left = pct + '%';
        }

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            setPosition(e.clientX);
        });
        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                setPosition(e.clientX);
            }
        });
        window.addEventListener('mouseup', () => isDragging = false);

        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            setPosition(e.touches[0].clientX);
        }, { passive: true });
        window.addEventListener('touchmove', (e) => {
            if (isDragging) setPosition(e.touches[0].clientX);
        }, { passive: false });
        window.addEventListener('touchend', () => isDragging = false);
    });
}

// ======================= REVIEW CAROUSEL =======================
function initReviewCarousel() {
    const track = document.getElementById('reviews-track');
    if (!track) return;
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const dotsContainer = document.getElementById('review-dots');
    const cards = track.querySelectorAll('.review-card');

    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth + 24;
    let maxIndex = 0;
    let autoPlayInterval;

    function calculateMaxIndex() {
        const visibleWidth = track.parentElement.offsetWidth;
        cardWidth = cards[0].offsetWidth + 24;
        maxIndex = Math.max(0, cards.length - Math.floor(visibleWidth / cardWidth));
    }

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateDots();
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('div');
            dot.classList.add('review-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => { currentIndex = i; updateCarousel(); resetAutoPlay(); });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        dotsContainer.querySelectorAll('.review-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function next() {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function prev() {
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }

    function startAutoPlay() { autoPlayInterval = setInterval(next, 5000); }
    function resetAutoPlay() { clearInterval(autoPlayInterval); startAutoPlay(); }

    nextBtn.addEventListener('click', () => { next(); resetAutoPlay(); });
    prevBtn.addEventListener('click', () => { prev(); resetAutoPlay(); });

    // Touch support
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
            resetAutoPlay();
        }
    }, { passive: true });

    calculateMaxIndex();
    createDots();
    startAutoPlay();

    window.addEventListener('resize', () => {
        calculateMaxIndex();
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        createDots();
        updateCarousel();
    });
}

// ======================= DIAGNOSTIC TUNNEL =======================
function initDiagnostic() {
    const steps = {
        1: document.getElementById('diag-step-1'),
        2: document.getElementById('diag-step-2'),
        3: document.getElementById('diag-step-3'),
    };
    const success = document.getElementById('diag-success');
    const progress = document.getElementById('diag-progress');
    const stepLabel = document.getElementById('diag-step-label');
    const submitBtn = document.getElementById('diag-submit');
    if (!submitBtn) return;

    let currentStep = 1;
    const answers = {};

    function showStep(step) {
        Object.values(steps).forEach(s => s.classList.add('hidden'));
        success.classList.add('hidden');

        if (step <= 3) {
            steps[step].classList.remove('hidden');
            steps[step].style.animation = 'none';
            steps[step].offsetHeight;
            steps[step].style.animation = '';
        }

        progress.style.width = `${(step / 3) * 100}%`;
        stepLabel.textContent = step <= 3 ? `${step} / 3` : '';
    }

    document.querySelectorAll('#diag-step-1 .diag-option, #diag-step-2 .diag-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.diag-step');
            parent.querySelectorAll('.diag-option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            const step = parent.id === 'diag-step-1' ? 1 : 2;
            answers[`step${step}`] = btn.dataset.value;

            setTimeout(() => {
                currentStep = step + 1;
                showStep(currentStep);
            }, 400);
        });
    });

    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('diag-name').value.trim();
        const phone = document.getElementById('diag-phone').value.trim();

        if (!name || !phone) {
            submitBtn.style.animation = 'shake 0.5s ease';
            setTimeout(() => submitBtn.style.animation = '', 500);
            if (!name) document.getElementById('diag-name').style.borderColor = '#ef4444';
            if (!phone) document.getElementById('diag-phone').style.borderColor = '#ef4444';
            return;
        }

        answers.name = name;
        answers.phone = phone;
        answers.description = document.getElementById('diag-desc').value.trim();

        Object.values(steps).forEach(s => s.classList.add('hidden'));
        success.classList.remove('hidden');
        success.style.animation = 'none';
        success.offsetHeight;
        success.style.animation = '';
        progress.style.width = '100%';
        stepLabel.textContent = '';

        console.log('Diagnostic submitted:', answers);
    });

    ['diag-name', 'diag-phone'].forEach(id => {
        document.getElementById(id).addEventListener('focus', function () {
            this.style.borderColor = '';
        });
    });
}

// ======================= STICKY CTA =======================
function initStickyCTA() {
    const cta = document.getElementById('sticky-cta');
    const hero = document.getElementById('hero');
    if (!cta || !hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            cta.style.transform = entry.isIntersecting ? 'translateY(100%)' : 'translateY(0)';
        });
    }, { threshold: 0.3 });

    observer.observe(hero);
}

// ======================= SMOOTH SCROLL =======================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ======================= FEATURE CAROUSEL =======================
function initFeatureCarousel() {
    const labels = document.querySelectorAll('.carousel-label');
    const slides = document.querySelectorAll('.carousel-slide');
    const pips = document.querySelectorAll('.carousel-pip');
    if (!labels.length || !slides.length) return;

    let current = 0;
    let autoInterval;

    function goTo(index) {
        current = index;
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = '1';
                slide.style.transform = 'scale(1)';
                slide.style.pointerEvents = 'auto';
            } else {
                slide.style.opacity = '0';
                slide.style.transform = 'scale(0.95)';
                slide.style.pointerEvents = 'none';
            }
        });
        labels.forEach((label, i) => {
            label.classList.toggle('active', i === index);
        });
        pips.forEach((pip, i) => {
            pip.style.background = i === index ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)';
        });
    }

    function next() {
        goTo((current + 1) % slides.length);
    }

    function startAuto() { autoInterval = setInterval(next, 4000); }
    function resetAuto() { clearInterval(autoInterval); startAuto(); }

    labels.forEach(label => {
        label.addEventListener('click', () => {
            goTo(parseInt(label.dataset.index));
            resetAuto();
        });
    });

    startAuto();
}

// ======================= 21st.dev — MAGNETIC BUTTONS =======================
function initMagneticButtons() {
    document.querySelectorAll('.btn-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ======================= 21st.dev — SCROLL-LINKED COUNTERS =======================
function initCounters() {
    const counters = document.querySelectorAll('[data-counter], .counter[data-target]');
    if (!counters.length) return;

    const animate = (el) => {
        const target = parseFloat(el.dataset.counter || el.dataset.target);
        const duration = parseInt(el.dataset.counterDuration || '1800', 10);
        const prefix = el.dataset.counterPrefix || '';
        const suffix = el.dataset.counterSuffix || el.dataset.suffix || '';
        const format = el.dataset.format === 'true';
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const value = target * eased;
            let display;
            if (Number.isInteger(target)) {
                const rounded = Math.round(value);
                display = format ? rounded.toLocaleString('fr-FR') : String(rounded);
            } else {
                display = value.toFixed(1);
            }
            el.textContent = prefix + display + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.classList.add('counter-done');
                setTimeout(() => el.classList.remove('counter-done'), 700);
            }
        };
        requestAnimationFrame(step);
    };

    const started = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started.has(entry.target)) {
                started.add(entry.target);
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    counters.forEach(el => observer.observe(el));

    // Fallback: si l'élément est déjà visible au chargement (scroll restauré)
    // l'IntersectionObserver peut ne pas fire immédiatement sur certains navigateurs.
    requestAnimationFrame(() => {
        counters.forEach(el => {
            if (started.has(el)) return;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight || document.documentElement.clientHeight;
            if (r.top < vh && r.bottom > 0) {
                started.add(el);
                animate(el);
                observer.unobserve(el);
            }
        });
    });
}

// ======================= 21st.dev — STAGGER REVEALS =======================
function initStaggerReveals() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger: 80ms between sibling reveals in the same grid
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.children).filter(c => c.matches('.reveal, .reveal-left, .reveal-right, .reveal-stagger')) : [entry.target];
                const index = siblings.indexOf(entry.target);
                setTimeout(() => entry.target.classList.add('visible'), Math.max(0, index) * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
}
