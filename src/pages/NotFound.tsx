import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-6">Page not found</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))' }}
          >
            <span className="text-white">Go Home</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
