"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  id: string
  username: string
  email?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  createAccount: (username: string, password: string, email?: string) => Promise<void>
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check localStorage for existing session
        const storedUser = localStorage.getItem('financify_user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (err) {
        console.error('Error checking auth:', err)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (username: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any non-empty credentials
      if (username.trim() && password.trim()) {
        const userData: User = {
          id: '1',
          username: username.trim(),
          email: `${username}@example.com`
        }
        
        setUser(userData)
        localStorage.setItem('financify_user', JSON.stringify(userData))
      } else {
        throw new Error('Please enter both username and password')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.'
      setError(errorMessage)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const createAccount = async (username: string, password: string, email?: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call - replace with actual account creation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any non-empty credentials
      if (username.trim() && password.trim()) {
        const userData: User = {
          id: '1',
          username: username.trim(),
          email: email || `${username}@example.com`
        }
        
        setUser(userData)
        localStorage.setItem('financify_user', JSON.stringify(userData))
      } else {
        throw new Error('Please enter both username and password')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Account creation failed. Please try again.'
      setError(errorMessage)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('financify_user')
    setError(null)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    createAccount,
    error
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
