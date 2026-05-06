import { Link, useLocation } from 'react-router-dom';

const homeLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/#how' },
  { label: 'Earn', to: '/#earn' },
  { label: 'Download', to: '/download' },
  { label: 'Contact', to: '/contact' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
];

const standardLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Download', to: '/download' },
  { label: 'Contact', to: '/contact' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
];

export default function Footer() {
  const { pathname } = useLocation();
  const links = pathname === '/' ? homeLinks : standardLinks;

  return (
    <footer>
      <Link className="footer-logo" to="/">
        <span className="brand-initial">R</span>
        <span className="brand-rest">acvest</span>
      </Link>
      <div className="footer-links">
        {links.map((link) => (
          <Link key={`${pathname}-${link.label}`} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="footer-copy">Copyright 2025 Racvest. All rights reserved.</div>
    </footer>
  );
}
