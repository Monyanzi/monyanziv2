import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://mosesnyanzi.co.za";
const ARTICLES_SOURCE_PATH = path.join("src", "data", "articles.ts");
const SITEMAP_OUTPUT_PATH = path.join("public", "sitemap.xml");

const readArticleSlugs = () => {
  const source = fs.readFileSync(ARTICLES_SOURCE_PATH, "utf8");
  const slugMatches = [...source.matchAll(/id:\s*"([^"]+)"/g)];
  const slugs = slugMatches.map((match) => match[1].trim()).filter(Boolean);
  return [...new Set(slugs)];
};

const buildSitemap = (slugs) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE_URL}/`, changefreq: "monthly", priority: "1.0" },
    { loc: `${SITE_URL}/insights`, changefreq: "weekly", priority: "0.8" },
    ...slugs.map((slug) => ({
      loc: `${SITE_URL}/insights/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  const rows = urls
    .map(
      (url) => [
        "  <url>",
        `    <loc>${url.loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${url.changefreq}</changefreq>`,
        `    <priority>${url.priority}</priority>`,
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
};

const slugs = readArticleSlugs();
if (!slugs.length) {
  throw new Error("No article slugs found in src/data/articles.ts");
}

const sitemapXml = buildSitemap(slugs);
fs.writeFileSync(SITEMAP_OUTPUT_PATH, sitemapXml, "utf8");
console.log(`Generated ${SITEMAP_OUTPUT_PATH} with ${slugs.length + 2} URLs.`);
