"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  balance?: boolean
  children: React.ReactNode
}

export function Heading({
  as: Component = "h2",
  size = "2xl",
  weight = "semibold",
  balance = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl md:text-3xl",
    "3xl": "text-3xl md:text-4xl",
    "4xl": "text-4xl md:text-5xl",
    "5xl": "text-5xl md:text-6xl"
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  }

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "label"
  size?: "xs" | "sm" | "base" | "lg"
  weight?: "normal" | "medium" | "semibold"
  color?: "default" | "muted" | "primary" | "destructive"
  pretty?: boolean
  hyphens?: boolean
  truncate?: boolean
  children: React.ReactNode
}

export function Text({
  as: Component = "p",
  size = "base",
  weight = "normal",
  color = "default",
  pretty = false,
  hyphens = false,
  truncate = false,
  className,
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm md:text-base",
    base: "text-sm md:text-base",
    lg: "text-base md:text-lg"
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold"
  }

  const colorClasses = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    destructive: "text-destructive"
  }

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        pretty && "text-pretty",
        hyphens && "text-hyphens",
        truncate && "truncate-safe",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-optimal leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface MoneyProps extends React.HTMLAttributes<HTMLSpanElement> {
  amount: number
  currency?: string
  showCents?: boolean
  className?: string
}

export function Money({ 
  amount, 
  currency = "USD", 
  showCents = false, 
  className,
  ...props 
}: MoneyProps) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  }).format(amount)

  return (
    <span
      className={cn(
        "tabular-nums font-mono",
        className
      )}
      {...props}
    >
      {formatted}
    </span>
  )
}
