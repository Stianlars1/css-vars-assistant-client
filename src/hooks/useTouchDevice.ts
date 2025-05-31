/* --------------------------------------------------------------------------
   src/hooks/useTouchDevice.ts
--------------------------------------------------------------------------- */
import { useEffect, useState } from "react";

/**
 * Custom hook to detect if the device is primarily touch-based
 * Uses modern media queries for accurate detection
 */
export const useTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set hydrated state to prevent SSR mismatch
    setIsHydrated(true);

    // Check if device has hover capability and fine pointer (mouse)
    const checkTouchDevice = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      // Device is touch-based if it doesn't have hover or fine pointer
      setIsTouchDevice(!hasHover || !hasFinePointer);
    };

    // Initial check
    checkTouchDevice();

    // Listen for changes (e.g., connecting/disconnecting mouse)
    const hoverQuery = window.matchMedia("(hover: hover)");
    const pointerQuery = window.matchMedia("(pointer: fine)");

    // Listen for media query changes
    const handleChange = () => checkTouchDevice();

    hoverQuery.addEventListener("change", handleChange);
    pointerQuery.addEventListener("change", handleChange);

    return () => {
      hoverQuery.removeEventListener("change", handleChange);
      pointerQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Return false during SSR to match initial client state
  if (!isHydrated) {
    return false;
  }

  return isTouchDevice;
};

/**
 * Alternative hook that provides more detailed device capabilities
 */
export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    hasTouch: false,
    hasHover: false,
    hasFinePointer: false,
    hasCoarsePointer: false,
    isHydrated: false,
  });

  useEffect(() => {
    const checkCapabilities = () => {
      setCapabilities({
        hasTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        hasHover: window.matchMedia("(hover: hover)").matches,
        hasFinePointer: window.matchMedia("(pointer: fine)").matches,
        hasCoarsePointer: window.matchMedia("(pointer: coarse)").matches,
        isHydrated: true,
      });
    };

    checkCapabilities();

    // Listen for changes
    const queries = [
      window.matchMedia("(hover: hover)"),
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(pointer: coarse)"),
    ];

    const handleChange = () => checkCapabilities();

    queries.forEach((query) => {
      query.addEventListener("change", handleChange);
    });

    return () => {
      queries.forEach((query) => {
        query.removeEventListener("change", handleChange);
      });
    };
  }, []);

  return capabilities;
};
