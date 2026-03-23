import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Home',            href: '#home' },
  { label: 'Projects',        href: '#projects' },
  { label: 'Qualifications',  href: '#qualifications' },
  { label: 'Achievements',    href: '#achievements' },
  { label: 'Contact',         href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="#home" onClick={() => handleNav('#home')}>
          <img src="/RpyLogo.png" alt="RPY Logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`header__nav-link ${active === link.href ? 'header__nav-link--active' : ''}`}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Web Developer Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header__resume-btn btn-primary"
          >
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`header__mobile-link ${active === link.href ? 'header__mobile-link--active' : ''}`}
            onClick={e => { e.preventDefault(); handleNav(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Web Developer Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary header__mobile-resume"
          onClick={() => setMenuOpen(false)}
        >
          <span>Download Resume</span>
        </a>
      </div>
    </header>
  );
}
