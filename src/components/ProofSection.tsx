import { motion } from "motion/react";
import { useRef } from "react";
import { useScrollColorShift, useScrollPulse, scrollAnimationStyles } from "../utils/useScrollColorShift";
import { useSVGDraw, springBounceConfig } from "../utils/useAdvancedScroll";

const ProofSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const stat1Ref = useRef<HTMLDivElement>(null);
    const stat2Ref = useRef<HTMLDivElement>(null);
    const stat3Ref = useRef<HTMLDivElement>(null);

    // GTA 6-style dramatic color shift for the heading
    const headingColor = useScrollColorShift(sectionRef, {
        start: "hsl(20 55% 53%)",     // Terracotta - starting dramatic
        mid: "hsl(38 82% 50%)",        // Gold - accent pop
        end: "hsl(210 55% 25%)",       // Navy - settled
    });

    // Color shift for subtitle
    const subtitleColor = useScrollColorShift(sectionRef, {
        start: "hsl(20 55% 53%)",
        mid: "hsl(38 82% 55%)",
        end: "hsl(20 55% 53%)",
    });

    // Pulsing effects for stat badges
    const pulse1 = useScrollPulse(stat1Ref);
    const pulse2 = useScrollPulse(stat2Ref);
    const pulse3 = useScrollPulse(stat3Ref);

    // SVG drawing animation for speedometer
    const speedometerDraw = useSVGDraw({ threshold: 0.3, duration: 1200, delay: 200 });

    return (
        <section ref={sectionRef} id="proof" className="pt-5 lg:pt-8 pb-28 overflow-hidden" style={{ background: "hsl(40 35% 98%)" }}>
            <div className="container mx-auto px-6 lg:px-12">

                <div className="text-center mb-16">
                    <p
                        className="text-xs font-medium tracking-[0.2em] uppercase mb-4 mx-auto w-fit"
                        style={scrollAnimationStyles.colorShift(subtitleColor)}
                    >
                        Why Clients Trust My Judgement
                    </p>
                    <h2
                        className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-6"
                        style={scrollAnimationStyles.colorShift(headingColor)}
                    >
                        Results I've Delivered
                    </h2>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--terracotta))] to-transparent mx-auto" />
                </div>

                {/* Achievement Cards - Top Row with enhanced stagger */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                    {/* 80% Faster - with SVG drawing animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group rounded-2xl border bg-card border-border overflow-hidden gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
                    >
                        <div className="h-44 p-6 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(140 18% 30%) 100%)" }}>
                            {/* Speedometer gauge with drawing animation */}
                            <svg
                                ref={speedometerDraw.ref as React.RefObject<SVGSVGElement>}
                                className="w-32 h-20"
                                viewBox="0 0 120 70"
                            >
                                {/* Background arc (static) */}
                                <path
                                    d="M 10 65 A 50 50 0 0 1 110 65"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.1"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />

                                <defs>
                                    <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(140 18% 50%)" />
                                        <stop offset="100%" stopColor="hsl(38 82% 50%)" />
                                    </linearGradient>
                                </defs>

                                {/* Animated arc - draws on scroll */}
                                <path
                                    d="M 10 65 A 50 50 0 0 1 110 65"
                                    fill="none"
                                    stroke="url(#speedGrad)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    pathLength="1"
                                    strokeDasharray="1"
                                    strokeDashoffset={1 - (speedometerDraw.progress * 0.8)}
                                />

                                {/* Animated needle - rotates with progress */}
                                <line
                                    x1="60" y1="65" x2="60" y2="25"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    style={{
                                        transform: `rotate(${-60 + speedometerDraw.progress * 120}deg)`,
                                        transformOrigin: "60px 65px",
                                        transition: "transform 0.1s ease-out"
                                    }}
                                />

                                <circle cx="60" cy="65" r="4" fill="white" />
                            </svg>


                            {/* Spring bounce stat badge */}
                            <motion.div
                                ref={stat1Ref}
                                className="absolute bottom-4 right-4 text-right rounded-lg px-2 py-1"
                                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={springBounceConfig}
                                style={{
                                    ...scrollAnimationStyles.pulseGlow(pulse1.isPulsing, pulse1.pulseIntensity, "hsl(38 82% 50% / 0.5)"),
                                }}
                            >
                                <span className="text-3xl font-bold" style={{ color: "hsl(var(--gold))" }}>80%</span>
                                <span className="block text-xs text-white/50">faster</span>
                            </motion.div>
                        </div>

                        <div className="p-5">
                            <p className="text-sm text-foreground font-medium mb-1">
                                Portfolio analytics migration
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Excel → SQL & Power BI • Major insurance group
                            </p>
                        </div>
                    </motion.div>

                    {/* 6 Months -> 24 Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group rounded-2xl border bg-card border-border overflow-hidden gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
                    >
                        <div className="h-44 p-6 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(210 55% 20%) 100%)" }}>
                            <div className="flex items-center gap-4">
                                {/* Before: Multiple calendar pages */}
                                <div className="relative w-16 h-16">

                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="absolute w-10 h-12 rounded border border-white/20"
                                            style={{
                                                left: i * 3,
                                                top: i * 2,
                                                zIndex: 5 - i,
                                                background: `hsl(140 18% ${45 + i * 5}%)`,
                                                opacity: 0.15 + (5 - i) * 0.15
                                            }}
                                        />
                                    ))}
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap">6 months</span>
                                </div>


                                <div
                                    className="text-2xl"
                                    style={{ color: "hsl(var(--gold))" }}
                                >
                                    →
                                </div>

                                {/* After: Spring bounce glowing circle */}
                                <motion.div
                                    ref={stat2Ref}
                                    className="relative"
                                    initial={{ scale: 0.5, opacity: 0, rotate: 15 }}
                                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ ...springBounceConfig, delay: 0.3 }}
                                    style={scrollAnimationStyles.pulseGlow(pulse2.isPulsing, pulse2.pulseIntensity, "hsl(38 82% 50% / 0.4)")}
                                >
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
                                            color: "hsl(var(--navy))",
                                            boxShadow: "0 0 30px hsl(38 82% 50% / 0.4)"
                                        }}
                                    >
                                        24h
                                    </div>
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap font-medium" style={{ color: "hsl(var(--gold))" }}>real-time</span>
                                </motion.div>
                            </div>
                        </div>

                        <div className="p-5">
                            <p className="text-sm text-foreground font-medium mb-1">
                                Pricing platform rollout
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Real-time rate deployment • Leading insurer
                            </p>
                        </div>
                    </motion.div>

                    {/* $100M+ Managed */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.24 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group rounded-2xl border bg-card border-border overflow-hidden gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
                    >
                        <div className="h-44 p-4 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(140 18% 30%) 100%)" }}>
                            {/* Treemap */}
                            <div className="grid grid-cols-4 grid-rows-3 gap-1 w-full h-full max-w-[180px]">
                                {[
                                    { span: "col-span-2 row-span-2", color: "hsl(var(--forest))", label: "Property" },
                                    { span: "col-span-2 row-span-1", color: "hsl(var(--navy-rich))", label: "Motor" },
                                    { span: "col-span-1 row-span-1", color: "hsl(var(--gold))", label: "" },
                                    { span: "col-span-1 row-span-1", color: "hsl(var(--terracotta))", label: "" },
                                    { span: "col-span-2 row-span-1", color: "hsl(210 35% 45%)", label: "Liability" },
                                    { span: "col-span-2 row-span-1", color: "hsl(var(--forest-light))", label: "Other" },
                                ].map((block, i) => (
                                    <div
                                        key={i}
                                        className={`${block.span} rounded-md flex items-center justify-center`}
                                        style={{ background: block.color }}
                                    >
                                        {block.label && (
                                            <span className="text-[9px] text-white/90 font-medium">{block.label}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <motion.div
                                ref={stat3Ref}
                                className="absolute top-3 right-3 px-2 py-1 rounded font-bold text-lg"
                                initial={{ scale: 0.5, opacity: 0, rotate: -12 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...springBounceConfig, delay: 0.4 }}
                                style={{
                                    background: "hsl(var(--gold))",
                                    color: "hsl(var(--navy))",
                                    ...scrollAnimationStyles.pulseGlow(pulse3.isPulsing, pulse3.pulseIntensity, "hsl(38 82% 50% / 0.5)")
                                }}
                            >
                                $100M+
                            </motion.div>
                        </div>

                        <div className="p-5">
                            <p className="text-sm text-foreground font-medium mb-1">
                                Reinsurance portfolio optimisation
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Treaty effectiveness • Old Mutual Insure
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Achievement Cards - Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">

                    {/* M&A Ready */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group rounded-2xl border bg-card border-border overflow-hidden gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
                    >
                        <div className="h-44 p-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(210 55% 20%) 100%)" }}>
                            {/* Deal flow funnel */}
                            <svg className="w-full h-full max-w-[240px]" viewBox="0 0 200 100">

                                <path
                                    d="M 10 10 L 60 10 L 55 28 L 15 28 Z"
                                    fill="hsl(210 40% 50%)"
                                    fillOpacity="0.6"
                                />
                                <path
                                    d="M 15 30 L 55 30 L 48 48 L 22 48 Z"
                                    fill="hsl(var(--forest))"
                                    fillOpacity="0.7"
                                />
                                <path
                                    d="M 22 50 L 48 50 L 42 68 L 28 68 Z"
                                    fill="hsl(var(--gold))"
                                    fillOpacity="0.85"
                                />
                                <path
                                    d="M 28 70 L 42 70 L 38 85 L 32 85 Z"
                                    fill="hsl(var(--terracotta))"
                                />


                                <text x="75" y="22" fill="white" fillOpacity="0.5" fontSize="9">
                                    Screen
                                </text>
                                <text x="75" y="42" fill="white" fillOpacity="0.6" fontSize="9">
                                    Value
                                </text>
                                <text x="75" y="62" fill="white" fillOpacity="0.8" fontSize="9">
                                    Structure
                                </text>
                                <text x="75" y="80" fill="hsl(var(--gold))" fontSize="9" fontWeight="600">
                                    Close ✓
                                </text>


                                <g>
                                    <rect x="150" y="30" width="40" height="50" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
                                    <line
                                        x1="156" y1="43" x2="184" y2="43"
                                        stroke="white"
                                        strokeOpacity="0.4"
                                        strokeWidth="2"
                                        pathLength="1"
                                        strokeDasharray="1"
                                        strokeDashoffset={1 - speedometerDraw.progress}
                                    />
                                    <line
                                        x1="156" y1="51" x2="180" y2="51"
                                        stroke="white"
                                        strokeOpacity="0.3"
                                        strokeWidth="2"
                                        pathLength="1"
                                        strokeDasharray="1"
                                        strokeDashoffset={1 - speedometerDraw.progress}
                                    />
                                    <line
                                        x1="156" y1="59" x2="176" y2="59"
                                        stroke="white"
                                        strokeOpacity="0.2"
                                        strokeWidth="2"
                                        pathLength="1"
                                        strokeDasharray="1"
                                        strokeDashoffset={1 - speedometerDraw.progress}
                                    />
                                    <text x="170" y="74" fill="hsl(var(--gold))" fontSize="8" textAnchor="middle" fontWeight="600">Ready</text>
                                </g>
                            </svg>
                        </div>

                        <div className="p-5">
                            <p className="text-sm text-foreground font-medium mb-1">
                                Cash flow valuations & capital structuring
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Board-ready analysis • Financial services M&A
                            </p>
                        </div>
                    </motion.div>

                    {/* AI That Delivers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group rounded-2xl border bg-card border-border overflow-hidden gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
                    >
                        <div className="h-44 p-6 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(140 18% 28%) 100%)" }}>
                            <div className="flex items-center gap-6">
                                {/* Before: Chaos */}
                                <div className="relative w-20 h-20" style={{ opacity: 0.5 }}>
                                    {[
                                        { x: 5, y: 8, size: 10 },
                                        { x: 35, y: 5, size: 8 },
                                        { x: 55, y: 15, size: 6 },
                                        { x: 10, y: 40, size: 12 },
                                        { x: 45, y: 35, size: 8 },
                                        { x: 25, y: 60, size: 10 },
                                        { x: 55, y: 55, size: 6 },
                                    ].map((dot, i) => (
                                        <div
                                            key={i}
                                            className="absolute rounded-full bg-white/40"
                                            style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
                                        />
                                    ))}
                                    <svg className="absolute inset-0 w-full h-full opacity-30">
                                        <path d="M 10 20 Q 30 40, 50 25" stroke="white" strokeWidth="1" fill="none" />
                                        <path d="M 15 50 Q 35 30, 55 60" stroke="white" strokeWidth="1" fill="none" />
                                    </svg>
                                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/40">manual</span>
                                </div>


                                <div
                                    className="text-2xl"
                                    style={{ color: "hsl(var(--gold))" }}
                                >
                                    →
                                </div>

                                {/* After: Clean system */}
                                <div className="relative w-20 h-20 flex items-center justify-center">
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--forest)), hsl(var(--gold)))",
                                            boxShadow: "0 0 30px hsl(38 82% 50% / 0.3)"
                                        }}
                                    >
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M9 12L11 14L15 10"
                                                stroke="white"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium" style={{ color: "hsl(var(--gold))" }}>automated</span>
                                </div>
                            </div>

                            {/* Label */}
                            <div
                                className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-medium text-white/80 bg-white/10"
                            >
                                Ships, not slides
                            </div>
                        </div>

                        <div className="p-5">
                            <p className="text-sm text-foreground font-medium mb-1">
                                Automation that actually works
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Deployed systems, not strategy decks • Enterprise
                            </p>
                        </div>
                    </motion.div>
                </div>


                <p className="text-center text-xs text-foreground/50 mt-8 italic">
                    Results from leadership roles and independent consulting. Client details confidential.
                </p>

                {/* Insights CTA */}
                <motion.a
                    href="/insights"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="block max-w-md mx-auto mt-12 p-6 rounded-2xl border border-border bg-white text-center group cursor-pointer"
                    style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.08)" }}
                >
                    <p
                        className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                        style={{ color: "hsl(var(--gold))" }}
                    >
                        Explore
                    </p>
                    <p className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                        Insights & Articles
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Frameworks, case studies, and strategic thinking →
                    </p>
                </motion.a>
            </div>
        </section>
    );
};

export default ProofSection;
