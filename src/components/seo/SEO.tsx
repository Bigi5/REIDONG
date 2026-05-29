import { useEffect } from "react";
import { SEO_CONFIG } from "@/constants/seo";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
}

function ensureCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

export function Seo({ title, description, path = "/", image = SEO_CONFIG.defaultImage, keywords }: SEOProps) {
  useEffect(() => {
    const canonical = `${SEO_CONFIG.siteUrl}${path}`;
    const resolvedKeywords = keywords ?? "";

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", SEO_CONFIG.siteName);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    setMeta('meta[name="theme-color"]', "content", SEO_CONFIG.themeColor);
    if (resolvedKeywords) {
      setMeta('meta[name="keywords"]', "content", resolvedKeywords);
    }
    ensureCanonical(canonical);
  }, [description, image, path, title, keywords]);

  return null;
}
