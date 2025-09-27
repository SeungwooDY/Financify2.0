"use client"

import React from "react"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { MonthMetrics } from "@/lib/types"

interface TrendLineChartProps {
  metrics: MonthMetrics
  className?: string
}

export function TrendLineChart({ metrics, className }: TrendLineChartProps) {
  // Generate mock daily data for the trend chart
  const generateDailyData = () => {
    const daysInMonth = new Date(2025, 7, 0).getDate() // August has 31 days
    const data = []
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(2025, 7, day)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const baseAmount = metrics.spendingPatterns.averageDailySpending.amount
      const variation = (Math.sin(day * 0.3) * 0.4 + Math.random() * 0.6 - 0.3)
      const weekendMultiplier = isWeekend ? 1.3 : 0.8
      const amount = Math.max(0, baseAmount * (1 + variation) * weekendMultiplier)
      
      data.push({
        date: day,
        spending: amount,
        isWeekend,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' })
      })
    }
    
    return data
  }

  const data = generateDailyData()

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ payload: { date: number; spending: number; isWeekend: boolean; dayName: string } }>; label?: string }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-3 shadow-xl">
          <p className="text-gray-100 font-medium mb-1">
            Day {label} ({data.dayName})
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-300">
              Spending: <span className="text-white font-semibold">${data.spending.toFixed(2)}</span>
            </p>
            {data.isWeekend && (
              <p className="text-amber-400 text-xs">Weekend</p>
            )}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className={`w-full h-64 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="spendingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="date" 
            stroke="#9ca3af"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickCount={6}
          />
          <YAxis 
            stroke="#9ca3af"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="spending"
            stroke="#22d3ee"
            strokeWidth={3}
            fill="url(#spendingGradient)"
            dot={{ fill: '#22d3ee', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#22d3ee', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
