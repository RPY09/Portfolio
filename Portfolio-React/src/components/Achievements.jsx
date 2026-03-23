import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGit, SiExpress } from 'react-icons/si';
import './Achievements.css';
import ImageModal from './ImageModal';

const SKILLS = [
  { name: 'HTML & CSS',   level: 92 },
  { name: 'JavaScript',   level: 80 },
  { name: 'React',        level: 75 },
  { name: 'Node.js',      level: 65 },
  { name: 'MongoDB',      level: 60 },
  { name: 'Git & GitHub', level: 85 },
];

const TECH = [
  { name: 'HTML5',      icon: <SiHtml5 size={28} color="var(--c4)" /> },
  { name: 'CSS3',       icon: <SiCss size={28} color="var(--c4)" /> },
  { name: 'JavaScript', icon: <SiJavascript size={28} color="var(--c4)" /> },
  { name: 'React',      icon: <SiReact size={28} color="var(--c4)" /> },
  { name: 'Node.js',    icon: <SiNodedotjs size={28} color="var(--c4)" /> },
  { name: 'MongoDB',    icon: <SiMongodb size={28} color="var(--c4)" /> },
  { name: 'Git',        icon: <SiGit size={28} color="var(--c4)" /> },
  { name: 'Express',    icon: <SiExpress size={28} color="var(--c4)" /> },
];

// Categorized highlights
const HIGHLIGHTS = {
  "Bharath Scouts and Guides": [
    { src: '/raj.jpg',  label: 'Rajya Puraskar(Bharath Scouts & Guides)' },
    { src: '/tri.jpg',  label: 'Tritya Sopan(Bharath Scouts & Guides)' },
  ],
  "Sports": [
    { src: '/bas.jpg',  label: 'Basketball Achievement(U-19)' },
    { src: '/bal.jpg',  label: 'Basketball Achievement(U-19)' },
    { src: '/kho.jpg',  label: 'Kho-Kho Achievement' },
  ],
  "Academics": [
    { src: '/cod.png',  label: 'Coding Competition' },
    { src: '/fre.png',  label: 'Freelance Work' },
    { src: '/g.jpg',    label: 'Green Olympiad' },
    { src: '/o.jpg',    label: 'Green Olympiad' },
    { src: '/go.jpg',   label: 'Green Olympiad' },
    { src: '/np.png',   label: 'Node.js Project' },
  ]
};

const CERT_IMAGES = [
  { src: '/jsAlgorithms&DS.png', label: 'JS Algorithm & DS' },
  { src: '/nptel.png', label: 'NPTEL' },  
  { src: '/responsiveWebDesign.png', label: 'Responsive Web Design' },
];

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="ach__skill-item" style={{ animationDelay: `${delay}s` }}>
      <div className="ach__skill-header">
        <span className="ach__skill-name">{name}</span>
        <span className="ach__skill-pct">{level}%</span>
      </div>
      <div className="ach__skill-track">
        <div className="ach__skill-fill" ref={barRef} style={{ width: 0, transitionDelay: `${delay}s` }} />
      </div>
    </div>
  );
}

function ImgCard({ src, label, delay, onClick }) {
  return (
    <div className="ach__img-card" style={{ animationDelay: `${delay}s` }} onClick={() => onClick && onClick(src)}>
      <img
        src={src}
        alt={label}
        onError={e => {
          e.target.parentElement.style.display = 'none';
        }}
      />
      <div className="ach__img-label">{label}</div>
    </div>
  );
}

export default function Achievements() {
  const [showHighlights, setShowHighlights] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="ach section" id="achievements">
      <div className="section-container">
        <p className="section-tag reveal-left">Skills & Awards</p>
        <h2 className="section-heading reveal-left">My <span>Achievements</span></h2>
        <div className="section-divider reveal-left" />

        <div className="ach__layout">
          {/* Skills bars */}
          <div className="reveal-left">
            <h3 className="ach__sub-heading">Technical Skills</h3>
            <div className="ach__skills">
              {SKILLS.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Tech icons */}
          <div className="reveal-right">
            <h3 className="ach__sub-heading">Tech Stack</h3>
            <div className="ach__tech-grid">
              {TECH.map((t, i) => (
                <div key={t.name} className="ach__tech-chip glass-card reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                  <span className="ach__tech-icon">{t.icon}</span>
                  <span className="ach__tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate images */}
        <h3 className="ach__sub-heading reveal" style={{ marginTop: '3.5rem' }}>Certificates</h3>
        <div className="ach__certs">
          {CERT_IMAGES.map((img, i) => (
            <ImgCard key={img.src} src={img.src} label={img.label} delay={i * 0.08} onClick={setModalImg} />
          ))}
        </div>

        {/* Skill/Achievement image gallery */}
        <h3 
          className="ach__sub-heading reveal" 
          style={{ marginTop: '2.5rem', cursor: 'pointer' }}
          onClick={() => setShowHighlights(!showHighlights)}
        >
          <span>Highlights & Activities</span>
          <ChevronDown 
            size={20} 
            color="var(--c4)"
            style={{ transform: showHighlights ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
          />
        </h3>
        {showHighlights && (
          <div className="ach__highlights">
            {Object.entries(HIGHLIGHTS).map(([category, items]) => (
              <div key={category} className="ach__highlight-section">
                <h4 className="ach__category-title">{category}</h4>
                <div className="ach__certs">
                  {items.map((img, i) => (
                    <ImgCard key={img.src} src={img.src} label={img.label} delay={i * 0.08} onClick={setModalImg} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {modalImg && <ImageModal src={modalImg} onClose={() => setModalImg(null)} />}
      </div>
    </section>
  );
}
