import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

const THEME_STORAGE_KEY = 'racvest-theme';

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export default function SiteLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => getPreferredTheme());
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const syncNavBackground = () => setIsScrolled(window.scrollY > 50);

    syncNavBackground();
    window.addEventListener('scroll', syncNavBackground);

    return () => {
      window.removeEventListener('scroll', syncNavBackground);
    };
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll('.reveal'));
    if (!reveals.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((element, index) => {
      element.classList.remove('visible');
      element.style.transitionDelay = `${(index % 4) * 0.1}s`;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.slice(1);
      const timer = window.setTimeout(() => {
        const navElement = document.getElementById('main-nav');
        const target = document.getElementById(hashId);
        if (target) {
          const navOffset = navElement ? navElement.offsetHeight + 18 : 96;
          const targetY =
            target.getBoundingClientRect().top + window.scrollY - navOffset;

          window.scrollTo({
            top: Math.max(targetY, 0),
            behavior: 'smooth',
          });
        }
      }, 120);

      return () => {
        window.clearTimeout(timer);
      };
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return undefined;
  }, [location.pathname, location.hash]);

  const pageTitle = useMemo(() => {
    const titles = {
      '/': 'Racvest - Send Anything. Earn Anywhere.',
      '/about': 'Racvest - About Us',
      '/download': 'Racvest - Download the App',
      '/contact': 'Racvest - Contact Us',
      '/terms': 'Racvest - Terms of Service',
      '/privacy': 'Racvest - Privacy Policy',
    };

    return titles[location.pathname] || titles['/'];
  }, [location.pathname]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        isScrolled={isScrolled}
        onCloseMobileNav={() => setIsMobileNavOpen(false)}
        onToggleMobileNav={() => setIsMobileNavOpen((open) => !open)}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
        }
        theme={theme}
      />
      <Outlet />
      <Footer />
    </>
  );
}
