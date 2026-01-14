import AreaTrendChart from "@/features/dashboard/components/charts/AreaTrendChart";
import Card from "@/components/ui/Card";
import type { TrendPoint } from "@/features/dashboard/types";

const TrendSection = ({ data }: { data: TrendPoint[] }) => {
  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Velocity Trend
        </p>
        <h3 className="font-display text-xl text-ink-900">
          Pipeline acceleration is holding steady
        </h3>
      </div>
      <AreaTrendChart data={data} />
    </Card>
  );
};

export default TrendSection;
