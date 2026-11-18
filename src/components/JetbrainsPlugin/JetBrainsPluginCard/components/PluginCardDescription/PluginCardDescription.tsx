// src/components/JetBrainsPluginCard/components/PluginCardDescription/PluginCardDescription.tsx
import styles from "./PluginCardDescription.module.scss";

interface PluginCardDescriptionProps {
  description: string;
}

const entities: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

export default function PluginCardDescription({
  description,
}: PluginCardDescriptionProps) {
  // Marketplace returns the preview text HTML-escaped.
  const text = description.replace(
    /&(?:amp|lt|gt|quot|#39);/g,
    (entity) => entities[entity],
  );
  return (
    <div className={styles.description}>
      <span>{text}</span>
    </div>
  );
}
