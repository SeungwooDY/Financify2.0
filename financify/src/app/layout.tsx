import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { AppShell } from "@/components/layout/AppShell"
import { Suspense } from "react"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Financify - Personal Finance Management",
  description: "Manage your finances with ease using Financify's comprehensive tools",
  keywords: ["finance", "budget", "transactions", "money management"],
  authors: [{ name: "Financify Team" }],
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <AppShell>
              {children}
            </AppShell>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}