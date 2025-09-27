"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MonthMetrics } from "@/lib/types"
import { getKPIColor } from "@/lib/theme"
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

interface WrappedSummaryCardProps {
  metrics: MonthMetrics
  className?: string
}

const KPI_ITEMS = [
  {
    key: 'netIncome',
    label: 'Net Income',
    icon: DollarSign,
    type: 'net' as const,
    getValue: (metrics: MonthMetrics) => metrics.netIncome.amount,
    format: (value: number) => `$${value.toLocaleString()}`,
    getCaption: (metrics: MonthMetrics) => 
      metrics.netIncome.amount >= 0 ? 'Great progress!' : 'Room to improve'
  },
  {
    key: 'savingsRate',
    label: 'Savings Rate',
    icon: Target,
    type: 'savings' as const,
    getValue: (metrics: MonthMetrics) => metrics.savingsRate,
    format: (value: number) => `${value.toFixed(1)}%`,
    getCaption: (metrics: MonthMetrics) => 
      metrics.savingsRate >= 20 ? 'Excellent!' : 
      metrics.savingsRate >= 10 ? 'On track' : 'Needs attention'
  },
  {
    key: 'totalIncome',
    label: 'Income',
    icon: TrendingUp,
    type: 'income' as const,
    getValue: (metrics: MonthMetrics) => metrics.totalIncome.amount,
    format: (value: number) => `$${value.toLocaleString()}`,
    getCaption: () => 'This month'
  },
  {
    key: 'totalExpenses',
    label: 'Expenses',
    icon: TrendingDown,
    type: 'expense' as const,
    getValue: (metrics: MonthMetrics) => metrics.totalExpenses.amount,
    format: (value: number) => `$${value.toLocaleString()}`,
    getCaption: () => 'This month'
  }
]

export function WrappedSummaryCard({ metrics, className }: WrappedSummaryCardProps) {
  return (
    <Card className={`card-glass ${className}`}>
      <CardContent className="p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {KPI_ITEMS.map((item) => {
            const value = item.getValue(metrics)
            const color = getKPIColor(value, item.type)
            const Icon = item.icon
            const isPositive = item.type === 'net' ? value >= 0 : 
                             item.type === 'savings' ? value >= 10 : 
                             item.type === 'income'
            
            return (
              <div key={item.key} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${color}15`,
                      border: `1px solid ${color}30`
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-text-tertiary mb-1">
                      {item.label}
                    </div>
                    <div className="flex items-center">
                      {isPositive ? (
                        <ArrowUpRight className="w-3 h-3 mr-1" style={{ color }} />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 mr-1" style={{ color }} />
                      )}
                      <span className="text-xs text-text-tertiary">
                        {item.getCaption(metrics)}
                      </span>
                    </div>
                  </div>
                </div>
                <div 
                  className="text-2xl font-bold tabular-nums"
                  style={{ color }}
                >
                  {item.format(value)}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}