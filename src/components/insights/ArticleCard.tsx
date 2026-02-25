import { memo, useCallback, useState } from "react";
import { ArrowRight, Linkedin, Link2, Check } from "lucide-react";
import { SITE_URL } from "@/config/site";

interface ArticleCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

const ShareOverlay = ({ articleUrl }: { articleUrl: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(articleUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => { /* ignore */ });
  }, [articleUrl]);

  const handleLinkedIn = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [articleUrl]);

  return (
    <div className="absolute top-3 right-3 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button
        onClick={handleLinkedIn}
        aria-label="Share on LinkedIn"
        className="w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-accent transition-all shadow-subtle"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-accent transition-all shadow-subtle"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-[hsl(var(--forest))]" /> : <Link2 className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};

const ArticleCard = memo(({ id, category, title, description, image, featured = false }: ArticleCardProps) => {
  const articleUrl = `${SITE_URL}/insights/${id}`;

  if (featured) {
    return (
      <article className="group">
        <a href={`/insights/${id}`} className="block">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-card">
              <img
                src={image}
                alt={`${title} cover image`}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <ShareOverlay articleUrl={articleUrl} />
            </div>

            <div className="lg:py-6">
              <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 text-accent">
                {category}
              </span>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-[1.15] mb-4 group-hover:text-accent transition-colors duration-300">
                {title}
              </h2>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                {description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                Read article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className="group">
      <a href={`/insights/${id}`} className="block">
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4 shadow-subtle group-hover:shadow-card transition-shadow duration-300">
          <img
            src={image}
            alt={`${title} cover image`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <ShareOverlay articleUrl={articleUrl} />
        </div>

        <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 text-accent">
          {category}
        </span>

        <h2 className="font-display text-lg lg:text-xl font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 text-justify">
          {description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
          Read article
          <ArrowRight className="w-4 h-4" />
        </span>
      </a>
    </article>
  );
});

ArticleCard.displayName = "ArticleCard";

export default ArticleCard;
