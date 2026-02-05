import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "@/data/insights";
import { useLenis } from "@/components/SmoothScrollProvider";

// Article layout component
const InsightArticle = ({ slug }: { slug: string }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug, lenis]);

  const article = articles[slug];

  // Get related articles (excluding current)
  const relatedSlugs = Object.keys(articles)
    .filter(s => s !== slug)
    .slice(0, 2);

  if (!article) {
    return (
      <>
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

  return (
    <>
      <Helmet>
        <title>{article.title} | Moses Nyanzi</title>
        <meta name="description" content={article.description} />
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
          </div>
        </section>

        <section className="container mx-auto px-5 lg:px-12 mb-10 lg:mb-14">
          <div className="relative aspect-[2/1] lg:aspect-[21/9] rounded-xl lg:rounded-2xl overflow-hidden bg-muted">
            <img
              src={article.image}
              alt=""
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="container mx-auto px-5 lg:px-12 pb-16 lg:pb-20">
          <article className="text-base lg:text-lg leading-relaxed">
            {article.content}
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to All Insights</span>
            </a>
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
                        alt=""
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
      </main>
    </>
  );
};

export default InsightArticle;
