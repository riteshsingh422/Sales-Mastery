import { useState } from "react";
import FooterBg from "/src/assets/faqbg.png";

const faqs = [
  {
    q: "What makes Sales Mastery different from other sales courses?",
    a: "Sales Mastery is built around real-world results, not theory. You get direct access to Rebien Ghazali, proven scripts, live Q&A, and actual job placement assistance — all in just 21 days.",
  },
  {
    q: "How does the 21-day challenge work?",
    a: "Each day is a structured lesson that builds on the previous one. You progress from mindset and psychology to cold calling, closing, and follow-up — becoming job-ready by day 21.",
  },
  {
    q: "Is there a guarantee for job placement?",
    a: "While we can't legally guarantee employment, our students have an outstanding track record. We provide full job placement assistance and our curriculum is designed around what employers are actually looking for.",
  },
  {
    q: "What if I have no prior sales experience?",
    a: "No experience needed. The program is specifically designed for beginners. Rebien built the curriculum from the ground up to take anyone — regardless of background — to a professional sales level.",
  },
  {
    q: "Can I join Sales Mastery if I'm not located in the Netherlands?",
    a: "Absolutely! The program is fully online and accessible worldwide. Students from across Europe, the Middle East, and beyond have successfully completed the challenge.",
  },
  {
    q: "How do I get started with Sales Mastery?",
    a: "Simply click 'Enroll Now', complete the secure checkout, and you'll get instant access to the program dashboard with all materials and your community invite.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faqs"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "100px 40px 120px",
        background: "#05010D",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <img
        src={FooterBg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 1,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5,1,13,0.45)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: "800",
              color: "#FFFFFF",
              letterSpacing: "-1px",
              lineHeight: "1.15",
              margin: "0 0 12px",
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "#FF5C1A" }}>Questions</span>
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.50)",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Discover In-Depth Answers to Your Queries About Sales Mastery
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border 0.2s ease, background 0.2s ease",
              }}
            >
              {/* Question row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 20px",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14.5px",
                    fontWeight: "500",
                    color: "#FFFFFF",
                    lineHeight: "1.4",
                  }}
                >
                  {faq.q}
                </span>

                {/* Icon — 2×2 grid squares like in the design */}
                <img
                  src="/src/assets/Group.png"
                  alt=""
                  style={{ width: "32px", height: "32px", objectFit: "contain", flexShrink: 0 }}
                />
              </div>

              {/* Answer */}
              {open === i && (
                <div style={{ padding: "0 20px 18px" }}>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "13.5px",
                      color: "rgba(255,255,255,0.58)",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}