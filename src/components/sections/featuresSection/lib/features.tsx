import {
  ArrowDownNarrowWide,
  AtSign,
  Bug,
  Code,
  Folders,
  Network,
  SquareMenu,
  Workflow,
} from "lucide-react";

export function getIconForFeature(iconName: string) {
  // You would replace these with actual SVG icons
  switch (iconName) {
    case "autocomplete":
      return <Workflow />;
    case "documentation":
      return <SquareMenu />;
    case "jsdoc":
      return <Code />;
    case "scope":
      return <AtSign />;
    case "sorting":
      return <ArrowDownNarrowWide />;

    case "dynamicDocs":
      return <Network />;
    case "importSupport":
      return <Folders />;
    case "debugTools":
      return <Bug />;

    default:
      return null;
  }
}

export const featuresSectionData = [
  {
    title: "Intelligent CSS Variables Autocomplete",
    description:
      "Advanced IntelliSense for CSS custom properties with live preview, resolved values, and context-aware suggestions inside var(--...) functions",
    icon: "autocomplete",
    brandColor: "gradients.electric.electricPink", // Uses your vibrant pink gradient
    hoverColor: "#fe1f77",
    keywords: [
      "CSS variables autocomplete",
      "CSS custom properties IntelliSense",
      "var() autocomplete",
      "CSS variables suggestions",
      "CSS IntelliSense",
    ],
    details: [
      "Plugin-specific icons identify CSS Variables Assistant suggestions",
      "Variable names with @description JSDoc annotations",
      "Resolved values (colors: #FFF, hsl(), rgb() | sizes: rem, px, em)",
      "Context-aware suggestions with @media query declarations count",
    ],
  },
  {
    title: "Rich Hover Documentation",
    description:
      "Simply hover over any CSS variable in your code to reveal comprehensive documentation - see all values, responsive breakpoints, color swatches, and helpful links instantly",
    icon: "documentation",
    brandColor: "gradients.classic.oceanBreeze", // Blue gradient from your system
    hoverColor: "#3b98fd",
    keywords: [
      "CSS variables documentation",
      "CSS custom properties help",
      "CSS variables hover",
      "CSS documentation popup",
      "CSS IntelliJ documentation",
    ],
    details: [
      "Context-aware tables showing all breakpoint values",
      "Visual color swatches for both light/dark themes",
      "One-click links to MDN docs and contrast checkers",
      "JSDoc support for custom descriptions and examples",
    ],
  },
  {
    title: "Flexible CSS Variables Indexing Scope",
    description:
      "Configurable variable discovery: project-only, with imports, or global (node_modules) to match your development workflow",
    icon: "scope",
    brandColor: "gradients.classic.natureFresh", // Green gradient from your system
    hoverColor: "#2dc77f",
    keywords: [
      "CSS variables scope",
      "CSS custom properties indexing",
      "CSS variables configuration",
      "CSS IntelliJ settings",
      "CSS variables project scope",
    ],
    details: [
      "PROJECT: Index only current project variables",
      "PROJECT + IMPORTS: Include @import and linked stylesheets",
      "GLOBAL: Full node_modules and external dependencies",
      "Re-index button for instant cache refresh",
    ],
  },
  {
    title: "Smart Value-Based Sorting",
    description:
      "CSS variables automatically sorted by computed values for logical selection - sizes by magnitude, colors by hue, ensuring intuitive autocomplete order",
    icon: "sorting",
    brandColor: "gradients.warm.sunsetGlow", // Orange/yellow gradient from your system
    hoverColor: "#e9d123",
    keywords: [
      "CSS variables sorting",
      "CSS custom properties order",
      "CSS variables organization",
      "CSS IntelliSense sorting",
      "CSS variables by value",
    ],
    details: [
      "Numeric values sorted by magnitude (8px, 16px, 24px)",
      "Color values grouped and sorted by hue/lightness",
      "Alphabetical fallback for complex values",
      "Configurable sorting preferences in settings",
    ],
  },

  {
    title: "CSS Import Debug & Settings",
    description:
      "Run the Import Resolution Debug directly from a stylesheet via right-click. See a start/finish notification and a detailed result dialog with root file, depth, files and summary. Re-index and fine-tune settings as needed.",
    icon: "debugTools",
    brandColor: "gradients.warm.sunsetGlow",
    hoverColor: "#93CA42",
    keywords: [
      "debug tools",
      "import resolution",
      "notifications",
      "result dialog",
      "re-index",
    ],
    details: [
      "Right-click inside a stylesheet to start the debug tool",
      "Bottom-right notifications indicate start and finish",
      "Modal dialog summarises root file, depth, files and variables",
      "Pair with re-index and settings for full control",
    ],
  },
  {
    title: "Advanced Import & Preprocessor Support",
    description:
      "Deep import resolution across CSS, SCSS, SASS and LESS with a dedicated preprocessor index. Configure import depth and scope for precise variable discovery.",
    icon: "importSupport",
    brandColor: "gradients.classic.natureFresh",
    hoverColor: "#8D1DBA",
    keywords: [
      "advanced import resolution",
      "preprocessor support",
      "preprocessor index",
      "import depth",
      "import scope",
    ],
    details: [
      "Resolves @import chains across CSS, SCSS, SASS and LESS",
      "Handles node_modules packages and scoped imports",
      "Dedicated index for preprocessor variables ensures instant look-ups",
      "Configurable indexing scope and import depth",
    ],
  },
  {
    title: "Dynamic & Customizable Documentation",
    description:
      "Documentation popups now adapt to your needs: choose which columns appear, see pixel equivalents, hex values and WCAG contrast, and follow the entire resolution chain for any variable.",
    icon: "dynamicDocs",
    brandColor: "gradients.classic.oceanBreeze",
    hoverColor: "#F96633",
    keywords: [
      "dynamic documentation",
      "customizable docs",
      "pixel equivalents",
      "resolution chain",
      "WCAG contrast",
    ],
    details: [
      "Customizable columns for context, value, source and WCAG contrast",
      "Automatic pixel, hex and contrast columns when relevant",
      "Resolution chain tooltip reveals how the final value is derived",
      "Winner-first tables with clean layout",
    ],
  },
];
