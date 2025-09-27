"use client"

import { WrappedHero } from "@/components/wrapped"
import { useMonthMetrics } from "@/lib/hooks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTransactions } from "@/lib/hooks"
import { Transaction } from "@/lib/types"
import { 
  Receipt,
  Calendar,
  Upload,
  PiggyBank
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const month = searchParams.get('month') || '2025-08'
  
  // const { data: user } = useCurrentUser()
  const { data: monthMetrics, isLoading: metricsLoading } = useMonthMetrics(month)
  const { data: transactions } = useTransactions(1, 5)

  // Show loading state
  if (metricsLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your financial wrapped...</p>
        </div>
      </main>
    )
  }

  // Show error state if no metrics available
  if (!monthMetrics?.data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-4">No Data Available</h1>
          <p className="text-muted-foreground mb-6">We couldn&apos;t load your financial data. Please try uploading some transactions first.</p>
          <Button asChild>
            <Link href="/upload">Upload Transactions</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Wrapped Hero Section */}
      <WrappedHero metrics={monthMetrics.data} />

      {/* Additional Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/upload">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upload Transactions</CardTitle>
                  <Upload className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Import your bank statements
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/transactions">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">View Transactions</CardTitle>
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Manage your transactions
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/calendar">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Calendar View</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    See your financial calendar
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/budget">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Budget Planning</CardTitle>
                  <PiggyBank className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Plan and track your budget
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Your latest financial activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            {transactions?.data?.length ? (
              <div className="space-y-4">
                {transactions.data.map((transaction: Transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full ${
                        transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.category} • {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount.amount).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No transactions found</p>
            )}
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/transactions">View All Transactions</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}