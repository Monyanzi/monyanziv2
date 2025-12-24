import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CredentialCard from "./CredentialCard";
import ProfilePhoto from "./ProfilePhoto";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="space-y-8">
            {/* Positioning statement */}
            <div className="space-y-5 animate-fade-in">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
                Strategic Advisory
              </p>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
                Moses<br />
                Nyanzi
              </h1>

              <div className="w-12 h-px bg-foreground/20" />
            </div>

            {/* Professional title */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p className="text-xl lg:text-2xl text-foreground font-light leading-snug">
                Actuarial Strategist &<br className="hidden sm:block" /> Capital Risk Advisor
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                Independent consulting in capital strategy, risk management, 
                and portfolio optimization for global institutional clients.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Johannesburg</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                <span>Available for Engagements</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button variant="executive" size="lg" className="group" asChild>
                <a href="#contact">
                  Engage for Consulting
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button variant="executiveOutline" size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right content - Geometric composition */}
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mt-20 lg:mt-28">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Credentials
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            <CredentialCard
              metric="8+"
              label="Years Experience"
              sublabel="Actuarial & Risk Strategy"
              delay={100}
            />
            <CredentialCard
              metric="$100M+"
              label="Portfolios Managed"
              sublabel="Global Markets"
              delay={200}
            />
            <CredentialCard
              metric="INSEAD"
              label="Executive MBA"
              sublabel="Class of 2026"
              delay={300}
            />
            <CredentialCard
              metric="ASA"
              label="Associate Actuary"
              sublabel="Society of Actuaries"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
