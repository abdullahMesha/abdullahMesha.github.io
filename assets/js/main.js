/* =========================================================
   Abdullah Meshal — Portfolio JS
   ========================================================= */

/* ---------- Project Data ---------- */
const projects = [
    {
        id: 'usmartops',
        title: 'USmart / USmartOPS',
        company: 'Umniah',
        shortDesc: 'Real-time telecom monitoring platform for NOC, RAN, and Field teams — alarms, KPIs, dashboards, and automated reporting.',
        longDesc: `<p>Enterprise-grade internal monitoring platform serving Umniah's Network Operations Center, RAN, and Field teams. The system aggregates real-time alarm data from multi-vendor equipment (Huawei, Ericsson, ZTE) and presents it through interactive dashboards, KPI visualizations, and automated reports.</p>
            <p><strong>Key Contributions:</strong></p>
            <ul>
                <li>Migrated legacy WinForms modules to modern ASP.NET Core MVC dashboards</li>
                <li>Optimized MySQL queries for high-volume alarm tables, improving response times significantly</li>
                <li>Integrated multi-vendor alarm feeds (Huawei, Ericsson, ZTE) into a unified monitoring view</li>
                <li>Built interactive network map visualization for site monitoring</li>
            </ul>`,
        tech: ['ASP.NET Core', 'C#', 'MySQL', 'Angular', 'JavaScript', 'Docker'],
        images: ['assets/img/usmartops-alarms.png', 'assets/img/usmartops-map.png'],
        gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' // book
    },
    {
        id: 'ran-helpdesk',
        title: 'RAN Help Desk',
        company: 'Umniah',
        shortDesc: 'Ticketing and support system for RAN teams with categorization, escalation workflows, and SLA tracking.',
        longDesc: `<p>Comprehensive ticketing and support platform designed for Radio Access Network teams. The system streamlines issue reporting, categorization, and resolution workflows with built-in SLA tracking and escalation rules.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Multi-tier ticketing with automatic categorization and priority assignment</li>
                <li>SLA tracking with automated escalation notifications</li>
                <li>Integration with site database and alarm data for context-rich tickets</li>
                <li>Site management tools including RF data entry, equipment tracking, and comparison utilities</li>
            </ul>`,
        tech: ['.NET', 'C#', 'MySQL', 'Web UI'],
        images: ['assets/img/ran-helpdesk.png', 'assets/img/ran-helpdesk-compare.png'],
        gradient: 'linear-gradient(135deg, #dc2626, #9333ea)',
        icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
    },
    {
        id: 'change-management',
        title: 'Change Management System',
        company: 'Umniah',
        shortDesc: 'Multi-level approval workflows for network changes with lifecycle tracking, audit logs, and severity assessment.',
        longDesc: `<p>Enterprise change management platform governing the full lifecycle of network changes — from initial request through multi-level approval, execution, and post-change verification.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Multi-level approval workflows with configurable approval chains</li>
                <li>Full change lifecycle tracking with real-time status updates</li>
                <li>Comprehensive audit logs for compliance and accountability</li>
                <li>Dynamic service and network element selection with severity assessment</li>
                <li>Execution planning with scheduling and rollback procedures</li>
            </ul>`,
        tech: ['ASP.NET Core', 'C#', 'MySQL', 'Workflow Logic'],
        images: ['assets/img/change-management.png'],
        gradient: 'linear-gradient(135deg, #059669, #2563eb)',
        icon: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
    },
    {
        id: 'voice-api',
        title: 'Voice Notification API',
        company: 'Umniah',
        shortDesc: 'REST API for automated voice calls — accepts number and text, converts to speech, and triggers a call.',
        longDesc: `<p>Lightweight REST API service that enables automated voice notifications. The system accepts a phone number and text message, converts the text to speech using TTS integration, and triggers an automated voice call to deliver the message.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>RESTful API endpoint for notification requests (Number + Text)</li>
                <li>Text-to-Speech (TTS) integration for dynamic voice generation</li>
                <li>Automated voice call triggering and delivery confirmation</li>
                <li>Queue-based processing for high-volume notification batches</li>
            </ul>`,
        tech: ['ASP.NET Core', 'C#', 'REST API', 'TTS Integration'],
        images: [],
        gradient: 'linear-gradient(135deg, #d97706, #dc2626)',
        icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
    },
    {
        id: 'moe-workflows',
        title: 'MOE Workflows — CMIS',
        company: 'Solutions Now',
        shortDesc: 'Workflow-driven government systems for the Ministry of Education using Elsa Workflows engine.',
        longDesc: `<p>Government workflow automation for the Ministry of Education in Jordan. Built on the Elsa Workflows engine, the CMIS (Content Management Information System) digitizes and automates administrative processes, document routing, and approval chains.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Elsa Workflows engine integration for complex government processes</li>
                <li>Document management and routing with approval chains</li>
                <li>Role-based access control and departmental workflows</li>
                <li>Audit trails and compliance reporting</li>
            </ul>`,
        tech: ['C# .NET', 'MS SQL', 'Elsa Workflows'],
        images: [],
        gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
        icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8'
    },
    {
        id: 'github-ml',
        title: 'Machine Learning With Python',
        company: 'Personal Project',
        shortDesc: 'Collection of ML experiments and algorithm implementations in Jupyter Notebook.',
        longDesc: `<p>A repository of machine learning projects and experiments covering various algorithms and techniques, implemented in Python using Jupyter Notebooks. Includes supervised and unsupervised learning, data preprocessing, and model evaluation.</p>`,
        tech: ['Python', 'Jupyter Notebook', 'scikit-learn'],
        images: [],
        gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
        icon: 'M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.07A7.001 7.001 0 0 1 5.07 19H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z M9 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M15 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
        github: 'https://github.com/abdullahMesha'
    },
    {
        id: 'github-dashboard',
        title: 'Dashboard',
        company: 'Personal Project',
        shortDesc: 'Interactive dashboard for data visualization built with vanilla JavaScript.',
        longDesc: `<p>A responsive web dashboard for data visualization, built with vanilla JavaScript. Features interactive charts, real-time data updates, and a clean user interface designed for clarity and usability.</p>`,
        tech: ['JavaScript', 'HTML', 'CSS'],
        images: [],
        gradient: 'linear-gradient(135deg, #059669, #06b6d4)',
        icon: 'M18 20V10 M12 20V4 M6 20v-6',
        github: 'https://github.com/abdullahMesha'
    },
    {
        id: 'github-pharmahub',
        title: 'PharmaHub',
        company: 'Personal Project',
        shortDesc: 'Barcode-based medical application built with Flutter/Dart for medication lookup.',
        longDesc: `<p>Mobile application for pharmaceutical management with barcode scanning capabilities. Built with Flutter/Dart for cross-platform compatibility, enabling quick medication lookup, inventory management, and barcode-based data entry.</p>`,
        tech: ['Flutter', 'Dart', 'Barcode API'],
        images: [],
        gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
        icon: 'M9 12h6 M12 9v6 M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z',
        github: 'https://github.com/abdullahMesha'
    }
];

/* ---------- Helpers ---------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ---------- Theme ---------- */
function initTheme() {
    const toggle = $('#theme-toggle');
    toggle.addEventListener('click', () => {
        const html = document.documentElement;
        html.classList.add('transitioning');
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        setTimeout(() => html.classList.remove('transitioning'), 400);
    });
}

/* ---------- Navigation ---------- */
function initNavigation() {
    const navbar = $('#navbar');
    const toggle = $('#nav-toggle');
    const menu = $('#nav-menu');

    // Hamburger toggle
    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    $$('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Navbar shadow on scroll
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ---------- Scroll Spy ---------- */
function initScrollSpy() {
    const sections = $$('.section');
    const links = $$('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
}

/* ---------- Reveal Animations ---------- */
function initRevealAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(el => observer.observe(el));
}

/* ---------- Render Projects ---------- */
function renderProjects() {
    const grid = $('#projects-grid');
    if (!grid) return;

    let html = '';
    projects.forEach((p, i) => {
        const hasImage = p.images && p.images.length > 0;
        const delay = Math.min(i * 0.08, 0.4);

        const imageContent = hasImage
            ? `<img src="${p.images[0]}" alt="${p.title} screenshot" loading="lazy">`
            : `<div class="project-placeholder" style="background:${p.gradient}">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${p.icon}"/></svg>
               </div>`;

        const githubBtn = p.github
            ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-ghost" onclick="event.stopPropagation()">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                   Repo
               </a>`
            : '';

        html += `
        <article class="project-card reveal" data-index="${i}" style="--delay:${delay}s">
            <div class="project-card-image">${imageContent}</div>
            <div class="project-card-body">
                <span class="project-company">${p.company}</span>
                <h3>${p.title}</h3>
                <p class="project-desc">${p.shortDesc}</p>
                <div class="project-tech">
                    ${p.tech.map(t => `<span class="chip chip-sm">${t}</span>`).join('')}
                </div>
                <div class="project-card-actions">
                    <button class="btn btn-sm btn-outline project-details-btn" data-index="${i}">
                        View Details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                    ${githubBtn}
                </div>
            </div>
        </article>`;
    });

    grid.innerHTML = html;
}

/* ---------- Modal & Carousel ---------- */
let currentSlide = 0;
let currentImages = [];

function openModal(index) {
    const p = projects[index];
    const overlay = $('#project-modal');

    // Populate
    $('#modal-company').textContent = p.company;
    $('#modal-title').textContent = p.title;
    $('#modal-description').innerHTML = p.longDesc;
    $('#modal-tech').innerHTML = p.tech.map(t => `<span class="chip">${t}</span>`).join('');

    // Links
    let linksHtml = '';
    if (p.github) {
        linksHtml = `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View on GitHub
        </a>`;
    }
    $('#modal-links').innerHTML = linksHtml;

    // Carousel
    const imageArea = $('#modal-image-area');
    const carousel = $('#modal-carousel');
    const dots = $('#carousel-dots');
    const prevBtn = $('#carousel-prev');
    const nextBtn = $('#carousel-next');

    currentImages = p.images || [];
    currentSlide = 0;

    if (currentImages.length > 0) {
        imageArea.style.display = 'block';
        carousel.innerHTML = currentImages.map((img, idx) =>
            `<img src="${img}" alt="${p.title} screenshot ${idx + 1}">`
        ).join('');

        const hasMultiple = currentImages.length > 1;
        dots.innerHTML = hasMultiple
            ? currentImages.map((_, idx) =>
                `<button class="carousel-dot${idx === 0 ? ' active' : ''}" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>`
            ).join('')
            : '';
        prevBtn.style.display = hasMultiple ? 'flex' : 'none';
        nextBtn.style.display = hasMultiple ? 'flex' : 'none';
        dots.style.display = hasMultiple ? 'flex' : 'none';
        carousel.style.transform = 'translateX(0)';
    } else {
        imageArea.style.display = 'block';
        carousel.innerHTML = `<div class="modal-placeholder" style="background:${p.gradient}">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${p.icon}"/></svg>
        </div>`;
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        dots.style.display = 'none';
    }

    // Show
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('#modal-close').focus();
}

function closeModal() {
    const overlay = $('#project-modal');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function goToSlide(index) {
    if (currentImages.length === 0) return;
    if (index < 0) index = currentImages.length - 1;
    if (index >= currentImages.length) index = 0;
    currentSlide = index;
    $('#modal-carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
    $$('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function initModal() {
    // Close
    $('#modal-close').addEventListener('click', closeModal);
    $('#project-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        const modal = $('#project-modal');
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });

    // Carousel buttons
    $('#carousel-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
    $('#carousel-next').addEventListener('click', () => goToSlide(currentSlide + 1));
    $('#carousel-dots').addEventListener('click', (e) => {
        const dot = e.target.closest('.carousel-dot');
        if (dot) goToSlide(parseInt(dot.dataset.slide));
    });

    // Project cards — event delegation
    $('#projects-grid').addEventListener('click', (e) => {
        const btn = e.target.closest('.project-details-btn');
        if (btn) {
            openModal(parseInt(btn.dataset.index));
            return;
        }
        const card = e.target.closest('.project-card');
        if (card && !e.target.closest('a')) {
            openModal(parseInt(card.dataset.index));
        }
    });

    // Swipe support for carousel
    let touchStartX = 0;
    const carousel = $('#modal-carousel');
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
        }
    }, { passive: true });
}

/* ---------- Initialize ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initScrollSpy();
    renderProjects();
    initRevealAnimations();
    initModal();
});
