import type { DashboardData, DashboardFilters } from "@/features/dashboard/types";

const baseData: DashboardData = {
  kpis: [
    {
      id: "pipeline",
      label: "Qualified pipeline",
      value: "$4.2M",
      delta: "+12.4%",
      trend: "up"
    },
    {
      id: "retention",
      label: "Retention lift",
      value: "8.6%",
      delta: "+1.1%",
      trend: "up"
    },
    {
      id: "cycle",
      label: "Decision cycle",
      value: "21 days",
      delta: "-2.3%",
      trend: "down"
    },
    {
      id: "risk",
      label: "Risk exposure",
      value: "2.4%",
      delta: "+0.4%",
      trend: "up"
    }
  ],
  trend: [
    { label: "Wk 1", value: 62 },
    { label: "Wk 2", value: 68 },
    { label: "Wk 3", value: 65 },
    { label: "Wk 4", value: 73 },
    { label: "Wk 5", value: 79 },
    { label: "Wk 6", value: 82 }
  ],
  distribution: [
    { label: "Discovery", value: 38 },
    { label: "Evaluation", value: 54 },
    { label: "Pilot", value: 27 },
    { label: "Negotiation", value: 18 }
  ],
  insightCards: [
    {
      id: "intent",
      title: "Intent signals improving",
      description:
        "Healthcare and fintech accounts show 2.3x higher engagement in the past 14 days.",
      tags: ["Intent", "Growth"]
    },
    {
      id: "expansion",
      title: "Expansion ready cohort",
      description:
        "15 mid-market accounts reached usage thresholds that correlate with 30% upsell lift.",
      tags: ["Expansion", "Mid-market"]
    },
    {
      id: "risk",
      title: "Renewal risk watch",
      description:
        "Enterprise renewals in Q2 show early churn signals tied to feature adoption gaps.",
      tags: ["Risk", "Enterprise"]
    }
  ],
  aiInsight: {
    title: "AI Opportunity Brief",
    summary:
      "Pipeline momentum remains strong, but renewal risk is concentrated in enterprise accounts with slowed feature adoption.",
    bullets: [
      "Prioritize enablement for enterprise renewals; predicted 18% risk drop.",
      "Mid-market usage thresholds correlate with 1.4x expansion velocity.",
      "Marketing-qualified flow is plateauing in SMB segments; refresh nurture journeys."
    ]
  }
};

const segmentAdjustments: Record<DashboardFilters["segment"], Partial<DashboardData>> = {
  all: {},
  enterprise: {
    kpis: baseData.kpis.map((metric) =>
      metric.id === "risk"
        ? { ...metric, value: "3.1%", delta: "+0.9%", trend: "up" }
        : metric
    ),
    aiInsight: {
      ...baseData.aiInsight,
      summary:
        "Enterprise pipeline is steady, but renewal risk is higher for accounts with adoption gaps.",
      bullets: [
        "Deploy executive-level enablement for top 10 renewals.",
        "Focus on multi-team adoption; correlates with 22% lower churn.",
        "Reduce sales cycle friction by pre-approving security reviews."
      ]
    }
  },
  "mid-market": {
    kpis: baseData.kpis.map((metric) =>
      metric.id === "pipeline"
        ? { ...metric, value: "$2.1M", delta: "+18.2%", trend: "up" }
        : metric
    ),
    trend: baseData.trend.map((point, index) => ({
      ...point,
      value: point.value + (index % 2 === 0 ? 6 : 2)
    }))
  },
  smb: {
    kpis: baseData.kpis.map((metric) =>
      metric.id === "cycle"
        ? { ...metric, value: "14 days", delta: "-6.4%", trend: "down" }
        : metric
    ),
    distribution: [
      { label: "Discovery", value: 52 },
      { label: "Evaluation", value: 41 },
      { label: "Pilot", value: 19 },
      { label: "Negotiation", value: 12 }
    ]
  }
};

const rangeAdjustments: Record<DashboardFilters["timeRange"], Partial<DashboardData>> = {
  "7d": {
    trend: baseData.trend.map((point, index) => ({
      ...point,
      value: Math.max(40, point.value - index * 4)
    }))
  },
  "30d": {},
  "90d": {
    trend: baseData.trend.map((point, index) => ({
      ...point,
      value: point.value + index * 3
    })),
    insightCards: baseData.insightCards.map((card) => ({
      ...card,
      description: `${card.description} Signals are consistent over 90 days.`
    }))
  }
};

export const getDashboardData = (filters: DashboardFilters): DashboardData => {
  const segmentData = segmentAdjustments[filters.segment];
  const rangeData = rangeAdjustments[filters.timeRange];

  return {
    ...baseData,
    ...segmentData,
    ...rangeData,
    kpis: rangeData.kpis ?? segmentData.kpis ?? baseData.kpis,
    trend: rangeData.trend ?? segmentData.trend ?? baseData.trend,
    distribution:
      rangeData.distribution ?? segmentData.distribution ?? baseData.distribution,
    insightCards:
      rangeData.insightCards ?? segmentData.insightCards ?? baseData.insightCards,
    aiInsight: rangeData.aiInsight ?? segmentData.aiInsight ?? baseData.aiInsight
  };
};
