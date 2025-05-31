// src/components/ScreenshotGallery/ScreenshotGallery.tsx
"use client";

import { useState } from "react";
import styles from "./screenshotsSection.module.scss";
import { PluginInfo } from "@/types/plugin";
import { JETBRAINS_PLUGINS_HREF } from "@/lib/urls";
import Image from "next/image";

export default function ScreenshotsSection({
  pluginInfo,
}: {
  pluginInfo: PluginInfo | null;
}) {
  const screenshots =
    pluginInfo?.pluginData.screens.map(
      (link) => `${JETBRAINS_PLUGINS_HREF}/${link.url.toString()}`,
    ) ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={prevImage}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              fill="currentColor"
            />
          </svg>
        </button>

        <Image
          src={screenshots[currentIndex]}
          alt={`Plugin screenshot ${currentIndex + 1}`}
          width={900}
          height={500}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          className={styles.mainImage}
        />

        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={nextImage}
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className={styles.thumbnails}>
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToImage(index)}
            aria-label={`View screenshot ${index + 1}`}
          >
            <img src={screenshot} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
