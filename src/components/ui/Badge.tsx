import type { ReactNode } from "react";

type BadgeTone = "positive" | "neutral" | "warning";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneStyles: Record<BadgeTone, string> = {
  positive: "bg-moss-100 text-moss-700",
  neutral: "bg-ink-100 text-ink-600",
  warning: "bg-amber-100 text-amber-700"
};

const Badge = ({ children, tone = "neutral" }: BadgeProps) => {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        toneStyles[tone]
      ].join(" ")}
    >
      {children}
    </span>
  );
};

export default Badge;
