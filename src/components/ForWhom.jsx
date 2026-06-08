import { useState, useEffect } from "react";
import BackgroundImg from "/src/assets/bubble.png";
import circleImg from "/src/assets/circle.png";
import icon1 from "/src/assets/icon1.png";
import icon2 from "/src/assets/icon2.png";
import icon3 from "/src/assets/icon3.png";
import video1 from "/src/assets/video1.mp4";
import video2 from "/src/assets/video2.mp4";
import heroVideo from "/src/assets/hero-video.mp4";

export default function ForWhom() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const features = [
    {
      icon: icon1,
      title: "Exclusive Access to Elite Training by Rebien Ghazali",
      desc: "Immerse yourself in top-notch training curated by Rebien Ghazali, the Sales King himself. Gain insights, techniques, and proven strategies that guarantee success in the competitive world of sales.",
    },
    {
      icon: icon2,
      title: "Secure your future with a guaranteed, High-Income sales job",
      desc: "Upon course completion, land a high-paying sales job at a prestigious Dutch agency. We don't just train you; we ensure your success by providing real job opportunities in your desired field.",
    },
    {
      icon: icon3,
      title: "Stay Motivated and Connected through our Community",
      desc: "Foster a sense of community. Join forces with like-minded individuals, share experiences, and receive ongoing support to guarantee your success.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "80px 20px 100px" : "120px 40px 140px",
        minHeight: isMobile ? "auto" : "1740px",
      }}
    >
      {/* Background Image */}
      <img
        src={BackgroundImg}
        alt=""
        style={{
          position: "absolute",
          top: "-0.89px",
          left: "-0.24px",
          width: isMobile ? "100%" : "1440px",
          height: isMobile ? "100%" : "1737px",
          opacity: 1,
          zIndex: 1,
          pointerEvents: "none",
          objectFit: "cover",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5, 1, 13, 0.78)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1140px",
          margin: "0 auto",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            gap: isMobile ? "40px" : "60px",
            flexWrap: "wrap",
            marginBottom: isMobile ? "48px" : "80px",
          }}
        >
          <div style={{ maxWidth: isMobile ? "100%" : "560px", width: "100%" }}>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: isMobile ? "clamp(28px, 7vw, 40px)" : "48px",
                fontWeight: "700",
                lineHeight: isMobile ? "1.25" : "56px",
                letterSpacing: "-1px",
                color: "#FFFFFF",
                width: "100%",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Revolutionise Your Approach to Cold Calling and Get Closer to Your{" "}
              <span style={{ color: "#FF5C1A" }}>
                Dream Career and Financial Freedom!
              </span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "15.5px",
                lineHeight: "1.65",
                marginTop: "24px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Embark on a transformative 21 day journey and discover the secrets
              to effective communication.
            </p>
            <div style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
              <button
                style={{
                  width: "202px",
                  height: "48px",
                  borderRadius: "35px",
                  border: "1.45px solid rgba(255,255,255,0.15)",
                  padding: "12px 20px",
                  marginTop: "24px",
                  background: "#FF5C1A",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Book a Free Call →
              </button>
            </div>
          </div>

          {/* Avatar Cluster — hidden on mobile or shown smaller */}
          {!isMobile && (
            <div
              style={{
                width: "420px",
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-80px",
              }}
            >
              <img
                src={circleImg}
                alt="Circle"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  height: "auto",
                  objectFit: "contain",
                  marginTop: "72px",
                }}
              />
            </div>
          )}

          {isMobile && (
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <img
                src={circleImg}
                alt="Circle"
                style={{
                  width: "80%",
                  maxWidth: "300px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
            marginBottom: isMobile ? "60px" : "100px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "10px",
                padding: isMobile ? "28px 20px" : "36px 28px",
              }}
            >
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={f.icon}
                  alt={f.title}
                  style={{ width: "72px", height: "72px", objectFit: "contain" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  lineHeight: "1.35",
                  marginBottom: "14px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: "1.65",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <SuccessStories isMobile={isMobile} />
      </div>
    </section>
  );
}

/* ─── helpers ─── */
const CARD_WIDTH_DESKTOP = 380;
const CARD_WIDTH_MOBILE = 280;
const CARD_GAP = 24;

function getOffset(i, center, total) {
  let offset = i - center;
  if (offset > Math.floor(total / 2)) offset -= total;
  if (offset < -Math.floor(total / 2)) offset += total;
  return offset;
}

/* ─── SuccessStories ─── */
function SuccessStories({ isMobile }) {
  const CARD_WIDTH = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const STEP = CARD_WIDTH + CARD_GAP;

  const videos = [
  video1,
  video2,
  heroVideo,
];
  const total = videos.length;

  const [centerIndex, setCenterIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [shift, setShift] = useState(0);

  const animate = (direction) => {
    if (animating) return;
    setAnimating(true);
    setShift(direction === "next" ? -STEP : STEP);
    setTimeout(() => {
      setCenterIndex((prev) =>
        direction === "next" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setShift(0);
      setAnimating(false);
    }, 420);
  };

  // swipe support
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) animate(diff > 0 ? "next" : "prev");
    setTouchStart(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(32px, 5vw, 52px)",
          fontWeight: "800",
          lineHeight: "1.12",
          letterSpacing: "-1.2px",
          color: "#FFFFFF",
          marginBottom: isMobile ? "40px" : "72px",
        }}
      >
        Success Stories that{" "}
        <span style={{ color: "#FF5C1A" }}>Speak Volumes</span>
      </h2>

      {/* Cards */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          height: isMobile ? "360px" : "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {videos.map((src, i) => {
          const offset = getOffset(i, centerIndex, total);
          const isCenter = offset === 0;
          const translateX = offset * STEP + shift;
          const scale = isCenter ? 1.06 : 0.88;
          const opacity = Math.abs(offset) > 1 ? 0 : isCenter ? 1 : isMobile ? 0 : 0.55;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: `${CARD_WIDTH}px`,
                height: isMobile ? "320px" : "480px",
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity,
                transition: animating
                  ? "transform 0.42s cubic-bezier(0.22,1,0.36,1), opacity 0.42s ease"
                  : "none",
                zIndex: isCenter ? 2 : 1,
                pointerEvents: isCenter ? "auto" : "none",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  border: isCenter
                    ? "2px solid rgba(255,92,26,0.45)"
                    : "2px solid transparent",
                  transition: "border 0.42s ease",
                }}
              >
                <video
                  src={src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isMobile ? "52px" : "70px",
                    height: isMobile ? "52px" : "70px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "2px solid rgba(255,255,255,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? "18px" : "26px",
                    color: "#fff",
                    pointerEvents: "none",
                  }}
                >
                  ▶
                </div>
                {!isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.35)",
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "10px", marginTop: "28px", justifyContent: "center", alignItems: "center" }}>
        {videos.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === centerIndex ? "28px" : "8px",
              height: "8px",
              borderRadius: "99px",
              background: i === centerIndex ? "#FF5C1A" : "rgba(255,255,255,0.25)",
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <div style={{ display: "flex", gap: "16px", marginTop: "28px", justifyContent: "center" }}>
        {["prev", "next"].map((dir) => (
          <button
            key={dir}
            onClick={() => animate(dir)}
            disabled={animating}
            style={{
              width: isMobile ? "44px" : "52px",
              height: isMobile ? "44px" : "52px",
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              fontSize: isMobile ? "16px" : "20px",
              cursor: animating ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, border 0.2s",
              outline: "none",
              fontFamily: "sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,92,26,0.2)";
              e.currentTarget.style.border = "1.5px solid rgba(255,92,26,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.border = "1.5px solid rgba(255,255,255,0.2)";
            }}
          >
            {dir === "prev" ? "←" : "→"}
          </button>
        ))}
      </div>
    </div>
  );
}