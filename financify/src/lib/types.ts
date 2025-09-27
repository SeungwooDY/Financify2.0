import { z } from "zod"

// ============================================================================
// CORE TYPES
// ============================================================================

/**
 * Budget category for tracking spending limits
 */
export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar?: string
  preferences: {
    currency: string
    dateFormat: string
    timezone: string
    notifications: {
      email: boolean
      push: boolean
      sms: boolean
    }
  }
  createdAt: string
  updatedAt: string
}

export interface BudgetCategory {
  categoryId: string
  category: TransactionCategory
  budgetedAmount: Currency
  spentAmount: Currency
  percentage: number
}

// Schema will be defined later after TransactionCategorySchema and CurrencySchema

/**
 * Budget for a specific period
 */
export interface Budget {
  id: string
  name: string
  period: "weekly" | "monthly" | "quarterly" | "yearly"
  startDate: string
  endDate: string
  totalAmount: Currency
  spentAmount: Currency
  categories: BudgetCategory[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

// Schema will be defined later after CurrencySchema and BudgetCategorySchema

/**
 * Currency representation with precision handling
 * All amounts stored in cents to avoid floating point errors
 */
export interface Currency {
  amount: number // Amount in cents
  currency: string // ISO 4217 currency code (e.g., "USD", "EUR")
  symbol: string // Display symbol (e.g., "$", "€")
}

export const CurrencySchema = z.object({
  amount: z.number().int().min(0),
  currency: z.string().length(3),
  symbol: z.string().max(3)
})

// Schema will be defined later after TransactionCategorySchema

// Schema will be defined later after BudgetCategorySchema

/**
 * Transaction categories for student finance tracking
 */
export type TransactionCategory = 
  | "tuition" | "books" | "housing" | "food" | "transportation" 
  | "entertainment" | "healthcare" | "utilities" | "shopping" 
  | "income" | "refund" | "other"

export const TransactionCategorySchema = z.enum([
  "tuition", "books", "housing", "food", "transportation",
  "entertainment", "healthcare", "utilities", "shopping",
  "income", "refund", "other"
])

export const BudgetCategorySchema = z.object({
  categoryId: z.string().uuid(),
  category: TransactionCategorySchema,
  budgetedAmount: CurrencySchema,
  spentAmount: CurrencySchema,
  percentage: z.number().min(0).max(100)
})

export const BudgetSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  period: z.enum(["weekly", "monthly", "quarterly", "yearly"]),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  totalAmount: CurrencySchema,
  spentAmount: CurrencySchema,
  categories: z.array(BudgetCategorySchema),
  isActive: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
})

/**
 * Transaction types
 */
export type TransactionType = "income" | "expense" | "transfer"

export const TransactionTypeSchema = z.enum(["income", "expense", "transfer"])

/**
 * Transaction status for pending/cleared states
 */
export type TransactionStatus = "pending" | "cleared" | "cancelled"

export const TransactionStatusSchema = z.enum(["pending", "cleared", "cancelled"])

/**
 * Payment methods
 */
export type PaymentMethod = 
  | "debit_card" | "credit_card" | "bank_transfer" | "cash" 
  | "check" | "mobile_payment" | "crypto" | "other"

export const PaymentMethodSchema = z.enum([
  "debit_card", "credit_card", "bank_transfer", "cash",
  "check", "mobile_payment", "crypto", "other"
])

// ============================================================================
// TRANSACTION TYPES
// ============================================================================

/**
 * Core transaction interface
 */
export interface Transaction {
  id: string
  date: string // ISO 8601 date string
  description: string
  amount: Currency
  category: TransactionCategory
  type: TransactionType
  status: TransactionStatus
  paymentMethod: PaymentMethod
  accountId: string
  merchant?: string
  location?: {
    name: string
    address?: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  tags: string[]
  notes?: string
  metadata: Record<string, unknown>
  createdAt: string
  updatedAt: string
}

export const TransactionSchema = z.object({
  id: z.string().uuid(),
  date: z.string().datetime(),
  description: z.string().min(1).max(255),
  amount: CurrencySchema,
  category: TransactionCategorySchema,
  type: TransactionTypeSchema,
  status: TransactionStatusSchema,
  paymentMethod: PaymentMethodSchema,
  accountId: z.string().uuid(),
  merchant: z.string().optional(),
  location: z.object({
    name: z.string(),
    address: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }).optional(),
  tags: z.array(z.string()),
  notes: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
})

// ============================================================================
// MONTHLY METRICS TYPES
// ============================================================================

/**
 * Monthly financial metrics and analytics
 */
export interface MonthMetrics {
  month: string // YYYY-MM format
  totalIncome: Currency
  totalExpenses: Currency
  netIncome: Currency
  savingsRate: number // Percentage (0-100)
  
  // Category breakdowns
  categoryBreakdown: {
    category: TransactionCategory
    amount: Currency
    percentage: number
    transactionCount: number
  }[]
  
  // Spending patterns
  spendingPatterns: {
    averageDailySpending: Currency
    highestSpendingDay: {
      date: string
      amount: Currency
    }
    mostFrequentCategory: TransactionCategory
    mostExpensiveCategory: TransactionCategory
  }
  
  // Budget vs actual
  budgetComparison: {
    category: TransactionCategory
    budgeted: Currency
    actual: Currency
    variance: Currency
    variancePercentage: number
  }[]
  
  // Trends
  trends: {
    weekOverWeek: {
      incomeChange: number // Percentage change
      expenseChange: number
    }
    monthOverMonth: {
      incomeChange: number
      expenseChange: number
    }
  }
  
  // Alerts and insights
  alerts: {
    type: "overspend" | "underspend" | "unusual" | "goal_met" | "goal_missed"
    category: TransactionCategory
    message: string
    severity: "low" | "medium" | "high"
  }[]
  
  generatedAt: string
}

export const MonthMetricsSchema = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/),
  totalIncome: CurrencySchema,
  totalExpenses: CurrencySchema,
  netIncome: CurrencySchema,
  savingsRate: z.number().min(0).max(100),
  categoryBreakdown: z.array(z.object({
    category: TransactionCategorySchema,
    amount: CurrencySchema,
    percentage: z.number().min(0).max(100),
    transactionCount: z.number().int().min(0)
  })),
  spendingPatterns: z.object({
    averageDailySpending: CurrencySchema,
    highestSpendingDay: z.object({
      date: z.string(),
      amount: CurrencySchema
    }),
    mostFrequentCategory: TransactionCategorySchema,
    mostExpensiveCategory: TransactionCategorySchema
  }),
  budgetComparison: z.array(z.object({
    category: TransactionCategorySchema,
    budgeted: CurrencySchema,
    actual: CurrencySchema,
    variance: CurrencySchema,
    variancePercentage: z.number()
  })),
  trends: z.object({
    weekOverWeek: z.object({
      incomeChange: z.number(),
      expenseChange: z.number()
    }),
    monthOverMonth: z.object({
      incomeChange: z.number(),
      expenseChange: z.number()
    })
  }),
  alerts: z.array(z.object({
    type: z.enum(["overspend", "underspend", "unusual", "goal_met", "goal_missed"]),
    category: TransactionCategorySchema,
    message: z.string(),
    severity: z.enum(["low", "medium", "high"])
  })),
  generatedAt: z.string().datetime()
})

// ============================================================================
// COPILOT ADVICE TYPES
// ============================================================================

/**
 * AI Copilot advice and recommendations
 */
export interface CopilotAdvice {
  id: string
  mode: "general" | "budget" | "savings" | "spending" | "debt" | "investment"
  title: string
  message: string
  priority: "low" | "medium" | "high" | "urgent"
  category: TransactionCategory | "general"
  
  // Actionable recommendations
  recommendations: {
    id: string
    title: string
    description: string
    actionType: "reduce_spending" | "increase_income" | "optimize_budget" | "save_more" | "pay_debt"
    estimatedImpact: Currency
    difficulty: "easy" | "medium" | "hard"
    timeframe: "immediate" | "short_term" | "long_term"
  }[]
  
  // Supporting data
  insights: {
    metric: string
    value: string
    trend: "up" | "down" | "stable"
    significance: "low" | "medium" | "high"
  }[]
  
  // Context
  context: {
    month: string
    relevantTransactions: string[] // Transaction IDs
    userProfile: {
      studentType: "undergraduate" | "graduate" | "phd" | "professional"
      incomeLevel: "low" | "medium" | "high"
      spendingStyle: "conservative" | "moderate" | "aggressive"
    }
  }
  
  generatedAt: string
  expiresAt: string
}

export const CopilotAdviceSchema = z.object({
  id: z.string().uuid(),
  mode: z.enum(["general", "budget", "savings", "spending", "debt", "investment"]),
  title: z.string().min(1).max(100),
  message: z.string().min(1).max(1000),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  category: z.union([TransactionCategorySchema, z.literal("general")]),
  recommendations: z.array(z.object({
    id: z.string().uuid(),
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(500),
    actionType: z.enum(["reduce_spending", "increase_income", "optimize_budget", "save_more", "pay_debt"]),
    estimatedImpact: CurrencySchema,
    difficulty: z.enum(["easy", "medium", "hard"]),
    timeframe: z.enum(["immediate", "short_term", "long_term"])
  })),
  insights: z.array(z.object({
    metric: z.string(),
    value: z.string(),
    trend: z.enum(["up", "down", "stable"]),
    significance: z.enum(["low", "medium", "high"])
  })),
  context: z.object({
    month: z.string().regex(/^\d{4}-\d{2}$/),
    relevantTransactions: z.array(z.string().uuid()),
    userProfile: z.object({
      studentType: z.enum(["undergraduate", "graduate", "phd", "professional"]),
      incomeLevel: z.enum(["low", "medium", "high"]),
      spendingStyle: z.enum(["conservative", "moderate", "aggressive"])
    })
  }),
  generatedAt: z.string().datetime(),
  expiresAt: z.string().datetime()
})

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean
  data: T | null
  error: ApiError | null
  metadata?: {
    total?: number
    page?: number
    limit?: number
    hasMore?: boolean
  }
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
  timestamp: string
}

export const ApiResponseSchema = <T extends z.ZodType>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.nullable(),
    error: z.object({
      code: z.string(),
      message: z.string(),
      details: z.record(z.string(), z.unknown()).optional(),
      timestamp: z.string().datetime()
    }).nullable(),
    metadata: z.object({
      total: z.number().int().min(0).optional(),
      page: z.number().int().min(1).optional(),
      limit: z.number().int().min(1).optional(),
      hasMore: z.boolean().optional()
    }).optional()
  })

// ============================================================================
// QUERY PARAMETER TYPES
// ============================================================================

/**
 * Transaction query parameters
 */
export interface TransactionQueryParams {
  month?: string // YYYY-MM format
  category?: TransactionCategory
  type?: TransactionType
  status?: TransactionStatus
  minAmount?: number // In cents
  maxAmount?: number // In cents
  search?: string
  tags?: string[]
  page?: number
  limit?: number
  sortBy?: "date" | "amount" | "description"
  sortOrder?: "asc" | "desc"
}

export const TransactionQueryParamsSchema = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/).optional(),
  category: TransactionCategorySchema.optional(),
  type: TransactionTypeSchema.optional(),
  status: TransactionStatusSchema.optional(),
  minAmount: z.number().int().min(0).optional(),
  maxAmount: z.number().int().min(0).optional(),
  search: z.string().optional(),
  tags: z.array(z.string()).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).max(100).optional(),
  sortBy: z.enum(["date", "amount", "description"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional()
})

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Currency formatting options
 */
export interface CurrencyFormatOptions {
  showSymbol?: boolean
  showCents?: boolean
  locale?: string
  compact?: boolean
}

/**
 * Date range for queries
 */
export interface DateRange {
  start: string // ISO 8601 date
  end: string // ISO 8601 date
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

export const isTransaction = (obj: unknown): obj is Transaction => {
  return TransactionSchema.safeParse(obj).success
}

export const isMonthMetrics = (obj: unknown): obj is MonthMetrics => {
  return MonthMetricsSchema.safeParse(obj).success
}

export const isCopilotAdvice = (obj: unknown): obj is CopilotAdvice => {
  return CopilotAdviceSchema.safeParse(obj).success
}

// ============================================================================
// CONSTANTS
// ============================================================================

export const TRANSACTION_CATEGORIES: TransactionCategory[] = [
  "tuition", "books", "housing", "food", "transportation",
  "entertainment", "healthcare", "utilities", "shopping",
  "income", "refund", "other"
]

export const PAYMENT_METHODS: PaymentMethod[] = [
  "debit_card", "credit_card", "bank_transfer", "cash",
  "check", "mobile_payment", "crypto", "other"
]

export const DEFAULT_CURRENCY: Currency = {
  amount: 0,
  currency: "USD",
  symbol: "$"
}

export const DEFAULT_PAGE_SIZE = 20
export const MAX_PAGE_SIZE = 100