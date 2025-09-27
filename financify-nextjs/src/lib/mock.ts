import { 
  Transaction, 
  MonthMetrics, 
  CopilotAdvice, 
  TransactionCategory,
  TransactionType,
  PaymentMethod,
  TransactionQueryParams
} from "./types"

// ============================================================================
// MOCK DATA GENERATORS
// ============================================================================

/**
 * Generate realistic student transactions for a given month
 * Simulates typical student spending patterns and income sources
 */
export function generateStudentTransactions(month: string): Transaction[] {
  const [year, monthNum] = month.split('-').map(Number)
  const endDate = new Date(year, monthNum, 0)
  const daysInMonth = endDate.getDate()
  
  const transactions: Transaction[] = []
  let transactionId = 1
  
  // Helper to create a transaction
  const createTransaction = (
    date: Date,
    description: string,
    amountCents: number,
    category: TransactionCategory,
    type: TransactionType,
    paymentMethod: PaymentMethod,
    merchant?: string,
    tags: string[] = []
  ): Transaction => ({
    id: `txn_${transactionId++}`,
    date: date.toISOString(),
    description,
    amount: { amount: amountCents, currency: "USD", symbol: "$" },
    category,
    type,
    status: Math.random() > 0.1 ? "cleared" : "pending",
    paymentMethod,
    accountId: "acc_student_checking",
    merchant,
    location: Math.random() > 0.7 ? {
      name: merchant || "Unknown Location",
      address: "123 University Ave, College Town, ST 12345"
    } : undefined,
    tags,
    notes: Math.random() > 0.8 ? "Student transaction" : undefined,
    metadata: {
      source: "mock_data",
      generated: true
    },
    createdAt: date.toISOString(),
    updatedAt: date.toISOString()
  })
  
  // Generate transactions for each day
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, monthNum - 1, day)
    const dayOfWeek = currentDate.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    
    // Income transactions (bi-weekly paychecks, occasional refunds)
    if (day === 1 || day === 15) {
      // Bi-weekly paycheck from part-time job
      transactions.push(createTransaction(
        currentDate,
        "Part-time job paycheck",
        120000, // $1,200
        "income",
        "income",
        "bank_transfer",
        "Campus Dining Services"
      ))
    }
    
    if (day === 3 && Math.random() > 0.7) {
      // Occasional refund
      transactions.push(createTransaction(
        currentDate,
        "Textbook refund",
        Math.floor(Math.random() * 50000) + 20000, // $200-700
        "refund",
        "income",
        "bank_transfer",
        "University Bookstore"
      ))
    }
    
    // Daily expenses
    const dailyExpenseCount = isWeekend ? 
      Math.floor(Math.random() * 3) + 1 : // 1-3 on weekends
      Math.floor(Math.random() * 2) + 1   // 1-2 on weekdays
    
    for (let i = 0; i < dailyExpenseCount; i++) {
      const expenseTypes = getDailyExpenses(day, isWeekend)
      const expense = expenseTypes[Math.floor(Math.random() * expenseTypes.length)]
      
      transactions.push(createTransaction(
        currentDate,
        expense.description,
        expense.amount,
        expense.category,
        "expense",
        expense.paymentMethod,
        expense.merchant,
        expense.tags
      ))
    }
    
    // Weekly recurring expenses
    if (day % 7 === 0) {
      // Weekly grocery shopping
      transactions.push(createTransaction(
        currentDate,
        "Weekly grocery shopping",
        Math.floor(Math.random() * 8000) + 4000, // $40-120
        "food",
        "expense",
        "debit_card",
        "Campus Market",
        ["groceries", "weekly"]
      ))
    }
    
    // Monthly recurring expenses
    if (day === 1) {
      // Rent
      transactions.push(createTransaction(
        currentDate,
        "Monthly rent",
        120000, // $1,200
        "housing",
        "expense",
        "bank_transfer",
        "University Housing",
        ["rent", "monthly"]
      ))
      
      // Utilities
      transactions.push(createTransaction(
        currentDate,
        "Utilities",
        Math.floor(Math.random() * 3000) + 2000, // $20-50
        "utilities",
        "expense",
        "debit_card",
        "Campus Utilities",
        ["utilities", "monthly"]
      ))
    }
    
    if (day === 5) {
      // Tuition payment (if applicable)
      if (Math.random() > 0.3) {
        transactions.push(createTransaction(
          currentDate,
          "Tuition payment",
          Math.floor(Math.random() * 200000) + 300000, // $3,000-5,000
          "tuition",
          "expense",
          "bank_transfer",
          "University Bursar",
          ["tuition", "education"]
        ))
      }
    }
  }
  
  return transactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

/**
 * Get daily expense patterns based on day and weekend status
 */
function getDailyExpenses(day: number, isWeekend: boolean): Array<{
  description: string
  amount: number
  category: TransactionCategory
  paymentMethod: PaymentMethod
  merchant?: string
  tags: string[]
}> {
  const baseExpenses = [
    // Food expenses
    {
      description: "Coffee",
      amount: Math.floor(Math.random() * 300) + 200, // $2-5
      category: "food" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Coffee Shop",
      tags: ["coffee", "daily"]
    },
    {
      description: "Lunch",
      amount: Math.floor(Math.random() * 800) + 500, // $5-13
      category: "food" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Dining Hall",
      tags: ["lunch", "daily"]
    },
    {
      description: "Dinner",
      amount: Math.floor(Math.random() * 1000) + 800, // $8-18
      category: "food" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Dining Hall",
      tags: ["dinner", "daily"]
    },
    {
      description: "Snacks",
      amount: Math.floor(Math.random() * 400) + 200, // $2-6
      category: "food" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Store",
      tags: ["snacks", "daily"]
    },
    
    // Transportation
    {
      description: "Bus fare",
      amount: 250, // $2.50
      category: "transportation" as TransactionCategory,
      paymentMethod: "mobile_payment" as PaymentMethod,
      merchant: "City Transit",
      tags: ["transport", "daily"]
    },
    {
      description: "Uber ride",
      amount: Math.floor(Math.random() * 1500) + 800, // $8-23
      category: "transportation" as TransactionCategory,
      paymentMethod: "mobile_payment" as PaymentMethod,
      merchant: "Uber",
      tags: ["transport", "ride_share"]
    },
    
    // Entertainment
    {
      description: "Movie ticket",
      amount: Math.floor(Math.random() * 500) + 800, // $8-13
      category: "entertainment" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Theater",
      tags: ["entertainment", "movies"]
    },
    {
      description: "Streaming subscription",
      amount: 1500, // $15
      category: "entertainment" as TransactionCategory,
      paymentMethod: "credit_card" as PaymentMethod,
      merchant: "Netflix",
      tags: ["entertainment", "subscription"]
    },
    
    // Shopping
    {
      description: "Textbook",
      amount: Math.floor(Math.random() * 15000) + 5000, // $50-200
      category: "books" as TransactionCategory,
      paymentMethod: "credit_card" as PaymentMethod,
      merchant: "University Bookstore",
      tags: ["books", "education"]
    },
    {
      description: "School supplies",
      amount: Math.floor(Math.random() * 2000) + 500, // $5-25
      category: "shopping" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Store",
      tags: ["supplies", "education"]
    },
    {
      description: "Clothing",
      amount: Math.floor(Math.random() * 8000) + 2000, // $20-100
      category: "shopping" as TransactionCategory,
      paymentMethod: "credit_card" as PaymentMethod,
      merchant: "Campus Clothing Store",
      tags: ["clothing", "shopping"]
    },
    
    // Healthcare
    {
      description: "Prescription",
      amount: Math.floor(Math.random() * 3000) + 1000, // $10-40
      category: "healthcare" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Pharmacy",
      tags: ["healthcare", "prescription"]
    },
    {
      description: "Doctor visit",
      amount: Math.floor(Math.random() * 5000) + 2000, // $20-70
      category: "healthcare" as TransactionCategory,
      paymentMethod: "debit_card" as PaymentMethod,
      merchant: "Campus Health Center",
      tags: ["healthcare", "medical"]
    }
  ]
  
  if (isWeekend) {
    // Weekend-specific expenses
    baseExpenses.push(
      {
        description: "Weekend brunch",
        amount: Math.floor(Math.random() * 1200) + 800, // $8-20
        category: "food" as TransactionCategory,
        paymentMethod: "debit_card" as PaymentMethod,
        merchant: "Campus Brunch Spot",
        tags: ["food", "weekend", "brunch"]
      },
      {
        description: "Party supplies",
        amount: Math.floor(Math.random() * 3000) + 1000, // $10-40
        category: "entertainment" as TransactionCategory,
        paymentMethod: "debit_card" as PaymentMethod,
        merchant: "Campus Store",
        tags: ["entertainment", "party", "weekend"]
      }
    )
  }
  
  return baseExpenses
}

/**
 * Generate monthly metrics based on transactions
 */
export function generateMonthMetrics(month: string, transactions: Transaction[]): MonthMetrics {
  const incomeTransactions = transactions.filter(t => t.type === "income")
  const expenseTransactions = transactions.filter(t => t.type === "expense")
  
  const totalIncome = incomeTransactions.reduce((sum, t) => sum + t.amount.amount, 0)
  const totalExpenses = expenseTransactions.reduce((sum, t) => sum + t.amount.amount, 0)
  const netIncome = totalIncome - totalExpenses
  const savingsRate = totalIncome > 0 ? (netIncome / totalIncome) * 100 : 0
  
  // Category breakdown
  const categoryMap = new Map<TransactionCategory, { amount: number; count: number }>()
  expenseTransactions.forEach(t => {
    const existing = categoryMap.get(t.category) || { amount: 0, count: 0 }
    categoryMap.set(t.category, {
      amount: existing.amount + t.amount.amount,
      count: existing.count + 1
    })
  })
  
  const categoryBreakdown = Array.from(categoryMap.entries()).map(([category, data]) => ({
    category,
    amount: { amount: data.amount, currency: "USD", symbol: "$" },
    percentage: totalExpenses > 0 ? (data.amount / totalExpenses) * 100 : 0,
    transactionCount: data.count
  })).sort((a, b) => b.amount.amount - a.amount.amount)
  
  // Spending patterns
  const dailySpending = new Map<string, number>()
  expenseTransactions.forEach(t => {
    const date = t.date.split('T')[0]
    dailySpending.set(date, (dailySpending.get(date) || 0) + t.amount.amount)
  })
  
  const averageDailySpending = dailySpending.size > 0 ? 
    Array.from(dailySpending.values()).reduce((sum, amount) => sum + amount, 0) / dailySpending.size : 0
  
  const highestSpendingDay = Array.from(dailySpending.entries())
    .sort((a, b) => b[1] - a[1])[0] || ["", 0]
  
  const mostFrequentCategory = categoryBreakdown
    .sort((a, b) => b.transactionCount - a.transactionCount)[0]?.category || "other"
  
  const mostExpensiveCategory = categoryBreakdown[0]?.category || "other"
  
  // Generate alerts
  const alerts = []
  if (savingsRate < 10) {
    alerts.push({
      type: "goal_missed" as const,
      category: "general" as TransactionCategory,
      message: "Your savings rate is below 10%. Consider reducing discretionary spending.",
      severity: "medium" as const
    })
  }
  
  if (totalExpenses > totalIncome * 0.9) {
    alerts.push({
      type: "overspend" as const,
      category: "general" as TransactionCategory,
      message: "You're spending over 90% of your income. This leaves little room for savings.",
      severity: "high" as const
    })
  }
  
  const foodSpending = categoryBreakdown.find(c => c.category === "food")?.amount.amount || 0
  if (foodSpending > totalExpenses * 0.4) {
    alerts.push({
      type: "overspend" as const,
      category: "food" as TransactionCategory,
      message: "Food spending is over 40% of total expenses. Consider meal planning to reduce costs.",
      severity: "medium" as const
    })
  }
  
  return {
    month,
    totalIncome: { amount: totalIncome, currency: "USD", symbol: "$" },
    totalExpenses: { amount: totalExpenses, currency: "USD", symbol: "$" },
    netIncome: { amount: netIncome, currency: "USD", symbol: "$" },
    savingsRate,
    categoryBreakdown,
    spendingPatterns: {
      averageDailySpending: { amount: Math.round(averageDailySpending), currency: "USD", symbol: "$" },
      highestSpendingDay: {
        date: highestSpendingDay[0],
        amount: { amount: highestSpendingDay[1], currency: "USD", symbol: "$" }
      },
      mostFrequentCategory,
      mostExpensiveCategory
    },
    budgetComparison: [], // Would be populated with actual budget data
    trends: {
      weekOverWeek: {
        incomeChange: Math.random() * 20 - 10, // -10% to +10%
        expenseChange: Math.random() * 20 - 10
      },
      monthOverMonth: {
        incomeChange: Math.random() * 30 - 15, // -15% to +15%
        expenseChange: Math.random() * 30 - 15
      }
    },
    alerts,
    generatedAt: new Date().toISOString()
  }
}

/**
 * Generate AI copilot advice based on metrics and transactions
 */
export function generateCopilotAdvice(
  mode: "general" | "budget" | "savings" | "spending" | "debt" | "investment",
  month: string,
  metrics: MonthMetrics,
  transactions: Transaction[]
): CopilotAdvice {
  const adviceTemplates = {
    general: [
      {
        title: "Financial Health Check",
        message: "Your financial health looks good overall. Consider these small improvements to optimize your student budget.",
        priority: "medium" as const,
        recommendations: [
          {
            id: "rec_1",
            title: "Set up automatic savings",
            description: "Transfer $50-100 to savings each month automatically",
            actionType: "save_more" as const,
            estimatedImpact: { amount: 5000, currency: "USD", symbol: "$" },
            difficulty: "easy" as const,
            timeframe: "immediate" as const
          }
        ]
      }
    ],
    budget: [
      {
        title: "Budget Optimization",
        message: "Your current spending patterns show room for improvement. Here's how to optimize your budget.",
        priority: "high" as const,
        recommendations: [
          {
            id: "rec_2",
            title: "Reduce food spending",
            description: "Meal prep on Sundays to cut food costs by 30%",
            actionType: "reduce_spending" as const,
            estimatedImpact: { amount: 8000, currency: "USD", symbol: "$" },
            difficulty: "medium" as const,
            timeframe: "short_term" as const
          }
        ]
      }
    ],
    savings: [
      {
        title: "Boost Your Savings",
        message: "Your savings rate could be improved. Here are some strategies to save more money.",
        priority: "high" as const,
        recommendations: [
          {
            id: "rec_3",
            title: "Open a high-yield savings account",
            description: "Earn 4%+ interest on your emergency fund",
            actionType: "save_more" as const,
            estimatedImpact: { amount: 2000, currency: "USD", symbol: "$" },
            difficulty: "easy" as const,
            timeframe: "immediate" as const
          }
        ]
      }
    ],
    spending: [
      {
        title: "Smart Spending Tips",
        message: "You're spending more than necessary in some categories. Here's how to spend smarter.",
        priority: "medium" as const,
        recommendations: [
          {
            id: "rec_4",
            title: "Use student discounts",
            description: "Take advantage of student pricing for software, transportation, and entertainment",
            actionType: "reduce_spending" as const,
            estimatedImpact: { amount: 3000, currency: "USD", symbol: "$" },
            difficulty: "easy" as const,
            timeframe: "immediate" as const
          }
        ]
      }
    ],
    debt: [
      {
        title: "Debt Management",
        message: "If you have student loans or credit card debt, here's how to manage it effectively.",
        priority: "urgent" as const,
        recommendations: [
          {
            id: "rec_5",
            title: "Pay more than minimum",
            description: "Even $25 extra per month can save thousands in interest",
            actionType: "pay_debt" as const,
            estimatedImpact: { amount: 5000, currency: "USD", symbol: "$" },
            difficulty: "medium" as const,
            timeframe: "long_term" as const
          }
        ]
      }
    ],
    investment: [
      {
        title: "Start Investing Early",
        message: "Even small amounts invested now can grow significantly over time.",
        priority: "low" as const,
        recommendations: [
          {
            id: "rec_6",
            title: "Open a Roth IRA",
            description: "Start with $25/month in a low-cost index fund",
            actionType: "save_more" as const,
            estimatedImpact: { amount: 10000, currency: "USD", symbol: "$" },
            difficulty: "hard" as const,
            timeframe: "long_term" as const
          }
        ]
      }
    ]
  }
  
  const template = adviceTemplates[mode][0]
  const relevantTransactionIds = transactions
    .filter(t => t.type === "expense")
    .slice(0, 5)
    .map(t => t.id)
  
  return {
    id: `advice_${Date.now()}`,
    mode,
    title: template.title,
    message: template.message,
    priority: template.priority,
    category: "general",
    recommendations: template.recommendations,
    insights: [
      {
        metric: "Savings Rate",
        value: `${metrics.savingsRate.toFixed(1)}%`,
        trend: metrics.savingsRate > 20 ? "up" : "down",
        significance: "high"
      },
      {
        metric: "Monthly Expenses",
        value: `$${(metrics.totalExpenses.amount / 100).toFixed(0)}`,
        trend: "stable",
        significance: "medium"
      }
    ],
    context: {
      month,
      relevantTransactions: relevantTransactionIds,
      userProfile: {
        studentType: "undergraduate",
        incomeLevel: "medium",
        spendingStyle: "moderate"
      }
    },
    generatedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
  }
}

// ============================================================================
// MOCK DATA STORAGE
// ============================================================================

/**
 * In-memory storage for mock data
 * In production, this would be replaced with actual database calls
 */
class MockDataStore {
  private transactions: Map<string, Transaction[]> = new Map()
  private metrics: Map<string, MonthMetrics> = new Map()
  private advice: Map<string, CopilotAdvice[]> = new Map()
  
  constructor() {
    // Pre-generate data for current month and previous month
    const currentMonth = new Date().toISOString().slice(0, 7)
    const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 7)
    
    this.generateMonthData(currentMonth)
    this.generateMonthData(lastMonth)
  }
  
  private generateMonthData(month: string) {
    const transactions = generateStudentTransactions(month)
    const metrics = generateMonthMetrics(month, transactions)
    
    this.transactions.set(month, transactions)
    this.metrics.set(month, metrics)
  }
  
  getTransactions(month: string): Transaction[] {
    if (!this.transactions.has(month)) {
      this.generateMonthData(month)
    }
    return this.transactions.get(month) || []
  }
  
  getMetrics(month: string): MonthMetrics | null {
    if (!this.metrics.has(month)) {
      this.generateMonthData(month)
    }
    return this.metrics.get(month) || null
  }
  
  getAdvice(mode: string, month: string): CopilotAdvice[] {
    const key = `${mode}_${month}`
    if (!this.advice.has(key)) {
      const transactions = this.getTransactions(month)
      const metrics = this.getMetrics(month)
      if (metrics) {
        const advice = generateCopilotAdvice(
          mode as "general" | "budget" | "savings" | "spending" | "debt" | "investment",
          month,
          metrics,
          transactions
        )
        this.advice.set(key, [advice])
      }
    }
    return this.advice.get(key) || []
  }
}

// Global mock data store instance
export const mockDataStore = new MockDataStore()

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Filter transactions based on query parameters
 */
export function filterTransactions(
  transactions: Transaction[],
  params: TransactionQueryParams
): Transaction[] {
  let filtered = [...transactions]
  
  if (params.category) {
    filtered = filtered.filter(t => t.category === params.category)
  }
  
  if (params.type) {
    filtered = filtered.filter(t => t.type === params.type)
  }
  
  if (params.status) {
    filtered = filtered.filter(t => t.status === params.status)
  }
  
  if (params.minAmount !== undefined) {
    filtered = filtered.filter(t => t.amount.amount >= params.minAmount!)
  }
  
  if (params.maxAmount !== undefined) {
    filtered = filtered.filter(t => t.amount.amount <= params.maxAmount!)
  }
  
  if (params.search) {
    const searchLower = params.search.toLowerCase()
    filtered = filtered.filter(t => 
      t.description.toLowerCase().includes(searchLower) ||
      t.merchant?.toLowerCase().includes(searchLower) ||
      t.notes?.toLowerCase().includes(searchLower)
    )
  }
  
  if (params.tags && params.tags.length > 0) {
    filtered = filtered.filter(t => 
      params.tags!.some(tag => t.tags.includes(tag))
    )
  }
  
  // Sorting
  if (params.sortBy) {
    filtered.sort((a, b) => {
      let aVal: string | number, bVal: string | number
      
      switch (params.sortBy) {
        case "date":
          aVal = new Date(a.date).getTime()
          bVal = new Date(b.date).getTime()
          break
        case "amount":
          aVal = a.amount.amount
          bVal = b.amount.amount
          break
        case "description":
          aVal = a.description
          bVal = b.description
          break
        default:
          return 0
      }
      
      if (params.sortOrder === "desc") {
        return bVal > aVal ? 1 : -1
      } else {
        return aVal > bVal ? 1 : -1
      }
    })
  }
  
  return filtered
}

/**
 * Paginate results
 */
export function paginateResults<T>(
  items: T[],
  page: number = 1,
  limit: number = 20
): { items: T[]; total: number; page: number; totalPages: number } {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedItems = items.slice(startIndex, endIndex)
  
  return {
    items: paginatedItems,
    total: items.length,
    page,
    totalPages: Math.ceil(items.length / limit)
  }
}
