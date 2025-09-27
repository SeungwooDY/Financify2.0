import * as React from "react"
import { cn } from "@/lib/utils"
import type { TableColumn } from "@/lib/types"

export interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  onSort?: (key: keyof T, direction: "asc" | "desc") => void
  onRowClick?: (item: T) => void
  className?: string
  striped?: boolean
  hoverable?: boolean
  size?: "sm" | "md" | "lg"
}

const Table = <T,>({ 
  data, 
  columns, 
  loading = false, 
  onSort, 
  onRowClick,
  className,
  striped = false,
  hoverable = true,
  size = "md",
  ...props 
}: TableProps<T>) => {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  const handleSort = (key: keyof T) => {
    if (!onSort) return

    const newDirection = sortKey === key && sortDirection === "asc" ? "desc" : "asc"
    setSortKey(key)
    setSortDirection(newDirection)
    onSort(key, newDirection)
  }

  const renderCell = (item: T, column: TableColumn<T>) => {
    if (column.render) {
      return column.render(item[column.key], item)
    }
    return String(item[column.key] || "")
  }

  if (loading) {
    return (
      <div className="w-full">
        <div className="animate-pulse">
          <div className="h-10 bg-muted rounded mb-4"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 bg-muted rounded mb-2"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn(
          "w-full border-collapse",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <thead>
          <tr className="border-b">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "text-left p-4 font-medium text-muted-foreground",
                  column.sortable && "cursor-pointer hover:text-foreground select-none"
                )}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center space-x-2">
                  <span>{column.title}</span>
                  {column.sortable && (
                    <span className="text-xs">
                      {sortKey === column.key ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={cn(
                "border-b transition-colors",
                striped && index % 2 === 0 && "bg-muted/50",
                hoverable && "hover:bg-muted/50",
                onRowClick && "cursor-pointer"
              )}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="p-4"
                >
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No data available
        </div>
      )}
    </div>
  )
}

export { Table }
