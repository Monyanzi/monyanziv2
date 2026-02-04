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
        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            1. The Shadow Excel Is Still Being Updated
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Your team claims they have migrated to the new system</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The critical spreadsheet shows activity from this morning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The documented process lives in the system; the actual process lives in the spreadsheet</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You are about to automate documentation while work continues elsewhere</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            2. Three Departments Describe the Same Process Differently
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Ask Operations, Risk, and Finance to walk through invoice approval</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Three different answers means three negotiated compromises, not one process</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Automating any one version will break the other two</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The shadow workflow will absorb the work</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            3. Nobody Can Explain Why the Approval Step Exists
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>"Who approves this?" "The department lead." "Why?" "They have always done it."</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Authority rests on institutional memory, not documented criteria</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Your automation will encode randomness as structure</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Exceptions will proliferate</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            4. The SOP Has Not Been Updated Since the Last System Migration
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The document references a validation step in a platform you sunset 18 months ago</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The current workaround is known only to legacy staff</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>That workaround is now the actual process</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You are automating archaeology, not operations</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            5. Your ROI Calculation Assumes Zero Exception Handling
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The business case promises 95% straight-through processing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>It does not model what happens when 40% of transactions hit exceptions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Exceptions will not disappear; they will metastasise into a queue requiring three FTEs to clear</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Your efficiency gain will be negative</span>
            </li>
          </ul>
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
        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            1. The Go-Live Date Passed, But the Legacy Process Is Still Operating
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The steering committee signed off; the vendor confirmed deployment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The operations team maintains the same manual checklist "just in case"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The new system exists; the old system persists</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You are funding two parallel operations</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            2. Your AI Handles Easy Cases, But Exceptions Consume More Labour
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The pilot shows 80% automation rate</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Staff now manage the AI's exception queue alongside the original workload</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The automation shifted burden to the messy middle, where regulatory risk lives</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Resolution is harder because context is split between two systems</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            3. The Process Map Changes, But the Conversation Does Not
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You implemented new workflow software</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The operations team still describes work in terms of the old steps</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>"Then I check with Sarah." "Then I wait for the Thursday batch."</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The language has not shifted; the mental model has not shifted; the work has not shifted</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            4. The Data in the New System Does Not Match the Business
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The dashboard shows 247 transactions processed</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The business knows there are 312</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The gap is the shadow pipeline: transactions too complex, too urgent, or too politically sensitive</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>These bypass automation because they do not fit the new rules</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            5. The Business Case Assumptions Are Revised Downward Every Quarter
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>First it was 40% efficiency gain, then 25%, then 15%</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Now the conversation is about "foundational investment for future capabilities"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The shadow project is consuming budget and delivering theatre</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The real work continues in the shadows</span>
            </li>
          </ul>
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
        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            1. The Map Is Symmetrical, But the Workload Is Not
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Your diagram shows clean handoffs between equal departments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Reality: one team is flooded, another is starving</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The map shows geometry; the work shows bottlenecks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The diagram implies capacity equilibrium that does not exist</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            2. The Wait Steps Are Not on the Map
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The diagram shows five steps</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>It does not show that Step 2 waits three days for a weekly batch run</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>It does not show that Step 4 waits for someone to return from leave</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>A map without waiting time is a map of potential, not performance</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            3. Exceptions Are Labelled Edge Cases But Happen Daily
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>30% of your transactions are "exceptions" according to the map</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>That is not an edge; that is a significant portion of the process</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>If your map has a happy path and a tiny "exceptions" box</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You are mapping fantasy, not operation</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            4. Nobody Can Walk the Map with a Real Transaction
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Ask someone to trace last Tuesday's Invoice #2847 through your flowchart</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>If they say "well, actually" or "in that case" more than twice</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The map does not describe the process</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>It describes the process the mapper wished existed</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            5. The Map Was Created in a Conference Room, Not at the Gemba
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The process map was drawn by consultants interviewing managers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The people who do the work were not observed</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Workarounds were not witnessed; shadow workflows were not surfaced</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Toyota's Genchi Genbutsu ("go and see") was ignored</span>
            </li>
          </ul>
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
        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            1. The Reason for the Process Is a Person Who Left Three Years Ago
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>"Why do we do this?" "Because the previous director insisted on it."</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>They retired in 2022</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The constraint they managed may have expired</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The process persists, now encoded in "policy" that nobody dares challenge</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            2. New Employees Learn the Real Way From Colleagues, Not the Manual
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The onboarding programme teaches the SOP</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>After week one, the new hire's buddy shows them "how we actually do it"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The shadow workflow is the primary curriculum</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The official process is ceremonial, and the organisation knows it</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            3. Suggesting "This Might Be Outdated" Starts an Argument
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Propose that a process needs review</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Watch the room: the response is defensive</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The first instinct is to defend rather than examine</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You have found a sacred cow, protected by identity rather than logic</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            4. The Risk of Changing Is Cited, But Never Quantified
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>"We cannot change that; it is too risky."</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>What risk? How likely? What is the impact?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The risk of change always outweighs the risk of stagnation, but neither is measured</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You are not managing risk; you are managing fear</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            5. The Last Process Improvement Added Steps, Never Removed Them
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Process improvement is supposed to simplify</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Your history shows only accretion: new checks, new approvals, new reviews</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Nothing is ever eliminated</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The process is not being optimised; it is being encrusted</span>
            </li>
          </ul>
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
        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            1. You Cannot Explain Why the Process Exists Without Saying Compliance
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Some processes exist solely to create audit trails</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>That is valid, but it changes the automation approach</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>If you are automating "efficiency" but the process exists for "evidence"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You will destroy value whilst optimising cost</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            2. The Automated Version Still Requires the Same Number of People
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The business case promises headcount reduction</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Automation handles the 60% of cases that were already easy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Humans handle the 40% of exceptions that got more complex</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>You have automated the wrong 60%</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            3. You Are Solving for Speed, But the Customer Values Judgement
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Not every process should be "touchless"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Sometimes the manual step builds trust, catches the edge case, or differentiates your service</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Automating for speed when the customer values care</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Is optimising the wrong metric</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            4. The ROI Calculation Ignores the Cost of Rigidity
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Automation makes processes faster and less flexible</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>If your market changes, a manual process adapts in a week</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>An automated process requires Change Requests, testing windows, and regression analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The business case rarely includes the cost of this rigidity</span>
            </li>
          </ul>
        </section>

        <section className="mb-10 lg:mb-14">
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
            5. Nobody Has Asked "What If We Just Stopped Doing This?"
          </h2>
          <ul className="space-y-2 text-foreground/85">
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>The automation question assumes the process must continue</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>Many processes are heritage, not necessity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>"How do we automate this?" should always be preceded by "Should we still be doing this at all?"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[hsl(var(--gold))] mt-1.5">•</span>
              <span>If that second question is never asked, you are automating waste</span>
            </li>
          </ul>
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
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-8 lg:pb-12">
          <div className="container mx-auto px-5 lg:px-12">
            {/* Back Link */}
            <motion.a
              href="/insights"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 lg:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">All Insights</span>
            </motion.a>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="max-w-3xl"
            >
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "hsl(var(--gold))" }}
              >
                {article.category}
              </span>

              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 lg:mb-5">
                {article.title}
              </h1>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 lg:mb-6">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="container mx-auto px-5 lg:px-12 mb-10 lg:mb-14"
        >
          <div className="relative aspect-[2/1] lg:aspect-[21/9] rounded-xl lg:rounded-2xl overflow-hidden bg-muted">
            <img
              src={article.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* Article Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="container mx-auto px-5 lg:px-12 pb-16 lg:pb-20"
        >
          <article className="max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            {article.content}
          </article>
        </motion.section>

        {/* Related Articles */}
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
