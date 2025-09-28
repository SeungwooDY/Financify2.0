"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/Card"
import { 
  Calendar,
  Building2,
  Tag,
  X,
  Filter,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import { TransactionCategory } from "@/lib/types"
import { cn } from "@/lib/utils"

interface TransactionFiltersProps {
  categories: TransactionCategory[]
  selectedCategories: TransactionCategory[]
  onCategoryToggle: (category: TransactionCategory) => void
  merchantSearch: string
  onMerchantSearchChange: (value: string) => void
  dateFrom: string
  onDateFromChange: (value: string) => void
  dateTo: string
  onDateToChange: (value: string) => void
  onClearAll: () => void
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
  tuition: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
  books: "bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200",
  housing: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
  food: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
  transportation: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
  entertainment: "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
  healthcare: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
  utilities: "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
  shopping: "bg-cyan-100 text-cyan-800 border-cyan-200 hover:bg-cyan-200",
  income: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
  refund: "bg-teal-100 text-teal-800 border-teal-200 hover:bg-teal-200",
  other: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
}

export function TransactionFilters({
  categories,
  selectedCategories,
  onCategoryToggle,
  merchantSearch,
  onMerchantSearchChange,
  dateFrom,
  onDateFromChange,
  dateTo,
  onDateToChange,
  onClearAll,
  className
}: TransactionFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showDateRange, setShowDateRange] = useState(false)

  const hasActiveFilters = selectedCategories.length > 0 || merchantSearch || dateFrom || dateTo

  const handleCategoryToggle = (category: TransactionCategory) => {
    onCategoryToggle(category)
  }

  const handleClearAll = () => {
    onClearAll()
    setIsExpanded(false)
    setShowDateRange(false)
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Filters</span>
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-2">
                  {selectedCategories.length + (merchantSearch ? 1 : 0) + (dateFrom || dateTo ? 1 : 0)}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearAll}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3 mr-1" />
                  Clear All
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Merchant Search */}
            <div className="relative flex-1 min-w-[200px] max-w-[400px]">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search merchants..."
                value={merchantSearch}
                onChange={(e) => onMerchantSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Date Range Toggle */}
            <Button
              variant={showDateRange ? "default" : "outline"}
              size="sm"
              onClick={() => setShowDateRange(!showDateRange)}
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Category Chips */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Categories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const isSelected = selectedCategories.includes(category)
                      return (
                        <Button
                          key={category}
                          variant="outline"
                          size="sm"
                          onClick={() => handleCategoryToggle(category)}
                          className={cn(
                            "transition-all duration-200",
                            isSelected
                              ? CATEGORY_COLORS[category]
                              : "hover:bg-muted"
                          )}
                        >
                          {CATEGORY_LABELS[category]}
                          {isSelected && (
                            <X className="h-3 w-3 ml-1" />
                          )}
                        </Button>
                      )
                    })}
                  </div>
                </div>

                {/* Date Range */}
                <AnimatePresence>
                  {showDateRange && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Date Range</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">
                            From
                          </label>
                          <Input
                            type="date"
                            value={dateFrom}
                            onChange={(e) => onDateFromChange(e.target.value)}
                            className="text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">
                            To
                          </label>
                          <Input
                            type="date"
                            value={dateTo}
                            onChange={(e) => onDateToChange(e.target.value)}
                            className="text-sm"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 pt-2 border-t">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              {selectedCategories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="text-xs"
                >
                  {CATEGORY_LABELS[category]}
                  <button
                    onClick={() => handleCategoryToggle(category)}
                    className="ml-1 hover:text-destructive"
                    aria-label={`Remove ${CATEGORY_LABELS[category]} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {merchantSearch && (
                <Badge variant="secondary" className="text-xs">
                  Merchant: {merchantSearch}
                  <button
                    onClick={() => onMerchantSearchChange("")}
                    className="ml-1 hover:text-destructive"
                    aria-label="Remove merchant filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {(dateFrom || dateTo) && (
                <Badge variant="secondary" className="text-xs">
                  Date: {dateFrom || "Start"} - {dateTo || "End"}
                  <button
                    onClick={() => {
                      onDateFromChange("")
                      onDateToChange("")
                    }}
                    className="ml-1 hover:text-destructive"
                    aria-label="Remove date filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
