import './Projects.css';

export const PROJECTS = [
   {
    id: 1,
    title: 'DhanaSethu',
    desc: 'Track expenses, guide budgets, manage dues, and build savings with a calmer finance experience designed for daily confidence.',
    tags: ['React','Node.js','MongoDB'],
    link: 'https://dhanasethu.vercel.app/',
    img: '/DhanaSethu.png',
    icon: '🏪',
  },
  {
    id: 2,
    title: 'CleanStreet',
    desc: 'A community-driven platform to build cleaner, smarter neighborhoods. Report issues like potholes and garbage in real-time and watch them get resolved.',
    tags: ['React','Node.js','MongoDB'],
    link: 'https://cleanstreet09.vercel.app/',
    img: '/cleanStreet.png',
    icon: '🛒',
  },{
    id: 3,
    title: 'Billing & Inventory Management',
    desc: 'A comprehensive billing and inventory management system for small businesses, featuring real-time stock tracking, automated billing, and sales analytics.',
    tags: ['HTML', 'CSS', 'JavaScript','GoogleSheets'],
    link: 'https://rpy09.github.io/SRI_RAGHAVENDRA-AUTOMOBILES/home.html',
    img: '/InventortyandBillings.png',
    icon: '🛒',
  },
  
   {
    id: 4,
    title: 'Manga-Laya',
    desc: 'A digital manga e-library with categorized browsing, search, and reader functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rpy09.github.io/Mangalaya/Program/ELIBRARY.html',
    img: '/Mangalaya.png',
    icon: '📚',
  },
  {
    id: 5,
    title: 'Words Wonder',
    desc: 'An interactive word puzzle game with multiple categories and dynamic scoring system.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rpy09.github.io/WORDS_WONDER.-/wordswonder.!!.html',
    img: '/wordsWonder.png',
    icon: '📝',
  },
  {
    id: 6,
    title: 'Basic Programmings',
    desc: 'An educational platform for beginner programmers to learn coding fundamentals interactively.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rpy09.github.io/Basic-Programmings/basic.html',
    img: '/BasicProgramming.png',
    icon: '💻',
  },
 
  {
    id: 7,
    title: 'Rock Paper Scissor',
    desc: 'Classic game with smooth animations, score tracking, and a sleek modern interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rpy09.github.io/ROCK-PAPER-SCISSOR/rock.html',
    img: '/RockPaperScissors.png',
    icon: '✂️',
  },{
    id: 8,
    title: 'Amazon Clone',
    desc: 'A pixel-perfect clone of the Amazon e-commerce platform built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rpy09.github.io/amazon-clone/amazon.html',
    img: '/AmazonClone.png',
    icon: '🛒',
  },
 ,
];

export default function Projects({ onViewAll }) {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <p className="section-tag reveal-left">My Work</p>
        <h2 className="section-heading reveal-left">Featured <span>Projects</span></h2>
        <div className="section-divider reveal-left" />

        <div className="projects__grid">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <article
              key={p.id}
              className="projects__card glass-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image / Preview */}
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

                {/* Hover overlay */}
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

              {/* Card Body */}
              <div className="projects__body">
                <h3 className="projects__title">{p.title}</h3>
                <p className="projects__desc">{p.desc}</p>
                <div className="projects__tags">
                  {p.tags.map(t => (
                    <span key={t} className="projects__tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Bottom link */}
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
        
        {PROJECTS.length > 3 && (
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem', transitionDelay: '200ms' }}>
            <button onClick={onViewAll} className="btn-ghost">
              <span>View More Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
