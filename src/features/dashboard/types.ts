export type KpiTrend = "up" | "down" | "flat";

export type KpiMetric = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: KpiTrend;
};

export type InsightCard = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export type AiInsight = {
  title: string;
  summary: string;
  bullets: string[];
};

export type TrendPoint = {
  label: string;
  value: number;
};

export type DistributionPoint = {
  label: string;
  value: number;
};

export type DashboardData = {
  kpis: KpiMetric[];
  trend: TrendPoint[];
  distribution: DistributionPoint[];
  insightCards: InsightCard[];
  aiInsight: AiInsight;
};

export type DerivedMetrics = {
  trendDelta: number;
  trendAverage: number;
  topStage: string;
  topStageValue: number;
  timeRangeLabel: string;
  segmentLabel: string;
};

export type DashboardFilters = {
  timeRange: "7d" | "30d" | "90d";
  segment: "all" | "enterprise" | "mid-market" | "smb";
};
