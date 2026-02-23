import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "motion/react";

interface Stat {
    value: number;
    suffix: string;
    label: string;
}

const stats: Stat[] = [
    { value: 9, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "M+", label: "Portfolio Value ($)" },
    { value: 20, suffix: "+", label: "Projects" },
];

const DURATION = 1800; // ms
const FPS = 60;

const AnimatedNumber = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let raf: number;
        const totalFrames = Math.ceil((DURATION / 1000) * FPS);
        let frame = 0;

        const tick = () => {
            frame++;
            const progress = Math.min(frame / totalFrames, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target));
            if (progress < 1) {
                raf = requestAnimationFrame(tick);
            }
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [isVisible, target]);

    return (
        <span className="tabular-nums">
            {display}
            {suffix}
        </span>
    );
};

const StatsCounter = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInViewport = useInView(ref, { once: true, margin: "-80px" });
    const [hasTriggered, setHasTriggered] = useState(false);

    const onView = useCallback(() => {
        if (isInViewport && !hasTriggered) setHasTriggered(true);
    }, [isInViewport, hasTriggered]);

    useEffect(() => { onView(); }, [onView]);

    return (
        <section ref={ref} className="py-12 lg:py-16 border-y border-border/30">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={hasTriggered ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-center w-full sm:w-auto"
                        >
                            <p
                                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                                style={{
                                    background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={hasTriggered} />
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wide uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
