# Student Loans Feature

This feature provides intelligent loan recommendations based on student profiles and financial data.

## Setup

### Environment Variables

Add these optional environment variables to your `.env.local`:

```bash
# Optional: For web search functionality
SERPAPI_KEY=your_serpapi_key_here
BING_SEARCH_KEY=your_bing_search_key_here
```

### API Keys

- **SERPAPI_KEY**: Get from [SerpAPI](https://serpapi.com/) for Google search results
- **BING_SEARCH_KEY**: Get from [Azure Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/bing-web-search-api/) for Bing search results

If neither key is provided, the system will show federal loans and mock state/private options.

## Query Building Strategy

The search query is built dynamically based on the student profile:

```typescript
const queryParts = ["student loan"]
if (state) queryParts.push(state)
if (school) queryParts.push(school)
if (residency === "intl") queryParts.push("international student")
if (consentNeedBased) queryParts.push("need-based low income FAFSA")
queryParts.push("school-certified fixed APR")
```

This creates focused queries like:
- "student loan CA University of California need-based low income FAFSA school-certified fixed APR"
- "student loan international student school-certified fixed APR"

## Domain Filtering

Web search results are filtered to only include trusted domains:
- `*.edu` (educational institutions)
- `studentaid.gov` (official federal aid site)
- `bigfuture.collegeboard.org` (College Board resources)
- `cfpb.gov` (Consumer Financial Protection Bureau)
- `credible.com`, `lendingtree.com`, `nerdwallet.com` (reputable comparison sites)
- Major lenders: `sofi.com`, `salliemae.com`, `discover.com`, `citizensbank.com`

## Scoring Algorithm

### Federal Loans (Base Score: 0.8)
- **Direct Subsidized**: +0.2 if income ≤$60k and need-based consent
- **Direct Unsubsidized**: No additional scoring
- **Direct PLUS**: Parent/Grad specific eligibility checks

### Web Results (Base Score: 0.3)
- **State Match**: +0.2 if domain matches student's state
- **School Certified**: +0.15 if "school-certified" in snippet
- **Fixed APR**: +0.15 if fixed rates available
- **Variable APR Only**: -0.05 penalty
- **Need-based Match**: +0.1 if consent given and "need-based" found
- **No Cosigner**: +0.1 bonus
- **Deadline Urgency**: +0.1 if deadline <30 days
- **Fees**: -0.05 penalty if fees mentioned

## Data Flow

1. **Profile Collection**: Student fills out profile form (stored in localStorage)
2. **Federal Analysis**: Federal catalog analyzed for eligibility
3. **Web Search**: API route calls search providers with profile-based query
4. **Ranking**: All results scored and ranked by relevance
5. **Filtering**: Client-side filters applied (Fixed APR, School Certified, etc.)
6. **Display**: Results shown in two sections (Federal first, then State/Private)

## Error Handling

- **No API Keys**: Falls back to mock data
- **API Failures**: Returns mock data with error logging
- **Network Issues**: Graceful degradation with user notification
- **Invalid Profile**: Prompts user to complete profile

## Privacy & Security

- **No Client Secrets**: All API keys server-side only
- **Local Storage**: Profile data stored locally, not transmitted
- **No Financial Data**: Only uses income bands, not actual amounts
- **Consent Required**: Financial information only used with explicit consent

## Future Enhancements

- Real-time rate updates
- Application status tracking
- Integration with FAFSA API
- Personalized repayment calculators
- Loan comparison tools
