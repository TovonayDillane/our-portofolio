import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine des classes Tailwind conditionnelles sans conflits (ex: cn("p-2", isActive && "p-4")).
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
