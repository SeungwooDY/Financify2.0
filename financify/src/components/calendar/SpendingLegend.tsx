"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"

interface SpendingLegendProps {
  quantiles: {
    q25: number
    q50: number
    q75: number
    q90: number
    max: number
  }
  className?: string
}

export function SpendingLegend({ quantiles, className }: SpendingLegendProps) {
  const legendItems = [
    {
      intensity: 0,
      label: "No spending",
      color: "bg-muted/30",
      range: "$0"
    },
    {
      intensity: 1,
      label: "Very low",
      color: "bg-green-100",
      range: `$1 - ${formatCurrency(quantiles.q25, "USD", { showCents: false })}`
    },
    {
      intensity: 2,
      label: "Low",
      color: "bg-green-200",
      range: `${formatCurrency(quantiles.q25, "USD", { showCents: false })} - ${formatCurrency(quantiles.q50, "USD", { showCents: false })}`
    },
    {
      intensity: 3,
      label: "Medium",
      color: "bg-yellow-200",
      range: `${formatCurrency(quantiles.q50, "USD", { showCents: false })} - ${formatCurrency(quantiles.q75, "USD", { showCents: false })}`
    },
    {
      intensity: 4,
      label: "High",
      color: "bg-orange-200",
      range: `${formatCurrency(quantiles.q75, "USD", { showCents: false })} - ${formatCurrency(quantiles.q90, "USD", { showCents: false })}`
    },
    {
      intensity: 5,
      label: "Very high",
      color: "bg-red-200",
      range: `${formatCurrency(quantiles.q90, "USD", { showCents: false })}+`
    }
  ]

  return (
    <Card className={cn("w-full text-content", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium force-normal-wrap">Spending Intensity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-content">
        <div className="grid grid-cols-2 gap-2">
          {legendItems.map((item) => (
            <div key={item.intensity} className="flex items-center gap-2">
              <div 
                className={cn(
                  "w-4 h-4 rounded border border-muted/60",
                  item.color
                )}
                aria-hidden="true"
              />
              <div className="flex-1 min-w-0 w-full">
                <div className="text-xs font-medium text-foreground w-full force-normal-wrap">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground font-mono w-full force-normal-wrap">
                  {item.range}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 border-t border-muted/20">
          <p className="text-xs text-muted-foreground w-full force-normal-wrap">
            Click any day to view detailed transactions
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
