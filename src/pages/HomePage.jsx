import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import partnerFastora from '../assets/final-optimized/fastora-express.jpg';
import heroPhonesImage from '../assets/hero-phones-optimized.jpg';
import mobileJoinImage from '../assets/mobile-hero/mobile-join-optimized.png';
import partnerPaceGo from '../assets/final-optimized/pacego-courier.jpg';
import partnerSwiftBox from '../assets/final-optimized/swiftbox-logistics.jpg';
import partnerZentro from '../assets/final-optimized/zentro-deliveries.jpg';
import {
  earnerFeatures,
  faqs,
  featureStrip,
  heroStats,
  howItWorks,
  senderFeatures,
  testimonials,
  tickerItems,
} from '../content';

const mobileHeroImages = [
  {
    src: mobileJoinImage,
    alt: 'Racvest mobile app preview showing join racvest screen',
  },
];

const ADD_URL_LINK_HERE = 'add your url link here';

const getSafeHref = (href) => (href === ADD_URL_LINK_HERE ? undefined : href);

const partners = [
  {
    name: 'PaceGo Courier',
    category: 'Courier Network Partner',
    image: partnerPaceGo,
    href: ADD_URL_LINK_HERE,
  },
  {
    name: 'Zentro Deliveries',
    category: 'Last-Mile Delivery Partner',
    image: partnerZentro,
    href: ADD_URL_LINK_HERE,
  },
  {
    name: 'SwiftBox Logistics',
    category: 'Logistics Infrastructure Partner',
    image: partnerSwiftBox,
    href: ADD_URL_LINK_HERE,
  },
  {
    name: 'Fastora Express',
    category: 'Express Delivery Partner',
    image: partnerFastora,
    href: ADD_URL_LINK_HERE,
  },
];

const scrollingPartners = [...partners, ...partners];

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5M5 17.5h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7 18.5 3.5 20l1.1-3.4A8 8 0 1 1 20 12a8 8 0 0 1-8 8c-1.78 0-3.42-.58-4.69-1.5H7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function useAnimatedStats() {
  const containerRef = useRef(null);
  const [statValues, setStatValues] = useState(heroStats.map(() => 0));

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1500;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setStatValues(heroStats.map((stat) => Math.floor(stat.value * eased)));

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick);
          }
        };

        frameId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return { containerRef, statValues };
}

export default function HomePage() {
  const { containerRef, statValues } = useAnimatedStats();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <section className="hero">
        <div className="hero-badge">
          <span className="dot" /> Now available in Nigeria &amp; beyond
        </div>
        <div className="hero-copy">
          <h1>
            <span className="hero-line">
              Send <span className="accent">anything</span>,
            </span>
            <br />
            anytime, <span className="accent-y">anywhere</span>.
          </h1>
          <p className="hero-sub">
            Racvest connects senders to a network of reliable couriers and travellers
            ready to deliver fast, safe, and affordable while letting you <strong>earn on every trip</strong>.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="btn-hero-primary" to="/download">
            Start Sending
          </Link>
          <Link className="btn-hero-secondary" to="/download">
            Become a Courier
          </Link>
        </div>

        <div className="hero-stats" ref={containerRef}>
          {heroStats.map((stat, index) => (
            <div className="stat" key={stat.label}>
              <div className="stat-num">
                {statValues[index]}
                {stat.suffixText}
                <span className="plus">{stat.trailing}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="hero-phones">
          <img
            alt="Racvest app preview on three phones"
            className="hero-phones-image"
            src={heroPhonesImage}
          />
        </div>

        <div className="hero-mobile-gallery">
          {mobileHeroImages.map((image) => (
            <div className="hero-mobile-card" key={image.alt}>
              <img
                alt={image.alt}
                className="hero-mobile-image"
                decoding="async"
                loading="lazy"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section id="how">
        <div className="section-label">How it works</div>
        <h2 className="section-title">
          Simple. Fast. <span className="accent">Reliable.</span>
        </h2>
        <p className="section-desc">From package to doorstep in a few taps. No hassle, no delays.</p>

        <div className="how-grid">
          {howItWorks.map((item) => (
            <div className="how-card reveal" key={item.number}>
              <div className="how-num">{item.number}</div>
              <div className="how-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="earn">
        <div className="section-label">Two ways to use Racvest</div>
        <h2 className="section-title">
          Send packages.
          <br />
          <span className="accent-y">Earn money.</span>
        </h2>

        <div className="dual-section">
          <div className="dual-card sender reveal">
            <div className="card-icon">Send</div>
            <h3>I want to Send</h3>
            <p>
              Need to send a package across town or across the country? Racvest
              connects you to couriers ready to deliver safely.
            </p>
            <ul className="dual-list">
              {senderFeatures.map((item) => (
                <li key={item}>
                  <span className="chk">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link className="dual-cta" to="/download">
              Send a Package -&gt;
            </Link>
          </div>

          <div className="dual-card earner reveal">
            <div className="card-icon">Earn</div>
            <h3>I want to Earn</h3>
            <p>
              Got a car, bike, or just using public transport? Deliver packages
              along your route and earn extra income on your own schedule.
            </p>
            <ul className="dual-list">
              {earnerFeatures.map((item) => (
                <li key={item}>
                  <span className="chk">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link className="dual-cta" to="/download">
              Start Earning -&gt;
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="section-label">Why Racvest</div>
        <h2 className="section-title">
          Built for <span className="accent">trust</span> &amp; speed.
        </h2>

        <div className="features-strip">
          {featureStrip.map((item) => (
            <div className="feat-item reveal" key={item.title}>
              <div className="ico">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mission-strip reveal">
        <div className="mission-text">
          <div className="section-label">Our Mission</div>
          <h2 className="section-title">
            Making logistics work <span className="accent">for everyone</span>
          </h2>
          <p className="section-desc mission-copy">
            In Africa, millions of people struggle with unreliable delivery
            systems. Racvest is changing that by turning everyday trips into
            delivery opportunities and connecting senders to a network that&apos;s
            already on the move.
          </p>
          <p className="section-desc">
            Whether you&apos;re a student, a trader, a driver or just someone heading
            home. Racvest puts extra income in your pocket.
          </p>
        </div>
        <div className="mission-visual">
          <div className="mission-ring">
            <div className="mission-ring-inner">
              <div className="ring-stat">68%</div>
              <div className="ring-label">Delivery Success Rate</div>
              <div className="ring-label ring-label-strong">increased by Racvest</div>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials-section">
        <div className="testi-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">
            People love <span className="accent">Racvest</span>
          </h2>
        </div>
        <div className="testi-track-wrap">
          <div className="testi-track">
            {doubledTestimonials.map((testimonial, index) => (
              <div className="testi-card" key={`${testimonial.name}-${index}`}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{testimonial.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={testimonial.avatarStyle}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="testi-name">{testimonial.name}</div>
                    <div className="testi-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">
            Questions? <span className="accent">We&apos;ve answered</span> a few.
          </h2>
          <p className="section-desc">
            Everything you need to know before you send your first package or start
            earning with Racvest.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <article className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                <button
                  aria-expanded={isOpen}
                  className="faq-question"
                  onClick={() =>
                    setOpenFaqIndex((current) => (current === index ? null : index))
                  }
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-partners">
        <div className="section-label">Partners</div>
        <h2 className="section-title">
          Brands moving with <span className="accent">Racvest</span>.
        </h2>
        <div className="about-partners-marquee">
          <div className="about-partners-cards">
            {scrollingPartners.map((partner, index) => (
              <a
                className="partner-card"
                href={getSafeHref(partner.href)}
                key={`${partner.name}-${index}`}
                rel="noreferrer"
                target="_blank"
              >
                <div className="partner-card-media">
                  <img
                    alt={partner.name}
                    className="partner-card-image"
                    decoding="async"
                    loading="eager"
                    src={partner.image}
                  />
                </div>
                <div className="partner-card-body">
                  <h3>{partner.name}</h3>
                  <p>{partner.category}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner reveal">
        <h2>
          <span className="cta-line">Ready to send your first package</span>
          <br className="cta-break" />
          <span className="cta-line">
            or start <span className="cta-yellow">earning today?</span>
          </span>
        </h2>
        <p>Join thousands of Nigerians already on the Racvest network. It&apos;s free to join.</p>
        <div className="cta-actions">
          <Link className="btn-hero-primary" to="/download">
            <span aria-hidden="true" className="btn-inline-icon">
              <DownloadIcon />
            </span>
            Download the App
          </Link>
          <Link className="btn-hero-secondary" to="/contact">
            <span aria-hidden="true" className="btn-inline-icon">
              <ChatIcon />
            </span>
            Talk to Us
          </Link>
        </div>
      </div>
    </>
  );
}
