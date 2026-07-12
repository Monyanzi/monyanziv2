import { memo, useCallback, useState } from "react";
import { Clock, Link2, Check } from "lucide-react";
import { SITE_URL } from "@/config/site";

interface ArticleCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

// Approximate reading times
const READING_TIMES: Record<string, number> = {
  "the-small-business-ai-toolkit": 12,
  "10-ai-agent-implementation-mistakes-checklist": 10,
  "2026-ai-power-workflow": 8,
  "wrong-question-ai-leader": 9,
  "black-mirror-lessons-ai-leaders": 11,
  "the-automation-trap": 7,
  "why-ai-projects-fail": 6,
  "5-signs-always-done-this-way": 5,
  "12-ai-tools-in-my-tech-stack": 14,
};

// Fallback gradient for missing cover images
const FALLBACK_GRADIENT = "linear-gradient(135deg, hsl(270 50% 35% / 0.12), hsl(150 60% 30% / 0.08))";

// Share buttons — on hover only (opacity-0 group-hover:opacity-100)
const ShareButtons = ({ articleUrl }: { articleUrl: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(articleUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => { /* ignore */ });
  }, [articleUrl]);

  return (
    <div className="absolute right-3 top-3 z-10 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-200 hover:bg-black/50"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Link2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
};

const ArticleCard = memo(({ id, category, title, image, featured = false }: ArticleCardProps) => {
  const articleUrl = `${SITE_URL}/insights/${id}`;
  const readingTime = READING_TIMES[id];

  if (featured) {
    return (
      <article className="group">
        <a href={`/insights/${id}`} className="block transition-all duration-300 active:scale-[0.99]">
          <div className="relative overflow-hidden min-h-[380px] lg:min-h-[440px] flex items-end" style={{ borderRadius: 20 }}>
            {image ? (
              <img
                src={image}
                alt={`${title} cover`}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: FALLBACK_GRADIENT }} />
            )}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
            />
            <ShareButtons articleUrl={articleUrl} />

            <div className="relative z-10 p-8 lg:p-12 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-category !border-white/20 !bg-white/10 !text-white/90 backdrop-blur-md">
                  {category}
                </span>
                <span className="badge-category !border-white/20 !bg-white/10 !text-white/90 backdrop-blur-md">
                  Featured
                </span>
                {readingTime && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                    <Clock className="h-3 w-3" />
                    {readingTime} min read
                  </span>
                )}
              </div>
              <h2 className="text-display-sm mb-3 text-balance text-white line-clamp-2">
                {title}
              </h2>
              <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 transition-all duration-300 group-hover:gap-3">
                Read →
              </div>
            </div>
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className="group h-full">
      <a
        href={`/insights/${id}`}
        className="flex h-full flex-col overflow-hidden transition-all duration-300 active:scale-[0.98]"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 22,
          backdropFilter: "blur(22px) saturate(140%)",
          WebkitBackdropFilter: "blur(22px) saturate(140%)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 24px 60px rgba(91,75,245,0.28), inset 0 1px 0 rgba(255,255,255,0.12)";
          e.currentTarget.style.borderColor = "rgba(139,124,255,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
        }}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`${title} cover`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="h-full w-full" style={{ background: FALLBACK_GRADIENT }} />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,31,0.55), transparent 55%)" }} />
          <span
            className="absolute left-3 top-3 inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase"
            style={{
              letterSpacing: "0.12em",
              borderRadius: 9999,
              background: "rgba(10,10,31,0.55)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#E8E6F5",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {category}
          </span>
          <ShareButtons articleUrl={articleUrl} />
        </div>

        <div className="flex flex-1 flex-col p-5">
          {readingTime && (
            <span className="mb-2.5 inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: "rgba(232,230,245,0.55)" }}>
              <Clock className="h-3 w-3" />
              {readingTime} min read
            </span>
          )}
          <h2 className="mb-4 text-[1rem] font-bold leading-snug tracking-tight flex-1 line-clamp-2" style={{ color: "#F5F3FF" }}>
            {title}
          </h2>
          <div className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 group-hover:gap-2.5" style={{ color: "#B8B2FF" }}>
            Read →
          </div>
        </div>
      </a>
    </article>
  );
});

ArticleCard.displayName = "ArticleCard";
export default ArticleCard;
