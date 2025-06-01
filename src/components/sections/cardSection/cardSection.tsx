import JetBrainsPluginCard from "@/components/JetbrainsPlugin/JetBrainsPluginCard/JetBrainsPluginCard";

import styles from "./cardSection.module.scss";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";
import { PluginInfo } from "@/types/plugin";

export const CardSection = ({ pluginInfo }: { pluginInfo?: PluginInfo }) => {
  return (
    <section className={styles.cardSection}>
      <SectionHeader gradient={"gradients.spectrum.jetbrainsMarketplace"}>
        <span style={{ display: "inline-block", width: "fit-content" }}>
          JetBrains
          <br />
          Marketplace
        </span>
      </SectionHeader>
      <JetBrainsPluginCard pluginInfo={pluginInfo} />
    </section>
  );
};
