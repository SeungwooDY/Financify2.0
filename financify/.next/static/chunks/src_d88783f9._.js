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
"[project]/src/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Theme configuration and color systems
 */ __turbopack_context__.s([
    "CATEGORY_COLORS",
    ()=>CATEGORY_COLORS,
    "KPI_COLORS",
    ()=>KPI_COLORS,
    "getCategoryColor",
    ()=>getCategoryColor,
    "getKPIColor",
    ()=>getKPIColor
]);
const CATEGORY_COLORS = {
    "food": {
        base: "#22d3ee",
        tint: "#99f6e4"
    },
    "books": {
        base: "#34d399",
        tint: "#a7f3d0"
    },
    "transportation": {
        base: "#60a5fa",
        tint: "#bfdbfe"
    },
    "housing": {
        base: "#818cf8",
        tint: "#c7d2fe"
    },
    "shopping": {
        base: "#f472b6",
        tint: "#fbcfe8"
    },
    "entertainment": {
        base: "#f59e0b",
        tint: "#fde68a"
    },
    "utilities": {
        base: "#a78bfa",
        tint: "#ddd6fe"
    },
    "healthcare": {
        base: "#f87171",
        tint: "#fecaca"
    },
    "tuition": {
        base: "#06b6d4",
        tint: "#67e8f9"
    },
    "income": {
        base: "#10b981",
        tint: "#6ee7b7"
    },
    "refund": {
        base: "#10b981",
        tint: "#6ee7b7"
    },
    "other": {
        base: "#94a3b8",
        tint: "#cbd5e1"
    }
};
const KPI_COLORS = {
    positive: "#10b981",
    positiveLight: "#34d399",
    negative: "#ef4444",
    negativeLight: "#f87171",
    neutral: "#6b7280",
    warning: "#f59e0b"
};
const getCategoryColor = (category)=>{
    return CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS.other;
};
const getKPIColor = (value, type)=>{
    if (type === 'savings') {
        return value >= 20 ? KPI_COLORS.positive : value >= 10 ? KPI_COLORS.warning : KPI_COLORS.negative;
    }
    if (type === 'net') {
        return value >= 0 ? KPI_COLORS.positive : KPI_COLORS.negative;
    }
    return type === 'income' ? KPI_COLORS.positive : KPI_COLORS.negative;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/WrappedSummaryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WrappedSummaryCard",
    ()=>WrappedSummaryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) <export default as ArrowDownRight>");
"use client";
;
;
;
;
const KPI_ITEMS = [
    {
        key: 'netIncome',
        label: 'Net Income',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        type: 'net',
        getValue: (metrics)=>metrics.netIncome.amount,
        format: (value)=>"$".concat(value.toLocaleString()),
        getCaption: (metrics)=>metrics.netIncome.amount >= 0 ? 'Great progress!' : 'Room to improve'
    },
    {
        key: 'savingsRate',
        label: 'Savings Rate',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        type: 'savings',
        getValue: (metrics)=>metrics.savingsRate,
        format: (value)=>"".concat(value.toFixed(1), "%"),
        getCaption: (metrics)=>metrics.savingsRate >= 20 ? 'Excellent!' : metrics.savingsRate >= 10 ? 'On track' : 'Needs attention'
    },
    {
        key: 'totalIncome',
        label: 'Income',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        type: 'income',
        getValue: (metrics)=>metrics.totalIncome.amount,
        format: (value)=>"$".concat(value.toLocaleString()),
        getCaption: ()=>'This month'
    },
    {
        key: 'totalExpenses',
        label: 'Expenses',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
        type: 'expense',
        getValue: (metrics)=>metrics.totalExpenses.amount,
        format: (value)=>"$".concat(value.toLocaleString()),
        getCaption: ()=>'This month'
    }
];
function WrappedSummaryCard(param) {
    let { metrics, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "card-glass ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
                children: KPI_ITEMS.map((item)=>{
                    const value = item.getValue(metrics);
                    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKPIColor"])(value, item.type);
                    const Icon = item.icon;
                    const isPositive = item.type === 'net' ? value >= 0 : item.type === 'savings' ? value >= 10 : item.type === 'income';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110",
                                        style: {
                                            backgroundColor: "".concat(color, "15"),
                                            border: "1px solid ".concat(color, "30")
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-5 h-5",
                                            style: {
                                                color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-text-tertiary mb-1",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        className: "w-3 h-3 mr-1",
                                                        style: {
                                                            color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                        className: "w-3 h-3 mr-1",
                                                        style: {
                                                            color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-text-tertiary",
                                                        children: item.getCaption(metrics)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold tabular-nums",
                                style: {
                                    color
                                },
                                children: item.format(value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.key, true, {
                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                        lineNumber: 77,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c = WrappedSummaryCard;
var _c;
__turbopack_context__.k.register(_c, "WrappedSummaryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/QuickFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickFilters",
    ()=>QuickFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FILTER_GROUPS = [
    {
        label: "Time",
        filters: [
            {
                id: "weekday",
                label: "Weekday",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
            },
            {
                id: "weekend",
                label: "Weekend",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
            }
        ]
    },
    {
        label: "Location",
        filters: [
            {
                id: "on-campus",
                label: "On-campus",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
            },
            {
                id: "off-campus",
                label: "Off-campus",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
            }
        ]
    }
];
function QuickFilters(param) {
    let { className } = param;
    _s();
    const [selectedFilters, setSelectedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleFilter = (filterId)=>{
        setSelectedFilters((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(filterId)) {
                newSet.delete(filterId);
            } else {
                newSet.add(filterId);
            }
            return newSet;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "card-glass h-full ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-text mb-2",
                                children: "Quick Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-sm",
                                children: "Focus on specific patterns"
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: FILTER_GROUPS.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-text-tertiary mb-3 uppercase tracking-wide",
                                        children: group.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: group.filters.map((filter)=>{
                                            const Icon = filter.icon;
                                            const isSelected = selectedFilters.has(filter.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: isSelected ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>toggleFilter(filter.id),
                                                className: "\n                          text-xs font-medium transition-all duration-200\n                          ".concat(isSelected ? 'bg-accent-1 text-white shadow-md hover:bg-accent-1/90 hover:shadow-lg hover:-translate-y-0.5' : 'border-white/20 text-text-secondary hover:border-accent-1/50 hover:text-accent-1 hover:bg-accent-1/5', "\n                        "),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-3 h-3 mr-1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 25
                                                    }, this),
                                                    filter.label
                                                ]
                                            }, filter.id, true, {
                                                fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                                lineNumber: 70,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, group.label, true, {
                                fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 h-1 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 rounded-full opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/QuickFilters.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(QuickFilters, "f0cE7iWTzzKqmEbDivkVrypdoHQ=");
_c = QuickFilters;
var _c;
__turbopack_context__.k.register(_c, "QuickFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/TopMerchants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopMerchants",
    ()=>TopMerchants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
"use client";
;
;
;
;
function TopMerchants(param) {
    let { metrics, className } = param;
    // Mock merchant data based on categories for now
    const merchants = metrics.categoryBreakdown.slice(0, 5).map((category)=>({
            id: category.category,
            name: getMerchantName(category.category),
            category: category.category,
            amount: category.amount.amount,
            transactionCount: category.transactionCount,
            trend: Math.random() > 0.5 ? 'up' : 'down',
            trendValue: Math.floor(Math.random() * 20) + 1,
            location: Math.random() > 0.5 ? 'on-campus' : 'off-campus'
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "card-elevated ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl font-semibold flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                className: "w-5 h-5 mr-2 text-accent-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            "Top Merchants"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Your most frequented places"
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: merchants.map((merchant, index)=>{
                        const categoryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryColor"])(merchant.category);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3 group cursor-pointer hover:bg-muted/20 rounded-lg p-2 -m-2 transition-all duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center shadow-sm",
                                    style: {
                                        backgroundColor: "".concat(categoryColor.base, "15"),
                                        border: "1px solid ".concat(categoryColor.base, "30")
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: categoryColor.base
                                        },
                                        children: merchant.name.charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-text truncate",
                                                    title: merchant.name,
                                                    children: merchant.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center text-xs text-text-tertiary",
                                                    children: [
                                                        merchant.trend === 'up' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-3 h-3 mr-1 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-3 h-3 mr-1 text-red-400 rotate-180"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: merchant.trend === 'up' ? 'text-emerald-400' : 'text-red-400',
                                                            children: [
                                                                merchant.trendValue,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 text-xs text-text-tertiary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            merchant.location === 'on-campus' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                className: "w-3 h-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-3 h-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "capitalize",
                                                                children: merchant.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-3 h-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    merchant.transactionCount,
                                                                    " visits"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-text tabular-nums",
                                            children: [
                                                "$",
                                                merchant.amount.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-text-tertiary",
                                            children: [
                                                "#",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, merchant.id, true, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = TopMerchants;
function getMerchantName(category) {
    const merchantMap = {
        food: "Campus Dining",
        books: "University Bookstore",
        transportation: "Uber",
        housing: "Student Housing",
        shopping: "Target",
        entertainment: "Netflix",
        utilities: "Electric Company",
        healthcare: "Student Health Center",
        tuition: "University Bursar",
        income: "Work Study",
        refund: "Financial Aid",
        other: "Miscellaneous"
    };
    return merchantMap[category] || category;
}
var _c;
__turbopack_context__.k.register(_c, "TopMerchants");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/CategoryBreakdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryBreakdown",
    ()=>CategoryBreakdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
"use client";
;
;
;
;
function CategoryBreakdown(param) {
    let { metrics, className } = param;
    const categories = metrics.categoryBreakdown.slice(0, 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "card-elevated ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl font-semibold flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                className: "w-5 h-5 mr-2 text-accent-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            "Spending by Category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Click a bar to filter transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: categories.map((category, index)=>{
                        const categoryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryColor"])(category.category);
                        const isTopCategory = index < 3;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group cursor-pointer hover:bg-muted/10 rounded-lg p-3 -m-3 transition-all duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 rounded-full shadow-sm",
                                                    style: {
                                                        backgroundColor: categoryColor.base
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-text capitalize",
                                                            children: category.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 23
                                                        }, this),
                                                        isTopCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-xs text-accent-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Top category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-text tabular-nums",
                                                    children: [
                                                        "$",
                                                        category.amount.amount.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-tertiary",
                                                    children: [
                                                        category.percentage.toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-muted/30 rounded-full h-2 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 rounded-full transition-all duration-500 group-hover:shadow-sm",
                                                style: {
                                                    width: "".concat(category.percentage, "%"),
                                                    background: "linear-gradient(90deg, ".concat(categoryColor.base, ", ").concat(categoryColor.tint, ")")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs text-text-tertiary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        category.transactionCount,
                                                                        " transactions"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 rounded-full mr-1",
                                                                    style: {
                                                                        backgroundColor: categoryColor.tint
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Avg: $",
                                                                        Math.round(category.amount.amount / category.transactionCount).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        style: {
                                                            color: categoryColor.base
                                                        },
                                                        children: [
                                                            "#",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, category.category, true, {
                            fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/wrapped/CategoryBreakdown.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = CategoryBreakdown;
var _c;
__turbopack_context__.k.register(_c, "CategoryBreakdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedSummaryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/WrappedSummaryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$QuickFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/QuickFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TopMerchants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/TopMerchants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBreakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/CategoryBreakdown.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/viz/vizTheme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Recharts theme configuration for consistent chart styling
 */ __turbopack_context__.s([
    "CHART_COLORS",
    ()=>CHART_COLORS,
    "getCategoryChartColor",
    ()=>getCategoryChartColor,
    "rechartsTheme",
    ()=>rechartsTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
;
const CHART_COLORS = [
    '#22d3ee',
    '#34d399',
    '#60a5fa',
    '#818cf8',
    '#f472b6',
    '#f59e0b',
    '#a78bfa',
    '#f87171',
    '#06b6d4',
    '#10b981'
];
const rechartsTheme = {
    colors: CHART_COLORS,
    categoryColors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"],
    // Common chart styling
    common: {
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 12,
        fontWeight: 500
    },
    // Bar chart specific
    bar: {
        radius: 4,
        strokeWidth: 0,
        fillOpacity: 0.8
    },
    // Line chart specific
    line: {
        strokeWidth: 3,
        strokeOpacity: 1,
        dotRadius: 4,
        dotStrokeWidth: 2
    },
    // Area chart specific
    area: {
        fillOpacity: 0.1,
        strokeWidth: 2
    },
    // Grid and axes
    grid: {
        stroke: '#374151',
        strokeWidth: 1,
        strokeOpacity: 0.1
    },
    axis: {
        stroke: '#6b7280',
        strokeWidth: 1,
        tickFontSize: 11,
        tickFill: '#9ca3af'
    },
    // Tooltip
    tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        border: '1px solid rgba(55, 65, 81, 0.3)',
        borderRadius: 8,
        padding: 12,
        fontSize: 12,
        color: '#f9fafb'
    },
    // Legend
    legend: {
        fontSize: 11,
        fontWeight: 500,
        color: '#d1d5db'
    }
};
const getCategoryChartColor = function(category) {
    let index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const categoryColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][category.toLowerCase()];
    return categoryColor ? categoryColor.base : CHART_COLORS[index % CHART_COLORS.length];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/CategoryBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryBarChart",
    ()=>CategoryBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$vizTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/vizTheme.ts [app-client] (ecmascript)");
"use client";
;
;
;
function CategoryBarChart(param) {
    let { metrics, className } = param;
    const data = metrics.categoryBreakdown.slice(0, 6).map((category, index)=>({
            name: category.category.charAt(0).toUpperCase() + category.category.slice(1),
            value: category.amount.amount,
            percentage: category.percentage,
            transactions: category.transactionCount,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$vizTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryChartColor"])(category.category, index)
        }));
    const CustomTooltip = (param)=>{
        let { active, payload, label } = param;
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/95 border border-gray-700/50 rounded-lg p-3 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-100 font-medium mb-1",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300",
                                children: [
                                    "Amount: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-semibold",
                                        children: [
                                            "$",
                                            data.value.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                        lineNumber: 30,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300",
                                children: [
                                    "Percentage: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-semibold",
                                        children: [
                                            data.percentage.toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                        lineNumber: 33,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300",
                                children: [
                                    "Transactions: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-semibold",
                                        children: data.transactions
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-64 ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        stroke: "#374151",
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "name",
                        stroke: "#9ca3af",
                        fontSize: 11,
                        tickLine: false,
                        axisLine: false,
                        angle: -45,
                        textAnchor: "end",
                        height: 60
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        stroke: "#9ca3af",
                        fontSize: 11,
                        tickLine: false,
                        axisLine: false,
                        tickFormatter: (value)=>"$".concat((value / 1000).toFixed(0), "k")
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                            fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                            lineNumber: 75,
                            columnNumber: 29
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "value",
                        radius: [
                            4,
                            4,
                            0,
                            0
                        ],
                        fill: "#22d3ee",
                        children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                fill: entry.color,
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ]
                            }, "cell-".concat(index), false, {
                                fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts/CategoryBarChart.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = CategoryBarChart;
var _c;
__turbopack_context__.k.register(_c, "CategoryBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/TrendLineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendLineChart",
    ()=>TrendLineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
"use client";
;
;
function TrendLineChart(param) {
    let { metrics, className } = param;
    // Generate mock daily data for the trend chart
    const generateDailyData = ()=>{
        const daysInMonth = new Date(2025, 7, 0).getDate() // August has 31 days
        ;
        const data = [];
        for(let day = 1; day <= daysInMonth; day++){
            const date = new Date(2025, 7, day);
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const baseAmount = metrics.spendingPatterns.averageDailySpending.amount;
            const variation = Math.sin(day * 0.3) * 0.4 + Math.random() * 0.6 - 0.3;
            const weekendMultiplier = isWeekend ? 1.3 : 0.8;
            const amount = Math.max(0, baseAmount * (1 + variation) * weekendMultiplier);
            data.push({
                date: day,
                spending: amount,
                isWeekend,
                dayName: date.toLocaleDateString('en-US', {
                    weekday: 'short'
                })
            });
        }
        return data;
    };
    const data = generateDailyData();
    const CustomTooltip = (param)=>{
        let { active, payload, label } = param;
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/95 border border-gray-700/50 rounded-lg p-3 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-100 font-medium mb-1",
                        children: [
                            "Day ",
                            label,
                            " (",
                            data.dayName,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300",
                                children: [
                                    "Spending: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-semibold",
                                        children: [
                                            "$",
                                            data.spending.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            data.isWeekend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-400 text-xs",
                                children: "Weekend"
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-64 ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "spendingGradient",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: "#22d3ee",
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "95%",
                                    stopColor: "#22d3ee",
                                    stopOpacity: 0.05
                                }, void 0, false, {
                                    fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        stroke: "#374151",
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "date",
                        stroke: "#9ca3af",
                        fontSize: 11,
                        tickLine: false,
                        axisLine: false,
                        tickCount: 6
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        stroke: "#9ca3af",
                        fontSize: 11,
                        tickLine: false,
                        axisLine: false,
                        tickFormatter: (value)=>"$".concat((value / 1000).toFixed(0), "k")
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                            fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                            lineNumber: 95,
                            columnNumber: 29
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        type: "monotone",
                        dataKey: "spending",
                        stroke: "#22d3ee",
                        strokeWidth: 3,
                        fill: "url(#spendingGradient)",
                        dot: {
                            fill: '#22d3ee',
                            strokeWidth: 2,
                            r: 4
                        },
                        activeDot: {
                            r: 6,
                            stroke: '#22d3ee',
                            strokeWidth: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts/TrendLineChart.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/charts/TrendLineChart.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts/TrendLineChart.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = TrendLineChart;
var _c;
__turbopack_context__.k.register(_c, "TrendLineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$CategoryBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/CategoryBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$TrendLineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/TrendLineChart.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-month-metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/wrapped/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedSummaryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/WrappedSummaryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$QuickFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/QuickFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TopMerchants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/TopMerchants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBreakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/CategoryBreakdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/charts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$TrendLineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/TrendLineChart.tsx [app-client] (ecmascript)");
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
;
;
const dynamic = 'force-dynamic';
function DashboardContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const month = searchParams.get('month') || '2025-08';
    // const { data: user } = useCurrentUser()
    const { data: monthMetrics, isLoading: metricsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonthMetrics"])(month);
    // Show loading state
    if (metricsLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary via-accent-1 to-accent-2 animate-spin",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-2 rounded-full bg-paper"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-text mb-2",
                        children: "Loading Your Financial Wrapped"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg",
                        children: "Preparing your personalized insights..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    // Show error state if no metrics available
    if (!(monthMetrics === null || monthMetrics === void 0 ? void 0 : monthMetrics.data)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in-up max-w-2xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-gradient-to-r from-accent-1/20 to-accent-2/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "📊"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        as: "h1",
                        size: "4xl",
                        className: "mb-6 text-balance bg-gradient-to-r from-text via-accent-1 to-accent-2 bg-clip-text text-transparent",
                        children: "No Data Available"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        color: "muted",
                        className: "mb-8 text-lg leading-relaxed text-pretty",
                        children: "We couldn't load your financial data. Please try uploading some transactions first to get started with your personalized financial insights."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        size: "lg",
                        className: "shadow-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/upload",
                            children: "Upload Transactions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-accent-1/5 via-accent-2/3 to-accent-3/5 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-tr from-transparent via-accent-1/10 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1264px] mx-auto px-6 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-12 gap-6 mb-12 pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 lg:col-span-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-balance text-5xl md:text-6xl font-semibold tracking-tight text-text mb-4",
                                                    children: [
                                                        "Your ",
                                                        new Date(monthMetrics.data.month + '-01').toLocaleDateString('en-US', {
                                                            month: 'long',
                                                            year: 'numeric'
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent",
                                                            children: "Wrapped"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-pretty leading-relaxed max-w-prose text-text-secondary text-lg",
                                                    children: "Discover your patterns, top merchants, and month-over-month changes."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedSummaryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WrappedSummaryCard"], {
                                            metrics: monthMetrics.data,
                                            className: "mb-8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 lg:col-span-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$QuickFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickFilters"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1264px] mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-12 gap-6 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBreakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryBreakdown"], {
                                    metrics: monthMetrics.data
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TopMerchants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopMerchants"], {
                                    metrics: monthMetrics.data
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-12 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "card-elevated",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-xl font-semibold flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 mr-2 bg-gradient-to-r from-accent-1 to-accent-2 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Trend Over Time"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Daily spending with weekend bands"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$TrendLineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrendLineChart"], {
                                                    metrics: monthMetrics.data
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-text-tertiary",
                                                        children: [
                                                            "MoM: ",
                                                            monthMetrics.data.trends.monthOverMonth.expenseChange > 0 ? '+' : '',
                                                            monthMetrics.data.trends.monthOverMonth.expenseChange.toFixed(1),
                                                            "% change"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "card-elevated",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-xl font-semibold flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 mr-2 bg-gradient-to-r from-accent-2 to-accent-3 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Standout Insights"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Key patterns this month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl bg-gradient-to-r from-accent-1/10 to-accent-1/5 border border-accent-1/20 cursor-pointer hover:from-accent-1/20 hover:to-accent-1/10 hover:shadow-md transition-all duration-200 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-medium text-text",
                                                                        children: "Late-night food"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-semibold text-accent-1",
                                                                        children: "↑ 18%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 169,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-text-tertiary",
                                                                children: "Click to filter transactions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl bg-gradient-to-r from-accent-2/10 to-accent-2/5 border border-accent-2/20 cursor-pointer hover:from-accent-2/20 hover:to-accent-2/10 hover:shadow-md transition-all duration-200 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-medium text-text",
                                                                        children: "Transportation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-semibold text-accent-2",
                                                                        children: "↓ 12%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-text-tertiary",
                                                                children: "Click to filter transactions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl bg-gradient-to-r from-accent-3/10 to-accent-3/5 border border-accent-3/20 cursor-pointer hover:from-accent-3/20 hover:to-accent-3/10 hover:shadow-md transition-all duration-200 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-medium text-text",
                                                                        children: "Books & supplies"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-semibold text-accent-3",
                                                                        children: "↑ 25%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-text-tertiary",
                                                                children: "Click to filter transactions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(DashboardContent, "Ku5W+fU3jbfV0WRvW6hQfDGxvL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonthMetrics"]
    ];
});
_c = DashboardContent;
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary via-accent-1 to-accent-2 animate-spin",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-2 rounded-full bg-paper"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-text mb-2",
                        children: "Loading Your Financial Wrapped"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg",
                        children: "Preparing your personalized insights..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardContent, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c1 = DashboardPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardContent");
__turbopack_context__.k.register(_c1, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d88783f9._.js.map