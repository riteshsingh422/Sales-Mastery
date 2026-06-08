import { useState } from "react";
import PricingBg from "/src/assets/tailbg.png";
import FrameImg from "/src/assets/Frame.png";

export default function Pricing() {
  const [hovered, setHovered] = useState(false);

  const features = [
    "21-Day Challenge Access",
    "Elite Training by Rebien Ghazali",
    "Free Call to Join",
    "Community Support",
    "Bonus: 1-on-1 Coaching Session",
    "Enhanced Job Placement Opportunities",
    "Commission Tracking Features",
    "Airtable CRM System Integration",
    "30-Day Post-Challenge Mentorship",
    "VIP Networking Opportunities",
  ];

  return (
    <section
      id="pricing"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "100px 20px 120px",
        background: "#05010D",
        boxSizing: "border-box",
      }}
    >
      {/* Background Image */}
      <img
        src={PricingBg}
        alt=""
        style={{
          position: "absolute",
          top: "-14px",
          left: "-63px",
          width: "1503px",
          height: "2040px",
          opacity: 1,
          zIndex: 1,
          pointerEvents: "none",
          objectFit: "contain",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5,1,13,0.55)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          margin: "0 auto",
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 5.5vw, 52px)",
              fontWeight: "800",
              color: "#FFFFFF",
              letterSpacing: "-1px",
              lineHeight: "1.15",
              margin: "0 0 14px",
            }}
          >
            <span style={{ color: "#FF5C1A" }}>Tailored Packages</span> to Elevate
            <br />Your Sales Journey
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(13.5px, 2.8vw, 14px)",
              color: "rgba(255,255,255,0.50)",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            Explore Exclusive Sales Mastery Packages for Every Aspiring Sales Professional
          </p>
        </div>

        {/* ── Responsive Card ── */}
        <div
          className="pricing-card"
          style={{
            width: "100%",
            maxWidth: "767px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Left Side */}
          <div
            className="pricing-left"
            style={{
              width: "349px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "40px 32px 32px 40px",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.55)",
                margin: 0,
              }}
            >
              Elite
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "rgba(255,255,255,0.85)",
                    marginTop: "12px",
                  }}
                >
                  €
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(60px, 8vw, 80px)",
                    fontWeight: "800",
                    color: "#FFFFFF",
                    lineHeight: "1",
                    letterSpacing: "-4px",
                  }}
                >
                  500
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.40)",
                    marginTop: "16px",
                    textDecoration: "line-through",
                  }}
                >
                  $999
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "12.5px",
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                }}
              >
                One-time, 50% off
              </p>

              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  alignSelf: "flex-start",
                  padding: "13px 28px",
                  borderRadius: "100px",
                  border: "2px solid #FF5C1A",
                  background: hovered ? "rgba(255,92,26,0.15)" : "transparent",
                  color: "#FF5C1A",
                  fontSize: "13px",
                  fontWeight: "700",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                }}
              >
                APPLY TO JOIN →
              </button>
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              Everything you need to land your first high-income sales role in just 21 days.
            </p>
          </div>

          {/* Vertical Divider */}
          <div
            className="pricing-divider"
            style={{
              width: "1px",
              background: "rgba(255,255,255,0.10)",
              flexShrink: 0,
            }}
          />

          {/* Right: Features */}
          <div
            className="pricing-right"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "16px",
              padding: "32px 36px",
              boxSizing: "border-box",
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#FF5C1A",
                    fontSize: "15px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: "1.4",
                  }}
                >
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-card {
            flex-direction: column !important;
            max-width: 100% !important;
            height: auto !important;
          }
          
          .pricing-left {
            width: 100% !important;
            padding: 32px 24px !important;
          }
          
          .pricing-divider {
            display: none !important;
          }
          
          .pricing-right {
            padding: 0 24px 32px !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: "80px 16px 100px !important";
          }
        }

        @media (min-width: 1024px) {
          section {
            padding: "100px 40px 120px !important";
          }
        }
      `}</style>
    </section>
  );
}

/* ── Winners Circle Section (already responsive) ── */
export function WinnersCircle() {
  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "100px 20px 80px",
        background: "#05010D",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: "800",
            color: "#FFFFFF",
            letterSpacing: "-1px",
            lineHeight: "1.15",
            margin: "0 0 14px",
          }}
        >
          <span style={{ color: "#FF5C1A" }}>Join</span> the Winners' Circle
        </h2>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(14px, 2.8vw, 14.5px)",
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            lineHeight: "1.65",
          }}
        >
          Guarantee your first sales job and revel in the victory of earning
          <br />within just 21 days.
        </p>
      </div>

      {/* Frame Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          marginBottom: "52px",
        }}
      >
        <img
          src={FrameImg}
          alt="Winners Circle"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* CTA Button */}
      <button
        style={{
          padding: "16px 40px",
          borderRadius: "100px",
          border: "none",
          background: "#FF5C1A",
          color: "#FFFFFF",
          fontSize: "15px",
          fontWeight: "700",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          cursor: "pointer",
          letterSpacing: "0.3px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#e84e10";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,92,26,0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#FF5C1A";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Join the Challenge Now →
      </button>
    </section>
  );
}