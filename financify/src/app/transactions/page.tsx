"use client"

import React, { useState, useMemo } from "react"
import { useRouter } from "next/navigation"

export const dynamic = 'force-dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading, Text } from "@/components/ui/typography"
import { useTransactions, useTransactionFilters } from "@/lib/hooks"
import { 
  TransactionTable,
  TransactionFilters,
  TransactionDetailsDrawer,
  TransactionToolbar
} from "@/components/transactions"
import { Transaction, TransactionCategory } from "@/lib/types"
import { AlertCircle } from "lucide-react"

export default function TransactionsPage() {
  const router = useRouter()
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

      // Time filters (weekday/weekend)
      if (filters.timeFilters.length > 0) {
        const transactionDate = new Date(transaction.date)
        const dayOfWeek = transactionDate.getDay() // 0 = Sunday, 6 = Saturday
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
        const isWeekday = !isWeekend
        
        const hasTimeMatch = filters.timeFilters.some(filter => {
          if (filter === 'weekend') return isWeekend
          if (filter === 'weekday') return isWeekday
          return false
        })
        
        if (!hasTimeMatch) {
          return false
        }
      }

      // Location filters (on-campus/off-campus)
      if (filters.locationFilters.length > 0) {
        // This is a simplified implementation - in a real app, you'd have location data
        // For now, we'll use merchant names to determine location
        const merchantText = (transaction.merchant || transaction.description).toLowerCase()
        const isOnCampus = merchantText.includes('campus') || 
                          merchantText.includes('university') || 
                          merchantText.includes('dining') ||
                          merchantText.includes('bookstore')
        const isOffCampus = !isOnCampus
        
        const hasLocationMatch = filters.locationFilters.some(filter => {
          if (filter === 'on-campus') return isOnCampus
          if (filter === 'off-campus') return isOffCampus
          return false
        })
        
        if (!hasLocationMatch) {
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

  const handleEditTransaction = (transaction: Transaction) => {
    // TODO: Implement edit transaction flow
    console.log('Editing transaction:', transaction)
    alert('Edit transaction functionality coming soon!')
  }

  const handleAddTransaction = (transactionData: Partial<Transaction>) => {
    // TODO: Implement add transaction API call
    console.log('Adding transaction:', transactionData)
    
    // For now, just show a success message
    alert('Transaction added successfully! (This is a mock implementation)')
  }

  const handleImportTransactions = () => {
    // Create a file input element
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.csv,.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        console.log('Importing file:', file.name)
        alert(`Importing ${file.name}... (This is a mock implementation)`)
      }
    }
    input.click()
  }

  const handleExportTransactions = () => {
    // Create CSV content
    const csvContent = [
      ['Date', 'Description', 'Merchant', 'Category', 'Amount', 'Type', 'Status'],
      ...filteredTransactions.map(t => [
        t.date,
        t.description,
        t.merchant || '',
        t.category,
        t.amount.amount.toString(),
        t.type,
        t.status
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleSettings = () => {
    // Navigate to settings page
    router.push('/settings')
  }

  const handleDensityChange = (density: 'comfortable' | 'compact') => {
    updateFilters({ density })
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
      <div className="max-w-[1600px] mx-auto px-12 py-20">
        <div className="mb-8">
          <Heading as="h1" size="4xl" balance={false} className="mb-6">Transactions</Heading>
          <Text size="lg" color="muted" className="max-w-7xl mx-auto leading-relaxed px-4" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            View and manage all your financial transactions with powerful filtering and search capabilities. 
            Analyze your spending patterns, track expenses, and gain insights into your financial habits.
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
                <TransactionToolbar
                  totalCount={allTransactions.length}
                  filteredCount={filteredTransactions.length}
                  density={filters.density}
                  onDensityChange={handleDensityChange}
                  onAddTransaction={handleAddTransaction}
                  onImportTransactions={handleImportTransactions}
                  onExportTransactions={handleExportTransactions}
                  onSettings={handleSettings}
                  className="p-4 border-b"
                />
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
                    onEditTransaction={handleEditTransaction}
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