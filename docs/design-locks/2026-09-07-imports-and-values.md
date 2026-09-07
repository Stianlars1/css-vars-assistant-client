---
task: Expand Imports & sources with faithful interactive demonstrations
product: CSS Variables Assistant 1.9.4
target: /Users/stian/Documents/Codex/2026-09-07/css-variables-assistant-redesign
inherits: 2026-09-07-website-redesign.md
status: verified
authority: User requested richer source and value demonstrations, more fixture variants and a screenshot handoff; prior creative delegation persists
---

# Imports, sources and values

The existing theme of the site remains approved. The original import illustration is revised because its static Sass popup and one-line title do not demonstrate the import chain or arithmetic. The earlier lock remains as history.

## Evidence

- Read the released `v1.9.4` source in `work/plugin-evidence`, including VariableResolver, PreprocessorUtil, CssVariableDocumentationService and buildHtmlDocument.
- Source cells expose the declaration filename and line through a tooltip. The compact source is `:N`; the tooltip contains the full filename and line. This is not evidence of a native file tree or clickable navigation menu.
- Value cells expose HTML tooltips with numbered, colored resolution steps, downward arrows, a final value and a syntax legend. The whole value cell owns the tooltip; the arrow is an indicator.
- Preprocessor arithmetic uses supported parenthesized expressions and records the evaluated operations. CSS calc/clamp retain their structure while variable references are substituted. Relative-unit pixel equivalents are estimates.
- Five new fixture entry files contain 14 scenarios verified with the real resolver and documentation generator in the IntelliJ platform test harness. Generated HTML and exact tooltip content live under `work/showcase-evidence/`.
- Native Value tooltip evidence received: `Skjermbilde 2026-09-07 kl. 19.37.25.png`, `19.37.26.png` and `19.37.27.png` in `/Users/stian/Screenshots/`. Inspected all three. They show the released LESS example before and after hovering the value, plus a close crop: a darker gray tooltip with a thin lighter border and contact shadow, monospace text, bold title, orange LESS reference, bold green final value and a small legend. It appears below the hovered cell in this capture. These stills establish appearance and two states, not measured animation timing.
- A Source tooltip and a multi-step arithmetic tooltip remain requested. Generated HTML establishes their text; these screenshots will calibrate native placement, spacing and arrows.

Update: all six screenshots from 19.43.13 through 19.44.48 were inspected. Source is a compact, single-line sans-serif tooltip with `_components.scss:3` or `:4`. Value uses a monospace numbered chain, lavender Sass references, downward arrows, green arithmetic and final value, and a syntax legend. The arithmetic example confirms five steps. The earlier pending evidence state is now resolved.

Implementation choice: three scenario groups (Imports, Calculations, CSS values), a recreated usage/documentation panel and a separate, explicitly labeled source-file explorer. Thirteen verified resolution scenarios share the same component/data model. A user-triggered import trace advances through real fixture files; selecting a file or changing example cancels it. Reduced motion selects the final declaration immediately. The existing theme example becomes one compact editorial row above this wider demo. These are delegated layout choices within the existing direction.

## Direction within the existing approval

| Decision | Choice and firmness | Consequence |
|---|---|---|
| Original import illustration | Revised at user's request | Replace the static repeated popup with a demonstration that exposes sources and value resolution |
| Set relationship | Shared example project with distinct inspectable states; delegated, prefer | Imported iris color, button spacing and CSS expressions share realistic files and values |
| Register | Real product fragments; inherited, must-have | Match the native documentation and tooltip using DOM text and CSS, with screenshots as reference only |
| Source scene | Reference → source tooltip → visible declaration; delegated, prefer | Show the actual filename and declaration line; any explanatory file view sits outside the recreated popup and is identified as part of the website demo |
| Calculation scene | Input references → exact numbered operations → final value; delegated, prefer | The 24px case visibly includes both arithmetic steps, rather than displaying only the result |
| CSS values scene | Resolved references inside preserved CSS syntax; delegated, prefer | Offer calc, composite border and fallback variants with truthful final strings |
| Controls | Hover and focus reveal; tap can hold the details open; delegated, prefer | Keyboard and touch can access the same information; Escape dismisses; no hover-only feature |
| Motion | User-triggered tooltip reveal and coordinated token highlight; delegated, prefer | Approximately 150-200ms ease-out for reveal and 120ms highlight. Immediate states with reduced motion. No autoplay or overshoot |
| Composition | Give this richer scene enough width for readable code and a full chain; delegated, prefer | Expand beyond the current half-width static illustration. Recompose on mobile instead of shrinking text |
| Native details | One-step Value tooltip observed; Source and multi-step screenshots pending | Use the observed native skin; calibrate remaining content geometry before claiming fidelity |

## Drawn To references

- `references/lock-file.md`, `references/qi-protocol.md`, `references/illustration-ideation.md`, `references/motion-grammar.md`.
- `GrahamPaterson-2089421643311616127`: inspected the analysis and frame `frames_1/f_073.jpg`. Transfer the connection between a real hovered object and its inspector, plus a variant switcher and quiet reveal. The reference's white tooltip skin and mobile device frame do not replace JetBrains native appearance.
- Continue the existing light editorial page and dark product UI. New reference material informs interaction, not a new brand direction.

RENDER: DOM/CSS with small client interactions; implementation pending native references.

SET TEST: Each state must explain its named action. Source exposes file/line, calculation explains how 24px was obtained, CSS expression shows substituted references. The original action, source and result must agree across every view. Browser check pending.

POLISH: Planned anchor-stable tooltips, coordinated active token/declaration highlight, focus/touch equivalents, Escape dismissal and reduced motion. Not implemented or visually verified yet.

QA: Fixture resolver/documentation checks passed for all 14 scenarios. Three native Value-hover screenshots inspected; Source and multi-step screenshots pending. New website scene at 1440x900, 1280x720 and 390x844 pending. Existing website QA is recorded separately and does not verify this new scene.

State: Fixture and evidence preparation completed locally. Website implementation awaits user screenshots. No commit, push or deployment.

## Completed implementation and QA

This record supersedes the pending implementation and QA states above, which remain as history.

- Source and Value panels now match the observed native register: compact gray source tooltip, darker monospace resolution tooltip, numbered purple/orange references, downward arrows, green arithmetic/final values and the exact syntax legend from generated documentation.
- The replacement scene has three groups and 13 selectable examples. Source hover also selects the referenced declaration in the companion source explorer. `Trace value` visits the actual fixture files in sequence; file selection and scenario changes stop the trace. The source explorer is visibly identified as an example-project companion, not a native plugin window.
- Existing theme and language documentation now reuse the same interactive Source/Value tooltip primitives. All text and illustrations remain DOM/CSS. No supplied screenshot is rendered as a site image.
- Width is an intentional web adaptation: documentation remains bounded, and long CSS expressions wrap so the mobile table can stay readable. Tooltip placement flips above the field when necessary and stays inside the viewport. Scrolling repositions the tooltip instead of dismissing a newly focused field.

RENDER: T0/T1 DOM and CSS; React portal only for tooltips. No canvas, GPU renderer or added animation package.

POLISH: 160ms tooltip reveal, 180ms source reveal, coordinated declaration highlighting, 1100ms pauses in the user-triggered trace. Reduced motion removes transitions and goes directly to the final declaration. Only one tooltip can be open at once. Focus, click/tap pinning, outside click and Escape share the same content.

QA: 1440x900 and 1280x720 desktop scenes visually inspected; 390x844 mobile calculation and long-expression states inspected. Extra 320x740 production reflow check passed. No page-level horizontal overflow. All 13 variant tooltips were exercised and showed their expected final values. The five-step arithmetic chain, source-to-declaration coupling, rem-to-pixel estimate, trace completion, pointer hover enter/leave, keyboard focus/Escape and reduced-motion completion were checked. Native contents agree with the 14-scenario platform-fixture verification; 13 resolution scenarios are shipped in this section.

SET TEST: Source names/line numbers match the first declaration in each path, all displayed code matches the fixture files byte-for-byte, and the usage line contains the selected variable. Imports, calculations and CSS expressions explain distinct behavior inside the same example project. The generated CSS calc/clamp expressions remain expressions.

References compared: nine owner-supplied screenshots, including the six images at 19.43.13 through 19.44.48; Drawn To's GrahamPaterson inspector reference and the previously approved editorial direction. Screenshot comparisons were inspected inline. Native font rasterization across operating systems is not certified.

Checks: production build, lint, TypeScript, Prettier and git diff whitespace checks pass. Production route/CSS/metadata/link/asset verification passes; the interactive calculation works in the production build. No console errors were observed after the production reload. A Turbopack JSON hot-update error occurred during development edits and was absent after the cold production reload. First-load JS is 133 kB versus 124 kB before this feature.

Limitations: Safari, Firefox, physical touch devices and screen-reader speech were not tested. Browser keyboard semantics and a tap-equivalent click path were checked. No IDE application was driven or photographed by Codex during implementation; native references came from the user.

State: implemented and verified locally. No commit, push or deployment.
