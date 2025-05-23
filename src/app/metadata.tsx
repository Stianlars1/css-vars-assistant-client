// src/app/metadata.tsx
import type { Metadata } from "next";
import { HOST } from "@/utils/config";

const PLUGIN_NAME = "CSS Variables Assistant";
const CURRENT_VERSION = "1.2.0";

export const metadata: Metadata = {
  // Core SEO - Primary ranking factors
  title: {
    template: `%s | ${PLUGIN_NAME} - JetBrains Plugin`,
    default: `${PLUGIN_NAME} - IntelliJ IDEA & WebStorm Plugin for CSS Custom Properties`,
  },
  description:
    "Supercharge CSS development with intelligent autocomplete, documentation, and color swatches for CSS custom properties. Advanced @import resolution, JSDoc support, and multi-preprocessor compatibility for IntelliJ IDEA, WebStorm, and all JetBrains IDEs.",

  // SEO Technical Setup
  metadataBase: new URL(HOST),

  // Enhanced keyword targeting
  keywords: [
    // Primary keywords (high search volume)
    "CSS variables",
    "CSS custom properties",
    "IntelliJ IDEA plugin",
    "WebStorm plugin",
    "JetBrains plugin",

    // Secondary keywords (medium volume, high intent)
    "CSS autocomplete",
    "CSS variables intellisense",
    "CSS documentation",
    "CSS variable color picker",
    "CSS variables assistant",

    // Long-tail keywords (low competition, high conversion)
    "CSS custom properties autocomplete IntelliJ",
    "WebStorm CSS variables plugin",
    "JetBrains CSS development tools",
    "CSS var() autocomplete",
    "SCSS variables IntelliJ plugin",

    // Technical/feature-specific keywords
    "CSS @import resolution",
    "CSS variables JSDoc",
    "CSS preprocessor support",
    "SCSS SASS LESS variables",
    "CSS variables debugging",
    "CSS custom properties documentation",

    // IDE-specific keywords
    "IntelliJ IDEA CSS support",
    "WebStorm CSS enhancement",
    "PyCharm CSS plugin",
    "PhpStorm CSS tools",

    // Version and compatibility
    "CSS Variables Assistant 1.2.0",
    "JetBrains 2025.1 plugin",
    "Next.js CSS variables",
    "React CSS custom properties",
  ],

  // Author and publication info
  authors: [
    {
      name: "Stian Larsen",
      url: "https://github.com/stianlars1",
    },
  ],
  creator: "Stian Larsen",
  publisher: "Stian Larsen",

  // Application info
  applicationName: PLUGIN_NAME,
  generator: "Next.js",

  // Canonical and alternates for SEO
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      en: "/",
    },
  },

  // Open Graph for social sharing (indirect SEO boost)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: PLUGIN_NAME,
    title: `${PLUGIN_NAME} - Advanced CSS Custom Properties Support for JetBrains IDEs`,
    description:
      "Professional CSS development plugin with intelligent autocomplete, real-time documentation, color swatches, and advanced @import resolution. Supports CSS, SCSS, SASS, LESS across all JetBrains IDEs.",
    images: [
      {
        url: "/og-image.png", // Create this image: 1200x630px
        width: 1200,
        height: 630,
        alt: `${PLUGIN_NAME} - JetBrains Plugin Screenshot`,
        type: "image/png",
      },
      {
        url: "/logo-square.png", // Create this: 400x400px
        width: 400,
        height: 400,
        alt: `${PLUGIN_NAME} Logo`,
        type: "image/png",
      },
    ],
  },

  // Twitter Card optimization
  twitter: {
    card: "summary_large_image",
    title: `${PLUGIN_NAME} - CSS Development Supercharged`,
    description:
      "Intelligent CSS custom properties support for JetBrains IDEs. Autocomplete, documentation, color swatches, and @import resolution.",
    images: ["/twitter-card.png"], // Create this: 1200x600px
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },

  // Additional metadata for enhanced SEO
  category: "Developer Tools",
  classification: "IDE Plugin",

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons for branding and recognition
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Manifest for PWA features (improves engagement metrics)
  manifest: "/manifest.json",

  // Verification for search engines
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    yandex: "your-yandex-verification-code", // Add if targeting Russian market
  },

  // Additional structured metadata
  other: {
    // Schema.org structured data indicators
    "article:author": "Stian Larsen",
    "article:publisher": "Stian Larsen",
    "software:version": CURRENT_VERSION,
    "software:operating-system": "Windows, macOS, Linux",
    "software:programming-language": "Kotlin, TypeScript",
    "software:application-category": "DeveloperApplication",

    // Additional technical metadata
    "plugin:ide": "IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, RubyMine",
    "plugin:version": CURRENT_VERSION,
    "plugin:compatibility": "JetBrains 2025.1+",
    "plugin:languages": "CSS, SCSS, SASS, LESS, JavaScript, TypeScript",

    // Performance and quality indicators
    "quality:rating": "5.0",
    "downloads:total": "10000+", // Update with actual numbers
    "last-updated": "2025-05-22",
  },
};
