import { useState, useMemo, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/insights/ArticleCard";
import CategoryFilter from "@/components/insights/CategoryFilter";
import SortSelect, { type SortOption } from "@/components/insights/SortSelect";
import AudioBriefingCard from "@/components/audio/AudioBriefingCard";
import SiteFooter from "@/components/SiteFooter";
import { articleSummaries, entrepreneurResources } from "@/data/articleSummaries";
import { insightsArticlesBriefing } from "@/data/audioBriefings";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";
import SearchModal from "@/components/SearchModal";
import { Search } from "lucide-react";


const INSIGHTS_URL = `${SITE_URL}/insights`;
const INSIGHTS_TITLE = `AI Tools, Automation & Founder Field Notes | ${SITE_NAME}`;

const articles = articleSummaries;
const categories = [...new Set(articles.map((a) => a.category))];

const insightsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI tools and automation insights",
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
        <title>{INSIGHTS_TITLE}</title>
        <meta
          name="description"
          content="Practical AI articles, automation checklists, tool guides, and workflow notes for small entrepreneurs and builders."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content="AI tools for entrepreneurs, automation strategy articles, AI implementation checklists, Codex, Claude Code, Lovable, n8n" />
        <link rel="canonical" href={INSIGHTS_URL} />
        <link rel="alternate" hrefLang="en-za" href={INSIGHTS_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={INSIGHTS_URL} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:title" content={INSIGHTS_TITLE} />
        <meta property="og:description" content="Practical AI articles, automation checklists, tool guides, and workflow notes for small entrepreneurs and builders." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:alt" content="AI tools and automation insights page" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={INSIGHTS_URL} />
        <meta name="twitter:title" content={INSIGHTS_TITLE} />
        <meta name="twitter:description" content="Practical AI articles, automation checklists, tool guides, and workflow notes for small entrepreneurs and builders." />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="AI tools and automation insights page" />

        <script type="application/ld+json">{JSON.stringify(insightsItemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(insightsBreadcrumbSchema)}</script>
        {readyAudioSchemas.map((schema, index) => (
          <script key={`audio-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <main id="main" className="min-h-screen relative" style={{ backgroundColor: "#F0EDE6" }}>
        {/* Ambient radial glow mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(600px circle at 12% 10%, rgba(139,92,246,0.07), transparent 60%), radial-gradient(600px circle at 88% 12%, rgba(91,75,245,0.07), transparent 60%), radial-gradient(500px circle at 50% 100%, rgba(245,158,11,0.07), transparent 60%)",
          }}
        />
        <div className="relative z-10">
      <Navigation />

        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="page-container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              {/* Left — title */}
              <div>
                <h1
                  className="text-balance text-foreground"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontWeight: 400,
                    fontSize: "clamp(3.5rem, 8vw, 7rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Articles
                </h1>

                <p className="mt-4 max-w-lg text-body-lg" style={{ color: '#6B7280' }}>
                  Practical advice on using AI and automation without wasting time or money.
                </p>
              </div>

              {/* Right — compact search */}
              <div className="flex flex-col gap-3">
                <button
                  aria-label="Search articles (Ctrl+K)"
                  onClick={() => setIsSearchOpen(true)}
                  className="group inline-flex items-center gap-3 px-5 py-3 text-left transition-all duration-200 focus:outline-none"
                  style={{
                    borderRadius: 9999,
                    border: "1px solid rgba(91,75,245,0.10)",
                    background: "rgba(255,255,255,0.62)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(91,75,245,0.25)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(91,75,245,0.10)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(91,75,245,0.10)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Search className="h-4 w-4" style={{ color: "#5B4BF5" }} />
                  <span className="flex-1 text-sm text-foreground-subtle">Search articles</span>
                  <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-border bg-white/70 px-1.5 py-0.5 font-mono text-[10px] font-medium text-foreground-subtle">
                    ⌘K
                  </kbd>
                </button>
              </div>
            </div>

            {/* Audio briefing */}
            <div
              className="mt-8 p-4"
              style={{
                background: "rgba(255,255,255,0.60)",
                border: "1px solid rgba(91,75,245,0.09)",
                borderRadius: 20,
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              <p
                className="mb-3 inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase"
                style={{ color: "#5B4BF5", letterSpacing: "0.14em" }}
              >
                Listen
              </p>
              <AudioBriefingCard briefing={insightsArticlesBriefing} className="w-full" />
            </div>
          </div>
        </section>

        {/* Articles section */}
        <section className="py-section">
          <div className="page-container">
            {/* Controls */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[1.375rem] font-bold text-foreground">Latest Articles</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
                <SortSelect value={sortOption} onChange={handleSortChange} />
              </div>
            </div>

            {/* Article list */}
            {filteredAndSortedArticles.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-border py-24">
                <p className="text-foreground-muted">No articles found for this category.</p>
              </div>
            ) : (
              <div className="space-y-10 lg:space-y-12">
                {/* Featured */}
                {featuredArticle && (
                  <div>
                    <ArticleCard {...featuredArticle} featured />
                  </div>
                )}

                {/* Grid — 2 columns */}
                <div className="grid gap-6 md:grid-cols-2">
                  {remainingArticles.map((article) => (
                    <div
                      key={article.id}
                    >
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Resources section */}
        <section className="py-section">
          <div className="page-container">
            {/* Section separator */}
            <div className="mb-10 border-t border-[#E4E4EF] pt-10 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#6D28D9]/10 border border-[#6D28D9]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6D28D9]">
                Ecosystem
              </span>
            </div>
            <div className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Tools for builders</h2>
              <p className="max-w-xl text-body-lg text-foreground-muted">
                A short list of useful tools and ideas to try before you buy another subscription or start a new project.
              </p>
            </div>

            <div className="flex flex-col">
              {entrepreneurResources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 px-3 py-4 transition-colors duration-200"
                  style={{
                    borderBottom: "1px solid rgba(91,75,245,0.08)",
                    background: "transparent",
                    borderRadius: 12,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(91,75,245,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <p
                    style={{
                      color: "#5B4BF5",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {resource.category}
                  </p>
                  <h3 className="text-[1.125rem] font-bold text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-foreground-muted max-w-3xl">
                    {resource.description}
                  </p>
                  <div className="mt-1 inline-flex items-center gap-2 text-[12px] font-bold tracking-wide transition-all duration-300 group-hover:gap-3" style={{ color: "#5B4BF5" }}>
                    {resource.ctaText} →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>



        <SiteFooter />
        </div>
      </main>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Insights;
