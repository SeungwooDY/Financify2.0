import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { AppShellWrapper } from "@/components/layout/AppShellWrapper"
import { RouteLogger } from "@/components/RouteLogger"

export const dynamic = 'force-dynamic'

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
          <RouteLogger />
          <AppShellWrapper>
            {children}
          </AppShellWrapper>
        </Providers>
      </body>
    </html>
  )
}