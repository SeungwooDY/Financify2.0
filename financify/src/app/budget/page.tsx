"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useMonthMetrics, useBudgetMode } from "@/lib/hooks"
import { 
  BudgetModeToggle,
  BudgetNudges,
  TargetCaps,
  NextSevenDays
} from "@/components/budget"
import { AlertCircle, PiggyBank } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function BudgetPage() {
  const searchParams = useSearchParams()
  const month = searchParams.get('month') || '2025-08'
  
  const { data: monthMetrics, isLoading, error } = useMonthMetrics(month)
  const { mode, updateMode } = useBudgetMode()

  if (error) {
    return (
      <main className="container-5xl py-8">
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Error Loading Budget Data</h2>
            <p className="text-muted-foreground">
              There was a problem loading your budget information. Please try again.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-32 bg-muted animate-pulse rounded" />
              <div className="h-48 bg-muted animate-pulse rounded" />
            </div>
            <div className="space-y-4">
              <div className="h-48 bg-muted animate-pulse rounded" />
              <div className="h-64 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!monthMetrics?.data) {
    return (
      <main className="container-5xl py-8">
        <Card>
          <CardContent className="p-12 text-center">
            <PiggyBank className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Budget Data Available</h2>
            <p className="text-muted-foreground">
              We need some spending data to help you create a budget. Try uploading some transactions first.
            </p>
          </CardContent>
        </Card>
      </main>
    )
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
          <h1 className="text-3xl font-bold tracking-tight">
            {mode === 'budget' ? 'Budget Planning' : 'Budget Maintenance'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {mode === 'budget' 
              ? 'Set new spending limits and track your progress toward financial goals'
              : 'Monitor your current spending patterns and maintain healthy financial habits'
            }
          </p>
        </motion.div>

        {/* Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <BudgetModeToggle
            mode={mode}
            onModeChange={updateMode}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Nudges and Target Caps */}
          <div className="space-y-6">
            {/* Personalized Nudges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <BudgetNudges
                monthMetrics={monthMetrics.data}
                mode={mode}
              />
            </motion.div>

            {/* Target Caps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <TargetCaps
                monthMetrics={monthMetrics.data}
                mode={mode}
              />
            </motion.div>
          </div>

          {/* Right Column - Next 7 Days Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <NextSevenDays
              mode={mode}
            />
          </motion.div>
        </div>

        {/* Month-over-Month Progress Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {mode === 'budget' ? 'Ready to start budgeting?' : 'Keep up the great work!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {mode === 'budget' 
                      ? 'Based on your current spending patterns, we can help you create realistic budget categories that work for your lifestyle.'
                      : 'Your spending patterns look healthy. Continue tracking your expenses to maintain good financial habits.'
                    }
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {monthMetrics.data.savingsRate.toFixed(1)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Current savings rate
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}