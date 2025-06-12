// src/components/layout/Footer/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { GradientText } from "@/components/ui/GradientText/GradientText";
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";
import {
  ROUTE_CHANGELOG,
  ROUTE_FEATURES,
  ROUTE_INSTALLATION,
  ROUTE_PREVIEW,
} from "@/lib/routes";

export default async function Footer() {
  const pluginData = await fetchPluginData();
  const currentYear = new Date().getFullYear();

  const data = pluginData?.pluginData;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.section}>
            <div className={styles.brand}>
              <Image
                src="/logo_60.svg"
                width={40}
                height={40}
                alt="CSS Variables Assistant Logo"
                className={styles.logo}
              />
              <GradientText variant="gradients.spectrum.dawnBurst">
                <h3 className={styles.brandName}>CSS Variables Assistant</h3>
              </GradientText>
            </div>

            {data && data.latestVersion && (
              <p className={styles.description}>
                Latest version: <strong>{data.latestVersion.version}</strong>
              </p>
            )}
            <p className={styles.description}>
              Professional CSS custom properties plugin for JetBrains IDEs.
              Intelligent autocomplete, documentation, and color swatches for
              modern CSS development.
            </p>
            <div className={styles.stats}>
              <span className={styles.stat}>Free & Open Source</span>
              <span className={styles.stat}>JetBrains Marketplace</span>
            </div>

            <div>
              <Link
                href="https://www.buymeacoffee.com/stianlarsen"
                target="_blank"
                className={styles.buyMeACoffeeLink}
              >
                <Image
                  width={144}
                  height={40}
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                />
              </Link>
            </div>
          </div>
          <div className={styles.sections}>
            {/* Quick Links */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <nav className={styles.linkList}>
                <Link href={ROUTE_CHANGELOG} className={styles.link}>
                  Changelog
                </Link>
                <Link href={ROUTE_FEATURES} className={styles.link}>
                  Features
                </Link>
                <Link href={ROUTE_PREVIEW} className={styles.link}>
                  Preview
                </Link>
                <Link href={ROUTE_INSTALLATION} className={styles.link}>
                  Installation
                </Link>
              </nav>
            </div>

            {/* Supported IDEs */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Supported IDEs</h4>
              <div className={styles.linkList}>
                <span className={styles.ideItem}>IntelliJ IDEA</span>
                <span className={styles.ideItem}>WebStorm</span>
                <span className={styles.ideItem}>PyCharm</span>
                <span className={styles.ideItem}>PhpStorm</span>
                <span className={styles.ideItem}>RubyMine</span>
                <span className={styles.ideItem}>GoLand</span>
              </div>
            </div>

            {/* Resources */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Resources</h4>
              <nav className={styles.linkList}>
                <Link
                  href="https://plugins.jetbrains.com/plugin/27392-css-variables-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  JetBrains Marketplace
                </Link>
                <Link
                  href="https://github.com/stianlars1/css-vars-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub Repository
                </Link>
                <Link
                  href="https://github.com/stianlars1/css-vars-assistant#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Documentation
                </Link>
                <Link
                  href="https://github.com/stianlars1/css-vars-assistant/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Report Issues
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} CSS Variables Assistant. Made with ❤️ by{" "}
              <Link
                style={{ color: "hsl(var(--link-color))" }}
                href={"https://stianlarsen.com"}
              >
                Stian Larsen
              </Link>
              .
            </p>
            <p className={styles.tech}>Built with Next.js, TypeScript & SCSS</p>
          </div>

          <div className={styles.social}>
            <Link
              href="https://twitter.com/litehode"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow on Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/stianlars1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/stianlars1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Connect on LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
