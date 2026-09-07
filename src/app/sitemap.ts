import type { MetadataRoute } from "next";
import { HOST } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: HOST, changeFrequency: "monthly", priority: 1 },
    { url: `${HOST}/faq`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${HOST}/changelog`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
