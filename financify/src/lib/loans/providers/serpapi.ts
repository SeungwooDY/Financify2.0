import { WebLoanResult } from "../types"

const ALLOWED_DOMAINS = [
  "*.edu",
  "studentaid.gov",
  "bigfuture.collegeboard.org",
  "cfpb.gov",
  "credible.com",
  "lendingtree.com",
  "nerdwallet.com",
  "bankrate.com",
  "sofi.com",
  "salliemae.com",
  "discover.com",
  "citizensbank.com"
]

export async function searchLoans(query: string): Promise<WebLoanResult[]> {
  const apiKey = process.env.SERPAPI_KEY
  if (!apiKey) {
    console.warn("SERPAPI_KEY not found, skipping web search")
    return []
  }

  try {
    const searchQuery = `${query} student loan site:edu OR site:studentaid.gov OR site:bigfuture.collegeboard.org OR site:cfpb.gov OR site:credible.com OR site:lendingtree.com OR site:nerdwallet.com OR site:bankrate.com OR site:sofi.com OR site:salliemae.com OR site:discover.com OR site:citizensbank.com`
    
    const response = await fetch(
      `https://serpapi.com/search?api_key=${apiKey}&q=${encodeURIComponent(searchQuery)}&engine=google&num=20`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      throw new Error(`SerpAPI request failed: ${response.status}`)
    }

    const data = await response.json()
    const results = data.organic_results || []

    return results
      .filter((result: any) => {
        const url = result.link || ""
        return ALLOWED_DOMAINS.some(domain => {
          if (domain.startsWith("*.")) {
            return url.includes(domain.slice(2))
          }
          return url.includes(domain)
        })
      })
      .map((result: any) => ({
        title: result.title || "",
        url: result.link || "",
        source: new URL(result.link || "").hostname,
        snippet: result.snippet || "",
        tags: extractTags(result.snippet || ""),
        deadline: extractDeadline(result.snippet || ""),
        parsed_fixed_apr: extractAPR(result.snippet || "", "fixed"),
        parsed_variable_apr: extractAPR(result.snippet || "", "variable")
      }))
      .slice(0, 10) // Limit to top 10 results

  } catch (error) {
    console.error("SerpAPI search failed:", error)
    return []
  }
}

function extractTags(snippet: string): string[] {
  const tags: string[] = []
  const lowerSnippet = snippet.toLowerCase()
  
  if (lowerSnippet.includes("school-certified") || lowerSnippet.includes("school certified")) {
    tags.push("school-certified")
  }
  if (lowerSnippet.includes("fixed apr") || lowerSnippet.includes("fixed rate")) {
    tags.push("fixed-apr")
  }
  if (lowerSnippet.includes("need-based") || lowerSnippet.includes("fafsa")) {
    tags.push("need-based")
  }
  if (lowerSnippet.includes("cosigner")) {
    tags.push("cosigner-required")
  }
  if (lowerSnippet.includes("no cosigner") || lowerSnippet.includes("no cosigner required")) {
    tags.push("no-cosigner")
  }
  
  return tags
}

function extractDeadline(snippet: string): string | null {
  const deadlineMatch = snippet.match(/(?:deadline|due|apply by|closes?)\s*:?\s*([a-z]+\s+\d{1,2},?\s+\d{4}|[a-z]+\s+\d{1,2})/i)
  return deadlineMatch ? deadlineMatch[1] : null
}

function extractAPR(snippet: string, type: "fixed" | "variable"): [number, number] | null {
  const pattern = type === "fixed" 
    ? /(?:fixed|fixed rate)\s*(?:apr|apy)?\s*:?\s*(\d+\.?\d*)\s*(?:%|percent)?(?:\s*-\s*(\d+\.?\d*)\s*(?:%|percent)?)?/i
    : /(?:variable|variable rate)\s*(?:apr|apy)?\s*:?\s*(\d+\.?\d*)\s*(?:%|percent)?(?:\s*-\s*(\d+\.?\d*)\s*(?:%|percent)?)?/i
  
  const match = snippet.match(pattern)
  if (!match) return null
  
  const min = parseFloat(match[1])
  const max = match[2] ? parseFloat(match[2]) : min
  
  return [min, max]
}
