import BackgroundImg from "/src/assets/curriculum-bg.png";
import BubbleBg from "/src/assets/background2.png";
import YourJourneyImg from "/src/assets/yourjourney.png";
import video1 from "/src/assets/video1.mp4";
import video2 from "/src/assets/video2.mp4";
import heroVideo from "/src/assets/hero-video.mp4";

const cardStyle = {
  width: "100%",
  maxWidth: "1040px",
  margin: "0 auto",
  minHeight: "150px",
  borderRadius: "13.68px",
  border: "1px solid rgba(255,92,26,0.25)",
  padding: "28px 56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  background: "rgba(255,255,255,0.04)",
  boxSizing: "border-box",
  backgroundColor: "rgba(5, 1, 13, 1)",
};

const textBlockStyle = {
  flex: 1,
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const dayLabelStyle = {
  color: "#FF5C1A",
  fontSize: "13px",
  fontWeight: "600",
};

const titleStyle = {
  color: "#fff",
  fontSize: "22px",
  fontWeight: "700",
  margin: 0,
  lineHeight: "1.25",
};

const descStyle = {
  color: "rgba(255,255,255,0.65)",
  lineHeight: "1.6",
  fontSize: "13.5px",
  margin: 0,
};

const videoWrapStyle = {
  width: "220px",
  height: "150px",
  borderRadius: "12px",
  overflow: "hidden",
  flexShrink: 0,
  position: "relative",
  background: "#1a1a2e",
};

const playBtnStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(10px)",
  border: "2.5px solid rgba(255,255,255,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  color: "#fff",
};

const cards = [
  {
    day: "Day 9-10",
    title: "Capturing Attention and Building Authority",
    desc: "Learn to grab attention instantly and establish yourself as an authoritative figure in sales.",
    video: video1,
  },
  {
    day: "Day 11",
    title: "Mastering the Opening",
    desc: "Perfect your opening lines and set the tone for productive, engaging sales conversations.",
    video: video2,
  },
  {
    day: "Day 12-15",
    title: "Uncovering Interest, Needs, and Pain Points",
    desc: "Explore techniques to identify and address the unique interests, needs, and pain points of your prospects.",
    video: heroVideo,
  },
  {
    day: "Day 16-17",
    title: "Being the Solution to Their Problem",
    desc: "Craft compelling solutions that resonate with your audience's desires and aspirations.",
    video: video1,
  },
  {
    day: "Day 18-19",
    title: "The Art of Closing",
    desc: "Master the fine art of closing deals with confidence and finesse.",
    video: video2,
  },
  {
    day: "Day 20-21",
    title: "Payment Details and Follow-Up Strategies",
    desc: "Navigate the crucial final days, understanding payment processes, and implementing effective follow-up strategies for sustained success.",
    video: heroVideo,
  },
];

function VideoCard({ video }) {
  return (
    <div style={videoWrapStyle}>
      <video
        src={video}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        muted
        playsInline
      />
      <div style={playBtnStyle}>▶</div>
    </div>
  );
}

export default function Curriculum() {
  const firstThree = cards.slice(0, 3);
  const lastThree = cards.slice(3);

  return (
    <>
      {/* ── Section 1: dark bg, header + journey image + first 3 cards ── */}
      <section
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          padding: "100px 20px 0px",
          background: "#05010D",
        }}
      >
        {/* Background Image */}
        <img
          src={BackgroundImg}
          alt=""
          style={{
            position: "absolute",
            top: "-13.89px",
            left: "-7.24px",
            width: "1447px",
            height: "2040px",
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "90px" }}>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(28px, 5.5vw, 54px)",
                fontWeight: "800",
                lineHeight: "1.12",
                letterSpacing: "-1.3px",
                color: "#FFFFFF",
              }}
            >
              Your Journey to{" "}
              <span style={{ color: "#FF5C1A" }}>Sales Mastery</span> Unveiled
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(14px, 2.5vw, 15.5px)",
                maxWidth: "680px",
                margin: "20px auto 0",
                lineHeight: "1.65",
              }}
            >
              Embark on this comprehensive 21-day journey where each day is
              strategically crafted to elevate your sales skills, from mindset
              transformation to mastering the art of closing and beyond. Your
              path to sales mastery starts here.
            </p>
          </div>

          {/* Journey Image + Vertical Line */}
          <div style={{ position: "relative", marginBottom: "60px" }}>
            <div
              style={{
                position: "absolute",
                top: "59px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "4px",
                height: "100%",
                background: "rgba(255, 92, 26, 0.9)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                zIndex: 3,
                paddingBottom: "60px",
              }}
            >
              <img
                src={YourJourneyImg}
                alt="Your Journey to Sales Mastery"
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>

          {/* First 3 Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {firstThree.map((card, i) => (
              <div 
                key={i} 
                style={{
                  ...cardStyle,
                  padding: "24px 20px",
                  flexDirection: "column",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
                className="responsive-card"
              >
                <div style={textBlockStyle}>
                  <span style={dayLabelStyle}>{card.day}</span>
                  <h3 style={titleStyle}>{card.title}</h3>
                  <p style={descStyle}>{card.desc}</p>
                </div>
                <VideoCard video={card.video} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: bubblebg, last 3 cards ── */}
      <section
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          padding: "0px 20px 120px",
          background: "#05010D",
        }}
      >
        {/* Bubble Background Image */}
        <img
          src={BubbleBg}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
            objectFit: "cover",
          }}
        />

        {/* Dark overlay so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(5, 1, 13, 0.55)",
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
          {/* Last 3 Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "24px" }}>
            {lastThree.map((card, i) => (
              <div 
                key={i} 
                style={{
                  ...cardStyle,
                  padding: "24px 20px",
                  flexDirection: "column",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
                className="responsive-card"
              >
                <div style={textBlockStyle}>
                  <span style={dayLabelStyle}>{card.day}</span>
                  <h3 style={titleStyle}>{card.title}</h3>
                  <p style={descStyle}>{card.desc}</p>
                </div>
                <VideoCard video={card.video} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .responsive-card {
            padding: 28px 56px !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .responsive-card {
            padding: 20px 16px !important;
          }
        }

        @media (min-width: 1024px) {
          section {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }
      `}</style>
    </>
  );
}