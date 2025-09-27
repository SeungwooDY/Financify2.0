"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useBudgets } from "@/lib/hooks/use-budgets"
import { useTransactions } from "@/lib/hooks/use-transactions"
import { BudgetCategory } from "@/lib/types"
import { PiggyBank, Plus, TrendingUp, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function BudgetPage() {
  const { data: metrics, isLoading: budgetsLoading } = useBudgets()
  const { data: transactions } = useTransactions(1, 100)
  const [selectedPeriod, setSelectedPeriod] = useState<'weekly' | 'monthly' | 'quarterly' | 'yearly'>('monthly')

  // Create a mock budget from metrics for now
  const currentBudget = metrics?.data ? {
    id: "budget_1",
    name: "Monthly Budget",
    period: "monthly" as const,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    totalAmount: metrics.data.totalExpenses,
    spentAmount: metrics.data.totalExpenses,
    categories: metrics.data.categoryBreakdown.map(cat => ({
      categoryId: cat.category,
      category: cat.category,
      budgetedAmount: cat.amount,
      spentAmount: cat.amount,
      percentage: cat.percentage
    })),
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  } : null

  const getBudgetProgress = (categoryId: string) => {
    if (!currentBudget || !transactions?.data) return { spent: 0, budgeted: 0, percentage: 0 }
    
    const category = currentBudget.categories.find((c: BudgetCategory) => c.categoryId === categoryId)
    if (!category) return { spent: 0, budgeted: 0, percentage: 0 }

    const spent = Math.abs(category.spentAmount.amount)
    const budgeted = category.budgetedAmount.amount
    const percentage = budgeted > 0 ? (spent / budgeted) * 100 : 0

    return { spent, budgeted, percentage }
  }

  const getOverallProgress = () => {
    if (!currentBudget) return { spent: 0, budgeted: 0, percentage: 0 }
    
    const spent = Math.abs(currentBudget.spentAmount.amount)
    const budgeted = currentBudget.totalAmount.amount
    const percentage = budgeted > 0 ? (spent / budgeted) * 100 : 0

    return { spent, budgeted, percentage }
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage >= 100) return <AlertCircle className="h-4 w-4 text-red-500" />
    if (percentage >= 80) return <TrendingUp className="h-4 w-4 text-yellow-500" />
    return null
  }

  if (budgetsLoading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-2 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-1/6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    )
  }

  return (
    <main className="container-5xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">Budget</h1>
        <p className="text-text-secondary mt-2">Plan and track your monthly budget.</p>
      </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Budget Planning</h1>
          <p className="text-muted-foreground">
            Track your spending against your budget goals
          </p>
        </div>

        {/* Period Selector */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex space-x-2">
              {(['weekly', 'monthly', 'quarterly', 'yearly'] as const).map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overall Budget Summary */}
        {currentBudget && (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <PiggyBank className="h-5 w-5" />
                    <span>{currentBudget.name}</span>
                  </CardTitle>
                  <CardDescription>
                    {currentBudget.period} budget overview
                  </CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">
                    ${getOverallProgress().spent.toLocaleString()} / ${getOverallProgress().budgeted.toLocaleString()}
                  </span>
                </div>
                <Progress 
                  value={getOverallProgress().percentage} 
                  className="h-2"
                />
                <div className="flex justify-between items-center text-sm">
                  <span className={`font-medium ${
                    getOverallProgress().percentage >= 100 ? 'text-red-600' : 
                    getOverallProgress().percentage >= 80 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {getOverallProgress().percentage.toFixed(1)}% used
                  </span>
                  <span className="text-muted-foreground">
                    ${(getOverallProgress().budgeted - getOverallProgress().spent).toLocaleString()} remaining
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Budget Categories */}
        {currentBudget ? (
          <div className="space-y-4">
            {currentBudget.categories.map((category) => {
              const progress = getBudgetProgress(category.categoryId)
              const categoryName = category.categoryId === "food" ? "Food & Dining" :
                                  category.categoryId === "transportation" ? "Transportation" :
                                  category.categoryId === "housing" ? "Housing" : 
                                  category.categoryId === "entertainment" ? "Entertainment" :
                                  category.categoryId === "shopping" ? "Shopping" :
                                  category.categoryId === "healthcare" ? "Healthcare" :
                                  category.categoryId === "utilities" ? "Utilities" :
                                  category.categoryId === "books" ? "Books" :
                                  category.categoryId === "tuition" ? "Tuition" : "Other"
              
              return (
                <Card key={category.categoryId}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">🍽️</span>
                          <span className="font-medium">{categoryName}</span>
                          {getStatusIcon(progress.percentage)}
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            ${progress.spent.toLocaleString()} / ${progress.budgeted.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {progress.percentage.toFixed(1)}% used
                          </div>
                        </div>
                      </div>
                      
                      <Progress 
                        value={Math.min(progress.percentage, 100)} 
                        className="h-2"
                      />
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className={`${
                          progress.percentage >= 100 ? 'text-red-600' : 
                          progress.percentage >= 80 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {progress.percentage >= 100 ? 'Over budget' : 
                           progress.percentage >= 80 ? 'Near limit' : 'On track'}
                        </span>
                        <span className="text-muted-foreground">
                          ${(progress.budgeted - progress.spent).toLocaleString()} remaining
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <PiggyBank className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Budget Set</h3>
              <p className="text-muted-foreground mb-4">
                Create your first budget to start tracking your spending
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Budget
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Plus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Add Category</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a new budget category
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Set Goals</h3>
                  <p className="text-sm text-muted-foreground">
                    Define your financial goals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage budget notifications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </main>
  )
}