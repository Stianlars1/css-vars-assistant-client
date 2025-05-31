"use server";
// src/components/layout/PageSections/PageSections.tsx
import { CardSection } from "@/components/sections/cardSection/cardSection";
import { FeaturesSection } from "@/components/sections/featuresSection/featuresSection";
import ScreenshotsSection from "@/components/sections/screenshotsSection/screenshotsSection";
import InstallationSection from "@/components/sections/installationSection/installationSection";
import { PluginInfo } from "@/types/plugin";
import { PluginStats } from "@/lib/utils/pluginStats";
import styles from "./PageSections.module.scss";
import HeroSection from "@/components/sections/heroSection/v1/heroSection";

interface PageSectionsProps {
  pluginData: PluginInfo | null;
  pluginStats: PluginStats | null;
}

export default async function PageSections({ pluginData }: PageSectionsProps) {
  return (
    <div className={styles.sections}>
      <HeroSection />
      <CardSection />
      <FeaturesSection />
      <ScreenshotsSection pluginInfo={pluginData} />
      <InstallationSection />
    </div>
  );
}
