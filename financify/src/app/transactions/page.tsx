"use client"

import React, { useState, useMemo } from "react"

export const dynamic = 'force-dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading, Text } from "@/components/ui/typography"
import { useTransactions, useTransactionFilters } from "@/lib/hooks"
import { 
  TransactionTable,
  TransactionFilters,
  TransactionDetailsDrawer
} from "@/components/transactions"
import { Transaction, TransactionCategory } from "@/lib/types"
import { AlertCircle } from "lucide-react"

export default function TransactionsPage() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Get all transactions (no pagination for now)
  const { data: transactionsResponse, isLoading, error } = useTransactions(1, 1000)
  const allTransactions = useMemo(() => transactionsResponse?.data || [], [transactionsResponse?.data])

  // URL state management
  const {
    filters,
    toggleCategory,
    clearAllFilters,
    updateFilters
  } = useTransactionFilters()

  // Filter transactions based on URL state
  const filteredTransactions = useMemo(() => {
    return allTransactions.filter((transaction: Transaction) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(transaction.category)) {
        return false
      }

      // Merchant filter
      if (filters.merchant) {
        const merchantText = (transaction.merchant || transaction.description).toLowerCase()
        if (!merchantText.includes(filters.merchant.toLowerCase())) {
          return false
        }
      }

      // Date range filter
      if (filters.dateFrom) {
        const transactionDate = new Date(transaction.date)
        const fromDate = new Date(filters.dateFrom)
        if (transactionDate < fromDate) {
          return false
        }
      }

      if (filters.dateTo) {
        const transactionDate = new Date(transaction.date)
        const toDate = new Date(filters.dateTo)
        if (transactionDate > toDate) {
          return false
        }
      }

      return true
    })
  }, [allTransactions, filters])

  // Get unique categories for filter options
  const availableCategories = useMemo(() => {
    const categories = new Set<TransactionCategory>()
    allTransactions.forEach(transaction => {
      categories.add(transaction.category)
    })
    return Array.from(categories)
  }, [allTransactions])

  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setIsDrawerOpen(true)
  }

  const handleRecategorize = (transactionId: string, newCategory: TransactionCategory) => {
    // TODO: Implement recategorization API call
    console.log('Recategorizing transaction:', transactionId, 'to:', newCategory)
    // For now, just close the drawer
    setIsDrawerOpen(false)
  }

  const handleAddTransaction = () => {
    // TODO: Implement add transaction flow
    console.log('Add transaction clicked')
  }

  const handleImportTransactions = () => {
    // TODO: Implement import flow
    console.log('Import transactions clicked')
  }

  const handleExportTransactions = () => {
    // TODO: Implement export flow
    console.log('Export transactions clicked')
  }

  const handleSettings = () => {
    // TODO: Implement settings
    console.log('Settings clicked')
  }

  if (error) {
    return (
      <Card className="card-standard">
        <CardContent className="p-12 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <Heading as="h2" size="xl" className="mb-2">Error Loading Transactions</Heading>
          <Text color="muted">
            There was a problem loading your transactions. Please try again.
          </Text>
        </CardContent>
      </Card>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-[1264px] mx-auto px-6 py-12">
        <div className="mb-8">
          <Heading as="h1" size="4xl" className="mb-4 text-balance">Transactions</Heading>
          <Text size="lg" color="muted" className="max-w-2xl">
            View and manage all your financial transactions with powerful filtering and search
          </Text>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Filter rail (left, col 1-3 on desktop; collapsible on mobile) */}
          <div className="col-span-12 lg:col-span-3">
            <Card className="card-elevated sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Filters</CardTitle>
                <CardDescription>Narrow down your transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <TransactionFilters
                  categories={availableCategories}
                  selectedCategories={filters.categories}
                  onCategoryToggle={toggleCategory}
                  merchantSearch={filters.merchant}
                  onMerchantSearchChange={(merchant) => updateFilters({ merchant })}
                  dateFrom={filters.dateFrom}
                  onDateFromChange={(dateFrom) => updateFilters({ dateFrom })}
                  dateTo={filters.dateTo}
                  onDateToChange={(dateTo) => updateFilters({ dateTo })}
                  onClearAll={clearAllFilters}
                />
              </CardContent>
            </Card>
          </div>

          {/* Table (col 4-12) */}
          <div className="col-span-12 lg:col-span-9">
            <Card className="card-elevated">
              <CardContent className="p-0">
                {isLoading ? (
                  <div className="p-8">
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="h-4 w-4 bg-muted animate-pulse rounded" />
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-muted animate-pulse rounded w-1/4" />
                            <div className="h-3 bg-muted animate-pulse rounded w-1/6" />
                          </div>
                          <div className="h-4 bg-muted animate-pulse rounded w-16" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <TransactionTable
                    transactions={filteredTransactions}
                    sortBy={filters.sortBy}
                    sortOrder={filters.sortOrder}
                    onSort={(column) => {
                      const newOrder = filters.sortBy === column && filters.sortOrder === 'asc' ? 'desc' : 'asc'
                      updateFilters({ sortBy: column, sortOrder: newOrder })
                    }}
                    density={filters.density}
                    onRowClick={handleRowClick}
                    selectedTransactionId={selectedTransaction?.id}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Details Drawer */}
        <TransactionDetailsDrawer
          transaction={selectedTransaction}
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false)
            setSelectedTransaction(null)
          }}
          onRecategorize={handleRecategorize}
        />
      </div>
    </main>
  )
}