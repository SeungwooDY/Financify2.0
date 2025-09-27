"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { 
  Palette, 
  Type, 
  Square, 
  Circle, 
  Grid3X3, 
  Container,
  Sparkles,
  DollarSign
} from "lucide-react"

export function TokenDemo() {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setSelectedTheme(prev => prev === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      selectedTheme === 'dark' ? 'dark' : ''
    }`}>
      <div className="bg-bg text-text min-h-screen p-6">
        <div className="container-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-text">Design System Tokens</h1>
                <p className="text-text-secondary mt-2">
                  Comprehensive tokenized design system for Financify
                </p>
              </div>
              <Button onClick={toggleTheme} variant="outline">
                {selectedTheme === 'light' ? '🌙' : '☀️'} Toggle Theme
              </Button>
            </div>
          </div>

          {/* Color Tokens */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Color Tokens
              </CardTitle>
              <CardDescription>
                Semantic color system with light/dark theme support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Background Colors */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-3">Background</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-bg border border-border"></div>
                      <span className="text-sm">bg-bg</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-bg-secondary border border-border"></div>
                      <span className="text-sm">bg-bg-secondary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-bg-tertiary border border-border"></div>
                      <span className="text-sm">bg-bg-tertiary</span>
                    </div>
                  </div>
                </div>

                {/* Paper Colors */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-3">Paper</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-paper border border-border"></div>
                      <span className="text-sm">bg-paper</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-paper-elevated border border-border shadow-card"></div>
                      <span className="text-sm">bg-paper-elevated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-paper-overlay border border-border"></div>
                      <span className="text-sm">bg-paper-overlay</span>
                    </div>
                  </div>
                </div>

                {/* Text Colors */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-3">Text</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-text"></div>
                      <span className="text-sm">text-text</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-text-secondary"></div>
                      <span className="text-sm">text-text-secondary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-text-tertiary"></div>
                      <span className="text-sm">text-text-tertiary</span>
                    </div>
                  </div>
                </div>

                {/* Accent Colors */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-3">Accents</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-accent-1"></div>
                      <span className="text-sm">bg-accent-1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-accent-2"></div>
                      <span className="text-sm">bg-accent-2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-accent-3"></div>
                      <span className="text-sm">bg-accent-3</span>
                    </div>
                  </div>
                </div>

                {/* Financial Colors */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-3">Financial</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-profit"></div>
                      <span className="text-sm">bg-profit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-loss"></div>
                      <span className="text-sm">bg-loss</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-neutral"></div>
                      <span className="text-sm">bg-neutral</span>
                    </div>
                  </div>
                </div>

                {/* Border Colors */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-3">Borders</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md border-2 border-border"></div>
                      <span className="text-sm">border-border</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md border-2 border-border-secondary"></div>
                      <span className="text-sm">border-border-secondary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md border-2 border-border-focus"></div>
                      <span className="text-sm">border-border-focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typography Scale */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Typography Scale
              </CardTitle>
              <CardDescription>
                Consistent typography scale with proper line heights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-9xl font-bold text-text">9xl - 128px</div>
                <div className="text-8xl font-bold text-text">8xl - 96px</div>
                <div className="text-7xl font-bold text-text">7xl - 72px</div>
                <div className="text-6xl font-bold text-text">6xl - 60px</div>
                <div className="text-5xl font-bold text-text">5xl - 48px</div>
                <div className="text-4xl font-bold text-text">4xl - 36px</div>
                <div className="text-3xl font-bold text-text">3xl - 30px</div>
                <div className="text-2xl font-bold text-text">2xl - 24px</div>
                <div className="text-xl font-bold text-text">xl - 20px</div>
                <div className="text-lg font-bold text-text">lg - 18px</div>
                <div className="text-base font-bold text-text">base - 16px</div>
                <div className="text-sm font-bold text-text">sm - 14px</div>
                <div className="text-xs font-bold text-text">xs - 12px</div>
              </div>
              
              {/* Font Weights */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-text mb-4">Font Weights</h4>
                <div className="space-y-2">
                  <div className="text-lg font-light text-text">Light (300)</div>
                  <div className="text-lg font-normal text-text">Normal (400)</div>
                  <div className="text-lg font-medium text-text">Medium (500)</div>
                  <div className="text-lg font-semibold text-text">Semibold (600)</div>
                  <div className="text-lg font-bold text-text">Bold (700)</div>
                  <div className="text-lg font-extrabold text-text">Extrabold (800)</div>
                  <div className="text-lg font-black text-text">Black (900)</div>
                </div>
              </div>

              {/* Tabular Numbers */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-text mb-4">Tabular Numbers</h4>
                <div className="space-y-2 font-mono">
                  <div className="text-lg tabular-nums text-text">123,456.78</div>
                  <div className="text-lg tabular-nums text-text">$1,234.56</div>
                  <div className="text-lg tabular-nums text-text">+12.34%</div>
                  <div className="text-lg tabular-nums text-text">-5.67%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Border Radius & Shadows */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Square className="h-5 w-5" />
                Border Radius & Shadows
              </CardTitle>
              <CardDescription>
                Consistent border radius and shadow system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Border Radius */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Border Radius</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-xs"></div>
                      <span className="text-sm">rounded-xs (2px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-sm"></div>
                      <span className="text-sm">rounded-sm (4px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-md"></div>
                      <span className="text-sm">rounded-md (6px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-lg"></div>
                      <span className="text-sm">rounded-lg (8px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-xl"></div>
                      <span className="text-sm">rounded-xl (12px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-2xl"></div>
                      <span className="text-sm">rounded-2xl (16px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-1 rounded-3xl"></div>
                      <span className="text-sm">rounded-3xl (24px)</span>
                    </div>
                  </div>
                </div>

                {/* Shadows */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Shadows</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-xs rounded-lg"></div>
                      <span className="text-sm">shadow-xs</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-sm rounded-lg"></div>
                      <span className="text-sm">shadow-sm</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-md rounded-lg"></div>
                      <span className="text-sm">shadow-md</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-lg rounded-lg"></div>
                      <span className="text-sm">shadow-lg</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-xl rounded-lg"></div>
                      <span className="text-sm">shadow-xl</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-2xl rounded-lg"></div>
                      <span className="text-sm">shadow-2xl</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-elevated rounded-lg"></div>
                      <span className="text-sm">shadow-elevated</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paper shadow-glow rounded-lg"></div>
                      <span className="text-sm">shadow-glow</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spacing & Grid */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" />
                Spacing & Grid System
              </CardTitle>
              <CardDescription>
                Consistent spacing scale and grid utilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Spacing Scale */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Spacing Scale</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-xs (4px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-sm (8px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-md (16px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-lg (24px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-xl (32px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-2xl (48px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-3xl (64px)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-4 bg-accent-1"></div>
                      <span className="text-sm">spacing-4xl (96px)</span>
                    </div>
                  </div>
                </div>

                {/* Grid System */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Grid System</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="grid-12 gap-2 mb-2">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="h-4 bg-accent-1 rounded"></div>
                        ))}
                      </div>
                      <span className="text-sm">12-column grid</span>
                    </div>
                    <div>
                      <div className="grid-16 gap-2 mb-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="h-3 bg-accent-2 rounded"></div>
                        ))}
                      </div>
                      <span className="text-sm">16-column grid</span>
                    </div>
                    <div>
                      <div className="grid-20 gap-1 mb-2">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div key={i} className="h-3 bg-accent-3 rounded"></div>
                        ))}
                      </div>
                      <span className="text-sm">20-column grid</span>
                    </div>
                    <div>
                      <div className="grid-24 gap-1 mb-2">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div key={i} className="h-2 bg-neutral rounded"></div>
                        ))}
                      </div>
                      <span className="text-sm">24-column grid</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Container Widths */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Container className="h-5 w-5" />
                Container Widths
              </CardTitle>
              <CardDescription>
                Responsive container system with predefined widths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="container-xs bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-xs (320px)</span>
                </div>
                <div className="container-sm bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-sm (384px)</span>
                </div>
                <div className="container-md bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-md (448px)</span>
                </div>
                <div className="container-lg bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-lg (512px)</span>
                </div>
                <div className="container-xl bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-xl (576px)</span>
                </div>
                <div className="container-2xl bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-2xl (672px)</span>
                </div>
                <div className="container-3xl bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-3xl (768px)</span>
                </div>
                <div className="container-4xl bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-4xl (896px)</span>
                </div>
                <div className="container-5xl bg-paper border border-border rounded-lg p-4">
                  <span className="text-sm">container-5xl (1024px)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Component Examples
              </CardTitle>
              <CardDescription>
                Real-world component examples using design tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Buttons */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Buttons</h4>
                  <div className="space-y-3">
                    <Button className="w-full">Primary</Button>
                    <Button variant="secondary" className="w-full">Secondary</Button>
                    <Button variant="outline" className="w-full">Outline</Button>
                    <Button variant="ghost" className="w-full">Ghost</Button>
                    <Button variant="destructive" className="w-full">Destructive</Button>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Cards</h4>
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-sm text-text-secondary">Standard Card</div>
                      </CardContent>
                    </Card>
                    <Card className="card-elevated">
                      <CardContent className="p-4">
                        <div className="text-sm text-text-secondary">Elevated Card</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Financial Components */}
                <div>
                  <h4 className="text-lg font-semibold text-text mb-4">Financial</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-profit" />
                      <span className="money text-profit">+$1,234.56</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-loss" />
                      <span className="money text-loss">-$567.89</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-neutral" />
                      <span className="money text-neutral">$0.00</span>
                    </div>
                    <Input placeholder="Enter amount..." className="money" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Animations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Circle className="h-5 w-5" />
                Animations
              </CardTitle>
              <CardDescription>
                Smooth animations and transitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-paper border border-border rounded-lg animate-fade-in">
                  <div className="text-sm text-text-secondary">Fade In</div>
                </div>
                <div className="p-4 bg-paper border border-border rounded-lg animate-slide-in">
                  <div className="text-sm text-text-secondary">Slide In</div>
                </div>
                <div className="p-4 bg-paper border border-border rounded-lg animate-scale-in">
                  <div className="text-sm text-text-secondary">Scale In</div>
                </div>
                <div className="p-4 bg-paper border border-border rounded-lg animate-bounce-in">
                  <div className="text-sm text-text-secondary">Bounce In</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
