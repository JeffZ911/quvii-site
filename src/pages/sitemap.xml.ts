import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Quvii sitemap — apex-served (no /blog/ prefix). Lists static pages
// + every published article across blog/learn/reviews/support
// collections. Excludes qa_score < 6.0 (matches noindex policy).

const SITE = "https://quvii.com";

const STATIC_PATHS = [
  "/",
  "/blog/",
  "/learn/",
  "/support/",
  "/about/",
  "/editorial-policy/",
  "/affiliate-disclosure/",
  "/privacy/",
  "/terms/",
];

const NOINDEX_BELOW = 6.0;

type AnyEntry = {
  slug: string;
  data: {
    qa_score?: number;
    published_at?: string;
    published_url?: string;
  };
};

export const GET: APIRoute = async () => {
  const [blog, learn, support] = await Promise.all([
    getCollection("blog"),
    getCollection("learn"),
    getCollection("support"),
  ]);

  const dynamic: { url: string; lastmod?: string }[] = [];
  const push = (prefix: string, e: AnyEntry) => {
    if (typeof e.data.qa_score === "number" && e.data.qa_score < NOINDEX_BELOW) return;
    const url = e.data.published_url || `/${prefix}/${e.slug}/`;
    dynamic.push({ url, lastmod: e.data.published_at });
  };
  for (const e of blog)    push("blog",    e as AnyEntry);
  for (const e of learn)   push("learn",   e as AnyEntry);
  for (const e of support) push("support", e as AnyEntry);

  const today = new Date().toISOString().slice(0, 10);
  const all = [
    ...STATIC_PATHS.map((p) => ({ url: p, lastmod: today })),
    ...dynamic.map((d) => ({ url: d.url, lastmod: (d.lastmod || today).slice(0, 10) })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    all
      .map(
        (e) =>
          `  <url><loc>${SITE}${e.url}</loc><lastmod>${e.lastmod}</lastmod></url>`
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
