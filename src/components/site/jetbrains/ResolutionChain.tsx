import type { ResolutionStep } from "@/content/resolution-examples";
import styles from "./NativeTooltip.module.scss";

export default function ResolutionChain({
  steps,
  value,
  legend,
}: {
  steps: ResolutionStep[];
  value: string;
  legend: string;
}) {
  return (
    <div className={styles.chain}>
      <strong>Resolution chain:</strong>
      <ol>
        {steps.map((step, index) => (
          <li key={`${index}-${step.text}`}>
            <span style={{ color: step.color }}>{step.text}</span>
            {index < steps.length - 1 && (
              <span className={styles.down} aria-hidden="true">
                ⬇
              </span>
            )}
          </li>
        ))}
      </ol>
      <strong className={styles.finalValue}>Final value: {value}</strong>
      {legend && <p>{legend}</p>}
    </div>
  );
}
