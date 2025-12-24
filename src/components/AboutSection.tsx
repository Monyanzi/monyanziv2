const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left column - header */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              About
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
              About My Practice
            </h2>
            <div className="w-16 h-px bg-foreground/20 mb-8" />
            
            {/* Services - moved here for better visual balance */}
            <div className="hidden lg:block">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
                Available For
              </p>
              <ul className="space-y-2">
                {[
                  "Independent Consulting",
                  "Strategic Advisory",
                  "Capital Strategy",
                  "Portfolio Review"
                ].map((service) => (
                  <li 
                    key={service}
                    className="text-sm text-muted-foreground"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg lg:text-xl text-foreground font-light leading-relaxed">
              I provide strategic actuarial consulting to institutional clients navigating 
              complex risk and capital decisions.
            </p>

            <p>
              My practice sits at the intersection of <span className="text-foreground">risk management, 
              capital strategy, and investment optimization</span>—where technical rigor meets 
              strategic insight. With over eight years across insurance, reinsurance, and 
              financial services, I bring deep expertise in portfolio optimization and 
              capital efficiency.
            </p>

            <p>
              My track record includes managing portfolios exceeding $100M, driving capital 
              optimization initiatives, and deploying enterprise risk management systems 
              across global markets. I bring particular strength in <span className="text-foreground">M&A 
              integration, analytics automation, and regulatory strategy</span>.
            </p>

            <p>
              Currently pursuing an Executive MBA at INSEAD (Class of 2026), I continue 
              expanding my strategic toolkit while maintaining active consulting engagements 
              with institutional clients across insurance, reinsurance, pension funds, and 
              asset management.
            </p>
          </div>
        </div>

        {/* Mobile services */}
        <div className="mt-12 pt-8 border-t border-border lg:hidden">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
            Available For
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Independent Consulting",
              "Strategic Advisory",
              "Capital Strategy",
              "Portfolio Review"
            ].map((service) => (
              <span 
                key={service}
                className="px-4 py-2 text-sm border border-border text-muted-foreground"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
