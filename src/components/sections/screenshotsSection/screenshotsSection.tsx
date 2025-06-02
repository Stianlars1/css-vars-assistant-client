// src/components/ScreenshotGallery/ScreenshotGallery.tsx
"use client";

import { useState } from "react";
import styles from "./screenshotsSection.module.scss";
import { PluginInfo } from "@/types/plugin";
import { JETBRAINS_PLUGINS_HREF } from "@/lib/urls";
import Image from "next/image";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";

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
    <section
      style={{
        marginBlockStart: "40px",
      }}
      id={"screenshots"}
      className={styles.gallery}
    >
      <SectionHeader
        subtitle={"Explore the plugin's features through these screenshots."}
        gradient={"gradients.spectrum.vibrantSpectrum"}
        className={styles.header}
      >
        Preview
      </SectionHeader>
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
          width={1200}
          height={760}
          loading={"lazy"}
          fetchPriority={"auto"}
          priority={false}
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

            <Image
              src={screenshot}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={45}
              loading="lazy"
              placeholder="blur"
              fetchPriority={"auto"}
              blurDataURL="data:image/png;base64,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"
              className={styles.thumbnail}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
