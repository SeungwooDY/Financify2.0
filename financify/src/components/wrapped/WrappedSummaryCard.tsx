"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MonthMetrics } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { TrendingUp, TrendingDown, DollarSign, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"

interface WrappedSummaryCardProps {
  metrics: MonthMetrics
  className?: string
}

export function WrappedSummaryCard({ metrics, className }: WrappedSummaryCardProps) {
  const isPositiveNetIncome = metrics.netIncome.amount >= 0
  const isGoodSavingsRate = metrics.savingsRate >= 20

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn("relative", className)}
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-xl blur-xl -z-10" />
      
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl">
        <CardContent className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your {new Date(metrics.month + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} Wrapped
            </h2>
            <p className="text-gray-600 text-sm">
              A complete breakdown of your financial journey this month
            </p>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Net Income */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Net Income</span>
              </div>
              <div className={cn(
                "text-3xl font-bold",
                isPositiveNetIncome ? "text-green-600" : "text-red-600"
              )}>
                {formatCurrency(metrics.netIncome.amount, metrics.netIncome.currency)}
              </div>
              <div className="flex items-center gap-1 text-xs">
                {isPositiveNetIncome ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={cn(
                  isPositiveNetIncome ? "text-green-600" : "text-red-600"
                )}>
                  {isPositiveNetIncome ? "Positive" : "Negative"} cash flow
                </span>
              </div>
            </motion.div>

            {/* Savings Rate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Savings Rate</span>
              </div>
              <div className={cn(
                "text-3xl font-bold",
                isGoodSavingsRate ? "text-green-600" : "text-orange-600"
              )}>
                {metrics.savingsRate.toFixed(1)}%
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  isGoodSavingsRate ? "bg-green-500" : "bg-orange-500"
                )} />
                <span className={cn(
                  isGoodSavingsRate ? "text-green-600" : "text-orange-600"
                )}>
                  {isGoodSavingsRate ? "Great job!" : "Room to improve"}
                </span>
              </div>
            </motion.div>

            {/* Total Income */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Total Income</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(metrics.totalIncome.amount, metrics.totalIncome.currency)}
              </div>
              <div className="text-xs text-gray-500">
                +{metrics.trends.monthOverMonth.incomeChange.toFixed(1)}% from last month
              </div>
            </motion.div>

            {/* Total Expenses */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Total Expenses</span>
              </div>
              <div className="text-2xl font-bold text-red-600">
                {formatCurrency(metrics.totalExpenses.amount, metrics.totalExpenses.currency)}
              </div>
              <div className="text-xs text-gray-500">
                {metrics.trends.monthOverMonth.expenseChange > 0 ? '+' : ''}
                {metrics.trends.monthOverMonth.expenseChange.toFixed(1)}% from last month
              </div>
            </motion.div>
          </div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">This month&apos;s highlight</p>
                <p className="text-sm text-gray-600">
                  You spent most on <span className="font-semibold text-gray-900">
                    {metrics.spendingPatterns.mostExpensiveCategory}
                  </span> and made <span className="font-semibold text-gray-900">
                    {metrics.categoryBreakdown.reduce((sum, cat) => sum + cat.transactionCount, 0)}
                  </span> transactions in <span className="font-semibold text-gray-900">
                    {metrics.spendingPatterns.mostFrequentCategory}
                  </span>.
                </p>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
