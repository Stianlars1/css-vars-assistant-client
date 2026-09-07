import type { Metadata } from "next";
import { APP_NAME } from "./config";

export function siteMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const socialTitle = title === APP_NAME ? title : `${title} | ${APP_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: APP_NAME,
      title: socialTitle,
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@stianlarsen_",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
