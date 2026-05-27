// Static-time related-article recommendation. Runs at Astro build time;
// no DB roundtrip, no runtime cost.
//
// Algorithm (score-based):
//   +6  same article_type
//   +5  shared character name (matched against a curated character list)
//   +2  shared significant word (>4 chars, not in stopwords)
//   The current article is always excluded; results capped at `limit`.
//
// Inputs are CollectionEntry-shaped but we keep the type loose so we can
// mix entries across the `guides`, `boss`, `characters`, `faq-source`
// collections without fighting Astro's generic types.

interface AnyEntry {
  slug: string;
  collection: string;
  data: {
    title: string;
    article_type: string;
    hero_image?: string;
    qa_score?: number;
    word_count?: number;
    published_at?: string;
    [k: string]: any;
  };
  body?: string;
}

export interface RelatedCard {
  href: string;
  title: string;
  articleType: string;
  heroImage?: string;
  qaScore?: number;
  wordCount?: number;
  publishedAt?: string;
  _score: number;
}

// Map collection name → URL prefix for hrefs. Mirrors PATH_BY_TYPE in
// traffic-ops-core/src/agents/publish.py.
const HREF_PREFIX: Record<string, string> = {
  guides: "/guides",
  boss: "/boss",
  characters: "/characters",
  "faq-source": "/faq#",
  "tier-list-source": "/tier-list#editorial-",
};

// Character names we care about for keyword matching. Loaded from
// the characters collection at runtime — this list is just a fallback.
const STOPWORDS = new Set([
  "the","and","for","with","this","that","from","your","you","are","but","not","all",
  "any","can","has","have","had","will","would","could","should","what","when","where",
  "which","who","why","how","then","than","there","their","them","they","into","over",
  "more","most","some","such","also","just","like","each","other","best","top","new",
  "neverness","everness","guide","build","character","characters","tier","boss","reroll",
  "ntecodex","nte","article","articles","content","game","games","star","stars","level",
]);

function tokenize(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 4 && !STOPWORDS.has(w))
  );
}

function hrefFor(entry: AnyEntry): string {
  // Try entry.data.published_url first (publish-agent writes it).
  if (entry.data.published_url) {
    const u: string = entry.data.published_url;
    return u.endsWith("/") ? u : u + "/";
  }
  const prefix = HREF_PREFIX[entry.collection] || "/";
  return prefix + "/" + entry.slug + "/";
}

export function findRelated(
  current: AnyEntry,
  pool: AnyEntry[],
  characterNames: string[],
  limit = 4
): RelatedCard[] {
  const curTokens = tokenize(current.data.title + " " + (current.body || ""));
  const lowerCharNames = characterNames.map((n) => n.toLowerCase());
  const curChars = lowerCharNames.filter((n) =>
    (current.data.title + " " + (current.body || "")).toLowerCase().includes(n)
  );

  const scored: RelatedCard[] = [];
  for (const e of pool) {
    if (e.collection === current.collection && e.slug === current.slug) continue;
    let score = 0;

    if (e.data.article_type === current.data.article_type) score += 6;

    const eText = (e.data.title + " " + (e.body || "")).toLowerCase();
    for (const c of curChars) {
      if (eText.includes(c)) {
        score += 5;
        break; // one character match per article
      }
    }

    const eTokens = tokenize(e.data.title + " " + (e.body || ""));
    let shared = 0;
    for (const t of curTokens) if (eTokens.has(t)) shared++;
    score += Math.min(shared, 4) * 2; // cap keyword bonus

    if (score <= 0) continue;
    scored.push({
      href: hrefFor(e),
      title: e.data.title,
      articleType: e.data.article_type,
      heroImage: e.data.hero_image,
      qaScore: e.data.qa_score,
      wordCount: e.data.word_count,
      publishedAt: e.data.published_at,
      _score: score,
    });
  }

  scored.sort((a, b) => b._score - a._score);
  return scored.slice(0, limit);
}
