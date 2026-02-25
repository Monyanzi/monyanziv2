import { memo } from "react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 border ${
          activeCategory === null
            ? "bg-accent text-accent-foreground border-accent shadow-subtle"
            : "bg-transparent text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 border ${
            activeCategory === category
              ? "bg-accent text-accent-foreground border-accent shadow-subtle"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";

export default CategoryFilter;
