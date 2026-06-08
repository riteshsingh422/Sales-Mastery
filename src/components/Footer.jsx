import { useState } from "react";
import GroupLogo from "/src/assets/Group1.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ─────────────────────────────────────────
          ORANGE CTA + FOOTER — single orange block
      ───────────────────────────────────────── */}
      <section
        style={{
          width: "100%",
          background: "#F05A28",
          boxSizing: "border-box",
          borderRadius: "20px 20px 0 0",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* ── CTA AREA ── */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            padding: "80px 20px 60px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="cta-area"
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}>
            <img src={GroupLogo} alt="Logo" style={{ width: "31px", height: "36px", objectFit: "contain" }} />
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "700",
              fontSize: "18px",
              color: "#fff",
              letterSpacing: "-0.3px",
            }}>
              Sales Mastery
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: "700",
            fontSize: "clamp(42px, 6.5vw, 66px)",
            lineHeight: "1.15",
            letterSpacing: "-1.39px",
            textAlign: "center",
            color: "#fff",
            margin: "0 0 20px",
          }}>
            Sign up for 21days<br />Sales Challenge!
          </h2>

          {/* Subtext */}
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: "600",
            fontSize: "clamp(16px, 3.5vw, 20px)",
            lineHeight: "1.6",
            letterSpacing: "-0.23px",
            textAlign: "center",
            color: "rgba(255,255,255,0.78)",
            margin: "0 0 40px",
            maxWidth: "720px",
          }}>
            Revolutionise Your Approach to Cold Calling and<br />
            Unlock Your Sales Potential
          </p>

          {/* Enroll Now */}
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            padding: "14px 28px",
            fontSize: "15px",
            fontWeight: "600",
            fontFamily: "'Raleway', sans-serif",
            cursor: "pointer",
            marginBottom: "64px",
          }}>
            Enroll Now
            <span style={{
              background: "rgba(255,255,255,0.18)",
              borderRadius: "50%",
              width: "24px", height: "24px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "13px",
            }}>›</span>
          </button>

          {/* Divider */}
          <div style={{
            width: "100%",
            maxWidth: "800px",
            height: "1px",
            background: "rgba(255,255,255,0.22)",
          }} />
        </div>

        {/* ── FOOTER ROW ── */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            padding: "48px 20px 0",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
          }}
          className="footer-row"
        >
          {/* LEFT — Sales Mastery title + links */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0px",
            minWidth: "160px",
          }}>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "700",
              fontSize: "28px",
              lineHeight: "36px",
              letterSpacing: "-0.3px",
              color: "#fff",
              marginBottom: "24px",
            }}>
              Sales Mastery
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Features", "Testimonials", "How To Participate?", "Our Packages", "FAQ"].map((l) => (
                <a key={l} href="#" style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  textAlign: "left",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* RIGHT — email input + logo + email addr + copyright + socials */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
            minWidth: "380px",
          }}
          className="footer-right"
          >
            {/* Email pill */}
            <div style={{
              display: "flex",
              width: "100%",
              maxWidth: "426px",
              height: "66px",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.10)",
              boxSizing: "border-box",
              alignItems: "center",
              padding: "5px 5px 5px 20px",
            }}>
              <input
                type="email"
                placeholder="Lorem@e-mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "'Raleway', sans-serif",
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <button style={{
                background: "#111",
                border: "none",
                borderRadius: "100px",
                padding: "0 24px",
                height: "54px",
                cursor: "pointer",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Raleway', sans-serif",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                Sign Up Now
              </button>
            </div>

            {/* Logo row */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={GroupLogo} alt="Logo" style={{ width: "31px", height: "36px", objectFit: "contain" }} />
              <span style={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: "'Raleway', sans-serif",
              }}>
                Sales Mastery
              </span>
            </div>

            {/* Email address */}
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              textAlign: "right",
            }}>
              Loremipsum@gmail.com
            </p>

            {/* Copyright */}
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              textAlign: "right",
            }}>
              2024 Sales Mastery · Alle Right Reserved
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                <svg key="tg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21.95 5.005l-3.306 15.594c-.249 1.101-.896 1.376-1.816.856l-5.013-3.69-2.42 2.33c-.268.268-.492.492-.999.492l.356-5.11 9.285-8.387c.404-.358-.088-.557-.622-.199L6.394 14.3l-4.935-1.547c-1.073-.336-1.094-1.073.226-1.594l19.27-7.43c.894-.336 1.676.199 1.995 1.276z" fill="currentColor"/>
                </svg>,
                <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>,
                <svg key="tw" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>,
              ].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: "40px", height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.30)",
                  background: "rgba(255,255,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.90)",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; }}
                >{icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "24px 20px 40px",
          boxSizing: "border-box",
          marginTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.18)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Terms & Conditions", "Privacy Policy"].map((t) => (
              <a key={t} href="#" style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
              }}>{t}</a>
            ))}
          </div>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.65)",
            margin: 0,
          }}>
            2024 Sales Mastery · Alle Right Reserved
          </p>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 48px !important;
          }
          
          .footer-right {
            align-items: center !important;
            min-width: auto !important;
          }
          
          .footer-right p {
            text-align: center !important;
          }
          
          .cta-area {
            padding: 60px 16px 40px !important;
          }
        }

        @media (max-width: 480px) {
          .cta-area {
            padding: "50px 16px 40px !important";
          }
        }

        @media (min-width: 1024px) {
          section {
            max-width: 1440px !important;
          }
        }
      `}</style>
    </>
  );
}