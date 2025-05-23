// src/components/JetBrainsPluginCard/components/PluginCardHeader/PluginCardHeader.tsx
import styles from './PluginCardHeader.module.scss'
import StarRating from '../StarRating/StarRating'

interface PluginCardHeaderProps {
  name: string
  icon: string
  rating: number
}

export default function PluginCardHeader({
                                           name,
                                           icon,
                                           rating
                                         }: PluginCardHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img src={icon} alt="Plugin icon" />
        </div>
        <div className={styles.name}>
          <h3 className={styles.nameHeading}>{name}</h3>
          <div className={styles.ratingContainer}>
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    </div>
  )
}