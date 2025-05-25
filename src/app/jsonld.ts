export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Variables Assistant",
  applicationCategory: "DeveloperApplication",
  operatingSystem: ["Windows", "macOS", "Linux"],
  softwareVersion: "1.2.0",
  dateModified: new Date().toJSON().split(":")[0].split("T")[0],
  author: {
    "@type": "Person",
    name: "Stian Larsen",
    url: "https://github.com/stianlars1",
    email: "stian.larsen@mac.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description:
    "Enhances CSS variable usage with autocomplete and documentation. Shows variable values in completion suggestions on typing and documentation on hover.",
  features: [
    "Smart Autocomplete inside var(--…)",
    "Quick Documentation (Ctrl+Q) showing value, description & color swatch",
    "JSDoc‑style comment support (@name, @description, @example)",
    "Advanced @import resolution with configurable scope and depth",
    "Multi-preprocessor support (CSS, SCSS, SASS, LESS)",
  ],
  screenshot: "/plugin-screenshot.png",
  downloadUrl:
    "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant",
  supportingData: {
    "@type": "SoftwareApplication",
    name: "JetBrains IDEs",
    applicationSubCategory: "IDE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    ratingCount: "15",
  },
};
