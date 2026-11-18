"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import CompletionPopup from "../jetbrains/CompletionPopup";
import ColorSwatches from "../jetbrains/ColorSwatches";
import editor from "../jetbrains/EditorPreview.module.scss";
import {
  DEFAULT_ACCENT_INDEX,
  SPECTRUM_PREFIX,
  spectrum,
  spectrumStops,
} from "@/content/spectrum";
import type { Token } from "@/content/demo-tokens";
import styles from "./Hero.module.scss";

/** Writes the live gradient stops that the whole site reads. */
function paint(accentIndex: number) {
  const root = document.documentElement;
  spectrumStops(accentIndex).forEach((color, stop) => {
    root.style.setProperty(`--s${stop + 1}`, color);
  });
}

export default function HeroEditor() {
  const [query, setQuery] = useState("--");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(DEFAULT_ACCENT_INDEX);
  const [accent, setAccent] = useState(DEFAULT_ACCENT_INDEX);
  const stage = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const intro = useRef<number | undefined>(undefined);
  const listId = useId() + "-accents";

  const items = spectrum.filter((token) =>
    token.name.startsWith(query.toLowerCase()),
  );
  const highlighted = open ? items[selected] : undefined;
  const accepted = !open && query === spectrum[accent].name;
  // Highlighting a suggestion previews it; closing the popup restores the pick.
  const previewIndex = highlighted ? spectrum.indexOf(highlighted) : accent;

  // The accent lives on <html>, so it outlives this component. Coming back to
  // the page picks up whatever the visitor chose earlier.
  useEffect(() => {
    const current = document.documentElement.style.getPropertyValue("--s3");
    const index = spectrum.findIndex((token) => token.value === current);
    if (index >= 0) {
      setAccent(index);
      setSelected(index);
    }
  }, []);

  const mounted = useRef(false);
  useEffect(() => {
    // Nothing to paint on mount: the stylesheet defaults, or an earlier pick,
    // are already on the page.
    if (mounted.current) paint(previewIndex);
    mounted.current = true;
  }, [previewIndex]);

  // One orchestrated moment on load: the prefix is typed, then the list opens.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setQuery(SPECTRUM_PREFIX);
      setOpen(true);
      return;
    }
    let length = 2;
    const type = () => {
      length += 1;
      setQuery(SPECTRUM_PREFIX.slice(0, length));
      intro.current =
        length < SPECTRUM_PREFIX.length
          ? window.setTimeout(type, 50 + Math.random() * 60)
          : window.setTimeout(() => setOpen(true), 220);
    };
    intro.current = window.setTimeout(type, 900);
    return () => window.clearTimeout(intro.current);
  }, []);

  function stopIntro() {
    window.clearTimeout(intro.current);
  }

  function accept(token: Token) {
    setAccent(spectrum.indexOf(token));
    setQuery(token.name);
    setOpen(false);
  }

  function showSuggestions() {
    stopIntro();
    setQuery(SPECTRUM_PREFIX);
    setSelected(accent);
    setOpen(true);
    input.current?.focus();
  }

  function tilt(event: React.PointerEvent<HTMLDivElement>) {
    const element = stage.current;
    if (!element || event.pointerType !== "mouse") return;
    const box = element.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    element.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
    element.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
  }

  function rest() {
    stage.current?.style.removeProperty("--rx");
    stage.current?.style.removeProperty("--ry");
  }

  return (
    <div
      ref={stage}
      className={styles.stage}
      onPointerMove={tilt}
      onPointerLeave={rest}
    >
      <div className={`${editor.editor} ${styles.window}`}>
        <div className={editor.fileTabs}>
          <span>
            <span className={editor.cssIcon} aria-hidden="true">
              ≡
            </span>
            site.css
            <X size={12} aria-hidden="true" />
          </span>
          <span>tokens.css</span>
        </div>
        <div className={editor.code} aria-label="This site's stylesheet">
          <div>
            <span className={editor.lineNumber}>1</span>
            <code className={styles.comment}>
              {"/* Pick the accent of this page. */"}
            </code>
          </div>
          <div>
            <span className={editor.lineNumber}>2</span>
            <code>
              <em>:root</em> {"{"}
            </code>
          </div>
          <div className={editor.activeLine}>
            <span className={editor.lineNumber}>3</span>
            <span className={editor.gutter}>
              {accepted && <ColorSwatches token={spectrum[accent]} />}
            </span>
            <code>
              {"  "}--accent: <em>var</em>(
              <input
                ref={input}
                value={query}
                style={{ width: `${Math.max(query.length, 2)}ch` }}
                className={editor.tokenInput}
                data-unresolved={!accepted}
                aria-label="Accent color token for this page"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={open}
                aria-controls={open ? listId : undefined}
                aria-activedescendant={
                  open && items.length ? `${listId}-${selected}` : undefined
                }
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                onChange={(event) => {
                  stopIntro();
                  setQuery(event.target.value);
                  setSelected(0);
                  setOpen(true);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpen(false);
                    return;
                  }
                  if (
                    event.key === "F1" ||
                    (event.ctrlKey && event.key === " ")
                  ) {
                    event.preventDefault();
                    showSuggestions();
                    return;
                  }
                  if (
                    (event.key === "ArrowDown" || event.key === "ArrowUp") &&
                    items.length
                  ) {
                    event.preventDefault();
                    stopIntro();
                    setOpen(true);
                    setSelected(
                      (index) =>
                        (index +
                          (event.key === "ArrowDown" ? 1 : -1) +
                          items.length) %
                        items.length,
                    );
                    return;
                  }
                  if (
                    open &&
                    highlighted &&
                    (event.key === "Enter" || event.key === "Tab")
                  ) {
                    event.preventDefault();
                    accept(highlighted);
                  }
                }}
              />
              );
            </code>
          </div>
          <div>
            <span className={editor.lineNumber}>4</span>
            <code>{"}"}</code>
          </div>
        </div>
        {open && (
          <div className={styles.popup}>
            <CompletionPopup
              id={listId}
              items={items}
              query={query}
              selectedIndex={selected}
              onHighlight={setSelected}
              onSelect={accept}
            />
          </div>
        )}
        {!open && (
          <button className={editor.showPopup} onClick={showSuggestions}>
            Show suggestions
          </button>
        )}
        <div className={editor.status}>
          <span aria-live="polite">
            {accepted
              ? `--accent · ${spectrum[accent].value}`
              : "Pick a token and the page follows"}
          </span>
          <span>CSS</span>
          <span>UTF-8</span>
          <span>2 spaces</span>
        </div>
      </div>
    </div>
  );
}
