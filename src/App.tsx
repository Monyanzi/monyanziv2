import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

const App = () => {
  // Simple path check - no router needed for single page site
  const isValidPath = window.location.pathname === "/" || window.location.pathname === "";

  return (
        <>
      <Analytics />
    <SmoothScrollProvider>
      {isValidPath ? <Index /> : <NotFound />}
    </SmoothScrollProvider>
          </>
  );
};

export default App;
