import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import TokenDemo from "@/components/site/TokenDemo";
import ContextFeatures from "@/components/site/ContextFeatures";
import LanguageDemo from "@/components/site/LanguageDemo";
import Installation from "@/components/site/Installation";
import InstallLink from "@/components/site/InstallLink";
import MarketplaceStats from "@/components/site/MarketplaceStats";
import { getMarketplaceStats } from "@/lib/marketplace";
import { APP_NAME, CURRENT_VERSION, HOST } from "@/lib/config";
import { GITHUB_REPO_URL, JETBRAINS_MARKETPLACE_URL } from "@/lib/routes";
import styles from "@/components/site/Home.module.scss";

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, macOS, Linux",
  softwareVersion: CURRENT_VERSION,
  url: HOST,
  downloadUrl: JETBRAINS_MARKETPLACE_URL,
  codeRepository: GITHUB_REPO_URL,
  description:
    "Stylesheet variable completion, quick documentation, theme values and sources in supported JetBrains IDEs.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Stian Larsen",
    url: "https://stianlarsen.com",
  },
};

export const revalidate = 1800;

export default async function Home() {
  const marketplaceStats = await getMarketplaceStats();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(software).replace(/</g, "\\u003c"),
        }}
      />
      <section
        className={`site-container ${styles.hero}`}
        aria-labelledby="hero-heading"
      >
        <Link href="/changelog#v1.9.4" className={styles.release}>
          <span>
            <i />v{CURRENT_VERSION}
          </span>
          Small update. Clearer insights.
          <ArrowUpRight size={12} />
        </Link>
        <div className={styles.heroIntro}>
          <h1 id="hero-heading">
            Know your tokens.
            <br />
            <span>Keep your flow.</span>
          </h1>
          <div className={styles.heroAside}>
            <p>
              Find the right variable. See its value, theme, and source. All
              without leaving your JetBrains editor.
            </p>
            <div>
              <InstallLink />
              <a href="#preview" className="text-link">
                Explore <ArrowDown size={14} />
              </a>
            </div>
            <span className={styles.freeNote}>
              <Check size={12} />
              Free & open source. Built for your IDE.
            </span>
          </div>
        </div>
        <MarketplaceStats stats={marketplaceStats} />
        <TokenDemo />
      </section>
      <div className={`site-container ${styles.compatibility}`}>
        <div>
          For JetBrains IDEs with
          <br />
          JavaScript and CSS support.
        </div>
        <ul aria-label="Supported IDEs">
          <li>WebStorm</li>
          <li>IntelliJ IDEA Ultimate</li>
          <li>PhpStorm</li>
          <li>PyCharm Professional</li>
          <li>GoLand</li>
          <li>RubyMine</li>
        </ul>
      </div>
      <ContextFeatures />
      <LanguageDemo />
      <Installation />
    </>
  );
}
