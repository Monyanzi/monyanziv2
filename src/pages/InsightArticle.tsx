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
  "5-signs-automating-shadow-project": {
    title: "5 Signs You're Automating a Shadow Project",
    category: "AUTOMATION",
    readTime: "4 min read",
    description: "The automation is live, but reality has not changed. Five signals that your project is running parallel to the actual business.",
    image: "/insights/automating-shadow-project.png",
    content: (
      <>
        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Go-Live Date Passed, But the Legacy Process Is Still Operating
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The steering committee signed off. The vendor confirmed deployment. Yet the operations team maintains the same manual checklist they used before, "just in case." The new system exists. The old system persists. You are funding two parallel operations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. Your AI Handles the Easy Cases, But the Exceptions Consume More Labour Than Before
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The pilot shows 80% automation rate. The reality is your staff now manage the AI's exception queue alongside the original workload. The automation shifted the burden to the messy middle—where regulatory risk lives—and made it harder to resolve because the context is now split between two systems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. The Process Map Changes, But the Conversation Does Not
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            You implemented new workflow software. But when you listen to the operations team, they still describe the work in terms of the old steps. "Then I check with Sarah." "Then I wait for the Thursday batch." The language has not shifted. The mental model has not shifted. The work has not shifted.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The Data in the New System Does Not Match the Data in the Business
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The dashboard shows 247 transactions processed. The business knows there are 312. The gap is the shadow pipeline—transactions that bypass the automation because they are too complex, too urgent, or too politically sensitive to fit the new rules.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. The Business Case Assumptions Are Revised Downward Every Quarter
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
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
    image: "/insights/process-maps-lying.png",
    content: (
      <>
        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Map Is Symmetrical, But the Workload Is Not
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Your diagram shows clean handoffs between equal departments. Reality: one team is flooded, another is starving. The map shows geometry; the work shows bottlenecks. The diagram implies capacity equilibrium that does not exist.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. The "Wait" Steps Are Not on the Map
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The diagram shows five steps. It does not show that Step 2 waits three days for a weekly batch run, or that Step 4 waits for someone to return from leave. A map that does not show waiting time is a map of potential, not performance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. Exceptions Are Labelled "Edge Cases" But Happen Daily
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Thirty per cent of your transactions are "exceptions" according to the map. That is not an edge—that is a significant portion of the process. If your map has a happy path and a tiny "exceptions" box, you are mapping fantasy, not operation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. Nobody Can Walk the Map with a Real Transaction
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Ask someone to trace last Tuesday's Invoice #2847 through your flowchart. If they cannot—if they say "well, actually" or "in that case" more than twice—the map does not describe the process. It describes the process the mapper wished existed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. The Map Was Created in a Conference Room, Not at the Gemba
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
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
    image: "/insights/always-done-this-way.png",
    content: (
      <>
        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            1. The Reason for the Process Is a Person Who Left Three Years Ago
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            "Why do we do this?" "Because the previous director insisted on it." They retired in 2022. The constraint they managed may have expired, but the process persists—now encoded in "policy" that nobody dares challenge because the rationale is lost.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            2. New Employees Learn the "Real Way" From Colleagues, Not the Manual
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            The onboarding programme teaches the SOP. But after week one, the new hire's buddy shows them "how we actually do it." If the shadow workflow is the primary curriculum, the official process is ceremonial—and the organisation knows it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            3. Suggesting "This Might Be Outdated" Starts an Argument, Not a Conversation
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Propose that a process needs review. Watch the room. If the response is defensive—if the first instinct is to defend rather than examine—you have found a sacred cow. The process is protected not by logic but by identity.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            4. The "Risk" of Changing Is Cited, But Never Quantified
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            "We cannot change that—it is too risky." What risk? How likely? What is the impact? If the risk of change always outweighs the risk of stagnation, but neither is measured, you are not managing risk. You are managing fear.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            5. The Last "Process Improvement" Added Steps, But Never Removed Them
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed mb-4">
            Process improvement is supposed to simplify. But your history shows only accretion: new checks, new approvals, new reviews. Nothing is ever eliminated. The process is not being optimised—it is being encrusted.
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
