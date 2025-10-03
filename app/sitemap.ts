import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lokaksema2026.org";
  const routes = ["", "/about", "/summit", "/summit/agenda", "/hackathon", "/sponsorship", "/legacy-impact", "/contact", "/blog", "/sponsors", "/register"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
