// Updated Interactive3DPreview.tsx with proper Next.js Image optimization
"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Interactive3DPreview.module.scss";
import useCarousel from "./useCarousel";

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
  width = 700,
  height = 700,
  quality = 75, // Reduced from 100 for better performance
  interval = 4000,
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
          width={2430}
          height={1404}
          quality={quality}
          // Use priority for the first image (LCP optimization)
          priority={idx === 0}
          // Use eager loading for active image, lazy for others
          loading={idx === activeIndex ? "eager" : "lazy"}
          // Add sizes attribute for responsive loading
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 90vw, 700px"
          className={`
            ${styles.preview}
            ${idx === activeIndex ? styles.active : styles.inactive}
            ${isHovered ? styles.interactive : ""}
          `}
          style={{ transform }}
          // Add blur placeholder for better perceived performance
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      ))}
    </div>
  );
};
