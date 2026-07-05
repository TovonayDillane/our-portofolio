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
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
  secondary:
    "border border-slate-300 text-slate-900 hover:border-slate-900 dark:border-slate-700 dark:text-white dark:hover:border-white",
  ghost: "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
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
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
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
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
