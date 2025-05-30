import styles from "./JetBrainsPluginCard.module.scss";
import PluginCardHeader from "@/components/JetbrainsPlugin/JetBrainsPluginCard/components/PluginCardHeader/PluginCardHeader";
import PluginCardDescription from "@/components/JetbrainsPlugin/JetBrainsPluginCard/components/PluginCardDescription/PluginCardDescription";
import PluginCardFooter from "@/components/JetbrainsPlugin/JetBrainsPluginCard/components/PluginCardFooter/PluginCardFooter";
import Link from "next/link";
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";

export default async function JetBrainsPluginCard() {
  const pluginInfo = await fetchPluginData();

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
          icon={`https://plugins.jetbrains.com${pluginData.icon}`}
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
