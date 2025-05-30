import {
  ArrowDownNarrowWide,
  AtSign,
  Code,
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
];
