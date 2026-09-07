import { exampleFiles } from "@/content/resolution-examples";
import styles from "./ResolutionDemo.module.scss";

function Syntax({ text }: { text: string }) {
  const parts = text.split(
    /("[^"]*"|'[^']*'|(?:[\w-]+\.)?[$@][\w-]+|--[\w-]+|#[\da-fA-F]{3,8}\b|\b\d*\.?\d+(?:px|rem)\b|\b(?:var|calc|clamp)\b)/g,
  );
  return parts.map((part, index) => {
    const kind = /^["']/.test(part)
      ? "string"
      : /^@(use|import)\b/.test(part)
        ? "keyword"
        : /[$@]|^--/.test(part)
          ? "variable"
          : /^#|^\d/.test(part)
            ? "value"
            : /^(var|calc|clamp)$/.test(part)
              ? "function"
              : undefined;
    return kind ? (
      <span key={index} data-syntax={kind}>
        {part}
      </span>
    ) : (
      part
    );
  });
}

export default function SourceCode({
  path,
  line,
}: {
  path: string;
  line: number;
}) {
  return (
    <div
      className={styles.code}
      role="region"
      aria-label={`Example file ${path}`}
      tabIndex={0}
    >
      {exampleFiles[path].map((text, index) => (
        <div key={index} data-active={line === index + 1}>
          <span className={styles.lineNumber} aria-hidden="true">
            {index + 1}
          </span>
          <code>
            <Syntax text={text || " "} />
          </code>
        </div>
      ))}
    </div>
  );
}
