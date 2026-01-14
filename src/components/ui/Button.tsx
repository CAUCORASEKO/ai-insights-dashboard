import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink-900 text-white hover:bg-ink-800 focus-visible:ring-ink-600",
  secondary:
    "bg-ink-100 text-ink-800 hover:bg-ink-200 focus-visible:ring-ink-400",
  ghost:
    "bg-transparent text-ink-600 hover:bg-ink-100 hover:text-ink-900 focus-visible:ring-ink-300"
};

const Button = ({ children, variant = "secondary", onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold",
        "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variantStyles[variant]
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
