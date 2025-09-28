"use client"

import { useCallback, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { TransactionCategory } from "@/lib/types"

interface TransactionFilters {
  categories: TransactionCategory[]
  merchant: string
  dateFrom: string
  dateTo: string
  sortBy: 'date' | 'amount' | 'merchant' | 'category'
  sortOrder: 'asc' | 'desc'
  density: 'comfortable' | 'compact'
  // Quick filter types
  timeFilters: string[] // 'weekday', 'weekend'
  locationFilters: string[] // 'on-campus', 'off-campus'
}

// const DEFAULT_FILTERS: TransactionFilters = {
//   categories: [],
//   merchant: '',
//   dateFrom: '',
//   dateTo: '',
//   sortBy: 'date',
//   sortOrder: 'desc',
//   density: 'comfortable'
// }

export function useTransactionFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filters = useMemo(() => {
    const categories = searchParams.get('categories')?.split(',').filter(Boolean) as TransactionCategory[] || []
    const merchant = searchParams.get('merchant') || ''
    const dateFrom = searchParams.get('from') || ''
    const dateTo = searchParams.get('to') || ''
    const sortBy = (searchParams.get('sortBy') as 'date' | 'amount' | 'merchant' | 'category') || 'date'
    const sortOrder = (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc'
    const density = (searchParams.get('density') as 'comfortable' | 'compact') || 'comfortable'
    const timeFilters = searchParams.get('timeFilters')?.split(',').filter(Boolean) || []
    const locationFilters = searchParams.get('locationFilters')?.split(',').filter(Boolean) || []

    return {
      categories,
      merchant,
      dateFrom,
      dateTo,
      sortBy,
      sortOrder,
      density,
      timeFilters,
      locationFilters
    }
  }, [searchParams])

  const updateFilters = useCallback((updates: Partial<TransactionFilters>) => {
    const params = new URLSearchParams(searchParams)
    
    // Update categories
    if (updates.categories !== undefined) {
      if (updates.categories.length > 0) {
        params.set('categories', updates.categories.join(','))
      } else {
        params.delete('categories')
      }
    }

    // Update merchant
    if (updates.merchant !== undefined) {
      if (updates.merchant) {
        params.set('merchant', updates.merchant)
      } else {
        params.delete('merchant')
      }
    }

    // Update date range
    if (updates.dateFrom !== undefined) {
      if (updates.dateFrom) {
        params.set('from', updates.dateFrom)
      } else {
        params.delete('from')
      }
    }

    if (updates.dateTo !== undefined) {
      if (updates.dateTo) {
        params.set('to', updates.dateTo)
      } else {
        params.delete('to')
      }
    }

    // Update sorting
    if (updates.sortBy !== undefined) {
      params.set('sortBy', updates.sortBy)
    }

    if (updates.sortOrder !== undefined) {
      params.set('sortOrder', updates.sortOrder)
    }

    // Update density
    if (updates.density !== undefined) {
      params.set('density', updates.density)
    }

    // Update time filters
    if (updates.timeFilters !== undefined) {
      if (updates.timeFilters.length > 0) {
        params.set('timeFilters', updates.timeFilters.join(','))
      } else {
        params.delete('timeFilters')
      }
    }

    // Update location filters
    if (updates.locationFilters !== undefined) {
      if (updates.locationFilters.length > 0) {
        params.set('locationFilters', updates.locationFilters.join(','))
      } else {
        params.delete('locationFilters')
      }
    }

    // Update URL
    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.push(newUrl, { scroll: false })
  }, [router, searchParams])

  const toggleCategory = useCallback((category: TransactionCategory) => {
    const currentCategories = filters.categories
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter(c => c !== category)
      : [...currentCategories, category]
    
    updateFilters({ categories: newCategories })
  }, [filters.categories, updateFilters])

  const clearAllFilters = useCallback(() => {
    updateFilters({
      categories: [],
      merchant: '',
      dateFrom: '',
      dateTo: '',
      timeFilters: [],
      locationFilters: []
    })
  }, [updateFilters])

  const hasActiveFilters = useMemo(() => {
    return filters.categories.length > 0 || 
           filters.merchant.length > 0 || 
           filters.dateFrom.length > 0 || 
           filters.dateTo.length > 0 ||
           filters.timeFilters.length > 0 ||
           filters.locationFilters.length > 0
  }, [filters.categories, filters.merchant, filters.dateFrom, filters.dateTo, filters.timeFilters, filters.locationFilters])

  const toggleTimeFilter = useCallback((filter: string) => {
    const currentFilters = filters.timeFilters
    const newFilters = currentFilters.includes(filter)
      ? currentFilters.filter(f => f !== filter)
      : [...currentFilters, filter]
    
    updateFilters({ timeFilters: newFilters })
  }, [filters.timeFilters, updateFilters])

  const toggleLocationFilter = useCallback((filter: string) => {
    const currentFilters = filters.locationFilters
    const newFilters = currentFilters.includes(filter)
      ? currentFilters.filter(f => f !== filter)
      : [...currentFilters, filter]
    
    updateFilters({ locationFilters: newFilters })
  }, [filters.locationFilters, updateFilters])

  return {
    filters,
    updateFilters,
    toggleCategory,
    toggleTimeFilter,
    toggleLocationFilter,
    clearAllFilters,
    hasActiveFilters
  }
}
