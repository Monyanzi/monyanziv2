import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/insights/ArticleCard";
import CategoryFilter from "@/components/insights/CategoryFilter";
import SortSelect, { type SortOption } from "@/components/insights/SortSelect";
import { articles, categories } from "@/data/articles";
import reinsuranceTowerImg from "@/assets/reinsurance-tower.webp";
import valueStickImg from "@/assets/value-stick.webp";
import theoryOfConstraintsImg from "@/assets/theory-of-constraints.webp";

const frameworks = [
  {
    title: "Reinsurance Architecture",
    description: "Effective reinsurance isn't just buying cover; it's architectural design.",
    image: reinsuranceTowerImg,
    alt: "Reinsurance program structure showing layered coverage from retention to catastrophe",
    caption: "The interplay between Net Retention and Risk Transfer layers",
    insight: "Proper layering reduces volatility while freeing capital for growth.",
    color: "hsl(140 18% 40%)",
    colorEnd: "hsl(140 18% 35%)",
  },
  {
    title: "Pricing Strategy",
    description: "Understanding value creation and capture is fundamental to sustainable pricing.",
    image: valueStickImg,
    alt: "Value Stick framework showing how value is divided between customers and firm",
    caption: "How total value created is distributed across stakeholders",
    insight: "Great pricing expands customer value while capturing firm margin.",
    color: "hsl(210 45% 55%)",
    colorEnd: "hsl(210 45% 48%)",
  },
  {
    title: "Bottleneck Analysis",
    description: "Every system has a constraint. Find it, fix it, repeat.",
    image: theoryOfConstraintsImg,
    alt: "Theory of Constraints showing the 5 focusing steps for continuous improvement",
    caption: "A systematic approach to throughput improvement",
    insight: "Focus on the constraint—everything else is noise.",
    color: "hsl(20 55% 53%)",
    colorEnd: "hsl(20 55% 45%)",
  },
];

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
        <title>Insights | Moses Nyanzi</title>
        <meta
          name="description"
          content="Strategic diagnostics for leaders navigating automation, process design, and organisational change."
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden">
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

        {/* Frameworks Section */}
        <section className="py-12 lg:py-16" style={{ background: "hsl(210 45% 96%)" }}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "hsl(var(--gold))" }}
              >
                Mental Models
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Frameworks I Use
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework) => (
                <div
                  key={framework.title}
                  className="rounded-2xl overflow-hidden bg-white border border-border flex flex-col hover:-translate-y-2 transition-transform duration-300"
                  style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)" }}
                >
                  <div
                    className="p-6 pb-4 h-[120px] flex flex-col justify-center"
                    style={{ background: `linear-gradient(135deg, ${framework.color} 0%, ${framework.colorEnd} 100%)` }}
                  >
                    <h3 className="font-display text-lg text-white font-semibold mb-2">
                      {framework.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {framework.description}
                    </p>
                  </div>

                  <div className="flex-1 bg-[hsl(210_45%_96%)] flex items-center justify-center">
                    <img
                      src={framework.image}
                      alt={framework.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  <figcaption className="text-xs text-foreground/60 text-center py-3 px-6 border-t border-border h-[60px] flex items-center justify-center">
                    {framework.caption}
                  </figcaption>

                  <div className="px-6 py-4 bg-[hsl(var(--gold)/0.08)] border-t border-[hsl(var(--gold)/0.2)] h-[72px] flex items-center justify-center">
                    <p className="text-xs font-medium text-foreground text-center">
                      <span className="text-[hsl(var(--gold))] font-semibold">Key Insight:</span> {framework.insight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 lg:py-20">
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

