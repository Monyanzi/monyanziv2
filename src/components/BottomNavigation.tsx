import { useCallback, useMemo } from "react";
import { Home, FileText } from "lucide-react";

const navItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: FileText, href: "/insights", label: "Insights" },
] as const;

const activeColor = "hsl(var(--gold))" as const;
const inactiveColor = "hsl(var(--gold) / 0.6)" as const;
const mutedColor = "hsl(var(--muted-foreground))" as const;
const indicatorStyle = { background: activeColor } as const;

const BottomNavigation = ({ currentPath }: { currentPath: string }) => {
  const isInsightsPage = currentPath.startsWith('/insights');

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/insights") {
      return;
    }

    e.preventDefault();

    const isHome = window.location.pathname === "/" || window.location.pathname === "";

    if (href === "#") {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
      return;
    }

    if (!isHome) {
      window.location.href = "/" + href;
    }
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === "/insights") {
      return isInsightsPage;
    }
    return href === "#" && !isInsightsPage;
  }, [isInsightsPage]);

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
