import Hero from "@/components/site/hero/Hero";
import Features from "@/components/site/features/Features";
import Resolution from "@/components/site/Resolution";
import Screenshots from "@/components/site/Screenshots";
import Installation from "@/components/site/Installation";
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";
import { getMarketplaceStats } from "@/lib/marketplace";
import { APP_NAME, CURRENT_VERSION, HOST } from "@/lib/config";
import { GITHUB_REPO_URL, JETBRAINS_MARKETPLACE_URL } from "@/lib/routes";
import { JETBRAINS_PLUGINS_HREF } from "@/lib/urls";

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
  const [marketplaceStats, pluginInfo] = await Promise.all([
    getMarketplaceStats(),
    fetchPluginData(),
  ]);
  const screenshots =
    pluginInfo?.pluginData.screens.map(
      (screen) => `${JETBRAINS_PLUGINS_HREF}${screen.url}`,
    ) ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(software).replace(/</g, "\\u003c"),
        }}
      />
      <Hero stats={marketplaceStats} />
      <Features />
      <Resolution />
      {screenshots.length > 0 && <Screenshots images={screenshots} />}
      <Installation pluginInfo={pluginInfo} />
    </>
  );
}
