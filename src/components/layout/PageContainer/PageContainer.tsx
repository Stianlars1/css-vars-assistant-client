import { ReactNode } from "react";

import styles from "./PageContainer.module.scss";
import { cx } from "@/utils/cx";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  sitePadding?: boolean;
  as?: "div" | "main" | "section" | "ul";
};

export const PageContainer = ({
  children,
  as = "div",
  className,
  sitePadding = true,
}: PageContainerProps) => {
  const Component = as;
  return (
    <Component
      className={cx(
        styles.pageContainer,
        className,
        sitePadding && styles.sitePadding,
      )}
    >
      {children}
    </Component>
  );
};
