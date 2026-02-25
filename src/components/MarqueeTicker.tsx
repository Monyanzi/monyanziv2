const companies = [
    "Old Mutual Insure",
    "Old Mutual Africa Regions",
    "Old Mutual Alternative Risk Transfer",
    "Guy Carpenter",
    "Aon",
    "Resilea",
    "Swiss Re",
    "Munich Re",
    "Hannover Re",
    "SCOR",
    "PartnerRe",
    "MAPFRE RE",
    "Santam Re",
    "Everest Re",
    "Arch Re",
    "MS Amlin",
    "Gen Re",
    "RenaissanceRe",
    "Transatlantic Re",
    "Odyssey Re",
    "Aspen Re",
    "Markel",
    "Sompo International",
    "Tokio Marine",
    "Chubb",
    "Travelers",
    "AXA XL",
] as const;

const content = companies.join("  ·  ");

const MarqueeTicker = () => (
    <section className="py-5 border-y border-border/30 overflow-hidden bg-secondary/30">
        <div className="text-center mb-4">
            <span className="text-[11px] font-semibold text-muted-foreground tracking-[0.18em] uppercase">
                Companies I've worked with
            </span>
        </div>

        <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee inline-flex whitespace-nowrap">
                {[1, 2, 3, 4].map((i) => (
                    <span
                        key={i}
                        className="inline-block flex-shrink-0 text-[13px] font-medium text-foreground/50 tracking-[0.06em] uppercase px-4"
                        aria-hidden={i > 1 ? "true" : undefined}
                    >
                        {content}  ·
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export default MarqueeTicker;
