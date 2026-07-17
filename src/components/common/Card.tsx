import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  animated?: boolean;
}

export default function Card({ children, className, hover = true, glass = false, animated = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-smooth",
        glass 
          ? "glass dark:glass-dark"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
        hover && "hover:shadow-soft-lg hover:scale-105",
        animated && "animate-fade-in hover:shadow-soft-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
