import type {
  DashboardData,
  DashboardFilters,
  DerivedMetrics,
  KpiMetric
} from "@/features/dashboard/types";

const timeRangeLabels: Record<DashboardFilters["timeRange"], string> = {
  "7d": "Last 7 days",
  "30d": "Last 30 days",
  "90d": "Last 90 days"
};

const segmentLabels: Record<DashboardFilters["segment"], string> = {
  all: "All segments",
  enterprise: "Enterprise",
  "mid-market": "Mid-market",
  smb: "SMB"
};

const formatSigned = (value: number) => {
  const rounded = Math.round(value);
  return `${rounded > 0 ? "+" : ""}${rounded}`;
};

export const getDerivedMetrics = (
  data: DashboardData,
  filters: DashboardFilters
): DerivedMetrics => {
  const trendValues = data.trend.map((point) => point.value);
  const firstValue = trendValues[0] ?? 0;
  const lastValue = trendValues[trendValues.length - 1] ?? firstValue;
  const trendDelta = lastValue - firstValue;
  const trendAverage = trendValues.length
    ? trendValues.reduce((sum, value) => sum + value, 0) / trendValues.length
    : 0;

  const topStage = data.distribution.length
    ? data.distribution.reduce(
        (top, stage) => (stage.value > top.value ? stage : top),
        data.distribution[0]
      )
    : null;

  return {
    trendDelta,
    trendAverage,
    topStage: topStage?.label ?? "-",
    topStageValue: topStage?.value ?? 0,
    timeRangeLabel: timeRangeLabels[filters.timeRange],
    segmentLabel: segmentLabels[filters.segment]
  };
};

export const buildRationale = (options: {
  derived: DerivedMetrics;
  focusMetric?: KpiMetric | null;
}) => {
  const { derived, focusMetric } = options;

  const rationale = [
    `Trend moved ${formatSigned(derived.trendDelta)} points across ${derived.timeRangeLabel.toLowerCase()}.`,
    `Highest activity sits in ${derived.topStage} (${derived.topStageValue} accounts).`
  ];

  if (focusMetric) {
    rationale.push(
      `Focus metric ${focusMetric.label.toLowerCase()} shifted ${focusMetric.delta}.`
    );
  }

  return rationale;
};
