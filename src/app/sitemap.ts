import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kerumbeathletics.co.ke";
  const lastModified = new Date();

  const routes = [
    { path: "",                  priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about",             priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/what-we-do",        priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/where-we-operate",  priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/stories",           priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/gallery",           priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/donate",            priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact",           priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
