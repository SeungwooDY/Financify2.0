"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { useMonthMetrics } from "@/lib/hooks"
import { 
  CalendarGrid,
  CalendarHeader,
  CalendarSummary,
  SpendingLegend
} from "@/components/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export default function CalendarPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const month = searchParams.get('month') || '2025-08'
  const [currentDate, setCurrentDate] = useState(new Date())
  const { data: monthMetrics, isLoading, error } = useMonthMetrics(month)

  // Generate mock daily spending data if not available
  const dailySpendingData = useMemo(() => {
    if (!monthMetrics?.data) return []
    
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    
    // Generate realistic daily spending data
    const data = []
    const baseAmount = monthMetrics.data.spendingPatterns.averageDailySpending.amount
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dateString = date.toISOString().split('T')[0]
      
      // Add some realistic variation
      const variation = (Math.sin(day * 0.3) * 0.4 + Math.random() * 0.6 - 0.3)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const weekendMultiplier = isWeekend ? 1.3 : 0.8
      
      const amount = Math.max(0, baseAmount * (1 + variation) * weekendMultiplier)
      
      data.push({
        date: dateString,
        totalSpending: {
          amount: amount,
          currency: "USD",
          symbol: "$"
        },
        transactionCount: Math.floor(Math.random() * 5) + 1,
        categories: [
          {
            category: "food" as const,
            amount: { amount: amount * 0.4, currency: "USD", symbol: "$" },
            percentage: 40
          },
          {
            category: "transportation" as const,
            amount: { amount: amount * 0.3, currency: "USD", symbol: "$" },
            percentage: 30
          },
          {
            category: "entertainment" as const,
            amount: { amount: amount * 0.3, currency: "USD", symbol: "$" },
            percentage: 30
          }
        ]
      })
    }
    
    return data
  }, [monthMetrics?.data, currentDate])

  const handleDayClick = (date: string) => {
    // Deep link to transactions page with date filter
    router.push(`/transactions?from=${date}&to=${date}`)
  }

  const handlePreviousMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() - 1)
      return newDate
    })
  }

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + 1)
      return newDate
    })
  }

  const handleToday = () => {
    setCurrentDate(new Date())
  }

  if (error) {
    return (
      <main className="container-5xl py-8">
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Error Loading Calendar</h2>
            <p className="text-muted-foreground">
              There was a problem loading your calendar data. Please try again.
            </p>
          </CardContent>
        </Card>
      </main>
    )
  }

  if (isLoading) {
    return (
      <main className="container-5xl py-8">
        <div className="space-y-6">
          <div className="h-8 bg-muted animate-pulse rounded w-64" />
          <div className="h-32 bg-muted animate-pulse rounded" />
          <div className="grid grid-cols-7 gap-px bg-muted/20 rounded-md overflow-hidden">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted/10 animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    )
  }

  // Create mock MonthMetrics with daily data
  const mockMonthMetrics = {
    month: currentDate.toISOString().slice(0, 7), // YYYY-MM format
    totalIncome: { amount: 5000, currency: "USD", symbol: "$" },
    totalExpenses: { amount: 3000, currency: "USD", symbol: "$" },
    netIncome: { amount: 2000, currency: "USD", symbol: "$" },
    savingsRate: 40,
    categoryBreakdown: [],
    spendingPatterns: {
      averageDailySpending: { amount: 100, currency: "USD", symbol: "$" },
      highestSpendingDay: { date: "2024-01-15", amount: { amount: 500, currency: "USD", symbol: "$" } },
      mostFrequentCategory: "food" as const,
      mostExpensiveCategory: "housing" as const
    },
    budgetComparison: [],
    trends: {
      weekOverWeek: { incomeChange: 5, expenseChange: -2 },
      monthOverMonth: { incomeChange: 10, expenseChange: 3 }
    },
    alerts: [],
    generatedAt: new Date().toISOString(),
    trend_daily: dailySpendingData
  }

  return (
    <main className="container-5xl py-8">
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">Financial Calendar</h1>
          <p className="text-muted-foreground mt-2">
            Visualize your daily spending patterns and trends
          </p>
        </motion.div>

        {/* Calendar Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />
        </motion.div>

        {/* Calendar Grid and Legend */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card>
              <CardContent className="p-6">
                <CalendarGrid
                  monthMetrics={mockMonthMetrics}
                  currentDate={currentDate}
                  onDayClick={handleDayClick}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <SpendingLegend
              quantiles={{
                q25: 25,
                q50: 50,
                q75: 100,
                q90: 200,
                max: 500
              }}
            />
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <CalendarSummary
            monthMetrics={mockMonthMetrics}
          />
        </motion.div>
      </div>
    </main>
  )
}