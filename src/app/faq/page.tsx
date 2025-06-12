import { Metadata, ResolvingMetadata } from "next";
import styles from "./page.module.scss";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";
import { Heading3, Paragraph, Text } from "@/components/typography/Typography";
import Link from "next/link";
import { GITHUB_DOCS_URL, GITHUB_ISSUES_URL, ROUTE_ROOT } from "@/lib/routes";
import { ChevronLeft } from "lucide-react";
import { StructuredDataFAQ } from "@/components/seo/StructuredData/StructuredDataFAQ";
import { APP_NAME, HOST } from "@/lib/config";

export async function generateMetadata(
  props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMeta = await parent;

  return {
    title: "FAQ - Frequently Asked Questions",
    description:
      "Common questions and solutions for CSS Variables Assistant plugin. Troubleshooting, configuration, and usage tips for JetBrains IDEs.",
    alternates: { canonical: "/faq" },
    openGraph: {
      ...(parentMeta.openGraph as any),
      title: `FAQ - ${APP_NAME}`,
      description:
        "Get answers to common questions about CSS Variables Assistant plugin installation, configuration, and troubleshooting.",
      url: `${HOST}/faq`,
    },
  };
}

const faqs = [
  {
    question: "Why don't my CSS variables show up in autocomplete?",
    answer:
      "This usually happens when variables are newly added and the index hasn't updated. Go to Settings → Tools → CSS Variables Assistant and click the 'Re-index Variables' button. Wait for the indexing to complete before testing again.",
  },
  {
    question: "Why aren't imported variables (@import) being suggested?",
    answer:
      "Check your indexing scope setting. Go to Settings → Tools → CSS Variables Assistant and change the scope to 'PROJECT + IMPORTS' or 'GLOBAL'. Apply the changes, then re-index variables from the same interface.",
  },
  {
    question: "How can I debug which variables are being indexed?",
    answer:
      "Right-click any CSS file and select 'Debug CSS Import Resolution' from the context menu. This shows a full analysis report of recursively resolved imports and discovered variables with their file paths.",
  },
  {
    question: "The plugin isn't working at all. What should I do?",
    answer:
      "Try this troubleshooting sequence: 1) Restart your IDE, 2) Go to Settings → Tools → CSS Variables Assistant and click 'Re-index Variables', 3) If still not working, try File → Invalidate Caches and Restart, then re-index variables again.",
  },
  {
    question: "PROJECT + IMPORTS scope doesn't resolve correct values. Why?",
    answer:
      "This is an experimental feature currently being improved. For now, try changing the indexing scope to 'GLOBAL' in Settings → Tools → CSS Variables Assistant for more reliable variable resolution.",
  },
  {
    question: "Which JetBrains IDEs are supported?",
    answer:
      "CSS Variables Assistant works with all JetBrains IDEs including IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, RubyMine, GoLand, and CLion. Requires version 2025.1 or newer.",
  },
  {
    question: "What file types are supported?",
    answer:
      "The plugin works in CSS, SCSS, SASS, LESS, JavaScript, TypeScript, JSX, and TSX files. It provides autocomplete inside var(--...) functions and preprocessor variable references.",
  },
  {
    question: "How do I configure the variable sorting order?",
    answer:
      "Go to Settings → Tools → CSS Variables Assistant and look for the 'Completion sorting' option. You can choose between ascending or descending value-based sorting for logical variable organization.",
  },
];

export default function FAQPage() {
  return (
    <>
      <StructuredDataFAQ faqs={faqs} />

      <Link href={ROUTE_ROOT} className={styles.backLink}>
        <ChevronLeft size={18} /> Back to home
      </Link>

      <div className={styles.page}>
        <SectionHeader
          className={styles.header}
          gradient="gradients.spectrum.vibrantSpectrum"
          subtitle="Common questions and solutions for CSS Variables Assistant"
        >
          Frequently Asked Questions
        </SectionHeader>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <article key={index} className={styles.faqItem}>
              <Heading3 className={styles.question}>{faq.question}</Heading3>
              <Paragraph className={styles.answer}>{faq.answer}</Paragraph>
            </article>
          ))}
        </div>

        <div className={styles.helpSection}>
          <Heading3>Need More Help?</Heading3>
          <Text>
            If you can&apos;t find the answer you&apos;re looking for, check our{" "}
            <Link href={GITHUB_DOCS_URL}>documentation</Link> or{" "}
            <Link href={GITHUB_ISSUES_URL}>report an issue</Link> on GitHub.
          </Text>
        </div>
      </div>
    </>
  );
}
