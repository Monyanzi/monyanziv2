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
        className="appearance-none py-2 pl-4 pr-9 text-[12px] font-semibold outline-none cursor-pointer min-h-11"
        style={{
          borderRadius: 9999,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          color: "rgba(232,230,245,0.9)",
        }}
      >
        <option value="default" style={{ background: "#141432", color: "#E8E6F5" }}>Newest first</option>
        <option value="alphabetical" style={{ background: "#141432", color: "#E8E6F5" }}>A–Z</option>
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
        style={{ color: "#B8B2FF" }}
      />
    </div>
  );
});

SortSelect.displayName = "SortSelect";
export default SortSelect;
