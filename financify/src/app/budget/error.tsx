"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Heading, Text } from "@/components/ui/typography"
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function BudgetError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Budget page error:', error)
  }, [error])

  return (
    <div className="container-5xl py-8">
      <Card className="card-standard">
        <CardContent className="p-12 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <Heading as="h1" size="2xl" className="mb-2">Error Loading Budget</Heading>
          <Text color="muted" className="mb-6">
            We couldn&apos;t load your budget data. This might be due to a network issue or server problem.
          </Text>
          <div className="space-x-4">
            <Button onClick={reset} className="inline-flex items-center">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
