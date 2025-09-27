import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import type { NavItem } from "@/lib/types"

export interface NavigationProps {
  items: NavItem[]
  activeItem?: string
  onItemClick?: (item: NavItem) => void
  className?: string
  variant?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ 
    items, 
    activeItem, 
    onItemClick, 
    className, 
    variant = "horizontal",
    size = "md",
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    }

    const variantClasses = {
      horizontal: "flex flex-row space-x-1",
      vertical: "flex flex-col space-y-1",
    }

    const handleItemClick = (item: NavItem) => {
      if (onItemClick) {
        onItemClick(item)
      }
    }

    const renderItem = (item: NavItem, level: number = 0) => {
      const isActive = activeItem === item.href
      const hasChildren = item.children && item.children.length > 0

      return (
        <div key={item.href} className="relative">
          <Button
            variant={isActive ? "default" : "ghost"}
            size={size === "md" ? "default" : size}
            className={cn(
              "w-full justify-start",
              level > 0 && "ml-4",
              sizeClasses[size]
            )}
            onClick={() => handleItemClick(item)}
          >
            {item.icon && (
              <span className="mr-2">{item.icon}</span>
            )}
            {item.label}
            {item.badge && (
              <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                {item.badge}
              </span>
            )}
          </Button>
          
          {hasChildren && (
            <div className="mt-1 space-y-1">
              {item.children!.map((child) => renderItem(child, level + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <nav
        ref={ref}
        className={cn(
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {items.map((item) => renderItem(item))}
      </nav>
    )
  }
)
Navigation.displayName = "Navigation"

export interface BreadcrumbProps {
  items: { label: string; href?: string }[]
  separator?: React.ReactNode
  className?: string
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ items, separator = "/", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}
        {...props}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-muted-foreground">{separator}</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export { Navigation, Breadcrumb }
