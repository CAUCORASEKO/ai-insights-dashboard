import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { KpiMetric } from "@/features/dashboard/types";

const trendConfig: Record<KpiMetric["trend"], { icon: string; tone: "positive" | "warning" | "neutral" }> = {
  up: { icon: "▲", tone: "positive" },
  down: { icon: "▼", tone: "warning" },
  flat: { icon: "•", tone: "neutral" }
};

type KpiCardProps = {
  metric: KpiMetric;
};

const KpiCard = ({ metric }: KpiCardProps) => {
  const trend = trendConfig[metric.trend];

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink-500">{metric.label}</p>
        <Badge tone={trend.tone}>
          {trend.icon} {metric.delta}
        </Badge>
      </div>
      <p className="font-display text-2xl text-ink-900">{metric.value}</p>
    </Card>
  );
};

export default KpiCard;
