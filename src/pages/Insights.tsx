import { useState, useMemo, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/insights/ArticleCard";
import CategoryFilter from "@/components/insights/CategoryFilter";
import SortSelect, { type SortOption } from "@/components/insights/SortSelect";
import AudioBriefingCard from "@/components/audio/AudioBriefingCard";
import SiteFooter from "@/components/SiteFooter";
import { articles as articlesRecord } from "@/data/insights";
import { insightsArticlesBriefing } from "@/data/audioBriefings";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";
import SearchModal from "@/components/SearchModal";

const INSIGHTS_URL = `${SITE_URL}/insights`;

const articles = Object.entries(articlesRecord).map(([id, a]) => ({
  id,
  title: a.title,
  category: a.category,
  description: a.description,
  image: a.image,
}));

const categories = [...new Set(articles.map((a) => a.category))];

const insightsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Moses Nyanzi Insights",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${INSIGHTS_URL}/${article.id}`,
    name: article.title,
  })),
};

const insightsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Insights", item: INSIGHTS_URL },
  ],
};

const toIsoDuration = (duration: string) => {
  const [minutes, seconds] = duration.split(":").map((value) => Number(value));
  if (Number.isNaN(minutes) || Number.isNaN(seconds)) return undefined;
  return `PT${minutes}M${seconds}S`;
};

const readyAudioSchemas = [insightsArticlesBriefing]
  .filter((briefing) => briefing.isReady)
  .map((briefing) => ({
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: briefing.title,
    description: briefing.subtitle,
    contentUrl: `${SITE_URL}${briefing.audioSrc}`,
    duration: toIsoDuration(briefing.duration),
    dateModified: briefing.updatedOn,
    inLanguage: "en-ZA",
  }));

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleCategoryChange = useCallback((category: string | null) => {
    setActiveCategory(category);
  }, []);

  const handleSortChange = useCallback((option: SortOption) => {
    setSortOption(option);
  }, []);

  const filteredAndSortedArticles = useMemo(() => {
    const result = activeCategory
      ? articles.filter((a) => a.category === activeCategory)
      : [...articles];

    if (sortOption === "alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [activeCategory, sortOption]);

  const featuredArticle = filteredAndSortedArticles[0];
  const remainingArticles = filteredAndSortedArticles.slice(1);

  return (
    <>
      <Helmet>
        <title>Insights on AI, Automation & Strategy | Moses Nyanzi</title>
        <meta
          name="description"
          content="Strategic diagnostics for leaders navigating automation, process design, and organisational change."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content="ai strategy insights, automation strategy articles, organisational change guides, ai implementation checklists, moses nyanzi insights" />
        <link rel="canonical" href={INSIGHTS_URL} />
        <link rel="alternate" hrefLang="en-za" href={INSIGHTS_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={INSIGHTS_URL} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:title" content="Insights on AI, Automation & Strategy | Moses Nyanzi" />
        <meta property="og:description" content="Strategic diagnostics for leaders navigating automation, process design, and organisational change." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:alt" content="Moses Nyanzi insights page" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={INSIGHTS_URL} />
        <meta name="twitter:title" content="Insights on AI, Automation & Strategy | Moses Nyanzi" />
        <meta name="twitter:description" content="Strategic diagnostics for leaders navigating automation, process design, and organisational change." />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="Moses Nyanzi insights page" />
        <script type="application/ld+json">{JSON.stringify(insightsItemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(insightsBreadcrumbSchema)}</script>
        {readyAudioSchemas.map((schema, index) => (
          <script key={`audio-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-28 pb-6 lg:pt-36 lg:pb-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[hsl(var(--section-bg))]" />

          <div className="container mx-auto px-6 lg:px-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Home
            </a>

            <header className="max-w-3xl">
              <div className="flex items-center gap-4">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-tight">
                  Insights
                </h1>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search articles (Ctrl+K)"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground mt-3 max-w-xl leading-relaxed">
                Strategic diagnostics for leaders navigating automation, AI, and organisational change.
              </p>
            </header>
          </div>
        </section>

        <section className="pb-8 lg:pb-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-start">
              <AudioBriefingCard briefing={insightsArticlesBriefing} />
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="pb-16 pt-4 lg:pb-24 lg:pt-6">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 pb-6 border-b border-border/50">
              <div>
                <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 text-accent">
                  Articles
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                  Written Perspectives
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
                <SortSelect value={sortOption} onChange={handleSortChange} />
              </div>
            </div>

            {filteredAndSortedArticles.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">
                No articles found for this category.
              </p>
            ) : (
              <>
                {featuredArticle && (
                  <div className="mb-14 lg:mb-18">
                    <ArticleCard {...featuredArticle} featured />
                  </div>
                )}

                {remainingArticles.length > 0 && (
                  <div className="border-t border-border/40 mb-12 lg:mb-16" />
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-10 lg:gap-y-16">
                  {remainingArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <SiteFooter />
      </main>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Insights;
