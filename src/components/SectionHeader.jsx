// src/components/SectionHeader.jsx
export default function SectionHeader({ label, title, center = false }) {
  return (
    <div style={{ marginBottom: "48px", textAlign: center ? "center" : "left" }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        color: "#6366f1",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "12px",
      }}>
        {label}
      </div>
      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 700,
        color: "#e2e8f0",
        margin: 0,
        background: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        {title}
      </h2>
      <div style={{
        width: "48px",
        height: "3px",
        borderRadius: "2px",
        background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
        marginTop: "16px",
        marginLeft: center ? "auto" : 0,
        marginRight: center ? "auto" : 0,
      }} />
    </div>
  );
}