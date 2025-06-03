import styles from "./Badge.module.scss";
import { cx } from "@/lib/utils/cx";

export const Badge = ({
  children,
  size = "md",
  variant,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "error" | "warning" | "info";
}) => {
  return <div className={cx(styles.badge, styles[size])}>{children}</div>;
};
