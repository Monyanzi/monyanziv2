import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/insights/ArticleCard";
import CategoryFilter from "@/components/insights/CategoryFilter";
import SortSelect, { type SortOption } from "@/components/insights/SortSelect";
import { articles, categories } from "@/data/articles";

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
    let result = activeCategory
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
        <title>Insights | Moses Nyanzi</title>
        <meta
          name="description"
          content="Strategic diagnostics for leaders navigating automation, process design, and organisational change."
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <header className="max-w-3xl mb-10 lg:mb-12">
              <span
                className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "hsl(var(--gold))" }}
              >
                Insights & Diagnostics
              </span>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.15] mb-5">
                Signals in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">complex</span>
                  <span
                    className="absolute bottom-1 left-0 right-0 h-2.5 -z-0"
                    style={{ background: "hsl(var(--gold) / 0.2)" }}
                  />
                </span>{" "}
                operations
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Sharp diagnostics for leaders who refuse to automate dysfunction at scale.
              </p>
            </header>

            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-border">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
              <SortSelect value={sortOption} onChange={handleSortChange} />
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            {filteredAndSortedArticles.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">
                No articles found for this category.
              </p>
            ) : (
              <>
                {/* Featured Article */}
                {featuredArticle && (
                  <div className="mb-12 lg:mb-16">
                    <ArticleCard {...featuredArticle} featured />
                  </div>
                )}

                {/* Divider */}
                {remainingArticles.length > 0 && (
                  <div className="border-t border-border mb-10 lg:mb-14" />
                )}

                {/* Article Grid */}
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
