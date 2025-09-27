/**
 * Core financial data types for the Financify application
 * These types define the data contracts used throughout the application
 */

// Base financial entity
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

// Currency and monetary values
export interface Money {
  amount: number
  currency: string
}

export interface Currency {
  code: string
  name: string
  symbol: string
  decimals: number
}

// User and authentication
export interface User extends BaseEntity {
  email: string
  firstName: string
  lastName: string
  avatar?: string
  preferences: UserPreferences
}

export interface UserPreferences {
  currency: string
  locale: string
  theme: 'light' | 'dark' | 'system'
  notifications: NotificationSettings
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
}

// Account types
export interface Account extends BaseEntity {
  name: string
  type: AccountType
  balance: Money
  currency: string
  isActive: boolean
  metadata?: Record<string, any>
}

export type AccountType = 
  | 'checking'
  | 'savings'
  | 'credit'
  | 'investment'
  | 'loan'
  | 'mortgage'
  | 'crypto'
  | 'other'

// Transaction types
export interface Transaction extends BaseEntity {
  accountId: string
  amount: Money
  description: string
  category: Category
  subcategory?: string
  tags: string[]
  date: Date
  type: TransactionType
  status: TransactionStatus
  metadata?: Record<string, any>
}

export type TransactionType = 'income' | 'expense' | 'transfer'
export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'cancelled'

// Category system
export interface Category extends BaseEntity {
  name: string
  type: TransactionType
  color: string
  icon: string
  parentId?: string
  isActive: boolean
  subcategories: Category[]
}

// Budget and planning
export interface Budget extends BaseEntity {
  name: string
  period: BudgetPeriod
  startDate: Date
  endDate: Date
  categories: BudgetCategory[]
  totalAmount: Money
  spentAmount: Money
  isActive: boolean
}

export interface BudgetCategory {
  categoryId: string
  budgetedAmount: Money
  spentAmount: Money
  limit?: Money
}

export type BudgetPeriod = 'weekly' | 'monthly' | 'quarterly' | 'yearly'

// Investment types
export interface Investment extends BaseEntity {
  symbol: string
  name: string
  type: InvestmentType
  quantity: number
  averagePrice: Money
  currentPrice: Money
  totalValue: Money
  gainLoss: Money
  gainLossPercentage: number
  accountId: string
}

export type InvestmentType = 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'commodity'

// Goal types
export interface Goal extends BaseEntity {
  name: string
  description?: string
  targetAmount: Money
  currentAmount: Money
  targetDate: Date
  type: GoalType
  isActive: boolean
  progress: number
}

export type GoalType = 'savings' | 'debt_payoff' | 'investment' | 'purchase' | 'emergency_fund'

// Report and analytics
export interface Report extends BaseEntity {
  name: string
  type: ReportType
  period: ReportPeriod
  data: ReportData
  generatedAt: Date
}

export type ReportType = 'income_expense' | 'net_worth' | 'cash_flow' | 'investment_performance'
export type ReportPeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly'

export interface ReportData {
  summary: ReportSummary
  charts: ChartData[]
  tables: TableData[]
}

export interface ReportSummary {
  totalIncome: Money
  totalExpenses: Money
  netIncome: Money
  savingsRate: number
  topCategories: CategorySummary[]
}

export interface CategorySummary {
  categoryId: string
  name: string
  amount: Money
  percentage: number
  transactionCount: number
}

export interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'area'
  title: string
  data: any[]
  xAxis?: string
  yAxis?: string
}

export interface TableData {
  title: string
  columns: string[]
  rows: any[][]
}

// API response types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  errors?: string[]
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'date'
  required: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
  validation?: ValidationRule[]
}

export interface ValidationRule {
  type: 'required' | 'email' | 'min' | 'max' | 'pattern'
  value?: any
  message: string
}

// UI component types
export interface TableColumn<T> {
  key: keyof T
  title: string
  sortable?: boolean
  render?: (value: any, item: T) => React.ReactNode
}

export interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  onSort?: (key: keyof T, direction: 'asc' | 'desc') => void
  onRowClick?: (item: T) => void
}

// Chart types
export interface ChartProps {
  data: any[]
  width?: number
  height?: number
  responsive?: boolean
  className?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: string
  badge?: string | number
  children?: NavItem[]
}

// Theme types
export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    border: string
  }
  fonts: {
    sans: string
    mono: string
    display: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: Date
}

// Loading states
export interface LoadingState {
  isLoading: boolean
  error?: AppError
  data?: any
}

// Filter and search types
export interface Filter {
  field: string
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'contains'
  value: any
}

export interface Sort {
  field: string
  direction: 'asc' | 'desc'
}

export interface SearchParams {
  query?: string
  filters?: Filter[]
  sort?: Sort[]
  page?: number
  limit?: number
}
