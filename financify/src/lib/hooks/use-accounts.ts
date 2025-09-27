import { useQuery } from "@tanstack/react-query"
import { fetchMonthMetrics } from "@/lib/api"

// Query keys
export const accountKeys = {
  all: ['accounts'] as const,
  lists: () => [...accountKeys.all, 'list'] as const,
}

// Hooks
export function useAccounts() {
  return useQuery({
    queryKey: accountKeys.lists(),
    queryFn: () => fetchMonthMetrics(new Date().toISOString().slice(0, 7)),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}