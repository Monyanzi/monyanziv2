import { useState } from "react";
import { ArrowRight, MapPin, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import CredentialCard from "./CredentialCard";
import ProfilePhoto from "./ProfilePhoto";
import DiagnosticFlow from "./DiagnosticFlow";
import heroProfile from "../assets/hero-profile.jpg";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-background overflow-hidden">
        {/* Organic gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating organic shapes */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08] animate-float-slow"
            style={{ background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.06] animate-float-slower"
            style={{ background: 'radial-gradient(circle, hsl(160 45% 35%) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04] animate-float-medium"
            style={{ background: 'radial-gradient(circle, hsl(38 60% 60%) 0%, transparent 70%)' }}
          />
          {/* Subtle dot texture */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(hsl(160 45% 20%) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-20 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-stretch">
            {/* Left content */}
            <div className="space-y-8 flex flex-col justify-center">
              {/* Positioning statement */}
              <div className="space-y-6 animate-fade-in">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground/80">
                  Strategy · Logic · Results
                </p>

                <div className="flex items-baseline gap-5">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]">
                    Moses<br />
                    Nyanzi
                  </h1>
                  <span className="text-sm text-muted-foreground font-medium tracking-wide">
                    Actuary | MBA
                  </span>
                </div>

                <div className="w-16 h-[1px] bg-gradient-to-r from-foreground/30 to-transparent" />
              </div>

              {/* Mobile Profile Photo - shown only on small screens, full image */}
              <div className="lg:hidden flex justify-center animate-fade-in my-4" style={{ animationDelay: '150ms' }}>
                <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img
                    src={heroProfile}
                    alt="Moses Nyanzi"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Professional title + value statement */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-light">
                  For senior leaders who need clarity on complex decisions, fast.
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed max-w-md">
                  I build the models, run the analysis, and translate it into strategy.
                  From raw data to board-ready recommendations, delivered by one advisor.
                </p>
              </div>

              {/* Problem recognition - who this is for */}
              <div
                className="animate-fade-in rounded-xl p-7 relative overflow-hidden border-l-[3px] border-l-[hsl(38,82%,50%)]"
                style={{
                  animationDelay: '150ms',
                  background: 'linear-gradient(135deg, hsl(210 20% 96%) 0%, hsl(40 35% 98%) 100%)'
                }}
              >
                {/* Subtle dot texture */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(hsl(210 55% 12%) 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5 relative">
                  I work with leaders facing
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground relative">
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-foreground transition-colors duration-300">Strategic decisions that need rigorous analysis before executives commit</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-foreground transition-colors duration-300">Operations drowning in manual processes that competitors have automated</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-[hsl(38,82%,50%)] mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-foreground transition-colors duration-300">M&A or capital decisions where missing something means overpaying</span>
                  </li>
                </ul>
              </div>

              {/* Location & Availability */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>Johannesburg</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[hsl(20,55%,53%)] hover:text-[hsl(20,55%,45%)] transition-colors duration-200 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="relative">
                    LinkedIn
                    <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[hsl(20,55%,53%)] opacity-40 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5 pt-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative inline-flex items-center gap-3 bg-[hsl(38,82%,50%)] text-[hsl(210,55%,12%)] font-semibold tracking-wide uppercase text-xs px-10 py-4 rounded-full hover:bg-[hsl(38,82%,55%)] hover:shadow-[0_20px_40px_-12px_hsl(38,82%,50%,0.4)] group overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative">Let's Talk</span>
                  <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <a
                  href="#proof"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 py-3 group"
                >
                  <span className="relative">
                    See results I've delivered
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(38,82%,50%)] group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Right content - Profile Photo */}
            <div className="hidden lg:block h-full w-full">
              <ProfilePhoto />
            </div>
          </div>

          {/* Credentials Section */}
          <div className="mt-20 lg:mt-28">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8 text-center">
              Areas of Focus
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              <CredentialCard
                metric="Strategy"
                label="Business & Growth"
                sublabel="Blue Ocean, M&A, Innovation"
                delay={100}
              />
              <CredentialCard
                metric="Operations"
                label="Efficiency & Automation"
                sublabel="Process Optimisation"
                delay={200}
              />
              <CredentialCard
                metric="Risk"
                label="Capital & Due Diligence"
                sublabel="Treaty & M&A Analysis"
                delay={300}
              />
              <CredentialCard
                metric="Analytics"
                label="Data-Driven Decisions"
                sublabel="Modelling & Insights"
                delay={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Flow */}
      <DiagnosticFlow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
