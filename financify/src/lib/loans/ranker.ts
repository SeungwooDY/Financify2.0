import { StudentProfile, FinancialSnapshot, LoanProduct, WebLoanResult, LoanRecommendation } from "./types"
import federalCatalog from "./catalog.federal.json"

export async function recommendLoans(
  profile: StudentProfile, 
  snapshot?: FinancialSnapshot
): Promise<LoanRecommendation[]> {
  const recommendations: LoanRecommendation[] = []

  // 1. Process Federal Loans
  const federalLoans = federalCatalog as LoanProduct[]
  
  for (const loan of federalLoans) {
    const { score, reasons, blockers } = evaluateFederalLoan(loan, profile, snapshot)
    
    if (score > 0) {
      recommendations.push({
        product: loan,
        score,
        reasons,
        blockers
      })
    }
  }

  // 2. Fetch and process web search results
  try {
    const webResults = await fetchWebResults(profile)
    
    for (const result of webResults) {
      const { score, reasons, blockers } = evaluateWebResult(result, profile, snapshot)
      
      if (score > 0) {
        recommendations.push({
          webResult: result,
          score,
          reasons,
          blockers
        })
      }
    }
  } catch (error) {
    console.warn("Failed to fetch web results:", error)
  }

  // 3. Sort by score (highest first)
  return recommendations.sort((a, b) => b.score - a.score)
}

function evaluateFederalLoan(
  loan: LoanProduct, 
  profile: StudentProfile, 
  snapshot?: FinancialSnapshot
): { score: number; reasons: string[]; blockers: string[] } {
  let score = 0
  const reasons: string[] = []
  const blockers: string[] = []

  // Base federal loan score
  score = 0.8
  reasons.push("Federal loans offer the best terms and protections")

  // Check eligibility based on loan type
  switch (loan.id) {
    case "direct_subsidized":
      if (profile.enrollment === "part_time") {
        blockers.push("Must be enrolled at least half-time")
        score = 0
      } else {
        reasons.push("Interest paid by government while in school")
        
        if (profile.consent_need_based && profile.household_income_band && 
            ["lt_30k", "30_60k"].includes(profile.household_income_band)) {
          score += 0.2
          reasons.push("Strong need-based eligibility based on income")
        } else if (profile.consent_need_based) {
          reasons.push("Check FAFSA Student Aid Index for need-based eligibility")
        } else {
          blockers.push("Must complete FAFSA to determine need-based eligibility")
        }
      }
      break

    case "direct_unsubsidized":
      if (profile.enrollment === "part_time") {
        blockers.push("Must be enrolled at least half-time")
        score = 0
      } else {
        reasons.push("No financial need requirement")
        reasons.push("Available to undergraduate and graduate students")
      }
      break

    case "direct_plus_parent":
      if (profile.dependency_status !== "dependent") {
        blockers.push("Only available to dependent students")
        score = 0
      } else {
        reasons.push("Parent borrower option for dependent students")
        reasons.push("Credit check required")
      }
      break

    case "direct_plus_grad":
      if (profile.class_year && profile.class_year < 2024) {
        // Assume undergraduate if class year suggests it
        blockers.push("Only available to graduate students")
        score = 0
      } else {
        reasons.push("Graduate student loan option")
        reasons.push("Credit check required")
      }
      break
  }

  // FAFSA requirement
  if (score > 0) {
    reasons.push("Requires FAFSA completion")
  }

  return { score, reasons, blockers }
}

function evaluateWebResult(
  result: WebLoanResult, 
  profile: StudentProfile, 
  snapshot?: FinancialSnapshot
): { score: number; reasons: string[]; blockers: string[] } {
  let score = 0.3 // Base score for web results
  const reasons: string[] = []
  const blockers: string[] = []

  // State matching bonus
  if (profile.college_state && result.source.includes(profile.college_state.toLowerCase())) {
    score += 0.2
    reasons.push(`State-specific option for ${profile.college_state}`)
  }

  // School-certified bonus
  if (result.tags?.includes("school-certified")) {
    score += 0.15
    reasons.push("School-certified lender")
  }

  // Fixed APR bonus
  if (result.tags?.includes("fixed-apr") || result.parsed_fixed_apr) {
    score += 0.15
    reasons.push("Fixed APR available")
  } else if (result.parsed_variable_apr) {
    score -= 0.05
    blockers.push("Only variable APR available")
  }

  // Need-based matching
  if (profile.consent_need_based && result.tags?.includes("need-based")) {
    score += 0.1
    reasons.push("Need-based options available")
  }

  // Cosigner requirements
  if (result.tags?.includes("cosigner-required")) {
    blockers.push("Cosigner required")
  } else if (result.tags?.includes("no-cosigner")) {
    reasons.push("No cosigner required")
  }

  // Deadline urgency
  if (result.deadline) {
    const deadlineDate = new Date(result.deadline)
    const now = new Date()
    const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysUntilDeadline > 0 && daysUntilDeadline <= 30) {
      score += 0.1
      reasons.push(`Application deadline: ${result.deadline}`)
    }
  }

  // Fees penalty
  if (result.snippet?.toLowerCase().includes("fee")) {
    score -= 0.05
    blockers.push("May have additional fees")
  }

  return { score, reasons, blockers }
}

async function fetchWebResults(profile: StudentProfile): Promise<WebLoanResult[]> {
  try {
    const query = buildSearchQuery(profile)
    const response = await fetch(`/api/loans/search?${new URLSearchParams(query)}`)
    
    if (!response.ok) {
      throw new Error(`Search API failed: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch web results:", error)
    return []
  }
}

function buildSearchQuery(profile: StudentProfile): Record<string, string> {
  const query: Record<string, string> = {}
  
  if (profile.college_state) query.state = profile.college_state
  if (profile.school) query.school = profile.school
  if (profile.residency) query.residency = profile.residency
  if (profile.enrollment) query.enrollment = profile.enrollment
  if (profile.consent_need_based) query.consent_need_based = "true"
  
  return query
}
