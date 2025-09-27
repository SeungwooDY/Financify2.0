import * as React from "react"
import { Layout, Container } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Money } from "@/components/ui/Money"
import { Grid, GridItem } from "@/components/ui/Grid"
import { Chart } from "@/components/charts/Chart"
import { Table } from "@/components/ui/Table"
import type { TableColumn } from "@/lib/types"

// Sample data for demonstration
const sampleTransactions = [
  { id: "1", description: "Grocery Store", amount: -85.50, category: "Food", date: "2024-01-15" },
  { id: "2", description: "Salary", amount: 3500.00, category: "Income", date: "2024-01-14" },
  { id: "3", description: "Gas Station", amount: -45.20, category: "Transportation", date: "2024-01-13" },
  { id: "4", description: "Coffee Shop", amount: -12.75, category: "Food", date: "2024-01-12" },
  { id: "5", description: "Rent", amount: -1200.00, category: "Housing", date: "2024-01-01" },
]

const sampleChartData = [
  { name: "Jan", income: 3500, expenses: 2800 },
  { name: "Feb", income: 3500, expenses: 3200 },
  { name: "Mar", income: 3500, expenses: 2900 },
  { name: "Apr", income: 3500, expenses: 3100 },
  { name: "May", income: 3500, expenses: 3000 },
  { name: "Jun", income: 3500, expenses: 2900 },
]

const samplePieData = [
  { name: "Food", value: 400, color: "#3b82f6" },
  { name: "Transportation", value: 300, color: "#ef4444" },
  { name: "Housing", value: 300, color: "#10b981" },
  { name: "Entertainment", value: 200, color: "#f59e0b" },
]

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState("month")

  const totalIncome = sampleTransactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = Math.abs(sampleTransactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0))

  const netIncome = totalIncome - totalExpenses

  const transactionColumns: TableColumn<typeof sampleTransactions[0]>[] = [
    {
      key: "description",
      title: "Description",
      sortable: true,
    },
    {
      key: "amount",
      title: "Amount",
      sortable: true,
      render: (value) => (
        <Money 
          amount={value} 
          variant={value > 0 ? "default" : "small"}
          className={value > 0 ? "text-profit" : "text-loss"}
        />
      ),
    },
    {
      key: "category",
      title: "Category",
      sortable: true,
    },
    {
      key: "date",
      title: "Date",
      sortable: true,
    },
  ]

  return (
    <Layout>
      <Container maxWidth="full" padding="lg">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
        </div>

        {/* Period Selector */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {["week", "month", "quarter", "year"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <Grid columns={4} gap="lg" className="mb-8">
          <GridItem span={1}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Money amount={totalIncome} variant="large" className="text-profit" />
                <p className="text-xs text-muted-foreground mt-1">
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>
          </GridItem>

          <GridItem span={1}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Money amount={totalExpenses} variant="large" className="text-loss" />
                <p className="text-xs text-muted-foreground mt-1">
                  -2.1% from last month
                </p>
              </CardContent>
            </Card>
          </GridItem>

          <GridItem span={1}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Net Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Money amount={netIncome} variant="large" className={netIncome > 0 ? "text-profit" : "text-loss"} />
                <p className="text-xs text-muted-foreground mt-1">
                  {netIncome > 0 ? "Positive cash flow" : "Negative cash flow"}
                </p>
              </CardContent>
            </Card>
          </GridItem>

          <GridItem span={1}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Savings Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Money 
                  amount={(netIncome / totalIncome) * 100} 
                  type="percentage" 
                  variant="large" 
                  className="text-profit"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Target: 20%
                </p>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>

        {/* Charts Row */}
        <Grid columns={2} gap="lg" className="mb-8">
          <GridItem span={1}>
            <Card>
              <CardHeader>
                <CardTitle>Income vs Expenses</CardTitle>
                <CardDescription>
                  Monthly comparison over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Chart
                  data={sampleChartData}
                  type="line"
                  height={300}
                  colors={["#10b981", "#ef4444"]}
                  xAxisKey="name"
                />
              </CardContent>
            </Card>
          </GridItem>

          <GridItem span={1}>
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
                <CardDescription>
                  Breakdown of spending by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Chart
                  data={samplePieData}
                  type="pie"
                  height={300}
                  colors={samplePieData.map(d => d.color)}
                  valueKey="value"
                  nameKey="name"
                />
              </CardContent>
            </Card>
          </GridItem>
        </Grid>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Your latest financial activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table
              data={sampleTransactions}
              columns={transactionColumns}
              hoverable
              striped
            />
          </CardContent>
        </Card>
      </Container>
    </Layout>
  )
}

export default Dashboard
