import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import JetBrainsPluginCard from "@/components/JetbrainsPlugin/JetBrainsPluginCard/JetBrainsPluginCard";
import InstallLink from "./InstallLink";
import { GITHUB_REPO_URL, ROUTE_FAQ } from "@/lib/routes";
import type { PluginInfo } from "@/types/plugin";
import styles from "./Sections.module.scss";

export default function Installation({
  pluginInfo,
}: {
  pluginInfo: PluginInfo | null;
}) {
  return (
    <section
      className={`site-container ${styles.section}`}
      id="installation"
      aria-labelledby="install-heading"
    >
      <header className={`section-heading ${styles.installHeading}`}>
        <h2 id="install-heading" className="spectrum-text">
          JetBrains Marketplace
        </h2>
        <p>
          Free and open source. Install it without leaving your IDE, in about a
          minute.
        </p>
      </header>
      <div className={styles.install}>
        <ol className={styles.steps}>
          <li>
            <h3>Open the plugin Marketplace</h3>
            <p>
              In your IDE, go to <kbd>Settings</kbd>
              <ArrowRight size={13} aria-label="then" />
              <kbd>Plugins</kbd>
              <ArrowRight size={13} aria-label="then" />
              <kbd>Marketplace</kbd>.
            </p>
          </li>
          <li>
            <h3>Search for CSS Variables Assistant</h3>
            <p>Select it in the results and choose Install.</p>
          </li>
          <li>
            <h3>
              Type <code>var(--</code> in a stylesheet
            </h3>
            <p>
              Restart the IDE if it asks. Suggestions appear as soon as indexing
              has finished.
            </p>
          </li>
        </ol>
        <div className={styles.installAside}>
          {pluginInfo && <JetBrainsPluginCard pluginInfo={pluginInfo} />}
          <div className={styles.installActions}>
            <InstallLink />
            <a
              className="text-link"
              href={`${GITHUB_REPO_URL}/releases/latest`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the ZIP instead
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <Link className={styles.faqLink} href={ROUTE_FAQ}>
            Questions before you install? Read the FAQ
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
