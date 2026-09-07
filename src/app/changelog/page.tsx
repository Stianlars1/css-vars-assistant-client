import { siteMetadata } from "@/lib/siteMetadata";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { releases } from "@/content/releases";
import { GITHUB_REPO_URL } from "@/lib/routes";
import styles from "@/components/site/ContentPage.module.scss";

export const metadata = siteMetadata(
  "Changelog",
  "What's new in CSS Variables Assistant. Release notes for completion, documentation, themes and imported variables.",
  "/changelog",
);
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

export default function ChangelogPage() {
  return (
    <div className={`site-container ${styles.page}`}>
      <Link href="/" className={styles.back}>
        <ArrowLeft size={14} />
        Back to the plugin
      </Link>
      <div className={styles.pageHeading}>
        <span className="eyebrow">Always getting a little better</span>
        <h1>
          Small details.
          <br />
          <span>Better days.</span>
        </h1>
        <p>The latest updates to CSS Variables Assistant.</p>
      </div>
      <div className={styles.releases}>
        {releases.map((release, index) => (
          <article
            id={`v${release.version}`}
            key={release.version}
            className={styles.release}
          >
            <div className={styles.releaseMeta}>
              <span className={styles.version}>
                v{release.version}
                {index === 0 && <span>Latest</span>}
              </span>
              <time dateTime={release.date}>{formatDate(release.date)}</time>
            </div>
            <div className={styles.releaseBody}>
              <span className="eyebrow">{release.label}</span>
              <h2>{release.title}</h2>
              <p>{release.description}</p>
              <ul>
                {release.changes.map((change) => (
                  <li key={change}>{change}</li>
                ))}
              </ul>
              {release.note && (
                <p className={styles.releaseNote}>{release.note}</p>
              )}
              <a
                href={`${GITHUB_REPO_URL}/releases/tag/v${release.version}`}
                className="text-link"
              >
                Full release notes <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.history}>
        <span>Looking for an earlier update?</span>
        <a
          href={`${GITHUB_REPO_URL}/blob/main/CHANGELOG.MD`}
          className="text-link"
        >
          Read the complete changelog <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
