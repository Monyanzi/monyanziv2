import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { X } from "lucide-react";
import { useThrottledScroll } from "@/utils/useThrottledScroll";
import { useLenis } from "@/components/SmoothScrollProvider";

// Static nav items at module scope - never recreated
const navItems = [
  { label: "Who You Work With", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Track Record", href: "#proof" },
  { label: "Insights", href: "/insights" },
] as const;

// Pre-computed section IDs for scroll tracking
const sectionIds = navItems
  .filter(item => item.href.startsWith('#'))
  .map(item => item.href.slice(1));

// Static spring config
const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
} as const;

// Pre-computed styles
const progressBarStyle = { background: "hsl(var(--gold))" } as const;
const underlineStyle = { background: "hsl(var(--gold))" } as const;

const Navigation = () => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInsightsPage, setIsInsightsPage] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springConfig);

  useEffect(() => {
    setIsInsightsPage(window.location.pathname.startsWith('/insights'));
  }, []);

  const updateScrolled = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 100;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useThrottledScroll({
    delay: 100,
    onScroll: updateScrolled,
    onThrottle: updateActiveSection,
  });

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

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
    return activeSection === href.slice(1);
  }, [activeSection, isInsightsPage]);

  // Memoize nav class to avoid string concatenation on every render
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
              style={{ "--hover-color": "hsl(var(--gold))" } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = "hsl(var(--gold))"}
              onMouseLeave={(e) => e.currentTarget.style.color = ""}
            >
              MN
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => {
                const isAnchor = item.href.startsWith('#');
                const href = isAnchor && isInsightsPage ? `/${item.href}` : item.href;
                const isActive = isActiveLink(item.href);

                return (
                  <a
                    key={item.label}
                    href={href}
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

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-background border-l border-border transition-transform duration-300 ease-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display text-lg font-semibold text-foreground">Menu</span>
          <button
            onClick={closeMenu}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isAnchor = item.href.startsWith('#');
              const href = isAnchor && isInsightsPage ? `/${item.href}` : item.href;
              const isActive = isActiveLink(item.href);

              return (
                <li key={item.label}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className={`block py-3 text-lg transition-colors ${isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                    style={isActive ? { color: "hsl(var(--gold))" } : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
