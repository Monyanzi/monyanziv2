import { memo } from "react";
import { ChevronDown } from "lucide-react";

export type SortOption = "default" | "alphabetical";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortSelect = memo(({ value, onChange }: SortSelectProps) => {
  return (
    <div className="relative">
      <select
        aria-label="Sort insights"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-muted text-foreground text-sm font-medium px-4 py-2 pr-10 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))/0.3] cursor-pointer"
      >
        <option value="default">Newest first</option>
        <option value="alphabetical">A–Z</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
    </div>
  );
});

SortSelect.displayName = "SortSelect";

export default SortSelect;
