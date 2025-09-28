"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
// import { Card, CardContent } from "@/components/ui/Card"
import { MonthMetrics } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"

interface CalendarGridProps {
  monthMetrics: MonthMetrics
  currentDate: Date
  onDayClick: (date: string) => void
  className?: string
}

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export function CalendarGrid({
  monthMetrics,
  currentDate,
  onDayClick,
  className
}: CalendarGridProps) {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  
  // Calculate calendar grid data
  const calendarData = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)
    const firstDayOfWeek = firstDayOfMonth.getDay()
    const daysInMonth = lastDayOfMonth.getDate()
    
    // Create a map of daily spending data
    const dailySpendingMap = new Map<string, number>()
    monthMetrics.trend_daily.forEach(day => {
      dailySpendingMap.set(day.date, day.totalSpending.amount)
    })
    
    // Calculate spending quantiles for color mapping
    const spendingAmounts = monthMetrics.trend_daily
      .map(day => day.totalSpending.amount)
      .filter(amount => amount > 0)
      .sort((a, b) => a - b)
    
    const quantiles = {
      q25: spendingAmounts[Math.floor(spendingAmounts.length * 0.25)] || 0,
      q50: spendingAmounts[Math.floor(spendingAmounts.length * 0.5)] || 0,
      q75: spendingAmounts[Math.floor(spendingAmounts.length * 0.75)] || 0,
      q90: spendingAmounts[Math.floor(spendingAmounts.length * 0.9)] || 0,
      max: spendingAmounts[spendingAmounts.length - 1] || 0
    }
    
    // Generate calendar days
    const days = []
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({
        type: 'empty' as const,
        key: `empty-${i}`
      })
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dateString = date.toISOString().split('T')[0]
      const spending = dailySpendingMap.get(dateString) || 0
      const isToday = date.toDateString() === new Date().toDateString()
      
      // Determine color intensity based on spending quantiles
      let colorIntensity = 0
      if (spending > 0) {
        if (spending <= quantiles.q25) colorIntensity = 1
        else if (spending <= quantiles.q50) colorIntensity = 2
        else if (spending <= quantiles.q75) colorIntensity = 3
        else if (spending <= quantiles.q90) colorIntensity = 4
        else colorIntensity = 5
      }
      
      days.push({
        type: 'day' as const,
        key: day.toString(),
        day,
        date: dateString,
        spending,
        colorIntensity,
        isToday
      })
    }
    
    return { days, quantiles }
  }, [monthMetrics.trend_daily, year, month])
  
  const getColorClass = (intensity: number, isToday: boolean) => {
    if (intensity === 0) {
      return isToday 
        ? "bg-primary/10 border-primary/30 hover:bg-primary/20" 
        : "bg-muted/20 border-muted/30 hover:bg-muted/30"
    }
    
    const baseClasses = isToday ? "border-primary/40" : "border-muted/40"
    
    switch (intensity) {
      case 1: return `${baseClasses} bg-green-50/60 hover:bg-green-100/70`
      case 2: return `${baseClasses} bg-green-100/60 hover:bg-green-150/70`
      case 3: return `${baseClasses} bg-yellow-50/60 hover:bg-yellow-100/70`
      case 4: return `${baseClasses} bg-orange-50/60 hover:bg-orange-100/70`
      case 5: return `${baseClasses} bg-red-50/60 hover:bg-red-100/70`
      default: return `${baseClasses} bg-muted/20 hover:bg-muted/30`
    }
  }
  
  const getIntensityLabel = (intensity: number) => {
    switch (intensity) {
      case 0: return "No spending"
      case 1: return "Very low spending"
      case 2: return "Low spending"
      case 3: return "Medium spending"
      case 4: return "High spending"
      case 5: return "Very high spending"
      default: return "No data"
    }
  }
  
  return (
    <div className={cn("w-full", className)}>
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-px mb-2">
        {DAY_NAMES.map(day => (
          <div 
            key={day} 
            className="p-2 text-center text-sm font-medium text-muted-foreground bg-muted/20 rounded-t-md"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px bg-muted/20 rounded-md overflow-hidden">
        {calendarData.days.map((dayData, index) => {
          if (dayData.type === 'empty') {
            return (
              <div 
                key={dayData.key} 
                className="aspect-square bg-muted/10"
                aria-hidden="true"
              />
            )
          }
          
          const { day, date, spending, colorIntensity, isToday } = dayData
          const formattedAmount = spending > 0 ? formatCurrency(spending, "USD", { showCents: false }) : "$0"
          const intensityLabel = getIntensityLabel(colorIntensity)
          
          return (
            <motion.div
              key={dayData.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.01 }}
              className="relative"
            >
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-full aspect-square p-1 rounded-none border-2 transition-all duration-200",
                  "hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-primary/50",
                  getColorClass(colorIntensity, isToday)
                )}
                onClick={() => onDayClick(date)}
                aria-label={`${MONTH_NAMES[month]} ${day}, ${year}. ${intensityLabel}. Total spending: ${formattedAmount}`}
                role="button"
                tabIndex={0}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <span className={cn(
                    "text-sm font-semibold",
                    isToday ? "text-primary" : "text-foreground"
                  )}>
                    {day}
                  </span>
                  {spending > 0 && (
                    <div className="flex flex-col items-center mt-1 space-y-1">
                      <span className="text-xs font-mono text-muted-foreground">
                        {formattedAmount}
                      </span>
                      <span className="text-xs text-muted-foreground/70">
                        {monthMetrics.trend_daily.find(d => d.date === date)?.transactionCount || 0} txn
                      </span>
                    </div>
                  )}
                </div>
              </Button>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
