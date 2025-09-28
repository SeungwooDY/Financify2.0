"use client"

import { Suspense } from "react"
import { CategoryBarChart } from "./CategoryBarChart"
import { MonthMetrics } from "@/lib/types"

interface CategoryBarChartWrapperProps {
  metrics: MonthMetrics
  className?: string
}

export function CategoryBarChartWrapper({ metrics, className }: CategoryBarChartWrapperProps) {
  return (
    <Suspense fallback={
      <div className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl rounded-lg p-6">
        <div className="space-y-4">
          <div className="h-6 bg-muted animate-pulse rounded w-48" />
          <div className="h-4 bg-muted animate-pulse rounded w-64" />
          <div className="h-64 bg-muted animate-pulse rounded" />
        </div>
      </div>
    }>
      <CategoryBarChart metrics={metrics} className={className} />
    </Suspense>
  )
}
