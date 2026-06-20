// src/components/ui/RingSkill.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function RingSkill({ name, pct }) {
  const [ref, visible] = useScrollReveal();
  const size = 88;
  const stroke = 7;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = visible ? circ * (pct / 100) : 0;

  const angle = (pct / 100) * 360 - 90;
  const rad = (angle * Math.PI) / 180;
  const x = r * Math.cos(rad);
  const y = r * Math.sin(rad);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
            style={{ transition: "stroke-dasharray 1.3s cubic-bezier(0.4,0,0.2,1)" }}
          />
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        {visible && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 8px rgba(99,102,241,0.9)",
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            transition: "transform 1.3s cubic-bezier(0.4,0,0.2,1)",
          }} />
        )}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#e2e8f0",
        }}>
          {visible ? `${pct}%` : ""}
        </div>
      </div>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#94a3b8", textAlign: "center", lineHeight: 1.3 }}>
        {name}
      </span>
    </div>
  );
}