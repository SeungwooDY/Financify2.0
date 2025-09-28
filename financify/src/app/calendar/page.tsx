"use client"

import React, { useState, useMemo, Suspense, useEffect } from "react"

export const dynamic = 'force-dynamic'
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { useMonthMetrics } from "@/lib/hooks"
import { 
  CalendarGrid,
  CalendarHeader,
  CalendarSummary,
  SpendingLegend,
  DayTransactionModal
} from "@/components/calendar"
import { Card, CardContent } from "@/components/ui/Card"
import { Heading, Text } from "@/components/ui/typography"
import { AlertCircle } from "lucide-react"
import { getCalendarData } from "@/lib/api"

function CalendarContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const month = searchParams.get('month') || '2025-08'
  const [currentDate, setCurrentDate] = useState(new Date())
  const [calendarData, setCalendarData] = useState<any>(null)
  const [isLoadingCalendar, setIsLoadingCalendar] = useState(true)
  const [selectedDay, setSelectedDay] = useState<{
    date: string
    transactions: any[]
    totalSpending: number
    totalIncome: number
  } | null>(null)
  const { data: monthMetrics, isLoading, error } = useMonthMetrics(month)

  // Fetch calendar data from backend
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        setIsLoadingCalendar(true)
        const userId = "demo_user_123" // In production, this would come from auth context
        const [year, monthNum] = month.split('-').map(Number)
        const result = await getCalendarData(userId, year, monthNum)
        
        if (result.success && result.data) {
          setCalendarData(result.data)
        }
      } catch (error) {
        console.error('Error fetching calendar data:', error)
      } finally {
        setIsLoadingCalendar(false)
      }
    }

    fetchCalendarData()
  }, [month])

  // Use real calendar data from backend
  const dailySpendingData = useMemo(() => {
    if (calendarData?.daily_data) {
      // Map real calendar data to expected format
      return Object.entries(calendarData.daily_data).map(([date, data]: [string, any]) => ({
        date: date,
        totalSpending: {
          amount: data.expenses, // Use expenses for calendar heatmap
          currency: "USD",
          symbol: "$"
        },
        totalIncome: {
          amount: data.income,
          currency: "USD",
          symbol: "$"
        },
        transactionCount: data.transactions.length,
        transactions: data.transactions, // Include actual transactions
        categories: [] // Will be calculated from transactions if needed
      }))
    }
    
    // Fallback to mock data if no real data available
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
        transactions: [], // Empty for mock data
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
  }, [calendarData, monthMetrics?.data, currentDate])

  const handleDayClick = (date: string) => {
    // Find the day data from our daily spending data
    const dayData = dailySpendingData.find(day => day.date === date)
    if (dayData) {
      setSelectedDay({
        date: date,
        transactions: dayData.transactions || [],
        totalSpending: dayData.totalSpending.amount,
        totalIncome: (dayData as any).totalIncome?.amount || 0
      })
    }
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
      <Card className="card-standard">
        <CardContent className="p-12 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <Heading as="h2" size="xl" className="mb-2">Error Loading Calendar</Heading>
          <Text color="muted">
            There was a problem loading your calendar data. Please try again.
          </Text>
        </CardContent>
      </Card>
    )
  }

  if (isLoading || isLoadingCalendar) {
    return (
      <main className="container-5xl py-8">
        <div className="space-y-6">
          <div className="text-center mb-4">
            <div className="text-sm text-text-tertiary">
              {isLoadingCalendar ? 'Loading calendar data from uploaded bank statements...' : 'Loading calendar...'}
            </div>
          </div>
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
    <main className="min-h-screen">
      <div className="max-w-[1600px] mx-auto px-12 py-20">
        <div className="mb-8">
          <Heading as="h1" size="4xl" balance={false} className="mb-6">Spending Heatmap</Heading>
          <Text size="lg" color="muted" className="max-w-7xl mx-auto leading-relaxed px-4" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Visualize your daily spending patterns and trends with an interactive calendar. 
            Track your financial habits, identify spending spikes, and discover patterns in your daily expenses.
          </Text>
        </div>

        {/* Month header with mini legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />
        </motion.div>

        {/* Calendar Grid 7×5/6 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="card-elevated">
            <CardContent className="p-6">
              <CalendarGrid
                monthMetrics={mockMonthMetrics}
                currentDate={currentDate}
                onDayClick={handleDayClick}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <CalendarSummary
            monthMetrics={mockMonthMetrics}
          />
        </motion.div>

        {/* Transaction Modal */}
        {selectedDay && (
          <DayTransactionModal
            isOpen={!!selectedDay}
            onClose={() => setSelectedDay(null)}
            date={selectedDay.date}
            transactions={selectedDay.transactions}
            totalSpending={selectedDay.totalSpending}
            totalIncome={selectedDay.totalIncome}
          />
        )}
      </div>
    </main>
  )
}

export default function CalendarPage() {
  return (
    <Suspense fallback={
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
    }>
      <CalendarContent />
    </Suspense>
  )
}