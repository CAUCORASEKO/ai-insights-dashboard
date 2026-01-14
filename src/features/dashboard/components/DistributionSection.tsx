import BarDistributionChart from "@/features/dashboard/components/charts/BarDistributionChart";
import Card from "@/components/ui/Card";
import type { DistributionPoint } from "@/features/dashboard/types";

const DistributionSection = ({ data }: { data: DistributionPoint[] }) => {
  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Stage Mix
        </p>
        <h3 className="font-display text-xl text-ink-900">
          Strong evaluation depth across the funnel
        </h3>
      </div>
      <BarDistributionChart data={data} />
    </Card>
  );
};

export default DistributionSection;
