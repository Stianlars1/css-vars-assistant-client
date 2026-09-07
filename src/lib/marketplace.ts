import "server-only";
import {
  CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID,
  MINUTES_30,
} from "./constants";

export type MarketplaceStats = {
  downloads: number | null;
  rating: { value: number; count: number } | null;
};

const pluginApi = `https://plugins.jetbrains.com/api/plugins/${CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID}`;

async function fetchMarketplace(
  path: string,
): Promise<Record<string, unknown>> {
  const response = await fetch(`${pluginApi}${path}`, {
    next: { revalidate: MINUTES_30 },
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`Marketplace returned ${response.status}`);
  const data: unknown = await response.json();
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("Invalid Marketplace response");
  }
  return data as Record<string, unknown>;
}

export async function getMarketplaceStats(): Promise<MarketplaceStats> {
  const [plugin, ratings] = await Promise.allSettled([
    fetchMarketplace(""),
    fetchMarketplace("/rating"),
  ]);
  const stats: MarketplaceStats = { downloads: null, rating: null };

  if (plugin.status === "fulfilled") {
    const downloads = plugin.value.downloads;
    if (
      typeof downloads === "number" &&
      Number.isSafeInteger(downloads) &&
      downloads >= 0
    ) {
      stats.downloads = downloads;
    }
  }

  if (ratings.status === "fulfilled") {
    const { meanRating, votes } = ratings.value;
    if (
      typeof meanRating === "number" &&
      meanRating > 0 &&
      meanRating <= 5 &&
      votes &&
      typeof votes === "object" &&
      !Array.isArray(votes)
    ) {
      const entries = Object.entries(votes);
      const valid = entries.every(
        ([star, count]) =>
          /^[1-5]$/.test(star) &&
          typeof count === "number" &&
          Number.isSafeInteger(count) &&
          count >= 0,
      );
      const count = valid
        ? entries.reduce((total, [, count]) => total + count, 0)
        : 0;
      if (Number.isSafeInteger(count) && count > 0) {
        stats.rating = { value: meanRating, count };
      }
    }
  }

  return stats;
}
