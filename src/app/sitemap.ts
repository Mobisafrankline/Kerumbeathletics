import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kerumbeathletic.com";

  // Use real fixed dates so Googlebot sees accurate "last updated" signals
  const today = new Date("2026-11-21");
  const thisMonth = new Date("2026-11-20");
  const lastMonth = new Date("2026-11-15");

  return [
    // Core pages — highest priority
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/donate`,
      lastModified: thisMonth,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: thisMonth,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/what-we-do`,
      lastModified: thisMonth,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/where-we-operate`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
