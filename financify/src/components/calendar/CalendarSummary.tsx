"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { MonthMetrics } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Calendar, DollarSign } from "lucide-react"

interface CalendarSummaryProps {
  monthMetrics: MonthMetrics
  // currentDate: Date
  className?: string
}

export function CalendarSummary({
  monthMetrics,
  // currentDate,
  className
}: CalendarSummaryProps) {
  const summaryData = useMemo(() => {
    const dailyData = monthMetrics.trend_daily
    const totalDays = dailyData.length
    const daysWithSpending = dailyData.filter(day => day.totalSpending.amount > 0).length
    const totalSpending = dailyData.reduce((sum, day) => sum + day.totalSpending.amount, 0)
    const averageDaily = totalDays > 0 ? totalSpending / totalDays : 0
    const highestDay = dailyData.reduce((max, day) => 
      day.totalSpending.amount > max.totalSpending.amount ? day : max, 
      dailyData[0] || { totalSpending: { amount: 0 } }
    )
    
    // Calculate spending trend (comparing first half vs second half of month)
    const midMonth = Math.floor(totalDays / 2)
    const firstHalf = dailyData.slice(0, midMonth).reduce((sum, day) => sum + day.totalSpending.amount, 0)
    const secondHalf = dailyData.slice(midMonth).reduce((sum, day) => sum + day.totalSpending.amount, 0)
    const trendDirection = secondHalf > firstHalf ? 'up' : 'down'
    const trendPercentage = firstHalf > 0 ? Math.abs(((secondHalf - firstHalf) / firstHalf) * 100) : 0
    
    return {
      totalDays,
      daysWithSpending,
      totalSpending,
      averageDaily,
      highestDay,
      trendDirection,
      trendPercentage
    }
  }, [monthMetrics.trend_daily])

  const stats = [
    {
      title: "Total Spending",
      value: formatCurrency(summaryData.totalSpending, "USD", { showCents: false }),
      icon: DollarSign,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "this month"
    },
    {
      title: "Daily Average",
      value: formatCurrency(summaryData.averageDaily, "USD", { showCents: false }),
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "per day"
    },
    {
      title: "Active Days",
      value: `${summaryData.daysWithSpending}/${summaryData.totalDays}`,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "with transactions"
    },
    {
      title: "Highest Day",
      value: formatCurrency(summaryData.highestDay.totalSpending.amount, "USD", { showCents: false }),
      icon: summaryData.trendDirection === 'up' ? TrendingUp : TrendingDown,
      color: summaryData.trendDirection === 'up' ? "text-orange-600" : "text-purple-600",
      bgColor: summaryData.trendDirection === 'up' ? "bg-orange-50" : "bg-purple-50",
      description: summaryData.highestDay.date ? new Date(summaryData.highestDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "N/A"
    }
  ]

  return (
    <div className={className}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <div className={cn("p-2 rounded-lg", stat.bgColor)}>
                      <Icon className={cn("h-4 w-4", stat.color)} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={cn("text-2xl font-bold mb-1", stat.color)}>
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
      
      {/* Trend indicator */}
      {summaryData.trendPercentage > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-4"
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                {summaryData.trendDirection === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-purple-600" />
                )}
                <span className="text-sm font-medium">
                  Spending trend: {summaryData.trendDirection === 'up' ? 'increasing' : 'decreasing'} by{' '}
                  <span className={cn(
                    "font-semibold",
                    summaryData.trendDirection === 'up' ? "text-orange-600" : "text-purple-600"
                  )}>
                    {summaryData.trendPercentage.toFixed(1)}%
                  </span>
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
