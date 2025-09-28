/**
 * Theme configuration and color systems
 */

export const CATEGORY_COLORS: Record<string, { base: string; tint: string }> = {
  "food": { base: "#22d3ee", tint: "#99f6e4" },
  "books": { base: "#34d399", tint: "#a7f3d0" },
  "transportation": { base: "#60a5fa", tint: "#bfdbfe" },
  "housing": { base: "#818cf8", tint: "#c7d2fe" },
  "shopping": { base: "#f472b6", tint: "#fbcfe8" },
  "entertainment": { base: "#f59e0b", tint: "#fde68a" },
  "utilities": { base: "#a78bfa", tint: "#ddd6fe" },
  "healthcare": { base: "#f87171", tint: "#fecaca" },
  "tuition": { base: "#06b6d4", tint: "#67e8f9" },
  "income": { base: "#10b981", tint: "#6ee7b7" },
  "refund": { base: "#10b981", tint: "#6ee7b7" },
  "other": { base: "#94a3b8", tint: "#cbd5e1" },
};

export const KPI_COLORS = {
  positive: "#10b981", // emerald-500
  positiveLight: "#34d399", // emerald-400
  negative: "#ef4444", // red-500
  negativeLight: "#f87171", // red-400
  neutral: "#6b7280", // gray-500
  warning: "#f59e0b", // amber-500
};

export const getCategoryColor = (category: string) => {
  return CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS.other;
};

export const getKPIColor = (value: number, type: 'income' | 'expense' | 'savings' | 'net') => {
  if (type === 'savings') {
    return value >= 20 ? KPI_COLORS.positive : value >= 10 ? KPI_COLORS.warning : KPI_COLORS.negative;
  }
  if (type === 'net') {
    return value >= 0 ? KPI_COLORS.positive : KPI_COLORS.negative;
  }
  return type === 'income' ? KPI_COLORS.positive : KPI_COLORS.negative;
};
