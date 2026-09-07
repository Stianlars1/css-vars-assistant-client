export const tokens = [
  { name: "--brand-mint", value: "#A8C9AF", line: 4 },
  {
    name: "--brand-iris",
    value: "#B8A4F4",
    line: 3,
    dark: "#CAB9FF",
    darkLine: 15,
    description: "Primary brand color for interactive elements.",
  },
  { name: "--brand-peach", value: "#E9AC95", line: 5 },
] as const;

export type Token = {
  name: string;
  value: string;
  line: number;
  dark?: string;
  darkLine?: number;
  description?: string;
};
export type StylesheetLanguage = "css" | "scss" | "sass" | "less";
export const iris: Token = tokens[1];
export const languages = [
  { value: "css", label: "CSS" },
  { value: "scss", label: "SCSS" },
  { value: "sass", label: "Sass" },
  { value: "less", label: "LESS" },
] as const;

export function contrastOnWhite(hex: string) {
  const rgb = [1, 3, 5].map((offset) => {
    const value = parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  const ratio =
    1.05 / (rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 + 0.05);
  return ratio.toFixed(2).replace(".", ",") + ":1";
}
