import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';
import AllProjects from './components/AllProjects';

export default function App() {
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [viewAll]);

  if (viewAll) {
    return (
      <>
        <div className="grid-bg" aria-hidden="true" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <AllProjects onBack={() => setViewAll(false)} />
        </div>
      </>
    );
  }
  return (
    <>
      {/* Ambient grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* App content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Home />
          <Projects onViewAll={() => setViewAll(true)} />
          <Qualifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
