import aboutHero from '../assets/final-optimized/about-hero-racvest.jpg';
import partnerFastora from '../assets/final-optimized/fastora-express.jpg';
import partnerPaceGo from '../assets/final-optimized/pacego-courier.jpg';
import partnerSwiftBox from '../assets/final-optimized/swiftbox-logistics.jpg';
import partnerZentro from '../assets/final-optimized/zentro-deliveries.jpg';
import teamEmmanuel from '../assets/final-optimized/team-emmanuel.jpg';
import teamVictoria from '../assets/final-optimized/team-victoria.jpg';
import teamOkoyejo from '../assets/final-optimized/team-okoyejo.jpg';
import teamSamuel from '../assets/final-optimized/team-samuel.jpg';
import teamLawrence from '../assets/final-optimized/team-zainab.jpg';

const ADD_URL_LINK_HERE = 'add your url link here';

const getSafeHref = (href) => (href === ADD_URL_LINK_HERE ? undefined : href);

const teamMembers = [
  {
    name: 'Lucky  Samuel',
    role: 'Chief Technology Officer',
    image: teamSamuel,
  
    socials: [
      { label: 'LinkedIn', href: ADD_URL_LINK_HERE },
      { label: 'X', href: ADD_URL_LINK_HERE },
    ],
  },
  {
    name: 'Okuboyejo Samuel',
    role: ' Product Manager',
    image: teamOkoyejo,
    socials: [
      { label: 'LinkedIn', href: ADD_URL_LINK_HERE },
      { label: 'Instagram', href: ADD_URL_LINK_HERE },
    ],
  },
  {
    name: 'Victoria Ntekim',
    role: 'Marketing & Growth Strategy Lead',
    image: teamVictoria,
    imagePosition: 'center 18%',
    socials: [
      { label: 'LinkedIn', href: ADD_URL_LINK_HERE },
      { label: 'Facebook', href: ADD_URL_LINK_HERE },
    ],
  },
  {
    name: 'Emmanuel  Ayowole',
    role: 'Chief Product Officer',
    image: teamEmmanuel,
    socials: [
      { label: 'LinkedIn', href: ADD_URL_LINK_HERE },
      { label: 'Instagram', href: ADD_URL_LINK_HERE },
    ],
  },
  {
    name: 'Okon Lawrenece',
    role: 'Founder & CEO',
    image: teamLawrence,
    socials: [
      { label: 'LinkedIn', href: ADD_URL_LINK_HERE },
      { label: 'X', href: ADD_URL_LINK_HERE },
    ],
  },
];

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

const approachItems = [
  {
    label: 'Principle',
    title: 'Human-centered logistics',
    text: 'We design every workflow around real people, local movement, and practical delivery needs.',
  },
  {
    label: 'Approach',
    title: 'Trust through visibility',
    text: 'Verification, live tracking, and transparent communication help senders and couriers move with confidence.',
  },
  {
    label: 'Focus',
    title: 'Growth through access',
    text: 'We open up earning opportunities for everyday travellers while helping businesses deliver faster.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <div className="section-label">About Racvest</div>
          <div className="about-hero-copy-grid">
            <h1>
              We&apos;re building the <span className="accent">future</span> of
              delivery access in Africa.
            </h1>
            <p>
              Racvest connects people who need to send packages with trusted couriers
              and travellers already on the move, creating a faster, more flexible,
              and more rewarding logistics experience for everyone.
            </p>
          </div>
        </div>
        <div className="about-hero-visual reveal">
          <img
            alt="Racvest team and product illustration"
            decoding="async"
            loading="eager"
            src={aboutHero}
          />
        </div>
      </section>

      <section className="about-story">
        <div className="section-label">About Us</div>
        <div className="about-story-grid">
          <div>
            <h2 className="section-title">
              Built to make delivery <span className="accent">simpler</span> and
              earning more accessible.
            </h2>
          </div>
          <div className="about-story-copy">
            <p>
              Racvest exists because sending packages across cities should not feel
              slow, uncertain, or expensive. We want to fill the gap between the way people
              already move every day and the way goods are delivered,  we built a
              platform that brings those journeys together.
            </p>
            <p>
              By turning everyday routes into delivery opportunities, Racvest helps
              senders reach trusted couriers faster while giving individuals and
              small businesses more ways to earn and grow.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="section-label">Our Vision & Mission</div>
        <div className="about-values-grid">
          <article className="about-value-card reveal">
            <div className="card-icon">Vision</div>
            <h3>A delivery network that feels close, reliable, and available to everyone.</h3>
            <p>
              We envision a future where package movement across African cities is as
              seamless as sending a message, powered by a trusted network of verified
              people.
            </p>
          </article>
          <article className="about-value-card reveal">
            <div className="card-icon">Mission</div>
            <h3>To connect movement, trust, and income through smarter local logistics.</h3>
            <p>
              Our mission is to help senders deliver with confidence while enabling
              couriers and travellers to earn more from journeys they are already making.
            </p>
          </article>
        </div>
      </section>

      <section className="about-approach">
        <div className="section-label">Our Approach</div>
        <h2 className="section-title">
          We grow by staying <span className="accent">practical</span>, transparent,
          and people-first.
        </h2>
        <div className="about-approach-grid">
          {approachItems.map((item) => (
            <article className="about-approach-card reveal" key={item.title}>
              <div className="how-icon">{item.label}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-team">
        <div className="section-label">Meet Our Team</div>
        <h2 className="section-title">
          The people shaping <span className="accent">Racvest</span>.
        </h2>
        <div className="about-team-grid">
          {teamMembers.map((member) => (
            <article className="team-card reveal" key={member.name}>
              <div className="team-card-media">
                <img
                  alt={member.name}
                  className="team-card-image"
                  decoding="async"
                  loading="lazy"
                  style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                  src={member.image}
                />
              </div>
              <div className="team-card-body">
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <div className="team-socials">
                  {member.socials.map((social) => (
                    <a
                      href={getSafeHref(social.href)}
                      key={`${member.name}-${social.label}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-newsletter reveal">
        <div className="about-newsletter-copy">
          <div className="section-label">Subscribe To Our Newsletter</div>
          <h2 className="section-title">
            Stay close to every <span className="accent">update</span>.
          </h2>
          <p>
            Get product launches, courier opportunities, partnership updates, and
            logistics insights from the Racvest team.
          </p>
        </div>
        <form
          className="about-newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input placeholder="Enter your email address" type="email" />
          <button className="btn-hero-primary" type="submit">
            Subscribe
          </button>
        </form>
      </section>

      <section className="about-partners">
        <div className="section-label">Who we want to partner with? </div>
        <h2 className="section-title">
          We want to work with every brand that believes in <span className="accent">smart delivery</span>.
        </h2>
        <div className="about-partners-grid">
          <div className="about-partners-copy">
            <p>
              We collaborate with retail brands, mobility communities, business
              operators, and ecosystem builders who want to make logistics more
              accessible, efficient, and rewarding.
            </p>
            <p>
              From commerce to movement infrastructure, we collaborate with our partners to create
              stronger delivery routes and better service experiences for senders and
              couriers.
            </p>
          </div>
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
        </div>
      </section>
    </div>
  );
}
