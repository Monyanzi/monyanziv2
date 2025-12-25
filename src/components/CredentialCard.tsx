import { motion } from "motion/react";

interface CredentialCardProps {
  metric: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

const CredentialCard = ({ metric, label, sublabel, delay = 0 }: CredentialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.2,
        delay: delay / 1000,
        ease: "easeOut"
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="p-8 lg:p-10 text-center bg-card relative overflow-hidden group cursor-default gradient-border-top will-change-transform hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]"
      style={{
        boxShadow: 'inset 0 0 0 1px hsl(210 20% 90%)'
      }}
    >
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,82%,50%,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      <div className="font-display text-4xl lg:text-5xl font-semibold text-foreground tracking-tight transition-colors duration-200 group-hover:text-[hsl(38,82%,50%)] relative">
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
    </motion.div>
  );
};

export default CredentialCard;
