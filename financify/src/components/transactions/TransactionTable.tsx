"use client"

import React, { useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronUp, 
  ChevronDown,
  Calendar,
  Building2,
  Tag,
  DollarSign,
  Eye,
  Edit
} from "lucide-react"
import { Transaction, TransactionCategory } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Money } from "@/components/ui/typography"

interface TransactionTableProps {
  transactions: Transaction[]
  sortBy: 'date' | 'amount' | 'merchant' | 'category'
  sortOrder: 'asc' | 'desc'
  onSort: (column: 'date' | 'amount' | 'merchant' | 'category') => void
  density: 'comfortable' | 'compact'
  onRowClick: (transaction: Transaction) => void
  selectedTransactionId?: string
  className?: string
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

export function TransactionTable({
  transactions,
  sortBy,
  sortOrder,
  onSort,
  density,
  onRowClick,
  selectedTransactionId,
  className
}: TransactionTableProps) {
  // const [hoveredRowId, setHoveredRowId] = useState<string | null>(null)

  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => {
      let aValue: string | number
      let bValue: string | number

      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime()
          bValue = new Date(b.date).getTime()
          break
        case 'amount':
          aValue = a.amount.amount
          bValue = b.amount.amount
          break
        case 'merchant':
          aValue = a.merchant || a.description
          bValue = b.merchant || b.description
          break
        case 'category':
          aValue = a.category
          bValue = b.category
          break
        default:
          return 0
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
  }, [transactions, sortBy, sortOrder])


  const getAmountColor = (transaction: Transaction) => {
    return transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'cleared':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const SortButton = ({ 
    column, 
    children, 
    className: buttonClassName 
  }: { 
    column: 'date' | 'amount' | 'merchant' | 'category'
    children: React.ReactNode
    className?: string
  }) => {
    const isActive = sortBy === column
    const isAsc = isActive && sortOrder === 'asc'
    const isDesc = isActive && sortOrder === 'desc'

    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onSort(column)}
        className={cn(
          "h-auto p-0 font-semibold hover:bg-transparent",
          buttonClassName
        )}
        aria-sort={isActive ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
      >
        <span className="flex items-center gap-1">
          {children}
          <div className="flex flex-col">
            <ChevronUp 
              className={cn(
                "h-3 w-3 transition-colors",
                isAsc ? "text-primary" : "text-muted-foreground/50"
              )} 
            />
            <ChevronDown 
              className={cn(
                "h-3 w-3 -mt-1 transition-colors",
                isDesc ? "text-primary" : "text-muted-foreground/50"
              )} 
            />
          </div>
        </span>
      </Button>
    )
  }

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <TableRow className="border-b">
              <TableHead className="w-[200px]">
                <SortButton column="merchant">
                  <Building2 className="h-4 w-4 mr-1" />
                  Merchant
                </SortButton>
              </TableHead>
              <TableHead className="w-[150px]">
                <SortButton column="category">
                  <Tag className="h-4 w-4 mr-1" />
                  Category
                </SortButton>
              </TableHead>
              <TableHead className="w-[120px]">
                <SortButton column="date">
                  <Calendar className="h-4 w-4 mr-1" />
                  Date
                </SortButton>
              </TableHead>
              <TableHead className="w-[120px] text-right">
                <SortButton column="amount">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Amount
                </SortButton>
              </TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="w-[60px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {sortedTransactions.map((transaction, index) => {
                const isSelected = selectedTransactionId === transaction.id
                
                return (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    className={cn(
                      "border-b transition-all duration-200 cursor-pointer group",
                      "hover:bg-muted/50 focus-within:bg-muted/50",
                      isSelected && "bg-primary/5 border-primary/20",
                      density === 'compact' ? "h-12" : "h-16"
                    )}
                    onClick={() => onRowClick(transaction)}
                    // onMouseEnter={() => setHoveredRowId(transaction.id)}
                    // onMouseLeave={() => setHoveredRowId(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onRowClick(transaction)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${transaction.merchant || transaction.description}`}
                  >
                    {/* Merchant */}
                    <TableCell className={cn(
                      "font-medium",
                      density === 'compact' ? "py-2" : "py-4"
                    )}>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <p 
                            className="truncate-safe break-words font-medium text-foreground"
                            title={transaction.merchant || transaction.description}
                          >
                            {transaction.merchant || transaction.description}
                          </p>
                          {transaction.merchant && (
                            <p 
                              className="text-xs text-muted-foreground truncate-safe break-words"
                              title={transaction.description}
                            >
                              {transaction.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </TableCell>

                    {/* Category */}
                    <TableCell className={cn(
                      density === 'compact' ? "py-2" : "py-4"
                    )}>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-xs font-medium",
                          CATEGORY_COLORS[transaction.category]
                        )}
                      >
                        {CATEGORY_LABELS[transaction.category]}
                      </Badge>
                    </TableCell>

                    {/* Date */}
                    <TableCell className={cn(
                      "text-muted-foreground",
                      density === 'compact' ? "py-2" : "py-4"
                    )}>
                      <div className="text-sm">
                        {new Date(transaction.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </TableCell>

                    {/* Amount */}
                    <TableCell className={cn(
                      "text-right",
                      density === 'compact' ? "py-2" : "py-4"
                    )}>
                      <Money
                        amount={transaction.amount.amount}
                        currency={transaction.amount.currency}
                        className={cn(
                          "font-semibold",
                          getAmountColor(transaction)
                        )}
                      />
                    </TableCell>

                    {/* Status */}
                    <TableCell className={cn(
                      density === 'compact' ? "py-2" : "py-4"
                    )}>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-xs font-medium",
                          getStatusColor(transaction.status)
                        )}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className={cn(
                      "text-right",
                      density === 'compact' ? "py-2" : "py-4"
                    )}>
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            onRowClick(transaction)
                          }}
                          aria-label="View details"
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            // TODO: Implement edit functionality
                            console.log('Edit transaction:', transaction.id)
                          }}
                          aria-label="Edit transaction"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                )
              })}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>

      {sortedTransactions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No transactions found</p>
            <p className="text-sm">Try adjusting your filters or add a new transaction</p>
          </div>
        </div>
      )}
    </div>
  )
}
