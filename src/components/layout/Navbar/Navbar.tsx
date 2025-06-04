import Image from "next/image";
import styles from "./Navbar.module.scss";
import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import Link from "next/link";
import { ROUTE_ROOT } from "@/lib/routes";
import { ChangelogLink } from "@/components/layout/Navbar/components/changelogLink";

export default async function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href={ROUTE_ROOT} className={styles.logo}>
        <Image
          className={styles.image}
          src={"/logo_60.svg"}
          width={50}
          height={50}
          alt={"Logo of CSS Variables Assistant"}
          aria-hidden={true}
        />
        <code className={styles.name}>CSS Variables Assistant</code>
      </Link>
      <nav className={styles.nav}>
        <ChangelogLink className={styles.link} />
        <JetBrainsPluginButton variant={"default"} buttonText={"Install now"} />
      </nav>
    </header>
  );
}
