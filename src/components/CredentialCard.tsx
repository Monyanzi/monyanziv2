import { cn } from "@/lib/utils";

interface CredentialCardProps {
  metric: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

const CredentialCard = ({ metric, label, sublabel, delay = 0 }: CredentialCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card border border-border/60 p-8 lg:p-10 text-center transition-all duration-500 hover:border-border hover:shadow-lg opacity-0"
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`
      }}
    >
      {/* Subtle hover accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      
      <div className="font-display text-4xl lg:text-5xl font-semibold text-foreground tracking-tight transition-transform duration-300 group-hover:scale-[1.02]">
        {metric}
      </div>
      <div className="mt-4 text-xs font-medium text-foreground tracking-[0.15em] uppercase">
        {label}
      </div>
      {sublabel && (
        <div className="mt-2 text-xs text-muted-foreground font-light">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export default CredentialCard;
