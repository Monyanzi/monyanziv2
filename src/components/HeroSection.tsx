import { ArrowRight, MapPin, Linkedin, TrendingUp, Settings, Search, Users } from "lucide-react";
import { motion } from "motion/react";
import heroProfile from "../assets/hero-profile.webp";
import { springBounceConfig } from "../utils/useAdvancedScroll";

// Static data extracted to module scope - prevents recreation on every render
const coreExpertise = [
  { icon: "settings", title: "Strategic Analysis", subtitle: "& Modeling" },
  { icon: "trending", title: "Process", subtitle: "Optimisation" },
  { icon: "search", title: "M&A Due", subtitle: "Diligence" },
] as const;

// Icon lookup map - stable references
const IconMap = {
  settings: Settings,
  trending: TrendingUp,
  search: Search,
} as const;

// Pre-computed style objects - prevent recreation on every render
const heroBackgroundStyle = { background: "hsl(40 35% 98%)" } as const;
const goldGradientStyle = {
  background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)'
} as const;
const forestGradientStyle = {
  background: 'radial-gradient(circle, hsl(140 18% 40%) 0%, transparent 70%)'
} as const;
const dotPatternStyle = {
  backgroundImage: `radial-gradient(hsl(210 55% 25%) 1px, transparent 1px)`,
  backgroundSize: '40px 40px'
} as const;
const iconContainerStyle = {
  background: "linear-gradient(135deg, hsl(38 82% 50%), hsl(38 75% 45%))",
  color: "white"
} as const;
const ctaButtonStyle = {
  background: "linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))",
} as const;
const photoContainerStyle = { aspectRatio: "3/4" } as const;
const floatingBadgeStyle = {
  background: "linear-gradient(135deg, hsl(var(--forest)), hsl(140 18% 35%))",
  boxShadow: "0 8px 32px -8px hsl(140 18% 30% / 0.5)"
} as const;
const yearsBadgeStyle = {
  background: "hsl(38 82% 50%)",
  color: "hsl(210 55% 15%)",
  boxShadow: "0 4px 20px hsl(38 82% 50% / 0.4)"
} as const;

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={heroBackgroundStyle}>

        <div className="lg:hidden absolute inset-0 z-0">
          <img
            src={heroProfile}
            alt="Moses Nyanzi"
            className="w-full h-full object-cover object-top"
          />
          {/* Enhanced gradient overlay for better text contrast while preserving face visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[hsl(40_35%_98%)]" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
            style={goldGradientStyle}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full"
            style={forestGradientStyle}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0"
            style={dotPatternStyle}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-24">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

              <div className="space-y-2">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:text-foreground tracking-tight"
                  >
                    Moses<br className="hidden sm:block" /> Nyanzi
                  </motion.h1>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-medium text-[hsl(38_82%_50%)] whitespace-nowrap"
                  >
                    Actuary | INSEAD MBA
                  </motion.span>
                </div>
              </div>


              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-white/90 lg:text-muted-foreground max-w-md leading-relaxed text-justify"
              >
                Helping senior leaders get clarity on complex decisions, quickly.
              </motion.p>

              {/* Core Expertise Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 lg:text-muted-foreground">
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-3">
                  {coreExpertise.map((item, i) => {
                    const Icon = IconMap[item.icon];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-border hover:border-[hsl(38_82%_50%)]/40 hover:shadow-md transition-all cursor-default group"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={iconContainerStyle}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground leading-tight">{item.title}</p>
                          <p className="text-muted-foreground text-xs">{item.subtitle}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center gap-4 text-sm text-white/70 lg:text-muted-foreground"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Johannesburg</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[hsl(38_82%_50%)] hover:text-[hsl(38_82%_40%)] transition-colors underline underline-offset-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide text-white shadow-lg hover:shadow-xl transition-shadow"
                  style={ctaButtonStyle}
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <a
                  href="#proof"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[hsl(38_82%_50%)] transition-colors"
                >
                  See results I've delivered
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Photo container */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={photoContainerStyle}
                >
                  <img
                    src={heroProfile}
                    alt="Moses Nyanzi"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ ...springBounceConfig, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl flex items-center justify-center"
                  style={floatingBadgeStyle}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ ...springBounceConfig, delay: 1.2 }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-semibold"
                  style={yearsBadgeStyle}
                >
                  9+ Years
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>


      </section>

    </>
  );
};

export default HeroSection;
