"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading, Text } from "@/components/ui/typography"
import { Eye, EyeOff, Lock, User, ArrowRight, Sparkles } from "lucide-react"

interface LoginPageProps {
  onLogin: (username: string, password: string) => void
  onCreateAccount: () => void
  isLoading?: boolean
  error?: string
}

export function LoginPage({ onLogin, onCreateAccount, isLoading = false, error }: LoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      username,
      password,
      logged_in: true, // user is logged in
    };

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        const err = await res.json(); // await here!
        throw new Error(err.detail || "Login failed");
      }

      const data = await res.json(); // await the response JSON
      console.log("Logged in:", data);
    // TODO: redirect or update UI
    } catch (err: any) {
      console.log("Error logging in:", err.message);
    }
};

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-1/20 to-accent-2/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-2/20 to-accent-3/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-1/10 to-accent-3/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-[2000px]">
        {/* Logo and branding */}
        <div className="text-center mb-6 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-1 to-accent-2 rounded-2xl mb-4 shadow-glow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <Heading as="h1" size="5xl" balance={false} className="mb-4 bg-gradient-to-r from-text via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Financify
          </Heading>
          <Text color="muted" pretty={false} className="text-2xl max-w-[1800px] mx-auto leading-relaxed" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            wordWrap: 'normal'
          }}>
            Your personal finance companion
          </Text>
        </div>

        {/* Login form */}
        <Card className="card-elevated animate-fade-in-up max-w-8xl mx-auto">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-4xl font-semibold">Welcome back</CardTitle>
            <CardDescription className="text-xl max-w-[1600px] mx-auto leading-relaxed" style={{ 
              whiteSpace: 'normal', 
              wordBreak: 'normal', 
              overflowWrap: 'break-word',
              wordWrap: 'normal'
            }}>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username field */}
              <div className="space-y-2">
                <label htmlFor="username" className="text-lg font-medium text-text-secondary">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-16 text-lg focus:ring-2 focus:ring-accent-1/50 focus:border-accent-1"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-lg font-medium text-text-secondary">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-16 text-lg focus:ring-2 focus:ring-accent-1/50 focus:border-accent-1"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-text transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-fade-in">
                  {error}
                </div>
              )}

              {/* Login button */}
                <Button
                type="submit"
                className="w-full h-16 text-xl bg-gradient-to-r from-accent-1 to-accent-2 hover:from-accent-1/90 hover:to-accent-2/90 text-white font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
                disabled={isLoading || !username.trim() || !password.trim()}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign in</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-paper px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            {/* Create account button */}
            <Button
              type="button"
              variant="outline"
              onClick={onCreateAccount}
              className="w-full h-16 text-xl border-border/50 hover:border-accent-1/50 hover:bg-accent-1/5 transition-all duration-300"
              disabled={isLoading}
            >
              Create new account
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Text color="muted" pretty={false} className="text-lg max-w-[1800px] mx-auto leading-relaxed" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            wordWrap: 'normal'
          }}>
            By continuing, you agree to our{" "}
            <a href="#" className="text-accent-1 hover:text-accent-2 transition-colors underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-accent-1 hover:text-accent-2 transition-colors underline">
              Privacy Policy
            </a>
          </Text>
        </div>
      </div>
    </div>
  )
}
