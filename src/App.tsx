import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

const App = () => {
  const path = window.location.pathname;
  
  const getPage = () => {
    if (path === "/" || path === "") return <Index />;
    if (path === "/insights" || path === "/insights/") return <Insights />;
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
