// src/components/seo/StructuredData/StructuredDataChangelog.tsx
import Script from "next/script";
import { IdeaPlugin } from "@/app/actions/fetchJetBrainsPlugin";
import { HOST } from "@/lib/config";

/**
 * Enhanced HTML-to-text converter for changelog release notes
 * Preserves logical structure while creating clean plaintext
 * that's readable in schema.org structured data
 */
function htmlToPlaintext(html: string): string {
  if (!html?.trim()) return "";

  let text = html;

  // 1) First, handle HTML entities
  text = text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"');

  // 2) Remove version headers (they're already in the structured data)
  text = text.replace(/<h[1-6][^>]*>\s*\d+\.\d+\.\d+[^<]*<\/h[1-6]>/gi, "");

  // 3) Convert section headers (Added, Changed, Fixed, etc.)
  text = text.replace(
    /<h([2-6])[^>]*>(Added|Changed|Fixed|Removed|Deprecated|Security)\s*<\/h[2-6]>/gi,
    "\n$2:",
  );

  // 4) Convert list items to clean bullets
  text = text.replace(/<li[^>]*>\s*(.*?)\s*<\/li>/gi, "• $1");

  // 5) Handle list containers
  text = text.replace(/<\/?[uo]l[^>]*>/gi, "");

  // 6) Convert paragraphs and breaks to line breaks
  text = text.replace(/<\/p>/gi, "\n");
  text = text.replace(/<p[^>]*>/gi, "");
  text = text.replace(/<br\s*\/?>/gi, "\n");

  // 7) Remove code/emphasis tags but keep content
  text = text.replace(/<\/?(?:code|em|strong|b|i|span)[^>]*>/gi, "");

  // 8) Strip all remaining HTML tags
  text = text.replace(/<\/?[^>]+>/gi, "");

  // 9) Clean up whitespace and normalize
  text = text
    .replace(/[ \t]+/g, " ") // collapse spaces
    .replace(/\n[ \t]+/g, "\n") // remove leading spaces
    .replace(/[ \t]+\n/g, "\n") // remove trailing spaces
    .replace(/\n{3,}/g, "\n\n") // max 2 newlines
    .replace(/^\n+/, "") // remove leading newlines
    .replace(/\n+$/, "") // remove trailing newlines
    .trim();

  return text;
}

interface Props {
  versions: IdeaPlugin[]; // already sorted newest-first in fetcher
}

export default function StructuredDataChangelog({ versions }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CSS Variables Assistant – Changelog",
    description:
      "Version history and release notes for the CSS Variables Assistant JetBrains plug-in.",
    url: `${HOST}/changelog`,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: versions.map((version, index) => {
      const cleanReleaseNotes = htmlToPlaintext(version.changeNotesHtml);

      return {
        "@type": "ListItem",
        position: index + 1, // 1-based, newest first
        item: {
          "@type": "SoftwareApplication",
          name: version.name || "CSS Variables Assistant",
          softwareVersion: version.version,
          datePublished: new Date(version.date).toISOString().split("T")[0], // YYYY-MM-DD
          releaseNotes: cleanReleaseNotes,
          url: `${HOST}/changelog#v${version.version}`,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Cross-platform",
          ...(version.vendor?.name && {
            author: {
              "@type": "Organization",
              name: version.vendor.name,
              ...(version.vendor.url && { url: version.vendor.url }),
              ...(version.vendor.email && { email: version.vendor.email }),
            },
          }),
        },
      };
    }),
  };

  return (
    <Script
      id="json-ld-changelog"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
    />
  );
}
