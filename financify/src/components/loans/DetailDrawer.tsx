"use client"

import { LoanRecommendation } from "@/lib/loans/types"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink, X, CheckCircle, AlertCircle, Info, FileText } from "lucide-react"

interface DetailDrawerProps {
  isOpen: boolean
  onClose: () => void
  recommendation: LoanRecommendation | null
}

export function DetailDrawer({ isOpen, onClose, recommendation }: DetailDrawerProps) {
  if (!isOpen || !recommendation) return null

  const { product, webResult, score, reasons, blockers } = recommendation
  const isFederal = !!product
  const data = product || webResult

  if (!data) return null

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-balance text-xl">{data.name}</CardTitle>
            <CardDescription className="text-pretty">
              {data.provider || data.source}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <div className={`text-lg font-semibold ${getScoreColor(score)}`}>
              {getScoreLabel(score)}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* APR Information */}
          {(data.fixed_apr_range || data.variable_apr_range || data.parsed_fixed_apr || data.parsed_variable_apr) && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Interest Rates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(data.fixed_apr_range || data.parsed_fixed_apr) && (
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">Fixed APR</Badge>
                    </div>
                    <div className="text-2xl font-bold tabular-nums">
                      {(data.fixed_apr_range || data.parsed_fixed_apr)![0]}% - {(data.fixed_apr_range || data.parsed_fixed_apr)![1]}%
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Interest rate stays the same throughout the loan term
                    </p>
                  </div>
                )}
                {(data.variable_apr_range || data.parsed_variable_apr) && (
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">Variable APR</Badge>
                    </div>
                    <div className="text-2xl font-bold tabular-nums">
                      {(data.variable_apr_range || data.parsed_variable_apr)![0]}% - {(data.variable_apr_range || data.parsed_variable_apr)![1]}%
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Interest rate may change over time
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features and Tags */}
          {data.tags && data.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Why This Matches */}
          {reasons.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Why This Matches Your Profile</h3>
              <ul className="space-y-2">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-pretty">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {blockers.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements & Considerations</h3>
              <ul className="space-y-2">
                {blockers.map((blocker, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-pretty">{blocker}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Information */}
          {data.notes && data.notes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
              <ul className="space-y-2">
                {data.notes.map((note, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-pretty">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fees */}
          {data.fees && data.fees.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Fees</h3>
              <ul className="space-y-1">
                {data.fees.map((fee, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-sm">•</span>
                    <span className="text-sm tabular-nums">{fee}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deferment Options */}
          {data.deferment_options && data.deferment_options.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Deferment Options</h3>
              <div className="flex flex-wrap gap-2">
                {data.deferment_options.map((option, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {option.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* What You'll Need */}
          <div>
            <h3 className="text-lg font-semibold mb-3">What You'll Need to Apply</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Required Documents</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>FAFSA completion (if federal loan)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Enrollment verification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Social Security Number</span>
                  </li>
                  {data.requires_cosigner && (
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Cosigner information</span>
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Next Steps</h4>
                <ol className="space-y-1 text-sm list-decimal list-inside">
                  <li>Complete FAFSA (if not already done)</li>
                  <li>Contact your school's financial aid office</li>
                  <li>Review loan terms carefully</li>
                  <li>Submit application before deadline</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Deadline Alert */}
          {data.deadline && (
            <div className="p-4 bg-muted/30 border border-border rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="font-medium text-foreground">Application Deadline</div>
                  <div className="text-sm text-foreground">{data.deadline}</div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => window.open(data.url, "_blank")} className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>Visit Provider Site</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
