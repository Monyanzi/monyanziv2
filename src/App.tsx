import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

const App = () => {
  const path = window.location.pathname;
  
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
      <SmoothScrollProvider>
        {getPage()}
      </SmoothScrollProvider>
    </>
  );
};

export default App;
