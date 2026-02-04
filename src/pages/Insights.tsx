import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";

// Placeholder article data
const articles = [
  {
    id: "5-signs-automate-wrong-process",
    category: "AUTOMATION",
    title: "5 Signs You're About to Automate the Wrong Process",
    description: "Five diagnostic signals that the process you plan to automate is only the documented version, not the work your people actually do.",
    readTime: "4 min read",
    image: "/insights/automate-wrong-process.png",
  },
  {
    id: "5-signs-automating-shadow-project",
    category: "AUTOMATION",
    title: "5 Signs You're Automating a Shadow Project",
    description: "The automation is live, but reality has not changed. Five signals that your project is running parallel to the actual business.",
    readTime: "4 min read",
    image: "/insights/automating-shadow-project.png",
  },
  {
    id: "5-signs-process-maps-lying",
    category: "PROCESS DESIGN",
    title: "5 Signs Your Process Maps Are Hiding the Real Work",
    description: "Flowcharts capture sequence, not significance. Five signals that your diagrams are fiction.",
    readTime: "4 min read",
    image: "/insights/process-maps-lying.png",
  },
];

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights | MN</title>
        <meta name="description" content="Short, sharp diagnostics for leaders automating real-world processes." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero Section */}
          <header className="max-w-3xl mb-20">
            <span className="inline-block text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
              Insights
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Signals in complex operations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Short, sharp diagnostics for leaders automating real-world processes.
            </p>
          </header>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer"
              >
                <a href={`/insights/${article.id}`} className="block">
                  {/* Illustration */}
                  <div className="aspect-[16/10] bg-muted rounded-lg mb-5 overflow-hidden border border-border">
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to placeholder pattern
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('insights-placeholder');
                      }}
                    />
                  </div>

                  {/* Category */}
                  <span className="inline-block text-xs font-medium tracking-[0.15em] text-[hsl(var(--gold))] uppercase mb-2">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground leading-snug mb-3 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.description}
                  </p>

                  {/* Read time */}
                  <span className="text-sm text-muted-foreground/70">
                    {article.readTime}
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Placeholder pattern styles */}
      <style>{`
        .insights-placeholder {
          background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--secondary)) 100%);
          position: relative;
        }
        .insights-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(45deg, hsl(var(--border)) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(var(--border)) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(var(--border)) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(var(--border)) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          opacity: 0.3;
        }
      `}</style>
    </>
  );
};

export default Insights;
