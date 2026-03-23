import { useState, useRef } from 'react';
import './Contact.css';

const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com/rpy09',
    handle: '@rpy09',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/r-pranav-yadav-1a9839283',
    handle: 'R. Pranav Yadav',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:reddamonipranavyadav@gmail.com',
    handle: 'reddamonipranavyadav@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus]     = useState('');
  const formRef = useRef(null);

  const handleChange = e =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mbldykng', {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <p className="section-tag reveal-left">Get In Touch</p>
        <h2 className="section-heading reveal-left">Contact <span>Me</span></h2>
        <div className="section-divider reveal-left" />

        <div className="contact__layout">
          {/* Left — Info */}
          <div className="contact__info reveal-left">
            <p className="contact__tagline">
              Have a project in mind or just want to say hi? I'd love to hear from you.
              Let's build something amazing together.
            </p>

            <div className="contact__socials">
              {SOCIALS.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact__social glass-card reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="contact__social-icon">{s.icon}</div>
                  <div className="contact__social-body">
                    <span className="contact__social-name">{s.name}</span>
                    <span className="contact__social-handle">{s.handle}</span>
                  </div>
                  <svg className="contact__social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__form-wrap glass-card reveal-right">
            <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
              <div className="contact__field">
                <label htmlFor="cnt-name">Full Name</label>
                <input
                  id="cnt-name"
                  type="text"
                  name="name"
                  placeholder="Pranav Yadav"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="cnt-phone">Phone Number</label>
                <input
                  id="cnt-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label htmlFor="cnt-email">Email Address</label>
                <input
                  id="cnt-email"
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="cnt-message">Message</label>
                <textarea
                  id="cnt-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact__submit" disabled={status === 'sending'}>
                <span>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>

              {status === 'success' && (
                <p className="contact__status contact__status--ok">✅ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--err">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
