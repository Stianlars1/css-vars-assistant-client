import styles from "./SectionHeader.module.scss";
import { cx } from "@/lib/utils/cx";
import { GradientVariant } from "@/components/ui/GradientText/gradients";
import { GradientText } from "@/components/ui/GradientText/GradientText";
import { ReactNode } from "react";

type SectionHeaderProps =
  | {
      children: ReactNode;
      gradient?: GradientVariant;
      subtitle?: string;
      className?: string;
    }
  | {
      title: string;
      gradient?: GradientVariant;
      subtitle?: string;
      className?: string;
    };
export const SectionHeader = (props: SectionHeaderProps) => {
  const subtitle = props.subtitle;
  if (props.gradient) {
    return (
      <div className={props?.className}>
        <GradientText variant={props.gradient}>
          <h2 className={cx(styles.title)}>
            {"title" in props ? props.title : props.children}
          </h2>
        </GradientText>
        {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
      </div>
    );
  }
  return (
    <>
      <h2 className={cx(styles.title)}>
        {"title" in props ? props.title : props.children}
      </h2>
      {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
    </>
  );
};
