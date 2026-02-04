// Article data extracted for reuse and performance
import automateWrongProcessImage from "@/assets/insights/automate-wrong-process.webp";
import automatingShadowProjectImage from "@/assets/insights/automating-shadow-project.webp";
import processMapsLyingImage from "@/assets/insights/process-maps-lying.webp";
import alwaysDoneThisWayImage from "@/assets/insights/always-done-this-way.webp";
import automateWasteImage from "@/assets/insights/automate-waste.webp";
import whyAiProjectFailingImage from "@/assets/insights/why-ai-project-failing.webp";
import aiWarningSignsImage from "@/assets/insights/ai-warning-signs.webp";

export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "why-your-ai-project-is-about-to-fail",
    category: "AI STRATEGY",
    title: "Why Your AI Project Is About to Fail",
    description: "Most AI projects don't fail because the tech is weak. They fail because the business can't absorb them.",
    image: whyAiProjectFailingImage,
  },
  {
    id: "is-your-ai-project-failing-5-warning-signs",
    category: "AI STRATEGY",
    title: "Is Your AI Project Failing? 5 Warning Signs",
    description: "Five clear signals your AI initiative is going nowhere; and what to look for before you spend more.",
    image: aiWarningSignsImage,
  },
  {
    id: "5-signs-automate-wrong-process",
    category: "AUTOMATION",
    title: "5 Signs You're About to Automate the Wrong Process",
    description: "Five diagnostic signals that the process you plan to automate is only the documented version, not the work your people actually do.",
    image: automateWrongProcessImage,
  },
  {
    id: "5-signs-automating-shadow-project",
    category: "AUTOMATION",
    title: "5 Signs You're Automating a Shadow Project",
    description: "The automation is live, but reality has not changed. Five signals that your project is running parallel to the actual business.",
    image: automatingShadowProjectImage,
  },
  {
    id: "5-signs-process-maps-lying",
    category: "PROCESS DESIGN",
    title: "5 Signs Your Process Maps Are Hiding the Real Work",
    description: "Flowcharts capture sequence, not significance. Five signals that your diagrams are fiction.",
    image: processMapsLyingImage,
  },
  {
    id: "5-signs-always-done-this-way",
    category: "ORGANISATIONAL CHANGE",
    title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
    description: "Sacred processes persist long after their rationale expires. Five signals that history is driving your operations.",
    image: alwaysDoneThisWayImage,
  },
  {
    id: "5-signs-automate-waste",
    category: "AUTOMATION",
    title: "5 Signs You Are About to Automate Waste (Not Value)",
    description: "Automation can entrench inefficiency at higher speed. Five signals that you are about to spend money encoding broken processes.",
    image: automateWasteImage,
  },
];

// Extract unique categories
export const categories = [...new Set(articles.map((a) => a.category))];
