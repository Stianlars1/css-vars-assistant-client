# CSS Variables Assistant website

The public website for [CSS Variables Assistant](https://www.css-variables-assistant.dev/), a free JetBrains plugin for stylesheet variable completion, documentation, themes and sources.

## Local development

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3107
```

Open http://127.0.0.1:3107. The app uses Next.js 15, React 19, TypeScript, SCSS Modules and locally bundled Geist fonts.

## Checks

```sh
npm run lint
npm run build
```

The build includes TypeScript checks. Browser verification covers the homepage, FAQ, changelog and not-found route, including navigation, token selections, language tabs, native FAQ disclosures, keyboard focus and reduced motion. Target viewports: 1440x900, 1280x720 and 390x844.

## Structure

- `src/components/site/`: shared website shell, sections and small interactive demonstrations.
- `src/content/`: example token data, FAQ content and curated recent release summaries.
- `src/styles/`: existing design primitives and website-specific aliases.
- `src/app/`: routes, metadata and generated social preview.
- `docs/design-locks/2026-09-07-website-redesign.md`: design direction, delegated decisions, references and verification record.

## Keeping product content accurate

`src/lib/config.ts` holds the current plugin version. Update it together with `src/content/releases.ts` when a public release is verified. Check product claims against the plugin's current README and behavior contract; the contract takes precedence over historical release highlights.

`src/lib/marketplace.ts` fetches public download and rating data from JetBrains in parallel, with a 30-minute revalidation interval and a five-second timeout. Rating count is the sum of the actual votes; the displayed score is JetBrains' `meanRating`, rounded to one decimal. Unavailable or invalid metrics are omitted independently. `MarketplaceStats` renders the hero counters on the server. `MarketplaceCard` embeds the official lazy-loaded iframe, with a normal, keyboard-accessible Marketplace link around it to avoid the iframe's redirect limitation. No API key or widget wrapper script is needed.

Illustrations use example data and are labeled accordingly. They demonstrate variable lookup and documentation, not a Sass/LESS compiler or browser cascade simulation.

The Imports & sources demo lives in `src/components/site/resolution/`. Its 13 scenarios and source files are stored in `src/content/resolution-examples.json`, exported from the verified 1.9.4 documentation output and the local showcase fixtures. `NativeTooltip` and `ResolutionChain` are also shared with the existing documentation demos. Tooltips support hover, focus, tap-to-pin and Escape; the source trace runs only on request and respects reduced motion. The companion source explorer is part of the website explanation, while the documentation and tooltip reproduce the native UI. See `docs/design-locks/2026-09-07-imports-and-values.md` for reference evidence and QA.

The existing Google Analytics integration reads `NEXT_PUBLIC_GA_MEASUREMENT_ID`; Vercel Analytics is retained. Public deployment is separate from local development.
