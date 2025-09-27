import * as React from "react"
import { cn } from "@/lib/utils"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: "xs" | "sm" | "md" | "lg" | "xl"
  responsive?: boolean
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns = 12, gap = "md", responsive = true, ...props }, ref) => {
    const gapClasses = {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    }

    const columnClasses = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
      12: "grid-cols-12",
    }

    const responsiveClasses = responsive ? {
      1: "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      2: "sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
      3: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      4: "sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
      6: "sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8",
      12: "sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12",
    } : {}

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          columnClasses[columns],
          responsive && responsiveClasses[columns],
          gapClasses[gap],
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 6 | 12
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  end?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  responsive?: {
    sm?: { span?: number; start?: number; end?: number }
    md?: { span?: number; start?: number; end?: number }
    lg?: { span?: number; start?: number; end?: number }
    xl?: { span?: number; start?: number; end?: number }
  }
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, span, start, end, responsive, ...props }, ref) => {
    const spanClasses = span ? `col-span-${span}` : ""
    const startClasses = start ? `col-start-${start}` : ""
    const endClasses = end ? `col-end-${end}` : ""

    const responsiveClasses = responsive ? Object.entries(responsive).map(([breakpoint, config]) => {
      const classes = []
      if (config.span) classes.push(`${breakpoint}:col-span-${config.span}`)
      if (config.start) classes.push(`${breakpoint}:col-start-${config.start}`)
      if (config.end) classes.push(`${breakpoint}:col-end-${config.end}`)
      return classes.join(" ")
    }).join(" ") : ""

    return (
      <div
        ref={ref}
        className={cn(
          spanClasses,
          startClasses,
          endClasses,
          responsiveClasses,
          className
        )}
        {...props}
      />
    )
  }
)
GridItem.displayName = "GridItem"

export { Grid, GridItem }
