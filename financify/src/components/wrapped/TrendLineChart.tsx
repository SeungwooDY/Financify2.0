"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthMetrics } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"
import { VizLine } from "@/lib/viz"

interface TrendLineChartProps {
  metrics: MonthMetrics
  className?: string
}

// Generate mock daily spending data for the trend line
function generateDailySpendingData(metrics: MonthMetrics) {
  const daysInMonth = new Date(metrics.month + '-01').getDate()
  const data: Array<{ day: string; date: string; spending: number; cumulative: number }> = []
  
  // Create a realistic spending pattern with some variation
  const baseDailyAmount = metrics.spendingPatterns.averageDailySpending.amount
  // const highestDayAmount = metrics.spendingPatterns.highestSpendingDay.amount.amount
  
  for (let day = 1; day <= daysInMonth; day++) {
    // Add some realistic variation to daily spending
    const variation = (Math.sin(day * 0.3) * 0.3 + Math.random() * 0.4 - 0.2)
    const isWeekend = new Date(metrics.month + `-${day.toString().padStart(2, '0')}`).getDay() % 6 === 0
    const weekendMultiplier = isWeekend ? 1.2 : 0.9
    
    const amount = Math.max(0, baseDailyAmount * (1 + variation) * weekendMultiplier)
    
    data.push({
      day: day.toString(),
      date: `${metrics.month}-${day.toString().padStart(2, '0')}`,
      spending: Math.round(amount),
      cumulative: data.length > 0 ? data[data.length - 1].cumulative + Math.round(amount) : Math.round(amount)
    })
  }
  
  return data
}

export function TrendLineChart({ metrics, className }: TrendLineChartProps) {
  const dailyData = generateDailySpendingData(metrics)
  
  const totalSpending = dailyData.reduce((sum, day) => sum + day.spending, 0)
  const averageDaily = totalSpending / dailyData.length
  const highestDay = dailyData.reduce((max, day) => day.spending > max.spending ? day : max, dailyData[0])
  
  const isTrendingUp = metrics.trends.weekOverWeek.expenseChange > 0
  const trendIcon = isTrendingUp ? TrendingUp : TrendingDown
  const trendColor = isTrendingUp ? "text-red-500" : "text-green-500"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn("relative", className)}
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900">
            Daily Spending Trend
          </CardTitle>
          <p className="text-sm text-gray-600">
            Your spending pattern throughout the month
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center p-3 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(averageDaily, metrics.totalExpenses.currency, { showCents: false })}
              </div>
              <div className="text-xs text-gray-600">Daily Average</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-center p-3 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl font-bold text-gray-900">
                {highestDay.day}
              </div>
              <div className="text-xs text-gray-600">Highest Day</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-center p-3 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl font-bold text-gray-900">
                {dailyData.filter(d => d.spending > averageDaily).length}
              </div>
              <div className="text-xs text-gray-600">Above Avg Days</div>
            </motion.div>
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="h-64"
          >
            <VizLine
              data={dailyData}
              xKey="day"
              yKey="spending"
              title="Daily Spending Trend"
              description="Your spending pattern throughout the month"
              type="line"
              strokeWidth={2}
              responsive
              showTooltip
              showLegend={false}
              onPointClick={(data) => {
                // Optional: Handle point clicks for drill-down functionality
                console.log('Clicked on day:', data.day, 'Spending:', data.spending)
              }}
            />
          </motion.div>

          {/* Trend Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-full", isTrendingUp ? "bg-red-100" : "bg-green-100")}>
                {React.createElement(trendIcon, { 
                  className: cn("h-4 w-4", trendColor) 
                })}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Spending Trend</p>
                <p className="text-sm text-gray-600">
                  {isTrendingUp ? (
                    <>Your spending is <span className="font-semibold text-red-600">increasing</span> by {Math.abs(metrics.trends.weekOverWeek.expenseChange).toFixed(1)}% week over week.</>
                  ) : (
                    <>Your spending is <span className="font-semibold text-green-600">decreasing</span> by {Math.abs(metrics.trends.weekOverWeek.expenseChange).toFixed(1)}% week over week.</>
                  )}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Screen reader fallback */}
          <div className="sr-only">
            <table>
              <caption>Daily spending data for {metrics.month}</caption>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Daily Spending</th>
                  <th>Cumulative Spending</th>
                </tr>
              </thead>
              <tbody>
                {dailyData.map(day => (
                  <tr key={day.day}>
                    <td>{day.day}</td>
                    <td>{day.date}</td>
                    <td>{formatCurrency(day.spending, metrics.totalExpenses.currency)}</td>
                    <td>{formatCurrency(day.cumulative, metrics.totalExpenses.currency)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
