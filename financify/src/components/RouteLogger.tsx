"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

interface RouteLoggerProps {
  enabled?: boolean
}

export function RouteLogger({ enabled = process.env.NODE_ENV === 'development' }: RouteLoggerProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!enabled) return

    const logRouteChange = () => {
      const search = searchParams.toString()
      const fullPath = search ? `${pathname}?${search}` : pathname
      
      console.log('🔄 Route changed:', {
        pathname,
        search: search || '(no search params)',
        fullPath,
        timestamp: new Date().toISOString()
      })
    }

    // Log initial route
    logRouteChange()

    // Set up error logging
    const originalError = console.error
    console.error = (...args) => {
      originalError(...args)
      
      // Log navigation-related errors
      if (args.some(arg => 
        typeof arg === 'string' && (
          arg.includes('hydration') ||
          arg.includes('Text content does not match') ||
          arg.includes('useSearchParams') ||
          arg.includes('router.push')
        )
      )) {
        console.log('🚨 Navigation error detected:', {
          error: args,
          pathname,
          search: searchParams.toString(),
          timestamp: new Date().toISOString()
        })
      }
    }

    // Cleanup
    return () => {
      console.error = originalError
    }
  }, [pathname, searchParams, enabled])

  return null
}
