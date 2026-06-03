import { defineCollection, z } from "astro:content";

// Quvii content schema — security camera D2C brand.
//
// Architecture maps SEO pillars to directories:
//   /blog/buying-guides/    "best X for Y" affiliate funnel        → blog (article_type=buying_guide)
//   /blog/comparisons/      "Eufy vs Ring" head-to-heads           → blog (article_type=comparison)
//   /blog/install-guides/   "how to install X without drilling"    → blog (article_type=install_guide)
//   /blog/troubleshooting/  "fix X" — own buyer + steal competitor → blog (article_type=troubleshoot)
//   /blog/news/             industry / product news                → blog (article_type=news)
//   /learn/                 pillar deep-dives (security 101, glossary, privacy)
//   /reviews/               product reviews (Quvii own + competitor)
//   /support/               post-purchase setup + troubleshooting docs

const sourceSchema = z.union([
  z.string(),
  z.object({ uri: z.string(), title: z.string().optional() }).passthrough(),
]);

const baseFrontmatter = {
  title: z.string(),
  // Article taxonomy — drives outline-prompt routing in the writer pipeline
  article_type: z.string(),
  // Camera category — niche-specific (analogous to ntecodex's `game`)
  camera_category: z.string().optional(),    // indoor | outdoor | doorbell | floodlight | pet | nvr | wireless
  search_intent: z.string().optional(),      // informational | commercial | transactional | navigational
  qa_score: z.number().optional(),
  word_count: z.number().optional(),
  published_at: z.string().optional(),
  published_url: z.string().optional(),
  sources: z.array(sourceSchema).optional(),
  hero_image: z.string().optional(),
  inline_images: z.array(z.string()).optional(),
  inline_image_sections: z.array(z.string()).optional(),
  // Top-of-article answer callout (1-2 sentences, mobile readers see
  // the answer before scrolling)
  quick_answer: z.string().optional(),
  // FTC affiliate disclosure banner (when article body contains affiliate links)
  affiliate: z.boolean().optional(),
  // Structured product list for buying-guide / comparison roundups
  products: z
    .array(
      z.object({
        name: z.string(),
        asin: z.string().optional(),
        image: z.string().optional(),
        price_usd: z.number().optional(),
        rating: z.number().optional(),
        review_count: z.number().optional(),
        pros: z.array(z.string()).optional(),
        cons: z.array(z.string()).optional(),
        best_for: z.string().optional(),
        affiliate_url: z.string().optional(),
        verdict: z.string().optional(),
      })
    )
    .optional(),
};

// One collection per top-level section. Article render pages map collections
// to URL prefixes (e.g. blog → /blog/<slug>/, learn → /learn/<slug>/).
const blog = defineCollection({ type: "content", schema: z.object(baseFrontmatter) });
const learn = defineCollection({ type: "content", schema: z.object(baseFrontmatter) });
const support = defineCollection({ type: "content", schema: z.object(baseFrontmatter) });

export const collections = {
  blog,
  learn,
  support,
};
