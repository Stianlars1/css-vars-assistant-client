"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Sections.module.scss";

export default function Screenshots({ images }: { images: string[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  function slideWidth() {
    const first = track.current?.firstElementChild;
    const second = first?.nextElementSibling;
    if (!(first instanceof HTMLElement)) return 0;
    // Distance between two slides, which includes the gap.
    return second instanceof HTMLElement
      ? second.offsetLeft - first.offsetLeft
      : first.offsetWidth;
  }

  function move(step: number) {
    track.current?.scrollBy({ left: step * slideWidth(), behavior: "smooth" });
  }

  return (
    <section
      className={styles.section}
      id="preview"
      aria-labelledby="preview-heading"
    >
      <div className={`site-container ${styles.previewTop}`}>
        <header className={`section-heading ${styles.previewHeading}`}>
          <h2 id="preview-heading" className="spectrum-text">
            Screenshots
          </h2>
          <p>
            The plugin at work in the IDE, as published on JetBrains
            Marketplace.
          </p>
        </header>
        <div className={styles.previewControls}>
          <span aria-live="polite">
            {current + 1} / {images.length}
          </span>
          <button
            type="button"
            aria-label="Previous screenshot"
            disabled={current === 0}
            onClick={() => move(-1)}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            disabled={current === images.length - 1}
            onClick={() => move(1)}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        className={styles.track}
        tabIndex={0}
        aria-label="Plugin screenshots"
        onScroll={(event) => {
          const width = slideWidth();
          if (!width) return;
          const next = Math.round(event.currentTarget.scrollLeft / width);
          setCurrent(Math.max(0, Math.min(images.length - 1, next)));
        }}
      >
        {images.map((src, index) => (
          <li key={src}>
            <Image
              src={src}
              alt={`CSS Variables Assistant screenshot ${index + 1} of ${images.length}`}
              width={1200}
              height={760}
              sizes="(max-width: 760px) 86vw, 820px"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
