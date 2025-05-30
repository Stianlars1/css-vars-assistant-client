import styles from "./featuresSection.module.scss";
import { featuresSectionData } from "@/components/sections/featuresSection/features";
import { getIconForFeature } from "@/components/sections/featuresSection/icon";
import { SectionHeader } from "@/components/sections/SectionHeader/SectionHeader";

export const FeaturesSection = () => {
  return (
    <section>
      <SectionHeader
        title={"Features"}
        gradient={"gradients.classic.cyberPunk"}
      />
      <div className={styles.features}>
        {featuresSectionData.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                {getIconForFeature(feature.icon)}
              </div>
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
