const ProfilePhoto = () => {
  return (
    <div className="relative animate-slide-in-right group">
      {/* Decorative frame - behind */}
      <div className="absolute -bottom-6 -right-6 w-full h-full border border-foreground/10 transition-all duration-700 group-hover:border-foreground/20" />
      
      {/* Main photo container */}
      <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] bg-muted overflow-hidden">
        {/* Refined gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
        
        {/* Elegant monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <span className="font-display text-8xl lg:text-[140px] font-semibold text-foreground/[0.04] select-none">
              MN
            </span>
            {/* Subtle accent line */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-12 h-px bg-foreground/10" />
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-foreground/10" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-foreground/10" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
