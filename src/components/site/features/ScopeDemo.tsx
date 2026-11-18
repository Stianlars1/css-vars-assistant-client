"use client";

import { useState } from "react";
import { FileCode2 } from "lucide-react";
import SelectionTabs from "../SelectionTabs";
import styles from "./Features.module.scss";

// The three options of the plugin's "Indexing scope" setting.
const scopes = [
  { value: "project", label: "Project only" },
  { value: "imports", label: "Project + imports" },
  { value: "global", label: "Full global" },
] as const;
type Scope = (typeof scopes)[number]["value"];

const reach: Record<Scope, number> = { project: 0, imports: 1, global: 2 };

const files = [
  {
    path: "src/styles/tokens.css",
    variables: 24,
    level: 0,
    note: "in your project",
  },
  {
    path: "src/components/button.scss",
    variables: 6,
    level: 0,
    note: "in your project",
  },
  {
    path: "node_modules/@acme/design/_tokens.scss",
    variables: 46,
    level: 1,
    note: "imported by button.scss",
  },
  {
    path: "node_modules/bootstrap/dist/css/bootstrap.css",
    variables: 312,
    level: 2,
    note: "never imported",
  },
];

export default function ScopeDemo() {
  const [scope, setScope] = useState<Scope>("imports");
  const indexed = files.filter((file) => file.level <= reach[scope]);
  const total = indexed.reduce((sum, file) => sum + file.variables, 0);

  return (
    <div className={styles.demo}>
      <SelectionTabs
        id="index-scope"
        label="Indexing scope"
        options={scopes}
        value={scope}
        onChange={setScope}
      />
      <div
        className={styles.scopePanel}
        role="tabpanel"
        id="index-scope-panel"
        aria-labelledby={`index-scope-${scope}`}
      >
        <ul>
          {files.map((file) => {
            const included = file.level <= reach[scope];
            return (
              <li key={file.path} data-indexed={included}>
                <FileCode2 size={14} aria-hidden="true" />
                <span className={styles.scopePath}>{file.path}</span>
                <span className={styles.scopeNote}>
                  {included ? `${file.variables} variables` : "not indexed"}
                  <small>{file.note}</small>
                </span>
              </li>
            );
          })}
        </ul>
        <p aria-live="polite">
          <strong>{total}</strong> variables indexed from {indexed.length} of{" "}
          {files.length} files
        </p>
      </div>
    </div>
  );
}
