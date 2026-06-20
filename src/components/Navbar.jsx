// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar({ activeSection, scrollTo }) {
  const sections = ["about", "experience", "projects", "skills", "education", "contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollTo(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(6,8,24,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 clamp(16px, 4vw, 40px)",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo - Fixed width to prevent collision */}
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(16px, 2.5vw, 18px)",
          background: "linear-gradient(135deg, #a5b4fc, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          whiteSpace: "nowrap",
          flexShrink: 0,
          minWidth: "auto",
        }}>
          MD.Akbar
        </span>

        {/* Desktop Navigation */}
        <div style={{ 
          display: "flex", 
          gap: "clamp(16px, 2.5vw, 32px)",
          alignItems: "center",
        }}>
          {/* Desktop Menu - Hidden on mobile */}
          <div style={{ 
            display: "flex", 
            gap: "clamp(16px, 2.5vw, 32px)",
            alignItems: "center",
          }} className="desktop-menu">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => handleNavClick(s)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeSection === s ? "#a5b4fc" : "#64748b",
                  fontSize: "clamp(12px, 1.3vw, 13px)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  padding: "4px 0",
                  transition: "color 0.2s, border-color 0.2s",
                  borderBottom: activeSection === s ? "2px solid #6366f1" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== s) {
                    e.currentTarget.style.color = "#94a3b8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== s) {
                    e.currentTarget.style.color = "#64748b";
                  }
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleMobileMenu}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
              color: "#94a3b8",
              flexDirection: "column",
              gap: "5px",
              transition: "all 0.3s ease",
              flexShrink: 0,
              marginLeft: "8px",
            }}
            className="hamburger-button"
            aria-label="Toggle menu"
          >
            <span style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: isMobileMenuOpen ? "#a5b4fc" : "#94a3b8",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              transformOrigin: "center",
            }} />
            <span style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: isMobileMenuOpen ? "#a5b4fc" : "#94a3b8",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              opacity: isMobileMenuOpen ? 0 : 1,
              transformOrigin: "center",
            }} />
            <span style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: isMobileMenuOpen ? "#a5b4fc" : "#94a3b8",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isMobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transformOrigin: "center",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(6,8,24,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "40px 20px",
          animation: "slideIn 0.3s ease-out",
        }}>
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => handleNavClick(s)}
              style={{
                background: activeSection === s ? "rgba(99,102,241,0.15)" : "transparent",
                border: activeSection === s ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                cursor: "pointer",
                color: activeSection === s ? "#a5b4fc" : "#94a3b8",
                fontSize: "clamp(20px, 4vw, 28px)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                textTransform: "capitalize",
                padding: "14px 32px",
                transition: "all 0.2s ease",
                width: "100%",
                maxWidth: "280px",
                textAlign: "center",
                borderRadius: "12px",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== s) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== s) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* CSS Styles */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger-button {
            display: flex !important;
          }
          .desktop-menu {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .hamburger-button {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Prevent body scroll when mobile menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}