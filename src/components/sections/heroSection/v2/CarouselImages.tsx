import Image from "next/image";
import styles from "./Interactive3DPreview.module.scss";

interface CarouselImagesProps {
  srcs: string[];
  alt: string;
  quality: number;
  activeIndex: number;
  isHovered: boolean;
  transform: string;
  skipFirst?: boolean;
}

export default function CarouselImages({
  srcs,
  alt,
  quality,
  activeIndex,
  isHovered,
  transform,
  skipFirst = false,
}: CarouselImagesProps) {
  // If we're skipping the first image (because it's server rendered), adjust the array
  const imagesToRender = skipFirst ? srcs.slice(1) : srcs;
  const adjustedActiveIndex =
    skipFirst && activeIndex > 0 ? activeIndex - 1 : activeIndex;

  return (
    <>
      {imagesToRender.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width={2430}
          height={1404}
          quality={quality}
          priority={idx === 0} // Only prioritize the first carousel image
          loading={idx === 0 ? "eager" : "lazy"} // Lazy load non-critical images
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 90vw, 700px"
          className={`
            ${styles.preview}
            ${idx === adjustedActiveIndex ? styles.active : styles.inactive}
            ${isHovered ? styles.interactive : ""}
          `}
          style={{ transform }}
        />
      ))}
    </>
  );
}
