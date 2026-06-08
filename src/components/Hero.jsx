import { useState, useEffect, useRef } from "react";
import starsImg from "../assets/Stars.png";

/* ─── Helpers ──────────────────────────────────────── */
function useCountUp(target, duration = 2000, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return inView;
}

/* ─── Main Component ───────────────────────────────── */
export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(ellipse 90% 55% at 50% 18%, rgba(140,42,0,0.35) 0%, rgba(80,18,0,0.20) 28%, rgba(15,3,3,0.60) 58%, #05010D 78%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(100px, 14vw, 160px)",
      }}>
        {/* Star */}
        <img
          src={starsImg}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            height: "617.9px",
            objectFit: "cover",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Grid / Line */}
        <img
          src="/src/assets/Grid.png"
          alt=""
          style={{
            position: "absolute",
            top: "85px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1280px",
            zIndex: 1,
            opacity: 0.85,
            pointerEvents: "none",
          }}
        />

        {/* Soft Eclipse Glow */}
        <div style={{
          position: "absolute",
          top: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "680px",
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,110,20,0.65) 0%, rgba(200,60,5,0.40) 35%, rgba(120,20,0,0.15) 60%, transparent 78%)",
          filter: "blur(35px)",
          zIndex: 1,
          pointerEvents: "none",
        }} />

        {/* Second Glow Layer */}
        <div style={{
          position: "absolute",
          top: "240px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "780px",
          height: "520px",
          background: "radial-gradient(ellipse at center, rgba(255, 140, 50, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 1,
          pointerEvents: "none",
        }} />

        <div style={{
          width: "100%",
          maxWidth: "1040px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          padding: "0 16px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}>
          <LimitedSeatsBadge />
          <Headline />
          <p style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "15px",
            fontWeight: "400",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textAlign: "center",
            lineHeight: "1.65",
            maxWidth: "460px",
            margin: 0,
          }}>
            Discover Elite Sales Strategies, Transform Your Mindset, and
            Make Every Moment Count in Your Path to Sales Mastery!
          </p>

          <Stats />
          <CTAButtons onWatchDemo={() => setLightboxOpen(true)} />
          <VideoBlock onOpen={() => setLightboxOpen(true)} />
        </div>
      </section>

      {lightboxOpen && <Lightbox onClose={() => setLightboxOpen(false)} />}
    </>
  );
}

function LimitedSeatsBadge() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: "6px 14px", borderRadius: "100px",
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(8px)",
    }}>
      <span style={{ fontSize: "11px", color: "#FF5C1A" }}>⚡</span>
      <span style={{
        color: "rgba(255,255,255,0.80)", fontSize: "12px", fontWeight: "500",
        fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.3px",
      }}>Limited Seats</span>
    </div>
  );
}

function Headline() {
  return (
    <h1 style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: "clamp(36px, 5.5vw, 68px)",
      fontWeight: "800",
      lineHeight: "1.12",
      textAlign: "center",
      color: "#FFFFFF",
      margin: 0,
      maxWidth: "820px",
      letterSpacing: "-1.5px",
    }}>
      Guarantee your first sales<br />
      job and <span style={{ color: "#FF6229" }}>start earning</span> hard<br />
      earned cash in <span style={{ color: "#FF6229" }}>21 days.</span>
    </h1>
  );
}

const statData = [
  { prefix: "+", target: 200,       suffix: "",  label: "Active users" },
  { prefix: "+", target: 10000,     suffix: "$", label: "Avg. profit p/m per client" },
  { prefix: "+", target: 1200000,   suffix: "$", label: "Total capital" },
];

function formatNum(n, suffix) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M" + suffix;
  if (n >= 10000)   return (n / 1000).toFixed(0) + "K" + suffix;
  return n.toLocaleString() + suffix;
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.target, 2200, started);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "default" }}
    >
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "26px", fontWeight: "800",
        color: "#FFFFFF", letterSpacing: "-0.5px",
        fontVariantNumeric: "tabular-nums",
      }}>
        {stat.prefix}{formatNum(count, stat.suffix)}
      </span>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "12px", fontWeight: "400",
          color: hovered ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.45)",
          textAlign: "center", maxWidth: "120px", lineHeight: "1.4",
          transition: "color 0.2s ease",
        }}>
          {stat.label}
        </span>
        <div style={{
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(90deg, #3B6FFF, #6B9FFF)",
          borderRadius: "2px",
          transition: hovered
            ? "width 0.45s cubic-bezier(0.4,0,0.2,1)"
            : "width 0.3s cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>
    </div>
  );
}

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "clamp(20px, 5vw, 56px)",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {statData.map((s, i) => (
        <StatItem key={i} stat={s} started={inView} />
      ))}
    </div>
  );
}

function CTAButtons({ onWatchDemo }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      <button
        onMouseEnter={() => setHovered("join")}
        onMouseLeave={() => setHovered(null)}
        style={{
          height: "48px", padding: "0 24px", borderRadius: "100px",
          border: "none", background: "#FF6229",
          color: "#FFF", fontSize: "14px", fontWeight: "600",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
          transition: "all 0.2s ease",
          boxShadow: hovered === "join" ? "0 6px 24px rgba(255,98,41,0.55)" : "0 4px 16px rgba(255,98,41,0.35)",
          transform: hovered === "join" ? "translateY(-1px)" : "none",
        }}>
        Join the Challenge Now <span>→</span>
      </button>

      <button
        onClick={onWatchDemo}
        onMouseEnter={() => setHovered("demo")}
        onMouseLeave={() => setHovered(null)}
        style={{
          height: "48px", padding: "0 20px", borderRadius: "100px",
          border: "none", background: "transparent",
          fontSize: "14px", fontWeight: "600",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          cursor: "pointer", display: "flex", alignItems: "center", gap: "10px",
          transition: "all 0.2s ease",
          opacity: hovered === "demo" ? 1 : 0.9,
        }}>
        <span style={{
          width: "32px", height: "32px", borderRadius: "50%",
          border: "2px solid #FF6229",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", background: "rgba(255,98,41,0.12)",
          color: "#FF6229",
        }}>▶</span>
        <span style={{
          background: "linear-gradient(90deg, #FFC446, #FF6229)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Watch Demo</span>
      </button>
    </div>
  );
}

function VideoBlock({ onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%", maxWidth: "1040px", height: "clamp(200px, 45vw, 526px)",
        borderRadius: "24px", overflow: "hidden",
        position: "relative", background: "#0D0A14",
        cursor: "pointer",
        boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        transform: hovered ? "scale(1.005)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}>
      <video
        src="/src/assets/hero-video.mp4"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        muted preload="metadata"
      />

      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.40)",
        transition: "background 0.3s ease",
      }} />

      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: `translate(-50%, -50%) scale(${hovered ? 1.08 : 1})`,
        transition: "transform 0.3s ease",
        width: "72px", height: "72px", borderRadius: "50%",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(255,255,255,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "22px", color: "#fff",
      }}>▶</div>
    </div>
  );
}

function Lightbox({ onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play();
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "1000px",
          borderRadius: "20px", overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
          background: "#000",
        }}>
        <video
          ref={videoRef}
          src="/src/assets/hero-video.mp4"
          controls
          style={{ width: "100%", display: "block", maxHeight: "80vh" }}
        />
      </div>

      <button
        onClick={onClose}
        style={{
          position: "fixed", top: "20px", right: "24px",
          width: "44px", height: "44px", borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff", fontSize: "20px",
          cursor: "pointer",
        }}
      >✕</button>
    </div>
  );
}