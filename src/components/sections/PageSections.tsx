// src/components/layout/PageSections/PageSections.tsx
import { HeroSection } from "@/components/sections/heroSection/heroSection";
import { CardSection } from "@/components/sections/cardSection/cardSection";
import { FeaturesSection } from "@/components/sections/featuresSection/featuresSection";
import ScreenshotsSection from "@/components/sections/screenshotsSection/screenshotsSection";
import InstallationSection from "@/components/sections/installationSection/installationSection";
import { PluginInfo } from "@/types/plugin";
import { PluginStats } from "@/lib/utils/pluginStats";
import styles from "./PageSections.module.scss";
interface PageSectionsProps {
  pluginData: PluginInfo | null;
  pluginStats: PluginStats | null;
}

export const PageSections = ({ pluginData }: PageSectionsProps) => {
  return (
    <div className={styles.sections}>
      <HeroSection pluginData={pluginData} />
      <CardSection />
      <FeaturesSection />
      <ScreenshotsSection pluginInfo={pluginData} />
      <InstallationSection />
    </div>
  );
};
