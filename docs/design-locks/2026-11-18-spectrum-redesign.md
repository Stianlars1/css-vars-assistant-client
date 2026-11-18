---
task: Redesign the website from the original (v1) design instead of the September 2026 one
base: commit 2ee06f0 (last commit before the September redesign)
replaces: docs/design-locks/2026-09-07-website-redesign.md
mode: dark only
status: built and checked locally; not deployed
authority: User said the September redesign "lost the plugin's soul" and asked for v1 to be modernised instead
---

# Design lock - spectrum redesign

## What v1 had that the September redesign removed

| | v1 (until Sept 2026) | September redesign | This redesign |
|---|---|---|---|
| Surface | Near-black, like the IDE the plugin lives in | Near-white page, dark editor illustrations | Near-black (`#050505`, v1's value) |
| Color | The logo's ring as a gradient on every heading | Grayscale, one blue link color. Locked as "no new brand gradient system" | The ring again, now as six design tokens |
| Hero | The product name, 72px, weight 900 | A slogan: "Know your tokens. Keep your flow." | The product name, 88px, weight 900 |
| Hero media | A screenshot tilted in 3D with a violet glow | A flat editor below the fold line | The same tilt and glow around a live editor |
| Features | Four cards, each with its own hue and an IDE simulation on hover | Two chapters without color | Four cards with v1's hues; the demos are always visible and interactive |
| Brand in the header | Logo and a monospace wordmark | Logo and a sans wordmark | Logo and a monospace wordmark |

The September version kept the content accurate and added good interactive
recreations of the plugin's popups. What it lost was everything that made the
page recognisably this plugin: the spectrum, the name, the editor as an object.

## The idea

The site is written in the thing it is about. Its colors are six custom
properties sampled from the logo (`--spectrum-orange` to `--spectrum-lime`).
The hero editor autocompletes those same tokens, and choosing one rewrites the
page: title, glows, editor border, section headings and the scroll line all
read from six live stops (`--s1` to `--s6`).

## Decisions

- **Dark only.** v1 followed the OS scheme; its dark mode is the look people
  remember. A light theme is a possible follow-up, not part of this lock.
- **Type.** Geist at weight 900 for display (as in v1), Geist for text,
  JetBrains Mono for the wordmark, code and numbers. Ligatures are off for all
  code so `--` never renders as a dash.
- **Section headings walk the spectrum** from top to bottom: Features
  (stops 2 to 3), Follow a value home (3 to 4), Screenshots (4 to 5). The
  installation heading keeps v1's JetBrains gradient.
- **Feature hues are fixed** (pink, blue, orange, green) and do not follow the
  visitor's accent, so each feature stays recognisable.
- **Motion.** One orchestrated moment: the hero editor types its prefix and
  opens the list. Everything else answers the visitor: the editor straightens
  when hovered or focused, the spectrum transitions when a token is picked,
  sorted rows slide to their new position, and the line under the header fills
  with scroll. All of it is removed under `prefers-reduced-motion`.
- **Kept from September:** `CompletionPopup`, `DocumentationPopup`,
  `EditorPreview`, the resolution demo and its 13 verified examples, live
  Marketplace statistics, FAQ and changelog content.
- **Brought back from v1:** the Marketplace screenshots and the site's own
  Marketplace card (the embedded iframe is light and cannot be themed).

## Things to know before changing it

- `spectrumStops()` in `src/content/spectrum.ts` decides what the six stops
  become for a chosen accent. It rotates the ring; a different strategy only
  needs to return six colors.
- The six stops are registered with `@property` so they can transition. An
  unregistered custom property would jump.
- `animation-timeline` sits in its own rule in `SiteChrome.module.scss`. The
  CSS minifier folds it into the `animation` shorthand when both share a rule,
  and browsers then drop the declaration without an error.
- Demo data for the sort and scope cards mirrors the plugin's real settings:
  *Completion sort order* (by value ascending, by value descending,
  alphabetical) and *Indexing scope* (project only, project + imports, full
  global). The bars in the sort card are an illustration, not plugin UI.

## Verification (2026-11-18, local)

`npm test` (41 tests), `npm run lint` and `npm run build` pass. Checked in the
browser at 1440x900 and 375x812: home, FAQ, changelog, the social image, hero
token preview and commit by mouse and keyboard, and no horizontal overflow.
Not checked: Safari and Firefox, and the deployed site.
