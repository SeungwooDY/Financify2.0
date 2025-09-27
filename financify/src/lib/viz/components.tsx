"use client"

import React from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { cn } from "@/lib/utils"
import { 
  chartTheme, 
  generateColorPalette, 
  formatCurrencyValue, 
  formatDateAxis,
  formatPercentage,
  getResponsiveDimensions,
  generateChartDescription,
  type ColorScale
} from "./theme"

// ============================================================================
// TYPES
// ============================================================================

export interface VizBarProps {
  data: any[]
  xKey: string
  yKey: string
  width?: number
  height?: number
  className?: string
  colors?: string[]
  showGrid?: boolean
  showLegend?: boolean
  showTooltip?: boolean
  title?: string
  description?: string
  onBarClick?: (data: any, index: number) => void
  selectedIndex?: number
  responsive?: boolean
  containerWidth?: number
}

export interface VizLineProps {
  data: any[]
  xKey: string
  yKey: string | string[]
  width?: number
  height?: number
  className?: string
  colors?: string[]
  showGrid?: boolean
  showLegend?: boolean
  showTooltip?: boolean
  title?: string
  description?: string
  onPointClick?: (data: any, index: number) => void
  selectedIndex?: number
  responsive?: boolean
  containerWidth?: number
  type?: 'line' | 'area'
  strokeWidth?: number
  fillOpacity?: number
}

// ============================================================================
// CUSTOM TOOLTIP COMPONENT
// ============================================================================

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
  formatter?: (value: any, name: string) => [string, string]
  labelFormatter?: (label: string) => string
}

function CustomTooltip({ 
  active, 
  payload, 
  label, 
  formatter,
  labelFormatter 
}: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null
  }

  return (
    <div 
      className="rounded-lg border border-border bg-paper-elevated p-3 shadow-lg"
      style={chartTheme.tooltip}
    >
      <p className="font-medium text-text mb-2">
        {labelFormatter ? labelFormatter(label) : label}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-text-secondary">
            {entry.dataKey}:
          </span>
          <span className="font-mono tabular-nums text-text">
            {formatter ? formatter(entry.value, entry.dataKey)[0] : entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// ============================================================================
// CUSTOM LEGEND COMPONENT
// ============================================================================

interface CustomLegendProps {
  payload?: any[]
  verticalAlign?: 'top' | 'bottom'
  align?: 'left' | 'center' | 'right'
}

function CustomLegend({ payload, verticalAlign = 'bottom', align = 'center' }: CustomLegendProps) {
  if (!payload || payload.length === 0) {
    return null
  }

  return (
    <div 
      className={`flex flex-wrap gap-4 justify-${align === 'center' ? 'center' : align === 'right' ? 'end' : 'start'} ${
        verticalAlign === 'top' ? 'mb-4' : 'mt-4'
      }`}
    >
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-text-secondary">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// ============================================================================
// VIZ BAR COMPONENT
// ============================================================================

export function VizBar({
  data,
  xKey,
  yKey,
  width = 400,
  height = 300,
  className,
  colors = generateColorPalette(1),
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  title,
  description,
  onBarClick,
  selectedIndex,
  responsive = true,
  containerWidth,
}: VizBarProps) {
  const dimensions = responsive 
    ? getResponsiveDimensions(width, height, containerWidth)
    : { width, height }

  const chartDescription = description || generateChartDescription('bar', data, title)

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      )}
      
      <div 
        className="w-full"
        role="img"
        aria-label={chartDescription}
      >
        <ResponsiveContainer width="100%" height={dimensions.height}>
          <BarChart
            data={data}
            margin={chartTheme.margin}
            onClick={onBarClick}
          >
            {showGrid && (
              <CartesianGrid 
                strokeDasharray={chartTheme.grid.strokeDasharray}
                stroke={chartTheme.grid.stroke}
                strokeWidth={chartTheme.grid.strokeWidth}
              />
            )}
            
            <XAxis
              dataKey={xKey}
              stroke={chartTheme.axis.stroke}
              strokeWidth={chartTheme.axis.strokeWidth}
              fontSize={chartTheme.axis.tick.fontSize}
              fontFamily={chartTheme.axis.fontFamily}
              tick={{ fill: chartTheme.axis.tick.fill }}
              tickFormatter={formatDateAxis}
            />
            
            <YAxis
              stroke={chartTheme.axis.stroke}
              strokeWidth={chartTheme.axis.strokeWidth}
              fontSize={chartTheme.axis.tick.fontSize}
              fontFamily={chartTheme.axis.fontFamily}
              tick={{ fill: chartTheme.axis.tick.fill }}
              tickFormatter={(value) => formatCurrencyValue(value)}
            />
            
            {showTooltip && (
              <Tooltip
                content={<CustomTooltip />}
                formatter={(value) => [formatCurrencyValue(value), '']}
                labelFormatter={formatDateAxis}
              />
            )}
            
            {showLegend && (
              <Legend content={<CustomLegend />} />
            )}
            
            <Bar
              dataKey={yKey}
              fill={colors[0]}
              radius={[4, 4, 0, 0]}
              onClick={onBarClick}
              className={cn(
                "transition-all duration-200 hover:opacity-80",
                selectedIndex !== undefined && "opacity-50 hover:opacity-100"
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Screen reader fallback table */}
      <div className="sr-only">
        <table>
          <caption>{chartDescription}</caption>
          <thead>
            <tr>
              <th>{xKey}</th>
              <th>{yKey}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{formatDateAxis(item[xKey])}</td>
                <td>{formatCurrencyValue(item[yKey])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ============================================================================
// VIZ LINE COMPONENT
// ============================================================================

export function VizLine({
  data,
  xKey,
  yKey,
  width = 400,
  height = 300,
  className,
  colors = generateColorPalette(1),
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  title,
  description,
  onPointClick,
  selectedIndex,
  responsive = true,
  containerWidth,
  type = 'line',
  strokeWidth = 2,
  fillOpacity = 0.6,
}: VizLineProps) {
  const dimensions = responsive 
    ? getResponsiveDimensions(width, height, containerWidth)
    : { width, height }

  const chartDescription = description || generateChartDescription(type, data, title)
  const yKeys = Array.isArray(yKey) ? yKey : [yKey]

  const renderChart = () => {
    if (type === 'area') {
      return (
        <AreaChart
          data={data}
          margin={chartTheme.margin}
          onClick={onPointClick}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray={chartTheme.grid.strokeDasharray}
              stroke={chartTheme.grid.stroke}
              strokeWidth={chartTheme.grid.strokeWidth}
            />
          )}
          
          <XAxis
            dataKey={xKey}
            stroke={chartTheme.axis.stroke}
            strokeWidth={chartTheme.axis.strokeWidth}
            fontSize={chartTheme.axis.tick.fontSize}
            fontFamily={chartTheme.axis.fontFamily}
            tick={{ fill: chartTheme.axis.tick.fill }}
            tickFormatter={formatDateAxis}
          />
          
          <YAxis
            stroke={chartTheme.axis.stroke}
            strokeWidth={chartTheme.axis.strokeWidth}
            fontSize={chartTheme.axis.tick.fontSize}
            fontFamily={chartTheme.axis.fontFamily}
            tick={{ fill: chartTheme.axis.tick.fill }}
            tickFormatter={(value) => formatCurrencyValue(value)}
          />
          
          {showTooltip && (
            <Tooltip
              content={<CustomTooltip />}
              formatter={(value) => [formatCurrencyValue(value), '']}
              labelFormatter={formatDateAxis}
            />
          )}
          
          {showLegend && (
            <Legend content={<CustomLegend />} />
          )}
          
          {yKeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={fillOpacity}
              strokeWidth={strokeWidth}
              dot={{ r: 4, fill: colors[index % colors.length] }}
              activeDot={{ r: 6, stroke: colors[index % colors.length], strokeWidth: 2 }}
            />
          ))}
        </AreaChart>
      )
    }

    return (
      <LineChart
        data={data}
        margin={chartTheme.margin}
        onClick={onPointClick}
      >
        {showGrid && (
          <CartesianGrid 
            strokeDasharray={chartTheme.grid.strokeDasharray}
            stroke={chartTheme.grid.stroke}
            strokeWidth={chartTheme.grid.strokeWidth}
          />
        )}
        
        <XAxis
          dataKey={xKey}
          stroke={chartTheme.axis.stroke}
          strokeWidth={chartTheme.axis.strokeWidth}
          fontSize={chartTheme.axis.tick.fontSize}
          fontFamily={chartTheme.axis.fontFamily}
          tick={{ fill: chartTheme.axis.tick.fill }}
          tickFormatter={formatDateAxis}
        />
        
        <YAxis
          stroke={chartTheme.axis.stroke}
          strokeWidth={chartTheme.axis.strokeWidth}
          fontSize={chartTheme.axis.tick.fontSize}
          fontFamily={chartTheme.axis.fontFamily}
          tick={{ fill: chartTheme.axis.tick.fill }}
          tickFormatter={(value) => formatCurrencyValue(value)}
        />
        
        {showTooltip && (
          <Tooltip
            content={<CustomTooltip />}
            formatter={(value) => [formatCurrencyValue(value), '']}
            labelFormatter={formatDateAxis}
          />
        )}
        
        {showLegend && (
          <Legend content={<CustomLegend />} />
        )}
        
        {yKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index % colors.length]}
            strokeWidth={strokeWidth}
            dot={{ r: 4, fill: colors[index % colors.length] }}
            activeDot={{ r: 6, stroke: colors[index % colors.length], strokeWidth: 2 }}
          />
        ))}
      </LineChart>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      )}
      
      <div 
        className="w-full"
        role="img"
        aria-label={chartDescription}
      >
        <ResponsiveContainer width="100%" height={dimensions.height}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
      
      {/* Screen reader fallback table */}
      <div className="sr-only">
        <table>
          <caption>{chartDescription}</caption>
          <thead>
            <tr>
              <th>{xKey}</th>
              {yKeys.map(key => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{formatDateAxis(item[xKey])}</td>
                {yKeys.map(key => (
                  <td key={key}>{formatCurrencyValue(item[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ============================================================================
// EXPORTS
// ============================================================================

export { CustomTooltip, CustomLegend }
