"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Interactive3DPreview.module.scss";
import useCarousel from "../useCarousel";

interface Interactive3DPreviewProps {
  srcs: string[];
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
  interval?: number;
}

export const Interactive3DPreview: React.FC<Interactive3DPreviewProps> = ({
  srcs,
  alt = "",
  quality = 75, // Reduced from 100 for better performance
  interval = 4000,
  height,
  width,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState(
    "rotateX(25deg) rotateY(-15deg) rotateZ(5deg)",
  );

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
        <Image
          key={src}
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={idx === 0}
          fetchPriority={idx === 0 ? "high" : undefined}
          loading={idx === 0 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 90vw, (min-width: 1440px) 827px, 700px"
          className={`
            ${styles.preview}
            ${idx === activeIndex ? styles.active : styles.inactive}
            ${isHovered ? styles.interactive : ""}
          `}
          style={{ transform }}
          // Add blur placeholder for better perceived performance
          placeholder="empty"
        />
      ))}
    </div>
  );
};
