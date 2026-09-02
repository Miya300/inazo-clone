import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nusnavi.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://nusnavi.vercel.app/risyu-support1",
      lastModified: new Date(),
    },
    {
      url: "https://nusnavi.vercel.app/risyu-support1/kyoyo-theory",
      lastModified: new Date(),
    },
    {
      url: "https://nusnavi.vercel.app/risyu-support1/kyoyo-practice",
      lastModified: new Date(),
    },
  ];
}
