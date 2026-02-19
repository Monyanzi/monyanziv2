import automationTrapHero from "@/assets/insights/automation-trap-hero.webp";
import phoneboothImage from "@/assets/insights/phonebooth.webp";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.webp";
import aiMistakesChecklistHero from "@/assets/insights/10-ai-agent-implementation-mistakes-checklist.webp";
import aiPowerWorkflowHero from "@/assets/insights/2026-ai-power-workflow.webp";
import blackMirrorLessonsHero from "@/assets/insights/black-mirror-lessons-ai-leaders.webp";
import wrongQuestionHero from "@/assets/insights/wrong-question-ai-leader.webp";
import techStackHero from "@/assets/insights/tech-stack/tech-stack-hero.jpg";

export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "10-ai-agent-implementation-mistakes-checklist",
    category: "AI STRATEGY",
    title: "10 AI Agent Implementation Mistakes Leaders Make: A Practical Checklist",
    description: "A field-tested checklist to avoid the most expensive AI agent rollout mistakes across scope, data, risk, governance, and adoption.",
    image: aiMistakesChecklistHero,
  },
  {
    id: "wrong-question-ai-leader",
    category: "AI STRATEGY",
    title: "9 Reasons \"What Can AI Do for Me?\" Is the Wrong Question for Leaders",
    description: "A practical guide with 9 better questions that turn AI talk into clear ownership and measurable outcomes.",
    image: wrongQuestionHero,
  },
  {
    id: "black-mirror-lessons-ai-leaders",
    category: "AI & SOCIETY",
    title: "10 Black Mirror AI Lessons Every Business Leader Should Know",
    description: "A practical watchlist linking 10 Black Mirror episodes to real AI governance, risk, and strategy decisions.",
    image: blackMirrorLessonsHero,
  },
  {
    id: "2026-ai-power-workflow",
    category: "AI & TECHNOLOGY",
    title: "3-Step 2026 AI Power Workflow: From Rough Idea to Studio-Ready Content",
    description: "One workflow to rule them all. How to combine OpenAI's Prompt Optimizer, Deep Research (Perplexity/Gemini/ChatGPT), and NotebookLM into a single insight engine.",
    image: aiPowerWorkflowHero,
  },
  {
    id: "12-ai-tools-in-my-tech-stack",
    category: "AI & TECHNOLOGY",
    title: "12 AI Tools for Productivity in My 2026 Tech Stack",
    description: "My practical list of 12 AI tools for productivity in 2026, covering chatbots, coding agents, and developer platforms I use in real workflows.",
    image: techStackHero,
  },
  {
    id: "the-automation-trap",
    category: "AUTOMATION & PROCESS",
    title: "12 Signs You're About to Automate the Wrong Thing: The Automation Trap",
    description: "Automation promises speed, but speed in the wrong direction is expensive failure. 12 warning signs to spot before you waste the budget.",
    image: automationTrapHero,
  },
  {
    id: "why-ai-projects-fail",
    category: "AI STRATEGY",
    title: "8 Warning Signs Your AI Project Is Failing",
    description: "AI projects do not crash. They fade quietly while everyone stays busy. 8 signs your project is drifting.",
    image: aiWarningSignsHero,
  },
  {
    id: "5-signs-always-done-this-way",
    category: "ORGANISATIONAL CHANGE",
    title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
    description: "Processes outlive their purpose. 5 signals that history, not logic, is running your operations.",
    image: phoneboothImage,
  },
];

export const categories = [...new Set(articles.map((a) => a.category))];
