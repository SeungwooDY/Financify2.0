"use client"

import { useState } from "react"
import { LoanProduct, WebLoanResult, LoanRecommendation } from "@/lib/loans/types"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink, Star, AlertCircle, CheckCircle, Info } from "lucide-react"

interface LoanCardProps {
  recommendation: LoanRecommendation
  onViewDetails: (recommendation: LoanRecommendation) => void
}

export function LoanCard({ recommendation, onViewDetails }: LoanCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  
  const { product, webResult, score, reasons, blockers } = recommendation
  const isFederal = !!product
  const data = product || webResult
  
  if (!data) return null

  const handleSave = () => {
    setIsSaved(true)
    // In a real app, this would save to user's saved loans
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    // In a real app, this would hide this recommendation
  }

  if (isDismissed) return null

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return "text-green-500"
    if (score >= 0.6) return "text-yellow-500"
    return "text-orange-500"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 0.8) return "Excellent Match"
    if (score >= 0.6) return "Good Match"
    return "Consider"
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-balance text-lg leading-tight">
              {data.name}
            </CardTitle>
            <CardDescription className="text-pretty mt-1">
              {data.provider || data.source}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2 ml-2">
            <div className={`text-sm font-medium ${getScoreColor(score)}`}>
              {getScoreLabel(score)}
            </div>
            <Star className={`h-4 w-4 ${getScoreColor(score)}`} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* APR Information */}
        {(data.fixed_apr_range || data.variable_apr_range || data.parsed_fixed_apr || data.parsed_variable_apr) && (
          <div className="mb-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">Interest Rates</div>
            <div className="space-y-1">
              {(data.fixed_apr_range || data.parsed_fixed_apr) && (
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">Fixed APR</Badge>
                  <span className="text-sm tabular-nums">
                    {(data.fixed_apr_range || data.parsed_fixed_apr)![0]}% - {(data.fixed_apr_range || data.parsed_fixed_apr)![1]}%
                  </span>
                </div>
              )}
              {(data.variable_apr_range || data.parsed_variable_apr) && (
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Variable APR</Badge>
                  <span className="text-sm tabular-nums">
                    {(data.variable_apr_range || data.parsed_variable_apr)![0]}% - {(data.variable_apr_range || data.parsed_variable_apr)![1]}%
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {data.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag.replace(/-/g, " ")}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Reasons */}
        {reasons.length > 0 && (
          <div className="mb-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">Why this matches</div>
            <ul className="space-y-1">
              {reasons.slice(0, 3).map((reason, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-pretty text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Blockers */}
        {blockers.length > 0 && (
          <div className="mb-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">Requirements</div>
            <ul className="space-y-1">
              {blockers.slice(0, 2).map((blocker, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <AlertCircle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-pretty text-foreground">{blocker}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deadline */}
        {data.deadline && (
          <div className="mb-4 p-2 bg-muted/30 rounded-md">
            <div className="flex items-center space-x-2 text-sm">
              <Info className="h-4 w-4 text-orange-500" />
              <span className="font-medium text-foreground">Deadline:</span>
              <span className="text-foreground">{data.deadline}</span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto pt-4 space-y-2">
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onViewDetails(recommendation)}
              className="flex-1"
            >
              View Details
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.open(data.url, "_blank")}
              className="flex items-center space-x-1"
            >
              <ExternalLink className="h-3 w-3" />
              <span>Visit Site</span>
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleSave}
              disabled={isSaved}
              className="flex-1"
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleDismiss}
              className="flex-1"
            >
              Dismiss
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
