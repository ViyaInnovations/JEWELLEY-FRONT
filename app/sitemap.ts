import { MetadataRoute } from "next";

import products from "@/data/products.json";
import categories from "@/data/categories.json";
import jewelleryTypes from "@/data/jewellery-types.json";

const BASE_URL = "https://www.yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  const jewelleryTypePages: MetadataRoute.Sitemap = jewelleryTypes.map((type) => ({
    url: `${BASE_URL}/type/${type.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/product/${product.slug}`,
    lastModified: product.createdAt
      ? new Date(product.createdAt)
      : new Date(),
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...jewelleryTypePages,
    ...productPages,
  ];
}
