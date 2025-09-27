"use client"

import React from "react"
// import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalendarHeaderProps {
  currentDate: Date
  onPreviousMonth: () => void
  onNextMonth: () => void
  onToday: () => void
  className?: string
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export function CalendarHeader({
  currentDate,
  onPreviousMonth,
  onNextMonth,
  onToday,
  className
}: CalendarHeaderProps) {
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const isCurrentMonth = currentDate.getMonth() === new Date().getMonth() && 
                        currentDate.getFullYear() === new Date().getFullYear()

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="text-2xl font-bold">
                {MONTH_NAMES[month]} {year}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Daily spending patterns and trends
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onPreviousMonth}
              className="h-9 px-3"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onToday}
              className={cn(
                "h-9 px-3",
                isCurrentMonth && "bg-primary/10 border-primary/20 text-primary"
              )}
              aria-label="Go to current month"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Today
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onNextMonth}
              className="h-9 px-3"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
