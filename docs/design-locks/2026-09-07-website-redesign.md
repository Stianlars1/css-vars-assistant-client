---
task: Complete website redesign, including home, FAQ and changelog
product: Stylesheet variable completion and token insight for JetBrains IDEs
features: Completion, quick documentation, themes, sources, imported CSS/SCSS/Sass/LESS variables
target: /Users/stian/Documents/Codex/2026-09-07/css-variables-assistant-redesign
blend: 70% F2 + 20% F1 + 10% F4
mode: light page with dark editor illustrations
language: English
constraints: Existing Next.js 15 and React 19; SCSS Modules; local fonts; reduced motion; no deployment
status: verified
authority: User said "jeg har ingen tanker om hva vi må beholde. jeg stoler på din kreativitet"
---

# Design lock - CSS Variables Assistant

The user delegated visual and composition decisions after discovery. These are agent-selected decisions within that delegation, not claimed individual user selections. The product name and existing plugin icon remain recognizable; the website gets an entirely new layout and surface treatment.

## Direction and alternatives

Three directions were evaluated from inspected references: dark editorial instruments, light editorial product presentation, and white graphic brand boards with halftone color. Choose light editorial for approachability and reading clarity; use dark editor windows for authentic product contrast and a small technical vocabulary for source evidence. This choice lets actual token colors stand out without decorating headings with gradients.

| Decision | Locked choice and firmness | Consequences |
|---|---|---|
| Q0 scope | Concentrated homepage plus existing FAQ/changelog routes; delegated, must-have | English copy, frontend developers using stylesheet variables; explain value immediately and lead to Marketplace installation |
| Q1 blend | 70 F2 / 20 F1 / 10 F4; delegated, prefer | Warm near-white page, charcoal type, dark editor evidence, precise source labels |
| AX1 mode | Fixed light marketing surface, dark code illustrations; delegated, prefer | Explicit color-scheme avoids accidental OS inversion; no additional theme switch |
| AX2 separation | Whitespace and thin rules on page, tone steps and one soft contact shadow on editor; delegated, prefer | No floating card grid around every paragraph |
| AX3 shape | Existing 8px radius primitive, derived double radius for editor frame; delegated, prefer | Squarish controls, crisp panels, one coherent radius scale |
| AX4 palette | Existing blue accent scale for actions, grayscale structure, semantic token colors in examples; delegated, must-have | No new brand gradient system; example lavender/mint/peach are data, not action colors |
| AX5 finish | Clean page and crisp UI; delegated, prefer | No decorative noise behind text, no ambient field |
| AX6 illustration set | Product UI fragments, shared example stylesheet world; delegated, must-have | Clearly captioned illustrative interactive preview; no claims of a browser preview feature inside the plugin |
| AX7 motion | User-triggered state changes, short 150-220ms feedback; delegated, prefer | No autoplay, typewriter loop, scroll hijack or continuous rendering. Reduced motion removes transitions |
| AX8 typography | Existing local Geist Sans and Geist Mono; delegated, must-have | Large readable sans headings; mono only for code, filenames and compact metadata |
| AX12 voice | Confident, plain, concrete English; delegated, must-have | Benefits and workflow first; limitations and configuration details in FAQ |
| AX14 nav | Plain header with lower rule; delegated, prefer | Product identity left, concise links and install CTA right; accessible mobile disclosure |
| AX15 buttons | Dark primary CTA, blue textual interactions, radius 8; delegated, prefer | One clear installation path, distinct secondary action |
| QS1 hero | Type-led product shelf; delegated, must-have | Left headline "Know your tokens. Keep your flow."; right explanation/CTA; wide dark editor below. Only media can cross the fold |
| QS2 product proof | Compact compatibility strip; delegated, must-have | Free/open-source and documented IDE/language scope, no unverified stats or customer logos |
| QS3 context | Broad editorial chapter with two substantial UI illustrations; delegated, prefer | Theme/value/source table and import chain each explain a distinct benefit |
| QS4 languages | Dark horizontal chapter with selectable CSS/SCSS/Sass/LESS example; delegated, prefer | Demonstrates actual syntax; not an editor or compiler claim |
| QS5 installation | Light closing chapter with numbered native IDE steps and Marketplace CTA; delegated, must-have | Manual ZIP route available as secondary link; short maintainer footer |
| QS6 FAQ | Shared header/footer and readable grouped native disclosure rows; delegated, must-have | Accurate IDE scope, indexing default, support limits, sort modes, troubleshooting |
| QS7 changelog | Editorial release timeline, 1.9.4 first, recent curated entries and full-history link; delegated, must-have | Source-based summaries and official release links, no fragile remote HTML dependency |

## Illustration scenes

Relationship: shared example project, with independent feature claims and one selectable preview.

| Surface | Claim | Scene | Register | Test |
|---|---|---|---|---|
| Hero | Find a named token and see its value | Editor, completion list with three selectable brand tokens, selected value/source feedback | Crisp dark UI; real DOM text | A selection must update code, selected row and value consistently |
| Theme feature | See alternate declarations and their origins | Documentation table with Default/Dark values and source lines | Light documentation over muted canvas | Values correspond to the displayed example declarations |
| Import feature | Follow an imported token to its declaration | Explicit chain from component through import to token file | Dark/light nested file strips and connecting rules | Chain order and source names agree with example code |
| Language chapter | Same workflow across stylesheet languages | CSS, SCSS, indented Sass and LESS snippets selected by native buttons | Dark editor strip | Correct syntax in each selection; no Sass/LESS execution implied |

## Infrastructure mapping and implementation

- Retain Next.js routing, SCSS Modules, local Geist fonts, existing logo, relevant links and analytics integration.
- Reuse global semantic HSL color/spacing/width/radius primitives and typography variables. Put website-specific aliases in one `src/styles/site-tokens.css` file. Page scope is fixed light by explicit design choice.
- Add aliases for editor surfaces/text/borders and example token data where the existing scale has no suitable dark-on-light contrast role. These are illustration roles, not a second application theme.
- Components: SiteHeader/SiteFooter, InstallLink, TokenDemo, ContextFeatures, LanguageDemo, Installation, shared FAQ data and release data. Server components by default, small client islands for controls.
- Homepage/FAQ metadata and structured data use the same truthful sources as visible content. Current version is 1.9.4. At the user's subsequent request, show verified Marketplace download/rating metrics beneath the hero introduction and the official embedded plugin card beside the installation steps. Cache metrics for 30 minutes and omit unavailable data.
- Source precedence: the current behavior contract wins over historical README release highlights. Marketplace's public stable-version API was checked during discovery and lists 1.9.4 as update 1163704; GitHub release is published. Evidence is saved under work/.
- Accessibility acceptance: token and language controls expose selected states and labels; swatches always have text values; mobile navigation exposes expanded state and supports Escape/return of focus; check zoom/reflow as well as requested viewport sizes.
- Preserve `/faq`, `/changelog` and useful homepage anchors. Remove obsolete homepage rendering and incorrect hidden SEO claims. Update the not-found page and social preview to match.
- Work stays in the isolated checkout. No commit/push/deploy required by the user's request.

## References consulted

- `basit_designs-2017899338953900190`: first video frame inspected. Transfer dark UI hierarchy, precise dividers and meaningful instrument details; do not transfer its radar or fake statistics.
- `_heyfaisal-2089734362485096473`: first photo inspected. Transfer light page air, dark ink and large bounded product evidence; no marble asset is reused.
- `basit_designs-2089995658640122065`: first photo inspected as alternative. Sharp framing influenced restraint; halftone/color slabs were not selected.
- Drawn To `discovery.md`, `question-flow.md`, `style-families.md`, `lock-file.md`, `production-formula.md`, `hero-atmosphere.md`, `render-tiers.md`, `qi-protocol.md`, `quality-bar.md`.

RENDER: T0/T1 DOM and CSS, no atmospheric field, canvas or GPU dependency. DPR/poster/live-render gates not applicable. Interactions have complete initial states.

FOLD: Message and installation CTA must remain intact at 1440x900 and 1280x720. Editor may cross lower fold. Mobile must recompose the demo without shrinking essential text into a screenshot.

POLISH: visible focus rings and skip link verified; Home/arrow navigation between preview tabs verified; selected token updates its code/value/source; four language selections verified; mobile navigation expands/closes and Escape returns focus; reduced motion gives 0s transitions and auto scrolling. Preview metadata type enlarged after mobile inspection.

QA: Home, FAQ and changelog rendered and visually inspected at 1440x900, 1280x720 and 390x844 in the real Chromium-based Codex browser. Earlier homepage captures also used Chrome. No page-level horizontal overflow at those sizes. Extra 320px reflow check passed. Mobile 404 inspected and return link tested.

Content/contrast: source-based copy, Marketplace-sourced download/rating metrics, 1.9.4 structured data, 11 FAQ questions. Measured contrast ratios: body 15.54:1; secondary text 5.64:1; dark body and eyebrow 6.85:1; primary action 16.33:1. These are targeted checks, not a claim of a complete WCAG audit.

States/focus: token selection; three preview tabs; Home/ArrowRight key behavior; all four language tabs; native FAQ disclosures exercised with Enter; mobile menu expanded state, Escape and close on navigation; skip link focuses main content; visible keyboard focus inspected. Reduced-motion emulation verified and reset.

Sets: shared token name/value/source stays consistent across preview states. Independent theme and import illustrations depict different claims with matching example values. Language syntax and value are consistent in all four selections. Example token color is shared from src/content/demo-tokens.ts.

References compared: the previously inspected light FLOWAI composition and dark editorial instrument frame informed hierarchy, bounded product evidence and detail. The halftone board was evaluated as an alternative, not reproduced. No third-party artwork shipped.

Evidence: screenshots were inspected inline in the task, not saved as standalone capture files. outputs/production-checks.json records production HTTP, asset, canonical, social metadata, schema and internal-anchor checks. outputs/social-preview.png is the verified 1200x630 generated share image. work/build.log and work/lint.log contain final command results.

Checks: npm run lint and npm run build pass without warnings; build includes TypeScript checks. Prettier check and git diff --check pass. Homepage first-load JavaScript is 122 kB versus the baseline 167 kB. Production HTTP: /, /faq, /changelog 200; unknown path 404 with noindex. Production route navigation was also checked in-browser. No browser console errors/warnings observed in the final route check.

Fixes from QA: moved local font variables to html so root typography aliases resolve; enlarged small demo text; corrected scoped selectors for dark-section eyebrow contrast; loaded the ContentPage stylesheet in the shared root because it was missing during development route navigation; centralized metadata so FAQ/changelog preserve their OG images; narrowed mobile content-page headings to avoid unnecessary four-line wrapping.

Limitations: Safari/Firefox and physical mobile devices were not tested. Screen-reader speech and actual browser-zoom controls were not tested; keyboard semantics and 320px reflow were checked. Plugin execution in an IDE was not part of this website task. No runtime frame-rate claim or full automated accessibility audit.

State: verified locally. No commit, push, deployment or verification of a deployed redesign.

## Implementation checklist

Independent spec review completed. Its three additions (release evidence, explicit accessibility acceptance and source precedence) are recorded above; no scope blocker was found.

1. Establish shared shell and mapped tokens; align metadata and content sources.
2. Build homepage product shelf and token interaction, then theme/import/language illustrations and installation.
3. Rebuild FAQ/changelog/404, retain links and add coherent social metadata.
4. Run build, lint and type checks; review code and content for unsupported claims.
5. Verify routes and interactions in the real browser at all three requested viewports; test keyboard and reduced motion; fix observed defects.
6. Copy final lock and verification report to outputs, show local site in Codex, keep development server available.


## Revision - native UI components from owner screenshots

This revision supersedes the earlier illustrated demo and the subsequent screenshot-viewer experiment. The owner explicitly requested HTML/CSS components, with screenshots used only as references. No screenshot images are displayed in the product demonstrations.

Authoritative reference files inspected:
- /Users/stian/Screenshots/autocomplete-results_0.png
- /Users/stian/Screenshots/autocomplete-results_1.png
- /Users/stian/Screenshots/autocomplete-results_2.png
- /Users/stian/Screenshots/quick-look-documentation_0.png
- /Users/stian/Screenshots/quick-look-documentation_1.png
- /Users/stian/Screenshots/quick-look-documentation_2.png
- /Users/stian/Screenshots/Skjermbilde 2026-09-07 kl. 18.43.02.png (width correction)

| Decision | Current lock | Consequence |
|---|---|---|
| Native UI medium | HTML/CSS, must-have, explicitly selected | Editor, completion list and documentation table use real DOM; remove screenshot viewer and public screenshot assets |
| Type and surface | JetBrains Mono + Inter inside IDE fragments, must-have | Native dark colors, gray selected row, blue matched prefix, paired theme swatches and subdued metadata |
| Documentation content | Match supplied Default/Dark table, must-have | Context, swatch, value, type, source and WCAG; bold Default row; description; source tooltip; real WebAIM link |
| Documentation width | Revised from 900px to content fitting, capped at 430px, must-have | Owner explicitly rejected the excessive empty width; smaller widths supersede the reference window dimensions |
| Popup placement | Relative flow below the code reference, prefer | Editor height follows popup content, with no hardcoded 535px documentation height |
| Interaction | Small example dataset, must-have | Input filtering, arrow selection, Enter/Tab acceptance, Escape, reopen, and documentation for the selected token |
| Screenshot-vs-runtime claims | Demonstration of the UI, must-have | Do not imply that the plugin or complete IDE runs inside the browser |

Implementation: reusable ColorSwatches, CompletionPopup, DocumentationPopup and EditorPreview components. One shared token dataset. The overall website typography, navigation and page composition remain as approved.

Source mapping: CSS/default and dark values and line numbers follow the owner's supplied examples. SCSS/Sass/LESS reference variations use the earlier verified sandbox observations. The original screenshots remain outside the public site assets.

Targeted visual/functional checks performed: 1440x900, 1280x720, 390x844. Documentation measured 430px on desktop and 328px inside the mobile hero. No page-level horizontal overflow. Enter selected --brand-iris; Tab selected --brand-peach; documentation followed the selected token. Empty results, Escape and four language variants were checked. Main content contained zero img elements. Reduced-motion mode and final browser console were checked.

The reproduced native metadata colors retain the source's subdued contrast; this is not a claim of full accessibility compliance. The webpage provides semantic inputs, listbox states, tables, focus indication and readable explanatory copy. Exact OS-level font rasterization was not pixel-diff certified.

Final revision checks: build, lint, formatting and diff checks passed. Production HTTP/metadata/anchor checks passed; no screenshot img elements in main. Local QA folders are excluded from TypeScript compilation. Homepage first-load JS: 124 kB.
