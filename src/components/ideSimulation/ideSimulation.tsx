// src/components/sections/featuresSection/ideSimulation/IdeSimulation.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./ideSimulation.module.scss";
import Image from "next/image";
import { SimpleFeedback } from "@/components/ui/feedback/simpleFeedback/simpleFeedback";
import { MousePointer2, MousePointerClick, Pointer } from "lucide-react";

interface IdeSimulationProps {
  feature:
    | "autocomplete"
    | "documentation"
    | "scope"
    | "sorting"
    | "dynamicDocs"
    | "importSupport"
    | "debugTools";
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
        case "dynamicDocs":
          animateDynamicDocs(tl, containerRef.current);
          break;
        case "importSupport":
          animateImportSupport(tl, containerRef.current);
          break;
        case "debugTools":
          animateDebugTools(tl, containerRef.current);
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
      {feature === "dynamicDocs" && <DynamicDocsDemo />}
      {feature === "importSupport" && <ImportSupportDemo />}
      {feature === "debugTools" && <DebugToolsDemo />}
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
          <span className={styles.bracket} data-bracket-indent={true}>
            {" "}
            {"{"}
          </span>
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
          <span className={styles.bracket} data-bracket-indent={true}>
            {" "}
            {"{"}
          </span>
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
// Dynamic Docs Demo Component
function DynamicDocsDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab}>
          <span className={styles.ideTabTitle}>Button.module.css</span>
        </div>
      </div>

      <div className={styles.ideEditor}>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>1</span>
          <span className={styles.selector}>.button</span>
          <span className={styles.bracket} data-bracket-indent={true}>
            {" "}
            {"{"}
          </span>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>2</span>
          <span className={styles.property}>background</span>
          <span className={styles.colon}>:</span>
          <span className={styles.value}> var(</span>
          <div className={styles.variable} data-hover>
            --background
            <MousePointer2 className={styles.dataPointer} data-pointer />
          </div>
          <span>);</span>

          <div className={styles.documentationPopup} data-documentation>
            <div className={styles.docHeader}>--background</div>
            <div className={styles.docSection}>
              <table className={styles.dynamicDocsTable}>
                <thead className={styles.tableHeader}>
                  <tr>
                    <th>Context</th>
                    <th>Swatch</th>
                    <th>Value</th>
                    <th>Hex Value</th>
                    <th>Source</th>
                    <th>Type</th>
                    <th>WCAG</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  <tr data-row>
                    <td>Light</td>
                    <td
                      className={styles.colorSwatch}
                      style={{ background: "#faf9f9" }}
                    ></td>
                    <td>hsl(0, 9.1%, 97.8%)</td>
                    <td>#faf9f9</td>
                    <td>:root</td>
                    <td>color</td>
                    <td>AAA</td>
                  </tr>
                  <tr data-row>
                    <td>Dark</td>
                    <td
                      className={styles.colorSwatch}
                      style={{ background: "#050505" }}
                    ></td>
                    <td>hsl(0, 0%, 2%)</td>
                    <td>#050505</td>
                    <td>:root</td>
                    <td>color</td>
                    <td>AAA</td>
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

// Advanced Import & Preprocessor Support Demo
function ImportSupportDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab}>
          <span className={styles.ideTabTitle}>app.css</span>
        </div>
      </div>

      <div className={styles.ideEditor} data-import-demo>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>1</span>
          <span className={styles.atRule}>@import</span> {"variables.css"};
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>2</span>
          <span className={styles.atRule}>@import</span> {"theme.less"};
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>3</span>
          <span className={styles.selector}>.button</span> {"{"}
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>4</span>
          <span className={styles.property}>color</span>
          <span className={styles.colon}>:</span>{" "}
          <span className={styles.variable}>var(--primary)</span>;
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>5</span>
          {"}"}
        </div>
        {/* documentation poup..*/}

        <div className={styles.documentationPopupResolutionInfo}>
          ↗ shows a resolved value – hover it to see every step (resolution
          chain)
        </div>

        <ul className={styles.importTree}>
          <li data-item>variables.css</li>
          <li data-item>theme.less</li>
          <li data-item>node_modules/@lib/colors.css</li>
        </ul>
      </div>
    </div>
  );
}
// Debug (CSS Import Resolution) Demo — mirrors right-click > menu > toasts > modal
function DebugToolsDemo() {
  return (
    <div className={styles.ide}>
      <div className={styles.ideHeader}>
        <div className={styles.ideTab}>
          <span className={styles.ideTabTitle}>
            featuresSection.module.scss
          </span>
        </div>
      </div>

      <div className={styles.ideEditor} data-debug-demo>
        {/* Simulated stylesheet content */}
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>541</span>
          <span className={styles.selector}>.feature</span> {"{"}
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>542</span>
          <span className={styles.property}>background</span>
          <span className={styles.colon}>:</span>{" "}
          <span className={styles.value}>hsl(240 22% 12%)</span>;
        </div>
        <div className={styles.codeLine}>
          <span className={styles.lineNumber}>543</span>
          {"}"}
        </div>

        {/* Context menu (appears on right-click) */}
        <div className={styles.contextMenu} data-context-menu>
          <div className={styles.contextMenuItem}>Show Context Actions</div>
          <div className={styles.contextMenuItem}>Paste</div>
          <div className={styles.contextMenuItem}>Go To</div>
          <div className={styles.contextMenuItem}>Refactor</div>
          <div className={styles.contextMenuItem}>Open In</div>
          <div className={styles.contextMenuItem}>Local History</div>
          <div className={styles.contextMenuItem}>Git</div>
          <div className={styles.contextMenuSeparator} />
          <div className={styles.contextMenuItem} data-menu-item data-active>
            Debug CSS Import Resolution
          </div>
        </div>

        {/* Toasts (bottom-right) */}
        <div className={styles.toastStack} aria-live="polite">
          <div className={styles.toast} data-toast="start">
            CSS Import Debug started
            <div className={styles.toastSub}>
              Scanning import chain for <b>featuresSection.module.scss</b>
            </div>
          </div>
          <div className={styles.toast} data-toast="done">
            CSS Import Debug finished
          </div>
        </div>

        {/* Modal result window */}
        <div className={styles.modalBackdrop} data-modal-backdrop />
        <div className={styles.modalWindow} data-modal>
          <div className={styles.modalHeader}>
            CSS Import Debug — featuresSection.module.scss
          </div>
          <div className={styles.modalBody}>
            <div className={styles.monoLine} data-modal-line>
              <b>=== CSS Import Resolution Debug ===</b>
            </div>
            <div className={styles.monoLine} data-modal-line>
              Root file :
              /path/to/project/src/components/sections/featuresSection/featuresSection.module.scss
            </div>
            <div className={styles.monoLine} data-modal-line>
              Max depth : 20
            </div>

            <div className={styles.fileList} data-modal-line>
              <div>📄 featuresSection.module.scss</div>
            </div>

            <div className={styles.monoLine} data-modal-line>
              <b>=== SUMMARY ===</b>
            </div>
            <div className={styles.monoLine} data-modal-line>
              {" "}
              Total unique files : 1
            </div>
            <div className={styles.monoLine} data-modal-line>
              {" "}
              Total CSS variables : 1
            </div>
            <div className={styles.monoLine} data-modal-line>
              Debug finished : 2025-08-14T14:00:43
            </div>
          </div>

          <div className={styles.modalActions}>
            <button className={styles.button} data-ok>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Animations ---------------------- */
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
function animateDynamicDocs(tl: gsap.core.Timeline, container: HTMLElement) {
  const popup = container.querySelector("[class*=documentationPopup]");
  const rows = popup?.querySelectorAll("[data-row]") || [];
  const pointer = container.querySelector("[data-pointer]");

  tl.set(pointer, { opacity: 1, x: -10, y: 10, scale: 1 })
    // 1. Move pointer to center
    .to(pointer, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    })
    // 2. Simulate click down (scale down, then up)
    .to(pointer, {
      scale: 0.8,
      duration: 0.13,
      ease: "power1.in",
    })
    .to(pointer, {
      scale: 1,
      duration: 0.13,
      ease: "power1.out",
    })
    // 3. Fade out pointer as popover appears
    .to(pointer, { opacity: 0, duration: 0.1 }, "+=0.1")
    // Popover and rows
    .fromTo(
      popup,
      { opacity: 0, scale: 0.85, transformOrigin: "top left" },
      { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.3)" },
      "-=0.2",
    )
    .fromTo(
      rows,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
      "+=0.15",
    );
}

function animateImportSupport(tl: gsap.core.Timeline, container: HTMLElement) {
  const items = container.querySelectorAll("[data-item]");
  tl.fromTo(
    items,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.25, stagger: 0.08, ease: "power2.out" },
  );
}

function animateDebugTools(tl: gsap.core.Timeline, container: HTMLElement) {
  const menu = container.querySelector("[data-context-menu]");
  const activeItem = container.querySelector("[data-menu-item]");
  const toastStart = container.querySelector('[data-toast="start"]');
  const toastDone = container.querySelector('[data-toast="done"]');
  const backdrop = container.querySelector("[data-modal-backdrop]");
  const modal = container.querySelector("[data-modal]");
  const lines = modal?.querySelectorAll("[data-modal-line]") || [];
  const okBtn = modal?.querySelector("[data-ok]") || null;

  // Initial hidden states
  gsap.set([toastStart, toastDone, backdrop, modal], { autoAlpha: 0 });
  gsap.set(lines, { autoAlpha: 0, y: 6 });

  tl.fromTo(
    menu,
    { autoAlpha: 0, scale: 0.96, transformOrigin: "top left" },
    { autoAlpha: 1, scale: 1, duration: 0.25, ease: "power2.out" },
  )
    // Emulate highlight + click pulse on menu item
    .to(
      activeItem,
      { backgroundColor: "hsl(240 22% 22%)", duration: 0.15 },
      "+=0.05",
    )
    .to(activeItem, { scale: 0.98, duration: 0.08, ease: "power1.inOut" })
    .to(activeItem, { scale: 1, duration: 0.08 }, "+=0.02")
    // Hide menu
    .to(menu, { autoAlpha: 0, duration: 0.2 }, "+=0.05")
    // Show “started” toast
    .fromTo(
      toastStart,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
    )
    // Small delay to mimic work
    .to({}, { duration: 0.45 })
    // Show “finished” toast
    .fromTo(
      toastDone,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
      "-=0.05",
    )
    // Modal with results
    .fromTo(
      backdrop,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.15 },
      "+=0.05",
    )
    .fromTo(
      modal,
      { autoAlpha: 0, scale: 0.96, y: -6 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.25, ease: "back.out(1.6)" },
      "-=0.05",
    )
    .fromTo(
      lines,
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.18, stagger: 0.04 },
    )
    .fromTo(
      okBtn,
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.18 },
      "-=0.08",
    );
}
