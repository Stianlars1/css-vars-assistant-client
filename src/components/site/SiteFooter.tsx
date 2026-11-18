import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CURRENT_VERSION } from "@/lib/config";
import {
  GITHUB_DOCS_URL,
  GITHUB_ISSUES_URL,
  GITHUB_REPO_URL,
  JETBRAINS_MARKETPLACE_URL,
  ROUTE_CHANGELOG,
  ROUTE_FAQ,
  ROUTE_FEATURES,
  ROUTE_INSTALLATION,
  ROUTE_PREVIEW,
} from "@/lib/routes";
import styles from "./SiteChrome.module.scss";

const supportedIdes = [
  "WebStorm",
  "IntelliJ IDEA Ultimate",
  "PhpStorm",
  "PyCharm Professional",
  "GoLand",
  "RubyMine",
];

const resources = [
  { href: JETBRAINS_MARKETPLACE_URL, label: "JetBrains Marketplace" },
  { href: GITHUB_REPO_URL, label: "GitHub repository" },
  { href: GITHUB_DOCS_URL, label: "Documentation" },
  { href: GITHUB_ISSUES_URL, label: "Report an issue" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.footerTop}`}>
        <div className={styles.footerBrand}>
          <Link href="/" aria-label="CSS Variables Assistant home">
            <Image src="/logo.svg" width={40} height={40} alt="" />
            <code className="spectrum-text">CSS Variables Assistant</code>
          </Link>
          <p>
            Autocomplete, quick documentation and color swatches for CSS
            variables in JetBrains IDEs.
          </p>
          <div className={styles.footerMeta}>
            <Link href={ROUTE_CHANGELOG}>v{CURRENT_VERSION}</Link>
            <span>Free and open source</span>
            <a
              href="https://www.buymeacoffee.com/stianlarsen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a coffee
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
        <nav className={styles.footerColumn} aria-labelledby="footer-site">
          <h2 id="footer-site">Site</h2>
          <ul>
            <li>
              <Link href={ROUTE_FEATURES}>Features</Link>
            </li>
            <li>
              <Link href={ROUTE_PREVIEW}>Screenshots</Link>
            </li>
            <li>
              <Link href={ROUTE_INSTALLATION}>Installation</Link>
            </li>
            <li>
              <Link href={ROUTE_CHANGELOG}>Changelog</Link>
            </li>
            <li>
              <Link href={ROUTE_FAQ}>FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footerColumn}>
          <h2>Supported IDEs</h2>
          <ul>
            {supportedIdes.map((ide) => (
              <li key={ide}>{ide}</li>
            ))}
          </ul>
        </div>
        <nav className={styles.footerColumn} aria-labelledby="footer-resources">
          <h2 id="footer-resources">Resources</h2>
          <ul>
            {resources.map((resource) => (
              <li key={resource.href}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.label}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`site-container ${styles.footerBottom}`}>
        <span>
          © {new Date().getFullYear()} CSS Variables Assistant. Made by{" "}
          <a href="https://stianlarsen.com">Stian Larsen</a>.
        </span>
        <nav aria-label="Social">
          <a href="https://x.com/stianlarsen_">X</a>
          <a href="https://github.com/stianlars1">GitHub</a>
          <a href="https://www.linkedin.com/in/stianlars1/">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
