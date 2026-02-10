import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { getEmail } from "@/utils/email";
import SiteFooter from "@/components/SiteFooter";

const EngagementSection = () => {

  return (
    <>
      {/* Light navy background */}
      <section id="contact" className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: 'hsl(210 45% 96%)' }}>
        {/* Organic floating shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -top-32 -right-32 w-[500px] h-[500px]"
            style={{
              background: 'radial-gradient(circle, hsl(var(--terracotta)) 0%, transparent 70%)',
              borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%'
            }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px]"
            style={{
              background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)',
              borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs tracking-[0.3em] uppercase mb-4 inline-block"
                style={{ color: "hsl(var(--terracotta))" }}
              >
                Let's Talk
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4"
              >
                Ready to Start?
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-20 h-[2px] mx-auto mb-4 origin-center"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--terracotta)), transparent)" }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground text-center mx-auto"
              >
                Clear analysis. Actionable recommendations. Decisions you can defend.
              </motion.p>
            </div>

            {/* Contact CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-10 lg:p-12 rounded-3xl relative overflow-hidden group cursor-default bg-white border border-border"
              style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)" }}
            >
              {/* Gradient accent top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, hsl(var(--forest)), hsl(var(--gold)), hsl(var(--terracotta)))" }}
              />

              <div className="relative text-center">
                <p className="text-xl text-foreground font-display font-semibold mb-2 text-center">
                  Get Professional Advice
                </p>
                <p className="text-sm text-muted-foreground mb-8 text-center">
                  Quick response guaranteed. Structured analysis to follow.
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center gap-3 font-semibold tracking-wide uppercase text-sm px-12 py-5 rounded-full group/btn overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))',
                    color: 'hsl(var(--navy))'
                  }}
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <span className="relative">Let's Talk</span>
                  <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>

                <p className="text-sm text-muted-foreground mt-8 text-center">
                  Or email directly: <a href={`mailto:${getEmail()}`} className="text-foreground hover:text-[hsl(var(--terracotta))] transition-colors underline underline-offset-2">{getEmail()}</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <SiteFooter className="mt-16" />
      </section>

    </>
  );
};

export default EngagementSection;
