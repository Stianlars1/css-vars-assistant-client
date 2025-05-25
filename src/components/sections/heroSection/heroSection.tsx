import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import styles from "./heroSection.module.scss";
import { Interactive3DPreview } from "@/components/sections/heroSection/Interactive3DPreview";

export const HeroSection = () => {
  const multipleImages = [
    "/static/completions/completions_non-color.png",
    "/static/completions/completions_color.png",
    "/static/docs/docs.png",
  ];
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <h1 className={styles.title}>CSS Variables Assistant</h1>

          <div className={styles.downloadArea}>
            <JetBrainsPluginButton />
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
