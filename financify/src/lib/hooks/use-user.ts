import { useQuery } from "@tanstack/react-query"
import { fetchCurrentUser } from "@/lib/api"

// Query keys
export const userKeys = {
  all: ['user'] as const,
  current: () => [...userKeys.all, 'current'] as const,
}

// Hooks
export function useCurrentUser() {
  return useQuery({
    queryKey: userKeys.current(),
    queryFn: () => fetchCurrentUser(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}