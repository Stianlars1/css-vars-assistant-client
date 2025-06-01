import { useDarkMode } from "@/hooks/useDarkmode";
import { useEffect } from "react";

export const useUpdateThemeColor = () => {
  const lightColor = "#faf9f9";
  const darkColor = "#050505";
  const isDark = useDarkMode();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // For Safari on macOS in dark mode, we need a special handling
    if (isDark) {
      // When system is dark, Safari prioritizes the dark mode meta tag
      // So we need to set both the base and dark mode tag to match our desired color
      const currentColor = isDark ? darkColor : lightColor;

      // Base tag
      const baseTag = document.createElement("meta");
      baseTag.setAttribute("name", "theme-color");
      baseTag.setAttribute("content", currentColor);
      document.head.appendChild(baseTag);

      // Dark mode tag - this is what Safari will actually use
      const darkTag = document.createElement("meta");
      darkTag.setAttribute("name", "theme-color");
      darkTag.setAttribute("media", "(prefers-color-scheme: dark)");
      darkTag.setAttribute("content", currentColor); // Use current theme color instead of darkColor
      document.head.appendChild(darkTag);
    } else {
      // In light mode, Safari behaves normally
      const baseTag = document.createElement("meta");
      baseTag.setAttribute("name", "theme-color");
      baseTag.setAttribute("content", isDark ? darkColor : lightColor);
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
