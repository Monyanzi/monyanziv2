import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

// Import premium images
import automateWrongProcessImage from "@/assets/insights/automate-wrong-process.webp";
import automatingShadowProjectImage from "@/assets/insights/automating-shadow-project.webp";
import processMapsLyingImage from "@/assets/insights/process-maps-lying.webp";
import alwaysDoneThisWayImage from "@/assets/insights/always-done-this-way.webp";
import automateWasteImage from "@/assets/insights/automate-waste.webp";

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
    image: automateWrongProcessImage,
    content: (
      <>
        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Shadow Excel Is Still Being Updated
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Your team assures you they've migrated to the new system. Yet the file properties on that critical spreadsheet show activity from this morning. The documented process is live in the system. The actual process is live in the spreadsheet. You are about to automate the documentation while the work continues elsewhere.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. Three Departments Describe the Same Process Differently
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Ask Operations, Risk, and Finance to walk you through invoice approval. If you get three different answers, you do not have one process—you have three negotiated compromises. Automating any one of them will break the other two, and the shadow workflow will absorb the work.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. Nobody Can Explain Why the "Approval Step" Exists
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            "Who approves this?" "The department lead." "Why?" "They have always done it." If the authority for a critical decision rests on institutional memory rather than documented criteria, your automation will encode randomness as structure, and exceptions will proliferate.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The SOP Has Not Been Updated Since the Last System Migration
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The document references a validation step in a platform you sunset 18 months ago. The current workaround—known only to legacy staff—is now the actual process. You are automating archaeology, not operations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. Your ROI Calculation Assumes Zero Exception Handling
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The business case promises 95% straight-through processing. It does not model what happens when 40% of transactions hit exceptions requiring human judgement. The exceptions will not disappear. They will metastasise into a queue that requires three FTEs to clear, and your efficiency gain will be negative.
          </p>
        </section>
      </>
    ),
  },
  "5-signs-automating-shadow-project": {
    title: "5 Signs You're Automating a Shadow Project",
    category: "AUTOMATION",
    readTime: "4 min read",
    description: "The automation is live, but reality has not changed. Five signals that your project is running parallel to the actual business.",
    image: automatingShadowProjectImage,
    content: (
      <>
        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Go-Live Date Passed, But the Legacy Process Is Still Operating
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The steering committee signed off. The vendor confirmed deployment. Yet the operations team maintains the same manual checklist they used before, "just in case." The new system exists. The old system persists. You are funding two parallel operations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. Your AI Handles the Easy Cases, But the Exceptions Consume More Labour Than Before
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The pilot shows 80% automation rate. The reality is your staff now manage the AI's exception queue alongside the original workload. The automation shifted the burden to the messy middle—where regulatory risk lives—and made it harder to resolve because the context is now split between two systems.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. The Process Map Changes, But the Conversation Does Not
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            You implemented new workflow software. But when you listen to the operations team, they still describe the work in terms of the old steps. "Then I check with Sarah." "Then I wait for the Thursday batch." The language has not shifted. The mental model has not shifted. The work has not shifted.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The Data in the New System Does Not Match the Data in the Business
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The dashboard shows 247 transactions processed. The business knows there are 312. The gap is the shadow pipeline—transactions that bypass the automation because they are too complex, too urgent, or too politically sensitive to fit the new rules.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. The Business Case Assumptions Are Revised Downward Every Quarter
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            First it was 40% efficiency gain. Then 25%. Then 15%. Now the conversation is about "foundational investment for future capabilities." The shadow project is consuming budget and delivering theatre, whilst the real work continues in the shadows.
          </p>
        </section>
      </>
    ),
  },
  "5-signs-process-maps-lying": {
    title: "5 Signs Your Process Maps Are Hiding the Real Work",
    category: "PROCESS DESIGN",
    readTime: "4 min read",
    description: "Flowcharts capture sequence, not significance. Five signals that your diagrams are fiction.",
    image: processMapsLyingImage,
    content: (
      <>
        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Map Is Symmetrical, But the Workload Is Not
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Your diagram shows clean handoffs between equal departments. Reality: one team is flooded, another is starving. The map shows geometry; the work shows bottlenecks. The diagram implies capacity equilibrium that does not exist.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. The "Wait" Steps Are Not on the Map
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The diagram shows five steps. It does not show that Step 2 waits three days for a weekly batch run, or that Step 4 waits for someone to return from leave. A map that does not show waiting time is a map of potential, not performance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. Exceptions Are Labelled "Edge Cases" But Happen Daily
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Thirty per cent of your transactions are "exceptions" according to the map. That is not an edge—that is a significant portion of the process. If your map has a happy path and a tiny "exceptions" box, you are mapping fantasy, not operation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. Nobody Can Walk the Map with a Real Transaction
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Ask someone to trace last Tuesday's Invoice #2847 through your flowchart. If they cannot—if they say "well, actually" or "in that case" more than twice—the map does not describe the process. It describes the process the mapper wished existed.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. The Map Was Created in a Conference Room, Not at the Gemba
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            If the process map was drawn by consultants interviewing managers, it is a map of authority, not reality. The people who do the work were not observed. The workarounds were not witnessed. The shadow workflows were not surfaced. Toyota's Genchi Genbutsu—"go and see"—was ignored.
          </p>
        </section>
      </>
    ),
  },
  "5-signs-always-done-this-way": {
    title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
    category: "ORGANISATIONAL CHANGE",
    readTime: "4 min read",
    description: "Sacred processes persist long after their rationale expires. Five signals that history is driving your operations.",
    image: alwaysDoneThisWayImage,
    content: (
      <>
        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Reason for the Process Is a Person Who Left Three Years Ago
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            "Why do we do this?" "Because the previous director insisted on it." They retired in 2022. The constraint they managed may have expired, but the process persists—now encoded in "policy" that nobody dares challenge because the rationale is lost.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. New Employees Learn the "Real Way" From Colleagues, Not the Manual
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The onboarding programme teaches the SOP. But after week one, the new hire's buddy shows them "how we actually do it." If the shadow workflow is the primary curriculum, the official process is ceremonial—and the organisation knows it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. Suggesting "This Might Be Outdated" Starts an Argument, Not a Conversation
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Propose that a process needs review. Watch the room. If the response is defensive—if the first instinct is to defend rather than examine—you have found a sacred cow. The process is protected not by logic but by identity.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The "Risk" of Changing Is Cited, But Never Quantified
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            "We cannot change that—it is too risky." What risk? How likely? What is the impact? If the risk of change always outweighs the risk of stagnation, but neither is measured, you are not managing risk. You are managing fear.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. The Last "Process Improvement" Added Steps, But Never Removed Them
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Process improvement is supposed to simplify. But your history shows only accretion: new checks, new approvals, new reviews. Nothing is ever eliminated. The process is not being optimised—it is being encrusted.
          </p>
        </section>
      </>
    ),
  },
  "5-signs-automate-waste": {
    title: "5 Signs You Are About to Automate Waste (Not Value)",
    category: "AUTOMATION",
    readTime: "4 min read",
    description: "Automation can entrench inefficiency at higher speed. Five signals that you are about to spend money encoding broken processes.",
    image: automateWasteImage,
    content: (
      <>
        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. You Cannot Explain Why the Process Exists Without Saying "Compliance"
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Some processes exist solely to create audit trails. That is valid—but it changes the automation approach. If you are automating "efficiency" but the process exists for "evidence," you will destroy the value whilst optimising the cost.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. The "Automated" Version Still Requires the Same Number of People
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The business case promises headcount reduction. But the reality is: automation handles the 60% of cases that were already easy, whilst humans handle the 40% of exceptions that got more complex. You have automated the wrong 60%.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. You Are Solving for Speed, But the Customer Values Judgement
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Not every process should be "touchless." Sometimes the manual step builds trust, catches the edge case, or differentiates your service. Automating for speed when the customer values care is optimising the wrong metric.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The ROI Calculation Ignores the Cost of Rigidity
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Automation makes processes faster—and less flexible. If your market changes, a manual process adapts in a week. An automated process requires Change Requests, testing windows, and regression analysis. The business case rarely includes the cost of this rigidity.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. Nobody Has Asked "What If We Just Stopped Doing This?"
          </h2>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed">
            The automation question assumes the process must continue. But many processes are heritage, not necessity. The question "how do we automate this?" should always be preceded by "should we still be doing this at all?" If that second question is never asked, you are automating waste.
          </p>
        </section>
      </>
    ),
  },
};

// Get related articles (excluding current)
const getRelatedArticles = (currentSlug: string) => {
  const slugs = Object.keys(articles);
  return slugs.filter(slug => slug !== currentSlug).slice(0, 2);
};

interface InsightArticleProps {
  slug: string;
}

const InsightArticle = ({ slug }: InsightArticleProps) => {
  const article = articles[slug];
  const relatedSlugs = getRelatedArticles(slug);

  if (!article) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm"
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
        {/* Hero Section */}
        <section className="relative pt-28 lg:pt-36 pb-12 lg:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Back Link */}
            <motion.a
              href="/insights"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">All Insights</span>
            </motion.a>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="max-w-4xl"
            >
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: "hsl(var(--gold))" }}
              >
                {article.category}
              </span>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.15] mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {article.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </motion.header>
          </div>
        </section>

        {/* Featured Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12 mb-16 lg:mb-20"
        >
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
            <img
              src={article.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.section>

        {/* Article Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="container mx-auto px-6 lg:px-12 pb-20"
        >
          <article className="max-w-3xl mx-auto">
            {article.content}
          </article>
        </motion.section>

        {/* Related Articles */}
        <section className="border-t border-border py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-12">
              Continue Reading
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {relatedSlugs.map((relatedSlug) => {
                const relatedArticle = articles[relatedSlug];
                return (
                  <a
                    key={relatedSlug}
                    href={`/insights/${relatedSlug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-5">
                      <img
                        src={relatedArticle.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <span
                      className="inline-block text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                      style={{ color: "hsl(var(--gold))" }}
                    >
                      {relatedArticle.category}
                    </span>

                    <h3 className="font-display text-xl font-semibold text-foreground leading-snug mb-3 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
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
