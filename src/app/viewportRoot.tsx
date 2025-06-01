import type { Viewport } from "next";

export const viewportRoot: Viewport = {
  // Ensures proper width and initial scale on mobile devices
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,

  // Prevent users from zooming on mobile as it can break the audio player interface
  // Remove this if you want to allow zooming for accessibility
  maximumScale: 5,
  userScalable: true,

  // Theme color for mobile browsers
  themeColor: [
    // Default theme color
    { color: "#faf9f9" },
    { color: "#050505", media: "(prefers-color-scheme: dark)" },
    // Light mode theme color
    { color: "#faf9f9", media: "(prefers-color-scheme: light)" },
  ],

  // Color scheme preference
  colorScheme: "light dark",

  // Ensure proper viewportRoot height on mobile browsers
  // This helps with mobile browser navigation bars
  viewportFit: "cover",

  // Improve interaction on iOS devices
  interactiveWidget: "resizes-visual",
};
