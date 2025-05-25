"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Interactive3DPreview.module.scss";

interface Interactive3DPreviewProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
}

export const Interactive3DPreview: React.FC<Interactive3DPreviewProps> = ({
  src,
  alt,
  width = 700,
  height = 700,
  quality = 100,
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

    // Calculate rotation based on mouse position
    // Normalize to -1 to 1 range
    const rotateY = ((x - centerX) / centerX) * -10; // Max 15deg rotation
    const rotateX = -((y - centerY) / centerY) * -25; // Max 15deg rotation, inverted
    const rotateZ = ((x - centerX) / centerX) * -2; // Subtle Z rotation

    setTransform(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) `,
    );
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Return to default 3D position
    setTransform("rotateX(25deg) rotateY(-15deg) rotateZ(5deg) ");
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={styles.previewWrapper}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fetchPriority="high"
        loading="eager"
        quality={quality}
        priority={true}
        className={`${styles.preview} ${isHovered ? styles.interactive : ""}`}
        width={width}
        height={height}
        placeholder={"blur"}
        blurDataURL={src}
        style={{
          transform: transform,
        }}
      />
    </div>
  );
};
