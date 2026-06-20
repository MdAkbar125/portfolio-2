// src/components/Hero.jsx
import { useState, useRef, useEffect } from 'react';
import { useCounter } from '../hooks/useCounter';
import GlassCard from './GlassCard';

export default function Hero({ data, scrollTo }) {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const projectCount = useCounter(4, 1200, statsVisible);
  const internCount = useCounter(2, 1200, statsVisible);
  const hackCount = useCounter(2, 1200, statsVisible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "100px 20px 60px" 
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
        <div style={{
          width: "clamp(72px, 15vw, 96px)",
          height: "clamp(72px, 15vw, 96px)",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          fontSize: "clamp(28px, 6vw, 36px)",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          color: "#fff",
          animation: "pulse-ring 2.5s ease-in-out infinite",
          boxShadow: "0 0 0 0 rgba(99,102,241,0.4)",
        }}>
          MA
        </div>
        
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(99,102,241,0.12)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: "100px",
          padding: "6px 14px",
          marginBottom: "20px",
        }}>
          <span style={{ 
            width: "6px", 
            height: "6px", 
            borderRadius: "50%", 
            background: "#10b981", 
            display: "inline-block" 
          }} />
          <span style={{ 
            fontSize: "clamp(11px, 2vw, 13px)", 
            color: "#a5b4fc", 
            fontFamily: "'Space Grotesk', sans-serif" 
          }}>
            Available for opportunities
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(36px, 10vw, 80px)",
          fontWeight: 700,
          lineHeight: 1.05,
          margin: "0 0 12px",
          background: "linear-gradient(135deg, #e2e8f0 0%, #cfcde9 50%, #818cf8 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 4s linear infinite",
        }}>
          {data.name}
        </h1>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(16px, 3vw, 22px)",
          fontWeight: 400,
          color: "#64748b",
          margin: "0 0 20px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0 10px",
        }}>
          {data.title}
        </h2>

        <p style={{ 
          maxWidth: "660px", 
          margin: "0 auto 36px", 
          fontSize: "clamp(14px, 2vw, 16px)", 
          lineHeight: 1.7, 
          color: "#94a3b8", 
          fontWeight: 300,
          padding: "0 10px",
        }}>
          {data.summary}
        </p>

        <div style={{ 
          display: "flex", 
          gap: "12px", 
          justifyContent: "center", 
          flexWrap: "wrap",
          padding: "0 10px",
        }}>
          <button
            onClick={() => scrollTo("projects")}
            style={{
              padding: "clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              border: "none",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(13px, 2vw, 15px)",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
              transition: "all 0.25s ease",
              flex: "1 1 auto",
              minWidth: "140px",
              maxWidth: "240px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(99,102,241,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.35)";
            }}
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              padding: "clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#94a3b8",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(13px, 2vw, 15px)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              backdropFilter: "blur(10px)",
              flex: "1 1 auto",
              minWidth: "140px",
              maxWidth: "240px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
              e.currentTarget.style.color = "#a5b4fc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            Get In Touch
          </button>
        </div>

        <div 
          ref={statsRef} 
          style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "16px",
            justifyContent: "center",
            marginTop: "48px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 10px",
          }}
        >
          {[
            { num: projectCount, label: "Projects Built", suffix: "+" },
            { num: internCount, label: "Internships", suffix: "" },
            { num: hackCount, label: "Hackathons", suffix: "" },
          ].map((s) => (
            <GlassCard 
              key={s.label} 
              style={{ 
                padding: "clamp(20px, 3vw, 28px) clamp(20px, 3vw, 36px)", 
                textAlign: "center", 
                minWidth: "100px",
              }}
            >
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 6vw, 42px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #a5b4fc, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}>
                {s.num}{s.suffix}
              </div>
              <div style={{ 
                fontSize: "clamp(11px, 1.5vw, 13px)", 
                color: "#64748b", 
                marginTop: "6px", 
                fontFamily: "'Space Grotesk', sans-serif" 
              }}>
                {s.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}