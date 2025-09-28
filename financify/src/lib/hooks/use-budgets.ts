import { useQuery } from "@tanstack/react-query"
import { fetchMonthMetrics } from "@/lib/api"

// Query keys
export const budgetKeys = {
  all: ['budgets'] as const,
  lists: () => [...budgetKeys.all, 'list'] as const,
}

// Hooks
export function useBudgets() {
  return useQuery({
    queryKey: budgetKeys.lists(),
    queryFn: () => fetchMonthMetrics(new Date().toISOString().slice(0, 7)),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}