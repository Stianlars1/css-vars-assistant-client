"use server";

import { PluginInfo } from "@/types/plugin";

export async function fetchPluginData(
  pluginId: string | number,
): Promise<PluginInfo | null> {
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

    const pluginData = await pluginResponse.json();

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
    console.log("Plugin Rating:", pluginRating);

    return {
      pluginData,
      pluginRating,
    };
  } catch (error) {
    console.error("Error fetching plugin data:", error);
    return null;
  }
}
