// src/app/generateMetadataRoot.tsx (FINAL BEST VERSION)
import type { Metadata } from "next";
import { OG_IMAGE_URL } from "@/lib/constants";
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";
import { extractPluginStats } from "@/lib/utils/pluginStats";
import { HOST } from "@/lib/config";

const PLUGIN_NAME = "CSS Variables Assistant";
const CURRENT_VERSION = "1.2.0";

export async function generateMetadataRoot(): Promise<Metadata> {
  // Fetch real plugin data for dynamic metadata
  const pluginData = await fetchPluginData();
  const pluginStats = extractPluginStats(pluginData);

  // Dynamic titles based on real data
  const baseTitle = `${PLUGIN_NAME} - JetBrains Plugin for CSS Custom Properties`;
  const dynamicTitle = pluginStats
    ? `${baseTitle} | ${pluginStats.downloads}+ Downloads`
    : baseTitle;

  // Enhanced description with real stats
  const baseDescription =
    "Supercharge CSS development with intelligent autocomplete, documentation, and color swatches for CSS custom properties. Advanced @import resolution, JSDoc support, and multi-preprocessor compatibility for IntelliJ IDEA, WebStorm, and all JetBrains IDEs.";
  const dynamicDescription = pluginStats
    ? `${baseDescription} Rated ${pluginStats.rating.toFixed(1)}/5.0 with ${pluginStats.downloads}+ downloads.`
    : baseDescription;

  return {
    // SEO Technical Setup
    metadataBase: new URL(HOST),

    // Dynamic title with template
    title: {
      default: dynamicTitle,
      template: `%s | ${PLUGIN_NAME}`,
    },

    description: dynamicDescription,

    // Comprehensive keyword targeting (best from both versions)
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
      `CSS Variables Assistant ${CURRENT_VERSION}`,
      "JetBrains 2025.1 plugin",

      // Add real plugin tags if available
      ...(pluginStats?.tags || []),
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
    applicationName: PLUGIN_NAME,
    generator: "Next.js",

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

    // Canonical and alternates for SEO
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
        en: "/",
      },
    },

    // Open Graph with dynamic data
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName: PLUGIN_NAME,
      title: `${PLUGIN_NAME} - Advanced CSS Custom Properties Support for JetBrains IDEs`,
      description: dynamicDescription,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${PLUGIN_NAME} - JetBrains Plugin Interface showing autocomplete and color swatches`,
          type: "image/png",
        },
        {
          url: "/logo.svg",
          width: 400,
          height: 400,
          alt: `${PLUGIN_NAME} Logo`,
          type: "image/svg+xml",
        },
      ],
    },

    // Twitter Card optimization
    twitter: {
      card: "summary_large_image",
      title: `${PLUGIN_NAME} - CSS Development Supercharged`,
      description:
        "Intelligent CSS custom properties support for JetBrains IDEs. Autocomplete, documentation, color swatches, and @import resolution.",
      images: ["/static/twitter-card.png"],
      creator: "@litehode",
    },

    // Icons for branding and recognition
    icons: {
      icon: [
        {
          url: "/icon1.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/icon0.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },

    // Manifest for PWA features
    manifest: "/manifest.json",

    // Verification for search engines
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification
    },

    // Additional metadata for enhanced SEO
    category: "Developer Tools",
    classification: "IDE Plugin",

    // Dynamic structured metadata with real data
    other: {
      // Schema.org structured data indicators
      "article:author": "Stian Larsen",
      "article:publisher": "Stian Larsen",
      "software:version": CURRENT_VERSION,
      "software:operating-system": "Windows, macOS, Linux",
      "software:programming-language": "Kotlin, TypeScript",
      "software:application-category": "DeveloperApplication",

      // Real plugin metadata
      "plugin:ide": "IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, RubyMine",
      "plugin:version": CURRENT_VERSION,
      "plugin:compatibility": "JetBrains 2025.1+",
      "plugin:languages": "CSS, SCSS, SASS, LESS, JavaScript, TypeScript",

      // Dynamic quality indicators (real data)
      "plugin:downloads": pluginStats?.downloads.toString() || "100+",
      "plugin:rating": pluginStats?.rating.toString() || "4.0",
      "quality:rating": pluginStats?.rating.toString() || "4.0",
      "downloads:total": pluginStats?.downloads.toString() || "100+",
      "last-updated": new Date().toISOString().split("T")[0],
    },
  };
}
