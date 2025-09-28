"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Lightbulb,
  ArrowRight,
  Target
} from "lucide-react"
import { MonthMetrics } from "@/lib/types"
// import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"

interface BudgetNudgesProps {
  monthMetrics: MonthMetrics
  mode: 'budget' | 'maintain'
  className?: string
}

export function BudgetNudges({
  monthMetrics,
  mode,
  className
}: BudgetNudgesProps) {
  // Generate contextual nudges based on spending patterns
  const generateNudges = () => {
    const nudges = []
    const totalExpenses = monthMetrics.totalExpenses.amount
    const totalIncome = monthMetrics.totalIncome.amount
    const savingsRate = monthMetrics.savingsRate
    
    // Savings rate nudge
    if (savingsRate < 10) {
      nudges.push({
        id: 'savings',
        type: 'warning' as const,
        icon: AlertTriangle,
        title: 'Boost your savings',
        message: `You&apos;re saving ${savingsRate.toFixed(1)}% of your income. Try to save at least 20% for a healthy financial future.`,
        action: 'Set savings goal',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200'
      })
    } else if (savingsRate >= 20) {
      nudges.push({
        id: 'savings-good',
        type: 'success' as const,
        icon: CheckCircle,
        title: 'Great savings habits!',
        message: `You&apos;re saving ${savingsRate.toFixed(1)}% of your income. Keep up the excellent work!`,
        action: 'View progress',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      })
    }
    
    // Spending pattern nudges
    const mostExpensiveCategory = monthMetrics.spendingPatterns.mostExpensiveCategory
    const categoryBreakdown = monthMetrics.categoryBreakdown.find(cat => cat.category === mostExpensiveCategory)
    
    if (categoryBreakdown && categoryBreakdown.percentage > 40) {
      nudges.push({
        id: 'category-focus',
        type: 'info' as const,
        icon: Target,
        title: 'Focus on your biggest expense',
        message: `${mostExpensiveCategory.charAt(0).toUpperCase() + mostExpensiveCategory.slice(1)} makes up ${categoryBreakdown.percentage.toFixed(1)}% of your spending. Consider if this aligns with your priorities.`,
        action: 'Review category',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
      })
    }
    
    // Income vs expenses nudge
    if (totalExpenses > totalIncome * 0.9) {
      nudges.push({
        id: 'spending-high',
        type: 'warning' as const,
        icon: TrendingUp,
        title: 'High spending alert',
        message: `You&apos;re spending ${((totalExpenses / totalIncome) * 100).toFixed(1)}% of your income. Consider reducing expenses to build a financial cushion.`,
        action: 'Cut expenses',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      })
    } else if (totalExpenses < totalIncome * 0.7) {
      nudges.push({
        id: 'spending-good',
        type: 'success' as const,
        icon: CheckCircle,
        title: 'Well-managed spending',
        message: `You&apos;re spending only ${((totalExpenses / totalIncome) * 100).toFixed(1)}% of your income. This gives you room to save and invest.`,
        action: 'Plan investments',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      })
    }
    
    // Mode-specific nudges
    if (mode === 'budget') {
      nudges.push({
        id: 'budget-setup',
        type: 'info' as const,
        icon: Lightbulb,
        title: 'Ready to set new limits?',
        message: 'Based on your current spending, we can help you create realistic budget categories that work for your lifestyle.',
        action: 'Create budget',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
      })
    } else {
      nudges.push({
        id: 'maintain-tracking',
        type: 'info' as const,
        icon: TrendingDown,
        title: 'Keep tracking your progress',
        message: 'You&apos;re in maintain mode. Focus on staying consistent with your current spending patterns.',
        action: 'View trends',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200'
      })
    }
    
    return nudges.slice(0, 3) // Limit to 3 nudges to avoid overwhelming
  }
  
  const nudges = generateNudges()
  
  if (nudges.length === 0) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">You&apos;re doing great!</h3>
          <p className="text-muted-foreground">
            Your spending patterns look healthy. Keep up the good work!
          </p>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-4 w-4 text-amber-500" />
        <h2 className="text-lg font-semibold">Personalized Insights</h2>
      </div>
      
      {nudges.map((nudge, index) => {
        const Icon = nudge.icon
        
        return (
          <motion.div
            key={nudge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={cn(
              "border-2 transition-all duration-200 hover:shadow-md",
              nudge.borderColor
            )}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "p-2 rounded-lg flex-shrink-0",
                    nudge.bgColor
                  )}>
                    <Icon className={cn("h-4 w-4", nudge.color)} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm mb-1">
                      {nudge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {nudge.message}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs h-8"
                    >
                      {nudge.action}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
