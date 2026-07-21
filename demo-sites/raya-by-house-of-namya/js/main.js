(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('done'), reduced ? 0 : 600);
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Custom cursor ---------- */
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (dot && ring && !reduced && matchMedia('(hover:hover)').matches) {
    let rx = 0, ry = 0, mx = 0, my = 0;
    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    const raf = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(raf);
    };
    raf();
    document.querySelectorAll('a, button, .collection-card, .mason-item, .insta-cell').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('grow'));
      el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
    });
  } else if (dot && ring) {
    dot.style.display = 'none'; ring.style.display = 'none';
  }

  /* ---------- Sticky header (shrink + hide on scroll down) ---------- */
  const header = document.getElementById('siteHeader');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    if (y > lastY && y > 200) header.classList.add('hide');
    else header.classList.remove('hide');
    lastY = y;
  }, { passive: true });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('[data-nav]').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const navLinks = document.querySelectorAll('.main-nav a[data-nav]');
  const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`.main-nav a[href="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal-up');
  if (reduced) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const groups = new Map();
    revealEls.forEach(el => {
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = groups.get(el.parentElement) || [el];
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(idx * 90, 540) + 'ms';
        el.classList.add('in');
        revealObserver.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      if (reduced) { el.textContent = target; counterObserver.unobserve(el); return; }
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(el => counterObserver.observe(el));

  /* ---------- Hero parallax motifs (mouse) ---------- */
  const fabric = document.getElementById('heroFabric');
  if (fabric && !reduced && matchMedia('(hover:hover)').matches) {
    const motifs = fabric.querySelectorAll('.motif');
    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
      motifs.forEach((m, i) => {
        const depth = (i + 1) * 10;
        m.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
    });
  }
  /* subtle scroll parallax on motifs too */
  if (fabric && !reduced) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      fabric.style.transform = `translateY(${y * 0.15}px)`;
    }, { passive: true });
  }

  /* ---------- Craft timeline fill ---------- */
  const timeline = document.getElementById('timeline');
  const timelineFill = document.getElementById('timelineFill');
  if (timeline && timelineFill) {
    const tObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timelineFill.style.width = '100%';
          tObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    tObserver.observe(timeline);
  }

  /* ---------- Testimonial slider ---------- */
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('sliderDots');
  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', () => show(i));
      dotsWrap.appendChild(b);
    });
    const dots = dotsWrap.querySelectorAll('button');
    let current = 0, timer;
    function show(i) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function auto() {
      timer = setInterval(() => show(current + 1), 5500);
    }
    if (!reduced) auto();
    dotsWrap.addEventListener('click', () => { clearInterval(timer); if (!reduced) auto(); });
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 700);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  /* ---------- Demo forms (no real submission) ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      btn.classList.add('sent');
      setTimeout(() => { btn.classList.remove('sent'); contactForm.reset(); }, 2600);
    });
  }
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const original = btn.textContent;
      btn.textContent = '✓';
      setTimeout(() => { btn.textContent = original; newsletterForm.reset(); }, 2200);
    });
  }
})();
