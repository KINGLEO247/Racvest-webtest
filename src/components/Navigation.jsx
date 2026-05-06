import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/', page: true },
  { label: 'About', to: '/about', page: true },
  { label: 'How It Works', to: '/#how' },
  { label: 'Earn', to: '/#earn' },
  { label: 'Download', to: '/download', page: true },
  { label: 'Contact', to: '/contact', page: true },
];

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" fill="none" r="4.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.72 5.28l-1.56 1.56M6.84 17.16l-1.56 1.56M18.72 18.72l-1.56-1.56M6.84 6.84 5.28 5.28"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M19.2 14.6A7.9 7.9 0 0 1 9.4 4.8a8.6 8.6 0 1 0 9.8 9.8Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Navigation({
  isMobileNavOpen,
  isScrolled,
  onCloseMobileNav,
  onToggleMobileNav,
  onToggleTheme,
  theme,
}) {
  const { pathname } = useLocation();

  return (
    <>
      <nav className={isScrolled ? 'scrolled' : ''} id="main-nav">
        <Link className="nav-logo" onClick={onCloseMobileNav} to="/">
          <span className="brand-initial">R</span>
          <span className="brand-rest">acvest</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => {
            const isActive = item.page && pathname === item.to;

            return (
              <li key={item.label}>
                <Link className={isActive ? 'active' : ''} to={item.to}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <button
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="theme-toggle"
            onClick={onToggleTheme}
            type="button"
          >
            <span aria-hidden="true" className="theme-toggle-icon">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </span>
            <span className="theme-toggle-text">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
          <Link className="btn-primary nav-cta" to="/download">
            <span>Get App</span>
            <span aria-hidden="true" className="nav-cta-arrow">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isMobileNavOpen}
          aria-label="Toggle menu"
          className="nav-burger"
          onClick={onToggleMobileNav}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile ${isMobileNavOpen ? 'open' : ''}`} id="mobile-nav">
        <button className="nav-mobile-close" onClick={onCloseMobileNav} type="button">
          X
        </button>
        <button
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="theme-toggle mobile-theme-toggle"
          onClick={onToggleTheme}
          type="button"
        >
          <span aria-hidden="true" className="theme-toggle-icon">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </span>
          <span className="theme-toggle-text">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
        {navItems.map((item) => (
          <Link key={item.label} onClick={onCloseMobileNav} to={item.to}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
