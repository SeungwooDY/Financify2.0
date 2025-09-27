"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Target,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ChecklistItem {
  id: string
  text: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
  category: 'budget' | 'tracking' | 'planning' | 'review'
}

interface NextSevenDaysProps {
  mode: 'budget' | 'maintain'
  className?: string
}

export function NextSevenDays({
  mode,
  className
}: NextSevenDaysProps) {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 'review-spending',
      text: 'Review this week\'s spending patterns',
      completed: false,
      priority: 'high',
      category: 'review'
    },
    {
      id: 'set-weekly-limit',
      text: mode === 'budget' ? 'Set weekly spending limit' : 'Check weekly progress',
      completed: false,
      priority: 'high',
      category: 'budget'
    },
    {
      id: 'categorize-transactions',
      text: 'Categorize any uncategorized transactions',
      completed: false,
      priority: 'medium',
      category: 'tracking'
    },
    {
      id: 'plan-upcoming-expenses',
      text: 'Plan for any upcoming large expenses',
      completed: false,
      priority: 'medium',
      category: 'planning'
    },
    {
      id: 'check-subscriptions',
      text: 'Review and cancel unused subscriptions',
      completed: false,
      priority: 'low',
      category: 'budget'
    },
    {
      id: 'update-budget',
      text: mode === 'budget' ? 'Update budget categories if needed' : 'Review budget performance',
      completed: false,
      priority: 'medium',
      category: 'budget'
    }
  ])
  
  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }
  
  const addCustomItem = () => {
    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      text: 'Add your own task...',
      completed: false,
      priority: 'medium',
      category: 'planning'
    }
    setItems(prev => [...prev, newItem])
  }
  
  const completedCount = items.filter(item => item.completed).length
  const totalCount = items.length
  const progressPercentage = (completedCount / totalCount) * 100
  
  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'high':
        return {
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        }
      case 'medium':
        return {
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200'
        }
      default:
        return {
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        }
    }
  }
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'budget':
        return Target
      case 'tracking':
        return Clock
      case 'planning':
        return Calendar
      case 'review':
        return CheckCircle
      default:
        return Target
    }
  }
  
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-500" />
            <CardTitle className="text-lg font-semibold">
              Next 7 Days Checklist
            </CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">
            {completedCount}/{totalCount} completed
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {mode === 'budget' 
            ? 'Stay on track with your new budget goals'
            : 'Maintain your current financial habits'
          }
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-blue-600">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
        
        {/* Checklist Items */}
        <div className="space-y-2">
          <AnimatePresence>
            {items.map((item, index) => {
              const priorityConfig = getPriorityConfig(item.priority)
              const CategoryIcon = getCategoryIcon(item.category)
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg border transition-all duration-200",
                    item.completed 
                      ? "bg-green-50 border-green-200" 
                      : "bg-muted/30 border-muted/50 hover:bg-muted/50"
                  )}
                >
                  <Checkbox
                    checked={item.completed}
                    onCheckedChange={() => toggleItem(item.id)}
                    className="mt-0.5"
                    aria-label={`Mark "${item.text}" as ${item.completed ? 'incomplete' : 'complete'}`}
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CategoryIcon className="h-3 w-3 text-muted-foreground" />
                      <span className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded-full",
                        priorityConfig.bgColor,
                        priorityConfig.color
                      )}>
                        {item.priority}
                      </span>
                    </div>
                    <p className={cn(
                      "text-sm",
                      item.completed 
                        ? "line-through text-muted-foreground" 
                        : "text-foreground"
                    )}>
                      {item.text}
                    </p>
                  </div>
                  
                  {item.completed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-500"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        
        {/* Add Custom Item */}
        <Button
          variant="outline"
          size="sm"
          onClick={addCustomItem}
          className="w-full text-xs h-8"
        >
          <Plus className="h-3 w-3 mr-1" />
          Add custom task
        </Button>
        
        {/* Motivational Message */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            {completedCount === totalCount 
              ? "🎉 Amazing! You've completed all your tasks. You're building great financial habits!"
              : completedCount > totalCount / 2
              ? "💪 You're making great progress! Keep up the momentum."
              : "🌟 Every small step counts. You've got this!"
            }
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
