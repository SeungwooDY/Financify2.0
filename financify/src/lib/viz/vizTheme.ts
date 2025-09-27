/**
 * Recharts theme configuration for consistent chart styling
 */

import { CATEGORY_COLORS } from '../theme';

export const CHART_COLORS = [
  '#22d3ee', // cyan-400
  '#34d399', // emerald-400
  '#60a5fa', // blue-400
  '#818cf8', // violet-400
  '#f472b6', // pink-400
  '#f59e0b', // amber-400
  '#a78bfa', // purple-400
  '#f87171', // red-400
  '#06b6d4', // cyan-500
  '#10b981', // emerald-500
];

export const rechartsTheme = {
  colors: CHART_COLORS,
  categoryColors: CATEGORY_COLORS,
  
  // Common chart styling
  common: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 12,
    fontWeight: 500,
  },
  
  // Bar chart specific
  bar: {
    radius: 4,
    strokeWidth: 0,
    fillOpacity: 0.8,
  },
  
  // Line chart specific
  line: {
    strokeWidth: 3,
    strokeOpacity: 1,
    dotRadius: 4,
    dotStrokeWidth: 2,
  },
  
  // Area chart specific
  area: {
    fillOpacity: 0.1,
    strokeWidth: 2,
  },
  
  // Grid and axes
  grid: {
    stroke: '#374151', // gray-700
    strokeWidth: 1,
    strokeOpacity: 0.1,
  },
  
  axis: {
    stroke: '#6b7280', // gray-500
    strokeWidth: 1,
    tickFontSize: 11,
    tickFill: '#9ca3af', // gray-400
  },
  
  // Tooltip
  tooltip: {
    backgroundColor: 'rgba(17, 24, 39, 0.95)', // gray-900 with opacity
    border: '1px solid rgba(55, 65, 81, 0.3)', // gray-700 with opacity
    borderRadius: 8,
    padding: 12,
    fontSize: 12,
    color: '#f9fafb', // gray-50
  },
  
  // Legend
  legend: {
    fontSize: 11,
    fontWeight: 500,
    color: '#d1d5db', // gray-300
  },
};

export const getCategoryChartColor = (category: string, index: number = 0) => {
  const categoryColor = CATEGORY_COLORS[category.toLowerCase()];
  return categoryColor ? categoryColor.base : CHART_COLORS[index % CHART_COLORS.length];
};
