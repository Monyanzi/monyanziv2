import { memo } from "react";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

const ArticleCard = memo(({ id, category, title, description, image, featured = false }: ArticleCardProps) => {
  if (featured) {
    return (
      <article className="group">
        <a href={`/insights/${id}`} className="block">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <img
                src={image}
                alt=""
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="lg:py-6">
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "hsl(var(--gold))" }}
              >
                {category}
              </span>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                {title}
              </h2>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 text-justify">
                {description}
              </p>

              <span
                className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                style={{ color: "hsl(var(--gold))" }}
              >
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
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted mb-4">
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <span
          className="inline-block text-xs font-semibold tracking-[0.15em] uppercase mb-2"
          style={{ color: "hsl(var(--gold))" }}
        >
          {category}
        </span>

        <h2 className="font-display text-lg lg:text-xl font-semibold text-foreground leading-snug mb-3 group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 text-justify">
          {description}
        </p>

        <span
          className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
          style={{ color: "hsl(var(--gold))" }}
        >
          Read article
          <ArrowRight className="w-4 h-4" />
        </span>
      </a>
    </article>
  );
});

ArticleCard.displayName = "ArticleCard";

export default ArticleCard;
