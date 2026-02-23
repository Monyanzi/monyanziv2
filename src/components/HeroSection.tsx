import { ArrowRight, MapPin, Linkedin, Pause, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import heroProfile from "../assets/hero-profile.webp";
import { siteOverviewBriefing } from "@/data/audioBriefings";
import { usePersistentAudioPlayer } from "@/components/audio/usePersistentAudioPlayer";

const heroBackgroundStyle = { background: "hsl(var(--section-bg))" } as const;
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

const formatAudioTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) return "00:00";
  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const {
    canPlay: canPlayProfileAudio,
    isPlaying: isProfilePlaying,
    currentTime: profileCurrentTime,
    duration: profileDuration,
    maxTime: profileMaxTime,
    toggle: handleProfileAudioToggle,
    seek: handleProfileSeek,
  } = usePersistentAudioPlayer(siteOverviewBriefing);
  const profileTimeLabel = profileDuration > 0
    ? `${formatAudioTime(profileCurrentTime)} / ${formatAudioTime(profileDuration)}`
    : siteOverviewBriefing.duration;

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={heroBackgroundStyle}>

        <div className="lg:hidden absolute inset-0 z-0">
          <img
            src={heroProfile}
            alt="Moses Nyanzi, actuarial consultant in Johannesburg"
            loading="eager"
            decoding="async"
            width={800}
            height={1067}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[hsl(40_35%_98%)]" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 1.5 }}
            className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
            style={goldGradientStyle}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 1.5, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full"
            style={forestGradientStyle}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0.01 : 1 }}
            className="absolute inset-0"
            style={dotPatternStyle}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-24">

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
                    <span className="sr-only">, Actuarial Consultant South Africa</span>
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

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.66 }}
                className="pt-1"
              >
                <div className="flex items-center">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-2 py-1.5 border shadow-sm transition-all ${canPlayProfileAudio
                      ? "bg-card/95 border-border hover:border-[hsl(38_82%_50%)]/40 hover:shadow-md"
                      : "bg-muted/70 border-border/60"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={handleProfileAudioToggle}
                      disabled={!canPlayProfileAudio}
                      aria-label="Listen to profile audio overview"
                      className={`w-8 h-8 rounded-full inline-flex items-center justify-center transition-colors shrink-0 ${canPlayProfileAudio ? "text-white" : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      style={canPlayProfileAudio ? iconContainerStyle : undefined}
                    >
                      {isProfilePlaying ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 ml-0.5" />
                      )}
                    </button>

                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-foreground/80 whitespace-nowrap">
                      Listen
                    </span>

                    <div className="h-7 w-[7.5rem] lg:w-[10.5rem] rounded-full bg-muted/60 px-2 inline-flex items-center">
                      <input
                        type="range"
                        min={0}
                        max={profileMaxTime}
                        step={0.01}
                        value={Math.min(profileCurrentTime, profileMaxTime)}
                        onChange={(e) => handleProfileSeek(Number(e.target.value))}
                        disabled={!canPlayProfileAudio}
                        aria-label="Seek profile audio overview"
                        className={`w-full h-1.5 appearance-none rounded-full ${canPlayProfileAudio ? "accent-[hsl(var(--forest))] cursor-pointer" : "accent-muted cursor-not-allowed"
                          }`}
                      />
                    </div>

                    <span className="text-[11px] text-muted-foreground whitespace-nowrap pr-0.5 tabular-nums">
                      {profileTimeLabel}
                    </span>
                  </div>
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={photoContainerStyle}
                >
                  <img
                    src={heroProfile}
                    alt="Moses Nyanzi, actuarial consultant in Johannesburg"
                    loading="eager"
                    decoding="async"
                    width={800}
                    height={1067}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.6 },
            y: { delay: 2, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 hidden lg:block">
            Scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground/50"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>

      </section>

    </>
  );
};

export default HeroSection;
