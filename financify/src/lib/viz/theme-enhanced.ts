import { formatCurrencyValue } from "./theme"

export const enhancedChartTheme = {
  // Grid styling
  grid: {
    stroke: 'hsl(var(--border-secondary))',
    strokeDasharray: '2 4',
    strokeWidth: 1,
    opacity: 0.15
  },
  
  // Axis styling
  axis: {
    stroke: 'hsl(var(--text-secondary))',
    strokeWidth: 1,
    fontSize: '0.75rem',
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    tick: {
      fill: 'hsl(var(--text-secondary))',
      fontSize: '0.75rem'
    },
    label: {
      fill: 'hsl(var(--text))',
      fontSize: '0.875rem',
      fontWeight: '500'
    }
  },
  
  // Tooltip styling
  tooltip: {
    wrapperStyle: {
      outline: 'none',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid hsl(var(--border))',
      backgroundColor: 'hsl(var(--paper-elevated))',
      padding: '0.75rem'
    },
    contentStyle: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'hsl(var(--text))',
      fontSize: '0.875rem',
      lineHeight: '1.5'
    },
    labelStyle: {
      color: 'hsl(var(--text-secondary))',
      fontSize: '0.75rem',
      fontWeight: '500',
      marginBottom: '0.25rem'
    }
  },
  
  // Legend styling
  legend: {
    wrapperStyle: {
      paddingTop: 'var(--spacing-md)',
      fontSize: '0.875rem'
    }
  },
  
  // Margins for tooltip safety
  margin: {
    top: 24,
    right: 40,
    left: 24,
    bottom: 24
  },
  
  // Responsive breakpoints
  responsive: {
    mobile: {
      margin: { top: 16, right: 20, left: 16, bottom: 16 },
      fontSize: '0.75rem'
    },
    tablet: {
      margin: { top: 20, right: 30, left: 20, bottom: 20 },
      fontSize: '0.875rem'
    },
    desktop: {
      margin: { top: 24, right: 40, left: 24, bottom: 24 },
      fontSize: '0.875rem'
    }
  }
}

export function getResponsiveChartTheme(containerWidth: number) {
  if (containerWidth < 640) {
    return {
      ...enhancedChartTheme,
      margin: enhancedChartTheme.responsive.mobile.margin,
      axis: {
        ...enhancedChartTheme.axis,
        fontSize: enhancedChartTheme.responsive.mobile.fontSize,
        tick: {
          ...enhancedChartTheme.axis.tick,
          fontSize: enhancedChartTheme.responsive.mobile.fontSize
        }
      }
    }
  } else if (containerWidth < 1024) {
    return {
      ...enhancedChartTheme,
      margin: enhancedChartTheme.responsive.tablet.margin,
      axis: {
        ...enhancedChartTheme.axis,
        fontSize: enhancedChartTheme.responsive.tablet.fontSize,
        tick: {
          ...enhancedChartTheme.axis.tick,
          fontSize: enhancedChartTheme.responsive.tablet.fontSize
        }
      }
    }
  }
  
  return enhancedChartTheme
}

export function formatCurrencyAxis(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value.toFixed(0)}`
}

export function truncateLabel(label: string, maxLength: number = 12): string {
  if (label.length <= maxLength) return label
  return label.slice(0, maxLength - 3) + '...'
}

export function generateChartDescription(
  chartType: 'bar' | 'line' | 'area' | 'pie',
  data: Record<string, unknown>[],
  title?: string
): string {
  const dataPoints = data.length
  const description = `${chartType} chart${title ? `: ${title}` : ''} with ${dataPoints} data points`
  
  if (dataPoints > 0) {
    const values = data.map(d => {
      if (typeof d === 'object' && d !== null) {
        const numericValue = Object.values(d).find(v => typeof v === 'number')
        return numericValue as number
      }
      return 0
    }).filter(v => typeof v === 'number' && !isNaN(v))
    
    if (values.length > 0) {
      const max = Math.max(...values)
      const min = Math.min(...values)
      return `${description}. Values range from ${formatCurrencyValue(min)} to ${formatCurrencyValue(max)}.`
    }
  }
  
  return description
}
