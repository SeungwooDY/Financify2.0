export type StudentProfile = {
  school?: string;
  college_state?: string;
  class_year?: number;
  major?: string;
  gpa?: number;
  enrollment: "full_time" | "part_time";
  residency: "us_citizen" | "permanent_resident" | "intl";
  dependency_status?: "dependent" | "independent";
  household_income_band?: "lt_30k" | "30_60k" | "60_100k" | "gt_100k";
  first_gen?: boolean;
  consent_need_based?: boolean;
}

export type FinancialSnapshot = {
  month: string;
  total_income_cents: number;
  total_expenses_cents: number;
  savings_rate_pct?: number;
  budget_targets?: Record<string, number>;
}

export type LoanProduct = {
  id: string;
  kind: "federal" | "state" | "private";
  name: string;
  provider: string;
  url: string;
  tags?: string[];
  fixed_apr_range?: [number, number] | null;
  variable_apr_range?: [number, number] | null;
  requires_cosigner?: boolean;
  school_certified?: boolean;
  deferment_options?: string[];
  fees?: string[];
  deadline?: string | null;
  notes?: string[];
  rate_varies?: boolean;
}

export type WebLoanResult = {
  title: string;
  url: string;
  source: string;
  snippet?: string;
  parsed_fixed_apr?: [number, number] | null;
  parsed_variable_apr?: [number, number] | null;
  tags?: string[];
  deadline?: string | null;
}

export type FitResult = {
  score: number;
  reasons: string[];
  blockers: string[];
}

export type LoanRecommendation = {
  product?: LoanProduct;
  webResult?: WebLoanResult;
  score: number;
  reasons: string[];
  blockers: string[];
}
