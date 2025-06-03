import styles from "./simpleFeedback.module.scss";
import { Check, Info, TriangleAlert, X } from "lucide-react";
import { cx } from "@/lib/utils/cx";
import { ReactNode } from "react";
type Props =
  | {
      variant: "info" | "warning" | "error" | "success";
      message: string;
      children?: ReactNode;
      icon?: boolean;
      size?: "sm" | "md" | "lg";
      noMargin?: boolean;
    }
  | {
      variant: "info" | "warning" | "error" | "success";
      message?: string;
      children: ReactNode;
      icon?: boolean;
      size?: "sm" | "md" | "lg";
      noMargin?: boolean;
    };
export const SimpleFeedback = ({
  variant,
  message,
  children,
  noMargin = false,
  icon = true,
  size = "md",
}: Props) => {
  const classnames = cx(
    styles.simpleFeedback,
    styles[variant],
    icon && styles.simpleFeedbackWithIcon,
    styles[size],
    noMargin && styles.noMargin,
  );

  if (icon) {
    const iconSize = `icon-${size}`;
    const Icon = () => {
      switch (variant) {
        case "info":
          return (
            <Info
              className={cx(styles.infoIcon, styles.icon, styles[iconSize])}
            />
          );
        case "warning":
          return (
            <TriangleAlert
              className={cx(styles.warningIcon, styles.icon, styles[iconSize])}
            />
          );
        case "error":
          return (
            <X
              className={cx(styles.errorIcon, styles.icon, styles[iconSize])}
            />
          );
        case "success":
          return (
            <Check
              className={cx(styles.successIcon, styles.icon, styles[iconSize])}
            />
          );
      }
    };
    return (
      <div className={classnames}>
        {<Icon />}

        {message ?? children}
      </div>
    );
  }
  return <div className={classnames}>{message ?? children}</div>;
};
