import * as React from "react"
import { cn } from "@/lib/utils"

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  header?: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
  variant?: "default" | "sidebar" | "centered"
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, children, header, sidebar, footer, variant = "default", ...props }, ref) => {
    const layoutClasses = {
      default: "min-h-screen flex flex-col",
      sidebar: "min-h-screen flex",
      centered: "min-h-screen flex items-center justify-center",
    }

    return (
      <div
        ref={ref}
        className={cn(layoutClasses[variant], className)}
        {...props}
      >
        {header && (
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {header}
          </header>
        )}
        
        <div className="flex flex-1">
          {sidebar && variant === "sidebar" && (
            <aside className="hidden md:flex md:w-64 md:flex-col">
              <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-background border-r">
                {sidebar}
              </div>
            </aside>
          )}
          
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </div>
        
        {footer && (
          <footer className="border-t bg-background">
            {footer}
          </footer>
        )}
      </div>
    )
  }
)
Layout.displayName = "Layout"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, maxWidth = "xl", padding = "md", ...props }, ref) => {
    const maxWidthClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      full: "max-w-full",
    }

    const paddingClasses = {
      none: "",
      sm: "px-4 py-2",
      md: "px-6 py-4",
      lg: "px-8 py-6",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Container.displayName = "Container"

export { Layout, Container }
