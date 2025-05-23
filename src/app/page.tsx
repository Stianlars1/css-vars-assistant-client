import styles from "./page.module.css";
import { PageContainer } from "@/components/layout/PageContainer/PageContainer";
import { HeroSection } from "@/components/sections/heroSection/heroSection";
import { CardSection } from "@/components/sections/cardSection/cardSection";
import { FeaturesSection } from "@/components/sections/featuresSection/featuresSection";
import ScreenshotsSection from "@/components/sections/screenshotsSection/screenshotsSection";
import InstallationSection from "@/components/sections/installationSection/installationSection";
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";
import { CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID } from "@/lib/constants";

export default async function Home() {
  const pluginData = await fetchPluginData(
    CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID,
  );
  return (
    <>
      <PageContainer as={"div"} className={styles.page}>
        <HeroSection />
        <CardSection />
        <FeaturesSection />
        <ScreenshotsSection pluginInfo={pluginData} />
        <InstallationSection />
      </PageContainer>
    </>
  );
}
