import type { Token } from "@/content/demo-tokens";
import styles from "./JetBrains.module.scss";

export default function ColorSwatches({
  token,
  bordered = false,
}: {
  token: Pick<Token, "value" | "dark">;
  bordered?: boolean;
}) {
  return (
    <span
      className={styles.swatches}
      data-bordered={bordered}
      aria-hidden="true"
    >
      <i style={{ backgroundColor: token.value }} />
      {token.dark && <i style={{ backgroundColor: token.dark }} />}
    </span>
  );
}
