"use client";

import { useRef } from "react";
import styles from "./SelectionTabs.module.scss";

type Option<T extends string> = { value: T; label: string };

export default function SelectionTabs<T extends string>({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: readonly Option<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <div className={styles.tabs} role="tablist" aria-label={label}>
      {options.map((option, index) => (
        <button
          key={option.value}
          ref={(node) => {
            buttons.current[index] = node;
          }}
          role="tab"
          id={`${id}-${option.value}`}
          aria-controls={`${id}-panel`}
          aria-selected={value === option.value}
          tabIndex={value === option.value ? 0 : -1}
          onClick={() => onChange(option.value)}
          onKeyDown={(event) => {
            const target =
              event.key === "ArrowRight"
                ? (index + 1) % options.length
                : event.key === "ArrowLeft"
                  ? (index - 1 + options.length) % options.length
                  : event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? options.length - 1
                      : undefined;
            if (target === undefined) return;
            event.preventDefault();
            onChange(options[target].value);
            buttons.current[target]?.focus();
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
