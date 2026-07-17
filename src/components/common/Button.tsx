import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-smooth focus-ring cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-soft hover:shadow-soft-lg hover:scale-105 active:scale-95 dark:from-white dark:to-slate-100 dark:text-slate-900",
  secondary:
    "border-2 border-slate-300 text-slate-900 hover:border-slate-900 hover:bg-slate-50 hover:shadow-soft active:scale-95 dark:border-slate-600 dark:text-white dark:hover:bg-slate-900/50",
  ghost: "text-slate-700 hover:text-slate-900 hover:bg-slate-100/50 active:scale-95 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900/30",
};

// Rend un <Link> si `to` est fourni, un <a> si `href` est fourni, sinon un <button>.
export default function Button({
  variant = "primary",
  className,
  children,
  to,
  href,
  target,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        <span className="transition-smooth">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={classes}
      >
        <span className="transition-smooth">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      <span className="transition-smooth">{children}</span>
    </button>
  );
}
