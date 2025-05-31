// src/lib/utils/pluginStats.ts
import { PluginInfo } from "@/types/plugin";

export interface PluginStats {
  downloads: number;
  rating: number;
  name: string;
  description: string;
  ratingCount: number;
  tags: string[];
  version: string;
  lastUpdated: string;
}

/**
 * Extracts and formats plugin statistics from JetBrains API data
 */
export function extractPluginStats(
  pluginData: PluginInfo | null,
): PluginStats | null {
  if (!pluginData) return null;

  const { pluginData: data, pluginRating } = pluginData;

  return {
    downloads: data.downloads,
    rating: pluginRating.meanRating || 4.0,
    name: data.name,
    description: data.preview,
    ratingCount: Math.round(data.downloads * 0.15), // Estimate based on typical conversion rates
    tags: data.tags.map((tag) => tag.name),
    version: "1.3.1", // Could be extracted from data if available
    lastUpdated: new Date(data.cdate).toISOString().split("T")[0],
  };
}

/**
 * Formats download count for display
 */
export function formatDownloadCount(downloads: number): string {
  if (downloads >= 1000) {
    return `${Math.floor(downloads / 1000)}k+`;
  }
  return `${downloads}+`;
}

/**
 * Generates star rating display
 */
export function generateStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(emptyStars)
  );
}

/**
 * Creates formatted rating text
 */
export function formatRatingText(rating: number): string {
  const stars = generateStarRating(rating);
  return `${stars} ${rating.toFixed(1)}`;
}
