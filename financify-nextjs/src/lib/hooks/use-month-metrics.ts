import { useQuery } from "@tanstack/react-query"
import { fetchMonthMetrics } from "@/lib/api"

// Query keys
export const monthMetricsKeys = {
  all: ['monthMetrics'] as const,
  byMonth: (month: string) => [...monthMetricsKeys.all, 'byMonth', month] as const,
}

// Hooks
export function useMonthMetrics(month: string = new Date().toISOString().slice(0, 7)) {
  return useQuery({
    queryKey: monthMetricsKeys.byMonth(month),
    queryFn: () => fetchMonthMetrics(month),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
