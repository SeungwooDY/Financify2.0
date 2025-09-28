"use client"

import { useState, useEffect } from "react"
import { StudentProfile, FinancialSnapshot, LoanRecommendation } from "@/lib/loans/types"
import { useStudentProfile } from "@/lib/loans/profile.store"
import { recommendLoans } from "@/lib/loans/ranker"
import { ProfileSheet } from "@/components/loans/ProfileSheet"
import { LoanCard } from "@/components/loans/LoanCard"
import { DetailDrawer } from "@/components/loans/DetailDrawer"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Skeleton } from "@/components/ui/Skeleton"
import { 
  GraduationCap, 
  ExternalLink, 
  Filter, 
  Star, 
  AlertCircle,
  Info,
  Settings
} from "lucide-react"

export default function LoansPage() {
  const { profile, setProfile, isLoaded } = useStudentProfile()
  const [showProfileSheet, setShowProfileSheet] = useState(false)
  const [recommendations, setRecommendations] = useState<LoanRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<LoanRecommendation | null>(null)
  const [showDetailDrawer, setShowDetailDrawer] = useState(false)
  const [filters, setFilters] = useState({
    fixedApr: false,
    schoolCertified: false,
    stateOnly: false,
    noCosigner: false
  })

  // Show profile sheet if no profile exists (optional)
  useEffect(() => {
    if (isLoaded && !profile) {
      // Don't force profile completion - make it optional
      console.log("No profile found, showing recommendations with default data")
    }
  }, [isLoaded, profile])

  // Load recommendations when profile changes or on initial load
  useEffect(() => {
    loadRecommendations()
  }, [profile])

  const loadRecommendations = async () => {
    setIsLoading(true)
    try {
      // Use profile if available, otherwise use default profile
      const profileToUse = profile || {
        school: "University of California",
        college_state: "CA",
        class_year: new Date().getFullYear() + 1,
        enrollment: "full_time" as const,
        residency: "us_citizen" as const,
        dependency_status: "dependent" as const,
        household_income_band: "60_100k" as const,
        consent_need_based: true
      }
      
      const recs = await recommendLoans(profileToUse)
      setRecommendations(recs)
    } catch (error) {
      console.error("Failed to load recommendations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleViewDetails = (recommendation: LoanRecommendation) => {
    setSelectedRecommendation(recommendation)
    setShowDetailDrawer(true)
  }

  const filteredRecommendations = recommendations.filter(rec => {
    const data = rec.product || rec.webResult
    if (!data) return false

    if (filters.fixedApr && !data.fixed_apr_range && !data.parsed_fixed_apr) return false
    if (filters.schoolCertified && !data.school_certified && !data.tags?.includes("school-certified")) return false
    if (filters.stateOnly && rec.webResult && !rec.webResult.source.includes(profile?.college_state?.toLowerCase() || "")) return false
    if (filters.noCosigner && data.requires_cosigner) return false

    return true
  })

  const federalLoans = filteredRecommendations.filter(rec => rec.product?.kind === "federal")
  const otherLoans = filteredRecommendations.filter(rec => !rec.product || rec.product.kind !== "federal")

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-paper border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-balance text-foreground">
                Student Loans
              </h1>
              <p className="text-pretty text-muted-foreground mt-2">
                Authoritative federal options first, plus state/private matches. Complete your profile for personalized recommendations.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowProfileSheet(true)}
                className="flex items-center space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mt-6 p-4 bg-muted/30 border border-border rounded-lg">
            <div className="flex items-start space-x-2">
              <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground">Informational only</p>
                <p className="text-muted-foreground">
                  Verify terms on provider site. We do not provide financial advice. 
                  Rates and limits vary by award year - see studentaid.gov for current federal loan information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filters</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.fixedApr ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ ...filters, fixedApr: !filters.fixedApr })}
            >
              Fixed APR
            </Button>
            <Button
              variant={filters.schoolCertified ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ ...filters, schoolCertified: !filters.schoolCertified })}
            >
              School Certified
            </Button>
            <Button
              variant={filters.stateOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ ...filters, stateOnly: !filters.stateOnly })}
            >
              State Only
            </Button>
            <Button
              variant={filters.noCosigner ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ ...filters, noCosigner: !filters.noCosigner })}
            >
              No Cosigner Required
            </Button>
          </div>
        </div>

        {/* Federal Loans Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-balance">Federal Loans (Recommended First)</h2>
            <Badge variant="secondary" className="text-xs">Best Terms</Badge>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <Skeleton className="h-8 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : federalLoans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {federalLoans.map((recommendation, index) => (
                <LoanCard
                  key={`federal-${index}`}
                  recommendation={recommendation}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Loading Federal Loans...</h3>
                <p className="text-muted-foreground">
                  Please wait while we load the latest federal loan information
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* State/Private Loans Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Star className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-bold text-balance">State & Private Matches</h2>
            <Badge variant="outline" className="text-xs">Based on Your Profile</Badge>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <Skeleton className="h-8 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : otherLoans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherLoans.map((recommendation, index) => (
                <LoanCard
                  key={`other-${index}`}
                  recommendation={recommendation}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Loading Additional Options...</h3>
                <p className="text-muted-foreground mb-4">
                  Searching for state and private loan options that match your profile
                </p>
                <Button onClick={() => setShowProfileSheet(true)} variant="outline">
                  Complete Profile for Better Matches
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Profile Sheet */}
      <ProfileSheet
        isOpen={showProfileSheet}
        onClose={() => setShowProfileSheet(false)}
        onSave={setProfile}
        initialProfile={profile}
      />

      {/* Detail Drawer */}
      <DetailDrawer
        isOpen={showDetailDrawer}
        onClose={() => setShowDetailDrawer(false)}
        recommendation={selectedRecommendation}
      />
    </div>
  )
}
