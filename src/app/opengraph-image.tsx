import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { spectrum } from "@/content/spectrum";

export const alt =
  "CSS Variables Assistant - CSS variable autocomplete for JetBrains IDEs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gradient = `linear-gradient(45deg, ${spectrum
  .map((token, index) => `${token.value} ${index * 20}%`)
  .join(", ")})`;

export default async function OpenGraphImage() {
  const fonts = join(process.cwd(), "src/fonts/jetbrains-mono");
  const [regular, bold] = await Promise.all([
    readFile(join(fonts, "JetBrainsMono-Regular.woff")),
    readFile(join(fonts, "JetBrainsMono-Bold.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 8% 62%, rgba(110, 40, 245, 0.42), rgba(5, 5, 5, 0) 58%), radial-gradient(circle at 68% 0%, rgba(45, 199, 127, 0.3), rgba(5, 5, 5, 0) 52%)",
          color: "#ededf0",
          fontFamily: "JetBrains Mono",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#a5a5b0" }}>
          JetBrains IDE plugin
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 112,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: -5,
            backgroundImage: gradient,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <span>CSS Variables</span>
          <span>Assistant</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "26px 32px",
            borderRadius: 16,
            border: "1px solid #393b40",
            backgroundColor: "#1e1f22",
            fontSize: 26,
            color: "#bcbec4",
          }}
        >
          <span>--accent: var(--spectrum-violet);</span>
          <div style={{ display: "flex", gap: 10 }}>
            {spectrum.map((token) => (
              <div
                key={token.name}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  backgroundColor: token.value,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
