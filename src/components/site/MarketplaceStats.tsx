import { ArrowUpRight, Download, Star } from "lucide-react";
import type { MarketplaceStats as Stats } from "@/lib/marketplace";
import { JETBRAINS_MARKETPLACE_URL } from "@/lib/routes";
import styles from "./Marketplace.module.scss";

export default function MarketplaceStats({ stats }: { stats: Stats }) {
  if (stats.downloads === null && stats.rating === null) return null;

  return (
    <div className={styles.stats} aria-label="JetBrains Marketplace statistics">
      <dl>
        {stats.downloads !== null && (
          <div>
            <dt>
              <Download size={13} aria-hidden="true" /> Downloads
            </dt>
            <dd>{stats.downloads.toLocaleString("en-US")}</dd>
          </div>
        )}
        {stats.rating && (
          <div>
            <dt>
              <Star size={13} aria-hidden="true" />
              {stats.rating.count.toLocaleString("en-US")}{" "}
              {stats.rating.count === 1 ? "rating" : "ratings"}
            </dt>
            <dd>
              {stats.rating.value.toFixed(1)} <span>/ 5</span>
            </dd>
          </div>
        )}
      </dl>
      <a
        href={`${JETBRAINS_MARKETPLACE_URL}/reviews`}
        target="_blank"
        rel="noopener noreferrer"
      >
        On JetBrains Marketplace <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </div>
  );
}
