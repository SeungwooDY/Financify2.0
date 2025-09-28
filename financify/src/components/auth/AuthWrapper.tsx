"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { LoginPage, SignupPage } from "./"

interface AuthWrapperProps {
  children: React.ReactNode
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated, isLoading, login, createAccount, error } = useAuth()
  const [showSignup, setShowSignup] = useState(false)

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="relative mb-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary via-accent-1 to-accent-2 animate-spin">
              <div className="absolute inset-2 rounded-full bg-paper"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 animate-pulse"></div>
          </div>
          <h2 className="text-2xl font-bold text-text mb-2">Loading Financify</h2>
          <p className="text-muted-foreground text-lg max-w-7xl mx-auto leading-relaxed" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            wordWrap: 'normal'
          }}>Preparing your experience...</p>
        </div>
      </div>
    )
  }

  // Show login/signup pages if not authenticated
  if (!isAuthenticated) {
    if (showSignup) {
      return (
        <SignupPage
          onSignup={async (username, password, email) => {
            try {
              await createAccount(username, password, email)
            } catch (err) {
              // Error is handled by the context
            }
          }}
          onBackToLogin={() => setShowSignup(false)}
          isLoading={isLoading}
          error={error || undefined}
        />
      )
    }

    return (
      <LoginPage
        onLogin={async (username, password) => {
          try {
            await login(username, password)
          } catch (err) {
            // Error is handled by the context
          }
        }}
        onCreateAccount={() => setShowSignup(true)}
        isLoading={isLoading}
        error={error || undefined}
      />
    )
  }

  // User is authenticated, show the main app
  return <>{children}</>
}
