# CSS Variables Assistant website

The public website for [CSS Variables Assistant](https://www.css-variables-assistant.dev/), a free JetBrains plugin for stylesheet variable completion, documentation, themes and sources.

## Local development

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3107
```

Open http://127.0.0.1:3107. The app uses Next.js 15, React 19, TypeScript, SCSS Modules and locally bundled Geist and JetBrains Mono fonts.

## Checks

```sh
npm test
npm run lint
npm run build
```

Component regression tests cover reopening autocomplete after accepting a non-first suggestion, including keyboard confirmation, empty results and the active accessibility selection. `tests/HeroEditor.test.tsx` covers the hero editor: previewing, committing and restoring the page accent.

The build includes TypeScript checks. Browser verification covers the homepage, FAQ, changelog and not-found route, including navigation, token selections, language tabs, native FAQ disclosures, keyboard focus and reduced motion. Target viewports: 1440x900, 1280x720 and 390x844.

## Structure

- `src/components/site/`: shared website shell, sections and small interactive demonstrations.
- `src/content/`: example token data, FAQ content and curated recent release summaries.
- `src/styles/`: design primitives and the site tokens. `site-tokens.css` holds the spectrum (`--spectrum-*`) and the six live gradient stops (`--s1` to `--s6`) that the hero editor rewrites.
- `src/app/`: routes, metadata and generated social preview.
- `docs/design-locks/2026-11-18-spectrum-redesign.md`: the current design direction and why it replaced the September one.
- `docs/design-locks/2026-09-07-website-redesign.md`: the previous (light) direction, kept for history.

## Keeping product content accurate

`src/lib/config.ts` holds the current plugin version. Update it together with `src/content/releases.ts` when a public release is verified. Check product claims against the plugin's current README and behavior contract; the contract takes precedence over historical release highlights.

`src/lib/marketplace.ts` fetches public download and rating data from JetBrains in parallel, with a 30-minute revalidation interval and a five-second timeout. Rating count is the sum of the actual votes; the displayed score is JetBrains' `meanRating`, rounded to one decimal. Unavailable or invalid metrics are omitted independently. The hero renders those counters on the server. The installation section and the screenshot gallery read the plugin record through `fetchPluginData` and render the site's own `JetBrainsPluginCard`. No API key or widget script is needed.

Illustrations use example data and are labeled accordingly. They demonstrate variable lookup and documentation, not a Sass/LESS compiler or browser cascade simulation.

The Imports & sources demo lives in `src/components/site/resolution/`. Its 13 scenarios and source files are stored in `src/content/resolution-examples.json`, exported from the verified 1.9.4 documentation output and the local showcase fixtures. `NativeTooltip` and `ResolutionChain` are also shared with the existing documentation demos. Tooltips support hover, focus, tap-to-pin and Escape; the source trace runs only on request and respects reduced motion. The companion source explorer is part of the website explanation, while the documentation and tooltip reproduce the native UI. See `docs/design-locks/2026-09-07-imports-and-values.md` for reference evidence and QA.

The existing Google Analytics integration reads `NEXT_PUBLIC_GA_MEASUREMENT_ID`; Vercel Analytics is retained. Public deployment is separate from local development.
