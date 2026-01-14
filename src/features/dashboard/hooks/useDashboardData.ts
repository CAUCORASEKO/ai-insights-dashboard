import { useEffect, useMemo, useState } from "react";
import { getDashboardData } from "@/data";
import { buildRationale, getDerivedMetrics } from "@/features/dashboard/lib/insightUtils";
import type {
  DashboardData,
  DashboardFilters,
  DerivedMetrics,
  KpiMetric
} from "@/features/dashboard/types";

const defaultFilters: DashboardFilters = {
  timeRange: "30d",
  segment: "all"
};

export const useDashboardData = () => {
  const [filters, setFilters] = useState<DashboardFilters>(defaultFilters);
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [focusMetricId, setFocusMetricId] = useState<string | null>(null);
  const [showRationale, setShowRationale] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => {
      setData(getDashboardData(filters));
      setIsLoading(false);
    }, 600);

    return () => window.clearTimeout(timer);
  }, [filters]);

  useEffect(() => {
    if (!data?.kpis.length) {
      return;
    }

    if (focusMetricId && data.kpis.some((metric) => metric.id === focusMetricId)) {
      return;
    }

    setFocusMetricId(data.kpis[0]?.id ?? null);
  }, [data, focusMetricId]);

  const hasData = useMemo(() => Boolean(data?.kpis.length), [data]);
  const focusMetric = useMemo<KpiMetric | null>(() => {
    if (!data?.kpis.length) {
      return null;
    }

    return (
      data.kpis.find((metric) => metric.id === focusMetricId) ?? data.kpis[0] ?? null
    );
  }, [data, focusMetricId]);

  const derivedMetrics = useMemo<DerivedMetrics | null>(() => {
    if (!data) {
      return null;
    }

    return getDerivedMetrics(data, filters);
  }, [data, filters]);

  const insightContext = useMemo(() => {
    if (!focusMetric || !derivedMetrics) {
      return null;
    }

    return `Focus: ${focusMetric.label} · ${derivedMetrics.segmentLabel} · ${derivedMetrics.timeRangeLabel}`;
  }, [focusMetric, derivedMetrics]);

  const rationale = useMemo(() => {
    if (!derivedMetrics) {
      return [];
    }

    return buildRationale({ derived: derivedMetrics, focusMetric });
  }, [derivedMetrics, focusMetric]);

  return {
    data,
    filters,
    setFilters,
    focusMetricId,
    setFocusMetricId,
    focusMetric,
    derivedMetrics,
    insightContext,
    showRationale,
    setShowRationale,
    rationale,
    isLoading,
    hasData
  };
};
