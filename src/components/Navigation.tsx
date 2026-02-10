import { useState, useCallback, useMemo } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useThrottledScroll } from "@/utils/useThrottledScroll";
import { useLenis } from "@/components/lenisContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights" },
] as const;



const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
} as const;

const progressBarStyle = { background: "hsl(var(--gold))" } as const;
const underlineStyle = { background: "hsl(var(--gold))" } as const;

const Navigation = () => {
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springConfig);

  const isInsightsPage = window.location.pathname.startsWith("/insights");

  const updateScrolled = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);
  useThrottledScroll({
    delay: 100,
    onScroll: updateScrolled,
  });

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [lenis]);

  const isActiveLink = useCallback((href: string) => {
    if (href === "/insights") {
      return isInsightsPage;
    }
    if (href === "/") {
      return !isInsightsPage;
    }
    return false;
  }, [isInsightsPage]);

  const navClassName = useMemo(() =>
    `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
      : "bg-transparent py-5"
    }`,
    [isScrolled]
  );

  return (
    <>
      <nav className={navClassName}>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, ...progressBarStyle }}
        />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="/"
              onClick={handleLogoClick}
              className="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-foreground transition-colors duration-300"
              style={{
                "--hover-color": "hsl(var(--gold))",
                fontFamily: "'Monotype Corsiva', cursive"
              } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = "hsl(var(--gold))"}
              onMouseLeave={(e) => e.currentTarget.style.color = ""}
            >
              MN
            </a>

            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => {
                const isActive = isActiveLink(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-sm tracking-wide transition-colors duration-300 relative group ${isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      style={underlineStyle}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
