import Card from "@/components/ui/Card";
import type { DerivedMetrics } from "@/features/dashboard/types";

const formatSigned = (value: number) => {
  const rounded = Math.round(value);
  return `${rounded > 0 ? "+" : ""}${rounded}`;
};

type DerivedMetricsBarProps = {
  metrics: DerivedMetrics;
};

const DerivedMetricsBar = ({ metrics }: DerivedMetricsBarProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Trend delta
        </p>
        <p className="font-display text-2xl text-ink-900">
          {formatSigned(metrics.trendDelta)} pts
        </p>
        <p className="text-xs text-ink-500">{metrics.timeRangeLabel}</p>
      </Card>
      <Card className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Average signal
        </p>
        <p className="font-display text-2xl text-ink-900">
          {Math.round(metrics.trendAverage)} pts
        </p>
        <p className="text-xs text-ink-500">{metrics.segmentLabel}</p>
      </Card>
      <Card className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Top stage
        </p>
        <p className="font-display text-2xl text-ink-900">{metrics.topStage}</p>
        <p className="text-xs text-ink-500">
          {metrics.topStageValue} accounts
        </p>
      </Card>
    </div>
  );
};

export default DerivedMetricsBar;
