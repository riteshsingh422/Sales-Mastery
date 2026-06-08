import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 100,
        padding: scrolled ? "16px 20px" : "44px 20px 0px 20px",
        transition: "padding 0.3s ease",
        boxSizing: "border-box",
        pointerEvents: "none",
      }}
    >
      {/* Pill container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          display: "flex",
          flexDirection: "column",           // Changed to column for mobile
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 24px",
          borderRadius: "132px",
          border: "1.33px solid rgba(255,255,255,0.1)",
          background: "rgba(5, 1, 13, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxSizing: "border-box",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.6)" : "none",
          transition: "box-shadow 0.3s ease, height 0.3s ease",
          pointerEvents: "all",
        }}
        className="nav-pill"
      >
        {/* Main Row: Logo + Button */}
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <Logo />
          <EnrollButton />
        </div>

        {/* Nav Links - Shown on all screens, stacked on mobile */}
        <NavLinks />
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-pill {
            padding: 14px 20px !important;
            border-radius: 24px !important;   /* Slightly softer on mobile */
          }
          
          .nav-links {
            margin-top: 12px !important;
            gap: 16px !important;
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (min-width: 769px) {
          .nav-pill {
            flex-direction: row !important;
            height: 75px !important;
          }
          
          .nav-links {
            margin-top: 0 !important;
            width: auto !important;
          }
        }
      `}</style>
    </nav>
  );
}

/* ─── Logo ─────────────────────────────────────────── */
function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", flexShrink: 0 }}>
      <img
        src="/src/assets/Group.png"
        alt="Logo"
        style={{ width: "31px", height: "36px", objectFit: "contain", flexShrink: 0 }}
      />
      <span
        style={{
          color: "#FFFFFF",
          fontSize: "15px",
          fontWeight: "700",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.2px",
          whiteSpace: "nowrap",
        }}
      >
        Sales Mastery
      </span>
    </div>
  );
}

/* ─── Nav Links ─────────────────────────────────────── */
const links = ["Testimonials", "Pricing", "FAQs"];

function NavLinks() {
  return (
    <ul
      className="nav-links"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {links.map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.60)",
              fontSize: "14px",
              fontWeight: "500",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textDecoration: "none",
              transition: "color 0.2s ease",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.60)")}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ─── Enroll Button ─────────────────────────────────── */
function EnrollButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes rotateBorder {
          0%   { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          borderRadius: "47px",
          flexShrink: 0,
          padding: "2px",
          overflow: "hidden",
          width: "150px",
          height: "45px",
        }}
      >
        {/* Rotating conic gradient border */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "200%",
            height: "200%",
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #FF5C1A 280deg, #FF8C50 300deg, #FF5C1A 320deg, transparent 360deg)",
            animation: "rotateBorder 2.5s linear infinite",
            zIndex: 0,
          }}
        />

        {/* Inner button */}
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            borderRadius: "45px",
            border: "none",
            background: hovered ? "rgba(255,255,255,0.10)" : "rgba(5, 1, 13, 0.95)",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "background 0.2s ease",
            outline: "none",
            whiteSpace: "nowrap",
          }}
        >
          Enroll Now
          <span
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              lineHeight: 1,
              flexShrink: 0,
              transform: hovered ? "translateX(2px)" : "translateX(0)",
              transition: "transform 0.2s ease",
            }}
          >
          </span>
        </button>
      </div>
    </>
  );
}