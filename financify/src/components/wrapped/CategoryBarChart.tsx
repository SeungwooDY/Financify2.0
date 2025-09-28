"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { MonthMetrics, TransactionCategory } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"
import { useSearchParams, useRouter } from "next/navigation"
import { useCallback } from "react"
import { VizBar } from "@/lib/viz"

interface CategoryBarChartProps {
  metrics: MonthMetrics
  className?: string
}

const CATEGORY_COLORS: Record<TransactionCategory, string> = {
  tuition: "bg-blue-500",
  books: "bg-indigo-500", 
  housing: "bg-purple-500",
  food: "bg-green-500",
  transportation: "bg-yellow-500",
  entertainment: "bg-pink-500",
  healthcare: "bg-red-500",
  utilities: "bg-orange-500",
  shopping: "bg-cyan-500",
  income: "bg-emerald-500",
  refund: "bg-teal-500",
  other: "bg-gray-500"
}

const CATEGORY_LABELS: Record<TransactionCategory, string> = {
  tuition: "Tuition",
  books: "Books & Supplies",
  housing: "Housing",
  food: "Food & Dining",
  transportation: "Transportation",
  entertainment: "Entertainment",
  healthcare: "Healthcare",
  utilities: "Utilities",
  shopping: "Shopping",
  income: "Income",
  refund: "Refunds",
  other: "Other"
}

export function CategoryBarChart({ metrics, className }: CategoryBarChartProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedCategory = searchParams.get('category') as TransactionCategory | null

  const handleCategoryClick = useCallback((category: TransactionCategory) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (selectedCategory === category) {
      // If clicking the same category, remove the filter
      params.delete('category')
    } else {
      // Set the new category filter
      params.set('category', category)
    }
    
    router.push(`?${params.toString()}`, { scroll: false })
  }, [searchParams, router, selectedCategory])

  // Sort categories by amount (highest first) and take top 8
  const topCategories = metrics.categoryBreakdown
    .filter(cat => cat.category !== 'income' && cat.category !== 'refund')
    .sort((a, b) => b.amount.amount - a.amount.amount)
    .slice(0, 8)

  const maxAmount = Math.max(...topCategories.map(cat => cat.amount.amount))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn("relative", className)}
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900">
            Spending by Category
          </CardTitle>
          <p className="text-sm text-gray-600">
            Click on a category to filter your transactions
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chart */}
          <div className="h-64">
            <VizBar
              data={topCategories.map(cat => ({
                category: CATEGORY_LABELS[cat.category],
                amount: cat.amount.amount,
                percentage: cat.percentage,
                transactionCount: cat.transactionCount,
                originalCategory: cat.category
              }))}
              xKey="category"
              yKey="amount"
              title="Spending by Category"
              description="Click on a category bar to filter your transactions"
              colors={topCategories.map(cat => {
                const colorClass = CATEGORY_COLORS[cat.category]
                // Map Tailwind color classes to actual hex values
                const colorMap: Record<string, string> = {
                  'bg-blue-500': '#3b82f6',
                  'bg-indigo-500': '#6366f1',
                  'bg-purple-500': '#8b5cf6',
                  'bg-green-500': '#10b981',
                  'bg-yellow-500': '#f59e0b',
                  'bg-pink-500': '#ec4899',
                  'bg-red-500': '#ef4444',
                  'bg-orange-500': '#f97316',
                  'bg-cyan-500': '#06b6d4',
                  'bg-gray-500': '#6b7280',
                }
                return colorMap[colorClass] || '#6b7280'
              })}
              onBarClick={(data) => handleCategoryClick(data.originalCategory as TransactionCategory)}
              selectedIndex={selectedCategory ? topCategories.findIndex(cat => cat.category === selectedCategory) : undefined}
              responsive
              showTooltip
              showLegend={false}
            />
          </div>
          
          {/* Category List for Mobile */}
          <div className="space-y-3 md:hidden">
            {topCategories.map((category, index) => {
              const percentage = maxAmount > 0 ? (category.amount.amount / maxAmount) * 100 : 0
              const isSelected = selectedCategory === category.category
              
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="group"
                >
                  <button
                    onClick={() => handleCategoryClick(category.category)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg transition-all duration-200 hover:shadow-md",
                      isSelected 
                        ? "bg-blue-50 border-2 border-blue-200 shadow-md" 
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    )}
                    aria-label={`Filter by ${CATEGORY_LABELS[category.category]} category`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-3 h-3 rounded-full flex-shrink-0",
                          CATEGORY_COLORS[category.category]
                        )} />
                        <span className="font-medium text-gray-900">
                          {CATEGORY_LABELS[category.category]}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          {formatCurrency(category.amount.amount, category.amount.currency)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {category.percentage.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={cn(
                          "h-full rounded-full transition-all duration-300",
                          CATEGORY_COLORS[category.category],
                          isSelected && "ring-2 ring-blue-300"
                        )}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                    
                    {/* Transaction Count */}
                    <div className="mt-2 text-xs text-gray-500">
                      {category.transactionCount} transaction{category.transactionCount !== 1 ? 's' : ''}
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-4 border-t border-gray-200"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {selectedCategory ? `Filtered by ${CATEGORY_LABELS[selectedCategory]}` : 'All categories shown'}
              </span>
              {selectedCategory && (
                <button
                  onClick={() => handleCategoryClick(selectedCategory)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filter
                </button>
              )}
            </div>
          </motion.div>

          {/* Screen reader fallback table */}
          <div className="sr-only">
            <table>
              <caption>Spending by category breakdown</caption>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Percentage</th>
                  <th>Transaction Count</th>
                </tr>
              </thead>
              <tbody>
                {topCategories.map(category => (
                  <tr key={category.category}>
                    <td>{CATEGORY_LABELS[category.category]}</td>
                    <td>{formatCurrency(category.amount.amount, category.amount.currency)}</td>
                    <td>{category.percentage.toFixed(1)}%</td>
                    <td>{category.transactionCount}</td>
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
