import { Linkedin } from "lucide-react";
import { getEmail } from "@/utils/email";

interface SiteFooterProps {
  className?: string;
}

const SiteFooter = ({ className = "" }: SiteFooterProps) => {
  return (
    <footer className={`pt-12 border-t border-border/40 ${className}`.trim()}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-display text-xl font-semibold text-foreground tracking-tight">
              Moses Nyanzi
            </p>
            <p className="text-sm mt-1.5 font-medium text-accent">
              Strategy. Logic. Results.
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-xs leading-relaxed text-justify">
              Independent consulting for senior leaders who need clarity, speed, and
              results.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Credentials
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Associate, Actuarial Society of South Africa</li>
              <li>Executive MBA, INSEAD</li>
              <li>9+ Years Experience</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
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
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {getEmail()}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-20 border-t border-border/30">
          <p className="text-[11px] text-muted-foreground text-center tracking-wide">
            © {new Date().getFullYear()} Moses Nyanzi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
