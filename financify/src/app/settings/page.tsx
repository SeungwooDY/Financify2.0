"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Heading, Text } from "@/components/ui/typography"
import { useAuth } from "@/contexts/AuthContext"
import { Save, LogOut, User, DollarSign, CreditCard, Building, Mail, Phone, MapPin } from "lucide-react"

interface UserSettings {
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
  }
  financialInfo: {
    monthlyIncome: string
    monthlyExpenses: string
    savingsGoal: string
    emergencyFund: string
    creditScore: string
  }
  preferences: {
    currency: string
    timezone: string
    notifications: boolean
  }
}

export default function SettingsPage() {
  const { user, logout } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isLoadingSettings, setIsLoadingSettings] = useState(true)
  
  const [settings, setSettings] = useState<UserSettings>({
    personalInfo: {
      firstName: user?.username?.split(' ')[0] || '',
      lastName: user?.username?.split(' ')[1] || '',
      email: user?.email || '',
      phone: '',
      address: ''
    },
    financialInfo: {
      monthlyIncome: '',
      monthlyExpenses: '',
      savingsGoal: '',
      emergencyFund: '',
      creditScore: ''
    },
    preferences: {
      currency: 'USD',
      timezone: 'America/New_York',
      notifications: true
    }
  })

  // Load existing settings on component mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch('http://localhost:8000/get_settings', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.settings) {
            setSettings(data.settings)
          }
        }
      } catch (error) {
        console.error('Error loading settings:', error)
      } finally {
        setIsLoadingSettings(false)
      }
    }

    loadSettings()
  }, [])

  const handleInputChange = (section: keyof UserSettings, field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }
  const handleSave = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/save_settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(settings)
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || "Failed to save settings")
      }
      
      const data = await response.json()
      console.log('Settings saved:', data)
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('Failed to save settings. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoadingSettings) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent-1 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <Text color="muted" className="text-xl">Loading settings...</Text>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[2000px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Heading as="h1" size="4xl" balance={false} className="mb-4 bg-gradient-to-r from-text via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Settings
          </Heading>
          <Text color="muted" pretty={false} className="text-xl max-w-[1800px] leading-relaxed" style={{ 
            whiteSpace: 'normal', 
            wordBreak: 'normal', 
            overflowWrap: 'break-word',
            wordWrap: 'normal'
          }}>
            Manage your personal and financial information
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <User className="w-6 h-6 mr-3 text-accent-1" />
                Personal Information
              </CardTitle>
              <CardDescription className="text-lg">
                Update your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-lg font-medium text-text-secondary">First Name</label>
                  <Input
                    value={settings.personalInfo.firstName}
                    onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                    className="h-12 text-lg"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-medium text-text-secondary">Last Name</label>
                  <Input
                    value={settings.personalInfo.lastName}
                    onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                    className="h-12 text-lg"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <Input
                  type="email"
                  value={settings.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <Input
                  value={settings.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Address
                </label>
                <Input
                  value={settings.personalInfo.address}
                  onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your address"
                />
              </div>
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-accent-2" />
                Financial Information
              </CardTitle>
              <CardDescription className="text-lg">
                Set your financial goals and targets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary">Monthly Income</label>
                <Input
                  type="number"
                  value={settings.financialInfo.monthlyIncome}
                  onChange={(e) => handleInputChange('financialInfo', 'monthlyIncome', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your monthly income"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary">Monthly Expenses</label>
                <Input
                  type="number"
                  value={settings.financialInfo.monthlyExpenses}
                  onChange={(e) => handleInputChange('financialInfo', 'monthlyExpenses', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your monthly expenses"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary">Savings Goal</label>
                <Input
                  type="number"
                  value={settings.financialInfo.savingsGoal}
                  onChange={(e) => handleInputChange('financialInfo', 'savingsGoal', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your savings goal"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary">Emergency Fund</label>
                <Input
                  type="number"
                  value={settings.financialInfo.emergencyFund}
                  onChange={(e) => handleInputChange('financialInfo', 'emergencyFund', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your emergency fund amount"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Credit Score
                </label>
                <Input
                  type="number"
                  value={settings.financialInfo.creditScore}
                  onChange={(e) => handleInputChange('financialInfo', 'creditScore', e.target.value)}
                  className="h-12 text-lg"
                  placeholder="Enter your credit score"
                />
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <Building className="w-6 h-6 mr-3 text-accent-3" />
                Preferences
              </CardTitle>
              <CardDescription className="text-lg">
                Customize your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary">Currency</label>
                <select
                  value={settings.preferences.currency}
                  onChange={(e) => handleInputChange('preferences', 'currency', e.target.value)}
                  className="w-full h-12 text-lg px-3 rounded-lg border border-border bg-background text-text"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-medium text-text-secondary">Timezone</label>
                <select
                  value={settings.preferences.timezone}
                  onChange={(e) => handleInputChange('preferences', 'timezone', e.target.value)}
                  className="w-full h-12 text-lg px-3 rounded-lg border border-border bg-background text-text"
                >
                  <option value="America/New_York">Eastern Time</option>
                  <option value="America/Chicago">Central Time</option>
                  <option value="America/Denver">Mountain Time</option>
                  <option value="America/Los_Angeles">Pacific Time</option>
                  <option value="Europe/London">London</option>
                  <option value="Europe/Paris">Paris</option>
                  <option value="Asia/Tokyo">Tokyo</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={settings.preferences.notifications}
                  onChange={(e) => handleInputChange('preferences', 'notifications', e.target.checked)}
                  className="w-5 h-5 text-accent-1 bg-background border-border rounded focus:ring-accent-1"
                />
                <label htmlFor="notifications" className="text-lg font-medium text-text-secondary">
                  Enable notifications
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-destructive">
                Account Actions
              </CardTitle>
              <CardDescription className="text-lg">
                Manage your account settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="w-full h-16 text-xl bg-gradient-to-r from-accent-1 to-accent-2 hover:from-accent-1/90 hover:to-accent-2/90 text-white font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Saving...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Save className="w-5 h-5" />
                      <span>{isSaved ? 'Preferences updated!' : 'Save Information'}</span>
                    </div>
                  )}
                </Button>
                
                <Button
                  onClick={logout}
                  variant="outline"
                  className="w-full h-16 text-xl border-destructive/50 text-destructive hover:bg-destructive/10 hover:border-destructive transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
