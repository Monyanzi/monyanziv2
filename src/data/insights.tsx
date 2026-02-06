import automationTrapHero from "@/assets/insights/automation-trap-hero.webp";
import phoneboothImage from "@/assets/insights/phonebooth.webp";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.webp";

export interface ArticleContent {
    title: string;
    category: string;
    description: string;
    image: string;
    content: React.ReactNode;
}

export const articles: Record<string, ArticleContent> = {
    "the-automation-trap": {
        title: "The Automation Trap: 12 Signs You're About to Automate the Wrong Thing",
        category: "AUTOMATION & PROCESS",
        description: "Automation promises speed, but speed in the wrong direction is expensive failure.",
        image: automationTrapHero,
        content: (
            <>
                <section className="mb-10 lg:mb-14">
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        Every automation project promises <strong>faster, cheaper, better</strong>. Every failed one ends the same way: the old spreadsheet stays open, workarounds multiply, and someone asks why this cost so much.
                    </p>
                    <p className="text-foreground/85 text-justify">
                        The technology rarely fails. You automated the wrong thing.
                    </p>
                </section>

                <section className="mb-10 lg:mb-14">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                        Part A: Before You Start
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>1</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">A Third of Your Work Needs "Special Handling"</h3>
                                    <p className="text-sm text-foreground/70">That is not an exception. That is a second process you are ignoring.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>2</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Staff Say "It Depends" When Asked How It Works</h3>
                                    <p className="text-sm text-foreground/70">If nobody can explain the process, nobody knows the process.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>3</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Everyone Has Their Own Spreadsheet</h3>
                                    <p className="text-sm text-foreground/70">The real work happens in Excel, not the system.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>4</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Every Team Does It Differently</h3>
                                    <p className="text-sm text-foreground/70">Three departments, three methods. Automate one and you break the other two.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>5</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Nobody Knows Why That Step Exists</h3>
                                    <p className="text-sm text-foreground/70">"Why?" "Always been that way." You are automating guesswork.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-10 lg:mb-14">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                        Part B: During Implementation
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>6</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">You Launched but People Still Use the Old Way</h3>
                                    <p className="text-sm text-foreground/70">Now you are paying for both systems. Neither works properly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>7</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Tricky Cases Take Longer Now</h3>
                                    <p className="text-sm text-foreground/70">Simple stuff is faster. Everything else? Two systems to check instead of one.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>8</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">The Numbers Do Not Add Up</h3>
                                    <p className="text-sm text-foreground/70">Dashboard says 247. Team did 312. Where is the rest?</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>9</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">The Savings Keep Shrinking</h3>
                                    <p className="text-sm text-foreground/70">First 40%. Then 25%. Now "long-term value." That is called failure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-10 lg:mb-14">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>
                        Part C: The Value Trap
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>10</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">"Compliance" Is the Only Reason</h3>
                                    <p className="text-sm text-foreground/70">If the point is evidence, speed is not the goal. Accuracy is.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>11</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Changes Now Take Months</h3>
                                    <p className="text-sm text-foreground/70">Before: "Just update it." Now: "Submit a change request." Flexibility gone.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border/50 bg-card/30 hover:border-[hsl(var(--gold)/0.3)] hover:bg-card/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))" }}>12</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Nobody Asked If You Should Stop Doing It</h3>
                                    <p className="text-sm text-foreground/70">"How do we speed this up?" But nobody asked: "Should we still be doing this?"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-10 lg:mb-14 p-6 lg:p-8 rounded-xl text-center" style={{ background: "hsl(var(--gold) / 0.08)", border: "1px solid hsl(var(--gold) / 0.2)" }}>
                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        The Bottom Line
                    </h2>
                    <p className="text-foreground/85 mb-6">
                        Automation is not the enemy. Automating dysfunction at speed just creates expensive, fast-moving dysfunction.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all hover:gap-3"
                        style={{ background: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                    >
                        Get in Touch
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </section>
            </>
        ),
    },
    "why-ai-projects-fail": {
        title: "Why Your AI Project Is Failing: 8 Warning Signs",
        category: "AI STRATEGY",
        description: "AI projects do not crash. They fade quietly while everyone stays busy.",
        image: aiWarningSignsHero,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 text-lg lg:text-xl text-justify leading-relaxed">
                        AI projects do not crash. They fade quietly. Updates keep flowing, meetings continue, dashboards impress. <strong>Yet the business feels no different.</strong>
                    </p>
                </section>

                <div className="space-y-20 lg:space-y-32">
                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    01
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    Remove "AI" From the Pitch. Does It Still Make Sense?
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    If it doesn't have clear outcomes, like lowering costs or improving a process, you're buying hype.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    02
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    Getting Anything Changed Takes Forever
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    If every change needs five approvals, the AI is just decoration.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    03
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    Nobody Knows Who Is Responsible
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    IT, Ops, and Data are all "involved". Nobody owns it. That is where projects die.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    04
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    The People Using It Do Not Trust It
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    They nod in meetings, then ignore it. No trust, no adoption, no value.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    05
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    Lots of Reports, Nothing Changes
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Has anyone made a different decision because of it? If not, it is noise.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    06
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    It Created More Work, Not Less
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Good AI removes steps. Bad AI adds things to check.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    07
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    Nobody Can Define Success
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    "More insights" is not a target. If you cannot name success, you are hoping.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    08
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                    "Fixing the Data" Is the Permanent Excuse
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Six months on data quality? That is not a data problem. It is avoidance.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="mt-24 lg:mt-32 mb-10 lg:mb-14 p-8 lg:p-12 rounded-2xl text-center" style={{ background: "hsl(var(--gold) / 0.08)", border: "1px solid hsl(var(--gold) / 0.2)" }}>
                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        The Fix Starts Here
                    </h2>
                    <p className="text-foreground/85 mb-8 max-w-2xl mx-auto">
                        These are not AI problems. They are focus and foundations problems. Fix ownership, reduce handovers, clear the friction.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:gap-3"
                        style={{ background: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                    >
                        Contact Moses
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </section>
            </>
        ),
    },
    "5-signs-always-done-this-way": {
        title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
        category: "ORGANISATIONAL CHANGE",
        description: "Processes outlive their purpose. 5 signals that history is running your operations.",
        image: phoneboothImage,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 text-lg lg:text-xl text-justify leading-relaxed">
                        Every organisation has processes that outlive their purpose. The problem is not having legacy. <strong>The problem is when "we have always done it this way" becomes the only justification.</strong>
                    </p>
                </section>

                <div className="relative">
                    <div
                        className="absolute left-6 lg:left-8 top-0 bottom-0 w-px hidden lg:block"
                        style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.5) 0%, hsl(var(--gold) / 0.1) 100%)" }}
                    />

                    <div className="space-y-8 lg:space-y-12">
                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        1
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        "Ask Sarah" (Sarah Left Two Years Ago)
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        The person who created the process is gone. The process lives on.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        2
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        New Starters Learn "How We Really Do It"
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        Training shows the SOP. Week two, someone shows them the real way.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        3
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        Questioning It Makes People Defensive
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        If asking "why" feels like an attack, the process has become untouchable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        4
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        "Too Risky" (But Nobody Can Explain the Risk)
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        What risk? How likely? If nobody can answer, you are avoiding change, not risk.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        5
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        "Improvement" Always Means More Steps
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        When did anyone last remove a step? If never, it is not improving. It is growing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mt-20 lg:mt-28 mb-10 lg:mb-14 p-8 lg:p-12 rounded-2xl text-center" style={{ background: "hsl(var(--gold) / 0.08)", border: "1px solid hsl(var(--gold) / 0.2)" }}>
                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        Breaking the Pattern
                    </h2>
                    <p className="text-foreground/85 mb-8 max-w-2xl mx-auto">
                        Legacy is not always bad. But when "we have always done it this way" is the only answer, the organisation is running on autopilot with no pilot.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:gap-3"
                        style={{ background: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                    >
                        Book a Consultation
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </section>
            </>
        ),
    },

};
