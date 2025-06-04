"use client";

import { ROUTE_CHANGELOG } from "@/lib/routes";
import Link from "next/link";
import { cx } from "@/lib/utils/cx";
import { usePathname } from "next/navigation";
import styles from "./changelogLink.module.scss";

export const ChangelogLink = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  return (
    <Link
      href={ROUTE_CHANGELOG}
      className={cx(pathName === ROUTE_CHANGELOG && styles.active, className)}
    >
      Changelog
    </Link>
  );
};
