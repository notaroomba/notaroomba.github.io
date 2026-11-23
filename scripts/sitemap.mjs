// Writes docs/sitemap.xml and docs/robots.txt after `vite build`, with one
// entry per blog post in src/posts so new posts are picked up automatically.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const SITE = "https://notaroomba.dev";
const posts = readdirSync("src/posts")
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = readFileSync(`src/posts/${f}`, "utf8");
    const date = raw.match(/^date:\s*(.+)$/m)?.[1].trim();
    return { path: `/blog/${f.replace(/\.md$/, "")}`, date };
  });
const pages = [{ path: "/" }, { path: "/blog" }, { path: "/gallery" }, { path: "/simpleflightcontroller" }, ...posts];

writeFileSync(
  "docs/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages
      .map((p) => `  <url><loc>${SITE}${p.path}</loc>${p.date ? `<lastmod>${p.date}</lastmod>` : ""}</url>`)
      .join("\n") +
    "\n</urlset>\n",
);
writeFileSync("docs/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`sitemap: ${pages.length} urls`);
