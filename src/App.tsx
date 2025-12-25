import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  // Simple path check - no router needed for single page site
  const isValidPath = window.location.pathname === "/" || window.location.pathname === "";

  return isValidPath ? <Index /> : <NotFound />;
};

export default App;
