import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Moses Nyanzi</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="text-7xl font-display font-bold text-foreground mb-3 tracking-tight">404</h1>
          <p className="text-lg text-muted-foreground mb-8">This page does not exist.</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-accent text-accent-foreground transition-all duration-200 hover:scale-[1.02] shadow-card"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
