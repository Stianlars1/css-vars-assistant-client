import Link from "next/link";
import { ArrowDown } from "lucide-react";
import HeroEditor from "./HeroEditor";
import InstallLink from "../InstallLink";
import type { MarketplaceStats } from "@/lib/marketplace";
import { CURRENT_VERSION } from "@/lib/config";
import { JETBRAINS_MARKETPLACE_URL, ROUTE_CHANGELOG } from "@/lib/routes";
import styles from "./Hero.module.scss";

export default function Hero({ stats }: { stats: MarketplaceStats }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-heading" className={`spectrum-text ${styles.title}`}>
            <span>CSS Variables</span> Assistant
          </h1>
          <p className={styles.lede}>
            Autocomplete, quick documentation and color swatches for CSS
            variables, right inside your JetBrains IDE. Works with CSS, SCSS,
            Sass and LESS.
          </p>
          <div className={styles.actions}>
            <InstallLink />
            <a href="#features" className="text-link">
              See what it does <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <dl className={styles.stats}>
            {stats.downloads !== null && (
              <div>
                <dt>Downloads</dt>
                <dd>{stats.downloads.toLocaleString("en-US")}</dd>
              </div>
            )}
            {stats.rating && (
              <div>
                <dt>
                  <a
                    href={`${JETBRAINS_MARKETPLACE_URL}/reviews`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marketplace rating
                  </a>
                </dt>
                <dd>
                  {stats.rating.value.toFixed(1)}
                  <span> / 5</span>
                </dd>
              </div>
            )}
            <div>
              <dt>
                <Link href={ROUTE_CHANGELOG}>Latest version</Link>
              </dt>
              <dd>{CURRENT_VERSION}</dd>
            </div>
          </dl>
        </div>
        <HeroEditor />
      </div>
    </section>
  );
}
