const ProfilePhoto = () => {
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
      {/* Elegant geometric composition instead of placeholder photo */}
      <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px]">
        {/* Primary shape */}
        <div className="absolute inset-0 border border-border" />
        
        {/* Offset accent rectangle */}
        <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-full h-full border border-foreground/10" />
        
        {/* Inner content - elegant monogram */}
        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
          <span className="font-display text-8xl lg:text-[10rem] font-semibold text-foreground/[0.06] select-none">
            MN
          </span>
        </div>
        
        {/* Subtle corner accent */}
        <div className="absolute top-0 left-0 w-12 h-px bg-foreground/30" />
        <div className="absolute top-0 left-0 w-px h-12 bg-foreground/30" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
