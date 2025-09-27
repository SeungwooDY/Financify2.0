"use client"

import { Suspense } from "react"
import { AppShell } from "./AppShell"

interface AppShellWrapperProps {
  children: React.ReactNode
}

export function AppShellWrapper({ children }: AppShellWrapperProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50 w-full border-b border-border bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/60">
          <div className="container-5xl">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2 text-text">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="font-bold text-xl">Financify</span>
              </div>
              <div className="h-8 w-8 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </div>
        <main className="flex-1 container-12 section-spacing py-8">
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        </main>
      </div>
    }>
      <AppShell>
        {children}
      </AppShell>
    </Suspense>
  )
}
