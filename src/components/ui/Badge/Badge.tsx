import styles from "./Badge.module.scss";

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.badge}>{children}</div>;
};
