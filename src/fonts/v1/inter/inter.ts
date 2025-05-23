import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./InterVF.ttf",
      style: "normal",
    },
    {
      path: "./InterItalicVF.ttf",
      style: "italic",
    },
  ],
  preload: true,
  variable: "--font-inter",
});
