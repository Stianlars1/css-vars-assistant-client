// src/components/seo/HiddenSeoContent/HiddenSeoContent.tsx
import styles from "./HiddenSeoContent.module.scss";

interface HiddenSeoContentProps {
  pluginStats?: {
    downloads: number;
    rating: number;
    name: string;
    description: string;
  } | null;
}

export const HiddenSeoContent = ({ pluginStats }: HiddenSeoContentProps) => {
  return (
    <section className={styles.seoContent}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          CSS Variables Assistant Plugin for JetBrains IDEs
        </h2>
        <p className={styles.description}>
          CSS Variables Assistant is the most advanced CSS custom properties
          plugin for IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, and all
          JetBrains IDEs. Get intelligent autocomplete for var() functions,
          real-time documentation with color swatches, and advanced @import
          resolution for CSS, SCSS, SASS, and LESS files.
        </p>

        <h3 className={styles.sectionTitle}>
          Key Features of CSS Variables Assistant
        </h3>
        <ul className={styles.featuresList}>
          <li className={styles.feature}>
            Smart autocomplete inside var(--…) with live previews
          </li>
          <li className={styles.feature}>
            Quick documentation (Ctrl+Q) showing values, descriptions, and color
            swatches
          </li>
          <li className={styles.feature}>
            JSDoc-style comment support with @name, @description, and @example
            tags
          </li>
          <li className={styles.feature}>
            Advanced @import resolution with configurable scope and depth
          </li>
          <li className={styles.feature}>
            Multi-preprocessor support for CSS, SCSS, SASS, and LESS
          </li>
          <li className={styles.feature}>
            Works in CSS, SCSS, SASS, LESS, JavaScript, TypeScript, JSX, and TSX
            files
          </li>
        </ul>

        <h3 className={styles.sectionTitle}>Supported JetBrains IDEs</h3>
        <ul className={styles.idesList}>
          <li className={styles.ide}>
            <strong className={styles.ideName}>
              IntelliJ IDEA Ultimate and Community Edition
            </strong>
            <span className={styles.ideDescription}>
              Java IDE with CSS support
            </span>
          </li>
          <li className={styles.ide}>
            <strong className={styles.ideName}>WebStorm</strong>
            <span className={styles.ideDescription}>
              The smartest JavaScript IDE with advanced CSS features
            </span>
          </li>
          <li className={styles.ide}>
            <strong className={styles.ideName}>
              PyCharm Professional and Community Edition
            </strong>
            <span className={styles.ideDescription}>
              Python IDE with web development
            </span>
          </li>
          <li className={styles.ide}>
            <strong className={styles.ideName}>PhpStorm</strong>
            <span className={styles.ideDescription}>
              Lightning-smart PHP IDE with CSS and SCSS support
            </span>
          </li>
          <li className={styles.ide}>
            <strong className={styles.ideName}>RubyMine</strong>
            <span className={styles.ideDescription}>
              The most intelligent Ruby IDE with web development tools
            </span>
          </li>
          <li className={styles.ide}>
            <strong className={styles.ideName}>CLion</strong>
            <span className={styles.ideDescription}>
              Smart cross-platform IDE for C and C++ with CSS support
            </span>
          </li>
          <li className={styles.ide}>
            <strong className={styles.ideName}>GoLand</strong>
            <span className={styles.ideDescription}>
              Cross-platform IDE built for Go with web development features
            </span>
          </li>
        </ul>

        <h3 className={styles.sectionTitle}>
          CSS Preprocessor and Framework Support
        </h3>
        <p className={styles.description}>
          Works seamlessly with all major CSS preprocessors including SCSS
          variables, SASS mixins, LESS variables, and native CSS custom
          properties. Advanced @import resolution handles node_modules
          dependencies and scoped packages. Perfect for modern web development
          workflows with React, Vue, Angular, and other frameworks.
        </p>

        <h3 className={styles.sectionTitle}>Installation and Download</h3>
        <p className={styles.description}>
          Download CSS Variables Assistant from the official JetBrains
          Marketplace. The plugin has {pluginStats?.downloads || "100+"}{" "}
          downloads and maintains a {pluginStats?.rating || "4.0"} star rating.
          Installation takes less than 2 minutes through your IDE&apos;s plugin
          marketplace.
        </p>

        <div className={styles.keywordCloud}>
          <span className={styles.keyword}>CSS Variables Assistant</span>
          <span className={styles.keyword}>CSS custom properties</span>
          <span className={styles.keyword}>IntelliJ IDEA plugin</span>
          <span className={styles.keyword}>WebStorm plugin</span>
          <span className={styles.keyword}>JetBrains CSS plugin</span>
          <span className={styles.keyword}>CSS autocomplete</span>
          <span className={styles.keyword}>CSS variables intellisense</span>
          <span className={styles.keyword}>SCSS variables plugin</span>
          <span className={styles.keyword}>CSS var() autocomplete</span>
          <span className={styles.keyword}>CSS documentation plugin</span>
          <span className={styles.keyword}>SASS variables support</span>
          <span className={styles.keyword}>LESS variables IDE</span>
          <span className={styles.keyword}>CSS @import resolution</span>
          <span className={styles.keyword}>JetBrains IDE CSS tools</span>
          <span className={styles.keyword}>CSS development plugin</span>
        </div>
      </div>
    </section>
  );
};
