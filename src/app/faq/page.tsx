import { siteMetadata } from "@/lib/siteMetadata";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import { faqs } from "@/content/faqs";
import {
  GITHUB_DOCS_URL,
  GITHUB_ISSUES_URL,
  JETBRAINS_MARKETPLACE_URL,
} from "@/lib/routes";
import { HOST } from "@/lib/config";
import styles from "@/components/site/ContentPage.module.scss";

export const metadata = siteMetadata(
  "FAQ & support",
  "Installation, supported IDEs, stylesheet languages, themes, imports and settings for CSS Variables Assistant.",
  "/faq",
);
const categories = [...new Set(faqs.map((faq) => faq.category))];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${HOST}/faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <div className={`site-container ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Link href="/" className={styles.back}>
        <ArrowLeft size={14} />
        Back to the plugin
      </Link>
      <div className={styles.pageHeading}>
        <span className="eyebrow">A little clarity</span>
        <h1>
          Good questions.
          <br />
          <span>Useful answers.</span>
        </h1>
        <p>
          Getting started, finding your tokens, and making the plugin work for
          you.
        </p>
      </div>
      <div className={styles.contentLayout}>
        <aside className={styles.sidebar}>
          <nav aria-label="FAQ categories">
            {categories.map((category, i) => (
              <a key={category} href={`#category-${i}`}>
                {category}
              </a>
            ))}
          </nav>
          <a href={JETBRAINS_MARKETPLACE_URL}>
            Check IDE compatibility <ArrowUpRight size={13} />
          </a>
        </aside>
        <div>
          {categories.map((category, index) => (
            <section
              key={category}
              id={`category-${index}`}
              className={styles.faqGroup}
              aria-labelledby={`faq-heading-${index}`}
            >
              <h2 id={`faq-heading-${index}`}>{category}</h2>
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq) => (
                  <details key={faq.question} className={styles.faq}>
                    <summary>
                      {faq.question}
                      <Plus size={18} aria-hidden="true" />
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
            </section>
          ))}
          <div className={styles.help}>
            <h2>Still have a question?</h2>
            <p>
              Take a look at the <a href={GITHUB_DOCS_URL}>documentation</a>, or{" "}
              <a href={GITHUB_ISSUES_URL}>open an issue on GitHub</a> with a
              small example. It helps make the plugin better for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
