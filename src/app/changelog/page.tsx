// app/changelog/page.tsx  (server component)
import { getPlugin } from "@/app/actions/fetchJetBrainsPlugin";
import styles from "./page.module.scss";
import { ChangeNotes } from "@/components/changeNotes/changeNotes";
import StructuredDataChangelog from "@/components/seo/StructuredData/StructuredDataChangelog";
import { Heading1, Paragraph } from "@/components/typography/Typography";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ROUTE_ROOT } from "@/lib/routes";

export const revalidate = 86400;
export default async function ChangelogPage() {
  const changelogs = await getPlugin();

  return (
    <>
      {/* ⭐ SEO structured-data */}
      <StructuredDataChangelog versions={changelogs} />

      <Link href={ROUTE_ROOT} className={styles.backLink}>
        <ChevronLeft size={18} className={styles.chevron} /> home
      </Link>
      <div className={styles.page}>
        <Heading1>Changelog</Heading1>

        {changelogs.length === 0 ? (
          <Paragraph>No changelogs available at the moment.</Paragraph>
        ) : (
          <section className={styles.list}>
            {changelogs.map((log) => (
              <article
                id={`v${log.version}`}
                key={log.version}
                className={styles.item}
              >
                <ChangeNotes html={log.changeNotesHtml} />
              </article>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
