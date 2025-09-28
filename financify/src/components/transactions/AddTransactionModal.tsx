"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Transaction, TransactionCategory } from "@/lib/types"
import { Plus } from "lucide-react"

interface AddTransactionModalProps {
  onAddTransaction: (transaction: Partial<Transaction>) => void
  className?: string
}

const CATEGORIES: TransactionCategory[] = [
  'food',
  'transportation',
  'shopping',
  'entertainment',
  'books',
  'healthcare',
  'utilities',
  'other'
]

export function AddTransactionModal({ onAddTransaction, className }: AddTransactionModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'other' as TransactionCategory,
    merchant: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.description || !formData.amount) {
      return
    }

    const transaction = {
      description: formData.description,
      amount: {
        amount: parseFloat(formData.amount),
        currency: 'USD',
        symbol: '$'
      },
      category: formData.category,
      merchant: formData.merchant || undefined,
      date: formData.date,
      notes: formData.notes || undefined,
      type: 'expense' as const,
      status: 'cleared' as const
    }

    onAddTransaction(transaction)
    
    // Reset form
    setFormData({
      description: '',
      amount: '',
      category: 'other',
      merchant: '',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    })
    
    setIsOpen(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className}>
          <Plus className="h-4 w-4 mr-1" />
          Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Transaction</DialogTitle>
          <DialogDescription>
            Enter the details for your new transaction.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description *
            </label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="e.g., Coffee at Starbucks"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount *
              </label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="0.00"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="merchant" className="text-sm font-medium">
              Merchant
            </label>
            <Input
              id="merchant"
              value={formData.merchant}
              onChange={(e) => handleInputChange('merchant', e.target.value)}
              placeholder="e.g., Starbucks"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category === 'food' ? 'Food & Dining' :
                   category === 'transportation' ? 'Transportation' :
                   category === 'shopping' ? 'Shopping' :
                   category === 'entertainment' ? 'Entertainment' :
                   category === 'books' ? 'Books & Education' :
                   category === 'healthcare' ? 'Healthcare' :
                   category === 'utilities' ? 'Utilities' :
                   category === 'other' ? 'Other' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium">
              Notes
            </label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Optional notes..."
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Add Transaction
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
