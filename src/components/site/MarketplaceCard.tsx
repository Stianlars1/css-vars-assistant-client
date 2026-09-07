import { ArrowUpRight } from "lucide-react";
import { CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID } from "@/lib/constants";
import { JETBRAINS_MARKETPLACE_URL } from "@/lib/routes";
import styles from "./Marketplace.module.scss";

export default function MarketplaceCard() {
  return (
    <div className={styles.card}>
      <iframe
        src={`https://plugins.jetbrains.com/embeddable/card/${CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID}`}
        title="CSS Variables Assistant Marketplace card"
        width="384"
        height="319"
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
      />
      <a
        href={JETBRAINS_MARKETPLACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View CSS Variables Assistant on JetBrains Marketplace"
      >
        View on JetBrains Marketplace
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}
