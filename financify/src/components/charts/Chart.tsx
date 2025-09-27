import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts"

export interface ChartProps {
  data: any[]
  type: "line" | "area" | "bar" | "pie"
  width?: number
  height?: number
  className?: string
  responsive?: boolean
  showGrid?: boolean
  showLegend?: boolean
  showTooltip?: boolean
  colors?: string[]
  xAxisKey?: string
  yAxisKey?: string
  dataKey?: string
  nameKey?: string
  valueKey?: string
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ 
    data, 
    type, 
    width = 400, 
    height = 300, 
    className,
    responsive = true,
    showGrid = true,
    showLegend = true,
    showTooltip = true,
    colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"],
    xAxisKey = "name",
    yAxisKey = "value",
    dataKey = "value",
    nameKey = "name",
    valueKey = "value",
    ...props 
  }, ref) => {
    const renderChart = () => {
      const commonProps = {
        data,
        width: responsive ? undefined : width,
        height: responsive ? undefined : height,
        margin: { top: 5, right: 30, left: 20, bottom: 5 },
      }

      switch (type) {
        case "line":
          return (
            <LineChart {...commonProps}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              {data[0] && Object.keys(data[0]).filter(key => key !== xAxisKey).map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          )

        case "area":
          return (
            <AreaChart {...commonProps}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              {data[0] && Object.keys(data[0]).filter(key => key !== xAxisKey).map((key, index) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stackId="1"
                  stroke={colors[index % colors.length]}
                  fill={colors[index % colors.length]}
                  fillOpacity={0.6}
                />
              ))}
            </AreaChart>
          )

        case "bar":
          return (
            <BarChart {...commonProps}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              {data[0] && Object.keys(data[0]).filter(key => key !== xAxisKey).map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                />
              ))}
            </BarChart>
          )

        case "pie":
          return (
            <PieChart {...commonProps}>
              {showTooltip && <Tooltip />}
              {showLegend && <Legend />}
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey={valueKey}
                nameKey={nameKey}
              >
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
              </Pie>
            </PieChart>
          )

        default:
          return <div>Unsupported chart type</div>
      }
    }

    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        {responsive ? (
          <ResponsiveContainer width="100%" height={height}>
            {renderChart()}
          </ResponsiveContainer>
        ) : (
          renderChart()
        )}
      </div>
    )
  }
)
Chart.displayName = "Chart"

export { Chart }
