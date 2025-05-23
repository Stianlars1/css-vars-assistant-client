// src/components/JetBrainsPluginButton/JetBrainsPluginButton.tsx
import styles from "./JetBrainsPluginButton.module.scss";
import { fetchPluginData } from "@/app/actions/plugin/fetchPluginData";
import Link from "next/link";
import { CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID } from "@/lib/constants";

interface JetBrainsPluginButtonProps {
  buttonText?: string;
  width?: number;
}

export default async function JetBrainsPluginButton({
  buttonText = "Get from Marketplace",
  width = 245,
}: JetBrainsPluginButtonProps) {
  // Fetch basic plugin data to get the link URL
  const pluginInfo = await fetchPluginData(
    CSS_VARIABLES_ASSISTANT_JETBRAINS_PLUGIN_ID,
  );

  if (!pluginInfo) {
    return null;
  }

  const pluginUrl = `https://plugins.jetbrains.com${pluginInfo.pluginData.link}`;

  return (
    <div className={styles.buttonContainer} style={{ width }}>
      <div
        className={styles.ideButton}
        data-control-type="install"
        role="button"
        tabIndex={0}
      >
        <Link
          className={styles.ideText}
          href={pluginUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
