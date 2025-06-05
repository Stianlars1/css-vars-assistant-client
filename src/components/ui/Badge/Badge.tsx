import styles from "./Badge.module.scss";
import { cx } from "@/lib/utils/cx";

export const Badge = ({
  children,
  size = "md",
  variant = "default",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "error" | "warning" | "info" | "fancy";
}) => {
  return (
    <div className={cx(styles.badge, styles[size], styles[variant])}>
      {children}
    </div>
  );
};
