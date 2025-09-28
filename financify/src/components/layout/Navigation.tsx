"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { 
  Home, 
  Upload, 
  Receipt, 
  Calendar, 
  PiggyBank,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Upload", href: "/upload", icon: Upload },
  { name: "Transactions", href: "/transactions", icon: Receipt },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Budget", href: "/budget", icon: PiggyBank },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden lg:flex lg:space-x-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Button
              key={item.name}
              asChild
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                isActive && "bg-primary text-primary-foreground"
              )}
            >
              <Link href={item.href} aria-current={isActive ? "page" : undefined}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          )
        })}
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.name}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={item.href} aria-current={isActive ? "page" : undefined}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
