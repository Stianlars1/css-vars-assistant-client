import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  GITHUB_DOCS_URL,
  GITHUB_ISSUES_URL,
  GITHUB_REPO_URL,
} from "@/lib/routes";
import styles from "./SiteChrome.module.scss";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.footerTop}`}>
        <div>
          <Link href="/" className={styles.footerBrand}>
            A little more clarity.
            <br />
            <span>Right in your editor.</span>
          </Link>
          <p>CSS Variables Assistant</p>
        </div>
        <nav aria-label="Resources">
          <a href={GITHUB_DOCS_URL}>
            Documentation <ArrowUpRight size={14} />
          </a>
          <a href={GITHUB_REPO_URL}>
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={GITHUB_ISSUES_URL}>
            Report an issue <ArrowUpRight size={14} />
          </a>
          <Link href="/changelog">Changelog</Link>
          <Link href="/faq">FAQ & support</Link>
          <a href="https://buymeacoffee.com/stianlarsen">
            Support the project <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
      <div className={`site-container ${styles.footerBottom}`}>
        <span>© {new Date().getFullYear()} CSS Variables Assistant</span>
        <span>
          Made by{" "}
          <a href="https://stianlarsen.com">
            Stian Larsen <ArrowUpRight size={12} />
          </a>
        </span>
        <span>Free. Open source. In your flow.</span>
      </div>
    </footer>
  );
}
