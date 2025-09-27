"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MonthMetrics } from "@/lib/types"
import { WrappedSummaryCard } from "./WrappedSummaryCard"
import { LazyChart } from "@/components/charts/LazyChart"
import { TopMerchants } from "./TopMerchants"
import { cn } from "@/lib/utils"

interface WrappedHeroProps {
  metrics: MonthMetrics
  className?: string
}

// Confetti animation component
function ConfettiAnimation() {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: -10,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 10,
            rotate: 360,
            opacity: 0
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

// Ambient gradient ribbon
function AmbientRibbon() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={shouldReduceMotion ? {} : {
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        animate={shouldReduceMotion ? {} : {
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}

export function WrappedHero({ metrics, className }: WrappedHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn("relative min-h-screen py-12", className)}
    >
      {/* Background Elements */}
      <AmbientRibbon />
      <ConfettiAnimation />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-text via-accent-1 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Your Financial Wrapped
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Discover your spending patterns, top merchants, and financial insights for{" "}
            <span className="font-semibold text-text">
              {new Date(metrics.month + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </motion.p>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Summary Card (spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <WrappedSummaryCard metrics={metrics} />
          </motion.div>

          {/* Right Column - Charts and Merchants (spans 7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Row - Category Chart (spans full width) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LazyChart
                type="bar"
                data={metrics.categoryBreakdown.map(cat => ({
                  category: cat.category,
                  amount: cat.amount.amount,
                  percentage: cat.percentage
                }))}
                xKey="category"
                yKey="amount"
                title="Spending by Category"
                description="Monthly spending breakdown by category"
              />
            </motion.div>

            {/* Bottom Row - Two columns for Trend and Merchants */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Trend Line Chart */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <LazyChart
                  type="line"
                  data={metrics.trend_daily.map(day => ({
                    day: new Date(day.date).getDate().toString(),
                    spending: day.totalSpending.amount
                  }))}
                  xKey="day"
                  yKey="spending"
                  title="Daily Spending Trend"
                  description="Daily spending pattern throughout the month"
                />
              </motion.div>

              {/* Top Merchants */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <TopMerchants metrics={metrics} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="inline-block"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              View Detailed Analytics
            </button>
          </motion.div>
          <p className="text-sm text-gray-500 mt-4">
            Click on any category bar to filter your transactions
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
