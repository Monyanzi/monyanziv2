import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const serviceOptions = [
  "Strategic Consulting",
  "Capital & Risk Advisory",
  "Portfolio Optimization",
  "M&A Due Diligence",
  "Actuarial Review",
  "Other"
];

const EngagementSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
              Ready to Engage
            </h2>
            <div className="w-16 h-px bg-foreground/20 mx-auto mb-8" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Available for independent consulting engagements, strategic advisory, 
              and capital strategy projects. Let's discuss how I can add value to your organization.
            </p>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border/60 p-8 lg:p-12 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-foreground mb-3 tracking-wide uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/10 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-3 tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/10 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-xs font-medium text-foreground mb-3 tracking-wide uppercase">
                Service Inquiry
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-background border border-border text-foreground focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/10 transition-all duration-200 appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted-foreground">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-xs font-medium text-foreground mb-3 tracking-wide uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/10 transition-all duration-200 resize-none"
                placeholder="Describe your project or inquiry..."
              />
            </div>

            <Button type="submit" variant="executive" size="xl" className="w-full group shadow-lg shadow-foreground/5 hover:shadow-xl transition-shadow duration-300">
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-16 border-t border-border bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-semibold text-foreground">
                Moses Nyanzi
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Actuarial Strategist & Capital Risk Advisor
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors duration-200">About</a>
              <a href="#expertise" className="hover:text-foreground transition-colors duration-200">Expertise</a>
              <a href="#track-record" className="hover:text-foreground transition-colors duration-200">Track Record</a>
              <a href="#contact" className="hover:text-foreground transition-colors duration-200">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground/80">
              © {new Date().getFullYear()} Moses Nyanzi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default EngagementSection;
