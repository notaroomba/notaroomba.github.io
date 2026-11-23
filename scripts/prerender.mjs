// Runs after `vite build`. GitHub Pages only serves static files, so without
// this every route except / is a 404 that redirects into the app, and crawlers
// see an empty <div id="root">. For each route this writes docs/<route>/index.html
// with its own title, description, canonical URL, social tags, JSON-LD and a
// plain-HTML copy of the content (React replaces it when the app loads).
// It also writes sitemap.xml (with images) and robots.txt.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";

const SITE = "https://notaroomba.dev";
const PERSON = { "@type": "Person", "@id": `${SITE}/#person`, name: "Nathan Alspaugh", url: `${SITE}/` };
const template = readFileSync("docs/index.html", "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p) => (p.startsWith("http") ? p : SITE + p);
const url = (path) => SITE + (path.endsWith("/") ? path : path + "/");

// Small markdown to HTML for the post bodies: headings, paragraphs, lists,
// images, links, bold and inline code. Enough for what the posts use.
function md(src) {
  const inline = (t) =>
    esc(t)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  const out = [];
  let list = null;
  const flush = () => {
    if (list) out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`);
    list = null;
  };
  for (const block of src.split(/\n\s*\n/)) {
    const lines = block.trim().split("\n");
    if (!lines[0]) continue;
    if (lines.every((l) => /^\s*[-*] /.test(l))) {
      list = (list || []).concat(lines.map((l) => l.replace(/^\s*[-*] /, "")));
      continue;
    }
    flush();
    const h = lines[0].match(/^(#{1,6}) (.*)/);
    if (h && lines.length === 1) out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
    else if (/^```/.test(lines[0])) out.push(`<pre>${esc(lines.slice(1, -1).join("\n"))}</pre>`);
    else out.push(`<p>${inline(lines.join(" "))}</p>`);
  }
  flush();
  return out.join("\n");
}

function parsePost(file) {
  const raw = readFileSync(`src/posts/${file}`, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const body = m[2];
  const images = [...body.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)].map((x) => ({ alt: x[1], src: x[2] }));
  return { slug: file.replace(/\.md$/, ""), ...meta, body, images };
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*" ?/?>`);
  const tag = `<meta ${attr}="${key}" content="${esc(value)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

// The site-wide graph in index.html marks / as a ProfilePage. Other pages keep
// the Person and WebSite nodes but are not profile pages.
const baseLd = template.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
function siteGraph(isHome) {
  const g = JSON.parse(baseLd[1]);
  if (!isHome) {
    g["@graph"] = g["@graph"].filter((n) => n["@type"] !== "ProfilePage");
    for (const n of g["@graph"]) delete n.mainEntityOfPage;
  }
  return `<script type="application/ld+json">${JSON.stringify(g)}</script>`;
}

function page({ path, title, description, image, type = "website", jsonLd = [], body }) {
  let h = template.replace(baseLd[0], () => siteGraph(path === "/"));
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  h = setMeta(h, "name", "description", description);
  h = h.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url(path)}" />`);
  h = setMeta(h, "property", "og:type", type);
  h = setMeta(h, "property", "og:title", title);
  h = setMeta(h, "property", "og:description", description);
  h = setMeta(h, "property", "og:url", url(path));
  h = setMeta(h, "name", "twitter:title", title);
  h = setMeta(h, "name", "twitter:description", description);
  if (image) {
    h = setMeta(h, "property", "og:image", abs(image));
    h = setMeta(h, "name", "twitter:image", abs(image));
  }
  for (const ld of jsonLd) {
    h = h.replace("</head>", `    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>\n  </head>`);
  }
  h = h.replace('<div id="root"></div>', `<div id="root"><main style="color:#f2f4f3;max-width:48rem;margin:0 auto;padding:6rem 1rem;font-family:Inter,sans-serif">${body}</main></div>`);
  const dir = path === "/" ? "docs" : `docs${path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, h);
}

const crumbs = (...items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(path) })),
});

// ---- data
const gallery = JSON.parse(readFileSync("src/data/gallery.json", "utf8"));
const projects = [...readFileSync("src/components/ProjectSection.tsx", "utf8").matchAll(/name: "([^"]+)",\s*url: "([^"]*)",\s*description:\s*"([^"]+)"/g)].map((m) => ({ name: m[1], url: m[2], description: m[3] }));
const links = [
  ["GitHub", "https://github.com/notaroomba"],
  ["LinkedIn", "https://www.linkedin.com/in/notaroomba"],
  ["YouTube", "https://www.youtube.com/@notaroomba"],
  ["Instagram", "https://www.instagram.com/notaroomba"],
];
const nav = `<nav><a href="/">home</a></nav>`;

// ---- home (rewrites docs/index.html itself)
page({
  path: "/",
  title: "Nathan Alspaugh (NotARoomba)",
  description: template.match(/<meta name="description" content="([^"]*)"/)[1],
  type: "profile",
  body: `${nav}
<h1>Nathan Alspaugh (NotARoomba)</h1>
<p>MIT '30 student. Previously took a gap year to work at Hack Club, before that led Icarus Club. I design PCBs and build hardware and software: modular keyboards, LED controllers, reflow hotplates, dev boards and flight computers.</p>
<h2>Projects</h2>
<ul>${projects.map((p) => `<li><strong>${esc(p.name)}</strong>: ${esc(p.description)}</li>`).join("")}</ul>
<h2>Photos</h2>
${gallery.map((g) => `<img src="${g.src}" alt="${esc(g.alt)}" width="${g.w}" height="${g.h}" loading="lazy" style="max-width:100%;height:auto">`).join("")}
<h2>Contact</h2>
<ul>${links.map(([n, h]) => `<li><a rel="me" href="${h}">${n}</a></li>`).join("")}</ul>`,
});

// ---- flight controller guide
const guide = readFileSync("src/SimpleFlightControllerGuide.md", "utf8");
page({
  path: "/simpleflightcontroller",
  title: "Simple Flight Controller guide | Nathan Alspaugh",
  description: "A step by step guide by Nathan Alspaugh to designing a rocket flight controller PCB from scratch, made for Hack Club Blueprint.",
  image: "/images/sfc.png",
  type: "article",
  jsonLd: [
    { "@context": "https://schema.org", "@type": "TechArticle", headline: "Simple Flight Controller guide", url: url("/simpleflightcontroller"), author: PERSON, image: abs("/images/sfc.png") },
    crumbs(["Home", "/"], ["Simple Flight Controller", "/simpleflightcontroller"]),
  ],
  body: `${nav}${md(guide)}`,
});

// ---- sitemap with images, robots
const today = new Date().toISOString().slice(0, 10);
const entries = [
  { path: "/", lastmod: today, images: [{ src: "/images/nathan-alspaugh.jpg", alt: "Nathan Alspaugh (NotARoomba)" }, ...gallery] },
  { path: "/simpleflightcontroller" },
];
writeFileSync(
  "docs/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (e) =>
      `  <url><loc>${url(e.path)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}${(e.images || [])
        .map((i) => `<image:image><image:loc>${abs(i.src)}</image:loc></image:image>`)
        .join("")}</url>`,
  )
  .join("\n")}
</urlset>
`,
);
writeFileSync("docs/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`prerendered ${entries.length} pages`);
