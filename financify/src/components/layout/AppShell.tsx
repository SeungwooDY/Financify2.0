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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut, Cog } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
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
  const { user, logout } = useAuth()
  
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
          "sticky top-0 z-50 w-full border-b border-white/5 bg-paper/80 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/40",
          isElevated && "shadow-strong"
        )}
        initial={{ y: 0 }}
        animate={{ 
          y: 0,
          boxShadow: isElevated ? "var(--shadow-strong)" : "none"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="max-w-[1264px] mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 text-text hover:text-accent-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 rounded-xl px-3 py-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-text to-accent-1 bg-clip-text text-transparent">
                Financify
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav id="main-navigation" className="hidden md:flex items-center space-x-2" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 group",
                      isActive
                        ? "bg-gradient-to-r from-accent-1/20 to-accent-1/10 text-accent-1 shadow-lg border border-accent-1/20"
                        : "text-text-secondary hover:text-text hover:bg-muted/50 hover:shadow-md"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    title={item.description}
                  >
                    <Icon className={cn(
                      "h-4 w-4 transition-all duration-300",
                      isActive ? "text-accent-1" : "group-hover:text-accent-1"
                    )} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Month Selector */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-accent-1/10 to-accent-1/5 border border-accent-1/20">
                <Calendar className="h-4 w-4 text-accent-1" />
              </div>
              <select
                value={currentMonth}
                onChange={(e) => handleMonthChange(e.target.value)}
                className="bg-transparent text-sm font-semibold text-text border-none outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted/30 transition-all duration-200"
                aria-label="Select month"
              >
                {monthOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Settings Icon */}
            <div className="hidden md:flex items-center">
              {user ? (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 hover:bg-accent-1/10 hover:text-accent-1 transition-colors" 
                  asChild
                >
                  <a href="/settings" title="Settings">
                    <Cog className="h-5 w-5" />
                  </a>
                </Button>
              ) : null}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl hover:bg-muted/50 transition-all duration-300"
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
            <div className="border-t border-border/50 py-6 space-y-3">
              {/* Mobile Month Selector */}
              <div className="flex items-center space-x-3 px-4 py-3 bg-muted/30 rounded-xl mx-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-accent-1/10 to-accent-1/5 border border-accent-1/20">
                  <Calendar className="h-4 w-4 text-accent-1" />
                </div>
                <select
                  value={currentMonth}
                  onChange={(e) => handleMonthChange(e.target.value)}
                  className="flex-1 bg-transparent text-sm font-semibold text-text border-none outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 rounded-lg px-2 py-1 cursor-pointer"
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
                      "flex items-center space-x-4 px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 mx-4 group",
                      isActive
                        ? "bg-gradient-to-r from-accent-1/20 to-accent-1/10 text-accent-1 shadow-lg border border-accent-1/20"
                        : "text-text-secondary hover:text-text hover:bg-muted/50"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={cn(
                      "p-2 rounded-lg transition-all duration-300",
                      isActive 
                        ? "bg-accent-1/20" 
                        : "bg-muted/50 group-hover:bg-accent-1/10"
                    )}>
                      <Icon className={cn(
                        "h-5 w-5 transition-all duration-300",
                        isActive ? "text-accent-1" : "group-hover:text-accent-1"
                      )} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-xs text-text-tertiary group-hover:text-text-secondary transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                )
              })}
              
              {/* Mobile Settings and Logout */}
              {user && (
                <>
                  <Link
                    href="/settings"
                    className="flex items-center space-x-4 px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 mx-4 group text-text-secondary hover:text-text hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-accent-1/10 transition-all duration-300">
                      <Settings className="h-5 w-5 group-hover:text-accent-1 transition-all duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Settings</div>
                      <div className="text-xs text-text-tertiary group-hover:text-text-secondary transition-colors">
                        Manage your account
                      </div>
                    </div>
                  </Link>
                  
                  <button
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-4 px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 mx-4 group text-destructive hover:bg-destructive/10 w-full"
                  >
                    <div className="p-2 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-all duration-300">
                      <LogOut className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Sign Out</div>
                      <div className="text-xs text-text-tertiary group-hover:text-text-secondary transition-colors">
                        Log out of your account
                      </div>
                    </div>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Gradient Hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </motion.header>

      {/* Main Content */}
      <main 
        id="main-content" 
        className="flex-1 py-12 md:py-16" 
        role="main" 
        aria-label="Main content"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  )
}
