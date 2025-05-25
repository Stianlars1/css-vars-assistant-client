import JetBrainsPluginCard from "@/components/JetbrainsPlugin/JetBrainsPluginCard/JetBrainsPluginCard";

import styles from "./cardSection.module.scss";

export const CardSection = () => {
  return (
    <section className={styles.cardSection}>
      <h2 className={styles.title}>JetBrains&apos;s Marketplace</h2>
      <JetBrainsPluginCard />
    </section>
  );
};
