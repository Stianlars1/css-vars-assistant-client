"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Interactive3DPreview.module.scss";
import useCarousel from "./useCarousel";

interface Interactive3DPreviewProps {
  /** One or more image URLs */
  srcs: string[];
  /** Optional alt text used for every slide */
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
  /** ms between slides */
  interval?: number;
}

export const Interactive3DPreview: React.FC<Interactive3DPreviewProps> = ({
  srcs,
  alt = "",
  width = 700,
  height = 700,
  quality = 100,
  interval = 4000,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState(
    "rotateX(25deg) rotateY(-15deg) rotateZ(5deg)",
  );

  /* ------------------------------------------------------------------ */
  /* 3-D tilt (exactly like your original component)                    */
  /* ------------------------------------------------------------------ */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * -10;
    const rotateX = -((y - centerY) / centerY) * -25;
    const rotateZ = ((x - centerX) / centerX) * -2;

    setTransform(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) `,
    );
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("rotateX(25deg) rotateY(-15deg) rotateZ(5deg) ");
  }, []);

  /* ------------------------------------------------------------------ */
  /*  🔄  tiny carousel                                                 */
  /* ------------------------------------------------------------------ */
  const activeIndex = useCarousel(srcs.length, interval);

  return (
    <div
      ref={wrapperRef}
      className={styles.previewWrapper}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {srcs.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={alt}
          width={2430}
          height={1404}
          fetchPriority="high"
          loading="eager"
          className={`
            ${styles.preview}
            ${idx === activeIndex ? styles.active : styles.inactive}
            ${isHovered ? styles.interactive : ""}
          `}
          style={{ transform }}
        />
      ))}
    </div>
  );
};
