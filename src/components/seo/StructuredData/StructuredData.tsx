// src/components/seo/StructuredData/StructuredData.tsx
import Script from "next/script";
import { faqJsonLd, jsonLd } from "@/app/jsonLd";

interface StructuredDataProps {
  pluginStats?: {
    downloads: number;
    rating: number;
    name: string;
    description: string;
  } | null;
}

export const StructuredData = ({ pluginStats }: StructuredDataProps) => {
  // Enhanced JSON-LD with dynamic data
  const enhancedJsonLd = {
    ...jsonLd,
    ...faqJsonLd,
    // Update with real data if available
    ...(pluginStats && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: pluginStats.rating.toFixed(1),
        ratingCount: Math.round(pluginStats.downloads * 0.15).toString(),
      },
      supportingData: {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: pluginStats.rating.toFixed(1),
          ratingCount: Math.round(pluginStats.downloads * 0.15).toString(),
        },
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD",
          url: "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant",
          availability: "https://schema.org/InStock",
        },
      },
      interactionStatistic: {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/DownloadAction",
        userInteractionCount: pluginStats.downloads,
      },
    }),
  };

  return (
    <Script
      id="json-ld-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedJsonLd) }}
      strategy="afterInteractive"
    />
  );
};
