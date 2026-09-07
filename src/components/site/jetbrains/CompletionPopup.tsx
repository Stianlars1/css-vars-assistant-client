"use client";

import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import ColorSwatches from "./ColorSwatches";
import type { Token } from "@/content/demo-tokens";
import styles from "./JetBrains.module.scss";

export default function CompletionPopup({
  id,
  items,
  selectedIndex,
  query = "--brand-",
  onSelect,
  onHighlight,
}: {
  id: string;
  items: readonly Token[];
  selectedIndex: number;
  query?: string;
  onSelect: (token: Token) => void;
  onHighlight: (index: number) => void;
}) {
  const [tip, setTip] = useState(0);
  const prefix = query.replace(/^--/, "");
  return (
    <div className={styles.completion} data-testid="completion-popup">
      <ul role="listbox" aria-label="CSS variable suggestions" id={id}>
        {items.map((token, index) => {
          const name = token.name.slice(2);
          const highlight = name.toLowerCase().startsWith(prefix.toLowerCase())
            ? prefix.length
            : 0;
          return (
            <li
              role="option"
              aria-selected={selectedIndex === index}
              id={`${id}-${index}`}
              key={token.name}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => onSelect(token)}
              onMouseEnter={() => onHighlight(index)}
              aria-label={`${token.name}, ${token.value}${token.dark ? `, Dark ${token.dark}` : ""}`}
            >
              <span className={styles.suggestionName}>
                <ColorSwatches token={token} />
                <span>
                  <b>{name.slice(0, highlight)}</b>
                  {name.slice(highlight)}
                </span>
              </span>
              {token.description && (
                <span className={styles.suggestionDescription}>
                  {" "}
                  – {token.description}
                </span>
              )}
              <span className={styles.suggestionValue}>
                {token.value}
                {token.dark && (
                  <>
                    {" "}
                    /{" "}
                    <span className={styles.moon} aria-label="Dark">
                      🌙
                    </span>{" "}
                    {token.dark}
                  </>
                )}
              </span>
            </li>
          );
        })}
        {!items.length && (
          <li className={styles.empty}>No matching tokens in this example</li>
        )}
      </ul>
      <div className={styles.completionFooter}>
        <span>
          {tip === 0
            ? "Press ⌃. to choose the selected (or first) suggestion and insert a dot afterwards"
            : "Press ↵ to insert, ⇥ to replace"}
        </span>
        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setTip(1 - tip)}
        >
          Next Tip
        </button>
        <EllipsisVertical size={16} aria-hidden="true" />
      </div>
    </div>
  );
}
