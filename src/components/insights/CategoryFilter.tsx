import { memo } from "react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const ACCENT = "#5B4BF5";

const pillBase: React.CSSProperties = {
  borderRadius: 9999,
  border: "1px solid rgba(91,75,245,0.10)",
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  transition: "all 200ms ease",
};

const pillActive: React.CSSProperties = {
  ...pillBase,
  background: ACCENT,
  color: "white",
  border: "1px solid transparent",
  boxShadow: "0 4px 14px rgba(91,75,245,0.28)",
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
    style={active ? pillActive : { ...pillBase, color: "#111" }}
    onMouseEnter={(e) => {
      if (active) return;
      e.currentTarget.style.background = "rgba(91,75,245,0.07)";
      e.currentTarget.style.color = ACCENT;
    }}
    onMouseLeave={(e) => {
      if (active) return;
      e.currentTarget.style.background = "rgba(255,255,255,0.55)";
      e.currentTarget.style.color = "#111";
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
