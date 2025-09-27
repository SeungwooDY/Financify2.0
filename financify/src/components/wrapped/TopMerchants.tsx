"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthMetrics } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"
import { Store, CreditCard, MapPin } from "lucide-react"

interface TopMerchantsProps {
  metrics: MonthMetrics
  className?: string
}

// Generate mock merchant data based on category breakdown
function generateMerchantData(metrics: MonthMetrics) {
  const merchants = [
    { name: "Amazon", category: "shopping", amount: 0, transactions: 0, location: "Online" },
    { name: "Starbucks", category: "food", amount: 0, transactions: 0, location: "Local" },
    { name: "Shell", category: "transportation", amount: 0, transactions: 0, location: "Local" },
    { name: "Netflix", category: "entertainment", amount: 0, transactions: 0, location: "Online" },
    { name: "Target", category: "shopping", amount: 0, transactions: 0, location: "Local" },
    { name: "Uber", category: "transportation", amount: 0, transactions: 0, location: "Online" },
    { name: "Chipotle", category: "food", amount: 0, transactions: 0, location: "Local" },
    { name: "Spotify", category: "entertainment", amount: 0, transactions: 0, location: "Online" },
    { name: "Walmart", category: "shopping", amount: 0, transactions: 0, location: "Local" },
    { name: "Apple", category: "shopping", amount: 0, transactions: 0, location: "Online" }
  ]

  // Distribute spending across merchants based on categories
  metrics.categoryBreakdown.forEach(categoryData => {
    const categoryMerchants = merchants.filter(m => m.category === categoryData.category)
    if (categoryMerchants.length > 0) {
      const amountPerMerchant = categoryData.amount.amount / categoryMerchants.length
      const transactionsPerMerchant = Math.ceil(categoryData.transactionCount / categoryMerchants.length)
      
      categoryMerchants.forEach(merchant => {
        merchant.amount = amountPerMerchant
        merchant.transactions = transactionsPerMerchant
      })
    }
  })

  return merchants
    .filter(m => m.amount > 0)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6)
}

const MERCHANT_ICONS: Record<string, React.ReactNode> = {
  "Amazon": <Store className="h-4 w-4" />,
  "Starbucks": <Store className="h-4 w-4" />,
  "Shell": <Store className="h-4 w-4" />,
  "Netflix": <CreditCard className="h-4 w-4" />,
  "Target": <Store className="h-4 w-4" />,
  "Uber": <CreditCard className="h-4 w-4" />,
  "Chipotle": <Store className="h-4 w-4" />,
  "Spotify": <CreditCard className="h-4 w-4" />,
  "Walmart": <Store className="h-4 w-4" />,
  "Apple": <CreditCard className="h-4 w-4" />
}

export function TopMerchants({ metrics, className }: TopMerchantsProps) {
  const merchantData = generateMerchantData(metrics)
  const totalMerchantSpending = merchantData.reduce((sum, merchant) => sum + merchant.amount, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={cn("relative", className)}
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900">
            Top Merchants
          </CardTitle>
          <p className="text-sm text-gray-600">
            Where you spent the most this month
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Merchants List */}
          <div className="space-y-3">
            {merchantData.map((merchant, index) => {
              const percentage = totalMerchantSpending > 0 ? (merchant.amount / totalMerchantSpending) * 100 : 0
              
              return (
                <motion.div
                  key={merchant.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                        {MERCHANT_ICONS[merchant.name] || <Store className="h-4 w-4" />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900 truncate">
                            {merchant.name}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span>{merchant.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>{merchant.transactions} transaction{merchant.transactions !== 1 ? 's' : ''}</span>
                          <span>•</span>
                          <span>{percentage.toFixed(1)}% of total</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="font-bold text-gray-900">
                        {formatCurrency(merchant.amount, metrics.totalExpenses.currency)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatCurrency(merchant.amount / merchant.transactions, metrics.totalExpenses.currency, { showCents: false })} avg
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-4 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {merchantData.length}
                </div>
                <div className="text-xs text-blue-600">Unique Merchants</div>
              </div>
              
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(totalMerchantSpending, metrics.totalExpenses.currency, { showCents: false })}
                </div>
                <div className="text-xs text-green-600">Total Spent</div>
              </div>
            </div>
          </motion.div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Spending insight</p>
                <p className="text-sm text-gray-600">
                  You spent most at <span className="font-semibold text-gray-900">
                    {merchantData[0]?.name}
                  </span> with <span className="font-semibold text-gray-900">
                    {merchantData[0]?.transactions}
                  </span> transactions totaling <span className="font-semibold text-gray-900">
                    {formatCurrency(merchantData[0]?.amount || 0, metrics.totalExpenses.currency)}
                  </span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Screen reader fallback */}
          <div className="sr-only">
            <table>
              <caption>Top merchants for {metrics.month}</caption>
              <thead>
                <tr>
                  <th>Merchant</th>
                  <th>Location</th>
                  <th>Amount Spent</th>
                  <th>Transaction Count</th>
                  <th>Average per Transaction</th>
                  <th>Percentage of Total</th>
                </tr>
              </thead>
              <tbody>
                {merchantData.map(merchant => (
                  <tr key={merchant.name}>
                    <td>{merchant.name}</td>
                    <td>{merchant.location}</td>
                    <td>{formatCurrency(merchant.amount, metrics.totalExpenses.currency)}</td>
                    <td>{merchant.transactions}</td>
                    <td>{formatCurrency(merchant.amount / merchant.transactions, metrics.totalExpenses.currency)}</td>
                    <td>{((merchant.amount / totalMerchantSpending) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
