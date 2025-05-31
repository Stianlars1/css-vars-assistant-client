import { Suspense } from "react";
import ServerPreview from "./ServerPreview";
import { Interactive3DPreview } from "@/components/sections/heroSection/v1/Interactive3DPreview";

export default function ClientHero() {
  const images = [
    "/static/completions/completions_non-color.png",
    "/static/completions/completions_color.png", // <-- the “hero” frame
    "/static/documentation/documentation_non-color.png",
  ];

  return (
    <Suspense
      fallback={
        <ServerPreview
          src={images[1]} // first thing the user sees
          alt="Product screenshot"
          width={700}
          height={700}
        />
      }
    >
      <Interactive3DPreview
        srcs={images}
        alt="Product gallery"
        width={700}
        height={700}
        quality={75}
      />
    </Suspense>
  );
}
