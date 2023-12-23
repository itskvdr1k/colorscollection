import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://colorscollection.vercel.app",
            lastModified: new Date()
        }
    ]
}