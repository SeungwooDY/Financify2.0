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
  const [isLoading, setIsLoading] = useState(false) // Start with false to show login form immediately
  const [error, setError] = useState<string | null>(null)

  // Check for existing session on mount
  useEffect(() => {
    console.log('🔍 Checking authentication state...')
    try {
      // Check if we're in the browser before accessing localStorage
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('financify_user')
        console.log('💾 Stored user:', storedUser)
        if (storedUser) {
          setUser(JSON.parse(storedUser))
          console.log('✅ User found in localStorage')
        } else {
          console.log('❌ No user found in localStorage')
        }
      }
    } catch (err) {
      console.error('❌ Error checking auth:', err)
    }
    // No need to set isLoading to false since it starts as false
  }, [])

  const login = async (username: string, password: string) => {
    console.log('🔐 Login attempt started for:', username)
    setIsLoading(true)
    setError(null)

    try {
      if (!username.trim() || !password.trim()) {
        throw new Error('Please enter both username and password')
      }

      console.log('🌐 Making request to backend...')
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          logged_in: true
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      console.log('📡 Response received:', response.status)
      if (!response.ok) {
        const errorData = await response.json()
        console.log('❌ Login failed:', errorData)
        throw new Error(errorData.detail || 'Login failed')
      }

      const data = await response.json()
      console.log('✅ Login successful:', data)

      const userData: User = {
        id: '1',
        username: username.trim(),
        email: `${username}@example.com`
      }
      
      setUser(userData)
      if (typeof window !== 'undefined') {
        localStorage.setItem('financify_user', JSON.stringify(userData))
      }
    } catch (err) {
      let errorMessage = 'Login failed. Please try again.'
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = 'Connection timeout. Please check if the backend server is running.'
        } else if (err.message.includes('Failed to fetch')) {
          errorMessage = 'Cannot connect to server. Please make sure the backend is running on http://localhost:8000'
        } else {
          errorMessage = err.message
        }
      }
      
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
      if (!username.trim() || !password.trim()) {
        throw new Error('Please enter both username and password')
      }

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          logged_in: false
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Account creation failed')
      }

      const data = await response.json()
      console.log('Account created successfully:', data)

      const userData: User = {
        id: '1',
        username: username.trim(),
        email: email || `${username}@example.com`
      }
      
      setUser(userData)
      if (typeof window !== 'undefined') {
        localStorage.setItem('financify_user', JSON.stringify(userData))
      }
    } catch (err) {
      let errorMessage = 'Account creation failed. Please try again.'
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = 'Connection timeout. Please check if the backend server is running.'
        } else if (err.message.includes('Failed to fetch')) {
          errorMessage = 'Cannot connect to server. Please make sure the backend is running on http://localhost:8000'
        } else {
          errorMessage = err.message
        }
      }
      
      setError(errorMessage)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('financify_user')
    }
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
