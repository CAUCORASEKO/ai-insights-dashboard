import type { DashboardFilters } from "@/features/dashboard/types";

const timeOptions: Array<{ value: DashboardFilters["timeRange"]; label: string }> = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" }
];

const segmentOptions: Array<{ value: DashboardFilters["segment"]; label: string }> = [
  { value: "all", label: "All segments" },
  { value: "enterprise", label: "Enterprise" },
  { value: "mid-market", label: "Mid-market" },
  { value: "smb", label: "SMB" }
];

type FiltersBarProps = {
  filters: DashboardFilters;
  onChange: (next: DashboardFilters) => void;
};

const FiltersBar = ({ filters, onChange }: FiltersBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-2 shadow-soft">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Range
        </span>
        <label className="sr-only" htmlFor="range-select">
          Time range
        </label>
        <select
          id="range-select"
          value={filters.timeRange}
          onChange={(event) =>
            onChange({ ...filters, timeRange: event.target.value as DashboardFilters["timeRange"] })
          }
          className="bg-transparent text-sm font-semibold text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300"
        >
          {timeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-2 shadow-soft">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Segment
        </span>
        <label className="sr-only" htmlFor="segment-select">
          Segment
        </label>
        <select
          id="segment-select"
          value={filters.segment}
          onChange={(event) =>
            onChange({ ...filters, segment: event.target.value as DashboardFilters["segment"] })
          }
          className="bg-transparent text-sm font-semibold text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300"
        >
          {segmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;
