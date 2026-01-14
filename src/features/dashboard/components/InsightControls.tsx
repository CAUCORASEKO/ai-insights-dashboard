import type { KpiMetric } from "@/features/dashboard/types";

type InsightControlsProps = {
  focusMetricId: string | null;
  metrics: KpiMetric[];
  showRationale: boolean;
  onFocusChange: (nextId: string) => void;
  onToggleRationale: (nextValue: boolean) => void;
};

const InsightControls = ({
  focusMetricId,
  metrics,
  showRationale,
  onFocusChange,
  onToggleRationale
}: InsightControlsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink-100 bg-white/70 px-4 py-3 shadow-soft">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Insight focus
        </span>
        <label className="sr-only" htmlFor="focus-metric-select">
          Focus metric
        </label>
        <select
          id="focus-metric-select"
          value={focusMetricId ?? ""}
          onChange={(event) => onFocusChange(event.target.value)}
          className="bg-transparent text-sm font-semibold text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-300"
        >
          {metrics.map((metric) => (
            <option key={metric.id} value={metric.id}>
              {metric.label}
            </option>
          ))}
        </select>
      </div>
      <label className="flex items-center gap-3 text-sm font-semibold text-ink-600">
        <span>Show rationale</span>
        <span className="relative inline-flex h-6 w-11 items-center">
          <input
            type="checkbox"
            aria-label="Toggle insight rationale"
            checked={showRationale}
            onChange={(event) => onToggleRationale(event.target.checked)}
            className="peer sr-only"
          />
          <span className="absolute h-5 w-10 rounded-full bg-ink-200 transition peer-checked:bg-sky-500" />
          <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4" />
        </span>
      </label>
    </div>
  );
};

export default InsightControls;
