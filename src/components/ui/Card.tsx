import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={[
        "rounded-2xl border border-ink-100 bg-white/80 p-6 shadow-soft",
        className ?? ""
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Card;
