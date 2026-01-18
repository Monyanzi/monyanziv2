import { useState, useEffect, useCallback } from "react";
import { Home, User, Briefcase, Trophy } from "lucide-react";

const navItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Briefcase, href: "#expertise", label: "Expertise" },
  { icon: Trophy, href: "#proof", label: "Track Record" },
];

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

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
    if (href === "#") return activeSection === "";
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
              className={`w-6 h-6 transition-all duration-200 ${isActive(href)
                  ? "stroke-[hsl(38,82%,55%)] scale-110"
                  : "stroke-[hsl(38,82%,45%)] group-hover:stroke-[hsl(38,82%,55%)] group-hover:scale-105"
                }`}
              strokeWidth={1.5}
            />
            {isActive(href) && (
              <span className="absolute bottom-1 w-6 h-0.5 bg-[hsl(38,82%,50%)] rounded-full" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
