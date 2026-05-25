import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000)     return (num / 1_000).toFixed(1) + "K";
  return num.toString();
}

export function formatCurrency(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency, minimumFractionDigits: 0 }).format(amount);
}

export const DOMAIN_COLORS = {
  education:   { bg: "bg-brand-500/15", text: "text-brand-300", border: "border-brand-500/30" },
  environment: { bg: "bg-ocean-500/15", text: "text-ocean-300", border: "border-ocean-500/30" },
  social:      { bg: "bg-slate-700/15", text: "text-slate-100", border: "border-slate-700/30" },
  news:        { bg: "bg-ocean-500/15", text: "text-ocean-300", border: "border-ocean-500/30" },
};

export const DOMAIN_LABELS: Record<string, string> = {
  education:   "Éducation",
  environment: "Environnement",
  social:      "Social",
  news:        "Actualités",
  ongoing:     "En cours",
  completed:   "Terminé",
  upcoming:    "À venir",
};
