// src/components/GlassCard.jsx
import { useState } from 'react';

export default function GlassCard({ children, className = "", style = {}, hoverLift = true }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "20px",
        boxShadow: hovered && hoverLift
          ? "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(99,102,241,0.15)"
          : "0 8px 32px rgba(0,0,0,0.3)",
        transform: hovered && hoverLift ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}