"use client";

import { useState } from "react";
import SelectionTabs from "./SelectionTabs";
import EditorPreview, { type PreviewMode } from "./jetbrains/EditorPreview";
import { iris, type Token } from "@/content/demo-tokens";
import styles from "./NativeDemo.module.scss";

const options = [
  { value: "completion", label: "Autocomplete" },
  { value: "documentation", label: "Quick Documentation" },
] as const;
export default function TokenDemo() {
  const [mode, setMode] = useState<PreviewMode>("completion");
  const [token, setToken] = useState<Token>(iris);
  return (
    <div className={styles.demo} id="preview">
      <div className={styles.toolbar}>
        <SelectionTabs
          id="plugin-preview"
          label="Explore the plugin"
          options={options}
          value={mode}
          onChange={setMode}
        />
        <span>Try it for yourself</span>
      </div>
      <div
        className={styles.stage}
        role="tabpanel"
        id="plugin-preview-panel"
        aria-labelledby={`plugin-preview-${mode}`}
      >
        <div className={styles.environment}>
          <span>CSS Variables Assistant</span>
          <span>IntelliJ IDEA · Dark theme</span>
        </div>
        <EditorPreview
          key={mode}
          mode={mode}
          token={token}
          onTokenChange={setToken}
        />
      </div>
      <div className={styles.caption}>
        <div>
          <strong>
            {mode === "completion"
              ? "The right token, right where you need it."
              : "A value, with the context that matters."}
          </strong>
          <p>
            {mode === "completion"
              ? "Choose a suggestion, or type a variable name. Use ↑ ↓ and Enter or Tab to insert it."
              : "See the selected token’s declared values, source lines, description and contrast information."}
          </p>
        </div>
        <span>
          Interactive example.
          <br />
          Recreated from the plugin UI.
        </span>
      </div>
    </div>
  );
}
