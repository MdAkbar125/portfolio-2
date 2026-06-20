// src/components/ui/SkillPill.jsx
import { useState } from 'react';

export default function SkillPill({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: "100px",
        fontSize: "13px",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500,
        background: hov ? "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.4))" : "rgba(255,255,255,0.07)",
        border: "1px solid",
        borderColor: hov ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.12)",
        color: hov ? "#c7d2fe" : "#94a3b8",
        cursor: "default",
        transition: "all 0.25s ease",
        transform: hov ? "scale(1.05)" : "scale(1)",
        margin: "4px",
      }}
    >
      {label}
    </span>
  );
}