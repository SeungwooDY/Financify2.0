import { NextRequest, NextResponse } from "next/server"
import { searchLoans as searchSerpAPI } from "@/lib/loans/providers/serpapi"
import { searchLoans as searchBing } from "@/lib/loans/providers/bing"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Build search query from parameters
    const queryParts: string[] = ["student loan"]
    
    const state = searchParams.get("state")
    const school = searchParams.get("school")
    const residency = searchParams.get("residency")
    const enrollment = searchParams.get("enrollment")
    const consentNeedBased = searchParams.get("consent_need_based") === "true"
    
    if (state) queryParts.push(state)
    if (school) queryParts.push(school)
    if (residency === "intl") queryParts.push("international student")
    if (consentNeedBased) queryParts.push("need-based low income FAFSA")
    
    queryParts.push("school-certified fixed APR")
    
    const query = queryParts.join(" ")
    
    // Try SerpAPI first, then Bing as fallback
    let results = await searchSerpAPI(query)
    
    if (results.length === 0) {
      results = await searchBing(query)
    }
    
    // If no results from either API, return mock data
    if (results.length === 0) {
      results = [
        {
          title: "State Student Loan Program",
          url: "https://example.edu/financial-aid/loans",
          source: "example.edu",
          snippet: "State-sponsored student loans with competitive rates and school-certified options. Fixed APR starting at 4.5%. No cosigner required for qualifying students.",
          tags: ["school-certified", "fixed-apr", "no-cosigner"],
          deadline: null,
          parsed_fixed_apr: [4.5, 6.8] as [number, number],
          parsed_variable_apr: null
        },
        {
          title: "Private Student Loan Options",
          url: "https://example-lender.com/student-loans",
          source: "example-lender.com",
          snippet: "Private student loans with flexible repayment options. Variable APR from 3.2% to 8.9%. Cosigner may be required for undergraduate students.",
          tags: ["variable-apr", "cosigner-required"],
          deadline: "March 15, 2024",
          parsed_fixed_apr: null,
          parsed_variable_apr: [3.2, 8.9] as [number, number]
        }
      ]
    }
    
    return NextResponse.json(results)
    
  } catch (error) {
    console.error("Loan search API error:", error)
    
    // Return mock data on error
    const mockResults = [
      {
        title: "State Student Loan Program",
        url: "https://example.edu/financial-aid/loans",
        source: "example.edu",
        snippet: "State-sponsored student loans with competitive rates and school-certified options. Fixed APR starting at 4.5%. No cosigner required for qualifying students.",
        tags: ["school-certified", "fixed-apr", "no-cosigner"],
        deadline: null,
        parsed_fixed_apr: [4.5, 6.8] as [number, number],
        parsed_variable_apr: null
      },
      {
        title: "Private Student Loan Options",
        url: "https://example-lender.com/student-loans",
        source: "example-lender.com",
        snippet: "Private student loans with flexible repayment options. Variable APR from 3.2% to 8.9%. Cosigner may be required for undergraduate students.",
        tags: ["variable-apr", "cosigner-required"],
        deadline: "March 15, 2024",
        parsed_fixed_apr: null,
        parsed_variable_apr: [3.2, 8.9] as [number, number]
      }
    ]
    
    return NextResponse.json(mockResults)
  }
}
