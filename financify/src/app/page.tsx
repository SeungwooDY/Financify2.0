"use client"

import { Suspense } from "react"
import { useMonthMetrics } from "@/lib/hooks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heading, Text } from "@/components/ui/typography"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { 
  WrappedSummaryCard,
  QuickFilters,
  TopMerchants,
  CategoryBreakdown
} from "@/components/wrapped"
import { 
  TrendLineChart
} from "@/components/charts"

export const dynamic = 'force-dynamic'

function DashboardContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const month = searchParams.get('month') || new Date().toISOString().slice(0, 7)
  
  // const { data: user } = useCurrentUser()
  const { data: monthMetrics, isLoading: metricsLoading } = useMonthMetrics(month)

  const handleCategoryFilter = (category: string) => {
    router.push(`/transactions?categories=${encodeURIComponent(category)}`)
  }

  // Show loading state
  if (metricsLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="relative mb-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary via-accent-1 to-accent-2 animate-spin">
              <div className="absolute inset-2 rounded-full bg-paper"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 animate-pulse"></div>
          </div>
          <h2 className="text-2xl font-bold text-text mb-2">Loading Your Financial Wrapped</h2>
          <p className="text-muted-foreground text-lg">Preparing your personalized insights...</p>
        </div>
      </main>
    )
  }

  // Show error state if no metrics available
  if (!monthMetrics?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in-up max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-1/20 to-accent-2/20 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
          <Heading as="h1" size="4xl" className="mb-6 text-balance bg-gradient-to-r from-text via-accent-1 to-accent-2 bg-clip-text text-transparent">
            No Data Available
          </Heading>
          <Text color="muted" className="mb-8 text-lg leading-relaxed text-pretty">
            We couldn&apos;t load your financial data. Please try uploading some transactions first to get started with your personalized financial insights.
          </Text>
          <Button asChild size="lg" className="shadow-glow">
            <Link href="/upload">Upload Transactions</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Gradient Header Treatment */}
      <div className="relative overflow-hidden">
        {/* Ambient background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 via-accent-2/3 to-accent-3/5 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-1/10 to-transparent" />
        
        {/* Dashboard / Wrapped - 12-col grid, max-width 1264px, 24px gutters */}
        <div className="max-w-[1264px] mx-auto px-6 relative">
          {/* Above the fold - H1 and Celebration Card */}
          <div className="grid grid-cols-12 gap-6 mb-12 pt-8">
            {/* Left Column - H1 and Intro (col 1-7) */}
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-8">
                <h1 className="text-balance text-5xl md:text-6xl font-semibold tracking-tight text-text mb-4">
                  Your {new Date(monthMetrics.data.month + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}{" "}
                  <span className="bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent">
                    Wrapped
                  </span>
                </h1>
                <p className="text-pretty leading-relaxed max-w-prose text-text-secondary text-lg">
                  Discover your patterns, top merchants, and month-over-month changes.
                </p>
              </div>
              
              {/* KPI Summary Card */}
              <WrappedSummaryCard metrics={monthMetrics.data} className="mb-8" />
            </div>
            
            {/* Right Column - Quick Filters */}
            <div className="col-span-12 lg:col-span-5">
              <QuickFilters />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1264px] mx-auto px-6">

        {/* Below the fold - Two rows */}
        {/* Row 1: Category Breakdown + Top Merchants */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {/* Category Breakdown (col 1-8) */}
          <div className="col-span-12 lg:col-span-8">
            <CategoryBreakdown metrics={monthMetrics.data} />
          </div>
          
          {/* Top Merchants (col 9-12) */}
          <div className="col-span-12 lg:col-span-4">
            <TopMerchants metrics={monthMetrics.data} />
          </div>
        </div>

        {/* Row 2: Trend Over Time + Standout Insights */}
        <div className="grid grid-cols-12 gap-6">
          {/* Trend Over Time (col 1-8) */}
          <div className="col-span-12 lg:col-span-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <div className="w-5 h-5 mr-2 bg-gradient-to-r from-accent-1 to-accent-2 rounded"></div>
                  Trend Over Time
                </CardTitle>
                <CardDescription>Daily spending with weekend bands</CardDescription>
              </CardHeader>
              <CardContent>
                <TrendLineChart metrics={monthMetrics.data} />
                <div className="mt-4 text-center">
                  <p className="text-sm text-text-tertiary">
                    MoM: {monthMetrics.data.trends.monthOverMonth.expenseChange > 0 ? '+' : ''}
                    {monthMetrics.data.trends.monthOverMonth.expenseChange.toFixed(1)}% change
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Standout Insights (col 9-12) */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <div className="w-5 h-5 mr-2 bg-gradient-to-r from-accent-2 to-accent-3 rounded"></div>
                  Standout Insights
                </CardTitle>
                <CardDescription>Key patterns this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div 
                    className="p-4 rounded-xl bg-gradient-to-r from-accent-1/10 to-accent-1/5 border border-accent-1/20 cursor-pointer hover:from-accent-1/20 hover:to-accent-1/10 hover:shadow-md transition-all duration-200 group"
                    onClick={() => handleCategoryFilter('Food & Dining')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-text">
                        Late-night food
                      </div>
                      <div className="text-xs font-semibold text-accent-1">
                        ↑ 18%
                      </div>
                    </div>
                    <div className="text-xs text-text-tertiary">
                      Click to filter transactions
                    </div>
                  </div>
                  
                  <div 
                    className="p-4 rounded-xl bg-gradient-to-r from-accent-2/10 to-accent-2/5 border border-accent-2/20 cursor-pointer hover:from-accent-2/20 hover:to-accent-2/10 hover:shadow-md transition-all duration-200 group"
                    onClick={() => handleCategoryFilter('Transportation')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-text">
                        Transportation
                      </div>
                      <div className="text-xs font-semibold text-accent-2">
                        ↓ 12%
                      </div>
                    </div>
                    <div className="text-xs text-text-tertiary">
                      Click to filter transactions
                    </div>
                  </div>
                  
                  <div 
                    className="p-4 rounded-xl bg-gradient-to-r from-accent-3/10 to-accent-3/5 border border-accent-3/20 cursor-pointer hover:from-accent-3/20 hover:to-accent-3/10 hover:shadow-md transition-all duration-200 group"
                    onClick={() => handleCategoryFilter('Education')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-text">
                        Books & supplies
                      </div>
                      <div className="text-xs font-semibold text-accent-3">
                        ↑ 25%
                      </div>
                    </div>
                    <div className="text-xs text-text-tertiary">
                      Click to filter transactions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="relative mb-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary via-accent-1 to-accent-2 animate-spin">
              <div className="absolute inset-2 rounded-full bg-paper"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 animate-pulse"></div>
          </div>
          <h2 className="text-2xl font-bold text-text mb-2">Loading Your Financial Wrapped</h2>
          <p className="text-muted-foreground text-lg">Preparing your personalized insights...</p>
        </div>
      </main>
    }>
      <DashboardContent />
    </Suspense>
  )
}