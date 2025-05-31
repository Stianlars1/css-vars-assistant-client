"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./Interactive3DPreview.module.scss";
import useCarousel from "@/components/sections/heroSection/useCarousel";

// Dynamically import the carousel functionality
const CarouselImages = dynamic(() => import("./CarouselImages"), {
  ssr: false,
  loading: () => null,
});

interface Interactive3DPreviewProps {
  srcs: string[];
  alt?: string;
  firstImageServer?: React.ReactNode; // Server rendered first image
  quality?: number;
  interval?: number;
}

export const Interactive3DPreview: React.FC<Interactive3DPreviewProps> = ({
  srcs,
  alt = "",
  firstImageServer,
  quality = 75,
  interval = 4000,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [transform, setTransform] = useState(
    "rotateX(25deg) rotateY(-15deg) rotateZ(5deg)",
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
    );
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("rotateX(25deg) rotateY(-15deg) rotateZ(5deg)");
  }, []);

  // const activeIndex = useCarousel(srcs.length, interval);
  const activeIndex = 0;

  return (
    <div
      ref={wrapperRef}
      className={styles.previewWrapper}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Server-rendered first image for immediate display */}
      {firstImageServer && firstImageServer}

      {/* Client-side carousel images */}
      {isMounted && (
        <CarouselImages
          srcs={srcs}
          alt={alt}
          quality={quality}
          activeIndex={activeIndex}
          isHovered={isHovered}
          transform={transform}
          skipFirst={!!firstImageServer}
        />
      )}
    </div>
  );
};
