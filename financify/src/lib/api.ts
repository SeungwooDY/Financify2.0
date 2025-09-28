import { 
  Transaction, 
  MonthMetrics, 
  CopilotAdvice, 
  ApiResponse, 
  TransactionQueryParams,
  CurrencyFormatOptions,
  User
} from "./types"
import { mockDataStore, filterTransactions, paginateResults } from "./mock"

// ============================================================================
// API CONFIGURATION
// ============================================================================

/**
 * API Configuration
 * 
 * To swap to real endpoints later:
 * 1. Update BASE_URL to your API server
 * 2. Replace mock data calls with actual HTTP requests
 * 3. Update error handling for network failures
 * 4. Add authentication headers if needed
 */
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
}

// ============================================================================
// HTTP CLIENT
// ============================================================================

/**
 * Generic HTTP client with error handling and retries
 * 
 * In production, replace with your preferred HTTP client (axios, fetch, etc.)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers here if needed
        // 'Authorization': `Bearer ${getAuthToken()}`,
      },
      ...options,
    }
    
    try {
      const response = await fetch(url, defaultOptions)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const data = await response.json()
      return {
        success: true,
        data,
        error: null
      }
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error)
      return {
        success: false,
        data: null,
        error: {
          code: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Unknown error',
          details: { endpoint, options },
          timestamp: new Date().toISOString()
        }
      }
    }
  }
  
  async get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    const url = params ? `${endpoint}?${new URLSearchParams(params)}` : endpoint
    return this.request<T>(url, { method: 'GET' })
  }
  
  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined
    })
  }
  
  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined
    })
  }
  
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }
}

// Global API client instance
// const apiClient = new ApiClient() // Uncomment when switching to real API

// ============================================================================
// MOCK API IMPLEMENTATION
// ============================================================================

/**
 * Mock API implementation using in-memory data
 * 
 * To replace with real API:
 * 1. Replace mockDataStore calls with apiClient calls
 * 2. Update response format to match your API
 * 3. Add proper error handling for network failures
 * 4. Implement caching if needed
 */

/**
 * Fetch monthly metrics for a specific month
 * 
 * @param month - Month in YYYY-MM format
 * @returns Promise<ApiResponse<MonthMetrics>>
 * 
 * Real API endpoint: GET /api/metrics/{month}
 */
export async function fetchMonthMetrics(month: string): Promise<ApiResponse<MonthMetrics>> {
  try {
    console.log('Fetching metrics for month:', month)
    
    // Validate month format
    if (!/^\d{4}-\d{2}$/.test(month)) {
      console.error('Invalid month format:', month)
      return {
        success: false,
        data: null,
        error: {
          code: 'INVALID_MONTH_FORMAT',
          message: 'Month must be in YYYY-MM format',
          details: { month },
          timestamp: new Date().toISOString()
        }
      }
    }
    
    // In production, replace with:
    // return apiClient.get<MonthMetrics>(`/metrics/${month}`)
    
    const metrics = mockDataStore.getMetrics(month)
    console.log('Retrieved metrics:', metrics ? 'Found' : 'Not found')
    
    if (!metrics) {
      console.error('No metrics found for month:', month)
      return {
        success: false,
        data: null,
        error: {
          code: 'METRICS_NOT_FOUND',
          message: `No metrics found for month ${month}`,
          details: { month },
          timestamp: new Date().toISOString()
        }
      }
    }
    
    console.log('Returning metrics successfully')
    return {
      success: true,
      data: metrics,
      error: null
    }
  } catch (error) {
    console.error('Error fetching month metrics:', error)
    return {
      success: false,
      data: null,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch month metrics',
        details: { month, error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

/**
 * Fetch transactions with optional filtering and pagination
 * 
 * @param params - Query parameters for filtering and pagination
 * @returns Promise<ApiResponse<Transaction[]>>
 * 
 * Real API endpoint: GET /api/transactions?{params}
 */
export async function fetchTransactions(
  params: TransactionQueryParams = {}
): Promise<ApiResponse<Transaction[]>> {
  try {
    const { month = new Date().toISOString().slice(0, 7), page = 1, limit = 20, ...filters } = params
    
    // In production, replace with:
    // const queryParams = new URLSearchParams()
    // Object.entries(params).forEach(([key, value]) => {
    //   if (value !== undefined) {
    //     queryParams.append(key, String(value))
    //   }
    // })
    // return apiClient.get<Transaction[]>(`/transactions?${queryParams}`)
    
    const allTransactions = mockDataStore.getTransactions(month)
    const filteredTransactions = filterTransactions(allTransactions, filters)
    const paginatedResult = paginateResults(filteredTransactions, page, limit)
    
    return {
      success: true,
      data: paginatedResult.items,
      error: null,
      metadata: {
        total: paginatedResult.total,
        page: paginatedResult.page,
        limit,
        hasMore: paginatedResult.page < paginatedResult.totalPages
      }
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch transactions',
        details: { params, error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

/**
 * Fetch AI copilot advice for a specific mode and month
 * 
 * @param mode - Advice mode (general, budget, savings, etc.)
 * @param month - Month in YYYY-MM format
 * @returns Promise<ApiResponse<CopilotAdvice[]>>
 * 
 * Real API endpoint: GET /api/advice/{mode}?month={month}
 */
export async function fetchAdvice(
  mode: "general" | "budget" | "savings" | "spending" | "debt" | "investment",
  month: string = new Date().toISOString().slice(0, 7)
): Promise<ApiResponse<CopilotAdvice[]>> {
  try {
    // Validate month format
    if (!/^\d{4}-\d{2}$/.test(month)) {
      return {
        success: false,
        data: null,
        error: {
          code: 'INVALID_MONTH_FORMAT',
          message: 'Month must be in YYYY-MM format',
          details: { month },
          timestamp: new Date().toISOString()
        }
      }
    }
    
    // In production, replace with:
    // return apiClient.get<CopilotAdvice[]>(`/advice/${mode}?month=${month}`)
    
    const advice = mockDataStore.getAdvice(mode, month)
    
    return {
      success: true,
      data: advice,
      error: null
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch advice',
        details: { mode, month, error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

export async function fetchCurrentUser(): Promise<ApiResponse<User>> {
  try {
    // In production, replace with:
    // return apiClient.get<User>("/user/me")
    
    // Mock user data
    const user: User = {
      id: "user_1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      preferences: {
        currency: "USD",
        dateFormat: "MM/DD/YYYY",
        timezone: "America/New_York",
        notifications: {
          email: true,
          push: true,
          sms: false,
        },
      },
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: new Date().toISOString(),
    }
    
    return {
      success: true,
      data: user,
      error: null,
    }
  } catch (error) {
    console.error("Error fetching user:", error)
    return {
      success: false,
      data: null,
      error: {
        code: 'USER_FETCH_ERROR',
        message: "Failed to fetch user",
        details: { error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      },
    }
  }
}

// ============================================================================
// BACKEND API INTEGRATION
// ============================================================================

/**
 * Parse bank statement file using backend OCR
 */
export async function parseBankStatement(file: File, userId?: string): Promise<ApiResponse<any[]>> {
  try {
    const formData = new FormData()
    formData.append('file', file)
    if (userId) {
      formData.append('user_id', userId)
    }

    const response = await fetch('http://localhost:8000/parse-statement/', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('Backend parse result:', result)

    if (!result.success) {
      return {
        success: false,
        data: null,
        error: {
          code: 'PARSE_ERROR',
          message: result.error || 'Failed to parse bank statement',
          details: { error: result.error },
          timestamp: new Date().toISOString()
        }
      }
    }

    // Map backend transaction format to frontend Transaction format
    const mappedTransactions = result.data.map((txn: any, index: number) => ({
      id: `parsed_${index}`,
      date: txn.date,
      description: txn.description,
      amount: {
        amount: Math.round(txn.amount * 100), // Convert to cents
        currency: "USD",
        symbol: "$"
      },
      category: txn.category,
      type: txn.type,
      status: "completed" as const,
      paymentMethod: txn.payment_method,
      accountId: "parsed_account",
      merchant: txn.merchant,
      location: undefined,
      tags: [],
      notes: undefined,
      metadata: {
        source: "bank_statement",
        original_amount: txn.amount,
        parsed_at: new Date().toISOString()
      },
      createdAt: txn.created_at || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }))

    return {
      success: true,
      data: mappedTransactions,
      error: null
    }
  } catch (error) {
    console.error("Error parsing bank statement:", error)
    return {
      success: false,
      data: null,
      error: {
        code: 'PARSE_ERROR',
        message: "Failed to parse bank statement",
        details: { error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

/**
 * Get user transactions from backend
 */
export async function getUserTransactions(userId: string, limit: number = 100): Promise<ApiResponse<Transaction[]>> {
  try {
    const response = await fetch(`http://localhost:8000/user/${userId}/transactions?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      return {
        success: false,
        data: null,
        error: {
          code: 'FETCH_ERROR',
          message: result.error || 'Failed to fetch transactions',
          details: { error: result.error },
          timestamp: new Date().toISOString()
        }
      }
    }

    // Map backend transaction format to frontend Transaction format
    const mappedTransactions = result.data.map((txn: any, index: number) => ({
      id: txn.id || `txn_${index}`,
      date: txn.date,
      description: txn.description,
      amount: {
        amount: Math.round(txn.amount * 100), // Convert to cents
        currency: "USD",
        symbol: "$"
      },
      category: txn.category,
      type: txn.type,
      status: "completed" as const,
      paymentMethod: txn.payment_method,
      accountId: "user_account",
      merchant: txn.merchant,
      location: undefined,
      tags: [],
      notes: undefined,
      metadata: {
        source: txn.source || "backend",
        original_amount: txn.amount,
        user_id: txn.user_id
      },
      createdAt: txn.created_at || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }))
    
    return {
      success: true,
      data: mappedTransactions,
      error: null
    }
  } catch (error) {
    console.error("Error fetching user transactions:", error)
    return {
      success: false,
      data: null,
      error: {
        code: 'FETCH_ERROR',
        message: "Failed to fetch transactions",
        details: { error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

/**
 * Get dashboard data from backend
 */
export async function getDashboardData(userId: string): Promise<ApiResponse<any>> {
  try {
    const response = await fetch(`http://localhost:8000/user/${userId}/dashboard-data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      return {
        success: false,
        data: null,
        error: {
          code: 'FETCH_ERROR',
          message: result.error || 'Failed to fetch dashboard data',
          details: { error: result.error },
          timestamp: new Date().toISOString()
        }
      }
    }
    
    return {
      success: true,
      data: result.data,
      error: null
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    return {
      success: false,
      data: null,
      error: {
        code: 'FETCH_ERROR',
        message: "Failed to fetch dashboard data",
        details: { error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

/**
 * Get calendar data from backend
 */
export async function getCalendarData(userId: string, year: number, month: number): Promise<ApiResponse<any>> {
  try {
    const response = await fetch(`http://localhost:8000/user/${userId}/calendar-data?year=${year}&month=${month}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const result = await response.json()
    
    if (!result.success) {
      return {
        success: false,
        data: null,
        error: {
          code: 'FETCH_ERROR',
          message: result.error || 'Failed to fetch calendar data',
          details: { error: result.error },
          timestamp: new Date().toISOString()
        }
      }
    }
    
    return {
      success: true,
      data: result.data,
      error: null
    }
  } catch (error) {
    console.error("Error fetching calendar data:", error)
    return {
      success: false,
      data: null,
      error: {
        code: 'FETCH_ERROR',
        message: "Failed to fetch calendar data",
        details: { error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }
    }
  }
}

// ============================================================================
// CURRENCY UTILITIES
// ============================================================================

/**
 * Format currency amount for display
 * 
 * @param amount - Amount in cents
 * @param currency - Currency code (default: USD)
 * @param options - Formatting options
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  options: CurrencyFormatOptions = {}
): string {
  const {
    showSymbol = true,
    showCents = true,
    locale = "en-US",
    compact = false
  } = options
  
  const amountInDollars = amount / 100
  const currencySymbol = getCurrencySymbol(currency)
  
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
    notation: compact ? "compact" : "standard"
  })
  
  let formatted = formatter.format(amountInDollars)
  
  if (!showSymbol) {
    formatted = formatted.replace(currencySymbol, "").trim()
  }
  
  return formatted
}

/**
 * Get currency symbol for a given currency code
 */
export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CAD: "C$",
    AUD: "A$",
    CHF: "CHF",
    CNY: "¥",
    INR: "₹",
    BRL: "R$",
    MXN: "$",
    KRW: "₩",
    SGD: "S$",
    HKD: "HK$",
    NOK: "kr",
    SEK: "kr",
    DKK: "kr",
    PLN: "zł",
    CZK: "Kč",
    HUF: "Ft",
    RON: "lei",
    BGN: "лв",
    HRK: "kn",
    RUB: "₽",
    TRY: "₺",
    ZAR: "R",
    ILS: "₪",
    AED: "د.إ",
    SAR: "﷼",
    QAR: "﷼",
    KWD: "د.ك",
    BHD: "د.ب",
    OMR: "﷼",
    JOD: "د.ا",
    LBP: "ل.ل",
    EGP: "£",
    MAD: "د.م.",
    TND: "د.ت",
    DZD: "د.ج",
    LYD: "ل.د",
    SDG: "ج.س.",
    ETB: "Br",
    KES: "KSh",
    UGX: "USh",
    TZS: "TSh",
    ZMW: "ZK",
    BWP: "P",
    SZL: "L",
    LSL: "L",
    NAD: "N$",
    AOA: "Kz",
    MZN: "MT",
    ZWL: "Z$",
    GHS: "₵",
    NGN: "₦",
    XOF: "CFA",
    XAF: "FCFA",
    CDF: "FC",
    RWF: "RF",
    BIF: "FBu",
    KMF: "CF",
    DJF: "Fdj",
    SOS: "S",
    ERN: "Nfk",
    SLL: "Le",
    GMD: "D",
    GNF: "FG",
    LRD: "L$",
    CVE: "$",
    STN: "Db",
    MRO: "UM",
    MGA: "Ar",
    SCR: "₨",
    MUR: "₨",
    YER: "﷼",
    AFN: "؋",
    PKR: "₨",
    LKR: "₨",
    NPR: "₨",
    BDT: "৳",
    MMK: "K",
    THB: "฿",
    LAK: "₭",
    KHR: "៛",
    VND: "₫",
    IDR: "Rp",
    MYR: "RM",
    PHP: "₱",
    TWD: "NT$",
    MOP: "MOP$",
    BND: "B$",
    FJD: "FJ$",
    PGK: "K",
    WST: "WS$",
    TOP: "T$",
    VUV: "Vt",
    SBD: "SI$",
    NZD: "NZ$",
    XPF: "₣",
    ARS: "$",
    BOB: "Bs",
    CLP: "$",
    COP: "$",
    PYG: "₲",
    PEN: "S/",
    UYU: "$U",
    VES: "Bs.S",
    GYD: "G$",
    SRD: "$",
    TTD: "TT$",
    BBD: "Bds$",
    JMD: "J$",
    BZD: "BZ$",
    GTQ: "Q",
    HNL: "L",
    NIO: "C$",
    CRC: "₡",
    PAB: "B/.",
    DOP: "RD$",
    HTG: "G",
    CUP: "$",
    XCD: "$",
    AWG: "ƒ",
    BMD: "$",
    KYD: "$",
    FKP: "£",
    SHP: "£",
    GIP: "£",
    JEP: "£",
    GGP: "£",
    IMP: "£",
  }
  
  return symbols[currency] || currency
}

/**
 * Parse currency string to cents
 * 
 * @param currencyString - Formatted currency string (e.g., "$123.45")
 * @returns Amount in cents
 */
export function parseCurrencyToCents(currencyString: string): number {
  // Remove currency symbols and non-numeric characters except decimal point
  const cleaned = currencyString.replace(/[^\d.-]/g, "")
  const amount = parseFloat(cleaned)
  return Math.round(amount * 100)
}

/**
 * Convert cents to dollars
 */
export function centsToDollars(cents: number): number {
  return cents / 100
}

/**
 * Convert dollars to cents
 */
export function dollarsToCents(dollars: number): number {
  return Math.round(dollars * 100)
}

// ============================================================================
// API MIGRATION GUIDE
// ============================================================================

/**
 * MIGRATION GUIDE: How to swap to real API endpoints
 * 
 * 1. Update API_CONFIG.BASE_URL to your production API URL
 * 2. Replace mock data calls with actual HTTP requests:
 *    - mockDataStore.getMetrics() → apiClient.get('/metrics/{month}')
 *    - mockDataStore.getTransactions() → apiClient.get('/transactions')
 *    - mockDataStore.getAdvice() → apiClient.get('/advice/{mode}')
 * 
 * 3. Update error handling for network failures
 * 4. Add authentication if needed:
 *    - Add auth token to headers
 *    - Implement token refresh logic
 *    - Handle 401/403 responses
 * 
 * 5. Add caching if needed:
 *    - Implement response caching
 *    - Add cache invalidation
 *    - Handle stale data
 * 
 * 6. Add request/response interceptors for:
 *    - Logging
 *    - Error reporting
 *    - Performance monitoring
 * 
 * Example real API implementation:
 * 
 * export async function fetchMonthMetrics(month: string): Promise<ApiResponse<MonthMetrics>> {
 *   return apiClient.get<MonthMetrics>(`/metrics/${month}`)
 * }
 * 
 * export async function fetchTransactions(params: TransactionQueryParams): Promise<ApiResponse<Transaction[]>> {
 *   const queryParams = new URLSearchParams()
 *   Object.entries(params).forEach(([key, value]) => {
 *     if (value !== undefined) {
 *       queryParams.append(key, String(value))
 *     }
 *   })
 *   return apiClient.get<Transaction[]>(`/transactions?${queryParams}`)
 * }
 * 
 * export async function fetchAdvice(mode: string, month: string): Promise<ApiResponse<CopilotAdvice[]>> {
 *   return apiClient.get<CopilotAdvice[]>(`/advice/${mode}?month=${month}`)
 * }
 */
