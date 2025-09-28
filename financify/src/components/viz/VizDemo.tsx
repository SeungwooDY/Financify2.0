"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { VizBar, VizLine, generateColorPalette } from "@/lib/viz"

/**
 * Demo component showcasing the new Recharts theme system
 * This demonstrates the VizBar and VizLine components with various configurations
 */
export function VizDemo() {
  // Sample data for demonstration
  const categoryData = [
    { category: "Food & Dining", amount: 1200, percentage: 35 },
    { category: "Transportation", amount: 800, percentage: 23 },
    { category: "Entertainment", amount: 600, percentage: 17 },
    { category: "Shopping", amount: 500, percentage: 14 },
    { category: "Utilities", amount: 300, percentage: 9 },
    { category: "Other", amount: 100, percentage: 3 },
  ]

  const trendData = [
    { day: 1, spending: 45, cumulative: 45 },
    { day: 2, spending: 32, cumulative: 77 },
    { day: 3, spending: 78, cumulative: 155 },
    { day: 4, spending: 23, cumulative: 178 },
    { day: 5, spending: 67, cumulative: 245 },
    { day: 6, spending: 89, cumulative: 334 },
    { day: 7, spending: 34, cumulative: 368 },
    { day: 8, spending: 56, cumulative: 424 },
    { day: 9, spending: 78, cumulative: 502 },
    { day: 10, spending: 45, cumulative: 547 },
  ]

  const multiLineData = [
    { day: 1, income: 100, expenses: 45, net: 55 },
    { day: 2, income: 0, expenses: 32, net: -32 },
    { day: 3, income: 0, expenses: 78, net: -78 },
    { day: 4, income: 0, expenses: 23, net: -23 },
    { day: 5, income: 200, expenses: 67, net: 133 },
    { day: 6, income: 0, expenses: 89, net: -89 },
    { day: 7, income: 0, expenses: 34, net: -34 },
    { day: 8, income: 0, expenses: 56, net: -56 },
    { day: 9, income: 0, expenses: 78, net: -78 },
    { day: 10, income: 150, expenses: 45, net: 105 },
  ]

  return (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text mb-2">Recharts Theme System Demo</h1>
        <p className="text-text-secondary">
          Showcasing the new VizBar and VizLine components with consistent theming
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Category Spending (Bar Chart)</CardTitle>
          </CardHeader>
          <CardContent>
            <VizBar
              data={categoryData}
              xKey="category"
              yKey="amount"
              title="Monthly Spending by Category"
              description="Breakdown of spending across different categories"
              colors={generateColorPalette(categoryData.length)}
              responsive
              showTooltip
              showLegend={false}
              onBarClick={(data) => console.log('Clicked category:', data.category)}
            />
          </CardContent>
        </Card>

        {/* Line Chart Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Spending Trend (Line Chart)</CardTitle>
          </CardHeader>
          <CardContent>
            <VizLine
              data={trendData}
              xKey="day"
              yKey="spending"
              title="Daily Spending Pattern"
              description="Track your daily spending habits"
              type="line"
              strokeWidth={3}
              responsive
              showTooltip
              showLegend={false}
              onPointClick={(data) => console.log('Clicked day:', data.day)}
            />
          </CardContent>
        </Card>

        {/* Area Chart Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Income vs Expenses (Area Chart)</CardTitle>
          </CardHeader>
          <CardContent>
            <VizLine
              data={multiLineData}
              xKey="day"
              yKey={["income", "expenses"]}
              title="Income vs Expenses Over Time"
              description="Compare income and expenses on a daily basis"
              type="area"
              strokeWidth={2}
              fillOpacity={0.6}
              responsive
              showTooltip
              showLegend={true}
              colors={["#10b981", "#ef4444"]}
            />
          </CardContent>
        </Card>

        {/* Multi-line Chart Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview (Multi-line)</CardTitle>
          </CardHeader>
          <CardContent>
            <VizLine
              data={multiLineData}
              xKey="day"
              yKey={["income", "expenses", "net"]}
              title="Complete Financial Picture"
              description="Income, expenses, and net position over time"
              type="line"
              strokeWidth={2}
              responsive
              showTooltip
              showLegend={true}
              colors={["#10b981", "#ef4444", "#3b82f6"]}
            />
          </CardContent>
        </Card>
      </div>

      {/* Features List */}
      <Card>
        <CardHeader>
          <CardTitle>Theme System Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-text">Design Tokens</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Consistent color scales</li>
                <li>• Typography from design system</li>
                <li>• Spacing and border radius</li>
                <li>• Shadow and elevation</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-text">Accessibility</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Screen reader support</li>
                <li>• High contrast colors</li>
                <li>• Keyboard navigation</li>
                <li>• ARIA labels and descriptions</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-text">Responsive Design</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Mobile-first approach</li>
                <li>• Adaptive sizing</li>
                <li>• Touch-friendly interactions</li>
                <li>• Optimized for small screens</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-text">Formatters</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Currency with tabular numbers</li>
                <li>• Date and time formatting</li>
                <li>• Percentage display</li>
                <li>• Compact number notation</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-text">Interactions</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Click handlers for bars/points</li>
                <li>• Hover states and animations</li>
                <li>• Selection highlighting</li>
                <li>• Custom tooltips</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-text">Performance</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Optimized re-renders</li>
                <li>• Lazy loading support</li>
                <li>• Efficient animations</li>
                <li>• Memory management</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
