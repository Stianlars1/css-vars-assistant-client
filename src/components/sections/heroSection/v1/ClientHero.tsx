import { Suspense } from "react";
import ServerPreview from "./ServerPreview";
import { Interactive3DPreview } from "@/components/sections/heroSection/v1/Interactive3DPreview";

export default function ClientHero() {
  const images = [
    "/static/completions/completions_non-color.webp",
    "/static/completions/completions_color.webp",
    "/static/documentation/documentation_non-color.webp",
    "/static/documentation/documentation_color.png",
  ];

  return (
    <Suspense
      fallback={
        <ServerPreview
          src={images[0]}
          alt="Product gallery"
          width={827}
          height={523}
          quality={80}
        />
      }
    >
      <Interactive3DPreview
        srcs={images}
        alt="Product gallery"
        width={827}
        height={523}
        quality={80}
      />
    </Suspense>
  );
}
