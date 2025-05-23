import { MetadataRoute } from "next";
import { API_ARTICLES } from "@/utils/urls";
import { DOMAIN_FULL_URL } from "@/utils/config";
import { ArticleResponse } from "@/types/article/ArticleResponse";

async function getAllArticles(): Promise<ArticleResponse[]> {
  const articles = await fetch(API_ARTICLES, { method: "GET" });

  const parsedArticles = (await articles.json()) as ArticleResponse[];

  if (!articles.ok || parsedArticles.length === 0) {
    return [];
  }

  return parsedArticles;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = ["/", "/nyheter"].map(
    (route) => ({
      url: `${DOMAIN_FULL_URL}${route}`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: "daily",
    }),
  );

  const dynamicRoutes: MetadataRoute.Sitemap = (await getAllArticles()).map(
    (article) => ({
      name: article.title,
      url: `${DOMAIN_FULL_URL}/${article.slug}`,
      lastModified: new Date(article.updatedAt).toISOString(),
      priority: 0.8,
      changeFrequency: "monthly",
    }),
  );

  console.log("Dynamic routes: ", dynamicRoutes);

  return [...staticRoutes, ...dynamicRoutes];
}
