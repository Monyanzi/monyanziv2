import { Linkedin } from "lucide-react";
import { getEmail } from "@/utils/email";

interface SiteFooterProps {
  className?: string;
}

const SiteFooter = ({ className = "" }: SiteFooterProps) => {
  return (
    <footer className={`pt-10 border-t border-border/50 ${className}`.trim()}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display text-2xl font-semibold text-foreground">
              Moses Nyanzi
            </p>
            <p
              className="text-sm mt-1"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Strategy. Logic. Results.
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-xs">
              Independent consulting for senior leaders who need clarity, speed, and
              results.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
              Credentials
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Associate, Actuarial Society of South Africa</li>
              <li>Executive MBA</li>
              <li>9+ Years Experience</li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/moses-nyanzi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${getEmail()}`}
                className="text-sm text-foreground hover:text-[hsl(var(--terracotta))] transition-colors"
              >
                {getEmail()}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-20 border-t border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Moses Nyanzi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
