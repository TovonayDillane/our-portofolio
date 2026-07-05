import { useState, type ReactNode } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export default function Tooltip({ label, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white dark:bg-white dark:text-slate-900"
        >
          {label}
        </span>
      )}
    </span>
  );
}
