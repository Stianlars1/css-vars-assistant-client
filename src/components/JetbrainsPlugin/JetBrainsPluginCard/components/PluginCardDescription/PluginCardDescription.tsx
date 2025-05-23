// src/components/JetBrainsPluginCard/components/PluginCardDescription/PluginCardDescription.tsx
import styles from "./PluginCardDescription.module.scss";

interface PluginCardDescriptionProps {
  description: string;
}

export default function PluginCardDescription({
  description,
}: PluginCardDescriptionProps) {
  return (
    <div className={styles.description}>
      <span>{description}</span>
    </div>
  );
}
