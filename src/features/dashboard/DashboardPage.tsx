import EmptyState from "@/components/ui/EmptyState";
import LoadingState from "@/components/ui/LoadingState";
import DistributionSection from "@/features/dashboard/components/DistributionSection";
import DerivedMetricsBar from "@/features/dashboard/components/DerivedMetricsBar";
import FiltersBar from "@/features/dashboard/components/FiltersBar";
import InsightCards from "@/components/InsightCards";
import InsightControls from "@/features/dashboard/components/InsightControls";
import InsightsPanel from "@/features/dashboard/components/InsightsPanel";
import KpiGrid from "@/features/dashboard/components/KpiGrid";
import TrendSection from "@/features/dashboard/components/TrendSection";
import { useDashboardData } from "@/features/dashboard/hooks/useDashboardData";

const DashboardPage = () => {
  const {
    data,
    filters,
    setFilters,
    focusMetricId,
    setFocusMetricId,
    derivedMetrics,
    insightContext,
    showRationale,
    setShowRationale,
    rationale,
    isLoading,
    hasData
  } = useDashboardData();

  if (isLoading) {
    return <LoadingState />;
  }

  if (!data || !hasData) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl text-ink-900">Performance overview</h2>
          <p className="text-sm text-ink-500">
            Live pipeline signals enriched by AI-assisted analysis.
          </p>
        </div>
        <FiltersBar filters={filters} onChange={setFilters} />
      </div>

      <KpiGrid metrics={data.kpis} />

      {derivedMetrics ? <DerivedMetricsBar metrics={derivedMetrics} /> : null}

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <TrendSection data={data.trend} />
        <div className="space-y-4">
          <InsightControls
            focusMetricId={focusMetricId}
            metrics={data.kpis}
            showRationale={showRationale}
            onFocusChange={setFocusMetricId}
            onToggleRationale={setShowRationale}
          />
          <InsightsPanel
            insight={data.aiInsight}
            context={insightContext}
            rationale={rationale}
            showRationale={showRationale}
          />
        </div>
      </div>

      <DistributionSection data={data.distribution} />

      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Insight briefs
            </p>
            <h3 className="font-display text-xl text-ink-900">
              Key signals and context
            </h3>
          </div>
        </div>
        <InsightCards cards={data.insightCards} />
      </div>
    </div>
  );
};

export default DashboardPage;
