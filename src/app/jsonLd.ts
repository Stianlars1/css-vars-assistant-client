// Enhanced jsonld.ts with more comprehensive structured data

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Variables Assistant",
  alternateName: "CSS Variables Assistant Plugin",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "IDE Plugin",
  operatingSystem: ["Windows", "macOS", "Linux"],
  softwareVersion: "1.3.1",
  datePublished: "2025-03-01",
  dateModified: new Date().toJSON().split("T")[0],
  author: {
    "@type": "Person",
    name: "Stian Larsen",
    url: "https://github.com/stianlars1",
    email: "stian.larsen@mac.com",
    sameAs: [
      "https://twitter.com/litehode",
      "https://github.com/stianlars1",
      "https://www.linkedin.com/in/stianlars1/",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Stian Larsen",
    url: "https://github.com/stianlars1",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant",
  },
  description:
    "Professional CSS variables plugin for JetBrains IDEs. Smart autocomplete, live documentation, color swatches, and @import resolution for CSS, SCSS, SASS, and LESS.",
  features: [
    "Smart Autocomplete inside var(--…) with live preview",
    "Quick Documentation (Ctrl+Q) showing value, description & color swatch",
    "JSDoc‑style comment support (@name, @description, @example)",
    "Advanced @import resolution with configurable scope and depth",
    "Multi-preprocessor support (CSS, SCSS, SASS, LESS)",
    "Value-based sorting for logical autocomplete order",
    "Responsive breakpoint visualization",
    "Color contrast checker integration",
  ],
  screenshot: [
    {
      "@type": "ImageObject",
      url: "https://www.css-variables-assistant.dev/static/completions/completions_non-color.png",
      caption:
        "CSS Variables Assistant autocomplete feature for non-color variables",
    },
    {
      "@type": "ImageObject",
      url: "https://www.css-variables-assistant.dev/static/completions/completions_color.png",
      caption:
        "CSS Variables Assistant autocomplete feature for color swatches",
    },
    {
      "@type": "ImageObject",
      url: "https://www.css-variables-assistant.dev/static/documentation/documentation_non-color.png",
      caption: "Documentation popup with color swatches",
    },
  ],
  image: "https://www.css-variables-assistant.dev/logo_60.svg",
  downloadUrl:
    "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant",
  installUrl:
    "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant",
  supportingData: {
    "@type": "SoftwareApplication",
    name: "JetBrains IDEs",
    applicationCategory: "IDE",
    operatingSystem: ["Windows", "macOS", "Linux"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "15",
    reviewCount: "15",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Developer",
      },
      datePublished: "2025-03-15",
      reviewBody:
        "Essential plugin for CSS development. The autocomplete saves so much time!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  isAccessibleForFree: true,
  license: "https://opensource.org/licenses/MIT",
  softwareRequirements: "JetBrains IDE 2025.1+",
  softwareHelp: {
    "@type": "CreativeWork",
    name: "CSS Variables Assistant Documentation",
    url: "https://github.com/stianlars1/css-vars-assistant#readme",
  },
  sameAs: [
    "https://github.com/stianlars1/css-vars-assistant",
    "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant",
  ],
};

// Additional structured data for FAQ
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CSS Variables Assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CSS Variables Assistant is a JetBrains IDE plugin that provides intelligent autocomplete, documentation, and color swatches for CSS custom properties (variables). It supports CSS, SCSS, SASS, and LESS files.",
      },
    },
    {
      "@type": "Question",
      name: "Which JetBrains IDEs are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CSS Variables Assistant works with all JetBrains IDEs including IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, RubyMine, GoLand, and CLion.",
      },
    },
    {
      "@type": "Question",
      name: "Is CSS Variables Assistant free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CSS Variables Assistant is completely free and open source. You can install it from the JetBrains Marketplace at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install CSS Variables Assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open your JetBrains IDE, go to Settings → Plugins → Marketplace, search for 'CSS Variables Assistant', and click Install. Restart your IDE when prompted.",
      },
    },
  ],
};
