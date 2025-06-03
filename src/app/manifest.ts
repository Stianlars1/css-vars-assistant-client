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
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon0.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon1.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "48x48",
        type: "image/png",
      },
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
