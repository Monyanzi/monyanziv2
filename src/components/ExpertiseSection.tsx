const expertiseCategories = [
  {
    title: "Actuarial",
    skills: [
      "Reserving & IBNR Analysis",
      "Pricing & Product Development",
      "IFRS 17 Implementation",
      "Capital Modeling"
    ]
  },
  {
    title: "Financial",
    skills: [
      "Asset-Liability Management",
      "Portfolio Optimization",
      "Risk-Adjusted Returns",
      "Solvency Assessment"
    ]
  },
  {
    title: "Strategic",
    skills: [
      "M&A Due Diligence",
      "Market Entry Analysis",
      "Regulatory Strategy",
      "Stakeholder Management"
    ]
  },
  {
    title: "Technical",
    skills: [
      "SQL & Python",
      "Power BI & Visualization",
      "Risk Management Systems",
      "Actuarial Software"
    ]
  }
];

const industries = [
  "Life Insurance",
  "Non-Life Insurance", 
  "Reinsurance",
  "Asset Management",
  "Pension Funds"
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-4xl mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
            Expertise
          </h2>
          <div className="w-12 h-px bg-foreground/20" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {expertiseCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-background p-8"
            >
              <h3 className="text-sm font-medium tracking-wide uppercase text-foreground mb-6">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries served */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Industries
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {industries.map((industry, i) => (
              <span 
                key={i}
                className="text-sm text-muted-foreground"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
