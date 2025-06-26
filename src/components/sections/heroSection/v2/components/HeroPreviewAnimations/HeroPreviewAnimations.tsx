"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./_ideSimulation.module.scss";
import Image from "next/image";

interface IdeSimulationProps {
  feature: "autocomplete" | "autocompleteWithSettings" | "documentation";
  isActive: boolean;
}

export function HeroPreviewAnimations({
  feature,
  isActive,
}: IdeSimulationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Kill any existing timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      if (!isActive) {
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
      });

      timelineRef.current = tl;

      // Base animation for all features
      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4 },
      );

      // Feature-specific animations
      switch (feature) {
        case "autocomplete":
          animateAutocomplete(tl, containerRef.current);
          break;
        case "autocompleteWithSettings":
          animateAutocompleteWithSettings(tl, containerRef.current);
          break;
        case "documentation":
          animateDocumentation(tl, containerRef.current);
          break;
      }
    },
    { dependencies: [feature, isActive], scope: containerRef },
  );

  return (
    <div ref={containerRef} className={styles.ideContainer}>
      {feature === "autocomplete" && <AutocompleteDemo />}
      {feature === "autocompleteWithSettings" && (
        <AutocompleteWithSettingsDemo />
      )}
      {/*{feature === "autocomplete" && <AutocompleteDemo />}*/}
      {feature === "documentation" && <DocumentationDemo />}
    </div>
  );
}

// Autocomplete Demo Component
function AutocompleteDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab}>
          <Image
            alt={"CSS Emblem"}
            aria-hidden={true}
            src={"/static/css_emblem.svg"}
            width={20}
            height={20}
            className={styles.ideTabIcon}
          />
          <span className={styles.ideTabTitle}>Button.module.css</span>
        </div>
      </div>
      <div className={styles.ideEditor}>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>1</span>
          <span className={styles.selector}>.button</span>
          <span className={styles.bracket}> {"{"}</span>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>2</span>
          <span className={styles.property}>font-size</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}> var(</span>
          <span className={styles.variable} data-typing />

          <div className={styles.autocompleteList} data-autocomplete>
            <div
              data-selected
              className={styles.autocompleteItem}
              data-item="1"
            >
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-lg</span>
              <span className={styles.autocompleteDesc}>- Large font size</span>
              <span className={styles.autocompleteValue}>20px</span>
            </div>
            <div className={styles.autocompleteItem} data-item="2">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-md</span>
              <span className={styles.autocompleteDesc}>
                - Medium font size
              </span>
              <span className={styles.autocompleteValue}>18px</span>
            </div>
            <div className={styles.autocompleteItem} data-item="3">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-sm</span>
              <span className={styles.autocompleteDesc}>- Small font size</span>
              <span className={styles.autocompleteValue}>16px</span>
            </div>
            <div className={styles.autocompleteItem} data-item="4">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-xs</span>
              <span className={styles.autocompleteDesc}>
                - Extra small font ...
              </span>
              <span className={styles.autocompleteValue}>14px</span>
            </div>
          </div>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>3</span>
          <span className={styles.bracket}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}

function AutocompleteWithSettingsDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab} data-button-tab>
          <Image
            alt={"CSS Emblem"}
            aria-hidden={true}
            src={"/static/css_emblem.svg"}
            width={20}
            height={20}
            className={styles.ideTabIcon}
          />
          <span className={styles.ideTabTitle}>Button.module.css</span>
        </div>
        <div className={styles.ideTab} data-settings-tab>
          <Image
            alt={"Settings Emblem"}
            aria-hidden={true}
            src={"/static/settings.svg"}
            width={20}
            height={20}
            className={styles.ideTabIcon}
          />
          <span className={styles.ideTabTitle}>CSS Variables Assistant</span>
        </div>
      </div>
      <div className={styles.ideEditor} data-button-editor>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>1</span>
          <span className={styles.selector}>.button</span>
          <span className={styles.bracket}> {"{"}</span>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>2</span>
          <span className={styles.property}>font-size</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}> var(</span>
          <span className={styles.variable} data-typing />

          <div className={styles.autocompleteList} data-autocomplete>
            <div
              data-selected
              className={styles.autocompleteItem}
              data-item="1"
            >
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-lg</span>
              <span className={styles.autocompleteDesc}>- Large font size</span>
              <span className={styles.autocompleteValue}>20px</span>
            </div>
            <div className={styles.autocompleteItem} data-item="2">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-md</span>
              <span className={styles.autocompleteDesc}>
                - Medium font size
              </span>
              <span className={styles.autocompleteValue}>18px</span>
            </div>
            <div className={styles.autocompleteItem} data-item="3">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-sm</span>
              <span className={styles.autocompleteDesc}>- Small font size</span>
              <span className={styles.autocompleteValue}>16px</span>
            </div>
            <div className={styles.autocompleteItem} data-item="4">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>font-size-xs</span>
              <span className={styles.autocompleteDesc}>
                - Extra small font ...
              </span>
              <span className={styles.autocompleteValue}>14px</span>
            </div>
          </div>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>3</span>
          <span className={styles.bracket}>{"}"}</span>
        </div>
      </div>

      <div className={styles.ideEditor} data-settings-window></div>
    </div>
  );
}

// Documentation Demo Component
function DocumentationDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab}>
          <Image
            alt={"CSS Emblem"}
            aria-hidden={true}
            src={"/static/css_emblem.svg"}
            width={20}
            height={20}
            className={styles.ideTabIcon}
          />
          <span className={styles.ideTabTitle}>Button.module.css</span>
        </div>
      </div>
      <div className={styles.ideEditor}>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>1</span>
          <span className={styles.selector}>.button</span>
          <span className={styles.bracket}> {"{"}</span>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>2</span>
          <span className={styles.property}>background</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}> var(</span>
          <span className={styles.variable} data-hover>
            --background
          </span>
          <span className={styles.value}>);</span>

          <div className={styles.documentationPopup} data-documentation>
            <div className={styles.docHeader}>CSS Variable: --background</div>
            <div className={styles.docSection}>
              <h4 className={styles.docSectionTitle}>Values:</h4>
              <table className={styles.docTable}>
                <thead>
                  <tr>
                    <th>Context</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Light mode</td>
                    <td>
                      <span
                        className={styles.colorSwatch}
                        style={{ background: "hsl(0 9.1% 97.8%)" }}
                      ></span>
                      0 9.1% 97.8%
                    </td>
                  </tr>
                  <tr>
                    <td>Dark mode</td>
                    <td>
                      <span
                        className={styles.colorSwatch}
                        style={{ background: "hsl(0 0% 2%)" }}
                      ></span>
                      0 0% 2%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.docLinks}>
              <a href="#" className={styles.docLink}>
                Check contrast on WebAIM Contrast Checker ↗
              </a>
              <a href="#" className={styles.docLink}>
                &apos;var(--background)&apos; on developer.mozilla.org ↗
              </a>
            </div>
          </div>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>3</span>
          <span className={styles.bracket}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}

// Animation functions
function animateAutocomplete(tl: gsap.core.Timeline, container: HTMLElement) {
  const typing = container.querySelector("[data-typing]");
  const autocomplete = container.querySelector("[data-autocomplete]");
  const items = container.querySelectorAll("[data-item]");

  tl.fromTo(
    typing,
    { opacity: 0 },
    { opacity: 1, duration: 0.3, textContent: "" },
  )
    .to(typing, {
      textContent: "-",
      duration: 1,
      ease: "none",
      onUpdate() {
        const progress = this.progress();
        const fullText = "--font-size-";
        const currentLength = Math.floor(progress * fullText.length);

        if (typing) typing.textContent = fullText.substring(0, currentLength);
      },
    })
    .fromTo(
      autocomplete,
      { opacity: 0, y: -10, scaleY: 0, transformOrigin: "top" },
      { opacity: 1, y: 0, scaleY: 1, duration: 0.4, ease: "back.out(1.7)" },
    )
    .fromTo(
      items,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" },
      "-=0.2",
    );
}

function animateAutocompleteWithSettings(
  tl: gsap.core.Timeline,
  container: HTMLElement,
) {
  const typing = container.querySelector("[data-typing]");
  const buttonTab = container.querySelector("[data-button-tab]");
  const settingsTab = container.querySelector("[data-settings-tab]");
  const autocomplete = container.querySelector("[data-autocomplete]");
  const items = container.querySelectorAll("[data-item]");
  const dataButtonEditor = container.querySelectorAll("[data-button-editor]");
  const dataSettingsWindow = container.querySelectorAll(
    "[data-settings-window]",
  );
  // set active classname on tab
  buttonTab?.classList.add(styles.activeTab);

  tl.to(buttonTab, {
    background: "hsl(240, 20%, 20%)",
  });

  tl.fromTo(
    typing,
    { opacity: 0 },
    { opacity: 1, duration: 0.3, textContent: "" },
  )
    .to(typing, {
      textContent: "-",
      duration: 1,
      ease: "none",
      onUpdate() {
        const progress = this.progress();
        const fullText = "--font-size-";
        const currentLength = Math.floor(progress * fullText.length);

        if (typing) typing.textContent = fullText.substring(0, currentLength);
      },
    })
    .fromTo(
      autocomplete,
      { opacity: 0, y: -10, scaleY: 0, transformOrigin: "top" },
      { opacity: 1, y: 0, scaleY: 1, duration: 0.4, ease: "back.out(1.7)" },
    )
    .fromTo(
      items,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" },
      "-=0.2",
    );
  tl.to(settingsTab, {
    background: "hsl(240, 20%, 20%)",
    duration: 0.15,
  });
  tl.to(buttonTab, {
    background: "hsl(240, 22%, 12%)",
    duration: 0.15,
  });
  tl.fromTo(
    dataButtonEditor,
    {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: "top",
    },
    {
      opacity: 0,
      y: 10,
      scaleY: 0.8,
      duration: 0.2,
      ease: "back.out(1.7)",
    },
  );

  tl.fromTo(
    dataSettingsWindow,
    {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "top left",
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.4)",
    },
  );
}

function animateDocumentation(tl: gsap.core.Timeline, container: HTMLElement) {
  const variable = container.querySelector("[data-hover]");
  const popup = container.querySelector("[data-documentation]");

  tl.to(variable, {
    textDecoration: "underline",
    color: "#3b98fd",
    duration: 0.5,
  })
    .fromTo(
      popup,
      { opacity: 0, scale: 0.8, transformOrigin: "top left" },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
    )
    .fromTo(
      popup?.querySelectorAll("td, a") || [],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 },
      "-=0.2",
    );
}
