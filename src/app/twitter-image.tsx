import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Henri Schulz Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0f172a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow blobs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: 200,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Chip icon (SVG) */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 72 72"
        fill="none"
        style={{ marginBottom: 32 }}
      >
        <rect
          x="18"
          y="18"
          width="36"
          height="36"
          rx="4"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="12"
          y1="24"
          x2="18"
          y2="24"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="12"
          y1="32"
          x2="18"
          y2="32"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="12"
          y1="40"
          x2="18"
          y2="40"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="12"
          y1="48"
          x2="18"
          y2="48"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="54"
          y1="24"
          x2="60"
          y2="24"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="54"
          y1="32"
          x2="60"
          y2="32"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="54"
          y1="40"
          x2="60"
          y2="40"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="54"
          y1="48"
          x2="60"
          y2="48"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <path
          d="M30 30 H36 A6 6 0 0 1 36 42 H30 Z"
          stroke="#22d3ee"
          stroke-width="2.5"
          fill="none"
        />
        <line
          x1="26"
          y1="33"
          x2="30"
          y2="33"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="26"
          y1="39"
          x2="30"
          y2="39"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
        <line
          x1="42"
          y1="36"
          x2="46"
          y2="36"
          stroke="#22d3ee"
          stroke-width="2.5"
        />
      </svg>

      {/* Name */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1,
          marginBottom: 16,
          letterSpacing: "-2px",
        }}
      >
        Henri Schulz
      </div>

      {/* Subtitle with cyan accent */}
      <div
        style={{
          fontSize: 28,
          color: "#22d3ee",
          marginBottom: 40,
          fontWeight: 500,
        }}
      >
        Electrical Engineering &amp; IT · KIT Karlsruhe
      </div>

      {/* Divider */}
      <div
        style={{
          width: 80,
          height: 3,
          background: "linear-gradient(90deg, #22d3ee, transparent)",
          marginBottom: 40,
          borderRadius: 2,
        }}
      />

      {/* Tech tags */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["Verilog", "ASIC Design", "TypeScript", "Next.js", "Python"].map(
          (tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.3)",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#94a3b8",
                fontSize: 18,
              }}
            >
              {tag}
            </div>
          ),
        )}
      </div>

      {/* Domain watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          right: 80,
          color: "#475569",
          fontSize: 20,
        }}
      >
        henrischulz.com
      </div>
    </div>,
    { ...size },
  );
}
