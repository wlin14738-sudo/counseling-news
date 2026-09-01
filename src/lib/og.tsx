import { ImageResponse } from "next/og";

export function createOgImage({ tagline }: { tagline: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 60%,#0ea5e9 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 3 }}>
          GLOBAL COUNSELING
        </div>
        <div style={{ display: "flex", fontSize: 62, fontWeight: 700, maxWidth: 1000 }}>
          Counseling &amp; Mental Health News
        </div>
        <div style={{ display: "flex", fontSize: 28, opacity: 0.88 }}>
          {tagline}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
