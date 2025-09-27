"use client"

import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { MonthMetrics } from "@/lib/types"
import { getCategoryChartColor } from "@/lib/viz/vizTheme"

interface CategoryBarChartProps {
  metrics: MonthMetrics
  className?: string
}

export function CategoryBarChart({ metrics, className }: CategoryBarChartProps) {
  const data = metrics.categoryBreakdown.slice(0, 6).map((category, index) => ({
    name: category.category.charAt(0).toUpperCase() + category.category.slice(1),
    value: category.amount.amount,
    percentage: category.percentage,
    transactions: category.transactionCount,
    color: getCategoryChartColor(category.category, index)
  }))

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ payload: { name: string; value: number; percentage: number; transactions: number; color: string } }>; label?: string }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-3 shadow-xl">
          <p className="text-gray-100 font-medium mb-1">{label}</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-300">
              Amount: <span className="text-white font-semibold">${data.value.toLocaleString()}</span>
            </p>
            <p className="text-gray-300">
              Percentage: <span className="text-white font-semibold">{data.percentage.toFixed(1)}%</span>
            </p>
            <p className="text-gray-300">
              Transactions: <span className="text-white font-semibold">{data.transactions}</span>
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className={`w-full h-64 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            stroke="#9ca3af"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis 
            stroke="#9ca3af"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            fill="#22d3ee"
          >
            {data.map((entry, index) => (
              <Bar 
                key={`cell-${index}`} 
                fill={entry.color}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
