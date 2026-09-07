import { ImageResponse } from "next/og";
import { iris } from "@/content/demo-tokens";
import { APP_NAME } from "@/lib/config";

export const alt =
  "CSS Variables Assistant - Know your tokens. Keep your flow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "58px 70px",
          background: "#faf9f9",
          color: "#1f2020",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 21,
          }}
        >
          <div
            style={{
              background: "#1b1c20",
              color: "#fff",
              width: 42,
              height: 42,
              borderRadius: 9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            {"{--}"}
          </div>
          {APP_NAME}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 54,
            fontSize: 80,
            lineHeight: 1.05,
            letterSpacing: -5,
          }}
        >
          <span>Know your tokens.</span>
          <span style={{ color: "#646565" }}>Keep your flow.</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 42,
            background: "#1b1c20",
            color: "#e8e8ed",
            borderRadius: 14,
            padding: "30px 36px",
            fontSize: 24,
          }}
        >
          <span>background: var(--brand-iris);</span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 33,
                height: 33,
                borderRadius: 6,
                background: iris.value,
              }}
            />
            <span>{iris.value}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 28,
            fontSize: 17,
            color: "#646565",
          }}
        >
          <span>
            Your variables, values and sources. In your JetBrains IDE.
          </span>
          <span>Free & open source</span>
        </div>
      </div>
    ),
    size,
  );
}
