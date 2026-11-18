import { JETBRAINS_MARKETPLACE_URL } from "@/lib/routes";
import { cx } from "@/lib/utils/cx";
import styles from "./SiteChrome.module.scss";

export default function InstallLink({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <a
      className={cx(styles.install, compact && styles.installCompact)}
      href={JETBRAINS_MARKETPLACE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {compact ? "Install" : "Get from Marketplace"}
    </a>
  );
}
