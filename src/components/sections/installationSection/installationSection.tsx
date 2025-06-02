import styles from "./installationSection.module.scss";
import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";

export default function InstallationSection() {
  return (
    <section
      style={{
        marginBlockStart: "40px",
      }}
      id={"installation"}
      className={styles.guideSection}
    >
      <SectionHeader
        gradient={"gradients.warm.warmSunset"}
        subtitle={
          "Follow these steps to install the CSS Variables Assistant plugin in your IDE."
        }
      >
        Installation Guide
      </SectionHeader>
      <div className={styles.guideContainer}>
        <div className={styles.guideSteps}>
          <h3 className={styles.guideTitle}>Installing in Your IDE</h3>
          <ol className={styles.steps}>
            <li>Open WebStorm (or any IntelliJ-based IDE)</li>
            <li>
              Go to <strong>Settings → Plugins → Marketplace</strong>
            </li>
            <li>
              Search for <em>{`"CSS Variables Assistant"`}</em>
            </li>
            <li>
              Click <strong>Install</strong>
            </li>
            <li>Restart the IDE when prompted</li>
          </ol>
        </div>

        <div className={styles.guideSteps}>
          <h3 className={styles.guideTitle}>Direct Installation</h3>
          <div className={styles.directButtons}>
            <JetBrainsPluginButton />
            <p className={styles.directNote}>
              Click the button above to open the plugin page in JetBrains
              Marketplace
            </p>
          </div>
        </div>

        <div className={styles.guideSteps}>
          <h3 className={styles.guideTitle}>Manual Installation</h3>
          <ol className={styles.steps}>
            <li>Download the plugin ZIP file</li>
            <li>
              In your IDE, go to <strong>Settings → Plugins</strong>
            </li>
            <li>
              Click the gear icon and select{" "}
              <strong>Install Plugin from Disk...</strong>
            </li>
            <li>Select the downloaded ZIP file</li>
            <li>Restart the IDE when prompted</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
