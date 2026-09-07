import DocumentationPopup from "./jetbrains/DocumentationPopup";
import ResolutionDemo from "./resolution/ResolutionDemo";
import styles from "./Home.module.scss";

export default function ContextFeatures() {
  return (
    <section
      className={`site-container ${styles.features}`}
      id="features"
      aria-labelledby="features-title"
    >
      <div className={styles.chapterHeading}>
        <div>
          <span className="eyebrow">A name is just the beginning</span>
          <h2 id="features-title">
            See the whole picture.
            <br />
            <span>Stay in the same file.</span>
          </h2>
        </div>
        <p>
          A variable can live in another file, change with a theme, or point to
          another token. Bring that context to where you work.
        </p>
      </div>
      <article className={styles.themeFeature}>
        <div className={styles.nativeFeature}>
          <DocumentationPopup />
        </div>
        <div className={styles.featureCopy}>
          <span className="eyebrow">Themes & documentation</span>
          <h3>Same token. Different contexts.</h3>
          <p>
            The real popup shows Default and Dark values with swatches,
            declaration lines, type and contrast information.
          </p>
        </div>
      </article>
      <ResolutionDemo />
      <p className={styles.exampleNote}>
        Interactive UI examples based on CSS Variables Assistant 1.9.4 in
        IntelliJ IDEA. Your values come from your project.
      </p>
    </section>
  );
}
