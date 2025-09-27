"use client"

import React, { Suspense, lazy } from "react"
import { Card, CardContent } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

// Lazy load chart components
const VizBar = lazy(() => import("@/lib/viz").then(module => ({ default: module.VizBar })))
const VizLine = lazy(() => import("@/lib/viz").then(module => ({ default: module.VizLine })))

interface LazyChartProps {
  type: 'bar' | 'line'
  data: Record<string, unknown>[]
  xKey: string
  yKey: string
  title?: string
  description?: string
  className?: string
  [key: string]: unknown
}

function ChartSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="h-4 bg-muted animate-pulse rounded w-1/3" />
          <div className="h-64 bg-muted animate-pulse rounded" />
          <div className="h-4 bg-muted animate-pulse rounded w-1/4" />
        </div>
      </CardContent>
    </Card>
  )
}

export function LazyChart({ type, ...props }: LazyChartProps) {
  const ChartComponent = type === 'bar' ? VizBar : VizLine

  return (
    <Suspense fallback={<ChartSkeleton />}>
      <ChartComponent {...props} />
    </Suspense>
  )
}
