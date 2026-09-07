"use client";

import { useId, useRef, useState } from "react";
import { X } from "lucide-react";
import CompletionPopup from "./CompletionPopup";
import DocumentationPopup from "./DocumentationPopup";
import ColorSwatches from "./ColorSwatches";
import { tokens, type Token } from "@/content/demo-tokens";
import styles from "./EditorPreview.module.scss";

export type PreviewMode = "completion" | "documentation";

export default function EditorPreview({
  mode,
  token,
  onTokenChange,
}: {
  mode: PreviewMode;
  token: Token;
  onTokenChange: (token: Token) => void;
}) {
  const [query, setQuery] = useState(
    mode === "completion" ? "--brand-" : token.name,
  );
  const [visible, setVisible] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId() + "-suggestions";
  const items = tokens.filter((item) =>
    item.name.toLowerCase().startsWith(query.toLowerCase()),
  );
  const accepted = query === token.name;

  function accept(next: Token, suffix = "") {
    setQuery(next.name + suffix);
    onTokenChange(next);
    setVisible(false);
  }

  return (
    <div className={styles.editor} data-mode={mode}>
      <div className={styles.fileTabs}>
        <span>
          <span className={styles.cssIcon} aria-hidden="true">
            ≡
          </span>
          accept-completion.css
          <X size={12} aria-hidden="true" />
        </span>
        <span>theme.css</span>
      </div>
      <div className={styles.code} aria-label="Example CSS stylesheet">
        <div>
          <span className={styles.lineNumber}>1</span>
          <code>
            <b>@import</b> <i>&quot;./theme.css&quot;</i>;
          </code>
        </div>
        <div>
          <span className={styles.lineNumber}>2</span>
        </div>
        <div>
          <span className={styles.lineNumber}>3</span>
          <code>
            <em>.button</em> {"{"}
          </code>
        </div>
        <div className={styles.activeLine}>
          <span className={styles.lineNumber}>4</span>
          <span className={styles.gutter}>
            {accepted && <ColorSwatches token={token} />}
          </span>
          <code>
            {"  "}background: <em>var</em>(
            <input
              ref={input}
              value={query}
              readOnly={mode === "documentation"}
              style={{ width: `${Math.max(query.length, 2)}ch` }}
              className={styles.tokenInput}
              data-unresolved={!accepted}
              aria-label="CSS variable name"
              role={mode === "completion" ? "combobox" : undefined}
              aria-autocomplete={mode === "completion" ? "list" : undefined}
              aria-expanded={mode === "completion" ? visible : undefined}
              aria-controls={
                mode === "completion" && visible ? listId : undefined
              }
              aria-activedescendant={
                mode === "completion" && visible && items.length
                  ? `${listId}-${selectedIndex}`
                  : undefined
              }
              spellCheck={false}
              autoComplete="off"
              onChange={(event) => {
                setQuery(event.target.value);
                setVisible(true);
                setSelectedIndex(0);
              }}
              onFocus={() => {
                if (mode === "documentation") setVisible(true);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setVisible(false);
                  return;
                }
                if (
                  event.key === "F1" ||
                  (event.ctrlKey && event.key === " ")
                ) {
                  event.preventDefault();
                  setVisible(true);
                  return;
                }
                if (mode !== "completion") return;
                if (
                  visible &&
                  items.length &&
                  event.ctrlKey &&
                  event.key === "."
                ) {
                  event.preventDefault();
                  accept(items[selectedIndex], ".");
                  return;
                }
                if (
                  (event.key === "ArrowDown" || event.key === "ArrowUp") &&
                  items.length
                ) {
                  event.preventDefault();
                  setVisible(true);
                  setSelectedIndex(
                    (index) =>
                      (index +
                        (event.key === "ArrowDown" ? 1 : -1) +
                        items.length) %
                      items.length,
                  );
                }
                if (
                  visible &&
                  items.length &&
                  (event.key === "Enter" || event.key === "Tab")
                ) {
                  event.preventDefault();
                  accept(items[selectedIndex]);
                }
              }}
            />
            );
          </code>
        </div>
        <div>
          <span className={styles.lineNumber}>5</span>
          <code>{"}"}</code>
        </div>
        <div>
          <span className={styles.lineNumber}>6</span>
        </div>
      </div>
      {visible && (
        <div
          className={
            mode === "completion" ? styles.completionAnchor : styles.docAnchor
          }
        >
          {mode === "completion" ? (
            <CompletionPopup
              id={listId}
              items={items}
              query={query}
              selectedIndex={selectedIndex}
              onHighlight={setSelectedIndex}
              onSelect={accept}
            />
          ) : (
            <DocumentationPopup token={token} />
          )}
        </div>
      )}
      <div className={styles.status}>
        <span aria-live="polite">
          {accepted ? `${token.name} · ${token.value}` : "CSS"}
        </span>
        <span>LF</span>
        <span>UTF-8</span>
        <span>2 spaces</span>
      </div>
      {!visible && (
        <button
          className={styles.showPopup}
          onClick={() => {
            if (mode === "completion") {
              setQuery("--brand-");
              setSelectedIndex(0);
            }
            setVisible(true);
            input.current?.focus();
          }}
        >
          {mode === "completion" ? "Show suggestions" : "Show documentation"}
        </button>
      )}
    </div>
  );
}
