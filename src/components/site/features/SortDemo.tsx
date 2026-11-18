"use client";

import { useState } from "react";
import SelectionTabs from "../SelectionTabs";
import styles from "./Features.module.scss";

const tokens = [
  { name: "space-xs", px: 4 },
  { name: "space-sm", px: 8 },
  { name: "space-md", px: 16 },
  { name: "space-lg", px: 24 },
  { name: "space-xl", px: 40 },
];

// The three options of the plugin's "Completion sort order" setting.
const orders = [
  { value: "ascending", label: "Value, ascending" },
  { value: "descending", label: "Value, descending" },
  { value: "name", label: "Alphabetical" },
] as const;
type Order = (typeof orders)[number]["value"];

function sorted(order: Order) {
  return [...tokens].sort((a, b) =>
    order === "name"
      ? a.name.localeCompare(b.name)
      : order === "ascending"
        ? a.px - b.px
        : b.px - a.px,
  );
}

export default function SortDemo() {
  const [order, setOrder] = useState<Order>("ascending");
  const result = sorted(order);

  return (
    <div className={styles.demo}>
      <SelectionTabs
        id="sort-order"
        label="Completion sort order"
        options={orders}
        value={order}
        onChange={setOrder}
      />
      <div
        className={styles.sortPopup}
        role="tabpanel"
        id="sort-order-panel"
        aria-labelledby={`sort-order-${order}`}
      >
        {/* Rows keep their DOM order and slide to their sorted position. */}
        <ul
          aria-hidden="true"
          style={{ height: `calc(var(--row) * ${tokens.length})` }}
        >
          {tokens.map((token) => (
            <li
              key={token.name}
              style={{
                transform: `translateY(calc(var(--row) * ${result.indexOf(token)}))`,
              }}
            >
              <span>
                <b>space-</b>
                {token.name.slice(6)}
              </span>
              <i style={{ width: token.px * 1.5 }} />
              <span>{token.px}px</span>
            </li>
          ))}
        </ul>
        <p className="visually-hidden" aria-live="polite">
          Suggestions in order:{" "}
          {result.map((token) => `--${token.name} ${token.px}px`).join(", ")}
        </p>
      </div>
    </div>
  );
}
