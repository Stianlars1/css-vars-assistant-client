// src/components/JetBrainsPluginButton/JetBrainsPluginButton.tsx
import styles from "./JetBrainsPluginButton.module.scss";
import Link from "next/link";
import { cx } from "@/lib/utils/cx";
import { PLUGIN_URL } from "@/lib/urls";

interface JetBrainsPluginButtonProps {
  buttonText?: string;
  size?: "sm" | "md" | "lg";
  width?: number;
  variant?: "default" | "jetbrains";
  ariaLabel?: string;
}

export default async function JetBrainsPluginButton({
  buttonText = "Get from Marketplace",
  size,
  width = 245,
  variant = "jetbrains",
  ariaLabel,
}: JetBrainsPluginButtonProps) {
  const pluginUrl = PLUGIN_URL;

  if (variant === "default") {
    return (
      <Link
        className={styles.defaultButton}
        href={pluginUrl}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={ariaLabel}
      >
        {buttonText}
      </Link>
    );
  }
  return (
    <div
      className={cx(
        variant === "jetbrains"
          ? styles.buttonContainer
          : styles.buttonContainerDefault,
      )}
      style={{
        width: `${!size || size === "lg" ? `${width}px` : size === "sm" ? "fit-content" : "fit-content"}`,
      }}
    >
      <div
        className={cx(
          styles.ideButton,
          size === "sm" ? styles.sm : size === "md" ? styles.md : styles.lg,
        )}
        data-control-type="install"
        role="button"
        tabIndex={-1}
        aria-label={ariaLabel}
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
