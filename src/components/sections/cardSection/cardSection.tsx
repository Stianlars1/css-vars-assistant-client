import JetBrainsPluginCard from "@/components/JetbrainsPlugin/JetBrainsPluginCard/JetBrainsPluginCard";

import styles from "./cardSection.module.scss";

export const CardSection = () => {
  return (
    <section className={styles.cardSection}>
      <JetBrainsPluginCard />
    </section>
  );
};
