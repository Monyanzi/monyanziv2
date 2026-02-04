import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { hasAnalyticsConsent } from "./utils/cookieConsent";

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(hasAnalyticsConsent());

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Listen for custom location changes if any scripts use pushState
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    // Global click listener to intercept internal link clicks
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href && anchor.origin === window.location.origin) {
        const path = anchor.pathname;
        const hash = anchor.hash;

        // Internal paths we want to handle without full reloads
        if (path === "/" || path.startsWith("/insights")) {
          // If it's a hash link on the same page, let the browser handle it
          if (path === window.location.pathname && hash) {
            return;
          }

          e.preventDefault();
          window.history.pushState(null, "", anchor.href);
          // Scroll to top on page change if no hash
          if (!hash) {
            window.scrollTo(0, 0);
          }
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

  const handleConsentChange = () => {
    // Re-check analytics consent when user updates preferences
    setAnalyticsEnabled(hasAnalyticsConsent());
  };

  const getPage = () => {
    if (path === "/" || path === "") return <Index />;
    if (path === "/insights" || path === "/insights/") return <Insights />;

    // Article detail pages
    const articleMatch = path.match(/^\/insights\/(.+?)\/?$/);
    if (articleMatch) {
      return <InsightArticle slug={articleMatch[1]} />;
    }

    return <NotFound />;
  };

  return (
    <>
      <Analytics />
      {analyticsEnabled && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
      <SmoothScrollProvider>
        {getPage()}
      </SmoothScrollProvider>
      <CookieConsent onConsentChange={handleConsentChange} />
    </>
  );
};

export default App;
