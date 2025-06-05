// app/changelog/page.tsx  (server component)
import fetchPlugin from "@/app/actions/fetchJetBrainsPlugin";
import styles from "./page.module.scss";
import { ChangeNotes } from "@/components/changeNotes/changeNotes";
import StructuredDataChangelog from "@/components/seo/StructuredData/StructuredDataChangelog";
import { Heading1, Paragraph } from "@/components/typography/Typography";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ROUTE_ROOT } from "@/lib/routes";
import { Metadata, ResolvingMetadata } from "next";
import { APP_NAME } from "@/lib/config";
import { OG_CHANGELOG_URL } from "@/lib/constants";

export const revalidate = 3600;

export async function generateMetadata(
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMeta = await parent;

  return {
    title: "Changelog",
    description: "Latest updates and version history for our product",
    alternates: {
      canonical: "/changelog", // Explicit canonical URL
    },
    openGraph: {
      ...(parentMeta.openGraph as any), // Inherit parent OpenGraph settings
      images: [
        {
          url: OG_CHANGELOG_URL,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} - Product Changelog`,
          type: "image/webp",
        },
      ],
      title: `Product Changelog - ${APP_NAME}`,
      description: "Stay updated with our latest features and improvements",
    },
  };
}

export default async function ChangelogPage() {
  const changelogs = await fetchPlugin();

  return (
    <>
      {/* ⭐ SEO structured-data */}
      <StructuredDataChangelog versions={changelogs} />

      <Link href={ROUTE_ROOT} className={styles.backLink}>
        <ChevronLeft size={18} className={styles.chevron} /> home
      </Link>
      <div className={styles.page}>
        <div className={styles.header}>
          <Heading1 className={styles.title}>Changelog</Heading1>
        </div>

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
