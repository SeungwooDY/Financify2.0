"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Wrench, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

interface BudgetModeToggleProps {
  mode: 'budget' | 'maintain'
  onModeChange: (mode: 'budget' | 'maintain') => void
  className?: string
}

export function BudgetModeToggle({
  mode,
  onModeChange,
  className
}: BudgetModeToggleProps) {
  const modes = [
    {
      id: 'budget' as const,
      label: 'Budget',
      description: 'Set new spending limits',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'maintain' as const,
      label: 'Maintain',
      description: 'Track current habits',
      icon: Wrench,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ]

  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Choose your focus
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {modes.map((modeOption) => {
            const Icon = modeOption.icon
            const isSelected = mode === modeOption.id
            
            return (
              <motion.div
                key={modeOption.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "h-auto p-4 w-full justify-start text-left",
                    "hover:bg-muted/50 transition-all duration-200",
                    isSelected && [
                      modeOption.bgColor,
                      modeOption.borderColor,
                      "border-2"
                    ]
                  )}
                  onClick={() => onModeChange(modeOption.id)}
                  aria-checked={isSelected}
                  role="radio"
                  aria-label={`${modeOption.label} mode: ${modeOption.description}`}
                >
                  <div className="flex items-start gap-3 w-full">
                    <div className={cn(
                      "p-2 rounded-lg flex-shrink-0",
                      isSelected ? modeOption.bgColor : "bg-muted/50"
                    )}>
                      <Icon className={cn(
                        "h-4 w-4",
                        isSelected ? modeOption.color : "text-muted-foreground"
                      )} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={cn(
                        "font-medium text-sm",
                        isSelected ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {modeOption.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {modeOption.description}
                      </div>
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1"
                      />
                    )}
                  </div>
                </Button>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Budget mode:</strong> Set new spending limits and track progress toward goals.
            <br />
            <strong>Maintain mode:</strong> Monitor your current spending patterns without changing limits.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
