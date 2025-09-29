import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://chevalierlawllc.com/", changeFrequency: "weekly", priority: 1 },
    { url: "https://chevalierlawllc.com/about", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://chevalierlawllc.com/people", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://chevalierlawllc.com/practice-areas", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://chevalierlawllc.com/insights", changeFrequency: "weekly", priority: 0.6 },
    { url: "https://chevalierlawllc.com/contact", changeFrequency: "yearly", priority: 0.3 },
  ];
}