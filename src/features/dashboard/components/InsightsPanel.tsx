import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { AiInsight } from "@/features/dashboard/types";

type InsightsPanelProps = {
  insight: AiInsight;
  context?: string | null;
  rationale?: string[];
  showRationale?: boolean;
};

const InsightsPanel = ({
  insight,
  context,
  rationale = [],
  showRationale = false
}: InsightsPanelProps) => {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            AI Insights
          </p>
          <h3 className="font-display text-xl text-ink-900">{insight.title}</h3>
        </div>
        <Badge tone="positive">Synthesized</Badge>
      </div>
      {context ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          {context}
        </p>
      ) : null}
      <p className="text-sm text-ink-600">{insight.summary}</p>
      <div className="space-y-2">
        {insight.bullets.map((bullet) => (
          <div
            key={bullet}
            className="flex items-start gap-2 rounded-xl bg-ink-50 px-3 py-2 text-sm text-ink-700"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
      {showRationale && rationale.length ? (
        <div className="mt-2 rounded-xl border border-ink-100 bg-ink-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            Model rationale
          </p>
          <ul className="mt-2 space-y-2 text-sm text-ink-600">
            {rationale.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Card>
  );
};

export default InsightsPanel;
