// src/components/Experience.jsx
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

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

export default function Experience({ experiences }) {
  return (
    <section id="experience" style={{ padding: "80px 40px", maxWidth: "900px", margin: "0 auto" }}>
      <RevealSection>
        <SectionHeader label="Career" title="Experience" />
      </RevealSection>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {experiences.map((exp, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <GlassCard style={{ padding: "32px 36px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: 700, color: "#e2e8f0" }}>
                    {exp.role}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "#a5b4fc", marginTop: "4px" }}>
                    {exp.company}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ padding: "4px 12px", borderRadius: "100px", background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", fontSize: "12px", color: "#a5b4fc", fontFamily: "'JetBrains Mono', monospace" }}>
                    {exp.period}
                  </span>
                  <span style={{ padding: "4px 12px", borderRadius: "100px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", fontSize: "12px", color: "#34d399", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {exp.type}
                  </span>
                </div>
              </div>
              <ul style={{ marginTop: "20px", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {exp.points.map((p, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
                    <span style={{ color: "#6366f1", marginTop: "6px", flexShrink: 0 }}>▸</span> {p}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}