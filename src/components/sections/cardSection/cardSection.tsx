import JetBrainsPluginCard from "@/components/JetbrainsPlugin/JetBrainsPluginCard/JetBrainsPluginCard";

import styles from "./cardSection.module.scss";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";

export const CardSection = () => {
  return (
    <section className={styles.cardSection}>
      <SectionHeader gradient={"gradients.spectrum.jetbrainsMarketplace"}>
        <span style={{ display: "inline-block", width: "fit-content" }}>
          JetBrains
          <br />
          Marketplace
        </span>
      </SectionHeader>
      <JetBrainsPluginCard />
    </section>
  );
};
