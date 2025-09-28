"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Heading, Text } from "@/components/ui/typography"
import { X, DollarSign, Calendar, CreditCard, MapPin } from "lucide-react"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"

interface Transaction {
  id?: string
  date: string
  description: string
  amount: number
  category: string
  type: string
  payment_method: string
  merchant?: string
}

interface DayTransactionModalProps {
  isOpen: boolean
  onClose: () => void
  date: string
  transactions: Transaction[]
  totalSpending: number
  totalIncome: number
}

export function DayTransactionModal({
  isOpen,
  onClose,
  date,
  transactions,
  totalSpending,
  totalIncome
}: DayTransactionModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      food: "bg-green-100 text-green-800",
      shopping: "bg-blue-100 text-blue-800",
      books: "bg-purple-100 text-purple-800",
      other: "bg-gray-100 text-gray-800",
      income: "bg-emerald-100 text-emerald-800"
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'digital_card':
      case 'debit_card':
        return <CreditCard className="h-4 w-4" />
      case 'bank_transfer':
        return <DollarSign className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-xl">
                    <Calendar className="h-5 w-5 inline mr-2" />
                    {formatDate(date)}
                  </CardTitle>
                  <Text color="muted" className="mt-1">
                    {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
                  </Text>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Summary */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-lg">
                  <div className="text-center">
                    <Text color="muted" className="text-sm">Total Spending</Text>
                    <Text className="text-lg font-semibold text-red-600">
                      {formatCurrency(totalSpending, "USD")}
                    </Text>
                  </div>
                  <div className="text-center">
                    <Text color="muted" className="text-sm">Total Income</Text>
                    <Text className="text-lg font-semibold text-green-600">
                      {formatCurrency(totalIncome, "USD")}
                    </Text>
                  </div>
                </div>

                {/* Transactions */}
                <div className="space-y-3">
                  {transactions.length === 0 ? (
                    <div className="text-center py-8">
                      <Text color="muted">No transactions on this day</Text>
                    </div>
                  ) : (
                    transactions.map((transaction, index) => (
                      <motion.div
                        key={transaction.id || index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between p-3 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div className="flex-shrink-0">
                            {getPaymentMethodIcon(transaction.payment_method)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <Text className="font-medium truncate">
                              {transaction.merchant || transaction.description}
                            </Text>
                            <Text color="muted" className="text-sm truncate">
                              {transaction.description}
                            </Text>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={cn(
                                "px-2 py-1 rounded-full text-xs font-medium",
                                getCategoryColor(transaction.category)
                              )}>
                                {transaction.category}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {transaction.payment_method.replace('_', ' ')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <Text className={cn(
                            "font-semibold",
                            transaction.amount > 0 ? "text-green-600" : "text-red-600"
                          )}>
                            {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount, "USD")}
                          </Text>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
