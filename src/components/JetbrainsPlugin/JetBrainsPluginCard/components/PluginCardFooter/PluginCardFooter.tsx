// src/components/JetBrainsPluginCard/components/PluginCardFooter/PluginCardFooter.tsx
import styles from "./PluginCardFooter.module.scss";

interface PluginCardFooterProps {
  downloads: number;
  pricingModel: string;
}

export default function PluginCardFooter({
  downloads,
  pricingModel,
}: PluginCardFooterProps) {
  const formattedDownloads = new Intl.NumberFormat().format(downloads);

  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.colInline}>
          <div className={styles.downloads}>{formattedDownloads} downloads</div>
        </div>
        <div className={styles.colInline}>
          <div className={styles.pricing}>
            {pricingModel === "FREE" ? "Free" : pricingModel}
          </div>
        </div>
      </div>
    </div>
  );
}
