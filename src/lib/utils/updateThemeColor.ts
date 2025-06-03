import { useDarkMode } from "@/hooks/useDarkmode";
import { useEffect } from "react";

export const useUpdateThemeColor = () => {
  const lightColor = "#faf9f9";
  const darkColor = "#050505";
  const isDark = useDarkMode();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // First, remove existing meta tags
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((tag) => tag.remove());

    // For Safari on macOS in dark mode, we need a special handling
    if (isDark) {
      // When system is dark, Safari prioritizes the dark mode meta tag

      // Base tag
      const baseTag = document.createElement("meta");
      baseTag.setAttribute("name", "theme-color");
      baseTag.setAttribute("content", darkColor);
      document.head.appendChild(baseTag);

      // Dark mode tag - this is what Safari will actually use
      const darkTag = document.createElement("meta");
      darkTag.setAttribute("name", "theme-color");
      darkTag.setAttribute("media", "(prefers-color-scheme: dark)");
      darkTag.setAttribute("content", darkColor); // Use current theme color instead of darkColor
      document.head.appendChild(darkTag);

      const lightTag = document.createElement("meta");
      lightTag.setAttribute("name", "theme-color");
      lightTag.setAttribute("media", "(prefers-color-scheme: light)");
      lightTag.setAttribute("content", lightColor);
    } else {
      // In light mode, Safari behaves normally
      const baseTag = document.createElement("meta");
      baseTag.setAttribute("name", "theme-color");
      baseTag.setAttribute("content", lightColor);
      document.head.appendChild(baseTag);

      // Add media query tags
      const darkTag = document.createElement("meta");
      darkTag.setAttribute("name", "theme-color");
      darkTag.setAttribute("media", "(prefers-color-scheme: dark)");
      darkTag.setAttribute("content", darkColor);
      document.head.appendChild(darkTag);

      const lightTag = document.createElement("meta");
      lightTag.setAttribute("name", "theme-color");
      lightTag.setAttribute("media", "(prefers-color-scheme: light)");
      lightTag.setAttribute("content", lightColor);
      document.head.appendChild(lightTag);
    }
  }, [isDark]);
};
