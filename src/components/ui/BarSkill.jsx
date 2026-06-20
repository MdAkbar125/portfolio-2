// src/components/ui/BarSkill.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function BarSkill({ name, pct }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#e2e8f0" }}>
          {name}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#64748b" }}>
          {pct}%
        </span>
      </div>
      <div style={{
        width: "100%",
        height: "6px",
        borderRadius: "100px",
        background: "rgba(255,255,255,0.07)",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          height: "100%",
          borderRadius: "100px",
          background: "linear-gradient(90deg, #06b6d4, #6366f1)",
          width: visible ? `${pct}%` : "0%",
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          position: "relative",
        }}>
          <div style={{
            position: "absolute",
            right: "-5px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 8px rgba(99,102,241,0.9), 0 0 3px rgba(6,182,212,0.8)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease 1s",
          }} />
        </div>
      </div>
    </div>
  );
}