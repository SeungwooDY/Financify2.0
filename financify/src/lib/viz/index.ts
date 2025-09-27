// Re-export all visualization components and utilities
export * from './theme'
export * from './components'

// Convenience exports for common use cases
export { VizBar, VizLine } from './components'
export { 
  chartTheme, 
  defaultColors, 
  generateColorPalette,
  formatCurrencyValue,
  formatDateAxis,
  formatPercentage 
} from './theme'
