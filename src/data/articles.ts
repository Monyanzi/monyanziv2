import automationTrapHero from "@/assets/insights/automation-trap-hero.webp";
import phoneboothImage from "@/assets/insights/phonebooth.webp";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.webp";

export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "the-automation-trap",
    category: "AUTOMATION & PROCESS",
    title: "The Automation Trap: 12 Signs You're About to Automate the Wrong Thing",
    description: "Automation promises speed, but speed in the wrong direction is expensive failure. 12 warning signs to spot before you waste the budget.",
    image: automationTrapHero,
  },
  {
    id: "why-ai-projects-fail",
    category: "AI STRATEGY",
    title: "Why Your AI Project Is Failing: 8 Warning Signs",
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
