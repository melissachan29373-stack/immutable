import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "immutable.events — Your Curated Gateway to Web3 Gaming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050510 0%, #0a0a2e 50%, #050510 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(6, 182, 212, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "30%",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.15)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#06b6d4",
            marginBottom: 20,
          }}
        >
          immutable.events
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 800,
            color: "#e4e4e7",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Your Gateway to the Next Wave of Web3 Gaming
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#a1a1aa",
            marginTop: 24,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Discover games, quests, and rewards through a curated community starting point
        </div>

        {/* Bottom badge */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            fontSize: 14,
            color: "#71717a",
          }}
        >
          Independent community page
        </div>
      </div>
    ),
    { ...size }
  );
}
