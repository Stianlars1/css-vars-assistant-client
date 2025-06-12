import Script from "next/script";
import { HOST } from "@/lib/config";

interface FAQ {
  question: string;
  answer: string;
}

interface StructuredDataFAQProps {
  faqs: FAQ[];
}

export function StructuredDataFAQ({ faqs }: StructuredDataFAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "CSS Variables Assistant - FAQ",
    description:
      "Frequently asked questions about CSS Variables Assistant plugin for JetBrains IDEs",
    url: `${HOST}/faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="json-ld-faq"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
