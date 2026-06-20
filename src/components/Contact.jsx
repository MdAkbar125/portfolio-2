// src/components/Contact.jsx
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';
import ContactRow from './ui/ContactRow';

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

export default function Contact({ email, phone, location }) {
  return (
    <section id="contact" style={{ padding: "80px 40px 120px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }} className="contact-section">
      <RevealSection>
        <SectionHeader label="Let's Connect" title="Get In Touch" center />
        <GlassCard style={{ padding: "48px 40px", marginTop: "40px" }} hoverLift={false} className="contact-card">
          <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "40px" }} className="contact-text">
            Open to software development, full-stack, and entry-level IT roles. Let's build something great together.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "stretch" }}>
            <ContactRow icon="✉" label="Email" value={email} href={`mailto:${email}`} />
            <ContactRow icon="📞" label="Phone" value={phone} href={`tel:${phone}`} />
            <ContactRow icon="📍" label="Location" value={location} href={null} />
          </div>
        </GlassCard>
      </RevealSection>

      <style>{`
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 20px 100px !important;
          }
          .contact-card {
            padding: 32px 20px !important;
            margin-top: 32px !important;
          }
          .contact-text {
            font-size: 14px !important;
            line-height: 1.7 !important;
            margin-bottom: 28px !important;
            padding: 0 4px !important;
          }
        }
      `}</style>
    </section>
  );
}