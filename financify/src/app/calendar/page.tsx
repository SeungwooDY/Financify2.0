"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTransactions } from "@/lib/hooks/use-transactions"
import { Transaction } from "@/lib/types"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const { data: transactions } = useTransactions(1, 100) // Get more transactions for calendar view

  const today = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getTransactionsForDate = (date: Date) => {
    if (!transactions?.data) return []
    
    return transactions.data.filter((transaction: Transaction) => {
      const transactionDate = new Date(transaction.date)
      return transactionDate.toDateString() === date.toDateString()
    })
  }

  const getTotalForDate = (date: Date) => {
    const dayTransactions = getTransactionsForDate(date)
    return dayTransactions.reduce((sum: number, t: Transaction) => sum + t.amount.amount, 0)
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const renderCalendarDays = () => {
    const days = []
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-muted" />
      )
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dayTransactions = getTransactionsForDate(date)
      const total = getTotalForDate(date)
      const isToday = date.toDateString() === today.toDateString()

      days.push(
        <div
          key={day}
          className={`h-24 border border-muted p-2 ${
            isToday ? 'bg-primary/10' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <span className={`text-sm font-medium ${isToday ? 'text-primary' : ''}`}>
              {day}
            </span>
            {total !== 0 && (
              <span className={`text-xs font-mono ${
                total > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {total > 0 ? '+' : ''}${Math.abs(total).toFixed(0)}
              </span>
            )}
          </div>
          {dayTransactions.length > 0 && (
            <div className="space-y-1">
              {dayTransactions.slice(0, 2).map((transaction: Transaction, index: number) => (
                <div
                  key={index}
                  className="text-xs p-1 bg-muted rounded truncate"
                  title={transaction.description}
                >
                  {transaction.description}
                </div>
              ))}
              {dayTransactions.length > 2 && (
                <div className="text-xs text-muted-foreground">
                  +{dayTransactions.length - 2} more
                </div>
              )}
            </div>
          )}
        </div>
      )
    }

    return days
  }

  return (
    <main className="container-5xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Financial Calendar</h1>
          <p className="text-muted-foreground">
            View your transactions in a calendar format
          </p>
        </div>

        {/* Calendar Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6" />
                <div>
                  <CardTitle className="text-2xl">
                    {monthNames[month]} {year}
                  </CardTitle>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentDate(new Date())}
                >
                  Today
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Calendar Grid */}
        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-7">
              {/* Day headers */}
              {dayNames.map(day => (
                <div key={day} className="p-4 text-center font-medium border-b border-muted">
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {renderCalendarDays()}
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {transactions?.data?.filter((t: Transaction) => {
                  const transactionDate = new Date(t.date)
                  return transactionDate.getMonth() === month && 
                         transactionDate.getFullYear() === year
                }).length || 0}
              </div>
              <p className="text-xs text-muted-foreground">transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ${transactions?.data?.filter((t: Transaction) => {
                  const transactionDate = new Date(t.date)
                  return transactionDate.getMonth() === month && 
                         transactionDate.getFullYear() === year &&
                         t.type === 'income'
                }).reduce((sum: number, t: Transaction) => sum + t.amount.amount, 0).toLocaleString() || 0}
              </div>
              <p className="text-xs text-muted-foreground">this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                ${Math.abs(transactions?.data?.filter((t: Transaction) => {
                  const transactionDate = new Date(t.date)
                  return transactionDate.getMonth() === month && 
                         transactionDate.getFullYear() === year &&
                         t.type === 'expense'
                }).reduce((sum: number, t: Transaction) => sum + t.amount.amount, 0) || 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">this month</p>
            </CardContent>
          </Card>
        </div>
    </main>
  )
}