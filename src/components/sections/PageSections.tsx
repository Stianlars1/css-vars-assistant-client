"use server";
// src/components/layout/PageSections/PageSections.tsx
import { CardSection } from "@/components/sections/cardSection/cardSection";
import { FeaturesSection } from "@/components/sections/featuresSection/featuresSection";
import InstallationSection from "@/components/sections/installationSection/installationSection";
import { PluginInfo } from "@/types/plugin";
import { PluginStats } from "@/lib/utils/pluginStats";
import styles from "./PageSections.module.scss";
import dynamic from "next/dynamic";
import HeroSectionV2 from "@/components/sections/heroSection/v2/heroSection";

const DynamicScreenShotsSection = dynamic(
  () => import("@/components/sections/previewSection/previewSection"),
);
interface PageSectionsProps {
  pluginData: PluginInfo | null;
  pluginStats: PluginStats | null;
}

export default async function PageSections({ pluginData }: PageSectionsProps) {
  return (
    <div className={styles.sections}>
      <HeroSectionV2 />
      {pluginData && <CardSection pluginInfo={pluginData} />}
      <FeaturesSection />
      <DynamicScreenShotsSection pluginInfo={pluginData} />
      <InstallationSection />
    </div>
  );
}
