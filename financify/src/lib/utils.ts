import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency values with proper localization and tabular numbers
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format percentage values with proper precision
 */
export function formatPercentage(
  value: number,
  decimals: number = 2,
  showSign: boolean = true
): string {
  const formatted = value.toFixed(decimals)
  return showSign && value > 0 ? `+${formatted}%` : `${formatted}%`
}

/**
 * Format large numbers with appropriate suffixes (K, M, B, T)
 */
export function formatNumber(
  value: number,
  decimals: number = 1
): string {
  const suffixes = ["", "K", "M", "B", "T"]
  const magnitude = Math.floor(Math.log10(Math.abs(value)) / 3)
  const scaled = value / Math.pow(1000, magnitude)
  
  if (magnitude >= suffixes.length) {
    return value.toExponential(2)
  }
  
  return `${scaled.toFixed(decimals)}${suffixes[magnitude]}`
}

/**
 * Generate a consistent ID for components
 */
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if a value is within a range
 */
export function isInRange(
  value: number,
  min: number,
  max: number,
  inclusive: boolean = true
): boolean {
  return inclusive ? value >= min && value <= max : value > min && value < max
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Generate a random color for charts and visualizations
 */
export function generateRandomColor(): string {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 50%)`
}

/**
 * Calculate the percentage change between two values
 */
export function calculatePercentageChange(
  oldValue: number,
  newValue: number
): number {
  if (oldValue === 0) return newValue > 0 ? 100 : 0
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Get the contrast ratio between two colors
 */
export function getContrastRatio(_color1: string, _color2: string): number {
  // This is a simplified implementation
  // In a real application, you'd want to use a proper color library
  return 4.5 // Placeholder value
}

/**
 * Check if a color is light or dark
 */
export function isLightColor(_color: string): boolean {
  // This is a simplified implementation
  // In a real application, you'd want to use a proper color library
  return true // Placeholder value
}
