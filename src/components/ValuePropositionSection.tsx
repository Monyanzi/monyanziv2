import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useScrollColorShift, scrollAnimationStyles } from "../utils/useScrollColorShift";
import { useSVGDraw } from "../utils/useAdvancedScroll";

const dataPoints = [
  [30, 85], [45, 78], [55, 70], [65, 62], [80, 55],
  [95, 48], [110, 42], [125, 38], [140, 32], [155, 28],
  [38, 90], [52, 72], [70, 58], [88, 50], [102, 44],
  [118, 36], [135, 34], [150, 30], [168, 25], [180, 22],
] as const;

const dataCellOpacities = [0.28, 0.52, 0.36, 0.44, 0.32, 0.5, 0.4, 0.3, 0.46] as const;

const ValuePropositionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // SVG drawing animations
  const regressionDraw = useSVGDraw({ threshold: 0.5, duration: 1500 });
  const distributionDraw = useSVGDraw({ threshold: 0.5, duration: 1500, delay: 200 });

  // GTA 6-inspired scroll color shift for the heading
  const headingColor = useScrollColorShift(sectionRef, {
    start: "hsl(210 55% 25%)",      // Navy - matches site theme
    mid: "hsl(38 82% 50%)",          // Gold - accent color
    end: "hsl(20 55% 53%)",          // Terracotta - secondary accent
  });

  // Color shift for subtitle
  const subtitleColor = useScrollColorShift(sectionRef, {
    start: "hsl(20 55% 53%)",
    mid: "hsl(38 82% 55%)",
    end: "hsl(20 55% 53%)",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "hsl(40 35% 98%)" }}>

      <motion.div
        style={{ y: gradientY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative">

        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4 inline-block"
            style={scrollAnimationStyles.colorShift(subtitleColor)}
          >
            Where Clients Bring Me In
          </p>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
            style={scrollAnimationStyles.colorShift(headingColor)}
          >
            Problems I Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complex challenges that require analytical precision and strategic clarity.
          </p>
        </div>

        {/* Visual-first cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Card 1: Pattern Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
          >
            {/* Visual area */}
            <div className="h-56 p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(140 18% 30%) 100%)" }}>

              <svg
                ref={regressionDraw.ref as React.RefObject<SVGSVGElement>}
                className="w-full h-full"
                viewBox="0 0 200 120"
              >

                {[20, 40, 60, 80, 100].map(y => (
                  <line key={y} x1="20" y1={y} x2="190" y2={y} stroke="white" strokeOpacity="0.08" />
                ))}
                {[40, 80, 120, 160].map(x => (
                  <line key={x} x1={x} y1="10" x2={x} y2="110" stroke="white" strokeOpacity="0.08" />
                ))}

                {/* Scattered data points - Staggered fade in */}
                {dataPoints.map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="hsl(38 82% 50%)"
                    fillOpacity="0.8"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={regressionDraw.isInView ? { scale: 1, opacity: 0.8 } : {}}
                    transition={{ delay: 0.2 + (i % 8) * 0.06, duration: 0.4 }}
                  />
                ))}

                {/* Regression curve - Animated draw */}
                <path
                  d="M 25 92 Q 60 65, 100 45 T 185 20"
                  fill="none"
                  stroke="hsl(140 18% 55%)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - regressionDraw.progress}
                />

                {/* Axis labels */}
                <text x="105" y="118" fill="white" fillOpacity="0.4" fontSize="8" textAnchor="middle">complexity</text>
              </svg>

              {/* Insight badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ background: "hsl(var(--forest))" }}
              >
                Pattern Found
              </div>
            </div>


            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Find the signal in the noise
              </h3>
              <p className="text-sm text-muted-foreground">
                M&A Due Diligence • Equity Valuation • Capital Allocation
              </p>
            </div>
          </motion.div>

          {/* Card 2: Risk Quantification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
          >
            <div className="h-56 p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(210 45% 55%) 0%, hsl(210 45% 45%) 100%)" }}>
              {/* Distribution visual */}
              <svg
                ref={distributionDraw.ref as React.RefObject<SVGSVGElement>}
                className="w-full h-full"
                viewBox="0 0 200 120"
              >

                <defs>
                  <linearGradient id="distGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(38 82% 50%)" />
                    <stop offset="100%" stopColor="hsl(38 82% 50%)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M 20 100 Q 50 100, 70 80 Q 90 40, 100 25 Q 110 40, 130 80 Q 150 100, 180 100 L 180 100 L 20 100 Z"
                  fill="url(#distGradient)"
                  fillOpacity="0.3"
                  initial={{ opacity: 0 }}
                  animate={distributionDraw.isInView ? { opacity: 0.3 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Distribution curve line - Animated draw */}
                <path
                  d="M 20 100 Q 50 100, 70 80 Q 90 40, 100 25 Q 110 40, 130 80 Q 150 100, 180 100"
                  fill="none"
                  stroke="hsl(38 82% 50%)"
                  strokeWidth="2"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - distributionDraw.progress}
                />

                {/* Confidence interval markers */}
                <line x1="60" y1="20" x2="60" y2="105" stroke="hsl(140 18% 55%)" strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="140" y1="20" x2="140" y2="105" stroke="hsl(140 18% 55%)" strokeWidth="1.5" strokeDasharray="4 2" />


                <line x1="100" y1="20" x2="100" y2="105" stroke="white" strokeWidth="2" />


                <text x="60" y="115" fill="hsl(140 18% 55%)" fontSize="7" textAnchor="middle">P5</text>
                <text x="100" y="115" fill="white" fontSize="7" textAnchor="middle">μ</text>
                <text x="140" y="115" fill="hsl(140 18% 55%)" fontSize="7" textAnchor="middle">P95</text>
              </svg>

              {/* Insight badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
              >
                90% Confidence
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Quantify the uncertainty
              </h3>
              <p className="text-sm text-muted-foreground">
                Scenario Modelling • Stress Testing • Portfolio Optimisation
              </p>
            </div>
          </motion.div>

          {/* Card 3: Data to Decision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
          >
            <div className="h-56 p-6 relative overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(210 55% 20%) 100%)" }}>
              {/* Data transformation pipeline */}
              <div className="flex items-center gap-3">
                {/* Raw data */}
                <motion.div
                  className="relative"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { y: [0, -2, 0] }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                    <div className="grid grid-cols-3 gap-0.5">
                      {dataCellOpacities.map((opacity, i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-white/30 rounded-sm"
                          initial={{ opacity: 0 }}
                          animate={
                            prefersReducedMotion
                              ? { opacity }
                              : { opacity: [opacity * 0.45, opacity, opacity * 0.65] }
                          }
                          transition={{
                            duration: 1.8,
                            delay: i * 0.09,
                            repeat: prefersReducedMotion ? 0 : Infinity,
                            repeatType: "mirror",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/50">raw</span>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div
                  className="w-8 h-0.5"
                  style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.3), hsl(var(--forest)))" }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { opacity: [0.4, 1, 0.4], scaleX: [0.85, 1, 0.85] }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                  }
                />

                {/* Process */}
                <motion.div
                  className="relative"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { y: [0, -3, 0], rotate: [0, 1.5, 0] }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }
                  }
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center border border-white/20" style={{ background: "hsl(var(--forest))" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/50">model</span>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                  className="w-8 h-0.5"
                  style={{ background: "linear-gradient(90deg, hsl(var(--forest)), hsl(var(--gold)))" }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { opacity: [0.45, 1, 0.45], scaleX: [0.85, 1, 0.85] }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.25 }
                  }
                />

                {/* Output */}
                <div className="relative">
                  <motion.div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
                      boxShadow: "0 0 20px hsl(38 82% 50% / 0.3)"
                    }}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                          scale: [1, 1.06, 1],
                          boxShadow: [
                            "0 0 16px hsl(38 82% 50% / 0.22)",
                            "0 0 24px hsl(38 82% 50% / 0.4)",
                            "0 0 16px hsl(38 82% 50% / 0.22)",
                          ],
                        }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }
                    }
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20L9 14L13 18L21 10" stroke="hsl(var(--navy))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 10H21V14" stroke="hsl(var(--navy))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium" style={{ color: "hsl(var(--gold))" }}>insight</span>
                </div>
              </div>

              {/* Insight badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ background: "hsl(var(--terracotta))" }}
              >
                Actionable
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                From noise to decision
              </h3>
              <p className="text-sm text-muted-foreground">
                Equity Analysis • Derivative Valuation • Strategic Pricing
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
