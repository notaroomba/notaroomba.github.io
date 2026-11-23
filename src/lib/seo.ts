import { useEffect } from "react";

const SITE = "https://notaroomba.dev";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

// Sets the page title, description, canonical URL, social previews and an
// optional page-specific JSON-LD block. Google renders the JS, so these are
// read even though the site is a single page app.
export function useSeo(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object;
}) {
  const { title, description, path, image, jsonLd } = opts;
  useEffect(() => {
    const url = SITE + path;
    const img = image ? (image.startsWith("http") ? image : SITE + image) : undefined;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    if (img) {
      setMeta("property", "og:image", img);
      setMeta("name", "twitter:image", img);
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let script: HTMLScriptElement | undefined;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.page = "1";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => script?.remove();
  }, [title, description, path, image, jsonLd]);
}

export const PERSON_ID = SITE + "/#person";
