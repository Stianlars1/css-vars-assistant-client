import styles from "./styles/TypographyWrapper.module.scss";
import { cx } from "@/lib/utils/cx";

export const TypographyWrapper = ({ children, className, props }: any) => (
  <div {...props} className={cx(styles.typographyWrapper, className)}>
    {children}
  </div>
);
