import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";

interface ArticleContent {
  title: string;
  category: string;
  readTime: string;
  description: string;
  image: string;
  content: React.ReactNode;
}

const articles: Record<string, ArticleContent> = {
  "5-signs-automate-wrong-process": {
    title: "5 Signs You're About to Automate the Wrong Process",
    category: "AUTOMATION",
    readTime: "4 min read",
    description: "Five diagnostic signals that the process you plan to automate is only the documented version, not the work your people actually do.",
    image: "/insights/automate-wrong-process.png",
    content: (
      <>
        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Shadow Excel Is Still Being Updated
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Your team assures you they've migrated to the new system. Yet the file properties on that critical spreadsheet show activity from this morning. The documented process is live in the system. The actual process is live in the spreadsheet. You are about to automate the documentation while the work continues elsewhere.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. Three Departments Describe the Same Process Differently
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Ask Operations, Risk, and Finance to walk you through invoice approval. If you get three different answers, you do not have one process—you have three negotiated compromises. Automating any one of them will break the other two, and the shadow workflow will absorb the work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. Nobody Can Explain Why the "Approval Step" Exists
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            "Who approves this?" "The department lead." "Why?" "They have always done it." If the authority for a critical decision rests on institutional memory rather than documented criteria, your automation will encode randomness as structure, and exceptions will proliferate.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The SOP Has Not Been Updated Since the Last System Migration
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The document references a validation step in a platform you sunset 18 months ago. The current workaround—known only to legacy staff—is now the actual process. You are automating archaeology, not operations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. Your ROI Calculation Assumes Zero Exception Handling
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The business case promises 95% straight-through processing. It does not model what happens when 40% of transactions hit exceptions requiring human judgement. The exceptions will not disappear. They will metastasise into a queue that requires three FTEs to clear, and your efficiency gain will be negative.
          </p>
        </section>
      </>
    ),
  },
};

interface InsightArticleProps {
  slug: string;
}

const InsightArticle = ({ slug }: InsightArticleProps) => {
  const article = articles[slug];

  if (!article) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-muted-foreground">Article not found.</p>
            <a href="/insights" className="text-[hsl(var(--gold))] hover:underline mt-4 inline-block">
              ← Back to Insights
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | MN Insights</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-32 pb-24">
        <article className="container mx-auto px-6 lg:px-12">
          {/* Back link */}
          <a
            href="/insights"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Back to Insights</span>
          </a>

          {/* Header */}
          <header className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-medium tracking-[0.15em] text-[hsl(var(--gold))] uppercase mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-3xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {article.description}
            </p>
            <span className="text-sm text-muted-foreground/70">
              {article.readTime}
            </span>
          </header>

          {/* Featured image */}
          <div className="max-w-4xl mb-16">
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden border border-border">
              <img
                src={article.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            {article.content}
          </div>

          {/* Footer */}
          <footer className="max-w-3xl mt-16 pt-8 border-t border-border">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-[hsl(var(--gold))] hover:text-[hsl(var(--gold-light))] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all insights</span>
            </a>
          </footer>
        </article>
      </main>
    </>
  );
};

export default InsightArticle;
