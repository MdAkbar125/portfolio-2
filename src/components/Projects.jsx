// src/components/Projects.jsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

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

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <RevealSection>
        <SectionHeader label="Work" title="Projects" />
      </RevealSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: "24px",
        }}
        className="projects-grid"
      >
        {projects.map((proj, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <GlassCard
              style={{
                padding: "32px",
                height: "100%",
                boxSizing: "border-box",
              }}
              className="project-card"
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: `${proj.color}22`,
                    border: `1px solid ${proj.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    flexShrink: 0,
                  }}
                >
                  {proj.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#e2e8f0",
                    }}
                  >
                    {proj.name}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {proj.subtitle}
                  </div>
                </div>
              </div>

              {/* Project Points */}
              <ul
                style={{
                  padding: 0,
                  margin: "0 0 20px",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {proj.points.map((p, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#94a3b8",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: proj.color,
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "18px",
                }}
              >
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: `${proj.color}18`,
                      border: `1px solid ${proj.color}33`,
                      fontSize: "12px",
                      color: proj.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(proj.github || proj.live) && (
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "10px",
                  }}
                >
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 16px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        background: `${proj.color}22`,
                        border: `1px solid ${proj.color}55`,
                        color: proj.color,
                        fontWeight: 600,
                        transition: "0.3s",
                      }}
                    >
                      GitHub
                    </a>
                  )}

                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 16px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        background: proj.color,
                        color: "#fff",
                        fontWeight: 600,
                        transition: "0.3s",
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </GlassCard>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            max-width: 600px;
            margin: 0 auto;
          }
          .project-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}