"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTransactions } from "@/lib/hooks/use-transactions"
import { Transaction } from "@/lib/types"
import { useState } from "react"
import { Search, Filter, Plus } from "lucide-react"

export default function TransactionsPage() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const { data: transactionsResponse, isLoading, error } = useTransactions(page, 10)
  const transactions = transactionsResponse?.data

  const filteredTransactions = transactions?.filter((transaction: Transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase()) ||
    transaction.category.toLowerCase().includes(search.toLowerCase())
  ) || []

  const formatAmount = (transaction: Transaction) => {
    const amount = Math.abs(transaction.amount.amount)
    const formatted = amount.toLocaleString()
    return transaction.type === 'income' ? `+$${formatted}` : `-$${formatted}`
  }

  const getAmountColor = (transaction: Transaction) => {
    return transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                Error loading transactions. Please try again.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <main className="container-5xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">Transactions</h1>
        <p className="text-text-secondary mt-2">View and manage all your financial transactions.</p>
      </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">
            View and manage your financial transactions
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>
              {filteredTransactions.length} transaction(s) found
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
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
            ) : filteredTransactions.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction: Transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">
                        {transaction.description}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">📊</span>
                          <span>{transaction.category}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(transaction.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className={`text-right font-medium ${getAmountColor(transaction)}`}>
                        {formatAmount(transaction)}
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          transaction.status === 'cleared' 
                            ? 'bg-green-100 text-green-800' 
                            : transaction.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No transactions found</p>
                <Button className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Transaction
                </Button>
              </div>
            )}

            {/* Pagination */}
            {transactionsResponse?.metadata?.total && transactionsResponse.metadata.total > 10 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-muted-foreground">
                  Showing {((page - 1) * 10) + 1} to {Math.min(page * 10, transactionsResponse.metadata.total)} of {transactionsResponse.metadata.total} results
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(page + 1)}
                    disabled={page === Math.ceil(transactionsResponse.metadata.total / 10)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
    </main>
  )
}