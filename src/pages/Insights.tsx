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
import { Search, ArrowUpRight } from "lucide-react";


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

      <main id="main" className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#0A0A1F", color: "#E8E6F5" }}>
        {/* Aurora / mesh backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(900px circle at 8% 0%, rgba(91,75,245,0.35), transparent 55%), radial-gradient(800px circle at 100% 10%, rgba(168,85,247,0.28), transparent 55%), radial-gradient(700px circle at 50% 100%, rgba(59,130,246,0.22), transparent 60%), radial-gradient(500px circle at 0% 100%, rgba(236,72,153,0.15), transparent 60%)",
          }}
        />
        {/* Subtle grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
        <div className="relative z-10">
      <Navigation />

        {/* Hero — glass panel */}
        <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-16">
          <div className="page-container relative z-10">
            <div
              className="relative overflow-hidden p-6 sm:p-10 lg:p-14"
              style={{
                borderRadius: 28,
                background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(28px) saturate(140%)",
                WebkitBackdropFilter: "blur(28px) saturate(140%)",
                boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Sheen highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-40"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)" }}
              />

              <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end relative">
                <div>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase mb-6"
                    style={{
                      letterSpacing: "0.14em",
                      borderRadius: 9999,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#B8B2FF",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8B7CFF", boxShadow: "0 0 10px #8B7CFF" }} />
                    Field notes · {articles.length} articles
                  </span>
                  <h1
                    className="text-balance"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontWeight: 400,
                      fontSize: "clamp(3.25rem, 8vw, 6.5rem)",
                      lineHeight: 0.95,
                      letterSpacing: "-0.035em",
                      color: "#F5F3FF",
                    }}
                  >
                    Articles
                  </h1>
                  <p className="mt-5 max-w-lg text-body-lg" style={{ color: "rgba(232,230,245,0.72)" }}>
                    Practical advice on using AI and automation without wasting time or money.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    aria-label="Search articles (Ctrl+K)"
                    onClick={() => setIsSearchOpen(true)}
                    className="group inline-flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 focus:outline-none"
                    style={{
                      borderRadius: 9999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(18px)",
                      WebkitBackdropFilter: "blur(18px)",
                      color: "rgba(232,230,245,0.9)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(139,124,255,0.5)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139,124,255,0.18)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Search className="h-4 w-4" style={{ color: "#B8B2FF" }} />
                    <span className="flex-1 text-sm">Search articles</span>
                    <kbd
                      className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 font-mono text-[10px] font-medium"
                      style={{
                        borderRadius: 6,
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(232,230,245,0.7)",
                      }}
                    >
                      ⌘K
                    </kbd>
                  </button>

                  {/* Audio briefing — glass */}
                  <div
                    className="p-3"
                    style={{
                      borderRadius: 20,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      backdropFilter: "blur(18px)",
                      WebkitBackdropFilter: "blur(18px)",
                    }}
                  >
                    <p
                      className="mb-2 inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase"
                      style={{ color: "#B8B2FF", letterSpacing: "0.14em" }}
                    >
                      · Listen
                    </p>
                    <AudioBriefingCard briefing={insightsArticlesBriefing} className="w-full" compact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles section */}
        <section className="py-section">
          <div className="page-container">
            {/* Controls — glass toolbar */}
            <div
              className="mb-10 flex flex-col gap-4 p-3 sm:flex-row sm:items-center sm:justify-between"
              style={{
                borderRadius: 20,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <h2 className="pl-2 text-[1.125rem] font-bold" style={{ color: "#F5F3FF" }}>
                Latest <span style={{ color: "rgba(232,230,245,0.5)", fontWeight: 400 }}>· {filteredAndSortedArticles.length}</span>
              </h2>
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
              <div
                className="flex flex-col items-center justify-center py-24"
                style={{
                  borderRadius: 24,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px dashed rgba(255,255,255,0.14)",
                }}
              >
                <p style={{ color: "rgba(232,230,245,0.6)" }}>No articles found for this category.</p>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="mt-4 px-4 py-2 text-[12px] font-semibold min-h-11"
                  style={{
                    borderRadius: 9999,
                    background: "#5B4BF5",
                    color: "white",
                    boxShadow: "0 6px 20px rgba(91,75,245,0.4)",
                  }}
                >
                  Show all articles
                </button>
              </div>
            ) : (
              <div className="space-y-10 lg:space-y-12">
                {featuredArticle && (
                  <div>
                    <ArticleCard {...featuredArticle} featured />
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {remainingArticles.map((article) => (
                    <div key={article.id}>
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Resources / Ecosystem */}
        <section className="py-section">
          <div className="page-container">
            <div className="mb-8 flex items-center gap-3">
              <span
                className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase"
                style={{
                  letterSpacing: "0.14em",
                  borderRadius: 9999,
                  background: "rgba(139,124,255,0.14)",
                  border: "1px solid rgba(139,124,255,0.28)",
                  color: "#C6BFFF",
                }}
              >
                Ecosystem
              </span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.14), transparent)" }} />
            </div>
            <div className="mb-8 max-w-2xl">
              <h2 className="text-display-sm mb-3" style={{ color: "#F5F3FF" }}>Tools for builders</h2>
              <p className="text-body-lg" style={{ color: "rgba(232,230,245,0.65)" }}>
                A short list of useful tools and ideas to try before you buy another subscription or start a new project.
              </p>
            </div>

            {/* Glass panel wrapping rows */}
            <div
              className="overflow-hidden"
              style={{
                borderRadius: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {entrepreneurResources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 px-5 py-5 sm:px-7 sm:py-6 transition-colors duration-200"
                  style={{
                    borderBottom:
                      i === entrepreneurResources.length - 1
                        ? "none"
                        : "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(139,124,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      style={{
                        color: "#B8B2FF",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                      }}
                    >
                      {resource.category}
                    </p>
                    <h3 className="mt-1 text-[1.05rem] sm:text-[1.15rem] font-bold" style={{ color: "#F5F3FF" }}>
                      {resource.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed max-w-3xl" style={{ color: "rgba(232,230,245,0.62)" }}>
                      {resource.description}
                    </p>
                    <div
                      className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold tracking-wide transition-all duration-300 group-hover:gap-3"
                      style={{ color: "#B8B2FF" }}
                    >
                      {resource.ctaText} →
                    </div>
                  </div>
                  <ArrowUpRight
                    className="shrink-0 mt-1 h-5 w-5 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "#B8B2FF" }}
                  />
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
