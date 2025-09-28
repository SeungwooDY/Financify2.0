"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/Button"
import { 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowRight
} from "lucide-react"
import { MonthMetrics } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"

interface TargetCapsProps {
  monthMetrics: MonthMetrics
  mode: 'budget' | 'maintain'
  className?: string
}

export function TargetCaps({
  monthMetrics,
  mode,
  className
}: TargetCapsProps) {
  // Generate target caps based on spending patterns
  const generateTargetCaps = () => {
    const caps = []
    const totalExpenses = monthMetrics.totalExpenses.amount
    const totalIncome = monthMetrics.totalIncome.amount
    
    // Monthly spending cap
    const recommendedMonthlyCap = totalIncome * 0.8 // 80% of income
    const monthlyProgress = (totalExpenses / recommendedMonthlyCap) * 100
    
    caps.push({
      id: 'monthly',
      title: 'Monthly Spending Cap',
      description: 'Keep monthly expenses under 80% of income',
      current: totalExpenses,
      target: recommendedMonthlyCap,
      progress: Math.min(monthlyProgress, 100),
      status: monthlyProgress > 100 ? 'over' : monthlyProgress > 80 ? 'warning' : 'good',
      icon: Calendar,
      timeframe: 'This month',
      suggestion: monthlyProgress > 100 
        ? 'You\'ve exceeded the recommended cap. Consider cutting back on non-essential expenses.'
        : monthlyProgress > 80
        ? 'You\'re approaching the cap. Monitor your spending closely.'
        : 'Great job staying within the recommended spending cap!'
    })
    
    // Category-specific caps based on spending patterns
    const topCategories = monthMetrics.categoryBreakdown
      .sort((a, b) => b.amount.amount - a.amount.amount)
      .slice(0, 3)
    
    topCategories.forEach((category) => {
      const categoryName = category.category.charAt(0).toUpperCase() + category.category.slice(1)
      const recommendedCap = totalIncome * 0.15 // 15% of income per category
      const categoryProgress = (category.amount.amount / recommendedCap) * 100
      
      caps.push({
        id: `category-${category.category}`,
        title: `${categoryName} Budget`,
        description: `Keep ${categoryName.toLowerCase()} under 15% of income`,
        current: category.amount.amount,
        target: recommendedCap,
        progress: Math.min(categoryProgress, 100),
        status: categoryProgress > 100 ? 'over' : categoryProgress > 80 ? 'warning' : 'good',
        icon: DollarSign,
        timeframe: 'This month',
        suggestion: categoryProgress > 100
          ? `You've spent ${categoryProgress.toFixed(1)}% of your recommended ${categoryName.toLowerCase()} budget. Consider reducing this category.`
          : categoryProgress > 80
          ? `You're at ${categoryProgress.toFixed(1)}% of your ${categoryName.toLowerCase()} budget. Watch this category.`
          : `You're doing well with ${categoryName.toLowerCase()} spending at ${categoryProgress.toFixed(1)}% of your budget.`
      })
    })
    
    return caps
  }
  
  const targetCaps = generateTargetCaps()
  
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'over':
        return {
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          icon: AlertTriangle,
          iconColor: 'text-red-500'
        }
      case 'warning':
        return {
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          icon: TrendingUp,
          iconColor: 'text-amber-500'
        }
      default:
        return {
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          icon: CheckCircle,
          iconColor: 'text-green-500'
        }
    }
  }
  
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-2 mb-4">
        <Target className="h-4 w-4 text-blue-500" />
        <h2 className="text-lg font-semibold">
          {mode === 'budget' ? 'Set Your Targets' : 'Track Your Progress'}
        </h2>
      </div>
      
      {targetCaps.map((cap, index) => {
        const statusConfig = getStatusConfig(cap.status)
        const StatusIcon = statusConfig.icon
        
        return (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={cn(
              "border-2 transition-all duration-200 hover:shadow-md",
              statusConfig.borderColor
            )}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "p-2 rounded-lg flex-shrink-0",
                      statusConfig.bgColor
                    )}>
                      <StatusIcon className={cn("h-4 w-4", statusConfig.iconColor)} />
                    </div>
                    <div>
                      <CardTitle className="text-base font-medium leading-tight">
                        {cap.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium leading-tight">
                      {formatCurrency(cap.current, "USD", { showCents: false })} / {formatCurrency(cap.target, "USD", { showCents: false })}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {cap.timeframe}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className={cn("font-medium", statusConfig.color)}>
                        {cap.progress.toFixed(1)}%
                      </span>
                    </div>
                    <Progress 
                      value={cap.progress} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      {cap.suggestion}
                    </p>
                  </div>
                  
                  {mode === 'budget' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-8"
                    >
                      {cap.status === 'over' ? 'Adjust target' : 'Set target'}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
