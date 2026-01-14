import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { InsightCard } from "@/features/dashboard/types";

type InsightCardsProps = {
  cards: InsightCard[];
};

const InsightCards = ({ cards }: InsightCardsProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.id} className="flex flex-col gap-4">
          <div>
            <h4 className="text-base font-semibold text-ink-900">{card.title}</h4>
            <p className="mt-2 text-sm text-ink-600">{card.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default InsightCards;
