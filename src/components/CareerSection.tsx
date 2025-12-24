const careerMilestones = [
  {
    period: "2021 — Present",
    role: "Senior Manager, Treaty Reinsurance",
    company: "Leading Reinsurance Firm",
    achievements: [
      "Led M&A integration of acquired portfolios worth $50M+",
      "Automated analytics workflows reducing reporting time by 60%",
      "Deployed enterprise risk systems across 3 markets"
    ],
    isCurrent: true
  },
  {
    period: "2018 — 2021",
    role: "Manager, Actuarial Services",
    company: "Insurance Corporation",
    achievements: [
      "Managed capital optimization for life & non-life portfolios",
      "Developed pricing models for specialty products",
      "Led regulatory capital compliance projects"
    ]
  },
  {
    period: "2015 — 2018",
    role: "Senior Actuarial Analyst",
    company: "Global Insurance Group",
    achievements: [
      "Built reserving models for long-tail liability classes",
      "Supported IFRS 17 implementation readiness"
    ]
  }
];

const CareerSection = () => {
  return (
    <section id="track-record" className="py-24 lg:py-32 bg-muted/20 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section header */}
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Track Record
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Career
          </h2>
          <div className="w-12 h-px bg-foreground/20 mb-16" />
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {careerMilestones.map((milestone, index) => (
            <div 
              key={index} 
              className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-12 py-8 border-b border-border last:border-b-0"
            >
              {/* Period */}
              <div className="flex items-start gap-3">
                {milestone.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                )}
                <span className={`text-sm ${milestone.isCurrent ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {milestone.period}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {milestone.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {milestone.company}
                </p>

                <ul className="space-y-1.5">
                  {milestone.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
