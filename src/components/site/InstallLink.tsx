import { ArrowUpRight } from "lucide-react";
import { JETBRAINS_MARKETPLACE_URL } from "@/lib/routes";
import styles from "./SiteChrome.module.scss";

export default function InstallLink({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <a className={styles.install} href={JETBRAINS_MARKETPLACE_URL}>
      {compact ? "Get the plugin" : "Install from Marketplace"}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
