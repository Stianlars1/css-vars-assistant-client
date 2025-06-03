import Image from "next/image";
import styles from "./Navbar.module.scss";
import JetBrainsPluginButton from "@/components/JetbrainsPlugin/JetBrainsPluginButton/JetBrainsPluginButton";
import Link from "next/link";
import { ROUTE_ROOT } from "@/lib/routes";

export const Navbar = () => {
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
      <nav>
        <JetBrainsPluginButton
          ariaLabel={"Click to install plugin now from JetBrains Marketplace"}
          variant={"default"}
          buttonText={"Install now"}
        />
      </nav>
    </header>
  );
};
