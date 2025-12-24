import { useEffect, useState } from "react";

interface CredentialCardProps {
  metric: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

const CredentialCard = ({ metric, label, sublabel, delay = 0 }: CredentialCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`p-8 lg:p-10 text-center bg-card relative overflow-hidden group cursor-default transition-all duration-500 ease-out gradient-border-top ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      style={{
        boxShadow: 'inset 0 0 0 1px hsl(210 20% 90%)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'inset 0 0 0 1px hsl(38 82% 50% / 0.3), 0 8px 24px -8px hsl(210 55% 12% / 0.08)';
        e.currentTarget.style.transform = 'translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'inset 0 0 0 1px hsl(210 20% 90%)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,82%,50%,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="font-display text-4xl lg:text-5xl font-semibold text-foreground tracking-tight transition-colors duration-500 group-hover:text-[hsl(38,82%,50%)] relative">
        {metric}
      </div>
      <div className="mt-4 text-sm font-medium text-foreground tracking-[0.15em] uppercase relative">
        {label}
      </div>
      {sublabel && (
        <div className="mt-2 text-xs text-muted-foreground font-light tracking-wide relative">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export default CredentialCard;

