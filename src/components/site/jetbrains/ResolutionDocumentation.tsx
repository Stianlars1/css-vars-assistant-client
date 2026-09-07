import { ArrowUpRight, EllipsisVertical } from "lucide-react";
import type { ResolutionExample } from "@/content/resolution-examples";
import { contrastOnWhite } from "@/content/demo-tokens";
import NativeTooltip from "./NativeTooltip";
import ResolutionChain from "./ResolutionChain";
import ColorSwatches from "./ColorSwatches";
import styles from "./JetBrains.module.scss";

export default function ResolutionDocumentation({
  example,
  onSourceInspect,
}: {
  example: ResolutionExample;
  onSourceInspect: () => void;
}) {
  const sourceLine = example.source.slice(example.source.lastIndexOf(":"));
  return (
    <section
      className={styles.documentation}
      aria-label={`Quick Documentation for ${example.reference}`}
      data-testid="resolution-documentation"
    >
      <header>
        <code>{example.reference}</code>
      </header>
      <div className={styles.docBody}>
        <p className={styles.resolutionLegend}>
          <strong>↗ shows a resolved value</strong> - hover it to see every
          step <em>(resolution chain)</em>
        </p>
        <div
          className={styles.tableScroll}
          tabIndex={0}
          role="region"
          aria-label="Resolved variable values"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Context</th>
                {example.color && <th scope="col" aria-label="Color" />}
                <th scope="col">Value</th>
                <th scope="col">Type</th>
                <th scope="col">Source</th>
                {example.pixelEquivalent && <th scope="col">px Eq.</th>}
                {example.color && <th scope="col">WCAG</th>}
              </tr>
            </thead>
            <tbody>
              <tr data-primary="true">
                <td>Default</td>
                {example.color && (
                  <td>
                    <ColorSwatches token={{ value: example.color }} bordered />
                  </td>
                )}
                <td className={styles.valueCell}>
                  <NativeTooltip
                    label={`Show resolution chain for ${example.reference}`}
                    kind="resolution"
                    content={
                      <ResolutionChain
                        steps={example.steps}
                        value={example.value}
                        legend={example.legend}
                      />
                    }
                  >
                    {example.value} <span className={styles.resolved}>↗</span>
                  </NativeTooltip>
                </td>
                <td>{example.valueType}</td>
                <td>
                  <NativeTooltip
                    label={`Show source ${example.source}`}
                    content={example.source}
                    onOpen={onSourceInspect}
                  >
                    {sourceLine}
                  </NativeTooltip>
                </td>
                {example.pixelEquivalent && <td>{example.pixelEquivalent}</td>}
                {example.color && <td>{contrastOnWhite(example.color)}</td>}
              </tr>
            </tbody>
          </table>
        </div>
        {example.color && (
          <a
            className={styles.contrastLink}
            href={`https://webaim.org/resources/contrastchecker/?fcolor=${example.color.slice(1)}&bcolor=FFFFFF`}
            target="_blank"
            rel="noreferrer"
          >
            Check contrast on WebAIM Contrast Checker{" "}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>
      <EllipsisVertical
        className={styles.docMore}
        size={16}
        aria-hidden="true"
      />
    </section>
  );
}
