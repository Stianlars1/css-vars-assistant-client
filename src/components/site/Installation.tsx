import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import MarketplaceCard from "./MarketplaceCard";
import { GITHUB_REPO_URL } from "@/lib/routes";
import styles from "./Home.module.scss";

export default function Installation() {
  return (
    <section
      className={`site-container ${styles.installation}`}
      id="installation"
      aria-labelledby="install-heading"
    >
      <div>
        <span className="eyebrow">One small addition to your editor</span>
        <h2 id="install-heading">
          Goodbye, token hunt.
          <br />
          <span>Hello, flow.</span>
        </h2>
        <p>
          Free and open source.
          <br />
          Ready for your next stylesheet.
        </p>
        <MarketplaceCard />
        <a
          className={styles.manualLink}
          href={`${GITHUB_REPO_URL}/releases/latest`}
        >
          Prefer a manual install? Get the ZIP <ArrowUpRight size={13} />
        </a>
      </div>
      <div className={styles.installSteps}>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Open your IDE’s Marketplace</h3>
              <p>
                Settings <ArrowRight size={12} /> Plugins{" "}
                <ArrowRight size={12} /> Marketplace
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Find CSS Variables Assistant</h3>
              <p>Search for the plugin by name and choose Install.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Get back to your stylesheet</h3>
              <p>
                Restart if prompted. Start typing a variable to see suggestions.
              </p>
            </div>
          </li>
        </ol>
        <Link className="text-link" href="/faq">
          Questions before you install? <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
