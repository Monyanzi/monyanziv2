import { useState, useCallback, useMemo } from "react";
import { Home, User, Briefcase, Trophy, FileText } from "lucide-react";
import { useThrottledScroll } from "@/utils/useThrottledScroll";

// Static nav items at module scope
const navItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: User, href: "#about", label: "Who I Am" },
  { icon: Briefcase, href: "#expertise", label: "Expertise" },
  { icon: Trophy, href: "#proof", label: "Track Record" },
  { icon: FileText, href: "/insights", label: "Insights" },
] as const;

// Section IDs for scroll detection (in priority order)
const sectionIds = ["proof", "expertise", "about"] as const;

// Pre-computed styles
const activeColor = "hsl(var(--gold))" as const;
const inactiveColor = "hsl(var(--gold) / 0.6)" as const;
const mutedColor = "hsl(var(--muted-foreground))" as const;
const indicatorStyle = { background: activeColor } as const;

const BottomNavigation = ({ currentPath }: { currentPath: string }) => {
  const [activeSection, setActiveSection] = useState("");
  const isInsightsPage = currentPath.startsWith('/insights');

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 100;

    if (window.scrollY < 100) {
      setActiveSection("");
      return;
    }

    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sectionId);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useThrottledScroll({
    delay: 100,
    onThrottle: updateActiveSection,
    runOnMount: true,
  });

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for external links
    if (href === "/insights") {
      return;
    }

    e.preventDefault();

    const isHome = window.location.pathname === "/" || window.location.pathname === "";

    // If clicking Home icon
    if (href === "#") {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
      return;
    }

    // If on home page, scroll to section
    if (isHome) {
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with anchor
      window.location.href = "/" + href;
    }
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === "/insights") {
      return isInsightsPage;
    }
    if (href === "#") return activeSection === "" && !isInsightsPage;
    return activeSection === href.slice(1);
  }, [activeSection, isInsightsPage]);

  // Memoize nav style to avoid object recreation
  const navStyle = useMemo(() => ({
    paddingBottom: "env(safe-area-inset-bottom)"
  }), []);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
      style={navStyle}
    >
      <div className="flex items-center justify-around h-14">
        {navItems.map(({ icon: Icon, href, label }) => {
          const active = isActive(href);
          return (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="flex flex-col items-center justify-center w-full h-full transition-all duration-200 relative group"
              aria-label={label}
            >
              <Icon
                className={`w-5 h-5 transition-all duration-200 ${active ? "scale-110" : "group-hover:scale-105"
                  }`}
                style={{ stroke: active ? activeColor : inactiveColor }}
                strokeWidth={1.5}
              />
              <span
                className={`text-[10px] mt-1 transition-colors duration-200 ${active ? "font-medium" : ""
                  }`}
                style={{ color: active ? activeColor : mutedColor }}
              >
                {label}
              </span>
              {active && (
                <span
                  className="absolute bottom-0.5 w-6 h-0.5 rounded-full"
                  style={indicatorStyle}
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
