import { useState, useEffect, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";
import BottomNavigation from "./components/BottomNavigation";
import { hasAnalyticsConsent } from "./utils/cookieConsent";

const ContactForm = lazy(() => import("./components/ContactForm"));
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(hasAnalyticsConsent());
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setIsContactOpen(hash === "#contact" || hash === "#diagnostic");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handleLocationChange);

    // Intercept pushState for internal navigation
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor && anchor.href && anchor.origin === window.location.origin) {
        const { pathname, hash } = anchor;
        if (pathname === "/" || pathname.startsWith("/insights")) {
          if (pathname === window.location.pathname && hash) return;

          e.preventDefault();
          window.history.pushState(null, "", anchor.href);
          if (!hash) window.scrollTo(0, 0);
          else window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("click", handleGlobalClick);
      window.history.pushState = originalPushState;
    };
  }, []);

  const getPage = () => {
    if (path === "/" || path === "") return <Index />;
    if (path === "/insights" || path === "/insights/") return <Insights />;

    const articleMatch = path.match(/^\/insights\/(.+?)\/?$/);
    if (articleMatch) return <InsightArticle slug={articleMatch[1]} />;

    return <NotFound />;
  };

  return (
    <>
      <Analytics />
      {analyticsEnabled && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
      <SmoothScrollProvider>
        {getPage()}
      </SmoothScrollProvider>
      <BottomNavigation />
      <CookieConsent onConsentChange={() => setAnalyticsEnabled(hasAnalyticsConsent())} />
      {isContactOpen && (
        <Suspense fallback={null}>
          <ContactForm
            isOpen={isContactOpen}
            onClose={() => {
              setIsContactOpen(false);
              if (window.location.hash === "#contact" || window.location.hash === "#diagnostic") {
                window.history.pushState(null, "", window.location.pathname + window.location.search);
              }
            }}
          />
        </Suspense>
      )}
    </>
  );
};

export default App;
