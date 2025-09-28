import { useQuery } from "@tanstack/react-query"
import { fetchTransactions } from "@/lib/api"

// Query keys
export const transactionKeys = {
  all: ['transactions'] as const,
  lists: () => [...transactionKeys.all, 'list'] as const,
  list: (page: number, limit: number) => [...transactionKeys.lists(), { page, limit }] as const,
}

// Hooks
export function useTransactions(page = 1, limit = 10) {
  return useQuery({
    queryKey: transactionKeys.list(page, limit),
    queryFn: () => fetchTransactions({ page, limit }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}