import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import styles from "./heroSection.module.scss";
import { Interactive3DPreview } from "@/components/sections/heroSection/Interactive3DPreview";
import { PluginInfo } from "@/types/plugin";
import { Badge } from "@/components/ui/Badge/Badge";
import { GradientText } from "@/components/ui/GradientText/GradientText";
import { LatestVersionBadge } from "@/components/LatestVersionBadge/LatestVersionBadge";

export const HeroSection = ({
  pluginData,
}: {
  pluginData: PluginInfo | null;
}) => {
  const multipleImages = [
    "/static/completions/completions_non-color.png",
    "/static/completions/completions_color.png",
    "/static/documentation/documentation_non-color.png",
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <div className={styles.heroHeaderMain}>
            <GradientText variant={"gradients.spectrum.prismBreak"}>
              <h1 className={styles.title}>
                <span
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                  }}
                >
                  CSS Variables
                </span>
                <br />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    width: "fit-content",
                  }}
                >
                  Assistant
                </span>
              </h1>
            </GradientText>
            <div className={styles.titleBackground} />

            <div className={styles.downloadArea}>
              <JetBrainsPluginButton />
            </div>
            {/*<LatestVersionBadge pluginData={pluginData?.pluginData} />*/}
          </div>
        </div>

        {/*
        <Interactive3DPreview
          src="/static/completions/completions_non-color.png"
          alt="CSS Variables Assistant logo"
          width={2430}
          height={1404}
          quality={100}
        />
*/}

        <Interactive3DPreview
          srcs={multipleImages}
          alt="Product gallery"
          width={700}
          height={700}
          quality={100}
        />
      </div>
    </section>
  );
};
