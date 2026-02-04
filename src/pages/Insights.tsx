import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Navigation from "@/components/Navigation";
import { ArrowRight, Clock } from "lucide-react";

// Import premium images
import automateWrongProcessImage from "@/assets/insights/automate-wrong-process.webp";
import automatingShadowProjectImage from "@/assets/insights/automating-shadow-project.webp";
import processMapsLyingImage from "@/assets/insights/process-maps-lying.webp";
import alwaysDoneThisWayImage from "@/assets/insights/always-done-this-way.webp";
import automateWasteImage from "@/assets/insights/automate-waste.webp";

const articles = [
  {
    id: "5-signs-automate-wrong-process",
    category: "AUTOMATION",
    title: "5 Signs You're About to Automate the Wrong Process",
    description: "Five diagnostic signals that the process you plan to automate is only the documented version, not the work your people actually do.",
    readTime: "4 min read",
    image: automateWrongProcessImage,
  },
  {
    id: "5-signs-automating-shadow-project",
    category: "AUTOMATION",
    title: "5 Signs You're Automating a Shadow Project",
    description: "The automation is live, but reality has not changed. Five signals that your project is running parallel to the actual business.",
    readTime: "4 min read",
    image: automatingShadowProjectImage,
  },
  {
    id: "5-signs-process-maps-lying",
    category: "PROCESS DESIGN",
    title: "5 Signs Your Process Maps Are Hiding the Real Work",
    description: "Flowcharts capture sequence, not significance. Five signals that your diagrams are fiction.",
    readTime: "4 min read",
    image: processMapsLyingImage,
  },
  {
    id: "5-signs-always-done-this-way",
    category: "ORGANISATIONAL CHANGE",
    title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
    description: "Sacred processes persist long after their rationale expires. Five signals that history is driving your operations.",
    readTime: "4 min read",
    image: alwaysDoneThisWayImage,
  },
  {
    id: "5-signs-automate-waste",
    category: "AUTOMATION",
    title: "5 Signs You Are About to Automate Waste (Not Value)",
    description: "Automation can entrench inefficiency at higher speed. Five signals that you are about to spend money encoding broken processes.",
    readTime: "4 min read",
    image: automateWasteImage,
  },
];

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights | Moses Nyanzi</title>
        <meta name="description" content="Strategic diagnostics for leaders navigating automation, process design, and organisational change." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Premium Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              transition={{ duration: 1.5 }}
              className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)' }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.02 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(hsl(var(--navy) / 0.15) 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
              }}
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-6"
                style={{ color: "hsl(var(--gold))" }}
              >
                Insights & Diagnostics
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-8"
              >
                Signals in{" "}
                <span className="relative">
                  <span className="relative z-10">complex</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-2 left-0 right-0 h-3 -z-0 origin-left"
                    style={{ background: "hsl(var(--gold) / 0.2)" }}
                  />
                </span>{" "}
                operations
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Sharp diagnostics for leaders who refuse to automate dysfunction at scale.
              </motion.p>
            </motion.header>
          </div>
        </section>

        {/* Article Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Featured Article (First) */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-16 lg:mb-24"
            >
              <a href={`/insights/${articles[0].id}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={articles[0].image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="lg:py-8">
                    <span
                      className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                      style={{ color: "hsl(var(--gold))" }}
                    >
                      {articles[0].category}
                    </span>

                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-5 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                      {articles[0].title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {articles[0].description}
                    </p>

                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {articles[0].readTime}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: "hsl(var(--gold))" }}>
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>

            {/* Divider */}
            <div className="border-t border-border mb-16 lg:mb-20" />

            {/* Remaining Articles Grid */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-12 lg:gap-y-20">
              {articles.slice(1).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <a href={`/insights/${article.id}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-6">
                      <img
                        src={article.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Category */}
                    <span
                      className="inline-block text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                      style={{ color: "hsl(var(--gold))" }}
                    >
                      {article.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground leading-snug mb-4 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: "hsl(var(--gold))" }}>
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Insights;
