import styles from "./JetBrainsPluginCard.module.scss";
import PluginCardHeader from "@/components/JetbrainsPlugin/JetBrainsPluginCard/components/PluginCardHeader/PluginCardHeader";
import PluginCardDescription from "@/components/JetbrainsPlugin/JetBrainsPluginCard/components/PluginCardDescription/PluginCardDescription";
import PluginCardFooter from "@/components/JetbrainsPlugin/JetBrainsPluginCard/components/PluginCardFooter/PluginCardFooter";
import Link from "next/link";
import { PluginInfo } from "@/types/plugin";

export default async function JetBrainsPluginCard({
  pluginInfo,
}: {
  pluginInfo?: PluginInfo;
}) {
  if (!pluginInfo) return <></>;
  const { pluginData, pluginRating } = pluginInfo;

  return (
    <div className={styles.cardContainer}>
      <Link
        href={`https://plugins.jetbrains.com${pluginData.link}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <PluginCardHeader
          name={pluginData.name}
          rating={pluginRating?.meanRating || 0}
        />
        <PluginCardDescription description={pluginData.preview} />
        <PluginCardFooter
          downloads={pluginData.downloads}
          pricingModel={pluginData.pricingModel}
        />
      </Link>
    </div>
  );
}
