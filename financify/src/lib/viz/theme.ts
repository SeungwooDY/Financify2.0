/**
 * Recharts Theme System
 * 
 * Provides consistent theming, formatters, and color scales for data visualization
 * using the Financify design system tokens.
 */

import { formatCurrency } from "@/lib/api"

// ============================================================================
// COLOR SCALE GENERATOR
// ============================================================================

/**
 * Generate color scales from design tokens
 * Creates 6 categories with multiple shades for data visualization
 */
export const colorScales = {
  // Primary scale (blue spectrum)
  primary: {
    50: "hsl(var(--primary-50))",
    100: "hsl(var(--primary-100))",
    200: "hsl(var(--primary-200))",
    300: "hsl(var(--primary-300))",
    400: "hsl(var(--primary-400))",
    500: "hsl(var(--primary-500))",
    600: "hsl(var(--primary-600))",
    700: "hsl(var(--primary-700))",
    800: "hsl(var(--primary-800))",
    900: "hsl(var(--primary-900))",
    950: "hsl(var(--primary-950))",
  },
  
  // Success scale (green spectrum)
  success: {
    50: "hsl(var(--success-foreground))",
    100: "hsl(var(--success-foreground))",
    200: "hsl(var(--success-foreground))",
    300: "hsl(var(--success-foreground))",
    400: "hsl(var(--success-foreground))",
    500: "hsl(var(--success))",
    600: "hsl(var(--success))",
    700: "hsl(var(--success))",
    800: "hsl(var(--success))",
    900: "hsl(var(--success))",
    950: "hsl(var(--success))",
  },
  
  // Warning scale (orange spectrum)
  warning: {
    50: "hsl(var(--warning-foreground))",
    100: "hsl(var(--warning-foreground))",
    200: "hsl(var(--warning-foreground))",
    300: "hsl(var(--warning-foreground))",
    400: "hsl(var(--warning-foreground))",
    500: "hsl(var(--warning))",
    600: "hsl(var(--warning))",
    700: "hsl(var(--warning))",
    800: "hsl(var(--warning))",
    900: "hsl(var(--warning))",
    950: "hsl(var(--warning))",
  },
  
  // Destructive scale (red spectrum)
  destructive: {
    50: "hsl(var(--destructive-foreground))",
    100: "hsl(var(--destructive-foreground))",
    200: "hsl(var(--destructive-foreground))",
    300: "hsl(var(--destructive-foreground))",
    400: "hsl(var(--destructive-foreground))",
    500: "hsl(var(--destructive))",
    600: "hsl(var(--destructive))",
    700: "hsl(var(--destructive))",
    800: "hsl(var(--destructive))",
    900: "hsl(var(--destructive))",
    950: "hsl(var(--destructive))",
  },
  
  // Accent scales
  accent1: {
    50: "hsl(var(--accent-1) / 0.1)",
    100: "hsl(var(--accent-1) / 0.2)",
    200: "hsl(var(--accent-1) / 0.3)",
    300: "hsl(var(--accent-1) / 0.4)",
    400: "hsl(var(--accent-1) / 0.6)",
    500: "hsl(var(--accent-1))",
    600: "hsl(var(--accent-1) / 0.8)",
    700: "hsl(var(--accent-1) / 0.9)",
    800: "hsl(var(--accent-1) / 0.95)",
    900: "hsl(var(--accent-1) / 0.98)",
    950: "hsl(var(--accent-1) / 1)",
  },
  
  accent2: {
    50: "hsl(var(--accent-2) / 0.1)",
    100: "hsl(var(--accent-2) / 0.2)",
    200: "hsl(var(--accent-2) / 0.3)",
    300: "hsl(var(--accent-2) / 0.4)",
    400: "hsl(var(--accent-2) / 0.6)",
    500: "hsl(var(--accent-2))",
    600: "hsl(var(--accent-2) / 0.8)",
    700: "hsl(var(--accent-2) / 0.9)",
    800: "hsl(var(--accent-2) / 0.95)",
    900: "hsl(var(--accent-2) / 0.98)",
    950: "hsl(var(--accent-2) / 1)",
  },
  
  accent3: {
    50: "hsl(var(--accent-3) / 0.1)",
    100: "hsl(var(--accent-3) / 0.2)",
    200: "hsl(var(--accent-3) / 0.3)",
    300: "hsl(var(--accent-3) / 0.4)",
    400: "hsl(var(--accent-3) / 0.6)",
    500: "hsl(var(--accent-3))",
    600: "hsl(var(--accent-3) / 0.8)",
    700: "hsl(var(--accent-3) / 0.9)",
    800: "hsl(var(--accent-3) / 0.95)",
    900: "hsl(var(--accent-3) / 0.98)",
    950: "hsl(var(--accent-3) / 1)",
  },
} as const

/**
 * Default color palette for charts (6 categories)
 * Uses semantic colors that work well together
 */
export const defaultColors = [
  colorScales.primary[500],
  colorScales.accent1[500],
  colorScales.success[500],
  colorScales.warning[500],
  colorScales.accent2[500],
  colorScales.destructive[500],
] as const

/**
 * Generate color palette for specific number of categories
 */
export function generateColorPalette(count: number): string[] {
  const baseColors = [
    colorScales.primary[500],
    colorScales.accent1[500],
    colorScales.success[500],
    colorScales.warning[500],
    colorScales.accent2[500],
    colorScales.destructive[500],
    colorScales.accent3[500],
    colorScales.primary[700],
    colorScales.accent1[700],
    colorScales.success[700],
  ]
  
  return Array.from({ length: count }, (_, i) => baseColors[i % baseColors.length])
}

// ============================================================================
// FORMATTERS
// ============================================================================

/**
 * Currency formatter with tabular numbers
 */
export function formatCurrencyValue(value: number, currency: string = "USD"): string {
  return formatCurrency(value, currency, { showCents: false })
}

/**
 * Date formatter for chart axes
 */
export function formatDateAxis(value: string | number): string {
  const date = new Date(value)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  })
}

/**
 * Month formatter for chart axes
 */
export function formatMonthAxis(value: string | number): string {
  const date = new Date(value)
  return date.toLocaleDateString('en-US', { 
    month: 'short' 
  })
}

/**
 * Percentage formatter
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`
}

/**
 * Number formatter with K/M suffixes
 */
export function formatCompactNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`
  }
  return value.toString()
}

// ============================================================================
// CHART THEME CONFIGURATION
// ============================================================================

/**
 * Base chart theme configuration
 */
export const chartTheme = {
  // Colors
  colors: defaultColors,
  
  // Typography
  fontFamily: 'var(--font-sans)',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  
  // Spacing
  margin: {
    top: 20,
    right: 30,
    left: 20,
    bottom: 20,
  },
  
  // Grid styling
  grid: {
    stroke: 'hsl(var(--border))',
    strokeWidth: 1,
    strokeDasharray: '3 3',
  },
  
  // Axis styling
  axis: {
    stroke: 'hsl(var(--text-tertiary))',
    strokeWidth: 1,
    fontSize: '0.875rem',
    fontFamily: 'var(--font-sans)',
    tick: {
      fill: 'hsl(var(--text-tertiary))',
      fontSize: '0.75rem',
    },
  },
  
  // Legend styling
  legend: {
    fontSize: '0.875rem',
    fontFamily: 'var(--font-sans)',
    fill: 'hsl(var(--text))',
  },
  
  // Tooltip styling
  tooltip: {
    backgroundColor: 'hsl(var(--paper-elevated))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '0.5rem',
    boxShadow: 'var(--shadow-lg)',
    fontSize: '0.875rem',
    fontFamily: 'var(--font-sans)',
    padding: '0.75rem',
  },
} as const

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Get responsive chart dimensions
 */
export function getResponsiveDimensions(
  baseWidth: number = 400,
  baseHeight: number = 300,
  containerWidth?: number
) {
  if (!containerWidth) {
    return { width: baseWidth, height: baseHeight }
  }
  
  // Scale down for smaller screens
  if (containerWidth < breakpoints.sm) {
    return {
      width: Math.min(containerWidth - 32, baseWidth),
      height: Math.max(200, baseHeight * 0.8),
    }
  }
  
  if (containerWidth < breakpoints.md) {
    return {
      width: Math.min(containerWidth - 48, baseWidth),
      height: Math.max(250, baseHeight * 0.9),
    }
  }
  
  return { width: baseWidth, height: baseHeight }
}

// ============================================================================
// ACCESSIBILITY HELPERS
// ============================================================================

/**
 * Generate accessible color combinations
 */
export function getAccessibleColors(): string[] {
  // High contrast colors that work well with the background
  return [
    colorScales.primary[600],
    colorScales.success[600],
    colorScales.warning[600],
    colorScales.destructive[600],
    colorScales.accent1[600],
    colorScales.accent2[600],
  ]
}

/**
 * Generate screen reader descriptions for charts
 */
export function generateChartDescription(
  chartType: 'bar' | 'line' | 'area' | 'pie',
  data: Record<string, unknown>[],
  title?: string
): string {
  const dataPoints = data.length
  const description = `${chartType} chart${title ? `: ${title}` : ''} with ${dataPoints} data points`
  
  if (dataPoints > 0) {
    const values = data.map(d => typeof d === 'object' ? Object.values(d).find(v => typeof v === 'number') : d)
    const max = Math.max(...values.filter(v => typeof v === 'number'))
    const min = Math.min(...values.filter(v => typeof v === 'number'))
    return `${description}. Values range from ${formatCurrencyValue(min)} to ${formatCurrencyValue(max)}.`
  }
  
  return description
}
