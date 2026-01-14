// app/sitemap.ts
import { MetadataRoute } from "next";

import products from "./data/products.json";
import categories from "./data/categories.json";

const BASE_URL = "https://larixgoldanddiamonds.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ---------- Static Pages ---------- */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      priority: 0.8,
    },
  ];

  /* ---------- Category Pages ---------- */
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.id}`,
    lastModified: now,
    priority: 0.9,
  }));

  /* ---------- Product Pages ---------- */
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/product/${product.slug}`,
    lastModified: product.createdAt
      ? new Date(product.createdAt)
      : now,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
