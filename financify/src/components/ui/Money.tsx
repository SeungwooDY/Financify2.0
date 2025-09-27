import * as React from "react"
import { cn } from "@/lib/utils"
import { formatCurrency, formatPercentage } from "@/lib/utils"

export interface MoneyProps {
  amount: number
  currency?: string
  locale?: string
  showSign?: boolean
  showCurrency?: boolean
  className?: string
  variant?: "default" | "large" | "small" | "muted"
  type?: "currency" | "percentage"
  decimals?: number
}

const Money = React.forwardRef<HTMLSpanElement, MoneyProps>(
  ({ 
    amount, 
    currency = "USD", 
    locale = "en-US",
    showSign = false,
    showCurrency = true,
    className,
    variant = "default",
    type = "currency",
    decimals = 2,
    ...props 
  }, ref) => {
    const variantClasses = {
      default: "text-foreground",
      large: "text-2xl font-semibold",
      small: "text-sm",
      muted: "text-muted-foreground",
    }

    const formatValue = () => {
      if (type === "percentage") {
        return formatPercentage(amount, decimals, showSign)
      }
      
      const formatted = formatCurrency(amount, currency, locale)
      if (!showCurrency) {
        return formatted.replace(/[^\d.,-]/g, '')
      }
      return formatted
    }

    const getColorClass = () => {
      if (type === "percentage") {
        if (amount > 0) return "text-profit"
        if (amount < 0) return "text-loss"
        return "text-neutral"
      }
      return ""
    }

    return (
      <span
        ref={ref}
        className={cn(
          "font-mono tabular-nums",
          variantClasses[variant],
          getColorClass(),
          className
        )}
        {...props}
      >
        {formatValue()}
      </span>
    )
  }
)
Money.displayName = "Money"

export { Money }
