import { ArrowUpRight, EllipsisVertical } from "lucide-react";
import ColorSwatches from "./ColorSwatches";
import NativeTooltip from "./NativeTooltip";
import ResolutionChain from "./ResolutionChain";
import {
  iris,
  contrastOnWhite,
  type Token,
  type StylesheetLanguage,
} from "@/content/demo-tokens";
import styles from "./JetBrains.module.scss";

export default function DocumentationPopup({
  token = iris,
  language = "css",
}: {
  token?: Token;
  language?: StylesheetLanguage;
}) {
  const preprocessor = language !== "css";
  const name = preprocessor
    ? `${language === "less" ? "@" : "$"}${token.name.slice(2)}`
    : token.name;
  const file =
    language === "scss"
      ? "_tokens.scss"
      : language === "sass"
        ? "button.sass"
        : language === "less"
          ? "button.less"
          : "theme.css";
  const rows = [
    {
      context: "Default",
      value: token.value,
      line: preprocessor ? (language === "scss" ? 2 : 1) : token.line,
    },
    ...(!preprocessor && token.dark
      ? [{ context: "Dark", value: token.dark, line: token.darkLine! }]
      : []),
  ];
  return (
    <section
      className={styles.documentation}
      aria-label={`Quick Documentation for ${name}`}
      data-testid="documentation-popup"
    >
      <header>
        <code>{name}</code>
      </header>
      <div className={styles.docBody}>
        {preprocessor && (
          <p className={styles.resolutionLegend}>
            <strong>↗ shows a resolved value</strong> - hover it to see every
            step <em>(resolution chain)</em>
          </p>
        )}
        <div
          className={styles.tableScroll}
          tabIndex={0}
          role="region"
          aria-label="Variable values"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Context</th>
                <th scope="col" aria-label="Color" />
                <th scope="col">Value</th>
                <th scope="col">Type</th>
                <th scope="col">Source</th>
                <th scope="col">WCAG</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.context} data-primary={index === 0}>
                  <td>{row.context}</td>
                  <td>
                    <ColorSwatches token={{ value: row.value }} bordered />
                  </td>
                  <td>
                    {preprocessor ? (
                      <NativeTooltip
                        label={`Show resolution chain for ${name}`}
                        kind="resolution"
                        content={
                          <ResolutionChain
                            steps={[
                              {
                                text: name,
                                color:
                                  language === "less" ? "#FFB347" : "#DDA0DD",
                              },
                            ]}
                            value={row.value}
                            legend={
                              language === "less"
                                ? "(@ = LESS/SCSS)"
                                : "($ = SCSS)"
                            }
                          />
                        }
                      >
                        {row.value} <span className={styles.resolved}>↗</span>
                      </NativeTooltip>
                    ) : (
                      row.value
                    )}
                  </td>
                  <td>color</td>
                  <td>
                    <NativeTooltip
                      label={`Show source ${file}:${row.line}`}
                      content={`${file}:${row.line}`}
                    >
                      :{row.line}
                    </NativeTooltip>
                  </td>
                  <td>{contrastOnWhite(row.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!preprocessor && (
          <p className={styles.cascadeNote}>
            Shown in index order — runtime applied value depends on stylesheet
            load order and specificity.
          </p>
        )}
        {!preprocessor && token.description && (
          <div className={styles.docDescription}>
            <strong>Description:</strong>
            <p>{token.description}</p>
          </div>
        )}
        <a
          className={styles.contrastLink}
          href={`https://webaim.org/resources/contrastchecker/?fcolor=${token.value.slice(1)}&bcolor=FFFFFF`}
          target="_blank"
          rel="noreferrer"
        >
          Check contrast on WebAIM Contrast Checker{" "}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
      <EllipsisVertical
        className={styles.docMore}
        size={16}
        aria-hidden="true"
      />
    </section>
  );
}
