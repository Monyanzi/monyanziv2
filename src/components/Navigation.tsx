import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { X } from "lucide-react";

const navItems = [
  { label: "Who You Work With", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Track Record", href: "#proof" },
  { label: "Insights", href: "/insights" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInsightsPage, setIsInsightsPage] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check if on insights page
    setIsInsightsPage(window.location.pathname.startsWith('/insights'));
  }, []);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleScroll = () => {
      // Track if scrolled for nav background
      setIsScrolled(window.scrollY > 50);

      if (timeoutId) return; // Throttle - skip if already scheduled

      timeoutId = window.setTimeout(() => {
        const sections = navItems.filter(item => item.href.startsWith('#')).map(item => item.href.slice(1));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            timeoutId = undefined;
            return;
          }
        }
        setActiveSection("");
        timeoutId = undefined;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/insights") {
      return isInsightsPage;
    }
    return activeSection === href.slice(1);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
        : "bg-transparent py-5"
        }`}>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, background: "hsl(var(--gold))" }}
        />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="/"
              className="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-foreground transition-colors duration-300"
              style={{ "--hover-color": "hsl(var(--gold))" } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = "hsl(var(--gold))"}
              onMouseLeave={(e) => e.currentTarget.style.color = ""}
            >
              MN
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors duration-300 relative group ${
                    isActiveLink(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ background: "hsl(var(--gold))" }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 -mr-2 text-foreground transition-colors duration-300"
              style={{ "--hover-color": "hsl(var(--gold))" } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = "hsl(var(--gold))"}
              onMouseLeave={(e) => e.currentTarget.style.color = ""}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-background border-l border-border transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display text-lg font-semibold text-foreground">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block py-3 text-lg transition-colors ${
                    isActiveLink(item.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={isActiveLink(item.href) ? { color: "hsl(var(--gold))" } : {}}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
