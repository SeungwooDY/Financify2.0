"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { 
  Calendar, 
  Upload, 
  CreditCard, 
  Calendar as CalendarIcon, 
  PieChart,
  Menu,
  X
} from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { SkipLink } from "./SkipLink"
import { cn } from "@/lib/utils"

interface AppShellProps {
  children: React.ReactNode
}

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Dashboard",
    icon: PieChart,
    description: "Overview and analytics"
  },
  {
    href: "/upload",
    label: "Upload",
    icon: Upload,
    description: "Import transactions"
  },
  {
    href: "/transactions",
    label: "Transactions",
    icon: CreditCard,
    description: "View all transactions"
  },
  {
    href: "/calendar",
    label: "Calendar",
    icon: CalendarIcon,
    description: "Calendar view"
  },
  {
    href: "/budget",
    label: "Budget",
    icon: PieChart,
    description: "Budget management"
  }
]

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { scrollY } = useScroll()
  
  const [isElevated, setIsElevated] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(() => {
    const monthParam = searchParams.get('month')
    if (monthParam && /^\d{4}-\d{2}$/.test(monthParam)) {
      return monthParam
    }
    // Default to August 2025 since we have data for that month
    return '2025-08'
  })

  // Handle scroll-based elevation
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsElevated(latest > 10)
  })

  // Update month in URL when changed
  const updateMonthInUrl = useCallback((month: string) => {
    const currentMonthParam = searchParams.get('month')
    const currentMonth = currentMonthParam || new Date().toISOString().slice(0, 7)
    
    // Prevent unnecessary updates
    if (month === currentMonth) return
    
    const params = new URLSearchParams(searchParams.toString())
    if (month === new Date().toISOString().slice(0, 7)) {
      params.delete('month')
    } else {
      params.set('month', month)
    }
    
    const newSearch = params.toString()
    const newUrl = newSearch ? `${pathname}?${newSearch}` : pathname
    router.push(newUrl, { scroll: false })
  }, [pathname, searchParams, router])

  // Handle month change
  const handleMonthChange = (month: string) => {
    setCurrentMonth(month)
    updateMonthInUrl(month)
  }

  // Generate month options (current month ± 12 months)
  const monthOptions = useMemo(() => {
    const options = []
    
    // Generate months from 2024-01 to 2025-12
    for (let year = 2024; year <= 2025; year++) {
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 1)
        const value = date.toISOString().slice(0, 7)
        const label = date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long' 
        })
        options.push({ value, label })
      }
    }
    
    return options
  }, [])

  // Close mobile menu on route change and manage focus
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      // Move focus to main content after navigation
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        mainContent.focus()
      }
    }
  }, [pathname, isMobileMenuOpen])

  // Sync month from URL on mount
  useEffect(() => {
    const monthParam = searchParams.get('month')
    if (monthParam && /^\d{4}-\d{2}$/.test(monthParam)) {
      setCurrentMonth(monthParam)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-bg">
      {/* Skip Links */}
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#main-navigation">Skip to navigation</SkipLink>
      
      {/* Top Navigation */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/60",
          isElevated && "shadow-elevated"
        )}
        initial={{ y: 0 }}
        animate={{ 
          y: 0,
          boxShadow: isElevated ? "var(--shadow-elevated)" : "none"
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <div className="container-5xl">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-text hover:text-accent-1 transition-colors focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 rounded-md px-2 py-1"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl">Financify</span>
            </Link>

            {/* Desktop Navigation */}
            <nav id="main-navigation" className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2",
                      isActive
                        ? "bg-accent-1/10 text-accent-1"
                        : "text-text-secondary hover:text-text hover:bg-muted"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    title={item.description}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Month Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-text-secondary" />
              <select
                value={currentMonth}
                onChange={(e) => handleMonthChange(e.target.value)}
                className="bg-transparent text-sm font-medium text-text border-none outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 rounded-md px-2 py-1 cursor-pointer"
                aria-label="Select month"
              >
                {monthOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden"
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="border-t border-border py-4 space-y-2">
              {/* Mobile Month Selector */}
              <div className="flex items-center space-x-2 px-4 py-2">
                <Calendar className="h-4 w-4 text-text-secondary" />
                <select
                  value={currentMonth}
                  onChange={(e) => handleMonthChange(e.target.value)}
                  className="flex-1 bg-transparent text-sm font-medium text-text border-none outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 rounded-md px-2 py-1 cursor-pointer"
                  aria-label="Select month"
                >
                  {monthOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Nav Items */}
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2",
                      isActive
                        ? "bg-accent-1/10 text-accent-1"
                        : "text-text-secondary hover:text-text hover:bg-muted"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <div className="flex-1">
                      <div>{item.label}</div>
                      <div className="text-xs text-text-tertiary">{item.description}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Gradient Hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </motion.header>

      {/* Main Content */}
      <main 
        id="main-content" 
        className="flex-1 container-12 section-spacing py-8" 
        role="main" 
        aria-label="Main content"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  )
}
