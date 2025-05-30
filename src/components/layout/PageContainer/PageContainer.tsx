import { ReactNode } from "react";

import styles from "./PageContainer.module.scss";
import { cx } from "@/lib/utils/cx";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  sitePadding?: boolean;
  as?: "div" | "main" | "section" | "ul";
  index?: number;
};

export const PageContainer = ({
  children,
  as = "div",
  className,
  sitePadding = true,
  index = 0,
}: PageContainerProps) => {
  const Component = as;
  return (
    <Component
      className={cx(
        styles.pageContainer,
        className,
        sitePadding && styles.sitePadding,
      )}
      style={{ zIndex: index }}
    >
      {children}
    </Component>
  );
};
