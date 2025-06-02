// src/components/seo/StructuredData/StructuredData.tsx
import Script from "next/script";
import { jsonLd as staticJsonLd } from "@/app/jsonLd";

interface StructuredDataProps {
  pluginStats?: {
    downloads: number;
    rating: number;
    name: string;
    description: string;
    version?: string; // optional extra
    lastUpdated?: string; // ISO date e.g. 2025-06-02
  } | null;
}

/**
 * Clone the JSON-LD then patch the SoftwareApplication node
 * with real-time stats so we keep the imported constant immutable.
 */
function buildDynamicJsonLd(pluginStats: StructuredDataProps["pluginStats"]) {
  if (!pluginStats) return staticJsonLd;

  // Deep-clone to avoid accidental mutation
  const jsonLd = structuredClone(staticJsonLd);

  // Find the SoftwareApplication node (first item in our graph by design)
  const appNode = jsonLd["@graph"].find(
    (n: { ["@type"]: string }) => n["@type"] === "SoftwareApplication",
  );

  if (!appNode) return jsonLd; // fallback (should never happen)

  // Mandatory basics
  appNode.name = pluginStats.name ?? appNode.name;
  appNode.description = pluginStats.description ?? appNode.description;

  // Dynamic counts – keep numbers, not strings
  appNode.aggregateRating = {
    "@type": "AggregateRating", // keep this explicit
    ...appNode.aggregateRating, // (optional) retain any other keys
    ratingValue: Number(pluginStats.rating.toFixed(1)),
    ratingCount: Math.round(pluginStats.downloads * 0.15),
    bestRating: 5,
  };

  appNode.interactionStatistic = {
    "@type": "InteractionCounter",
    interactionType: "https://schema.org/DownloadAction",
    userInteractionCount: pluginStats.downloads,
  };

  // Optional extras
  if (pluginStats.version) appNode.softwareVersion = pluginStats.version;
  if (pluginStats.lastUpdated) appNode.dateModified = pluginStats.lastUpdated;

  return jsonLd;
}

export const StructuredData = ({ pluginStats }: StructuredDataProps) => {
  const enhancedJsonLd = buildDynamicJsonLd(pluginStats);

  return (
    <Script
      id="json-ld-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedJsonLd) }}
    />
  );
};
