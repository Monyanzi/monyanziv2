import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/insights/ArticleCard";
import CategoryFilter from "@/components/insights/CategoryFilter";
import SortSelect, { type SortOption } from "@/components/insights/SortSelect";
import { articles, categories } from "@/data/articles";

const SITE_URL = "https://mosesnyanzi.co.za";
const INSIGHTS_URL = `${SITE_URL}/insights`;
const INSIGHTS_OG_IMAGE_URL = `${SITE_URL}/social-share.svg`;

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("default");

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
        <link rel="canonical" href={INSIGHTS_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={INSIGHTS_URL} />
        <meta property="og:title" content="Insights on AI, Automation & Strategy | Moses Nyanzi" />
        <meta
          property="og:description"
          content="Strategic diagnostics for leaders navigating automation, process design, and organisational change."
        />
        <meta property="og:image" content={INSIGHTS_OG_IMAGE_URL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={INSIGHTS_URL} />
        <meta name="twitter:title" content="Insights on AI, Automation & Strategy | Moses Nyanzi" />
        <meta
          name="twitter:description"
          content="Strategic diagnostics for leaders navigating automation, process design, and organisational change."
        />
        <meta name="twitter:image" content={INSIGHTS_OG_IMAGE_URL} />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 pb-4 lg:pt-36 lg:pb-6 relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(135deg, hsl(40 35% 98%) 0%, hsl(210 45% 98%) 50%, hsl(40 35% 98%) 100%)"
            }}
          />

          <div className="container mx-auto px-6 lg:px-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Home
            </a>

            <header className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-5">
                <span className="relative inline-block">
                  <span className="relative z-10">Insights</span>
                  <span
                    className="absolute bottom-2 left-0 right-0 h-3 -z-0"
                    style={{ background: "hsl(var(--gold) / 0.25)" }}
                  />
                </span>
              </h1>
            </header>
          </div>
        </section>

        {/* Articles */}
        <section className="pb-16 pt-4 lg:pb-20 lg:pt-6">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-border">
              <div>
                <span
                  className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                  style={{ color: "hsl(var(--gold))" }}
                >
                  Articles
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Written Perspectives
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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
                  <div className="mb-12 lg:mb-16">
                    <ArticleCard {...featuredArticle} featured />
                  </div>
                )}

                {remainingArticles.length > 0 && (
                  <div className="border-t border-border mb-10 lg:mb-14" />
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-10 lg:gap-y-14">
                  {remainingArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Insights;

