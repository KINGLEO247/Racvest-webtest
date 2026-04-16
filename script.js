const THEME_STORAGE_KEY = 'racvest-theme';
const body = document.body;
const nav = document.getElementById('main-nav');
const mobileNav = document.getElementById('mobile-nav');
const navBurger = document.querySelector('.nav-burger');

function updateThemeControls(theme) {
  document.querySelectorAll('.theme-toggle').forEach(button => {
    const icon = button.querySelector('.theme-toggle-icon');
    const label = button.querySelector('.theme-toggle-text');
    const isDark = theme === 'dark';

    if (icon) icon.textContent = isDark ? '\u2600\uFE0F' : '\u263E';
    if (label) label.textContent = '';

    button.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  });
}

function applyTheme(theme) {
  body.dataset.theme = theme;
  updateThemeControls(theme);
  updateNavBackground();
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  const nextTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
}

function updateNavBackground() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 50);
}

function goPage(name) {
  closeMobileNav();

  const routeMap = {
    home: './index.html',
    download: './download.html',
    contact: './contact.html',
    terms: './terms.html',
    privacy: './privacy.html'
  };

  const target = document.getElementById(`page-${name}`);
  if (target) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    return;
  }

  const nextUrl = routeMap[name];
  if (nextUrl) window.location.href = nextUrl;
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  window.location.href = `./index.html#${id}`;
}

function openMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.add('open');
  body.style.overflow = 'hidden';
  if (navBurger) navBurger.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  body.style.overflow = '';
  if (navBurger) navBurger.setAttribute('aria-expanded', 'false');
}

function toggleMobileNav() {
  if (!mobileNav) return;

  if (mobileNav.classList.contains('open')) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMobileNav();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileNav();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function initReveal() {
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${(index % 4) * 0.1}s`;
    observer.observe(el);
  });
}

function initFaq() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const openButton = openItem.querySelector('.faq-question');
        if (openButton) openButton.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initTestimonialPauseOnTouch() {
  const track = document.querySelector('.testi-track');
  if (!track) return;

  const pause = () => track.classList.add('paused');
  const resume = () => track.classList.remove('paused');

  track.addEventListener('touchstart', pause, { passive: true });
  track.addEventListener('touchend', resume, { passive: true });
  track.addEventListener('touchcancel', resume, { passive: true });
  track.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') pause();
  });
  track.addEventListener('pointerup', resume);
  track.addEventListener('pointercancel', resume);
  track.addEventListener('pointerleave', resume);
}

function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const text = el.textContent;
    const num = parseInt(text.replace(/\D/g, ''), 10);
    const suffix = text.replace(/[\d]/g, '');
    const suffixText = suffix.replace(/[+%]/g, '');
    const trailingSymbol = suffix.includes('+') ? '+' : suffix.includes('%') ? '%' : '';

    let start = 0;
    const step = num / 60;

    const timer = setInterval(() => {
      start += step;

      if (start >= num) {
        start = num;
        clearInterval(timer);
      }

      el.innerHTML = `${Math.floor(start)}${suffixText}<span class="plus">${trailingSymbol}</span>`;
    }, 25);
  });
}

const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    statsObserver.disconnect();
  }
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObserver.observe(statsEl);

function submitForm(event) {
  event.preventDefault();

  const btn = event.target.querySelector('.form-submit');
  if (btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;
  }

  setTimeout(() => {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    if (form) form.style.display = 'none';
    if (success) success.style.display = 'block';
  }, 1400);
}

function scrollToHashTarget() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

window.addEventListener('scroll', updateNavBackground);

document.querySelectorAll('.page').forEach(page => {
  const observerInstance = new MutationObserver(() => {
    if (page.classList.contains('active')) {
      setTimeout(initReveal, 50);
    }
  });

  observerInstance.observe(page, { attributes: true, attributeFilter: ['class'] });
});

applyTheme(getPreferredTheme());
initReveal();
initFaq();
initTestimonialPauseOnTouch();
updateNavBackground();
scrollToHashTarget();
