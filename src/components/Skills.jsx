// src/components/Skills.jsx
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

// Bar Skill Component for Core Languages - Using original styles
function BarSkill({ name, percentage }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "6px",
        fontFamily: "'Space Grotesk', sans-serif",
      }}>
        <span style={{ fontSize: "14px", color: "#94a3b8" }}>{name}</span>
        <span style={{ fontSize: "14px", color: "#a5b4fc", fontWeight: 600 }}>{percentage}%</span>
      </div>
      <div style={{
        width: "100%",
        height: "6px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "10px",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${percentage}%`,
          height: "100%",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          borderRadius: "10px",
          transition: "width 1s ease-in-out",
        }} />
      </div>
    </div>
  );
}

// Ring Skill Component for Web Development & Tools - Using original styles
function RingSkill({ name, percentage }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    }}>
      <div style={{ position: "relative", width: "100px", height: "100px" }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          {/* Progress circle with gradient */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 50 50)"
            style={{
              transition: "stroke-dashoffset 1.5s ease-in-out",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#e2e8f0",
        }}>
          {percentage}%
        </div>
      </div>
      <span style={{
        fontSize: "13px",
        color: "#94a3b8",
        fontFamily: "'Space Grotesk', sans-serif",
        textAlign: "center",
        maxWidth: "90px",
      }}>
        {name}
      </span>
    </div>
  );
}

function RevealSection({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" style={{ padding: "80px 40px", maxWidth: "1100px", margin: "0 auto" }}>
      <RevealSection>
        <SectionHeader label="STACK" title="Technical Skills" center />
      </RevealSection>
      
      <RevealSection delay={0.1}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: "24px" 
        }} className="skills-grid">
          
          {/* Core Languages - Bar Skills */}
          <GlassCard style={{ padding: "32px 28px" }} className="skill-card">
            <div style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 700, 
              fontSize: "16px", 
              color: "#e2e8f0", 
              marginBottom: "28px" 
            }}>
              Core Languages
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {skills.coreLanguages.map((skill) => (
                <BarSkill 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.pct} 
                />
              ))}
            </div>
          </GlassCard>

          {/* Web Development - Ring Skills */}
          <GlassCard style={{ padding: "32px 28px" }} className="skill-card">
            <div style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 700, 
              fontSize: "16px", 
              color: "#e2e8f0", 
              marginBottom: "28px" 
            }}>
              Web Development
            </div>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "24px 16px", 
              justifyItems: "center" 
            }} className="ring-skills-grid">
              {skills.webDev.map((skill) => (
                <RingSkill 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.pct} 
                />
              ))}
            </div>
          </GlassCard>

          {/* Tools & Technologies - Ring Skills */}
          <GlassCard style={{ padding: "32px 28px" }} className="skill-card">
            <div style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 700, 
              fontSize: "16px", 
              color: "#e2e8f0", 
              marginBottom: "28px" 
            }}>
              Tools &amp; Technologies
            </div>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "24px 16px", 
              justifyItems: "center" 
            }} className="ring-skills-grid">
              {skills.tools.map((skill) => (
                <RingSkill 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.pct} 
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </RevealSection>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .skill-card {
            padding: 28px 20px !important;
          }
          
          .ring-skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .ring-skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}