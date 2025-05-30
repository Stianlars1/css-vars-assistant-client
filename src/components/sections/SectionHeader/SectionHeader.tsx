import styles from "./SectionHeader.module.scss";
import { cx } from "@/lib/utils/cx";
import { GradientVariant } from "@/components/ui/GradientText/gradients";
import { GradientText } from "@/components/ui/GradientText/GradientText";
import { ReactNode } from "react";

type SectionHeaderProps =
  | {
      children: ReactNode;
      gradient?: GradientVariant;
    }
  | {
      title: string;
      gradient?: GradientVariant;
    };
export const SectionHeader = (props: SectionHeaderProps) => {
  if (props.gradient) {
    return (
      <GradientText variant={props.gradient}>
        <h2 className={cx(styles.title)}>
          {"title" in props ? props.title : props.children}
        </h2>
      </GradientText>
    );
  }
  return (
    <h2 className={cx(styles.title)}>
      {"title" in props ? props.title : props.children}
    </h2>
  );
};
