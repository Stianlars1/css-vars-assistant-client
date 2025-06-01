// components/sections/heroSection/v1/ServerPreview.tsx  (SERVER component)
import Image from "next/image";
import styles from "./Interactive3DPreview.module.scss";

export default function ServerPreview(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
}) {
  return (
    <div className={styles.previewWrapper}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        quality={props.quality}
        priority
        fetchPriority="high"
        placeholder="empty"
        style={{
          transform: "rotateX(25deg) rotateY(-15deg) rotateZ(5deg)",
          containIntrinsicSize: `${props.width}px ${props.height}px`,
        }}
        className={`${styles.preview} ${styles.active}`}
      />
    </div>
  );
}
