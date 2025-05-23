import Image from "next/image";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          className={styles.image}
          src={"/logo_60.svg"}
          width={50}
          height={50}
          alt={"Logo of CSS Variables Assistant"}
          aria-hidden={true}
        />
        <code className={styles.name}>CSS Variables Assistant</code>
      </div>
      <nav>
        <button>Download</button>
      </nav>
    </header>
  );
};
