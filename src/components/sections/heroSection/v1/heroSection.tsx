import styles from "./heroSection.module.scss";
import { GradientText } from "@/components/ui/GradientText/GradientText";
import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import ClientHero from "@/components/sections/heroSection/v1/ClientHero";

export const revalidate = 60 * 60 * 24 * 7 * 4; // 4 weeks
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <div className={styles.heroHeaderMain}>
            <GradientText variant={"gradients.spectrum.prismBreak"}>
              <h1 className={styles.title}>
                <span className={styles.titleInner}>CSS Variables</span>
                <br />
                <span>Assistant</span>
              </h1>
            </GradientText>
            <div className={styles.titleBackground} />

            <div className={styles.downloadArea}>
              <JetBrainsPluginButton />
            </div>
            {/*<LatestVersionBadge pluginData={pluginData?.pluginData} />*/}
          </div>
        </div>

        <ClientHero />
      </div>
    </section>
  );
}
