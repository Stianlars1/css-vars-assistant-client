"use server";

import { PluginData, PluginInfo, PluginVersion } from "@/types/plugin";
import { CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID } from "@/lib/constants";

export async function fetchPluginData(): Promise<PluginInfo | null> {
  const pluginId = CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID;
  try {
    // Fetch plugin details
    const pluginResponse = await fetch(
      `https://plugins.jetbrains.com/api/plugins/${pluginId}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!pluginResponse.ok) {
      console.error(`Failed to fetch plugin data: ${pluginResponse.status}`);
      return null;
    }

    const pluginVersions = await fetch(
      `https://plugins.jetbrains.com/api/plugins/${CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID}/updateVersions`,

      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!pluginVersions.ok) {
      console.error(
        `Failed to fetch plugin versions: ${pluginVersions.status}`,
      );
    }

    const pluginData: PluginData = await pluginResponse.json();
    const versionsData: PluginVersion[] = await pluginVersions.json();

    // Fetch plugin rating
    const ratingResponse = await fetch(
      `https://plugins.jetbrains.com/api/plugins/${pluginId}/rating`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!ratingResponse.ok) {
      console.error(`Failed to fetch plugin rating: ${ratingResponse.status}`);
      return null;
    }

    const pluginRating = await ratingResponse.json();
    const sortedVersions = versionsData?.sort((a, b) =>
      b.version > a.version || b.id > a.id ? 1 : -1,
    );
    const pluginDataMerged: PluginData = {
      ...pluginData,
      versions: sortedVersions ?? [],
      latestVersion: sortedVersions[0] ?? null,
    };

    return {
      pluginData: pluginDataMerged,
      pluginRating,
    };
  } catch (error) {
    console.error("Error fetching plugin data:", error);
    return null;
  }
}
