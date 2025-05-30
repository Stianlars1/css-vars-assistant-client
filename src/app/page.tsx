// src/app/page.tsx (Page-level dynamic metadata)
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";
import { CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID } from "@/lib/constants";
import type { Metadata, ResolvingMetadata } from "next";
import { extractPluginStats } from "@/lib/utils/pluginStats";
import { StructuredData } from "@/components/seo/StructuredData/StructuredData";
import { PageSections } from "@/components/sections/PageSections";
import { HiddenSeoContent } from "@/components/seo/HiddenSeoContent/HiddenSeoContent";

// ✅ CORRECT: Proper SEO-friendly titles
export async function generateMetadata(
  props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Fetch real plugin data for dynamic metadata
  const pluginData = await fetchPluginData();
  const pluginStats = extractPluginStats(pluginData);

  // Access parent metadata to inherit and extend
  const previousMetadata = await parent;

  // Get existing keywords from parent and add new ones
  const existingKeywords = previousMetadata.keywords || [];
  const dynamicKeywords = pluginStats?.tags || [];

  const staticTitle =
    "CSS Variables Assistant - JetBrains Plugin for CSS Custom Properties";

  return {
    // ✅ PROPER SEO TITLE: Descriptive and keyword-rich
    title: pluginStats
      ? `CSS Variables Assistant - ${pluginStats.downloads}+ Downloads | JetBrains Plugin`
      : "CSS Variables Assistant - JetBrains Plugin for CSS Custom Properties",

    // Enhanced description with real stats
    description: pluginStats
      ? `Advanced CSS custom properties plugin for IntelliJ IDEA, WebStorm & JetBrains IDEs. Rated ${pluginStats.rating.toFixed(1)}/5.0 with ${pluginStats.downloads}+ downloads. Intelligent autocomplete, documentation, color swatches, and @import resolution. Supports CSS, SCSS, SASS, LESS.`
      : undefined, // Will use parent description

    // INHERIT and EXTEND keywords (not replace)
    keywords: [
      ...(Array.isArray(existingKeywords) ? existingKeywords : []),
      ...dynamicKeywords,
    ],

    // EXTEND Open Graph (not replace) - using your existing images
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName: "CSS Variables Assistant",
      title: pluginStats
        ? `CSS Variables Assistant - ${pluginStats.downloads}+ Downloads | Advanced CSS Development`
        : `${staticTitle} | Advanced CSS Development`,
      description: pluginStats
        ? `Advanced CSS development plugin for JetBrains IDEs. Rated ${pluginStats.rating.toFixed(1)}/5.0 with ${pluginStats.downloads}+ downloads. Intelligent autocomplete, documentation, color swatches.`
        : "Advanced CSS development plugin for JetBrains IDEs. Intelligent autocomplete, documentation, color swatches, and @import resolution.",
      images: [
        {
          url: "/static/og-image.png",
          width: 1200,
          height: 630,
          alt: "CSS Variables Assistant Plugin Interface showing autocomplete and color swatches",
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pluginStats
        ? `CSS Variables Assistant - ${pluginStats.downloads}+ Downloads`
        : staticTitle,
      description: pluginStats
        ? `Advanced CSS custom properties support for JetBrains IDEs. Rated ${pluginStats.rating.toFixed(1)}/5.0 stars.`
        : "Advanced CSS custom properties support for JetBrains IDEs. Autocomplete, documentation, color swatches.",
      images: ["/static/twitter-card.png"],
    },

    // EXTEND other metadata (not replace)
    ...(pluginStats && {
      other: {
        "plugin:downloads": pluginStats.downloads.toString(),
        "plugin:rating": pluginStats.rating.toString(),
        "quality:rating": pluginStats.rating.toString(),
        "downloads:total": pluginStats.downloads.toString(),
        "last-updated": new Date().toISOString().split("T")[0],
      },
    }),
  };
}

export default async function Home() {
  const pluginData = await fetchPluginData();
  const pluginStats = extractPluginStats(pluginData);

  return (
    <>
      <StructuredData pluginStats={pluginStats} />

      <PageSections pluginData={pluginData} pluginStats={pluginStats} />
      <HiddenSeoContent pluginStats={pluginStats} />
    </>
  );
}
