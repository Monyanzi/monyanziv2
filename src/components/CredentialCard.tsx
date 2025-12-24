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
      className={`p-8 lg:p-10 text-center border border-border bg-card transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="font-display text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
        {metric}
      </div>
      <div className="mt-3 text-sm font-medium text-foreground tracking-wide uppercase">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-xs text-muted-foreground">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export default CredentialCard;
