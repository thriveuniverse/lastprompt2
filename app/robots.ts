import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/", "/verify", "/unsubscribe", "/delete-data"],
      },
    ],
    sitemap: "https://last-prompt.com/sitemap.xml",
  };
}
