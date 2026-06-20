// src/App.jsx
import { useState, useEffect } from 'react';
import data from './data/portfolioData';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "education", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#060818", color: "#e2e8f0", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <BackgroundEffects />
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero data={data} scrollTo={scrollTo} />
        <Experience experiences={data.experience} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Education education={data.education} achievements={data.achievements} certifications={data.certifications} />
        <Contact email={data.email} phone={data.phone} location={data.location} />
        <footer style={{ textAlign: "center", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "13px", color: "#334155", fontFamily: "'Space Grotesk', sans-serif" }}>
          Designed & Built by MD Akbar · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default App;