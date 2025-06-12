"use client";

import Link from "next/link";
import { cx } from "@/lib/utils/cx";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.scss";
import { ReactNode } from "react";

export const NavLink = ({
  className,
  route,
  children,
}: {
  className?: string;
  route: string;
  children: ReactNode;
}) => {
  const pathName = usePathname();
  return (
    <Link
      href={route}
      className={cx(pathName === route && styles.active, className)}
    >
      {children}
    </Link>
  );
};
