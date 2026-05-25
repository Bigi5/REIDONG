import { useEffect } from "react";
import { SEO_CONFIG } from "@/constants/seo";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
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

export function SEO({ title, description, path = "/", image = SEO_CONFIG.defaultImage }: SEOProps) {
  useEffect(() => {
    const canonical = `${SEO_CONFIG.siteUrl}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    ensureCanonical(canonical);
  }, [description, image, path, title]);

  return null;
}
