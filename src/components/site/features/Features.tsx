"use client";

import { useState } from "react";
import {
  ArrowDownNarrowWide,
  AtSign,
  SquareMenu,
  Workflow,
} from "lucide-react";
import EditorPreview from "../jetbrains/EditorPreview";
import DocumentationPopup from "../jetbrains/DocumentationPopup";
import SelectionTabs from "../SelectionTabs";
import SortDemo from "./SortDemo";
import ScopeDemo from "./ScopeDemo";
import {
  iris,
  languages,
  type StylesheetLanguage,
  type Token,
} from "@/content/demo-tokens";
import styles from "./Features.module.scss";

function usage(language: StylesheetLanguage, token: Token) {
  if (language === "css") return `background: var(${token.name});`;
  const sigil = language === "less" ? "@" : "$";
  return `background: ${sigil}${token.name.slice(2)}${language === "sass" ? "" : ";"}`;
}

export default function Features() {
  // The token picked in the autocomplete card is the one documented next to it.
  const [token, setToken] = useState<Token>(iris);
  const [language, setLanguage] = useState<StylesheetLanguage>("css");

  return (
    <section
      className={`site-container ${styles.features}`}
      id="features"
      aria-labelledby="features-heading"
    >
      <header className={`section-heading ${styles.heading}`}>
        <h2 id="features-heading" className="spectrum-text">
          Features
        </h2>
        <p>
          Four things the plugin adds to your editor. Every example here is
          live, so type in it, hover it and flip the switches.
        </p>
      </header>

      <div className={styles.bento}>
        <article className={styles.card} data-hue="pink" data-size="wide">
          <header>
            <span className={styles.icon} aria-hidden="true">
              <Workflow size={22} />
            </span>
            <div>
              <h3>Autocomplete with the values attached</h3>
              <p>
                Type <code>var(--</code> and each suggestion shows its swatch,
                its resolved value and its dark-theme variant. You pick by what
                a variable is, not by what it happens to be called.
              </p>
            </div>
          </header>
          <div className={styles.editorFrame}>
            <EditorPreview
              mode="completion"
              token={token}
              onTokenChange={setToken}
            />
          </div>
        </article>

        <article className={styles.card} data-hue="blue">
          <header>
            <span className={styles.icon} aria-hidden="true">
              <SquareMenu size={22} />
            </span>
            <div>
              <h3>Quick documentation on hover</h3>
              <p>
                Every value a variable takes across themes and media queries,
                the file and line that declares each one, and its contrast
                ratio.
              </p>
            </div>
          </header>
          <div className={styles.demo}>
            <SelectionTabs
              id="doc-language"
              label="Stylesheet language"
              options={languages}
              value={language}
              onChange={setLanguage}
            />
            <div
              className={styles.docPanel}
              role="tabpanel"
              id="doc-language-panel"
              aria-labelledby={`doc-language-${language}`}
            >
              <code>{usage(language, token)}</code>
              <DocumentationPopup token={token} language={language} />
            </div>
          </div>
        </article>

        <article className={styles.card} data-hue="orange">
          <header>
            <span className={styles.icon} aria-hidden="true">
              <ArrowDownNarrowWide size={22} />
            </span>
            <div>
              <h3>Suggestions sorted by value</h3>
              <p>
                <code>--space-sm</code> lands between xs and md, not after lg.
                Prefer descending or plain A to Z? It is one setting.
              </p>
            </div>
          </header>
          <SortDemo />
        </article>

        <article className={styles.card} data-hue="green" data-size="wide">
          <header>
            <span className={styles.icon} aria-hidden="true">
              <AtSign size={22} />
            </span>
            <div>
              <h3>Index as far as you need</h3>
              <p>
                Decide how far the plugin looks for variables: your project,
                your project and everything it imports, or all of{" "}
                <code>node_modules</code>. Re-index from settings at any time.
              </p>
            </div>
          </header>
          <ScopeDemo />
        </article>
      </div>
    </section>
  );
}
