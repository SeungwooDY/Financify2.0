"use client"

import React from "react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { 
  Download,
  Upload,
  Settings,
  Grid3X3,
  List
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AddTransactionModal } from "./AddTransactionModal"
import { Transaction } from "@/lib/types"

interface TransactionToolbarProps {
  totalCount: number
  filteredCount: number
  density: 'comfortable' | 'compact'
  onDensityChange: (density: 'comfortable' | 'compact') => void
  onAddTransaction: (transaction: Partial<Transaction>) => void
  onImportTransactions: () => void
  onExportTransactions: () => void
  onSettings: () => void
  className?: string
}

export function TransactionToolbar({
  totalCount,
  filteredCount,
  density,
  onDensityChange,
  onAddTransaction,
  onImportTransactions,
  onExportTransactions,
  onSettings,
  className
}: TransactionToolbarProps) {
  const isFiltered = filteredCount !== totalCount

  return (
    <div className={cn(
      "flex items-center justify-between py-4",
      className
    )}>
      {/* Left side - Count and info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Transactions</h2>
          {isFiltered ? (
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {filteredCount} of {totalCount}
              </Badge>
              <span className="text-sm text-muted-foreground">
                transactions shown
              </span>
            </div>
          ) : (
            <Badge variant="outline">
              {totalCount} transactions
            </Badge>
          )}
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        {/* Density Toggle */}
        <div className="flex items-center border rounded-md">
          <Button
            variant={density === 'comfortable' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onDensityChange('comfortable')}
            className="rounded-r-none border-r"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={density === 'compact' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onDensityChange('compact')}
            className="rounded-l-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Import/Export */}
        <Button
          variant="outline"
          size="sm"
          onClick={onImportTransactions}
          className="hidden sm:flex"
        >
          <Upload className="h-4 w-4 mr-1" />
          Import
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onExportTransactions}
          className="hidden sm:flex"
        >
          <Download className="h-4 w-4 mr-1" />
          Export
        </Button>

        {/* Settings */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onSettings}
          className="hidden sm:flex"
        >
          <Settings className="h-4 w-4" />
        </Button>

        {/* Add Transaction */}
        <AddTransactionModal onAddTransaction={onAddTransaction} />
      </div>
    </div>
  )
}
