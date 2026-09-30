import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Branded Open Graph card: navy background, six rising bars, headline. */
export function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const bars = [0.26, 0.4, 0.54, 0.68, 0.82, 1];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#060a1f",
          color: "white",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#3a5cff", display: "flex" }} />
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>CertRamp Learning</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, color: "#9dafff", textTransform: "uppercase", letterSpacing: 4, fontWeight: 600 }}>
              {eyebrow}
            </div>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, marginTop: 18, letterSpacing: -2 }}>{title}</div>
            <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 22 }}>{subtitle}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginLeft: "auto", height: 486 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 40,
                height: 380 * h,
                borderRadius: 12,
                background: i === 5 ? "#ffffff" : i === 3 ? "#3a5cff" : i === 4 ? "#6b84ff" : "rgba(58,92,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
