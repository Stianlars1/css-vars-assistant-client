import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CSS Variables Assistant",
    short_name: "CSS Vars",
    description:
      "Advanced CSS custom properties plugin for JetBrains IDEs. Intelligent autocomplete, documentation, color swatches, and @import resolution.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4A9EFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["developer", "productivity", "utilities"],
    lang: "en",
  };
}
