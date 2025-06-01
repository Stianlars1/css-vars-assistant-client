// src/components/JetBrainsPluginCard/components/PluginCardHeader/PluginCardHeader.tsx
import styles from "./PluginCardHeader.module.scss";
import StarRating from "../StarRating/StarRating";
import Image from "next/image";

interface PluginCardHeaderProps {
  name: string;
  rating: number;
}

export default function PluginCardHeader({
  name,
  rating,
}: PluginCardHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Image
            width={48}
            height={48}
            src={"/logo_60.svg"}
            alt="Plugin icon"
            aria-hidden={true}
          />
        </div>
        <div className={styles.name}>
          <h3 className={styles.nameHeading}>{name}</h3>
          <div className={styles.ratingContainer}>
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    </div>
  );
}
