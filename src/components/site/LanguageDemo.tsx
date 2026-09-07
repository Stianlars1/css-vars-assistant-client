"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { languages, type StylesheetLanguage } from "@/content/demo-tokens";
import DocumentationPopup from "./jetbrains/DocumentationPopup";
import SelectionTabs from "./SelectionTabs";
import styles from "./Home.module.scss";

export default function LanguageDemo() {
  const [language, setLanguage] = useState<StylesheetLanguage>("css");
  const code =
    language === "css"
      ? "background: var(--brand-iris);"
      : `background: ${language === "less" ? "@" : "$"}brand-iris${language === "sass" ? "" : ";"}`;
  return (
    <section
      className={styles.languageSection}
      aria-labelledby="language-heading"
    >
      <div className={`site-container ${styles.languageInner}`}>
        <div className={styles.languageCopy}>
          <span className="eyebrow">Your syntax. Your workflow.</span>
          <h2 id="language-heading">
            A familiar feeling.
            <br />
            <span>In every stylesheet.</span>
          </h2>
          <p>
            Native CSS custom properties, Sass variables, or LESS. Get
            completion and documentation right where you reference them.
          </p>
          <ul>
            <li>
              <Check size={15} />
              Values alongside suggestions
            </li>
            <li>
              <Check size={15} />
              Aliases traced to their source
            </li>
            <li>
              <Check size={15} />
              Your preferred completion order
            </li>
          </ul>
        </div>
        <div className={styles.languagePreview}>
          <SelectionTabs
            id="language"
            label="Stylesheet language"
            options={languages}
            value={language}
            onChange={setLanguage}
          />
          <div
            className={styles.nativeLanguage}
            role="tabpanel"
            tabIndex={0}
            id="language-panel"
            aria-labelledby={`language-${language}`}
          >
            <code>{code}</code>
            <DocumentationPopup language={language} />
          </div>
          <span className={styles.languageCaption}>
            The same documentation workflow across four stylesheet languages.
          </span>
        </div>
      </div>
    </section>
  );
}
