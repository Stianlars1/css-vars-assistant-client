import { useEffect, useState } from "react";

/**
 * Cycles through a list of items every <interval> ms.
 * Returns the current index.
 */
export default function useCarousel(length: number, interval = 4000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return; // nothing to do
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);

  return index;
}
