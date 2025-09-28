"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MonthMetrics } from "@/lib/types"
import { getCategoryColor } from "@/lib/theme"
import { 
  Store,
  TrendingUp,
  MapPin,
  Clock,
  Home
} from "lucide-react"

interface TopMerchantsProps {
  metrics: MonthMetrics
  className?: string
}

export function TopMerchants({ metrics, className }: TopMerchantsProps) {
  // Mock merchant data based on categories for now
  const merchants = metrics.categoryBreakdown.slice(0, 5).map((category) => ({
    id: category.category,
    name: getMerchantName(category.category),
    category: category.category,
    amount: category.amount.amount,
    transactionCount: category.transactionCount,
    trend: Math.random() > 0.5 ? 'up' : 'down',
    trendValue: Math.floor(Math.random() * 20) + 1,
    location: Math.random() > 0.5 ? 'on-campus' : 'off-campus'
  }))

  return (
    <Card className={`card-elevated ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Store className="w-5 h-5 mr-2 text-accent-1" />
          Top Merchants
        </CardTitle>
        <CardDescription>Your most frequented places</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {merchants.map((merchant, index) => {
            const categoryColor = getCategoryColor(merchant.category)
            
            return (
              <div 
                key={merchant.id} 
                className="flex items-center space-x-3 group cursor-pointer hover:bg-muted/20 rounded-lg p-2 -m-2 transition-all duration-200"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ 
                    backgroundColor: `${categoryColor.base}15`,
                    border: `1px solid ${categoryColor.base}30`
                  }}
                >
                  <span 
                    className="text-sm font-semibold"
                    style={{ color: categoryColor.base }}
                  >
                    {merchant.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-text truncate" title={merchant.name}>
                      {merchant.name}
                    </h4>
                    <div className="flex items-center text-xs text-text-tertiary">
                      {merchant.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 mr-1 text-emerald-400" />
                      ) : (
                        <TrendingUp className="w-3 h-3 mr-1 text-red-400 rotate-180" />
                      )}
                      <span className={merchant.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}>
                        {merchant.trendValue}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-text-tertiary">
                      <div className="flex items-center">
                        {merchant.location === 'on-campus' ? (
                          <Home className="w-3 h-3 mr-1" />
                        ) : (
                          <MapPin className="w-3 h-3 mr-1" />
                        )}
                        <span className="capitalize">{merchant.category}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{merchant.transactionCount} visits</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-semibold text-text tabular-nums">
                    ${merchant.amount.toLocaleString()}
                  </div>
                  <div className="text-xs text-text-tertiary">
                    #{index + 1}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

function getMerchantName(category: string): string {
  const merchantMap: Record<string, string> = {
    food: "Campus Dining",
    books: "University Bookstore",
    transportation: "Uber",
    housing: "Student Housing",
    shopping: "Target",
    entertainment: "Netflix",
    utilities: "Electric Company",
    healthcare: "Student Health Center",
    tuition: "University Bursar",
    income: "Work Study",
    refund: "Financial Aid",
    other: "Miscellaneous"
  }
  
  return merchantMap[category] || category
}