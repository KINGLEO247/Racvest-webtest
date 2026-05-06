import { Link } from 'react-router-dom';
import { downloadFeatures } from '../content';

const ADD_APP_STORE_URL_LINK_HERE = 'add app store url link here';
const ADD_GOOGLE_PLAY_URL_LINK_HERE = 'add google play url link here';

function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M15.18 12.12c.03 2.83 2.48 3.77 2.51 3.78-.02.07-.39 1.34-1.28 2.66-.77 1.14-1.57 2.27-2.83 2.29-1.24.02-1.64-.73-3.06-.73-1.43 0-1.87.71-3.04.75-1.21.05-2.14-1.22-2.91-2.35-1.57-2.27-2.77-6.43-1.16-9.22.8-1.38 2.22-2.25 3.77-2.28 1.18-.02 2.29.8 3.06.8.76 0 2.2-.99 3.71-.84.63.03 2.4.25 3.54 1.92-.09.05-2.11 1.23-2.08 3.22Zm-2.2-8.56c.64-.77 1.07-1.84.95-2.91-.92.04-2.04.61-2.7 1.38-.6.69-1.13 1.8-.99 2.86 1.02.08 2.06-.52 2.74-1.33Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3.6 2.8 13.9 13 3.7 21.2c-.43-.25-.7-.72-.7-1.28V4.07c0-.54.24-1 .6-1.27Z" fill="#34A853" />
      <path d="m16.56 15.66-2.67-2.66 2.68-2.68 3.2 1.82c.9.51.9 1.8 0 2.32l-3.21 1.2Z" fill="#FBBC04" />
      <path d="M3.7 2.8 16.56 10.33 13.9 13 3.6 2.8h.1Z" fill="#4285F4" />
      <path d="m3.7 21.2 10.2-8.2 2.67 2.66L3.8 21.27c-.03 0-.07-.03-.1-.06Z" fill="#EA4335" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <>
      <section className="download-hero">
        <div className="hero-badge">
          <span className="dot" /> Available on iOS &amp; Android
        </div>
        <h1>
          Get <span className="accent">Racvest</span> on
          <br />
          your phone today
        </h1>
        <p>
          Join thousands already sending packages and earning money, download the
          app for free and get started in minutes.
        </p>

        <div className="download-badges">
          <a className="store-badge" href={ADD_APP_STORE_URL_LINK_HERE} rel="noreferrer" target="_blank">
            <div className="store-icon" aria-hidden="true">
              <AppleIcon />
            </div>
            <div className="store-text">
              <div className="store-label">Download on the</div>
              <div className="store-name">App Store</div>
            </div>
          </a>
          <a className="store-badge" href={ADD_GOOGLE_PLAY_URL_LINK_HERE} rel="noreferrer" target="_blank">
            <div className="store-icon" aria-hidden="true">
              <GooglePlayIcon />
            </div>
            <div className="store-text">
              <div className="store-label">Get it on</div>
              <div className="store-name">Google Play</div>
            </div>
          </a>
        </div>

        <div className="download-features">
          {downloadFeatures.map((feature) => (
            <div className="dl-feat reveal" key={feature.title}>
              <div className="ico">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-banner reveal cta-banner-download">
        <h2>Questions before downloading?</h2>
        <p>Our team is happy to walk you through the app and how it can work for you.</p>
        <div className="cta-actions">
          <Link className="btn-hero-primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
