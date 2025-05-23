import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import Link from "next/link";
import styles from "./heroSection.module.scss";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.logoWrapper}>
          <Image
            src={`/logo.svg`}
            alt="CSS Variables Assistant logo"
            fetchPriority={"high"}
            loading={"eager"}
            quality={100}
            priority={true}
            className={styles.logo}
            width={700}
            height={700}
          />
          <h1 className={styles.title}>CSS Variables Assistant</h1>
        </div>
        <div className={styles.downloadArea}>
          <JetBrainsPluginButton />
          <Link href="#" className={styles.downloadButton}>
            Download
          </Link>
        </div>
      </div>
    </section>
  );
};
