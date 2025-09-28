(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterTransactions",
    ()=>filterTransactions,
    "generateCopilotAdvice",
    ()=>generateCopilotAdvice,
    "generateMonthMetrics",
    ()=>generateMonthMetrics,
    "generateStudentTransactions",
    ()=>generateStudentTransactions,
    "mockDataStore",
    ()=>mockDataStore,
    "paginateResults",
    ()=>paginateResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
function generateStudentTransactions(month) {
    const [year, monthNum] = month.split('-').map(Number);
    const endDate = new Date(year, monthNum, 0);
    const daysInMonth = endDate.getDate();
    const transactions = [];
    let transactionId = 1;
    // Helper to create a transaction
    const createTransaction = function(date, description, amountCents, category, type, paymentMethod, merchant) {
        let tags = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [];
        return {
            id: "txn_".concat(transactionId++),
            date: date.toISOString(),
            description,
            amount: {
                amount: amountCents,
                currency: "USD",
                symbol: "$"
            },
            category,
            type,
            status: Math.random() > 0.1 ? "cleared" : "pending",
            paymentMethod,
            accountId: "acc_student_checking",
            merchant,
            location: Math.random() > 0.7 ? {
                name: merchant || "Unknown Location",
                address: "123 University Ave, College Town, ST 12345"
            } : undefined,
            tags,
            notes: Math.random() > 0.8 ? "Student transaction" : undefined,
            metadata: {
                source: "mock_data",
                generated: true
            },
            createdAt: date.toISOString(),
            updatedAt: date.toISOString()
        };
    };
    // Generate transactions for each day
    for(let day = 1; day <= daysInMonth; day++){
        const currentDate = new Date(year, monthNum - 1, day);
        const dayOfWeek = currentDate.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        // Income transactions (bi-weekly paychecks, occasional refunds)
        if (day === 1 || day === 15) {
            // Bi-weekly paycheck from part-time job
            transactions.push(createTransaction(currentDate, "Part-time job paycheck", 120000, "income", "income", "bank_transfer", "Campus Dining Services"));
        }
        if (day === 3 && Math.random() > 0.7) {
            // Occasional refund
            transactions.push(createTransaction(currentDate, "Textbook refund", Math.floor(Math.random() * 50000) + 20000, "refund", "income", "bank_transfer", "University Bookstore"));
        }
        // Daily expenses
        const dailyExpenseCount = isWeekend ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 2) + 1 // 1-2 on weekdays
        ;
        for(let i = 0; i < dailyExpenseCount; i++){
            const expenseTypes = getDailyExpenses(day, isWeekend);
            const expense = expenseTypes[Math.floor(Math.random() * expenseTypes.length)];
            transactions.push(createTransaction(currentDate, expense.description, expense.amount, expense.category, "expense", expense.paymentMethod, expense.merchant, expense.tags));
        }
        // Weekly recurring expenses
        if (day % 7 === 0) {
            // Weekly grocery shopping
            transactions.push(createTransaction(currentDate, "Weekly grocery shopping", Math.floor(Math.random() * 8000) + 4000, "food", "expense", "debit_card", "Campus Market", [
                "groceries",
                "weekly"
            ]));
        }
        // Monthly recurring expenses
        if (day === 1) {
            // Rent
            transactions.push(createTransaction(currentDate, "Monthly rent", 120000, "housing", "expense", "bank_transfer", "University Housing", [
                "rent",
                "monthly"
            ]));
            // Utilities
            transactions.push(createTransaction(currentDate, "Utilities", Math.floor(Math.random() * 3000) + 2000, "utilities", "expense", "debit_card", "Campus Utilities", [
                "utilities",
                "monthly"
            ]));
        }
        if (day === 5) {
            // Tuition payment (if applicable)
            if (Math.random() > 0.3) {
                transactions.push(createTransaction(currentDate, "Tuition payment", Math.floor(Math.random() * 200000) + 300000, "tuition", "expense", "bank_transfer", "University Bursar", [
                    "tuition",
                    "education"
                ]));
            }
        }
    }
    return transactions.sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime());
}
/**
 * Get daily expense patterns based on day and weekend status
 */ function getDailyExpenses(day, isWeekend) {
    const baseExpenses = [
        // Food expenses
        {
            description: "Coffee",
            amount: Math.floor(Math.random() * 300) + 200,
            category: "food",
            paymentMethod: "debit_card",
            merchant: "Campus Coffee Shop",
            tags: [
                "coffee",
                "daily"
            ]
        },
        {
            description: "Lunch",
            amount: Math.floor(Math.random() * 800) + 500,
            category: "food",
            paymentMethod: "debit_card",
            merchant: "Campus Dining Hall",
            tags: [
                "lunch",
                "daily"
            ]
        },
        {
            description: "Dinner",
            amount: Math.floor(Math.random() * 1000) + 800,
            category: "food",
            paymentMethod: "debit_card",
            merchant: "Campus Dining Hall",
            tags: [
                "dinner",
                "daily"
            ]
        },
        {
            description: "Snacks",
            amount: Math.floor(Math.random() * 400) + 200,
            category: "food",
            paymentMethod: "debit_card",
            merchant: "Campus Store",
            tags: [
                "snacks",
                "daily"
            ]
        },
        // Transportation
        {
            description: "Bus fare",
            amount: 250,
            category: "transportation",
            paymentMethod: "mobile_payment",
            merchant: "City Transit",
            tags: [
                "transport",
                "daily"
            ]
        },
        {
            description: "Uber ride",
            amount: Math.floor(Math.random() * 1500) + 800,
            category: "transportation",
            paymentMethod: "mobile_payment",
            merchant: "Uber",
            tags: [
                "transport",
                "ride_share"
            ]
        },
        // Entertainment
        {
            description: "Movie ticket",
            amount: Math.floor(Math.random() * 500) + 800,
            category: "entertainment",
            paymentMethod: "debit_card",
            merchant: "Campus Theater",
            tags: [
                "entertainment",
                "movies"
            ]
        },
        {
            description: "Streaming subscription",
            amount: 1500,
            category: "entertainment",
            paymentMethod: "credit_card",
            merchant: "Netflix",
            tags: [
                "entertainment",
                "subscription"
            ]
        },
        // Shopping
        {
            description: "Textbook",
            amount: Math.floor(Math.random() * 15000) + 5000,
            category: "books",
            paymentMethod: "credit_card",
            merchant: "University Bookstore",
            tags: [
                "books",
                "education"
            ]
        },
        {
            description: "School supplies",
            amount: Math.floor(Math.random() * 2000) + 500,
            category: "shopping",
            paymentMethod: "debit_card",
            merchant: "Campus Store",
            tags: [
                "supplies",
                "education"
            ]
        },
        {
            description: "Clothing",
            amount: Math.floor(Math.random() * 8000) + 2000,
            category: "shopping",
            paymentMethod: "credit_card",
            merchant: "Campus Clothing Store",
            tags: [
                "clothing",
                "shopping"
            ]
        },
        // Healthcare
        {
            description: "Prescription",
            amount: Math.floor(Math.random() * 3000) + 1000,
            category: "healthcare",
            paymentMethod: "debit_card",
            merchant: "Campus Pharmacy",
            tags: [
                "healthcare",
                "prescription"
            ]
        },
        {
            description: "Doctor visit",
            amount: Math.floor(Math.random() * 5000) + 2000,
            category: "healthcare",
            paymentMethod: "debit_card",
            merchant: "Campus Health Center",
            tags: [
                "healthcare",
                "medical"
            ]
        }
    ];
    if (isWeekend) {
        // Weekend-specific expenses
        baseExpenses.push({
            description: "Weekend brunch",
            amount: Math.floor(Math.random() * 1200) + 800,
            category: "food",
            paymentMethod: "debit_card",
            merchant: "Campus Brunch Spot",
            tags: [
                "food",
                "weekend",
                "brunch"
            ]
        }, {
            description: "Party supplies",
            amount: Math.floor(Math.random() * 3000) + 1000,
            category: "entertainment",
            paymentMethod: "debit_card",
            merchant: "Campus Store",
            tags: [
                "entertainment",
                "party",
                "weekend"
            ]
        });
    }
    return baseExpenses;
}
function generateMonthMetrics(month, transactions) {
    var _categoryBreakdown_sort_, _categoryBreakdown_, _categoryBreakdown_find;
    const incomeTransactions = transactions.filter((t)=>t.type === "income");
    const expenseTransactions = transactions.filter((t)=>t.type === "expense");
    const totalIncome = incomeTransactions.reduce((sum, t)=>sum + t.amount.amount, 0);
    const totalExpenses = expenseTransactions.reduce((sum, t)=>sum + t.amount.amount, 0);
    const netIncome = totalIncome - totalExpenses;
    const savingsRate = totalIncome > 0 ? netIncome / totalIncome * 100 : 0;
    // Category breakdown
    const categoryMap = new Map();
    expenseTransactions.forEach((t)=>{
        const existing = categoryMap.get(t.category) || {
            amount: 0,
            count: 0
        };
        categoryMap.set(t.category, {
            amount: existing.amount + t.amount.amount,
            count: existing.count + 1
        });
    });
    const categoryBreakdown = Array.from(categoryMap.entries()).map((param)=>{
        let [category, data] = param;
        return {
            category,
            amount: {
                amount: data.amount,
                currency: "USD",
                symbol: "$"
            },
            percentage: totalExpenses > 0 ? data.amount / totalExpenses * 100 : 0,
            transactionCount: data.count
        };
    }).sort((a, b)=>b.amount.amount - a.amount.amount);
    // Spending patterns
    const dailySpending = new Map();
    expenseTransactions.forEach((t)=>{
        const date = t.date.split('T')[0];
        dailySpending.set(date, (dailySpending.get(date) || 0) + t.amount.amount);
    });
    const averageDailySpending = dailySpending.size > 0 ? Array.from(dailySpending.values()).reduce((sum, amount)=>sum + amount, 0) / dailySpending.size : 0;
    const highestSpendingDay = Array.from(dailySpending.entries()).sort((a, b)=>b[1] - a[1])[0] || [
        "",
        0
    ];
    const mostFrequentCategory = ((_categoryBreakdown_sort_ = categoryBreakdown.sort((a, b)=>b.transactionCount - a.transactionCount)[0]) === null || _categoryBreakdown_sort_ === void 0 ? void 0 : _categoryBreakdown_sort_.category) || "other";
    const mostExpensiveCategory = ((_categoryBreakdown_ = categoryBreakdown[0]) === null || _categoryBreakdown_ === void 0 ? void 0 : _categoryBreakdown_.category) || "other";
    // Generate alerts
    const alerts = [];
    if (savingsRate < 10) {
        alerts.push({
            type: "goal_missed",
            category: "general",
            message: "Your savings rate is below 10%. Consider reducing discretionary spending.",
            severity: "medium"
        });
    }
    if (totalExpenses > totalIncome * 0.9) {
        alerts.push({
            type: "overspend",
            category: "general",
            message: "You're spending over 90% of your income. This leaves little room for savings.",
            severity: "high"
        });
    }
    const foodSpending = ((_categoryBreakdown_find = categoryBreakdown.find((c)=>c.category === "food")) === null || _categoryBreakdown_find === void 0 ? void 0 : _categoryBreakdown_find.amount.amount) || 0;
    if (foodSpending > totalExpenses * 0.4) {
        alerts.push({
            type: "overspend",
            category: "food",
            message: "Food spending is over 40% of total expenses. Consider meal planning to reduce costs.",
            severity: "medium"
        });
    }
    return {
        month,
        totalIncome: {
            amount: totalIncome,
            currency: "USD",
            symbol: "$"
        },
        totalExpenses: {
            amount: totalExpenses,
            currency: "USD",
            symbol: "$"
        },
        netIncome: {
            amount: netIncome,
            currency: "USD",
            symbol: "$"
        },
        savingsRate,
        categoryBreakdown,
        spendingPatterns: {
            averageDailySpending: {
                amount: Math.round(averageDailySpending),
                currency: "USD",
                symbol: "$"
            },
            highestSpendingDay: {
                date: highestSpendingDay[0],
                amount: {
                    amount: highestSpendingDay[1],
                    currency: "USD",
                    symbol: "$"
                }
            },
            mostFrequentCategory,
            mostExpensiveCategory
        },
        budgetComparison: [],
        trends: {
            weekOverWeek: {
                incomeChange: Math.random() * 20 - 10,
                expenseChange: Math.random() * 20 - 10
            },
            monthOverMonth: {
                incomeChange: Math.random() * 30 - 15,
                expenseChange: Math.random() * 30 - 15
            }
        },
        alerts,
        generatedAt: new Date().toISOString(),
        trend_daily: [] // Will be populated by the calendar component
    };
}
function generateCopilotAdvice(mode, month, metrics, transactions) {
    const adviceTemplates = {
        general: [
            {
                title: "Financial Health Check",
                message: "Your financial health looks good overall. Consider these small improvements to optimize your student budget.",
                priority: "medium",
                recommendations: [
                    {
                        id: "rec_1",
                        title: "Set up automatic savings",
                        description: "Transfer $50-100 to savings each month automatically",
                        actionType: "save_more",
                        estimatedImpact: {
                            amount: 5000,
                            currency: "USD",
                            symbol: "$"
                        },
                        difficulty: "easy",
                        timeframe: "immediate"
                    }
                ]
            }
        ],
        budget: [
            {
                title: "Budget Optimization",
                message: "Your current spending patterns show room for improvement. Here's how to optimize your budget.",
                priority: "high",
                recommendations: [
                    {
                        id: "rec_2",
                        title: "Reduce food spending",
                        description: "Meal prep on Sundays to cut food costs by 30%",
                        actionType: "reduce_spending",
                        estimatedImpact: {
                            amount: 8000,
                            currency: "USD",
                            symbol: "$"
                        },
                        difficulty: "medium",
                        timeframe: "short_term"
                    }
                ]
            }
        ],
        savings: [
            {
                title: "Boost Your Savings",
                message: "Your savings rate could be improved. Here are some strategies to save more money.",
                priority: "high",
                recommendations: [
                    {
                        id: "rec_3",
                        title: "Open a high-yield savings account",
                        description: "Earn 4%+ interest on your emergency fund",
                        actionType: "save_more",
                        estimatedImpact: {
                            amount: 2000,
                            currency: "USD",
                            symbol: "$"
                        },
                        difficulty: "easy",
                        timeframe: "immediate"
                    }
                ]
            }
        ],
        spending: [
            {
                title: "Smart Spending Tips",
                message: "You're spending more than necessary in some categories. Here's how to spend smarter.",
                priority: "medium",
                recommendations: [
                    {
                        id: "rec_4",
                        title: "Use student discounts",
                        description: "Take advantage of student pricing for software, transportation, and entertainment",
                        actionType: "reduce_spending",
                        estimatedImpact: {
                            amount: 3000,
                            currency: "USD",
                            symbol: "$"
                        },
                        difficulty: "easy",
                        timeframe: "immediate"
                    }
                ]
            }
        ],
        debt: [
            {
                title: "Debt Management",
                message: "If you have student loans or credit card debt, here's how to manage it effectively.",
                priority: "urgent",
                recommendations: [
                    {
                        id: "rec_5",
                        title: "Pay more than minimum",
                        description: "Even $25 extra per month can save thousands in interest",
                        actionType: "pay_debt",
                        estimatedImpact: {
                            amount: 5000,
                            currency: "USD",
                            symbol: "$"
                        },
                        difficulty: "medium",
                        timeframe: "long_term"
                    }
                ]
            }
        ],
        investment: [
            {
                title: "Start Investing Early",
                message: "Even small amounts invested now can grow significantly over time.",
                priority: "low",
                recommendations: [
                    {
                        id: "rec_6",
                        title: "Open a Roth IRA",
                        description: "Start with $25/month in a low-cost index fund",
                        actionType: "save_more",
                        estimatedImpact: {
                            amount: 10000,
                            currency: "USD",
                            symbol: "$"
                        },
                        difficulty: "hard",
                        timeframe: "long_term"
                    }
                ]
            }
        ]
    };
    const template = adviceTemplates[mode][0];
    const relevantTransactionIds = transactions.filter((t)=>t.type === "expense").slice(0, 5).map((t)=>t.id);
    return {
        id: "advice_".concat(Date.now()),
        mode,
        title: template.title,
        message: template.message,
        priority: template.priority,
        category: "general",
        recommendations: template.recommendations,
        insights: [
            {
                metric: "Savings Rate",
                value: "".concat(metrics.savingsRate.toFixed(1), "%"),
                trend: metrics.savingsRate > 20 ? "up" : "down",
                significance: "high"
            },
            {
                metric: "Monthly Expenses",
                value: "$".concat((metrics.totalExpenses.amount / 100).toFixed(0)),
                trend: "stable",
                significance: "medium"
            }
        ],
        context: {
            month,
            relevantTransactions: relevantTransactionIds,
            userProfile: {
                studentType: "undergraduate",
                incomeLevel: "medium",
                spendingStyle: "moderate"
            }
        },
        generatedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
    };
}
// ============================================================================
// MOCK DATA STORAGE
// ============================================================================
/**
 * In-memory storage for mock data
 * In production, this would be replaced with actual database calls
 */ class MockDataStore {
    generateMonthData(month) {
        const transactions = generateStudentTransactions(month);
        const metrics = generateMonthMetrics(month, transactions);
        this.transactions.set(month, transactions);
        this.metrics.set(month, metrics);
    }
    getTransactions(month) {
        if (!this.transactions.has(month)) {
            this.generateMonthData(month);
        }
        return this.transactions.get(month) || [];
    }
    getMetrics(month) {
        if (!this.metrics.has(month)) {
            this.generateMonthData(month);
        }
        return this.metrics.get(month) || null;
    }
    getAdvice(mode, month) {
        const key = "".concat(mode, "_").concat(month);
        if (!this.advice.has(key)) {
            const transactions = this.getTransactions(month);
            const metrics = this.getMetrics(month);
            if (metrics) {
                const advice = generateCopilotAdvice(mode, month, metrics, transactions);
                this.advice.set(key, [
                    advice
                ]);
            }
        }
        return this.advice.get(key) || [];
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "transactions", new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "metrics", new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "advice", new Map());
        // Pre-generate data for current month and previous month
        const currentMonth = new Date().toISOString().slice(0, 7);
        const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 7);
        this.generateMonthData(currentMonth);
        this.generateMonthData(lastMonth);
        // Also generate data for a few months back to ensure we have data
        const monthsBack = [
            '2024-12',
            '2025-01',
            '2025-02',
            '2025-03',
            '2025-04',
            '2025-05',
            '2025-06',
            '2025-07',
            '2025-08'
        ];
        monthsBack.forEach((month)=>this.generateMonthData(month));
    }
}
const mockDataStore = new MockDataStore();
function filterTransactions(transactions, params) {
    let filtered = [
        ...transactions
    ];
    if (params.category) {
        filtered = filtered.filter((t)=>t.category === params.category);
    }
    if (params.type) {
        filtered = filtered.filter((t)=>t.type === params.type);
    }
    if (params.status) {
        filtered = filtered.filter((t)=>t.status === params.status);
    }
    if (params.minAmount !== undefined) {
        filtered = filtered.filter((t)=>t.amount.amount >= params.minAmount);
    }
    if (params.maxAmount !== undefined) {
        filtered = filtered.filter((t)=>t.amount.amount <= params.maxAmount);
    }
    if (params.search) {
        const searchLower = params.search.toLowerCase();
        filtered = filtered.filter((t)=>{
            var _t_merchant, _t_notes;
            return t.description.toLowerCase().includes(searchLower) || ((_t_merchant = t.merchant) === null || _t_merchant === void 0 ? void 0 : _t_merchant.toLowerCase().includes(searchLower)) || ((_t_notes = t.notes) === null || _t_notes === void 0 ? void 0 : _t_notes.toLowerCase().includes(searchLower));
        });
    }
    if (params.tags && params.tags.length > 0) {
        filtered = filtered.filter((t)=>params.tags.some((tag)=>t.tags.includes(tag)));
    }
    // Sorting
    if (params.sortBy) {
        filtered.sort((a, b)=>{
            let aVal, bVal;
            switch(params.sortBy){
                case "date":
                    aVal = new Date(a.date).getTime();
                    bVal = new Date(b.date).getTime();
                    break;
                case "amount":
                    aVal = a.amount.amount;
                    bVal = b.amount.amount;
                    break;
                case "description":
                    aVal = a.description;
                    bVal = b.description;
                    break;
                default:
                    return 0;
            }
            if (params.sortOrder === "desc") {
                return bVal > aVal ? 1 : -1;
            } else {
                return aVal > bVal ? 1 : -1;
            }
        });
    }
    return filtered;
}
function paginateResults(items) {
    let page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, limit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = items.slice(startIndex, endIndex);
    return {
        items: paginatedItems,
        total: items.length,
        page,
        totalPages: Math.ceil(items.length / limit)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "centsToDollars",
    ()=>centsToDollars,
    "dollarsToCents",
    ()=>dollarsToCents,
    "fetchAdvice",
    ()=>fetchAdvice,
    "fetchCurrentUser",
    ()=>fetchCurrentUser,
    "fetchMonthMetrics",
    ()=>fetchMonthMetrics,
    "fetchTransactions",
    ()=>fetchTransactions,
    "formatCurrency",
    ()=>formatCurrency,
    "getCurrencySymbol",
    ()=>getCurrencySymbol,
    "parseCurrencyToCents",
    ()=>parseCurrencyToCents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock.ts [app-client] (ecmascript)");
;
// ============================================================================
// API CONFIGURATION
// ============================================================================
/**
 * API Configuration
 * 
 * To swap to real endpoints later:
 * 1. Update BASE_URL to your API server
 * 2. Replace mock data calls with actual HTTP requests
 * 3. Update error handling for network failures
 * 4. Add authentication headers if needed
 */ const API_CONFIG = {
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
};
// ============================================================================
// HTTP CLIENT
// ============================================================================
/**
 * Generic HTTP client with error handling and retries
 * 
 * In production, replace with your preferred HTTP client (axios, fetch, etc.)
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
class ApiClient {
    async request(endpoint) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const url = "".concat(API_CONFIG.BASE_URL).concat(endpoint);
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json'
            },
            ...options
        };
        try {
            const response = await fetch(url, defaultOptions);
            if (!response.ok) {
                throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
            }
            const data = await response.json();
            return {
                success: true,
                data,
                error: null
            };
        } catch (error) {
            console.error("API Error for ".concat(endpoint, ":"), error);
            return {
                success: false,
                data: null,
                error: {
                    code: 'NETWORK_ERROR',
                    message: error instanceof Error ? error.message : 'Unknown error',
                    details: {
                        endpoint,
                        options
                    },
                    timestamp: new Date().toISOString()
                }
            };
        }
    }
    async get(endpoint, params) {
        const url = params ? "".concat(endpoint, "?").concat(new URLSearchParams(params)) : endpoint;
        return this.request(url, {
            method: 'GET'
        });
    }
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}
async function fetchMonthMetrics(month) {
    try {
        console.log('Fetching metrics for month:', month);
        // Validate month format
        if (!/^\d{4}-\d{2}$/.test(month)) {
            console.error('Invalid month format:', month);
            return {
                success: false,
                data: null,
                error: {
                    code: 'INVALID_MONTH_FORMAT',
                    message: 'Month must be in YYYY-MM format',
                    details: {
                        month
                    },
                    timestamp: new Date().toISOString()
                }
            };
        }
        // In production, replace with:
        // return apiClient.get<MonthMetrics>(`/metrics/${month}`)
        const metrics = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDataStore"].getMetrics(month);
        console.log('Retrieved metrics:', metrics ? 'Found' : 'Not found');
        if (!metrics) {
            console.error('No metrics found for month:', month);
            return {
                success: false,
                data: null,
                error: {
                    code: 'METRICS_NOT_FOUND',
                    message: "No metrics found for month ".concat(month),
                    details: {
                        month
                    },
                    timestamp: new Date().toISOString()
                }
            };
        }
        console.log('Returning metrics successfully');
        return {
            success: true,
            data: metrics,
            error: null
        };
    } catch (error) {
        console.error('Error fetching month metrics:', error);
        return {
            success: false,
            data: null,
            error: {
                code: 'INTERNAL_ERROR',
                message: 'Failed to fetch month metrics',
                details: {
                    month,
                    error: error instanceof Error ? error.message : 'Unknown error'
                },
                timestamp: new Date().toISOString()
            }
        };
    }
}
async function fetchTransactions() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
        const { month = new Date().toISOString().slice(0, 7), page = 1, limit = 20, ...filters } = params;
        // In production, replace with:
        // const queryParams = new URLSearchParams()
        // Object.entries(params).forEach(([key, value]) => {
        //   if (value !== undefined) {
        //     queryParams.append(key, String(value))
        //   }
        // })
        // return apiClient.get<Transaction[]>(`/transactions?${queryParams}`)
        const allTransactions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDataStore"].getTransactions(month);
        const filteredTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterTransactions"])(allTransactions, filters);
        const paginatedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paginateResults"])(filteredTransactions, page, limit);
        return {
            success: true,
            data: paginatedResult.items,
            error: null,
            metadata: {
                total: paginatedResult.total,
                page: paginatedResult.page,
                limit,
                hasMore: paginatedResult.page < paginatedResult.totalPages
            }
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: {
                code: 'INTERNAL_ERROR',
                message: 'Failed to fetch transactions',
                details: {
                    params,
                    error: error instanceof Error ? error.message : 'Unknown error'
                },
                timestamp: new Date().toISOString()
            }
        };
    }
}
async function fetchAdvice(mode) {
    let month = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Date().toISOString().slice(0, 7);
    try {
        // Validate month format
        if (!/^\d{4}-\d{2}$/.test(month)) {
            return {
                success: false,
                data: null,
                error: {
                    code: 'INVALID_MONTH_FORMAT',
                    message: 'Month must be in YYYY-MM format',
                    details: {
                        month
                    },
                    timestamp: new Date().toISOString()
                }
            };
        }
        // In production, replace with:
        // return apiClient.get<CopilotAdvice[]>(`/advice/${mode}?month=${month}`)
        const advice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDataStore"].getAdvice(mode, month);
        return {
            success: true,
            data: advice,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: {
                code: 'INTERNAL_ERROR',
                message: 'Failed to fetch advice',
                details: {
                    mode,
                    month,
                    error: error instanceof Error ? error.message : 'Unknown error'
                },
                timestamp: new Date().toISOString()
            }
        };
    }
}
async function fetchCurrentUser() {
    try {
        // In production, replace with:
        // return apiClient.get<User>("/user/me")
        // Mock user data
        const user = {
            id: "user_1",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
            preferences: {
                currency: "USD",
                dateFormat: "MM/DD/YYYY",
                timezone: "America/New_York",
                notifications: {
                    email: true,
                    push: true,
                    sms: false
                }
            },
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: new Date().toISOString()
        };
        return {
            success: true,
            data: user,
            error: null
        };
    } catch (error) {
        console.error("Error fetching user:", error);
        return {
            success: false,
            data: null,
            error: {
                code: 'USER_FETCH_ERROR',
                message: "Failed to fetch user",
                details: {
                    error: error instanceof Error ? error.message : 'Unknown error'
                },
                timestamp: new Date().toISOString()
            }
        };
    }
}
function formatCurrency(amount) {
    let currency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "USD", options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { showSymbol = true, showCents = true, locale = "en-US", compact = false } = options;
    const amountInDollars = amount / 100;
    const currencySymbol = getCurrencySymbol(currency);
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: showCents ? 2 : 0,
        maximumFractionDigits: showCents ? 2 : 0,
        notation: compact ? "compact" : "standard"
    });
    let formatted = formatter.format(amountInDollars);
    if (!showSymbol) {
        formatted = formatted.replace(currencySymbol, "").trim();
    }
    return formatted;
}
function getCurrencySymbol(currency) {
    const symbols = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        JPY: "¥",
        CAD: "C$",
        AUD: "A$",
        CHF: "CHF",
        CNY: "¥",
        INR: "₹",
        BRL: "R$",
        MXN: "$",
        KRW: "₩",
        SGD: "S$",
        HKD: "HK$",
        NOK: "kr",
        SEK: "kr",
        DKK: "kr",
        PLN: "zł",
        CZK: "Kč",
        HUF: "Ft",
        RON: "lei",
        BGN: "лв",
        HRK: "kn",
        RUB: "₽",
        TRY: "₺",
        ZAR: "R",
        ILS: "₪",
        AED: "د.إ",
        SAR: "﷼",
        QAR: "﷼",
        KWD: "د.ك",
        BHD: "د.ب",
        OMR: "﷼",
        JOD: "د.ا",
        LBP: "ل.ل",
        EGP: "£",
        MAD: "د.م.",
        TND: "د.ت",
        DZD: "د.ج",
        LYD: "ل.د",
        SDG: "ج.س.",
        ETB: "Br",
        KES: "KSh",
        UGX: "USh",
        TZS: "TSh",
        ZMW: "ZK",
        BWP: "P",
        SZL: "L",
        LSL: "L",
        NAD: "N$",
        AOA: "Kz",
        MZN: "MT",
        ZWL: "Z$",
        GHS: "₵",
        NGN: "₦",
        XOF: "CFA",
        XAF: "FCFA",
        CDF: "FC",
        RWF: "RF",
        BIF: "FBu",
        KMF: "CF",
        DJF: "Fdj",
        SOS: "S",
        ERN: "Nfk",
        SLL: "Le",
        GMD: "D",
        GNF: "FG",
        LRD: "L$",
        CVE: "$",
        STN: "Db",
        MRO: "UM",
        MGA: "Ar",
        SCR: "₨",
        MUR: "₨",
        YER: "﷼",
        AFN: "؋",
        PKR: "₨",
        LKR: "₨",
        NPR: "₨",
        BDT: "৳",
        MMK: "K",
        THB: "฿",
        LAK: "₭",
        KHR: "៛",
        VND: "₫",
        IDR: "Rp",
        MYR: "RM",
        PHP: "₱",
        TWD: "NT$",
        MOP: "MOP$",
        BND: "B$",
        FJD: "FJ$",
        PGK: "K",
        WST: "WS$",
        TOP: "T$",
        VUV: "Vt",
        SBD: "SI$",
        NZD: "NZ$",
        XPF: "₣",
        ARS: "$",
        BOB: "Bs",
        CLP: "$",
        COP: "$",
        PYG: "₲",
        PEN: "S/",
        UYU: "$U",
        VES: "Bs.S",
        GYD: "G$",
        SRD: "$",
        TTD: "TT$",
        BBD: "Bds$",
        JMD: "J$",
        BZD: "BZ$",
        GTQ: "Q",
        HNL: "L",
        NIO: "C$",
        CRC: "₡",
        PAB: "B/.",
        DOP: "RD$",
        HTG: "G",
        CUP: "$",
        XCD: "$",
        AWG: "ƒ",
        BMD: "$",
        KYD: "$",
        FKP: "£",
        SHP: "£",
        GIP: "£",
        JEP: "£",
        GGP: "£",
        IMP: "£"
    };
    return symbols[currency] || currency;
}
function parseCurrencyToCents(currencyString) {
    // Remove currency symbols and non-numeric characters except decimal point
    const cleaned = currencyString.replace(/[^\d.-]/g, "");
    const amount = parseFloat(cleaned);
    return Math.round(amount * 100);
}
function centsToDollars(cents) {
    return cents / 100;
}
function dollarsToCents(dollars) {
    return Math.round(dollars * 100);
} // ============================================================================
 // API MIGRATION GUIDE
 // ============================================================================
 /**
 * MIGRATION GUIDE: How to swap to real API endpoints
 * 
 * 1. Update API_CONFIG.BASE_URL to your production API URL
 * 2. Replace mock data calls with actual HTTP requests:
 *    - mockDataStore.getMetrics() → apiClient.get('/metrics/{month}')
 *    - mockDataStore.getTransactions() → apiClient.get('/transactions')
 *    - mockDataStore.getAdvice() → apiClient.get('/advice/{mode}')
 * 
 * 3. Update error handling for network failures
 * 4. Add authentication if needed:
 *    - Add auth token to headers
 *    - Implement token refresh logic
 *    - Handle 401/403 responses
 * 
 * 5. Add caching if needed:
 *    - Implement response caching
 *    - Add cache invalidation
 *    - Handle stale data
 * 
 * 6. Add request/response interceptors for:
 *    - Logging
 *    - Error reporting
 *    - Performance monitoring
 * 
 * Example real API implementation:
 * 
 * export async function fetchMonthMetrics(month: string): Promise<ApiResponse<MonthMetrics>> {
 *   return apiClient.get<MonthMetrics>(`/metrics/${month}`)
 * }
 * 
 * export async function fetchTransactions(params: TransactionQueryParams): Promise<ApiResponse<Transaction[]>> {
 *   const queryParams = new URLSearchParams()
 *   Object.entries(params).forEach(([key, value]) => {
 *     if (value !== undefined) {
 *       queryParams.append(key, String(value))
 *     }
 *   })
 *   return apiClient.get<Transaction[]>(`/transactions?${queryParams}`)
 * }
 * 
 * export async function fetchAdvice(mode: string, month: string): Promise<ApiResponse<CopilotAdvice[]>> {
 *   return apiClient.get<CopilotAdvice[]>(`/advice/${mode}?month=${month}`)
 * }
 */ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-transactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transactionKeys",
    ()=>transactionKeys,
    "useTransactions",
    ()=>useTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const transactionKeys = {
    all: [
        'transactions'
    ],
    lists: ()=>[
            ...transactionKeys.all,
            'list'
        ],
    list: (page, limit)=>[
            ...transactionKeys.lists(),
            {
                page,
                limit
            }
        ]
};
function useTransactions() {
    let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: transactionKeys.list(page, limit),
        queryFn: {
            "useTransactions.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchTransactions"])({
                    page,
                    limit
                })
        }["useTransactions.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s(useTransactions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-accounts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accountKeys",
    ()=>accountKeys,
    "useAccounts",
    ()=>useAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const accountKeys = {
    all: [
        'accounts'
    ],
    lists: ()=>[
            ...accountKeys.all,
            'list'
        ]
};
function useAccounts() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: accountKeys.lists(),
        queryFn: {
            "useAccounts.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMonthMetrics"])(new Date().toISOString().slice(0, 7))
        }["useAccounts.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s(useAccounts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-budgets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "budgetKeys",
    ()=>budgetKeys,
    "useBudgets",
    ()=>useBudgets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const budgetKeys = {
    all: [
        'budgets'
    ],
    lists: ()=>[
            ...budgetKeys.all,
            'list'
        ]
};
function useBudgets() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: budgetKeys.lists(),
        queryFn: {
            "useBudgets.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMonthMetrics"])(new Date().toISOString().slice(0, 7))
        }["useBudgets.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s(useBudgets, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-user.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentUser",
    ()=>useCurrentUser,
    "userKeys",
    ()=>userKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const userKeys = {
    all: [
        'user'
    ],
    current: ()=>[
            ...userKeys.all,
            'current'
        ]
};
function useCurrentUser() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: userKeys.current(),
        queryFn: {
            "useCurrentUser.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])()
        }["useCurrentUser.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s(useCurrentUser, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-month-metrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "monthMetricsKeys",
    ()=>monthMetricsKeys,
    "useMonthMetrics",
    ()=>useMonthMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const monthMetricsKeys = {
    all: [
        'monthMetrics'
    ],
    byMonth: (month)=>[
            ...monthMetricsKeys.all,
            'byMonth',
            month
        ]
};
function useMonthMetrics() {
    let month = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Date().toISOString().slice(0, 7);
    _s();
    console.log('useMonthMetrics called with month:', month);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: monthMetricsKeys.byMonth(month),
        queryFn: {
            "useMonthMetrics.useQuery": ()=>{
                console.log('Query function called for month:', month);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMonthMetrics"])(month);
            }
        }["useMonthMetrics.useQuery"],
        staleTime: 5 * 60 * 1000
    });
}
_s(useMonthMetrics, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-transaction-filters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransactionFilters",
    ()=>useTransactionFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTransactionFilters() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransactionFilters.useMemo[filters]": ()=>{
            var _searchParams_get;
            const categories = ((_searchParams_get = searchParams.get('categories')) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.split(',').filter(Boolean)) || [];
            const merchant = searchParams.get('merchant') || '';
            const dateFrom = searchParams.get('from') || '';
            const dateTo = searchParams.get('to') || '';
            const sortBy = searchParams.get('sortBy') || 'date';
            const sortOrder = searchParams.get('sortOrder') || 'desc';
            const density = searchParams.get('density') || 'comfortable';
            return {
                categories,
                merchant,
                dateFrom,
                dateTo,
                sortBy,
                sortOrder,
                density
            };
        }
    }["useTransactionFilters.useMemo[filters]"], [
        searchParams
    ]);
    const updateFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransactionFilters.useCallback[updateFilters]": (updates)=>{
            const params = new URLSearchParams(searchParams);
            // Update categories
            if (updates.categories !== undefined) {
                if (updates.categories.length > 0) {
                    params.set('categories', updates.categories.join(','));
                } else {
                    params.delete('categories');
                }
            }
            // Update merchant
            if (updates.merchant !== undefined) {
                if (updates.merchant) {
                    params.set('merchant', updates.merchant);
                } else {
                    params.delete('merchant');
                }
            }
            // Update date range
            if (updates.dateFrom !== undefined) {
                if (updates.dateFrom) {
                    params.set('from', updates.dateFrom);
                } else {
                    params.delete('from');
                }
            }
            if (updates.dateTo !== undefined) {
                if (updates.dateTo) {
                    params.set('to', updates.dateTo);
                } else {
                    params.delete('to');
                }
            }
            // Update sorting
            if (updates.sortBy !== undefined) {
                params.set('sortBy', updates.sortBy);
            }
            if (updates.sortOrder !== undefined) {
                params.set('sortOrder', updates.sortOrder);
            }
            // Update density
            if (updates.density !== undefined) {
                params.set('density', updates.density);
            }
            // Update URL
            const newUrl = "".concat(window.location.pathname, "?").concat(params.toString());
            router.push(newUrl, {
                scroll: false
            });
        }
    }["useTransactionFilters.useCallback[updateFilters]"], [
        router,
        searchParams
    ]);
    const toggleCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransactionFilters.useCallback[toggleCategory]": (category)=>{
            const currentCategories = filters.categories;
            const newCategories = currentCategories.includes(category) ? currentCategories.filter({
                "useTransactionFilters.useCallback[toggleCategory]": (c)=>c !== category
            }["useTransactionFilters.useCallback[toggleCategory]"]) : [
                ...currentCategories,
                category
            ];
            updateFilters({
                categories: newCategories
            });
        }
    }["useTransactionFilters.useCallback[toggleCategory]"], [
        filters.categories,
        updateFilters
    ]);
    const clearAllFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransactionFilters.useCallback[clearAllFilters]": ()=>{
            updateFilters({
                categories: [],
                merchant: '',
                dateFrom: '',
                dateTo: ''
            });
        }
    }["useTransactionFilters.useCallback[clearAllFilters]"], [
        updateFilters
    ]);
    const hasActiveFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransactionFilters.useMemo[hasActiveFilters]": ()=>{
            return filters.categories.length > 0 || filters.merchant.length > 0 || filters.dateFrom.length > 0 || filters.dateTo.length > 0;
        }
    }["useTransactionFilters.useMemo[hasActiveFilters]"], [
        filters.categories,
        filters.merchant,
        filters.dateFrom,
        filters.dateTo
    ]);
    return {
        filters,
        updateFilters,
        toggleCategory,
        clearAllFilters,
        hasActiveFilters
    };
}
_s(useTransactionFilters, "iaesUQwMiAOZhrohbvUDH8CWv9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-budget-mode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBudgetMode",
    ()=>useBudgetMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useBudgetMode() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('budget');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBudgetMode.useEffect": ()=>{
            const modeParam = searchParams.get('mode');
            if (modeParam === 'budget' || modeParam === 'maintain') {
                setMode(modeParam);
            }
        }
    }["useBudgetMode.useEffect"], [
        searchParams
    ]);
    const updateMode = (newMode)=>{
        setMode(newMode);
        const params = new URLSearchParams(searchParams.toString());
        params.set('mode', newMode);
        router.push("/budget?".concat(params.toString()), {
            scroll: false
        });
    };
    return {
        mode,
        updateMode
    };
}
_s(useBudgetMode, "xz6pa0HQTp6NNfdQfAHkgSHrAxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Re-export all hooks for easier importing
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-transactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-accounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$budgets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-budgets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-user.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-month-metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$transaction$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-transaction-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$budget$2d$mode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-budget-mode.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/calendar/CalendarGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarGrid",
    ()=>CalendarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DAY_NAMES = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function CalendarGrid(param) {
    let { monthMetrics, currentDate, onDayClick, className } = param;
    _s();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // Calculate calendar grid data
    const calendarData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarGrid.useMemo[calendarData]": ()=>{
            const firstDayOfMonth = new Date(year, month, 1);
            const lastDayOfMonth = new Date(year, month + 1, 0);
            const firstDayOfWeek = firstDayOfMonth.getDay();
            const daysInMonth = lastDayOfMonth.getDate();
            // Create a map of daily spending data
            const dailySpendingMap = new Map();
            monthMetrics.trend_daily.forEach({
                "CalendarGrid.useMemo[calendarData]": (day)=>{
                    dailySpendingMap.set(day.date, day.totalSpending.amount);
                }
            }["CalendarGrid.useMemo[calendarData]"]);
            // Calculate spending quantiles for color mapping
            const spendingAmounts = monthMetrics.trend_daily.map({
                "CalendarGrid.useMemo[calendarData].spendingAmounts": (day)=>day.totalSpending.amount
            }["CalendarGrid.useMemo[calendarData].spendingAmounts"]).filter({
                "CalendarGrid.useMemo[calendarData].spendingAmounts": (amount)=>amount > 0
            }["CalendarGrid.useMemo[calendarData].spendingAmounts"]).sort({
                "CalendarGrid.useMemo[calendarData].spendingAmounts": (a, b)=>a - b
            }["CalendarGrid.useMemo[calendarData].spendingAmounts"]);
            const quantiles = {
                q25: spendingAmounts[Math.floor(spendingAmounts.length * 0.25)] || 0,
                q50: spendingAmounts[Math.floor(spendingAmounts.length * 0.5)] || 0,
                q75: spendingAmounts[Math.floor(spendingAmounts.length * 0.75)] || 0,
                q90: spendingAmounts[Math.floor(spendingAmounts.length * 0.9)] || 0,
                max: spendingAmounts[spendingAmounts.length - 1] || 0
            };
            // Generate calendar days
            const days = [];
            // Empty cells for days before the first day of the month
            for(let i = 0; i < firstDayOfWeek; i++){
                days.push({
                    type: 'empty',
                    key: "empty-".concat(i)
                });
            }
            // Days of the month
            for(let day = 1; day <= daysInMonth; day++){
                const date = new Date(year, month, day);
                const dateString = date.toISOString().split('T')[0];
                const spending = dailySpendingMap.get(dateString) || 0;
                const isToday = date.toDateString() === new Date().toDateString();
                // Determine color intensity based on spending quantiles
                let colorIntensity = 0;
                if (spending > 0) {
                    if (spending <= quantiles.q25) colorIntensity = 1;
                    else if (spending <= quantiles.q50) colorIntensity = 2;
                    else if (spending <= quantiles.q75) colorIntensity = 3;
                    else if (spending <= quantiles.q90) colorIntensity = 4;
                    else colorIntensity = 5;
                }
                days.push({
                    type: 'day',
                    key: day.toString(),
                    day,
                    date: dateString,
                    spending,
                    colorIntensity,
                    isToday
                });
            }
            return {
                days,
                quantiles
            };
        }
    }["CalendarGrid.useMemo[calendarData]"], [
        monthMetrics.trend_daily,
        year,
        month
    ]);
    const getColorClass = (intensity, isToday)=>{
        if (intensity === 0) {
            return isToday ? "bg-primary/20 border-primary/40 hover:bg-primary/30" : "bg-muted/30 border-muted/50 hover:bg-muted/40";
        }
        const baseClasses = isToday ? "border-primary/60" : "border-muted/60";
        switch(intensity){
            case 1:
                return "".concat(baseClasses, " bg-green-100 hover:bg-green-200");
            case 2:
                return "".concat(baseClasses, " bg-green-200 hover:bg-green-300");
            case 3:
                return "".concat(baseClasses, " bg-yellow-200 hover:bg-yellow-300");
            case 4:
                return "".concat(baseClasses, " bg-orange-200 hover:bg-orange-300");
            case 5:
                return "".concat(baseClasses, " bg-red-200 hover:bg-red-300");
            default:
                return "".concat(baseClasses, " bg-muted/30 hover:bg-muted/40");
        }
    };
    const getIntensityLabel = (intensity)=>{
        switch(intensity){
            case 0:
                return "No spending";
            case 1:
                return "Very low spending";
            case 2:
                return "Low spending";
            case 3:
                return "Medium spending";
            case 4:
                return "High spending";
            case 5:
                return "Very high spending";
            default:
                return "No data";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-px mb-2",
                children: DAY_NAMES.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 text-center text-sm font-medium text-muted-foreground bg-muted/20 rounded-t-md",
                        children: day
                    }, day, false, {
                        fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-px bg-muted/20 rounded-md overflow-hidden",
                children: calendarData.days.map((dayData, index)=>{
                    if (dayData.type === 'empty') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-square bg-muted/10",
                            "aria-hidden": "true"
                        }, dayData.key, false, {
                            fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, this);
                    }
                    const { day, date, spending, colorIntensity, isToday } = dayData;
                    const formattedAmount = spending > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(spending, "USD", {
                        showCents: false
                    }) : "$0";
                    const intensityLabel = getIntensityLabel(colorIntensity);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.2,
                            delay: index * 0.01
                        },
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full aspect-square p-1 rounded-none border-2 transition-all duration-200", "hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-primary/50", getColorClass(colorIntensity, isToday)),
                            onClick: ()=>onDayClick(date),
                            "aria-label": "".concat(MONTH_NAMES[month], " ").concat(day, ", ").concat(year, ". ").concat(intensityLabel, ". Total spending: ").concat(formattedAmount),
                            role: "button",
                            tabIndex: 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", isToday ? "text-primary" : "text-foreground"),
                                        children: day
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this),
                                    spending > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-muted-foreground mt-1",
                                        children: formattedAmount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                                        lineNumber: 192,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, this)
                    }, dayData.key, false, {
                        fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calendar/CalendarGrid.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(CalendarGrid, "KWuRo9SM0aXyX2GegErjEuzqD0g=");
_c = CalendarGrid;
var _c;
__turbopack_context__.k.register(_c, "CalendarGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/calendar/CalendarHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarHeader",
    ()=>CalendarHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { motion } from "framer-motion"
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function CalendarHeader(param) {
    let { currentDate, onPreviousMonth, onNextMonth, onToday, className } = param;
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const isCurrentMonth = currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "h-6 w-6 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-2xl font-bold",
                                        children: [
                                            MONTH_NAMES[month],
                                            " ",
                                            year
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: "Daily spending patterns and trends"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: onPreviousMonth,
                                className: "h-9 px-3",
                                "aria-label": "Previous month",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: onToday,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 px-3", isCurrentMonth && "bg-primary/10 border-primary/20 text-primary"),
                                "aria-label": "Go to current month",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-4 w-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    "Today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: onNextMonth,
                                className: "h-9 px-3",
                                "aria-label": "Next month",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/calendar/CalendarHeader.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = CalendarHeader;
var _c;
__turbopack_context__.k.register(_c, "CalendarHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/calendar/CalendarSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarSummary",
    ()=>CalendarSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CalendarSummary(param) {
    let { monthMetrics, // currentDate,
    className } = param;
    _s();
    const summaryData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarSummary.useMemo[summaryData]": ()=>{
            const dailyData = monthMetrics.trend_daily;
            const totalDays = dailyData.length;
            const daysWithSpending = dailyData.filter({
                "CalendarSummary.useMemo[summaryData]": (day)=>day.totalSpending.amount > 0
            }["CalendarSummary.useMemo[summaryData]"]).length;
            const totalSpending = dailyData.reduce({
                "CalendarSummary.useMemo[summaryData].totalSpending": (sum, day)=>sum + day.totalSpending.amount
            }["CalendarSummary.useMemo[summaryData].totalSpending"], 0);
            const averageDaily = totalDays > 0 ? totalSpending / totalDays : 0;
            const highestDay = dailyData.reduce({
                "CalendarSummary.useMemo[summaryData].highestDay": (max, day)=>day.totalSpending.amount > max.totalSpending.amount ? day : max
            }["CalendarSummary.useMemo[summaryData].highestDay"], dailyData[0] || {
                totalSpending: {
                    amount: 0
                }
            });
            // Calculate spending trend (comparing first half vs second half of month)
            const midMonth = Math.floor(totalDays / 2);
            const firstHalf = dailyData.slice(0, midMonth).reduce({
                "CalendarSummary.useMemo[summaryData].firstHalf": (sum, day)=>sum + day.totalSpending.amount
            }["CalendarSummary.useMemo[summaryData].firstHalf"], 0);
            const secondHalf = dailyData.slice(midMonth).reduce({
                "CalendarSummary.useMemo[summaryData].secondHalf": (sum, day)=>sum + day.totalSpending.amount
            }["CalendarSummary.useMemo[summaryData].secondHalf"], 0);
            const trendDirection = secondHalf > firstHalf ? 'up' : 'down';
            const trendPercentage = firstHalf > 0 ? Math.abs((secondHalf - firstHalf) / firstHalf * 100) : 0;
            return {
                totalDays,
                daysWithSpending,
                totalSpending,
                averageDaily,
                highestDay,
                trendDirection,
                trendPercentage
            };
        }
    }["CalendarSummary.useMemo[summaryData]"], [
        monthMetrics.trend_daily
    ]);
    const stats = [
        {
            title: "Total Spending",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(summaryData.totalSpending, "USD", {
                showCents: false
            }),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            color: "text-red-600",
            bgColor: "bg-red-50",
            description: "this month"
        },
        {
            title: "Daily Average",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(summaryData.averageDaily, "USD", {
                showCents: false
            }),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            description: "per day"
        },
        {
            title: "Active Days",
            value: "".concat(summaryData.daysWithSpending, "/").concat(summaryData.totalDays),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-green-600",
            bgColor: "bg-green-50",
            description: "with transactions"
        },
        {
            title: "Highest Day",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(summaryData.highestDay.totalSpending.amount, "USD", {
                showCents: false
            }),
            icon: summaryData.trendDirection === 'up' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
            color: summaryData.trendDirection === 'up' ? "text-orange-600" : "text-purple-600",
            bgColor: summaryData.trendDirection === 'up' ? "bg-orange-50" : "bg-purple-50",
            description: summaryData.highestDay.date ? new Date(summaryData.highestDay.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            }) : "N/A"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: stats.map((stat, index)=>{
                    const Icon = stat.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.3,
                            delay: index * 0.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: stat.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg", stat.bgColor),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", stat.color)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-bold mb-1", stat.color),
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: stat.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this)
                    }, stat.title, false, {
                        fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            summaryData.trendPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3,
                    delay: 0.4
                },
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                summaryData.trendDirection === 'up' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-4 w-4 text-orange-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                    lineNumber: 135,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                    className: "h-4 w-4 text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                    lineNumber: 137,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: [
                                        "Spending trend: ",
                                        summaryData.trendDirection === 'up' ? 'increasing' : 'decreasing',
                                        " by",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold", summaryData.trendDirection === 'up' ? "text-orange-600" : "text-purple-600"),
                                            children: [
                                                summaryData.trendPercentage.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calendar/CalendarSummary.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(CalendarSummary, "fhAir3zrFnuJFoTg4FbWEC8QGXg=");
_c = CalendarSummary;
var _c;
__turbopack_context__.k.register(_c, "CalendarSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/calendar/SpendingLegend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpendingLegend",
    ()=>SpendingLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function SpendingLegend(param) {
    let { quantiles, className } = param;
    const legendItems = [
        {
            intensity: 0,
            label: "No spending",
            color: "bg-muted/30",
            range: "$0"
        },
        {
            intensity: 1,
            label: "Very low",
            color: "bg-green-100",
            range: "$1 - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q25, "USD", {
                showCents: false
            }))
        },
        {
            intensity: 2,
            label: "Low",
            color: "bg-green-200",
            range: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q25, "USD", {
                showCents: false
            }), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q50, "USD", {
                showCents: false
            }))
        },
        {
            intensity: 3,
            label: "Medium",
            color: "bg-yellow-200",
            range: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q50, "USD", {
                showCents: false
            }), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q75, "USD", {
                showCents: false
            }))
        },
        {
            intensity: 4,
            label: "High",
            color: "bg-orange-200",
            range: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q75, "USD", {
                showCents: false
            }), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q90, "USD", {
                showCents: false
            }))
        },
        {
            intensity: 5,
            label: "Very high",
            color: "bg-red-200",
            range: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(quantiles.q90, "USD", {
                showCents: false
            }), "+")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium",
                    children: "Spending Intensity"
                }, void 0, false, {
                    fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: legendItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 rounded border border-muted/60", item.color),
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-medium text-foreground",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-foreground font-mono",
                                                children: item.range
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.intensity, true, {
                                fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 border-t border-muted/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Click any day to view detailed transactions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calendar/SpendingLegend.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = SpendingLegend;
var _c;
__turbopack_context__.k.register(_c, "SpendingLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/calendar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/CalendarGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/CalendarHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/CalendarSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$SpendingLegend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/SpendingLegend.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/calendar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-month-metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/calendar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/CalendarGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/CalendarHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/CalendarSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$SpendingLegend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar/SpendingLegend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CalendarPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const month = searchParams.get('month') || '2025-08';
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const { data: monthMetrics, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonthMetrics"])(month);
    // Generate mock daily spending data if not available
    const dailySpendingData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarPage.useMemo[dailySpendingData]": ()=>{
            if (!(monthMetrics === null || monthMetrics === void 0 ? void 0 : monthMetrics.data)) return [];
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            // Generate realistic daily spending data
            const data = [];
            const baseAmount = monthMetrics.data.spendingPatterns.averageDailySpending.amount;
            for(let day = 1; day <= daysInMonth; day++){
                const date = new Date(year, month, day);
                const dateString = date.toISOString().split('T')[0];
                // Add some realistic variation
                const variation = Math.sin(day * 0.3) * 0.4 + Math.random() * 0.6 - 0.3;
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                const weekendMultiplier = isWeekend ? 1.3 : 0.8;
                const amount = Math.max(0, baseAmount * (1 + variation) * weekendMultiplier);
                data.push({
                    date: dateString,
                    totalSpending: {
                        amount: amount,
                        currency: "USD",
                        symbol: "$"
                    },
                    transactionCount: Math.floor(Math.random() * 5) + 1,
                    categories: [
                        {
                            category: "food",
                            amount: {
                                amount: amount * 0.4,
                                currency: "USD",
                                symbol: "$"
                            },
                            percentage: 40
                        },
                        {
                            category: "transportation",
                            amount: {
                                amount: amount * 0.3,
                                currency: "USD",
                                symbol: "$"
                            },
                            percentage: 30
                        },
                        {
                            category: "entertainment",
                            amount: {
                                amount: amount * 0.3,
                                currency: "USD",
                                symbol: "$"
                            },
                            percentage: 30
                        }
                    ]
                });
            }
            return data;
        }
    }["CalendarPage.useMemo[dailySpendingData]"], [
        monthMetrics === null || monthMetrics === void 0 ? void 0 : monthMetrics.data,
        currentDate
    ]);
    const handleDayClick = (date)=>{
        // Deep link to transactions page with date filter
        router.push("/transactions?from=".concat(date, "&to=").concat(date));
    };
    const handlePreviousMonth = ()=>{
        setCurrentDate((prev)=>{
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() - 1);
            return newDate;
        });
    };
    const handleNextMonth = ()=>{
        setCurrentDate((prev)=>{
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + 1);
            return newDate;
        });
    };
    const handleToday = ()=>{
        setCurrentDate(new Date());
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container-5xl py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-12 w-12 text-destructive mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-2",
                            children: "Error Loading Calendar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "There was a problem loading your calendar data. Please try again."
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container-5xl py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 bg-muted animate-pulse rounded w-64"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-32 bg-muted animate-pulse rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-px bg-muted/20 rounded-md overflow-hidden",
                        children: Array.from({
                            length: 35
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square bg-muted/10 animate-pulse"
                            }, i, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this);
    }
    // Create mock MonthMetrics with daily data
    const mockMonthMetrics = {
        month: currentDate.toISOString().slice(0, 7),
        totalIncome: {
            amount: 5000,
            currency: "USD",
            symbol: "$"
        },
        totalExpenses: {
            amount: 3000,
            currency: "USD",
            symbol: "$"
        },
        netIncome: {
            amount: 2000,
            currency: "USD",
            symbol: "$"
        },
        savingsRate: 40,
        categoryBreakdown: [],
        spendingPatterns: {
            averageDailySpending: {
                amount: 100,
                currency: "USD",
                symbol: "$"
            },
            highestSpendingDay: {
                date: "2024-01-15",
                amount: {
                    amount: 500,
                    currency: "USD",
                    symbol: "$"
                }
            },
            mostFrequentCategory: "food",
            mostExpensiveCategory: "housing"
        },
        budgetComparison: [],
        trends: {
            weekOverWeek: {
                incomeChange: 5,
                expenseChange: -2
            },
            monthOverMonth: {
                incomeChange: 10,
                expenseChange: 3
            }
        },
        alerts: [],
        generatedAt: new Date().toISOString(),
        trend_daily: dailySpendingData
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container-5xl py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold tracking-tight",
                            children: "Financial Calendar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-2",
                            children: "Visualize your daily spending patterns and trends"
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.3,
                        delay: 0.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarHeader"], {
                        currentDate: currentDate,
                        onPreviousMonth: handlePreviousMonth,
                        onNextMonth: handleNextMonth,
                        onToday: handleToday
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.3,
                                delay: 0.2
                            },
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarGrid"], {
                                        monthMetrics: mockMonthMetrics,
                                        currentDate: currentDate,
                                        onDayClick: handleDayClick
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/calendar/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.3,
                                delay: 0.3
                            },
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$SpendingLegend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpendingLegend"], {
                                quantiles: {
                                    q25: 25,
                                    q50: 50,
                                    q75: 100,
                                    q90: 200,
                                    max: 500
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.3,
                        delay: 0.4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2f$CalendarSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarSummary"], {
                        monthMetrics: mockMonthMetrics
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(CalendarPage, "UizqDWIEowX42dVbD8T/98xgYqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonthMetrics"]
    ];
});
_c = CalendarPage;
var _c;
__turbopack_context__.k.register(_c, "CalendarPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9f7bde49._.js.map