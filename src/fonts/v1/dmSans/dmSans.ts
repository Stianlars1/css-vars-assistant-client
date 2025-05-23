import localFont from "next/font/local";

export const dmSans = localFont({
  src: [
    {
      path: "./dmSansVar.ttf",
      style: "normal",
    },
    {
      path: "./dmSansIta.ttf",
      style: "italic",
    },
  ],
  preload: true,
  variable: "--font-dm-sans",
});
