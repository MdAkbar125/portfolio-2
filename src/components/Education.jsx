// src/components/Education.jsx
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

export default function Education({ education, achievements, certifications }) {
  return (
    <section 
      id="education" 
      style={{ 
        padding: "80px 20px", 
        maxWidth: "900px", 
        margin: "0 auto" 
      }}
    >
      <RevealSection>
        <SectionHeader label="Academic" title="Education" />
      </RevealSection>
      
      {/* Education Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {education.map((edu, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <GlassCard style={{ padding: "20px" }}>
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
              }}>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  width: "100%",
                }}>
                  <div style={{ 
                    fontFamily: "'Space Grotesk', sans-serif", 
                    fontWeight: 700, 
                    fontSize: "clamp(16px, 2.5vw, 17px)", 
                    color: "#e2e8f0",
                  }}>
                    {edu.degree}
                  </div>
                  <div style={{ 
                    fontSize: "clamp(13px, 2vw, 14px)", 
                    color: "#64748b", 
                    marginTop: "4px", 
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    {edu.school} {edu.period && `· ${edu.period}`}
                  </div>
                </div>
                <span style={{
                  padding: "6px 16px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 2vw, 15px)",
                  color: "#a5b4fc",
                  alignSelf: "flex-start",
                }}>
                  {edu.score}
                </span>
              </div>
            </GlassCard>
          </RevealSection>
        ))}
      </div>

      {/* Achievements Section - Now Matching Education Style */}
      <div style={{ marginTop: "40px" }}>
        <RevealSection>
          <div style={{ 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: "clamp(18px, 3vw, 20px)", 
            fontWeight: 700, 
            color: "#e2e8f0", 
            marginBottom: "16px" 
          }}>
            Achievements
          </div>
        </RevealSection>
        
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "16px"  // Same gap as education
        }}>
          {achievements.map((a, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <GlassCard style={{ 
                padding: "20px",  // Same padding as education
              }}>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column",  // Same as education
                  alignItems: "flex-start",  // Same as education
                  gap: "12px",  // Same as education
                }}>
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column",  // Same as education
                    width: "100%",  // Same as education
                  }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px",
                    }}>
                      <span style={{ 
                        fontSize: "clamp(24px, 3vw, 28px)",
                        flexShrink: 0,
                      }}>
                        {a.icon}
                      </span>
                      <div style={{ 
                        fontFamily: "'Space Grotesk', sans-serif", 
                        fontWeight: 700, 
                        fontSize: "clamp(16px, 2.5vw, 17px)",  // Same as education
                        color: "#e2e8f0",
                      }}>
                        {a.title}
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: "clamp(13px, 2vw, 14px)",  // Same as education
                      color: "#64748b", 
                      marginTop: "4px",  // Same as education
                      fontFamily: "'Space Grotesk', sans-serif",
                      paddingLeft: "40px",  // Align with title
                    }}>
                      {a.event}
                    </div>
                  </div>
                  <span style={{
                    padding: "6px 16px",  // Same as education
                    borderRadius: "8px",  // Same as education
                    background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                    border: "1px solid rgba(99,102,241,0.3)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(14px, 2vw, 15px)",  // Same as education
                    color: "#a5b4fc",
                    alignSelf: "flex-start",  // Same as education
                  }}>
                    {i === 0 ? "🏆 Winner" : "⭐ Participant"}
                  </span>
                </div>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div style={{ marginTop: "32px" }}>
        <RevealSection>
          <GlassCard style={{ padding: "20px" }}>
            <div style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: "clamp(13px, 2vw, 14px)", 
              color: "#6366f1", 
              fontWeight: 600, 
              letterSpacing: "0.1em", 
              textTransform: "uppercase", 
              marginBottom: "14px" 
            }}>
              Certifications
            </div>
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "8px" 
            }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ 
                  display: "flex", 
                  gap: "10px", 
                  alignItems: "flex-start", 
                  fontSize: "clamp(13px, 2vw, 14px)", 
                  color: "#94a3b8",
                  lineHeight: 1.5,
                }}>
                  <span style={{ 
                    color: "#6366f1", 
                    marginTop: "2px",
                    flexShrink: 0,
                  }}>✦</span> 
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </RevealSection>
      </div>
    </section>
  );
}