import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import styles from "./heroSection.module.scss";
import { Interactive3DPreview } from "@/components/sections/heroSection/Interactive3DPreview";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <h1 className={styles.title}>CSS Variables Assistant</h1>

          <div className={styles.downloadArea}>
            <JetBrainsPluginButton />
          </div>
        </div>

        <Interactive3DPreview
          src="/static/completions2.png"
          alt="CSS Variables Assistant logo"
          width={2430}
          height={1404}
          quality={100}
        />
      </div>
    </section>
  );
};
