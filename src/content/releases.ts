export const releases = [
  {
    version: "1.9.4",
    date: "2026-09-07",
    label: "Maintenance",
    title: "Clearer insights. More reliable values.",
    description:
      "A focused update to keep token information accurate as your stylesheets evolve.",
    changes: [
      "Imported values update after saved and unsaved edits, new imports, and deleted dependencies.",
      "Values retain their actual source file and line, including through aliases and imports.",
      "More reliable CSS, SCSS, indented Sass and LESS parsing, including quoted values, URLs and theme declarations.",
      "Safer alias-cycle handling and better completion boundaries around comments, strings and stylesheet at-rules.",
      "Corrected HSL transparency and signed CSS length handling.",
    ],
    note: "The variable index rebuilds once after upgrading. No settings change is required.",
  },
  {
    version: "1.9.3",
    date: "2026-08-28",
    label: "Fix",
    title: "Native documentation, back where it belongs.",
    description:
      "Restores Java and other non-stylesheet documentation when annotations or comments contain text resembling LESS variables.",
    changes: [
      "The plugin handles documentation only in stylesheet contexts, leaving other languages to the IDE.",
      "CSS, SCSS, Sass, LESS and injected CSS documentation remain supported.",
    ],
    note: "No settings change or index rebuild is required.",
  },
  {
    version: "1.9.2",
    date: "2026-07-29",
    label: "Imports & themes",
    title: "Better Sass imports. Clearer theme names.",
    description:
      "Sass module imports and theme labels become easier to follow.",
    changes: [
      "Discover variables through @use and @forward, Sass partials and supported package-root imports.",
      "CSS entrypoint fallback makes custom properties discoverable when a package's Sass entrypoint only exposes mixins.",
      "Default and named-theme labels are combined consistently without losing their meaning.",
    ],
    note: "An index rebuild runs once after upgrading.",
  },
  {
    version: "1.9.1",
    date: "2026-06-30",
    label: "Documentation",
    title: "See through your aliases.",
    description:
      "Pure Sass and LESS aliases to CSS custom properties share the same theme values, color swatches and sources as their underlying tokens.",
    changes: [
      "Alias titles and resolution hints keep the hovered variable and its target visible.",
      "Compound expressions remain literal instead of being presented as pure aliases.",
    ],
    note: null,
  },
];
