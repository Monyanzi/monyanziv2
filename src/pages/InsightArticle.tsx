import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import AudioBriefingCard from "@/components/audio/AudioBriefingCard";
import { articles } from "@/data/insights";
import { insightsArticlesBriefing } from "@/data/audioBriefings";
import { useLenis } from "@/components/lenisContext";
import { SITE_URL, SITE_NAME, SOCIAL_IMAGE_URL } from "@/config/site";
import ShareBar from "@/components/ShareBar";

interface ArticleSeoMeta {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  keywords: string[];
  publishedTime?: string;
  modifiedTime?: string;
}

const ARTICLE_SEO: Record<string, ArticleSeoMeta> = {
  "10-ai-agent-implementation-mistakes-checklist": {
    metaTitle: "10 AI Agent Implementation Mistakes Leaders Make: A Practical Checklist | Moses Nyanzi",
    metaDescription:
      "A field-tested checklist to avoid the most expensive AI agent rollout mistakes across scope, data, risk, governance, and adoption.",
    primaryKeyword: "ai agent implementation checklist",
    keywords: [
      "ai agent implementation mistakes",
      "ai rollout checklist",
      "enterprise ai implementation",
      "ai governance checklist",
      "ai change management",
    ],
    publishedTime: "2026-02-15T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "wrong-question-ai-leader": {
    metaTitle: "9 Reasons \"What Can AI Do for Me?\" Is the Wrong Question for Leaders | Moses Nyanzi",
    metaDescription:
      "A practical guide with 9 better questions that turn AI talk into clear ownership and measurable outcomes.",
    primaryKeyword: "wrong ai question for leaders",
    keywords: [
      "what can ai do for me wrong question",
      "ai strategy for leaders",
      "ai transformation questions",
      "leadership ai decisions",
      "ai implementation leadership",
    ],
    publishedTime: "2026-02-14T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "black-mirror-lessons-ai-leaders": {
    metaTitle: "10 Black Mirror AI Lessons Every Business Leader Should Know | Moses Nyanzi",
    metaDescription:
      "A practical watchlist linking 10 Black Mirror episodes to real AI governance, risk, and strategy decisions.",
    primaryKeyword: "black mirror ai lessons for business leaders",
    keywords: [
      "black mirror ai lessons",
      "black mirror for business leaders",
      "ai strategy lessons",
      "ai governance lessons",
      "ai risk leadership",
    ],
    publishedTime: "2026-02-13T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "2026-ai-power-workflow": {
    metaTitle: "3-Step 2026 AI Power Workflow: From Rough Idea to Studio-Ready Content | Moses Nyanzi",
    metaDescription:
      "A practical three-step workflow combining Prompt Optimizer, Deep Research, and NotebookLM for stronger strategic outputs.",
    primaryKeyword: "ai power workflow",
    keywords: [
      "prompt optimizer workflow",
      "deep research workflow",
      "notebooklm workflow",
      "ai content workflow",
      "executive ai workflow",
    ],
    publishedTime: "2026-02-12T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "12-ai-tools-in-my-tech-stack": {
    metaTitle: "12 AI Tools for Productivity in My 2026 Tech Stack | Moses Nyanzi",
    metaDescription:
      "Practical list of 12 AI tools for productivity in 2026, including chatbots, coding agents, and developer platforms I use in real workflows.",
    primaryKeyword: "best ai tools for productivity",
    keywords: [
      "best ai tools for productivity",
      "ai tools 2026",
      "ai workflow tools",
      "ai coding agents",
      "ai tech stack",
    ],
    publishedTime: "2026-02-09T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "the-automation-trap": {
    metaTitle: "12 Signs You're About to Automate the Wrong Thing: The Automation Trap | Moses Nyanzi",
    metaDescription:
      "12 practical warning signs to detect automation misfires early and avoid expensive execution drift.",
    primaryKeyword: "automation trap warning signs",
    keywords: [
      "automation trap",
      "wrong process automation",
      "automation readiness",
      "process automation mistakes",
      "automation strategy",
    ],
    publishedTime: "2026-02-07T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "why-ai-projects-fail": {
    metaTitle: "8 Warning Signs Your AI Project Is Failing | Moses Nyanzi",
    metaDescription:
      "Eight early warning signs that an AI project is drifting and what leaders should fix before value erodes.",
    primaryKeyword: "warning signs ai project is failing",
    keywords: [
      "ai project failure",
      "ai programme warning signs",
      "ai implementation risks",
      "ai governance execution",
      "ai project turnaround",
    ],
    publishedTime: "2026-02-05T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
  "5-signs-always-done-this-way": {
    metaTitle: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\" | Moses Nyanzi",
    metaDescription:
      "Five practical signals that legacy behaviour is blocking execution and strategic change.",
    primaryKeyword: "organisation trapped in old ways",
    keywords: [
      "organisational change signals",
      "legacy process culture",
      "change management leadership",
      "operating model inertia",
      "business transformation blockers",
    ],
    publishedTime: "2026-02-03T09:00:00+02:00",
    modifiedTime: "2026-02-18T09:00:00+02:00",
  },
};

const RELATED_SLUGS_BY_ARTICLE: Record<string, string[]> = {
  "10-ai-agent-implementation-mistakes-checklist": ["2026-ai-power-workflow", "why-ai-projects-fail"],
  "wrong-question-ai-leader": ["black-mirror-lessons-ai-leaders", "why-ai-projects-fail"],
  "black-mirror-lessons-ai-leaders": ["wrong-question-ai-leader", "why-ai-projects-fail"],
  "2026-ai-power-workflow": ["10-ai-agent-implementation-mistakes-checklist", "12-ai-tools-in-my-tech-stack"],
  "12-ai-tools-in-my-tech-stack": ["why-ai-projects-fail", "the-automation-trap"],
  "the-automation-trap": ["10-ai-agent-implementation-mistakes-checklist", "why-ai-projects-fail"],
  "why-ai-projects-fail": ["10-ai-agent-implementation-mistakes-checklist", "the-automation-trap"],
  "5-signs-always-done-this-way": ["wrong-question-ai-leader", "10-ai-agent-implementation-mistakes-checklist"],
};

const ARTICLE_TOOL_ITEM_LIST: Record<string, string[]> = {
  "10-ai-agent-implementation-mistakes-checklist": [
    "10) Starting with tools, not outcomes",
    "9) Pilots without production path",
    "8) Ignoring data readiness",
    "7) No human oversight design",
    "6) Late security and compliance",
    "5) Measuring activity, not impact",
    "4) Weak workflow integration",
    "3) Poor change management",
    "2) No improvement rhythm",
    "1) Diffused ownership",
  ],
  "wrong-question-ai-leader": [
    "1) Which business problem matters most now",
    "2) Which workflow must change end to end",
    "3) What outcomes matter besides speed",
    "4) What goes live after the pilot",
    "5) Who owns delivery outcomes",
    "6) What data standard is non-negotiable",
    "7) What frontline friction disappears first",
    "8) Which KPIs move, by how much, by when",
    "9) What work we stop to create capacity",
  ],
  "black-mirror-lessons-ai-leaders": [
    "1) Fifteen Million Merits (Season 1, Episode 2)",
    "2) The Entire History of You (Season 1, Episode 3)",
    "3) Be Right Back (Season 2, Episode 1)",
    "4) Nosedive (Season 3, Episode 1)",
    "5) Hated in the Nation (Season 3, Episode 6)",
    "6) USS Callister (Season 4, Episode 1)",
    "7) Hang the DJ (Season 4, Episode 4)",
    "8) Smithereens (Season 5, Episode 2)",
    "9) Joan Is Awful (Season 6, Episode 1)",
    "10) Common People (Season 7, Episode 1)",
  ],
  "2026-ai-power-workflow": [
    "1) The Setup: OpenAI Prompt Optimizer",
    "2) The Hunt: Deep Research",
    "3) The Synthesis: NotebookLM",
  ],
  "12-ai-tools-in-my-tech-stack": [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Grok",
    "Kimi",
    "Antigravity",
    "Claude Code",
    "Codex",
    "NotebookLM",
    "GitHub",
    "Lovable",
    "Replit",
  ],
};

const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
  "wrong-question-ai-cxo": "wrong-question-ai-leader",
};

const InsightArticle = ({ slug }: { slug: string }) => {
  const lenis = useLenis();
  const resolvedSlug = LEGACY_SLUG_REDIRECTS[slug] ?? slug;

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [resolvedSlug, lenis]);

  const article = articles[resolvedSlug];
  const articlePath = `/insights/${resolvedSlug}`;
  const articleUrl = `${SITE_URL}${articlePath}`;
  const relatedSlugs = useMemo(() => {
    const configured = (RELATED_SLUGS_BY_ARTICLE[resolvedSlug] ?? []).filter(
      (relatedSlug) => relatedSlug !== resolvedSlug && Boolean(articles[relatedSlug]),
    );

    if (configured.length > 0) {
      return configured.slice(0, 2);
    }

    return Object.keys(articles)
      .filter((s) => s !== resolvedSlug)
      .slice(0, 2);
  }, [resolvedSlug]);

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | Moses Nyanzi</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navigation />
        <main className="min-h-screen bg-background pt-28 pb-20">
          <div className="container mx-auto px-5 lg:px-12 text-center">
            <h1 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-6">The article you are looking for does not exist.</p>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm"
              style={{ background: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </a>
          </div>
        </main>
      </>
    );
  }

  const articleImageUrl = article.image.startsWith("http")
    ? article.image
    : `${SITE_URL}${article.image}`;
  const seo = ARTICLE_SEO[resolvedSlug] ?? {
    metaTitle: `${article.title} | ${SITE_NAME}`,
    metaDescription: article.description,
    primaryKeyword: article.title.toLowerCase(),
    keywords: [article.category.toLowerCase(), "ai strategy", "automation"],
  };
  const articleTags = [...new Set([seo.primaryKeyword, ...seo.keywords])];

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: seo.metaDescription,
    image: [articleImageUrl],
    articleSection: article.category,
    keywords: seo.keywords.join(", "),
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SOCIAL_IMAGE_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: "en-ZA",
  };

  if (seo.publishedTime) {
    articleSchema.datePublished = seo.publishedTime;
  }

  if (seo.modifiedTime) {
    articleSchema.dateModified = seo.modifiedTime;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${SITE_URL}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  const toolList = ARTICLE_TOOL_ITEM_LIST[resolvedSlug];
  const itemListSchema = toolList
    ? {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: toolList.map((toolName, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: toolName,
      })),
    }
    : null;

  return (
    <>
      <Helmet>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content={seo.keywords.join(", ")} />
        <link rel="canonical" href={articleUrl} />
        <link rel="alternate" hrefLang="en-za" href={articleUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:image" content={articleImageUrl} />
        <meta property="og:image:alt" content={`Cover image for ${article.title}`} />
        <meta property="article:section" content={article.category} />
        <meta property="article:author" content={SITE_NAME} />
        {articleTags.map((keyword) => (
          <meta key={`article-tag-${keyword}`} property="article:tag" content={keyword} />
        ))}
        {seo.publishedTime && <meta property="article:published_time" content={seo.publishedTime} />}
        {seo.modifiedTime && <meta property="article:modified_time" content={seo.modifiedTime} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={articleUrl} />
        <meta name="twitter:title" content={seo.metaTitle} />
        <meta name="twitter:description" content={seo.metaDescription} />
        <meta name="twitter:image" content={articleImageUrl} />
        <meta name="twitter:image:alt" content={`Cover image for ${article.title}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {itemListSchema && <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>}
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="pt-24 lg:pt-32 pb-8 lg:pb-12">
          <div className="container mx-auto px-5 lg:px-12">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 lg:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">All Insights</span>
            </a>

            <header>
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "hsl(var(--gold))" }}
              >
                {article.category}
              </span>

              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 lg:mb-5">
                {article.title}
              </h1>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                {article.description}
              </p>
            </header>

            <div className="mt-5">
              <ShareBar url={articleUrl} title={article.title} />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 lg:px-12 mb-10 lg:mb-14">
          <div className="relative aspect-[2/1] lg:aspect-[21/9] rounded-xl lg:rounded-2xl overflow-hidden bg-muted">
            <img
              src={article.image}
              alt={`${article.title} cover image`}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="container mx-auto px-5 lg:px-12 pb-16 lg:pb-20">
          <div className="mb-6 lg:mb-8 lg:sticky lg:top-24 z-20">
            <AudioBriefingCard
              briefing={insightsArticlesBriefing}
              compact
              className="ml-auto"
            />
          </div>

          <article className="text-base lg:text-lg leading-relaxed">
            {article.content}
          </article>

          <div className="mt-12 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to All Insights</span>
            </a>
            <ShareBar url={articleUrl} title={article.title} />
          </div>
        </section>

        <section className="border-t border-border py-14 lg:py-20">
          <div className="container mx-auto px-5 lg:px-12">
            <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-8 lg:mb-10">
              Continue Reading
            </h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              {relatedSlugs.map((relatedSlug) => {
                const relatedArticle = articles[relatedSlug];
                return (
                  <a
                    key={relatedSlug}
                    href={`/insights/${relatedSlug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] rounded-lg lg:rounded-xl overflow-hidden bg-muted mb-4">
                      <img
                        src={relatedArticle.image}
                        alt={`${relatedArticle.title} cover image`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span
                      className="inline-block text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                      style={{ color: "hsl(var(--gold))" }}
                    >
                      {relatedArticle.category}
                    </span>

                    <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground leading-snug mb-2 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                      {relatedArticle.title}
                    </h3>

                    <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: "hsl(var(--gold))" }}>
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default InsightArticle;
