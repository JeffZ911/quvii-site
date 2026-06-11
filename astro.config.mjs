import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// Quvii — D2C security camera brand site (US market). Phase 0 = Astro
// owns the apex domain entirely; Phase 1+ Shopify takes over /products/
// + /cart + /checkout via a Cloudflare Worker reverse proxy. Until
// then all paths resolve here.

const SITE_HOST = "quvii.com";
function rehypeExternalLinks() {
  const walk = (node) => {
    if (
      node.tagName === "a" &&
      node.properties &&
      typeof node.properties.href === "string"
    ) {
      const href = node.properties.href;
      if (/^https?:\/\//i.test(href) && !href.includes(SITE_HOST)) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

// Strip duplicate H1 from markdown bodies (ArticleLayout renders <h1>
// from frontmatter title; a leading body `# Title` would duplicate it).
function remarkStripFirstH1() {
  return (tree) => {
    if (!tree || !Array.isArray(tree.children)) return;
    const idx = tree.children.findIndex(
      (n) => n && n.type === "heading" && n.depth === 1
    );
    if (idx >= 0) tree.children.splice(idx, 1);
  };
}


// Dependency-free rehype plugin: native lazy-loading for article-body images.
// (Hero images are template-level with fetchpriority=high; body images are
// below the fold by definition → lazy + async decode improves LCP/CWV.)
function rehypeLazyImages() {
  function walk(node) {
    if (node.type === "element" && node.tagName === "img") {
      node.properties = node.properties || {};
      if (!node.properties.loading) node.properties.loading = "lazy";
      if (!node.properties.decoding) node.properties.decoding = "async";
    }
    (node.children || []).forEach(walk);
  }
  return (tree) => walk(tree);
}

export default defineConfig({
  site: "https://quvii.com",
  // No `base` prefix — Quvii owns the apex. Pre-Shopify the entire
  // domain is Astro; post-Shopify a CF Worker routes only /blog + /learn
  // + /reviews + /support + /about + legal pages here, Shopify gets
  // the rest. Astro stays at apex throughout.
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkStripFirstH1],
    rehypePlugins: [rehypeExternalLinks, rehypeLazyImages],
  },
  build: { inlineStylesheets: "auto" },
  vite: { build: { cssCodeSplit: true } },
});
