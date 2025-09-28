"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  X,
  Edit,
  Check,
  X as XIcon
} from "lucide-react"
import { Transaction, TransactionCategory } from "@/lib/types"
import { formatCurrency } from "@/lib/api"
import { cn } from "@/lib/utils"

interface TransactionDetailsDrawerProps {
  transaction: Transaction | null
  isOpen: boolean
  onClose: () => void
  onRecategorize?: (transactionId: string, newCategory: TransactionCategory) => void
  className?: string
}

const CATEGORY_LABELS: Record<TransactionCategory, string> = {
  tuition: "Tuition",
  books: "Books & Supplies",
  housing: "Housing", 
  food: "Food & Dining",
  transportation: "Transportation",
  entertainment: "Entertainment",
  healthcare: "Healthcare",
  utilities: "Utilities",
  shopping: "Shopping",
  income: "Income",
  refund: "Refunds",
  other: "Other"
}

const CATEGORY_COLORS: Record<TransactionCategory, string> = {
  tuition: "bg-blue-100 text-blue-800 border-blue-200",
  books: "bg-indigo-100 text-indigo-800 border-indigo-200",
  housing: "bg-purple-100 text-purple-800 border-purple-200",
  food: "bg-green-100 text-green-800 border-green-200",
  transportation: "bg-yellow-100 text-yellow-800 border-yellow-200",
  entertainment: "bg-pink-100 text-pink-800 border-pink-200",
  healthcare: "bg-red-100 text-red-800 border-red-200",
  utilities: "bg-orange-100 text-orange-800 border-orange-200",
  shopping: "bg-cyan-100 text-cyan-800 border-cyan-200",
  income: "bg-emerald-100 text-emerald-800 border-emerald-200",
  refund: "bg-teal-100 text-teal-800 border-teal-200",
  other: "bg-gray-100 text-gray-800 border-gray-200"
}

const PAYMENT_METHOD_LABELS: Record<string, string> = {
  credit_card: "Credit Card",
  debit_card: "Debit Card",
  bank_transfer: "Bank Transfer",
  cash: "Cash",
  check: "Check",
  other: "Other"
}

const STATUS_LABELS: Record<string, string> = {
  cleared: "Cleared",
  pending: "Pending",
  cancelled: "Cancelled"
}

const STATUS_COLORS: Record<string, string> = {
  cleared: "bg-green-100 text-green-800 border-green-200",
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  cancelled: "bg-red-100 text-red-800 border-red-200"
}

export function TransactionDetailsDrawer({
  transaction,
  isOpen,
  onClose,
  onRecategorize,
  className
}: TransactionDetailsDrawerProps) {
  const [isEditingCategory, setIsEditingCategory] = useState(false)
  const [tempCategory, setTempCategory] = useState<TransactionCategory | null>(null)

  if (!transaction) return null

  const handleRecategorize = () => {
    if (tempCategory && onRecategorize) {
      onRecategorize(transaction.id, tempCategory)
      setIsEditingCategory(false)
      setTempCategory(null)
    }
  }

  const handleCancelEdit = () => {
    setIsEditingCategory(false)
    setTempCategory(null)
  }

  const formatAmount = (transaction: Transaction) => {
    const amount = Math.abs(transaction.amount.amount)
    const formatted = formatCurrency(amount, transaction.amount.currency, { showCents: true })
    return transaction.type === 'income' ? `+${formatted}` : `-${formatted}`
  }

  const getAmountColor = (transaction: Transaction) => {
    return transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
  }

  const categories = Object.keys(CATEGORY_LABELS) as TransactionCategory[]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl",
              className
            )}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold">Transaction Details</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Basic Info */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold">Transaction Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Description */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Description</label>
                      <p className="text-sm mt-1 leading-relaxed">{transaction.description}</p>
                    </div>

                    {/* Merchant */}
                    {transaction.merchant && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Merchant</label>
                        <p className="text-sm mt-1 leading-relaxed">{transaction.merchant}</p>
                      </div>
                    )}

                    {/* Amount */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Amount</label>
                      <p className={cn(
                        "text-lg font-semibold mt-1 leading-tight",
                        getAmountColor(transaction)
                      )}>
                        {formatAmount(transaction)}
                      </p>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Date</label>
                      <p className="text-sm mt-1">
                        {new Date(transaction.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Category */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!isEditingCategory ? (
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-sm font-medium",
                            CATEGORY_COLORS[transaction.category]
                          )}
                        >
                          {CATEGORY_LABELS[transaction.category]}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setIsEditingCategory(true)
                            setTempCategory(transaction.category)
                          }}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Change
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((category) => (
                            <Button
                              key={category}
                              variant={tempCategory === category ? "default" : "outline"}
                              size="sm"
                              onClick={() => setTempCategory(category)}
                              className={cn(
                                "text-xs",
                                tempCategory === category
                                  ? ""
                                  : "hover:bg-muted"
                              )}
                            >
                              {CATEGORY_LABELS[category]}
                            </Button>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={handleRecategorize}
                            disabled={!tempCategory || tempCategory === transaction.category}
                            className="flex-1"
                          >
                            <Check className="h-3 w-3 mr-1" />
                            Save
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCancelEdit}
                            className="flex-1"
                          >
                            <XIcon className="h-3 w-3 mr-1" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Additional Details */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Additional Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Payment Method */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Payment Method</label>
                      <p className="text-sm mt-1">
                        {PAYMENT_METHOD_LABELS[transaction.paymentMethod] || transaction.paymentMethod}
                      </p>
                    </div>

                    {/* Status */}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Status</label>
                      <div className="mt-1">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-xs font-medium",
                            STATUS_COLORS[transaction.status]
                          )}
                        >
                          {STATUS_LABELS[transaction.status] || transaction.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Location */}
                    {transaction.location && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Location</label>
                        <p className="text-sm mt-1">{transaction.location.name}</p>
                        {transaction.location.address && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {transaction.location.address}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Tags */}
                    {transaction.tags && transaction.tags.length > 0 && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Tags</label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {transaction.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {transaction.notes && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Notes</label>
                        <p className="text-sm mt-1">{transaction.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Raw Data */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Raw Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
                      {JSON.stringify(transaction, null, 2)}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
