import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yaara Consultancy Services — Accounting, Tax & Compliance for Founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (must be hardcoded — OG route can't read CSS vars at the edge)
const INK = "#0E2A47";
const INK_DARK = "#0B1F3A";
const GOLD = "#B8873B";
const GOLD_LIGHT = "#D4A855";
const PAPER = "#FAF7F1";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `radial-gradient(circle at 85% 15%, ${INK_DARK} 0%, ${INK} 55%, ${INK_DARK} 100%)`,
          padding: "72px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Subtle gold grain dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: `radial-gradient(${GOLD_LIGHT} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top row: monogram + tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: GOLD,
              color: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.04em",
            }}
          >
            Y
          </div>
          <div
            style={{
              color: PAPER,
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "Helvetica, Arial, sans-serif",
              opacity: 0.7,
            }}
          >
            Advise · Analyze · Achieve
          </div>
        </div>

        {/* Middle: main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              color: PAPER,
              fontSize: "68px",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              fontFamily: "Georgia, serif",
              maxWidth: "900px",
            }}
          >
            Accounting, tax & compliance — handled by a real person, not a portal.
          </div>
          <div
            style={{
              color: GOLD_LIGHT,
              fontSize: "26px",
              fontWeight: 400,
              fontFamily: "Helvetica, Arial, sans-serif",
              opacity: 0.95,
            }}
          >
            GST · ITR · TDS · ROC · Bookkeeping · Payroll · Advisory
          </div>
        </div>

        {/* Bottom row: founder + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${GOLD}55`,
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                color: GOLD_LIGHT,
                fontSize: "18px",
                fontFamily: "Helvetica, Arial, sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              Managing Partner &amp; Business Setup Specialist
            </div>
            <div
              style={{
                color: PAPER,
                fontSize: "30px",
                fontWeight: 500,
                fontFamily: "Georgia, serif",
              }}
            >
              Anakali Pawan Kalyan
            </div>
          </div>
          <div
            style={{
              color: PAPER,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              opacity: 0.7,
              textAlign: "right",
            }}
          >
            yaaraconsultancyservices.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
