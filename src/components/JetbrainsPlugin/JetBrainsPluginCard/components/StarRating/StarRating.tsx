// src/components/JetBrainsPluginCard/components/StarRating/StarRating.tsx
import styles from "./StarRating.module.scss";

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  // Normalize the rating to a scale of 0-5
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <span className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercent =
          Math.max(Math.min(normalizedRating - (star - 1), 1), 0) * 100;

        return (
          <span key={star} className={styles.starWrapper}>
            <span className={styles.starGroup}>
              <svg viewBox="0 0 24 24" className={styles.starBackground}>
                <path d="M7.716 14.856L5.64 21.323a.526.526 0 00.808.586L12 17.94l5.552 3.969a.526.526 0 00.808-.586l-2.076-6.467 5.501-4.048a.525.525 0 00-.31-.946l-6.821-.037-2.155-6.457a.527.527 0 00-.999 0L9.346 9.825l-6.822.037a.524.524 0 00-.31.946l5.502 4.048z"></path>
              </svg>
              <span
                className={styles.coverClip}
                style={{ width: `${fillPercent}%` }}
              >
                <svg viewBox="0 0 24 24" className={styles.starCover}>
                  <path d="M7.716 14.856L5.64 21.323a.526.526 0 00.808.586L12 17.94l5.552 3.969a.526.526 0 00.808-.586l-2.076-6.467 5.501-4.048a.525.525 0 00-.31-.946l-6.821-.037-2.155-6.457a.527.527 0 00-.999 0L9.346 9.825l-6.822.037a.524.524 0 00-.31.946l5.502 4.048z"></path>
                </svg>
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
