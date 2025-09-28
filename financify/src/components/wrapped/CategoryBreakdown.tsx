"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { MonthMetrics } from "@/lib/types"
import { getCategoryColor } from "@/lib/theme"
import { 
  BarChart3,
  TrendingUp,
  DollarSign
} from "lucide-react"

interface CategoryBreakdownProps {
  metrics: MonthMetrics
  className?: string
}

export function CategoryBreakdown({ metrics, className }: CategoryBreakdownProps) {
  const categories = metrics.categoryBreakdown.slice(0, 6)

  return (
    <Card className={`card-elevated ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-accent-1" />
          Spending by Category
        </CardTitle>
        <CardDescription>Click a bar to filter transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map((category, index) => {
            const categoryColor = getCategoryColor(category.category)
            const isTopCategory = index < 3
            
            return (
              <div 
                key={category.category} 
                className="group cursor-pointer hover:bg-muted/10 rounded-lg p-3 -m-3 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: categoryColor.base }}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-text capitalize">
                        {category.category}
                      </h4>
                      {isTopCategory && (
                        <div className="flex items-center text-xs text-accent-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          <span>Top category</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-semibold text-text tabular-nums">
                      ${category.amount.amount.toLocaleString()}
                    </div>
                    <div className="text-xs text-text-tertiary">
                      {category.percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-2 rounded-full transition-all duration-500 group-hover:shadow-sm"
                      style={{ 
                        width: `${category.percentage}%`,
                        background: `linear-gradient(90deg, ${categoryColor.base}, ${categoryColor.tint})`
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-text-tertiary">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" />
                        <span>{category.transactionCount} transactions</span>
                      </div>
                      <div className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-1"
                          style={{ backgroundColor: categoryColor.tint }}
                        />
                        <span>Avg: ${Math.round(category.amount.amount / category.transactionCount).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="font-medium" style={{ color: categoryColor.base }}>
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
