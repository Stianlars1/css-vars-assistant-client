import type { MetadataRoute } from "next";
import { HOST } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${HOST}/sitemap.xml`,
  };
}
