import { useState } from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import DiagnosticFlow from "./DiagnosticFlow";

const EngagementSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, hsl(140 18% 40%), hsl(140 18% 35%))' }}>
        {/* Organic floating shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-10 animate-float-slow"
            style={{
              background: 'radial-gradient(circle, hsl(20 55% 53%) 0%, transparent 70%)',
              borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%'
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] opacity-8 animate-float-slower"
            style={{
              background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)',
              borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <p className="font-mono text-xs tracking-[0.3em] text-[hsl(20,55%,53%)] uppercase mb-4 inline-block">
                Let's Talk
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
                Ready to Start?
              </h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[hsl(20,55%,53%)] to-transparent mx-auto mb-6" />
              <p className="text-lg text-white/70 text-center mx-auto">
                Clear analysis. Actionable recommendations. Decisions you can defend.
              </p>
            </div>

            {/* Contact CTA card - enhanced with gradient border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="p-10 lg:p-14 rounded-3xl relative overflow-hidden group hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] will-change-transform"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, hsl(140 18% 30%), hsl(20 55% 53%), hsl(38 82% 50%))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }} />

              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)',
                  borderRadius: '0 1.5rem 0 100%'
                }} />

              <div className="relative text-center">
                <p className="text-xl text-white font-display font-semibold mb-2 text-center">
                  Describe Your Challenge
                </p>
                <p className="text-sm text-white/60 mb-8 text-center">
                  30-second diagnostic. Structured response to follow.
                </p>

                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="relative inline-flex items-center gap-3 font-semibold tracking-wide uppercase text-sm px-12 py-5 rounded-full hover:shadow-[0_20px_50px_-12px_hsl(20,55%,53%,0.5)] group/btn overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))' }}
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative text-white">Let's Talk</span>
                  <ArrowRight className="relative w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <p className="text-sm text-white/70 mt-8 text-center">
                  Or email directly: <a href="mailto:moses.k.nyanzi@gmail.com" className="text-white hover:text-[hsl(20,55%,53%)] transition-colors underline underline-offset-2">moses.k.nyanzi@gmail.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer - enhanced with organic styling */}
        <footer className="mt-24 pt-12 border-t border-white/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand column */}
              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  Moses Nyanzi
                </p>
                <p className="text-sm mt-1"
                  style={{ background: 'linear-gradient(135deg, hsl(38 82% 50%), hsl(20 55% 53%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Strategy. Logic. Results.
                </p>
                <p className="text-xs text-white/50 mt-4 max-w-xs">
                  Independent consulting for senior leaders who need clarity, speed, and results.
                </p>
                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-[hsl(20,55%,53%)] transition-colors mt-4 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </div>

              {/* Credentials column */}
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-[hsl(20,55%,53%)] mb-4">
                  Credentials
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(140 18% 30%), hsl(20 55% 53%))' }} />
                    Actuary
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))' }} />
                    Executive MBA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, hsl(38 82% 50%), hsl(140 18% 30%))' }} />
                    $100M+ Portfolios Managed
                  </li>
                </ul>
              </div>

              {/* Quick links column */}
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-[hsl(20,55%,53%)] mb-4">
                  Quick Links
                </p>
                <div className="flex flex-col gap-2 text-sm text-white/80">
                  <a href="#about" className="hover:text-[hsl(20,55%,53%)] transition-colors hover:translate-x-1 transform inline-block">Who You Work With</a>
                  <a href="#expertise" className="hover:text-[hsl(20,55%,53%)] transition-colors hover:translate-x-1 transform inline-block">Expertise</a>
                  <a href="#proof" className="hover:text-[hsl(20,55%,53%)] transition-colors hover:translate-x-1 transform inline-block">Track Record</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()} Moses Nyanzi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>

      {/* Diagnostic Flow */}
      <DiagnosticFlow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default EngagementSection;
