import { motion } from "motion/react";

interface Achievement {
    headline: string;
    description: string;
    detail: string;
    context: string;
}

const achievements: Achievement[] = [
    {
        headline: "80% Faster",
        description: "Migrated portfolio analytics from Excel to SQL & Power BI",
        detail: "45% fewer errors • 30% capacity released",
        context: "Major insurance group"
    },
    {
        headline: "6 Months → 24 Hours",
        description: "Led pricing platform rollout for real-time deployment",
        detail: "Enabled rapid market response",
        context: "Leading insurer"
    },
    {
        headline: "$100M+ Managed",
        description: "Evaluated and optimised treaty effectiveness for multi-line reinsurance portfolio",
        detail: "Drove strategic adjustments improving Return on Capital",
        context: "Old Mutual Insure (2021-2025)"
    },
    {
        headline: "M&A Ready",
        description: "Delivered cash flow valuations and capital structure analysis for corporate transactions",
        detail: "Deal structuring informed by actuarial risk quantification",
        context: "Financial services M&A advisory"
    },
    {
        headline: "AI That Delivers",
        description: "Built and deployed automation solutions that replaced manual processes with working systems",
        detail: "Practical AI implementation, not just strategy decks",
        context: "Enterprise automation projects"
    }
];

const ProofSection = () => {
    return (
        <section id="proof" className="py-24 lg:py-32 bg-background border-b border-border overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[hsl(20,55%,53%)] mb-4 mx-auto w-fit">
                        Why Clients Trust My Judgement
                    </p>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
                        Results I've Delivered
                    </h2>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[hsl(20,55%,53%)] to-transparent mx-auto" />
                </div>

                {/* Achievement Cards - Top Row (3 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {achievements.slice(0, 3).map((achievement, index) => (
                        <motion.div
                            key={achievement.headline}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.2,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
                            className="group p-8 rounded-2xl border bg-card border-border gradient-border-top hover:border-[hsl(20,55%,53%)]/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default will-change-transform"
                        >
                            <div className="text-3xl font-display font-bold mb-4 group-hover:scale-105 transition-transform duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(38 82% 50%), hsl(20 55% 53%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {achievement.headline}
                            </div>
                            <p className="text-sm text-foreground font-medium mb-3 leading-relaxed">
                                {achievement.description}
                            </p>
                            <p className="text-xs text-muted-foreground mb-4">
                                {achievement.detail}
                            </p>
                            <p className="text-xs text-muted-foreground italic">
                                {achievement.context}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Achievement Cards - Bottom Row (2 cards, centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                    {achievements.slice(3).map((achievement, index) => (
                        <motion.div
                            key={achievement.headline}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.2,
                                delay: (index + 3) * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
                            className="group p-8 rounded-2xl border bg-card border-border gradient-border-top hover:border-[hsl(20,55%,53%)]/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default will-change-transform"
                        >
                            <div className="text-3xl font-display font-bold mb-4 group-hover:scale-105 transition-transform duration-300"
                                style={{ background: 'linear-gradient(135deg, hsl(38 82% 50%), hsl(20 55% 53%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {achievement.headline}
                            </div>
                            <p className="text-sm text-foreground font-medium mb-3 leading-relaxed">
                                {achievement.description}
                            </p>
                            <p className="text-xs text-muted-foreground mb-4">
                                {achievement.detail}
                            </p>
                            <p className="text-xs text-muted-foreground italic">
                                {achievement.context}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Context footer */}
                <p className="text-center text-xs text-muted-foreground mt-8 italic">
                    Results from leadership roles and independent consulting. Client details confidential.
                </p>
            </div>
        </section>
    );
};

export default ProofSection;

