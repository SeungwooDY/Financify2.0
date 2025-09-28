"use client"

import React, { Suspense } from "react"

export const dynamic = 'force-dynamic'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Heading, Text } from "@/components/ui/typography"
import { useMonthMetrics, useBudgetMode } from "@/lib/hooks"
import { 
  BudgetModeToggle,
  BudgetNudges,
  TargetCaps,
  NextSevenDays
} from "@/components/budget"
import { AlertCircle, PiggyBank } from "lucide-react"
import { useSearchParams } from "next/navigation"

function BudgetContent() {
  const searchParams = useSearchParams()
  const month = searchParams.get('month') || '2025-08'
  
  const { data: monthMetrics, isLoading, error } = useMonthMetrics(month)
  const { mode, updateMode } = useBudgetMode()

  if (error) {
    return (
      <Card className="card-standard">
        <CardContent className="p-12 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <Heading as="h2" size="xl" className="mb-2">Error Loading Budget Data</Heading>
          <Text color="muted">
            There was a problem loading your budget information. Please try again.
          </Text>
        </CardContent>
      </Card>
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
    <main className="min-h-screen">
      <div className="max-w-[1600px] mx-auto px-12 py-20">
        <div className="mb-8">
          <Heading as="h1" size="4xl" balance={false} className="mb-6">
            Budget Copilot
          </Heading>
          <Text size="lg" color="muted" className="max-w-7xl mx-auto leading-relaxed px-4" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            {mode === 'budget' 
              ? 'Set new spending limits and track your progress toward financial goals. Create realistic budgets based on your spending patterns and achieve your financial objectives with personalized insights.'
              : 'Monitor your current spending patterns and maintain healthy financial habits. Track your expenses, identify trends, and make informed decisions about your money management.'
            }
          </Text>
        </div>

        {/* Mode switcher: Budget vs Maintain (chips) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-8"
        >
          <BudgetModeToggle
            mode={mode}
            onModeChange={updateMode}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Nudges and Target Caps */}
          <div className="space-y-8">
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

        {/* Supportive, non-judgmental tone message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="card-glass">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {mode === 'budget' ? 'Ready to start budgeting?' : 'Keep up the great work!'}
                  </h3>
                  <p className="text-text-secondary">
                    {mode === 'budget' 
                      ? 'Based on your current spending patterns, we can help you create realistic budget categories that work for your lifestyle.'
                      : 'Your spending patterns look healthy. Continue tracking your expenses to maintain good financial habits.'
                    }
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-accent-1 tabular-nums">
                    {monthMetrics.data.savingsRate.toFixed(1)}%
                  </div>
                  <div className="text-sm text-text-tertiary">
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

export default function BudgetPage() {
  return (
    <Suspense fallback={
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
    }>
      <BudgetContent />
    </Suspense>
  )
}