export interface AudioBriefing {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  duration: string;
  updatedOn: string;
  audioSrc: string;
  isReady: boolean;
}

export const insightsArticlesBriefing: AudioBriefing = {
  id: "insights-briefing",
  shortLabel: "Insights Briefing",
  title: "Articles Audio Overview",
  subtitle: "Top-down audio overview of every current article and how to use each one.",
  duration: "04:46",
  updatedOn: "2026-02-19",
  audioSrc: "/audio/articles-briefing.m4a",
  isReady: true,
};

export const siteOverviewBriefing: AudioBriefing = {
  id: "site-overview-briefing",
  shortLabel: "Site Overview",
  title: "Profile Audio Overview",
  subtitle: "A fast orientation to what is on this site and where to start.",
  duration: "04:14",
  updatedOn: "2026-02-19",
  audioSrc: "/audio/profile-audio-overview.m4a",
  isReady: true,
};
