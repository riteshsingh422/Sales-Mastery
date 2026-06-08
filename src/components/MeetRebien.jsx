import RebienPhoto from "/src/assets/men.jpg";
import ViceLogo from "/src/assets/vice.png";
import AdLogo from "/src/assets/ad.png";
import FunxLogo from "/src/assets/fun.png";
import VideolandLogo from "/src/assets/vid.png";

export default function MeetRebien() {
  const brands = [
    { src: ViceLogo, alt: "Vice" },
    { src: AdLogo, alt: "AD" },
    { src: FunxLogo, alt: "FunX" },
    { src: VideolandLogo, alt: "Videoland" },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "#05010D",
        padding: "100px 20px 120px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Centered Title ── */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(28px, 5.5vw, 48px)",
            fontWeight: "800",
            color: "#FFFFFF",
            letterSpacing: "-1px",
            lineHeight: "1.15",
            margin: "0 0 14px",
          }}
        >
          Meet <span style={{ color: "#FF5C1A" }}>Rebien Ghazali</span> 👋
        </h2>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(14px, 2.8vw, 14.5px)",
            color: "rgba(255,255,255,0.5)",
            margin: 0,
          }}
        >
          Discover the Sales King Behind Sales Mastery
        </p>
      </div>

      {/* ── Two Column Layout ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="meet-rebien-grid"
      >
        {/* ── Left: Text + Brands ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14.5px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Rebien Ghazali, often hailed as the "Sales King," is a renowned
            figure in the world of sales and entrepreneurship. With a proven
            track record of success and an unparalleled passion for empowering
            others, Rebien is the driving force behind Sales Mastery.
          </p>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14.5px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Rebien's commitment to your success goes beyond the 21-day
            challenge. As your mentor, he will personally guide you through the
            intricacies of sales, providing mentorship, inspiration, and a
            roadmap to help you excel in your career.
          </p>

          {/* Brand Logos */}
          <div style={{ marginTop: "12px" }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "12px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.5px",
                marginBottom: "14px",
                textTransform: "uppercase",
              }}
            >
              Bekend van:
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                flexWrap: "wrap",
              }}
            >
              {brands.map((brand, i) => (
                <img
                  key={i}
                  src={brand.src}
                  alt={brand.alt}
                  style={{
                    height: "28px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.75,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div>
          <img
            src={RebienPhoto}
            alt="Rebien Ghazali"
            style={{
              width: "100%",
              maxWidth: "413.41px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "20px",
              display: "block",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .meet-rebien-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
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