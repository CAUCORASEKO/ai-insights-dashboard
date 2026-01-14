import type { KpiMetric } from "@/features/dashboard/types";
import KpiCard from "@/features/dashboard/components/KpiCard";

type KpiGridProps = {
  metrics: KpiMetric[];
};

const KpiGrid = ({ metrics }: KpiGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <KpiCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
};

export default KpiGrid;
