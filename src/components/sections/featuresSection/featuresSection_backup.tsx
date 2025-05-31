/* --------------------------------------------------------------------------
   src/components/sections/featuresSection/FeaturesSection.tsx
--------------------------------------------------------------------------- */
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./featuresSection.module.scss";
import hoverStyles from "./featureCardHover.module.scss";

import {
  featuresSectionData,
  getIconForFeature,
} from "@/components/sections/featuresSection/lib/features";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";
import { cx } from "@/lib/utils/cx";
import { IdeSimulation } from "@/components/ideSimulation/ideSimulation";
import { ShowAnimationCheckbox } from "@/components/sections/featuresSection/components/showAnimationCheckbox/showAnimationCheckbox";

/* ------------------------------------------------------------------ */

export const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const canHover = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    [],
  );

  /* click / touch toggler */
  const handleCardActivate = useCallback(
    (idx: number) => {
      console.log("handleCardActivate", idx, activeIndex);
      if (activeIndex === idx) {
        console.log("Toggling off feature card", idx);
        setActiveIndex(null); // second tap closes
      } else {
        console.log("Activating feature card", idx);
        setActiveIndex(idx); // first tap opens
      }
    },
    [activeIndex],
  );
  /* close the panel when the user taps outside on mobile */
  /*  useEffect(() => {
    if (activeIndex === null || canHover) return;

    const close = () => {
      console.log("Closing feature card on pointer down outside");
      if (activeIndex)
      setActiveIndex(null);
    };
    window.addEventListener("pointerdown", close, { passive: false });

    return () => window.removeEventListener("pointerdown", close);
  }, [activeIndex, canHover]);*/

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!featuresRef.current) return;

    // 👇 tell TS the node-list contains HTMLElements
    const cards = featuresRef.current.querySelectorAll<HTMLElement>(
      `.${styles.feature}`,
    );

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardColorFromAttribute = card.getAttribute("data-card-color");
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      card.style.setProperty(
        "--active-card-color",
        `${cardColorFromAttribute}`,
      );
    });
  };

  console.log("activeIndex", activeIndex);

  return (
    <section className={styles.featuresSection}>
      <SectionHeader
        title="Features"
        subtitle="Professional CSS custom properties development for JetBrains IDEs"
        gradient="gradients.classic.natureFresh"
      />

      <div className={styles.featuresIntro}>
        <p>
          Transform your CSS development workflow with intelligent autocomplete,
          comprehensive documentation, and advanced IntelliSense for CSS custom
          properties. Perfect for modern CSS frameworks, design systems, and
          responsive web development.
        </p>
      </div>

      {/* ----------------------------------------------------------------
           Feature grid
         ---------------------------------------------------------------- */}
      <ShowAnimationCheckbox
        onChange={(checked: boolean) => setIsAnimationsEnabled(checked)}
      />
      <div
        ref={featuresRef}
        className={styles.features}
        onMouseMove={handleMouseMove}
      >
        {featuresSectionData.map((feature, idx) => (
          <article
            key={idx}
            className={cx(
              styles.feature,
              hoverStyles.featureCard,
              isAnimationsEnabled && activeIndex === idx && hoverStyles.active,
              isAnimationsEnabled &&
                activeIndex !== null &&
                activeIndex !== idx &&
                hoverStyles.inactive,
            )}
            data-card-color={feature.hoverColor}
            onMouseEnter={canHover ? () => setActiveIndex(idx) : undefined}
            onMouseLeave={canHover ? () => setActiveIndex(null) : undefined}
            onClick={!canHover ? () => handleCardActivate(idx) : undefined}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardActivate(idx);
              }
            }}
            tabIndex={0}
            aria-expanded={activeIndex === idx}
            aria-label={`${feature.title} feature. ${activeIndex === idx ? "Tap to close" : "Tap to view animation"}`}
            role="button"
          >
            {/* ------------------------ FRONT CONTENT ------------------- */}
            <div className={hoverStyles.content}>
              <header className={styles.featureHeader}>
                <div className={styles.iconWrapper} data-feature={feature.icon}>
                  <div className={styles.icon}>
                    {getIconForFeature(feature.icon)}
                  </div>
                </div>

                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </header>

              <div className={styles.featureDetails}>
                <ul className={styles.featureList}>
                  {feature.details?.map((detail, dIdx) => (
                    <li key={dIdx} className={styles.featureDetail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEO keywords remain visually hidden */}
              <div className={styles.seoKeywords} aria-hidden="true">
                {feature.keywords?.join(", ")}
              </div>
            </div>

            {/* ------------------------ BACK (ANIMATED) ----------------- */}
            {isAnimationsEnabled && (
              <div className={hoverStyles.simulationWrapper}>
                <IdeSimulation
                  feature={
                    feature.icon as
                      | "autocomplete"
                      | "documentation"
                      | "scope"
                      | "sorting"
                  }
                  isActive={activeIndex === idx}
                />
              </div>
            )}
          </article>
        ))}
      </div>

      <div className={styles.featuresFooter}>
        <p>
          Compatible with <strong>IntelliJ IDEA</strong>,{" "}
          <strong>WebStorm</strong>,<strong> PhpStorm</strong>, and all
          JetBrains IDEs. Supports CSS, SCSS, SASS, LESS, and modern CSS-in-JS
          workflows.
        </p>
      </div>
    </section>
  );
};
