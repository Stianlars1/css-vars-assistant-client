import "./globals.css";
import { assistant, dmSans, geistMono, geistSans, inter } from "@/fonts";
import { cx } from "@/lib/utils/cx";
import { PageContainer } from "@/components/layout/PageContainer/PageContainer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
// src/app/layout.tsx (Not page.tsx!)
import type { Metadata } from "next";
import { OG_IMAGE_URL, TWITTER_CARD_URL } from "@/lib/constants";
import { HOST } from "@/lib/config";
import Head from "next/head";

const PLUGIN_NAME = "CSS Variables Assistant";
const CURRENT_VERSION = "1.2.0";

// ⚠️ IMPORTANT: This should be in layout.tsx, not page.tsx!
export const metadata: Metadata = {
  // metadataBase should be set once in root layout
  metadataBase: new URL(HOST),

  // Title template for the entire site
  title: {
    template: `%s | ${PLUGIN_NAME}`,
    default: `${PLUGIN_NAME} - JetBrains Plugin for CSS Custom Properties`,
  },

  description:
    "Supercharge CSS development with intelligent autocomplete, documentation, and color swatches for CSS custom properties. Advanced @import resolution, JSDoc support, and multi-preprocessor compatibility for IntelliJ IDEA, WebStorm, and all JetBrains IDEs.",

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
    `CSS Variables Assistant ${CURRENT_VERSION}`,
    "JetBrains 2025.1 plugin",
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

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: PLUGIN_NAME,
    title: {
      template: `%s | ${PLUGIN_NAME}`,
      default: `${PLUGIN_NAME} - JetBrains Plugin for CSS Custom Properties`,
    },
    description:
      "Supercharge CSS development with intelligent autocomplete, documentation, and color swatches for CSS custom properties. Advanced @import resolution, JSDoc support, and multi-preprocessor compatibility for IntelliJ IDEA, WebStorm, and all JetBrains IDEs.",

    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${PLUGIN_NAME} - JetBrains Plugin Interface showing autocomplete and color swatches`,
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
    images: [TWITTER_CARD_URL],
    creator: "@litehode",
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

  // Manifest for PWA features
  manifest: "/manifest.json",

  // Verification for search engines
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },

  // Additional metadata for enhanced SEO
  category: "Developer Tools",

  // Custom metadata using 'other' field
  other: {
    // Schema.org structured data indicators
    "article:author": "Stian Larsen",
    "article:publisher": "Stian Larsen",
    "software:version": CURRENT_VERSION,
    "software:operating-system": "Windows, macOS, Linux",
    "software:programming-language": "Kotlin, TypeScript",
    "software:application-category": "DeveloperApplication",

    // Plugin-specific metadata
    "plugin:ide": "IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, RubyMine",
    "plugin:version": CURRENT_VERSION,
    "plugin:compatibility": "JetBrains 2025.1+",
    "plugin:languages": "CSS, SCSS, SASS, LESS, JavaScript, TypeScript",
    "last-updated": new Date().toISOString().split("T")[0],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Light mode toolbar */}
        <meta
          name="theme-color"
          content="#faf9f9"
          media="(prefers-color-scheme: light)"
        />
        {/* Dark mode toolbar */}
        <meta
          name="theme-color"
          content="#050505"
          media="(prefers-color-scheme: dark)"
        />
        {/* iOS Safari status-bar style */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/public/manifest.json" />
      </Head>
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          dmSans.variable,
          assistant.variable,
        )}
      >
        <PageContainer as={"div"} index={1}>
          <Navbar />
        </PageContainer>

        <PageContainer index={0} as={"main"}>
          {children}
        </PageContainer>
      </body>
    </html>
  );
}
