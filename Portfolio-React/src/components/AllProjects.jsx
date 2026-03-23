import React, { useEffect } from 'react';
import './Projects.css';
import { PROJECTS } from './Projects';
import { ArrowLeft } from 'lucide-react';

export default function AllProjects({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', padding: '100px 0', background: 'var(--bg)' }}>
      <div className="section-container">
        <button 
          onClick={onBack} 
          className="btn-ghost" 
          style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
        
        <h2 className="section-heading">All <span>Projects</span></h2>
        <div className="section-divider" style={{ marginBottom: '3rem' }} />

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="projects__card glass-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="projects__img-wrap">
                <img
                  src={p.img}
                  alt={p.title}
                  className="projects__img"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="projects__img-fallback" style={{ display: 'none' }}>
                  <span>{p.icon}</span>
                </div>

                <div className="projects__overlay">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__cta btn-primary"
                  >
                    <span>Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="projects__body">
                <h3 className="projects__title">{p.title}</h3>
                <p className="projects__desc">{p.desc}</p>
                <div className="projects__tags">
                  {p.tags.map(t => (
                    <span key={t} className="projects__tag">{t}</span>
                  ))}
                </div>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
