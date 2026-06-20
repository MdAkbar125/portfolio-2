// src/components/ui/ContactRow.jsx
import { useState } from 'react';

export default function ContactRow({ icon, label, value, href }) {
  const [hov, setHov] = useState(false);
  const inner = (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px 20px",
        borderRadius: "12px",
        background: hov ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.25s ease",
        cursor: href ? "pointer" : "default",
      }}
    >
      <span style={{ fontSize: "20px", width: "32px", textAlign: "center" }}>{icon}</span>
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: "11px", color: "#475569", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {label}
        </div>
        <div style={{ fontSize: "15px", color: hov ? "#a5b4fc" : "#94a3b8", fontFamily: "'Space Grotesk', sans-serif", marginTop: "2px", transition: "color 0.25s" }}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} style={{ textDecoration: "none" }}>{inner}</a> : inner;
}