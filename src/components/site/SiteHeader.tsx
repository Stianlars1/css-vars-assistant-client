"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import InstallLink from "./InstallLink";
import styles from "./SiteChrome.module.scss";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/changelog", label: "Changelog" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className={`site-container ${styles.headerInner}`}>
        <Link
          href="/"
          className={styles.brand}
          onClick={() => setOpen(false)}
          aria-label="CSS Variables Assistant home"
        >
          <Image src="/logo.svg" width={36} height={36} alt="" priority />
          <code>CSS Variables Assistant</code>
        </Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <InstallLink compact />
        </nav>
        <button
          className={styles.menuButton}
          ref={toggle}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={styles.mobileNav}
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <InstallLink />
      </nav>
      <span className={styles.progress} aria-hidden="true" />
    </header>
  );
}
