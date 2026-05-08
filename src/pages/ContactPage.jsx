import { useEffect, useRef, useState } from 'react';

const contactItems = [
  {
    code: 'EM',
    label: 'Email us',
    value: 'racvestsupport@gmail.com',
    href: 'mailto:racvestsupport@gmail.com',
  },
  {
    code: 'PH',
    label: 'Call us',
    value: '+234 800 RACVEST',
    href: 'tel:+2348007228378',
  },
  { code: 'HQ', label: 'Head Office', value: 'Victoria Island, Lagos, Nigeria' },
  { code: '24', label: 'Support Hours', value: '24/7 - Support Available' },
];

const ADD_CONTACT_FORM_URL_LINK_HERE = 'add contact form url link here';
const ADD_URL_LINK_HERE = 'add your url link here';

const socialLinks = [
  { label: 'Twitter', href: ADD_URL_LINK_HERE },
  { label: 'Instagram', href: ADD_URL_LINK_HERE },
  { label: 'Facebook', href: ADD_URL_LINK_HERE },
];

const getSafeHref = (href) => (href === ADD_URL_LINK_HERE ? undefined : href);

export default function ContactPage() {
  const timerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    timerRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1400);
  };

  return (
    <div className="contact-layout">
      <div className="contact-info">
        <div className="section-label">Get in touch</div>
        <h1>
          We&apos;d love to <span className="accent">hear</span> from you
        </h1>
        <p>
          Whether you have a question about a delivery, want to become a courier
          partner, or need help with the app, our team is ready to help.
        </p>

        <div className="contact-items">
          {contactItems.map((item) => {
            const ContactItem = item.href ? 'a' : 'div';

            return (
              <ContactItem className="contact-item reveal" href={item.href} key={item.label}>
                <div className="ci-icon">{item.code}</div>
                <div>
                  <div className="ci-label">{item.label}</div>
                  <div className="ci-val">{item.value}</div>
                </div>
              </ContactItem>
            );
          })}
        </div>

        <div className="contact-socials">
          <div className="section-label contact-social-label">Follow us</div>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a className="social-link" href={getSafeHref(social.href)} key={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-form-wrap reveal">
        <h2>Send us a message</h2>
        {!isSubmitted ? (
          <form action={ADD_CONTACT_FORM_URL_LINK_HERE} id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" placeholder="Adaeze" required type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" placeholder="Okafor" required type="text" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email-address">Email Address</label>
              <input id="email-address" placeholder="you@example.com" required type="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input id="phone-number" placeholder="+234 800 000 0000" type="tel" />
            </div>
            <div className="form-group">
              <label htmlFor="role">I am a...</label>
              <select defaultValue="" id="role">
                <option value="">Select your role</option>
                <option>Sender - I want to send packages</option>
                <option>Courier - I want to earn delivering</option>
                <option>Business - I need bulk delivery solutions</option>
                <option>Press / Media</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us how we can help you..." />
            </div>
            <button className="form-submit" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Sending...' : 'Send Message ->'}
            </button>
          </form>
        ) : (
          <div className="form-success form-success-visible" id="form-success">
            <div className="ico">OK</div>
            <h3>Message Sent!</h3>
            <p>
              Thank you for reaching out. Our team will get back to you within 24
              hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
