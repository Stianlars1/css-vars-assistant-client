"use server";
import styles from "./heroSection.module.scss";
import { GradientText } from "@/components/ui/GradientText/GradientText";
import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import ClientHero from "@/components/sections/heroSection/v1/ClientHero";
import { PluginInfo } from "@/types/plugin";
import { Badge } from "@/components/ui/Badge/Badge";

export default async function HeroSection({
  pluginInfo,
}: {
  pluginInfo?: PluginInfo | null;
}) {
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

            {/*{pluginInfo &&*/}
            {/*  pluginInfo.pluginData &&*/}
            {/*  pluginInfo.pluginData.downloads && (*/}
            {/*    <Badge variant={"fancy"}>*/}
            {/*      {pluginInfo.pluginData.downloads}*/}
            {/*    </Badge>*/}
            {/*  )}*/}
          </div>
        </div>

        <ClientHero />
      </div>
    </section>
  );
}
