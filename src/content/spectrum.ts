import type { Token } from "./demo-tokens";

/**
 * The six colors of the logo ring, in the order they appear in the hero
 * gradient. They are the site's own design tokens (see site-tokens.css) and
 * the suggestions the hero editor offers.
 */
export const spectrum: readonly Token[] = [
  { name: "--spectrum-orange", value: "#F8772B", line: 2 },
  { name: "--spectrum-pink", value: "#E42C95", line: 3 },
  { name: "--spectrum-violet", value: "#6E28F5", line: 4 },
  { name: "--spectrum-blue", value: "#3B98FD", line: 5 },
  { name: "--spectrum-green", value: "#2DC77F", line: 6 },
  { name: "--spectrum-lime", value: "#93CA42", line: 7 },
];

export const SPECTRUM_PREFIX = "--spectrum-";
export const DEFAULT_ACCENT_INDEX = 2;

/** The live stop that `--accent` reads (`--s3`), as a zero-based index. */
const ACCENT_STOP = 2;

/**
 * Decides what the six live gradient stops (`--s1` to `--s6`) become when a
 * visitor picks an accent color.
 *
 * Current strategy: rotate the ring so the picked color lands on the accent
 * stop and its neighbours keep their order. The gradient stays a full
 * spectrum; only its starting point moves.
 */
export function spectrumStops(accentIndex: number): string[] {
  const count = spectrum.length;
  const start = (accentIndex - ACCENT_STOP + count) % count;
  return spectrum.map((_, stop) => spectrum[(start + stop) % count].value);
}
