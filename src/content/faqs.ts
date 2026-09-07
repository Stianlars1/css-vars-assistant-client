export const faqs = [
  {
    category: "Getting started",
    question: "Which JetBrains IDEs can I use it with?",
    answer:
      "CSS Variables Assistant needs an IDE with bundled JavaScript and CSS support: WebStorm, IntelliJ IDEA Ultimate, PhpStorm, PyCharm Professional, GoLand, or RubyMine. Check the Marketplace compatibility list for your exact IDE build before installing.",
  },
  {
    category: "Getting started",
    question: "Is the plugin free?",
    answer:
      "Yes. CSS Variables Assistant is free and open source. Install it from JetBrains Marketplace, or download the signed plugin ZIP from the GitHub releases page.",
  },
  {
    category: "Getting started",
    question: "How do I install the ZIP manually?",
    answer:
      "Download the plugin ZIP from an official GitHub release. In your IDE, open Settings > Plugins, use the gear menu and choose Install Plugin from Disk. Select the ZIP and restart the IDE if prompted.",
  },
  {
    category: "Variables & themes",
    question: "Which stylesheet languages are supported?",
    answer:
      "CSS custom properties and var() references, direct $variables in SCSS and indented Sass, and @variables in LESS. CSS injected by the IDE is also supported. This does not mean arbitrary JavaScript, TypeScript, JSX or TSX strings are treated as stylesheets.",
  },
  {
    category: "Variables & themes",
    question: "Can I see the values for different themes?",
    answer:
      "Yes. Quick Documentation shows declared default, theme, and media-query alternatives with their values and sources. Color swatches and declaration comments add context. The browser still determines the applied value using matching selectors and stylesheet order.",
  },
  {
    category: "Variables & themes",
    question: "Does it calculate every value or run Sass and LESS?",
    answer:
      "The plugin provides static token insight. It does not run a Sass or LESS program or simulate the browser's full CSS cascade. Unsupported or ambiguous expressions remain literal. Pixel equivalents for relative units are estimates based on default font and viewport assumptions.",
  },
  {
    category: "Imports & settings",
    question: "Which indexing scope should I choose?",
    answer:
      "Project + imports is the default. It includes tokens in your project and explicitly imported dependencies. Project only excludes node_modules; Full global broadens discovery. Open Settings > Tools > CSS Variables Assistant to change the scope.",
  },
  {
    category: "Imports & settings",
    question: "Does it follow Sass modules and package imports?",
    answer:
      "Yes. The plugin follows stylesheet imports, Sass partials, @use and @forward, including supported package entrypoints. To inspect what a file imports, right-click a CSS, SCSS, Sass or LESS file and choose Debug CSS Import Resolution.",
  },
  {
    category: "Imports & settings",
    question: "Can I change the completion order?",
    answer:
      "Yes. Under Settings > Tools > CSS Variables Assistant, choose By value ascending (the default), By value descending, or Alphabetical by name. Exact variable-name matches retain priority.",
  },
  {
    category: "Troubleshooting",
    question: "Why is a variable missing from suggestions?",
    answer:
      "First check the variable name, stylesheet context, and whether the declaring file is included in your indexing scope. Use Debug CSS Import Resolution to inspect imports. If values still look stale, use Re-index Now in the plugin settings. If the problem persists, report an issue with your IDE version, plugin version and a small example.",
  },
  {
    category: "Troubleshooting",
    question: "Do I need to change settings after updating to 1.9.4?",
    answer:
      "No settings change is required. The variable index rebuilds once after upgrading. Version 1.9.4 improves imported-value freshness, parsing, source attribution, alias handling and completion contexts.",
  },
];
