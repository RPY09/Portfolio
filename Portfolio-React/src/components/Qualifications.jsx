import './Qualifications.css';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const TIMELINE = [
  {
    id: 1,
    degree: '10th Grade (CBSE)',
    school: 'Kendriya Vidyalaya, Yenugonda',
    year: '2020',
    marks: '325 / 500',
    icon: <School size={24} color="var(--c4)" />,
    side: 'left',
    mapLink: 'https://www.google.com/maps/place/Kendriya+Vidyalaya+Yenugonda,+Mahabubnagar/@16.76831,78.0443464',
  },
  {
    id: 2,
    degree: '12th Grade (Intermediate)',
    school: 'Sri Chaithanya IIT Academy, Bongulur',
    year: '2022',
    marks: '908 / 1000',
    icon: <BookOpen size={24} color="var(--c4)" />,
    side: 'right',
    mapLink: 'https://www.google.com/maps/place/Sri+Chaithanya+IIT+Academy/@17.2287372,78.5800323',
  },
  {
    id: 3,
    degree: 'B.Tech — Computer Science',
    school: 'Sri Indu College of Engineering & Technology',
    year: 'Present',
    marks: 'CGPA: 8.03',
    icon: <GraduationCap size={24} color="var(--c4)" />,
    side: 'left',
    mapLink: 'https://www.google.com/maps/place/Sri+Indu+College+Of+Engineering+%26+Technology/@17.210076,78.6093381',
  },
];

export default function Qualifications() {
  return (
    <section className="qual section" id="qualifications">
      <div className="section-container">
        <p className="section-tag reveal-left">Education</p>
        <h2 className="section-heading reveal-left">My <span>Qualifications</span></h2>
        <div className="section-divider reveal-left" />

        <div className="qual__timeline">
          {/* Center line */}
          <div className="qual__line reveal" />

          {TIMELINE.map((item, i) => (
            <div
              key={item.id}
              className={`qual__item qual__item--${item.side} reveal-${item.side === 'left' ? 'left' : 'right'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div className="qual__dot">
                <div className="qual__dot-inner" />
              </div>

              {/* Card */}
              <div className="qual__card glass-card">
                <div className="qual__card-header">
                  <span className="qual__icon">{item.icon}</span>
                  <div className="qual__year">{item.year}</div>
                </div>
                <h3 className="qual__degree">{item.degree}</h3>
                <p className="qual__school">{item.school}</p>
                <div className="qual__footer">
                  <span className="qual__marks">{item.marks}</span>
                  <a
                    href={item.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qual__map-link"
                    title="View on map"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Location
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
