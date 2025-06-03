import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CSS Variables Assistant",
    short_name: "CSS",
    description:
      "Advanced CSS custom properties plugin for JetBrains IDEs. Intelligent autocomplete, documentation, color swatches, and @import resolution.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f9",
    theme_color: "#050505",

    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["developer", "productivity", "utilities"],
    lang: "en",
  };
}
