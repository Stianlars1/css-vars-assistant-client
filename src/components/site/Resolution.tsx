import ResolutionDemo from "./resolution/ResolutionDemo";
import { CURRENT_VERSION } from "@/lib/config";
import styles from "./Sections.module.scss";

export default function Resolution() {
  return (
    <section
      className={`site-container ${styles.section}`}
      id="resolution"
      aria-labelledby="resolution-heading"
    >
      <header className={`section-heading ${styles.resolutionHeading}`}>
        <h2 id="resolution-heading" className="spectrum-text">
          Follow a value home
        </h2>
        <p>
          A token is often an alias of an alias. The plugin follows imports and
          references across files and shows every step, down to the file and
          line where the value is declared.
        </p>
      </header>
      <ResolutionDemo />
      <p className={styles.note}>
        Interactive examples based on CSS Variables Assistant {CURRENT_VERSION}{" "}
        in IntelliJ IDEA. Your values come from your project.
      </p>
    </section>
  );
}
