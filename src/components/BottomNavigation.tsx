import { useState, useEffect, useCallback } from "react";
import { Home, User, Briefcase, Trophy, FileText } from "lucide-react";

const navItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Briefcase, href: "#expertise", label: "Expertise" },
  { icon: Trophy, href: "#proof", label: "Track Record" },
  { icon: FileText, href: "/insights", label: "Insights" },
];

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isInsightsPage, setIsInsightsPage] = useState(false);

  useEffect(() => {
    // Check if on insights page
    const checkPath = () => {
      setIsInsightsPage(window.location.pathname.startsWith('/insights'));
    };
    checkPath();
  }, []);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = window.setTimeout(() => {
        const scrollPosition = window.scrollY + 100;
        const sections = ["proof", "expertise", "about"];

        // Check if near top
        if (window.scrollY < 100) {
          setActiveSection("");
          timeoutId = undefined;
          return;
        }

        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sectionId);
            timeoutId = undefined;
            return;
          }
        }
        setActiveSection("");
        timeoutId = undefined;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for external links
    if (href === "/insights") {
      return;
    }

    e.preventDefault();

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const isActive = (href: string) => {
    if (href === "/insights") {
      return isInsightsPage;
    }
    if (href === "#") return activeSection === "" && !isInsightsPage;
    return activeSection === href.slice(1);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-around h-14">
        {navItems.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className="flex flex-col items-center justify-center w-full h-full transition-all duration-200 relative group"
            aria-label={label}
          >
            <Icon
              className={`w-5 h-5 transition-all duration-200 ${
                isActive(href)
                  ? "scale-110"
                  : "group-hover:scale-105"
              }`}
              style={{
                stroke: isActive(href) ? "hsl(var(--gold))" : "hsl(var(--gold) / 0.6)"
              }}
              strokeWidth={1.5}
            />
            <span
              className={`text-[10px] mt-1 transition-colors duration-200 ${
                isActive(href) ? "font-medium" : ""
              }`}
              style={{
                color: isActive(href) ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))"
              }}
            >
              {label}
            </span>
            {isActive(href) && (
              <span
                className="absolute bottom-0.5 w-6 h-0.5 rounded-full"
                style={{ background: "hsl(var(--gold))" }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
