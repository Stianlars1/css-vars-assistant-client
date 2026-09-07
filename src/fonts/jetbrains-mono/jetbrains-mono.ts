import localFont from "next/font/local";

export const jetbrainsMono = localFont({
  src: [
    { path: "./JetBrainsMono-Regular.woff", weight: "400", style: "normal" },
    { path: "./JetBrainsMono-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});
