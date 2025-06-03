// src/components/sections/featuresSection/ideSimulation/IdeSimulation.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./ideSimulation.module.scss";
import Image from "next/image";
import { SimpleFeedback } from "@/components/ui/feedback/simpleFeedback/simpleFeedback";

interface IdeSimulationProps {
  feature: "autocomplete" | "documentation" | "scope" | "sorting";
  isActive: boolean;
}

export function IdeSimulation({ feature, isActive }: IdeSimulationProps) {
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
        case "documentation":
          animateDocumentation(tl, containerRef.current);
          break;
        case "scope":
          animateScope(tl, containerRef.current);
          break;
        case "sorting":
          animateSorting(tl, containerRef.current);
          break;
      }
    },
    { dependencies: [feature, isActive], scope: containerRef },
  );

  return (
    <div ref={containerRef} className={styles.ideContainer}>
      {feature === "autocomplete" && <AutocompleteDemo />}
      {feature === "documentation" && <DocumentationDemo />}
      {feature === "scope" && <ScopeDemo />}
      {feature === "sorting" && <SortingDemo />}
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

// Scope Demo Component
function ScopeDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab}>
          <span className={styles.ideTabIcon}>⚙️</span>
          <span className={styles.ideTabTitle}>
            {"Tools > CSS Variables Assistant"}
          </span>
        </div>
      </div>
      <div className={styles.scopeContent}>
        <div className={styles.scopeOption} data-scope="1">
          <div className={styles.scopeRadio}>○</div>
          <div className={styles.scopeInfo}>
            <h4>PROJECT</h4>
            <p>Index only current project variables</p>
          </div>
        </div>
        <div className={styles.scopeOption} data-scope="2">
          <div className={styles.scopeRadio}>○</div>
          <div className={styles.scopeInfo}>
            <h4
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              PROJECT + IMPORTS{" "}
              <SimpleFeedback noMargin={true} size={"sm"} variant={"warning"}>
                ️ experimental
              </SimpleFeedback>
            </h4>
            <p>Include @import and linked stylesheets</p>
          </div>
        </div>
        <div className={styles.scopeOption} data-scope="3" data-selected>
          <div className={styles.scopeRadio}>●</div>
          <div className={styles.scopeInfo}>
            <h4
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              GLOBAL{" "}
              <SimpleFeedback
                noMargin={true}
                size={"sm"}
                variant={"info"}
                icon={false}
              >
                default
              </SimpleFeedback>
            </h4>
            <p>Full node_modules and external dependencies</p>
          </div>
        </div>
        <button className={styles.reindexButton} data-reindex>
          🔄 Re-index Variables
        </button>
      </div>
    </div>
  );
}

// Sorting Demo Component
function SortingDemo() {
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
          <span className={styles.ideTabTitle}>styles.css</span>
        </div>
      </div>
      <div className={styles.ideEditor}>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>1</span>
          <span className={styles.property}>padding</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}> var(</span>
          <span className={styles.variable} data-typing>
            --sp
          </span>

          <div className={styles.autocompleteList} data-sorting>
            <div className={styles.sortingHeader}>
              <span>Sorted by value (descending)</span>
            </div>
            <div className={styles.autocompleteItem} data-sort="1">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>spacing-lg</span>
              <span className={styles.autocompleteValue}>24px</span>
            </div>

            <div className={styles.autocompleteItem} data-sort="3">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>spacing-sm</span>
              <span className={styles.autocompleteValue}>8px</span>
            </div>

            <div className={styles.autocompleteItem} data-sort="4">
              <Image
                alt={"CSS Emblem"}
                aria-hidden={true}
                src={"/static/css_emblem.svg"}
                width={20}
                height={20}
                className={styles.autocompleteIcon}
              />
              <span className={styles.autocompleteName}>spacing-xs</span>
              <span className={styles.autocompleteValue}>4px</span>
            </div>
          </div>
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

function animateScope(tl: gsap.core.Timeline, container: HTMLElement) {
  const options = container.querySelectorAll("[data-scope]");
  const button = container.querySelector("[data-reindex]");

  tl.fromTo(
    options,
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
  ).fromTo(
    button,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" },
    "-=0.2",
  );
}

function animateSorting(tl: gsap.core.Timeline, container: HTMLElement) {
  const autocomplete = container.querySelector("[data-sorting]");
  const items = container.querySelectorAll("[data-sort]");

  tl.fromTo(
    autocomplete,
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.4 },
  ).fromTo(
    items,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
  );
}
