import { memo } from "react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const ACCENT = "#5B4BF5";
const ACCENT_SOFT = "#B8B2FF";

const pillBase: React.CSSProperties = {
  borderRadius: 9999,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "all 200ms ease",
  color: "rgba(232,230,245,0.85)",
};

const pillActive: React.CSSProperties = {
  ...pillBase,
  background: `linear-gradient(135deg, ${ACCENT}, #7C6BFF)`,
  color: "white",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 6px 20px rgba(91,75,245,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
};

const Pill = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="shrink-0 px-4 py-2 text-[12px] font-semibold tracking-wide outline-none min-h-11"
    style={active ? pillActive : pillBase}
    onMouseEnter={(e) => {
      if (active) return;
      e.currentTarget.style.background = "rgba(139,124,255,0.14)";
      e.currentTarget.style.color = ACCENT_SOFT;
      e.currentTarget.style.borderColor = "rgba(139,124,255,0.3)";
    }}
    onMouseLeave={(e) => {
      if (active) return;
      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      e.currentTarget.style.color = "rgba(232,230,245,0.85)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
    }}
  >
    <span className="whitespace-nowrap">{children}</span>
  </button>
);

const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="inline-flex flex-nowrap items-center gap-1.5 overflow-x-auto scrollbar-none max-w-full">
      <Pill active={activeCategory === null} onClick={() => onCategoryChange(null)}>
        All
      </Pill>
      {categories.map((category) => (
        <Pill
          key={category}
          active={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Pill>
      ))}
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";
export default CategoryFilter;
