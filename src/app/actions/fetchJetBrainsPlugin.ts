"use server";

import { XMLParser } from "fast-xml-parser";
import {
  CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID,
  MINUTES_30,
} from "@/lib/constants";

export interface IdeaPlugin {
  downloads: number;
  size: number;
  date: number; // epoch-ms
  updatedDate: number; // epoch-ms
  url: string;
  name: string;
  id: string;
  descriptionHtml: string;
  version: string;
  vendor: { email?: string; url?: string; name?: string };
  rating: number;
  changeNotesHtml: string;
  ideaVersion: { min?: string; max?: string; sinceBuild?: string };
}

export default async function fetchPlugin(): Promise<IdeaPlugin[]> {
  const res = await fetch(
    `https://plugins.jetbrains.com/plugins/list?pluginId=${CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID}`,
    {
      headers: { Accept: "application/xml" },
      // re-use the response for an hour (adjust as you like)
      next: { revalidate: MINUTES_30 },
    },
  );
  if (!res.ok) throw new Error(`JetBrains API ${res.status}`);

  const xml = await res.text();
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    cdataPropName: "cdata",
    trimValues: true,
  });

  const root = parser.parse(xml) as {
    "plugin-repository": { category: { "idea-plugin": any[] } };
  };

  return root["plugin-repository"].category["idea-plugin"].map((p) => ({
    downloads: +p.downloads,
    size: +p.size,
    date: +p.date,
    updatedDate: +p.updatedDate,
    url: p.url ?? "",
    name: p.name,
    id: p.id,
    descriptionHtml:
      typeof p.description === "object" ? p.description.cdata : p.description,
    version: p.version,
    vendor: {
      email: p.vendor?.email,
      url: p.vendor?.url,
      name: typeof p.vendor === "object" ? p.vendor?.cdata : p.vendor,
    },
    rating: +p.rating,
    changeNotesHtml:
      typeof p["change-notes"] === "object"
        ? p["change-notes"].cdata
        : p["change-notes"],
    ideaVersion: {
      min: p["idea-version"]?.min,
      max: p["idea-version"]?.max,
      sinceBuild: p["idea-version"]?.sinceBuild,
    },
  }));
}
