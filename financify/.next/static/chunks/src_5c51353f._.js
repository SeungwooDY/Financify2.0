(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/wrapped/WrappedSummaryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WrappedSummaryCard",
    ()=>WrappedSummaryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function WrappedSummaryCard(param) {
    let { metrics, className } = param;
    const isPositiveNetIncome = metrics.netIncome.amount >= 0;
    const isGoodSavingsRate = metrics.savingsRate >= 20;
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
            duration: 0.6,
            delay: 0.1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-xl blur-xl -z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: [
                                        "Your ",
                                        new Date(metrics.month + '-01').toLocaleDateString('en-US', {
                                            month: 'long',
                                            year: 'numeric'
                                        }),
                                        " Wrapped"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "A complete breakdown of your financial journey this month"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.3
                                    },
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "h-5 w-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Net Income"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl font-bold", isPositiveNetIncome ? "text-green-600" : "text-red-600"),
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(metrics.netIncome.amount, metrics.netIncome.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs",
                                            children: [
                                                isPositiveNetIncome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-3 w-3 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                    className: "h-3 w-3 text-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isPositiveNetIncome ? "text-green-600" : "text-red-600"),
                                                    children: [
                                                        isPositiveNetIncome ? "Positive" : "Negative",
                                                        " cash flow"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.4
                                    },
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"], {
                                                    className: "h-5 w-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Savings Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl font-bold", isGoodSavingsRate ? "text-green-600" : "text-orange-600"),
                                            children: [
                                                metrics.savingsRate.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", isGoodSavingsRate ? "bg-green-500" : "bg-orange-500")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isGoodSavingsRate ? "text-green-600" : "text-orange-600"),
                                                    children: isGoodSavingsRate ? "Great job!" : "Room to improve"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.5
                                    },
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-5 w-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Total Income"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-green-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(metrics.totalIncome.amount, metrics.totalIncome.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "+",
                                                metrics.trends.monthOverMonth.incomeChange.toFixed(1),
                                                "% from last month"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.6
                                    },
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                    className: "h-5 w-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Total Expenses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-red-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(metrics.totalExpenses.amount, metrics.totalExpenses.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                metrics.trends.monthOverMonth.expenseChange > 0 ? '+' : '',
                                                metrics.trends.monthOverMonth.expenseChange.toFixed(1),
                                                "% from last month"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.7
                            },
                            className: "mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-text mb-1",
                                                children: "This month's highlight"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "You spent most on ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-text",
                                                        children: metrics.spendingPatterns.mostExpensiveCategory
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 37
                                                    }, this),
                                                    " and made ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-text",
                                                        children: metrics.categoryBreakdown.reduce((sum, cat)=>sum + cat.transactionCount, 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 36
                                                    }, this),
                                                    " transactions in ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-text",
                                                        children: metrics.spendingPatterns.mostFrequentCategory
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 43
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/wrapped/WrappedSummaryCard.tsx",
        lineNumber: 20,
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
"[project]/src/components/charts/LazyChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyChart",
    ()=>LazyChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
// import { cn } from "@/lib/utils"
// Lazy load chart components
const VizBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c = ()=>__turbopack_context__.A("[project]/src/lib/viz/index.ts [app-client] (ecmascript, async loader)").then((module)=>({
            default: module.VizBar
        })));
_c1 = VizBar;
const VizLine = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c2 = ()=>__turbopack_context__.A("[project]/src/lib/viz/index.ts [app-client] (ecmascript, async loader)").then((module)=>({
            default: module.VizLine
        })));
_c3 = VizLine;
function ChartSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-muted animate-pulse rounded w-1/3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/LazyChart.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 bg-muted animate-pulse rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/LazyChart.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-muted animate-pulse rounded w-1/4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts/LazyChart.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts/LazyChart.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/charts/LazyChart.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts/LazyChart.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c4 = ChartSkeleton;
function LazyChart(param) {
    let { type, ...props } = param;
    const ChartComponent = type === 'bar' ? VizBar : VizLine;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartSkeleton, {}, void 0, false, {
            fileName: "[project]/src/components/charts/LazyChart.tsx",
            lineNumber: 40,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartComponent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/charts/LazyChart.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/charts/LazyChart.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c5 = LazyChart;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "VizBar$lazy");
__turbopack_context__.k.register(_c1, "VizBar");
__turbopack_context__.k.register(_c2, "VizLine$lazy");
__turbopack_context__.k.register(_c3, "VizLine");
__turbopack_context__.k.register(_c4, "ChartSkeleton");
__turbopack_context__.k.register(_c5, "LazyChart");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
"use client";
;
;
;
;
;
;
// Generate mock merchant data based on category breakdown
function generateMerchantData(metrics) {
    const merchants = [
        {
            name: "Amazon",
            category: "shopping",
            amount: 0,
            transactions: 0,
            location: "Online"
        },
        {
            name: "Starbucks",
            category: "food",
            amount: 0,
            transactions: 0,
            location: "Local"
        },
        {
            name: "Shell",
            category: "transportation",
            amount: 0,
            transactions: 0,
            location: "Local"
        },
        {
            name: "Netflix",
            category: "entertainment",
            amount: 0,
            transactions: 0,
            location: "Online"
        },
        {
            name: "Target",
            category: "shopping",
            amount: 0,
            transactions: 0,
            location: "Local"
        },
        {
            name: "Uber",
            category: "transportation",
            amount: 0,
            transactions: 0,
            location: "Online"
        },
        {
            name: "Chipotle",
            category: "food",
            amount: 0,
            transactions: 0,
            location: "Local"
        },
        {
            name: "Spotify",
            category: "entertainment",
            amount: 0,
            transactions: 0,
            location: "Online"
        },
        {
            name: "Walmart",
            category: "shopping",
            amount: 0,
            transactions: 0,
            location: "Local"
        },
        {
            name: "Apple",
            category: "shopping",
            amount: 0,
            transactions: 0,
            location: "Online"
        }
    ];
    // Distribute spending across merchants based on categories
    metrics.categoryBreakdown.forEach((categoryData)=>{
        const categoryMerchants = merchants.filter((m)=>m.category === categoryData.category);
        if (categoryMerchants.length > 0) {
            const amountPerMerchant = categoryData.amount.amount / categoryMerchants.length;
            const transactionsPerMerchant = Math.ceil(categoryData.transactionCount / categoryMerchants.length);
            categoryMerchants.forEach((merchant)=>{
                merchant.amount = amountPerMerchant;
                merchant.transactions = transactionsPerMerchant;
            });
        }
    });
    return merchants.filter((m)=>m.amount > 0).sort((a, b)=>b.amount - a.amount).slice(0, 6);
}
const MERCHANT_ICONS = {
    "Amazon": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 51,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    "Starbucks": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 52,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    "Shell": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 53,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    "Netflix": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 54,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    "Target": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 55,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    "Uber": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 56,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    "Chipotle": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 57,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    "Spotify": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 58,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    "Walmart": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 59,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    "Apple": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
        className: "h-4 w-4"
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 60,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0))
};
function TopMerchants(param) {
    let { metrics, className } = param;
    var _merchantData_, _merchantData_1, _merchantData_2;
    const merchantData = generateMerchantData(metrics);
    const totalMerchantSpending = merchantData.reduce((sum, merchant)=>sum + merchant.amount, 0);
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
            duration: 0.6,
            delay: 0.4
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-bold text-gray-900",
                            children: "Top Merchants"
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "Where you spent the most this month"
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: merchantData.map((merchant, index)=>{
                                const percentage = totalMerchantSpending > 0 ? merchant.amount / totalMerchantSpending * 100 : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.1 + index * 0.05
                                    },
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 p-2 bg-white rounded-lg shadow-sm",
                                                        children: MERCHANT_ICONS[merchant.name] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 59
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-medium text-gray-900 truncate break-words",
                                                                        title: merchant.name,
                                                                        children: merchant.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1 text-xs text-gray-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                className: "h-3 w-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                                lineNumber: 112,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate break-words",
                                                                                title: merchant.location,
                                                                                children: merchant.location
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-sm text-gray-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            merchant.transactions,
                                                                            " transaction",
                                                                            merchant.transactions !== 1 ? 's' : ''
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            percentage.toFixed(1),
                                                                            "% of total"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right flex-shrink-0 ml-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-gray-900",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(merchant.amount, metrics.totalExpenses.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(merchant.amount / merchant.transactions, metrics.totalExpenses.currency, {
                                                                showCents: false
                                                            }),
                                                            " avg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                }, merchant.name, false, {
                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.7
                            },
                            className: "pt-4 border-t border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-3 bg-blue-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-blue-600",
                                                children: merchantData.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-blue-600",
                                                children: "Unique Merchants"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-3 bg-green-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-green-600",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalMerchantSpending, metrics.totalExpenses.currency, {
                                                    showCents: false
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-green-600",
                                                children: "Total Spent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.8
                            },
                            className: "p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900 mb-1",
                                                children: "Spending insight"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    "You spent most at ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-900",
                                                        children: (_merchantData_ = merchantData[0]) === null || _merchantData_ === void 0 ? void 0 : _merchantData_.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 37
                                                    }, this),
                                                    " with ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-900",
                                                        children: (_merchantData_1 = merchantData[0]) === null || _merchantData_1 === void 0 ? void 0 : _merchantData_1.transactions
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 32
                                                    }, this),
                                                    " transactions totaling ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-900",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(((_merchantData_2 = merchantData[0]) === null || _merchantData_2 === void 0 ? void 0 : _merchantData_2.amount) || 0, metrics.totalExpenses.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 49
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sr-only",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                        children: [
                                            "Top merchants for ",
                                            metrics.month
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Merchant"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Amount Spent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Transaction Count"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Average per Transaction"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Percentage of Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: merchantData.map((merchant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: merchant.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: merchant.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(merchant.amount, metrics.totalExpenses.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: merchant.transactions
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(merchant.amount / merchant.transactions, metrics.totalExpenses.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: [
                                                            (merchant.amount / totalMerchantSpending * 100).toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, merchant.name, true, {
                                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TopMerchants.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c = TopMerchants;
var _c;
__turbopack_context__.k.register(_c, "TopMerchants");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/WrappedHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WrappedHero",
    ()=>WrappedHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedSummaryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/WrappedSummaryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LazyChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/LazyChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TopMerchants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/TopMerchants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Confetti animation component
function ConfettiAnimation() {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (shouldReduceMotion) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        children: [
            ...Array(20)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full",
                initial: {
                    x: Math.random() * 1200,
                    y: -10,
                    rotate: 0,
                    opacity: 1
                },
                animate: {
                    y: 800,
                    rotate: 360,
                    opacity: 0
                },
                transition: {
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                }
            }, i, false, {
                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ConfettiAnimation, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ConfettiAnimation;
// Ambient gradient ribbon
function AmbientRibbon() {
    _s1();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 1,
            delay: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl",
                animate: shouldReduceMotion ? {} : {
                    x: [
                        0,
                        50,
                        0
                    ],
                    y: [
                        0,
                        -30,
                        0
                    ],
                    scale: [
                        1,
                        1.1,
                        1
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl",
                animate: shouldReduceMotion ? {} : {
                    x: [
                        0,
                        -40,
                        0
                    ],
                    y: [
                        0,
                        20,
                        0
                    ],
                    scale: [
                        1,
                        0.9,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s1(AmbientRibbon, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = AmbientRibbon;
function WrappedHero(param) {
    let { metrics, className } = param;
    _s2();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.8
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative min-h-screen py-12", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientRibbon, {}, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfettiAnimation, {}, void 0, false, {
                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.2
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.4
                                },
                                className: "text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-text via-accent-1 to-purple-600 bg-clip-text text-transparent mb-4",
                                children: "Your Financial Wrapped"
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.6
                                },
                                className: "text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty",
                                children: [
                                    "Discover your spending patterns, top merchants, and financial insights for",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-text",
                                        children: new Date(metrics.month + '-01').toLocaleDateString('en-US', {
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.3
                                },
                                className: "lg:col-span-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedSummaryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WrappedSummaryCard"], {
                                    metrics: metrics
                                }, void 0, false, {
                                    fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 50
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.4
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LazyChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyChart"], {
                                            type: "bar",
                                            data: metrics.categoryBreakdown.map((cat)=>({
                                                    category: cat.category,
                                                    amount: cat.amount.amount,
                                                    percentage: cat.percentage
                                                })),
                                            xKey: "category",
                                            yKey: "amount",
                                            title: "Spending by Category",
                                            description: "Monthly spending breakdown by category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 xl:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -30
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.5
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LazyChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyChart"], {
                                                    type: "line",
                                                    data: metrics.trend_daily.map((day)=>({
                                                            day: new Date(day.date).getDate().toString(),
                                                            spending: day.totalSpending.amount
                                                        })),
                                                    xKey: "day",
                                                    yKey: "spending",
                                                    title: "Daily Spending Trend",
                                                    description: "Daily spending pattern throughout the month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 30
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TopMerchants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopMerchants"], {
                                                    metrics: metrics
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.8
                        },
                        className: "text-center mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: shouldReduceMotion ? {} : {
                                    scale: 1.05
                                },
                                whileTap: shouldReduceMotion ? {} : {
                                    scale: 0.95
                                },
                                className: "inline-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
                                    children: "View Detailed Analytics"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-4",
                                children: "Click on any category bar to filter your transactions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/wrapped/WrappedHero.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s2(WrappedHero, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = WrappedHero;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ConfettiAnimation");
__turbopack_context__.k.register(_c1, "AmbientRibbon");
__turbopack_context__.k.register(_c2, "WrappedHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/viz/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Recharts Theme System
 * 
 * Provides consistent theming, formatters, and color scales for data visualization
 * using the Financify design system tokens.
 */ __turbopack_context__.s([
    "breakpoints",
    ()=>breakpoints,
    "chartTheme",
    ()=>chartTheme,
    "colorScales",
    ()=>colorScales,
    "defaultColors",
    ()=>defaultColors,
    "formatCompactNumber",
    ()=>formatCompactNumber,
    "formatCurrencyValue",
    ()=>formatCurrencyValue,
    "formatDateAxis",
    ()=>formatDateAxis,
    "formatMonthAxis",
    ()=>formatMonthAxis,
    "formatPercentage",
    ()=>formatPercentage,
    "generateChartDescription",
    ()=>generateChartDescription,
    "generateColorPalette",
    ()=>generateColorPalette,
    "getAccessibleColors",
    ()=>getAccessibleColors,
    "getResponsiveDimensions",
    ()=>getResponsiveDimensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
const colorScales = {
    // Primary scale (blue spectrum)
    primary: {
        50: "hsl(var(--primary-50))",
        100: "hsl(var(--primary-100))",
        200: "hsl(var(--primary-200))",
        300: "hsl(var(--primary-300))",
        400: "hsl(var(--primary-400))",
        500: "hsl(var(--primary-500))",
        600: "hsl(var(--primary-600))",
        700: "hsl(var(--primary-700))",
        800: "hsl(var(--primary-800))",
        900: "hsl(var(--primary-900))",
        950: "hsl(var(--primary-950))"
    },
    // Success scale (green spectrum)
    success: {
        50: "hsl(var(--success-foreground))",
        100: "hsl(var(--success-foreground))",
        200: "hsl(var(--success-foreground))",
        300: "hsl(var(--success-foreground))",
        400: "hsl(var(--success-foreground))",
        500: "hsl(var(--success))",
        600: "hsl(var(--success))",
        700: "hsl(var(--success))",
        800: "hsl(var(--success))",
        900: "hsl(var(--success))",
        950: "hsl(var(--success))"
    },
    // Warning scale (orange spectrum)
    warning: {
        50: "hsl(var(--warning-foreground))",
        100: "hsl(var(--warning-foreground))",
        200: "hsl(var(--warning-foreground))",
        300: "hsl(var(--warning-foreground))",
        400: "hsl(var(--warning-foreground))",
        500: "hsl(var(--warning))",
        600: "hsl(var(--warning))",
        700: "hsl(var(--warning))",
        800: "hsl(var(--warning))",
        900: "hsl(var(--warning))",
        950: "hsl(var(--warning))"
    },
    // Destructive scale (red spectrum)
    destructive: {
        50: "hsl(var(--destructive-foreground))",
        100: "hsl(var(--destructive-foreground))",
        200: "hsl(var(--destructive-foreground))",
        300: "hsl(var(--destructive-foreground))",
        400: "hsl(var(--destructive-foreground))",
        500: "hsl(var(--destructive))",
        600: "hsl(var(--destructive))",
        700: "hsl(var(--destructive))",
        800: "hsl(var(--destructive))",
        900: "hsl(var(--destructive))",
        950: "hsl(var(--destructive))"
    },
    // Accent scales
    accent1: {
        50: "hsl(var(--accent-1) / 0.1)",
        100: "hsl(var(--accent-1) / 0.2)",
        200: "hsl(var(--accent-1) / 0.3)",
        300: "hsl(var(--accent-1) / 0.4)",
        400: "hsl(var(--accent-1) / 0.6)",
        500: "hsl(var(--accent-1))",
        600: "hsl(var(--accent-1) / 0.8)",
        700: "hsl(var(--accent-1) / 0.9)",
        800: "hsl(var(--accent-1) / 0.95)",
        900: "hsl(var(--accent-1) / 0.98)",
        950: "hsl(var(--accent-1) / 1)"
    },
    accent2: {
        50: "hsl(var(--accent-2) / 0.1)",
        100: "hsl(var(--accent-2) / 0.2)",
        200: "hsl(var(--accent-2) / 0.3)",
        300: "hsl(var(--accent-2) / 0.4)",
        400: "hsl(var(--accent-2) / 0.6)",
        500: "hsl(var(--accent-2))",
        600: "hsl(var(--accent-2) / 0.8)",
        700: "hsl(var(--accent-2) / 0.9)",
        800: "hsl(var(--accent-2) / 0.95)",
        900: "hsl(var(--accent-2) / 0.98)",
        950: "hsl(var(--accent-2) / 1)"
    },
    accent3: {
        50: "hsl(var(--accent-3) / 0.1)",
        100: "hsl(var(--accent-3) / 0.2)",
        200: "hsl(var(--accent-3) / 0.3)",
        300: "hsl(var(--accent-3) / 0.4)",
        400: "hsl(var(--accent-3) / 0.6)",
        500: "hsl(var(--accent-3))",
        600: "hsl(var(--accent-3) / 0.8)",
        700: "hsl(var(--accent-3) / 0.9)",
        800: "hsl(var(--accent-3) / 0.95)",
        900: "hsl(var(--accent-3) / 0.98)",
        950: "hsl(var(--accent-3) / 1)"
    }
};
const defaultColors = [
    colorScales.primary[500],
    colorScales.accent1[500],
    colorScales.success[500],
    colorScales.warning[500],
    colorScales.accent2[500],
    colorScales.destructive[500]
];
function generateColorPalette(count) {
    const baseColors = [
        colorScales.primary[500],
        colorScales.accent1[500],
        colorScales.success[500],
        colorScales.warning[500],
        colorScales.accent2[500],
        colorScales.destructive[500],
        colorScales.accent3[500],
        colorScales.primary[700],
        colorScales.accent1[700],
        colorScales.success[700]
    ];
    return Array.from({
        length: count
    }, (_, i)=>baseColors[i % baseColors.length]);
}
function formatCurrencyValue(value) {
    let currency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "USD";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value, currency, {
        showCents: false
    });
}
function formatDateAxis(value) {
    const date = new Date(value);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}
function formatMonthAxis(value) {
    const date = new Date(value);
    return date.toLocaleDateString('en-US', {
        month: 'short'
    });
}
function formatPercentage(value) {
    return "".concat(value.toFixed(1), "%");
}
function formatCompactNumber(value) {
    if (value >= 1000000) {
        return "".concat((value / 1000000).toFixed(1), "M");
    }
    if (value >= 1000) {
        return "".concat((value / 1000).toFixed(1), "K");
    }
    return value.toString();
}
const chartTheme = {
    // Colors
    colors: defaultColors,
    // Typography
    fontFamily: 'var(--font-sans)',
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
    },
    // Spacing
    margin: {
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
    },
    // Grid styling
    grid: {
        stroke: 'hsl(var(--border))',
        strokeWidth: 1,
        strokeDasharray: '3 3'
    },
    // Axis styling
    axis: {
        stroke: 'hsl(var(--text-tertiary))',
        strokeWidth: 1,
        fontSize: '0.875rem',
        fontFamily: 'var(--font-sans)',
        tick: {
            fill: 'hsl(var(--text-tertiary))',
            fontSize: '0.75rem'
        }
    },
    // Legend styling
    legend: {
        fontSize: '0.875rem',
        fontFamily: 'var(--font-sans)',
        fill: 'hsl(var(--text))'
    },
    // Tooltip styling
    tooltip: {
        backgroundColor: 'hsl(var(--paper-elevated))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '0.5rem',
        boxShadow: 'var(--shadow-lg)',
        fontSize: '0.875rem',
        fontFamily: 'var(--font-sans)',
        padding: '0.75rem'
    }
};
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
};
function getResponsiveDimensions() {
    let baseWidth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 400, baseHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300, containerWidth = arguments.length > 2 ? arguments[2] : void 0;
    if (!containerWidth) {
        return {
            width: baseWidth,
            height: baseHeight
        };
    }
    // Scale down for smaller screens
    if (containerWidth < breakpoints.sm) {
        return {
            width: Math.min(containerWidth - 32, baseWidth),
            height: Math.max(200, baseHeight * 0.8)
        };
    }
    if (containerWidth < breakpoints.md) {
        return {
            width: Math.min(containerWidth - 48, baseWidth),
            height: Math.max(250, baseHeight * 0.9)
        };
    }
    return {
        width: baseWidth,
        height: baseHeight
    };
}
function getAccessibleColors() {
    // High contrast colors that work well with the background
    return [
        colorScales.primary[600],
        colorScales.success[600],
        colorScales.warning[600],
        colorScales.destructive[600],
        colorScales.accent1[600],
        colorScales.accent2[600]
    ];
}
function generateChartDescription(chartType, data, title) {
    const dataPoints = data.length;
    const description = "".concat(chartType, " chart").concat(title ? ": ".concat(title) : '', " with ").concat(dataPoints, " data points");
    if (dataPoints > 0) {
        const values = data.map((d)=>typeof d === 'object' ? Object.values(d).find((v)=>typeof v === 'number') : d);
        const max = Math.max(...values.filter((v)=>typeof v === 'number'));
        const min = Math.min(...values.filter((v)=>typeof v === 'number'));
        return "".concat(description, ". Values range from ").concat(formatCurrencyValue(min), " to ").concat(formatCurrencyValue(max), ".");
    }
    return description;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/viz/theme-enhanced.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enhancedChartTheme",
    ()=>enhancedChartTheme,
    "formatCurrencyAxis",
    ()=>formatCurrencyAxis,
    "generateChartDescription",
    ()=>generateChartDescription,
    "getResponsiveChartTheme",
    ()=>getResponsiveChartTheme,
    "truncateLabel",
    ()=>truncateLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/theme.ts [app-client] (ecmascript)");
;
const enhancedChartTheme = {
    // Grid styling
    grid: {
        stroke: 'hsl(var(--border-secondary))',
        strokeDasharray: '2 4',
        strokeWidth: 1,
        opacity: 0.15
    },
    // Axis styling
    axis: {
        stroke: 'hsl(var(--text-secondary))',
        strokeWidth: 1,
        fontSize: '0.75rem',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        tick: {
            fill: 'hsl(var(--text-secondary))',
            fontSize: '0.75rem'
        },
        label: {
            fill: 'hsl(var(--text))',
            fontSize: '0.875rem',
            fontWeight: '500'
        }
    },
    // Tooltip styling
    tooltip: {
        wrapperStyle: {
            outline: 'none',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid hsl(var(--border))',
            backgroundColor: 'hsl(var(--paper-elevated))',
            padding: '0.75rem'
        },
        contentStyle: {
            backgroundColor: 'transparent',
            border: 'none',
            color: 'hsl(var(--text))',
            fontSize: '0.875rem',
            lineHeight: '1.5'
        },
        labelStyle: {
            color: 'hsl(var(--text-secondary))',
            fontSize: '0.75rem',
            fontWeight: '500',
            marginBottom: '0.25rem'
        }
    },
    // Legend styling
    legend: {
        wrapperStyle: {
            paddingTop: 'var(--spacing-md)',
            fontSize: '0.875rem'
        }
    },
    // Margins for tooltip safety
    margin: {
        top: 24,
        right: 40,
        left: 24,
        bottom: 24
    },
    // Responsive breakpoints
    responsive: {
        mobile: {
            margin: {
                top: 16,
                right: 20,
                left: 16,
                bottom: 16
            },
            fontSize: '0.75rem'
        },
        tablet: {
            margin: {
                top: 20,
                right: 30,
                left: 20,
                bottom: 20
            },
            fontSize: '0.875rem'
        },
        desktop: {
            margin: {
                top: 24,
                right: 40,
                left: 24,
                bottom: 24
            },
            fontSize: '0.875rem'
        }
    }
};
function getResponsiveChartTheme(containerWidth) {
    if (containerWidth < 640) {
        return {
            ...enhancedChartTheme,
            margin: enhancedChartTheme.responsive.mobile.margin,
            axis: {
                ...enhancedChartTheme.axis,
                fontSize: enhancedChartTheme.responsive.mobile.fontSize,
                tick: {
                    ...enhancedChartTheme.axis.tick,
                    fontSize: enhancedChartTheme.responsive.mobile.fontSize
                }
            }
        };
    } else if (containerWidth < 1024) {
        return {
            ...enhancedChartTheme,
            margin: enhancedChartTheme.responsive.tablet.margin,
            axis: {
                ...enhancedChartTheme.axis,
                fontSize: enhancedChartTheme.responsive.tablet.fontSize,
                tick: {
                    ...enhancedChartTheme.axis.tick,
                    fontSize: enhancedChartTheme.responsive.tablet.fontSize
                }
            }
        };
    }
    return enhancedChartTheme;
}
function formatCurrencyAxis(value) {
    if (value >= 1000000) {
        return "$".concat((value / 1000000).toFixed(1), "M");
    } else if (value >= 1000) {
        return "$".concat((value / 1000).toFixed(0), "K");
    }
    return "$".concat(value.toFixed(0));
}
function truncateLabel(label) {
    let maxLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 12;
    if (label.length <= maxLength) return label;
    return label.slice(0, maxLength - 3) + '...';
}
function generateChartDescription(chartType, data, title) {
    const dataPoints = data.length;
    const description = "".concat(chartType, " chart").concat(title ? ": ".concat(title) : '', " with ").concat(dataPoints, " data points");
    if (dataPoints > 0) {
        const values = data.map((d)=>{
            if (typeof d === 'object' && d !== null) {
                const numericValue = Object.values(d).find((v)=>typeof v === 'number');
                return numericValue;
            }
            return 0;
        }).filter((v)=>typeof v === 'number' && !isNaN(v));
        if (values.length > 0) {
            const max = Math.max(...values);
            const min = Math.min(...values);
            return "".concat(description, ". Values range from ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(min), " to ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(max), ".");
        }
    }
    return description;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/viz/components.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomLegend",
    ()=>CustomLegend,
    "CustomTooltip",
    ()=>CustomTooltip,
    "VizBar",
    ()=>VizBar,
    "VizLine",
    ()=>VizLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/theme-enhanced.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function CustomTooltip(param) {
    let { active, payload, label, formatter, labelFormatter } = param;
    if (!active || !payload || payload.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-border bg-paper-elevated p-3 shadow-lg",
        style: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].tooltip,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-text mb-2",
                children: labelFormatter ? labelFormatter(label || '') : label
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            payload.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 rounded-full",
                            style: {
                                backgroundColor: entry.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-text-secondary",
                            children: [
                                entry.dataKey,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono tabular-nums text-text",
                            children: formatter ? formatter(entry.value, entry.dataKey)[0] : String(entry.value)
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/lib/viz/components.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c = CustomTooltip;
function CustomLegend(param) {
    let { payload, verticalAlign = 'bottom', align = 'center' } = param;
    if (!payload || payload.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-4 justify-".concat(align === 'center' ? 'center' : align === 'right' ? 'end' : 'start', " ").concat(verticalAlign === 'top' ? 'mb-4' : 'mt-4'),
        children: payload.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 rounded-full",
                        style: {
                            backgroundColor: entry.color
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-text-secondary",
                        children: String(entry.value)
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/lib/viz/components.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c1 = CustomLegend;
function VizBar(param) {
    let { data, xKey, yKey, width = 400, height = 300, className, colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorPalette"])(1), showGrid = true, showLegend = false, showTooltip = true, title, description, // onBarClick,
    // selectedIndex,
    responsive = true, containerWidth } = param;
    const dimensions = responsive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveDimensions"])(width, height, containerWidth) : {
        width,
        height
    };
    const chartDescription = description || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateChartDescription"])('bar', data, title);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-text mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-md",
                role: "img",
                "aria-label": chartDescription,
                tabIndex: 0,
                onKeyDown: (e)=>{
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        // Focus management for keyboard users
                        const firstBar = e.currentTarget.querySelector('[role="button"]');
                        if (firstBar) {
                            firstBar.focus();
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: dimensions.height,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        margin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].margin,
                        children: [
                            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.strokeDasharray,
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.stroke,
                                strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.strokeWidth
                            }, void 0, false, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: xKey,
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.stroke,
                                strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.strokeWidth,
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.tick.fontSize,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.fontFamily,
                                tick: {
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.tick.fill
                                },
                                tickFormatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncateLabel"])(String(value), 12)
                            }, void 0, false, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.stroke,
                                strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.strokeWidth,
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.tick.fontSize,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.fontFamily,
                                tick: {
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enhancedChartTheme"].axis.tick.fill
                                },
                                tickFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2d$enhanced$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAxis"]
                            }, void 0, false, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                    fileName: "[project]/src/lib/viz/components.tsx",
                                    lineNumber: 252,
                                    columnNumber: 26
                                }, void 0),
                                formatter: (value)=>[
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(Number(value)),
                                        ''
                                    ],
                                labelFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"]
                            }, void 0, false, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this),
                            showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomLegend, {}, void 0, false, {
                                    fileName: "[project]/src/lib/viz/components.tsx",
                                    lineNumber: 259,
                                    columnNumber: 32
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: yKey,
                                fill: colors[0],
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                // onClick={onBarClick}
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-200 hover:opacity-80")
                            }, void 0, false, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                            children: chartDescription
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: xKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/viz/components.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: yKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/viz/components.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"])(String(item[xKey]))
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/viz/components.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(Number(item[yKey]))
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/viz/components.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/lib/viz/components.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/lib/viz/components.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_c2 = VizBar;
function VizLine(param) {
    let { data, xKey, yKey, width = 400, height = 300, className, colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorPalette"])(1), showGrid = true, showLegend = false, showTooltip = true, title, description, // onPointClick,
    // selectedIndex,
    responsive = true, containerWidth, type = 'line', strokeWidth = 2, fillOpacity = 0.6 } = param;
    const dimensions = responsive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveDimensions"])(width, height, containerWidth) : {
        width,
        height
    };
    const chartDescription = description || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateChartDescription"])(type, data, title);
    const yKeys = Array.isArray(yKey) ? yKey : [
        yKey
    ];
    const renderChart = ()=>{
        if (type === 'area') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].margin,
                children: [
                    showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.strokeDasharray,
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.stroke,
                        strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.strokeWidth
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 341,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: xKey,
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.stroke,
                        strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.strokeWidth,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fontSize,
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.fontFamily,
                        tick: {
                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fill
                        },
                        tickFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"]
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.stroke,
                        strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.strokeWidth,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fontSize,
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.fontFamily,
                        tick: {
                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fill
                        },
                        tickFormatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(value)
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this),
                    showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 369,
                            columnNumber: 24
                        }, void 0),
                        formatter: (value)=>[
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(Number(value)),
                                ''
                            ],
                        labelFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"]
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 368,
                        columnNumber: 13
                    }, this),
                    showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomLegend, {}, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 376,
                            columnNumber: 30
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 376,
                        columnNumber: 13
                    }, this),
                    yKeys.map((key, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: key,
                            stackId: "1",
                            stroke: colors[index % colors.length],
                            fill: colors[index % colors.length],
                            fillOpacity: fillOpacity,
                            strokeWidth: strokeWidth,
                            dot: {
                                r: 4,
                                fill: colors[index % colors.length]
                            },
                            activeDot: {
                                r: 6,
                                stroke: colors[index % colors.length],
                                strokeWidth: 2
                            }
                        }, key, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
            data: data,
            margin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].margin,
            children: [
                showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.strokeDasharray,
                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.stroke,
                    strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].grid.strokeWidth
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 404,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                    dataKey: xKey,
                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.stroke,
                    strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.strokeWidth,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fontSize,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.fontFamily,
                    tick: {
                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fill
                    },
                    tickFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"]
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.stroke,
                    strokeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.strokeWidth,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fontSize,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.fontFamily,
                    tick: {
                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTheme"].axis.tick.fill
                    },
                    tickFormatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(value)
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 421,
                    columnNumber: 9
                }, this),
                showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 432,
                        columnNumber: 22
                    }, void 0),
                    formatter: (value)=>[
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(Number(value)),
                            ''
                        ],
                    labelFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"]
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 431,
                    columnNumber: 11
                }, this),
                showLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomLegend, {}, void 0, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 439,
                        columnNumber: 28
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 439,
                    columnNumber: 11
                }, this),
                yKeys.map((key, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: key,
                        stroke: colors[index % colors.length],
                        strokeWidth: strokeWidth,
                        dot: {
                            r: 4,
                            fill: colors[index % colors.length]
                        },
                        activeDot: {
                            r: 6,
                            stroke: colors[index % colors.length],
                            strokeWidth: 2
                        }
                    }, key, false, {
                        fileName: "[project]/src/lib/viz/components.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/viz/components.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-text mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 460,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-md",
                role: "img",
                "aria-label": chartDescription,
                tabIndex: 0,
                onKeyDown: (e)=>{
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        // Focus management for keyboard users
                        const firstPoint = e.currentTarget.querySelector('[role="button"]');
                        if (firstPoint) {
                            firstPoint.focus();
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: dimensions.height,
                    children: renderChart()
                }, void 0, false, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                            children: chartDescription
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: xKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/lib/viz/components.tsx",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this),
                                    yKeys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: key
                                        }, key, false, {
                                            fileName: "[project]/src/lib/viz/components.tsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/lib/viz/components.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateAxis"])(String(item[xKey]))
                                        }, void 0, false, {
                                            fileName: "[project]/src/lib/viz/components.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this),
                                        yKeys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyValue"])(Number(item[key]))
                                            }, key, false, {
                                                fileName: "[project]/src/lib/viz/components.tsx",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/lib/viz/components.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/lib/viz/components.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/lib/viz/components.tsx",
                    lineNumber: 486,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/lib/viz/components.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/lib/viz/components.tsx",
        lineNumber: 458,
        columnNumber: 5
    }, this);
}
_c3 = VizLine;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CustomTooltip");
__turbopack_context__.k.register(_c1, "CustomLegend");
__turbopack_context__.k.register(_c2, "VizBar");
__turbopack_context__.k.register(_c3, "VizLine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/viz/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Re-export all visualization components and utilities
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/components.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/CategoryBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryBarChart",
    ()=>CategoryBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/viz/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/components.tsx [app-client] (ecmascript)");
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
const CATEGORY_COLORS = {
    tuition: "bg-blue-500",
    books: "bg-indigo-500",
    housing: "bg-purple-500",
    food: "bg-green-500",
    transportation: "bg-yellow-500",
    entertainment: "bg-pink-500",
    healthcare: "bg-red-500",
    utilities: "bg-orange-500",
    shopping: "bg-cyan-500",
    income: "bg-emerald-500",
    refund: "bg-teal-500",
    other: "bg-gray-500"
};
const CATEGORY_LABELS = {
    tuition: "Tuition",
    books: "Books & Supplies",
    housing: "Housing",
    food: "Food & Dining",
    transportation: "Transportation",
    entertainment: "Entertainment",
    healthcare: "Healthcare",
    utilities: "Utilities",
    shopping: "Shopping",
    income: "Income",
    refund: "Refunds",
    other: "Other"
};
function CategoryBarChart(param) {
    let { metrics, className } = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const selectedCategory = searchParams.get('category');
    const handleCategoryClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CategoryBarChart.useCallback[handleCategoryClick]": (category)=>{
            const params = new URLSearchParams(searchParams.toString());
            if (selectedCategory === category) {
                // If clicking the same category, remove the filter
                params.delete('category');
            } else {
                // Set the new category filter
                params.set('category', category);
            }
            router.push("?".concat(params.toString()), {
                scroll: false
            });
        }
    }["CategoryBarChart.useCallback[handleCategoryClick]"], [
        searchParams,
        router,
        selectedCategory
    ]);
    // Sort categories by amount (highest first) and take top 8
    const topCategories = metrics.categoryBreakdown.filter((cat)=>cat.category !== 'income' && cat.category !== 'refund').sort((a, b)=>b.amount.amount - a.amount.amount).slice(0, 8);
    const maxAmount = Math.max(...topCategories.map((cat)=>cat.amount.amount));
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
            duration: 0.6,
            delay: 0.2
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-bold text-gray-900",
                            children: "Spending by Category"
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "Click on a category to filter your transactions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VizBar"], {
                                data: topCategories.map((cat)=>({
                                        category: CATEGORY_LABELS[cat.category],
                                        amount: cat.amount.amount,
                                        percentage: cat.percentage,
                                        transactionCount: cat.transactionCount,
                                        originalCategory: cat.category
                                    })),
                                xKey: "category",
                                yKey: "amount",
                                title: "Spending by Category",
                                description: "Click on a category bar to filter your transactions",
                                colors: topCategories.map((cat)=>{
                                    const colorClass = CATEGORY_COLORS[cat.category];
                                    // Map Tailwind color classes to actual hex values
                                    const colorMap = {
                                        'bg-blue-500': '#3b82f6',
                                        'bg-indigo-500': '#6366f1',
                                        'bg-purple-500': '#8b5cf6',
                                        'bg-green-500': '#10b981',
                                        'bg-yellow-500': '#f59e0b',
                                        'bg-pink-500': '#ec4899',
                                        'bg-red-500': '#ef4444',
                                        'bg-orange-500': '#f97316',
                                        'bg-cyan-500': '#06b6d4',
                                        'bg-gray-500': '#6b7280'
                                    };
                                    return colorMap[colorClass] || '#6b7280';
                                }),
                                onBarClick: (data)=>handleCategoryClick(data.originalCategory),
                                selectedIndex: selectedCategory ? topCategories.findIndex((cat)=>cat.category === selectedCategory) : undefined,
                                responsive: true,
                                showTooltip: true,
                                showLegend: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 md:hidden",
                            children: topCategories.map((category, index)=>{
                                const percentage = maxAmount > 0 ? category.amount.amount / maxAmount * 100 : 0;
                                const isSelected = selectedCategory === category.category;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.1 + index * 0.05
                                    },
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCategoryClick(category.category),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left p-3 rounded-lg transition-all duration-200 hover:shadow-md", isSelected ? "bg-blue-50 border-2 border-blue-200 shadow-md" : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"),
                                        "aria-label": "Filter by ".concat(CATEGORY_LABELS[category.category], " category"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full flex-shrink-0", CATEGORY_COLORS[category.category])
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-gray-900",
                                                                children: CATEGORY_LABELS[category.category]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-gray-900",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(category.amount.amount, category.amount.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-500",
                                                                children: [
                                                                    category.percentage.toFixed(1),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full rounded-full transition-all duration-300", CATEGORY_COLORS[category.category], isSelected && "ring-2 ring-blue-300"),
                                                    initial: {
                                                        width: 0
                                                    },
                                                    animate: {
                                                        width: "".concat(percentage, "%")
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        delay: 0.2 + index * 0.1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs text-gray-500",
                                                children: [
                                                    category.transactionCount,
                                                    " transaction",
                                                    category.transactionCount !== 1 ? 's' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                lineNumber: 189,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this)
                                }, category.category, false, {
                                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.8
                            },
                            className: "pt-4 border-t border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: selectedCategory ? "Filtered by ".concat(CATEGORY_LABELS[selectedCategory]) : 'All categories shown'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCategoryClick(selectedCategory),
                                        className: "text-blue-600 hover:text-blue-700 font-medium",
                                        children: "Clear filter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sr-only",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                        children: "Spending by category breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Percentage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Transaction Count"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: topCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: CATEGORY_LABELS[category.category]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(category.amount.amount, category.amount.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: [
                                                            category.percentage.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: category.transactionCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, category.category, true, {
                                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/CategoryBarChart.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(CategoryBarChart, "SGeytC6DJcl69ivDN5Q92aoD6po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CategoryBarChart;
var _c;
__turbopack_context__.k.register(_c, "CategoryBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/CategoryBarChartWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryBarChartWrapper",
    ()=>CategoryBarChartWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/CategoryBarChart.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function CategoryBarChartWrapper(param) {
    let { metrics, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl rounded-lg p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 bg-muted animate-pulse rounded w-48"
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-muted animate-pulse rounded w-64"
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 bg-muted animate-pulse rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryBarChart"], {
            metrics: metrics,
            className: className
        }, void 0, false, {
            fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/CategoryBarChartWrapper.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = CategoryBarChartWrapper;
var _c;
__turbopack_context__.k.register(_c, "CategoryBarChartWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wrapped/TrendLineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendLineChart",
    ()=>TrendLineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/viz/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viz/components.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// Generate mock daily spending data for the trend line
function generateDailySpendingData(metrics) {
    const daysInMonth = new Date(metrics.month + '-01').getDate();
    const data = [];
    // Create a realistic spending pattern with some variation
    const baseDailyAmount = metrics.spendingPatterns.averageDailySpending.amount;
    // const highestDayAmount = metrics.spendingPatterns.highestSpendingDay.amount.amount
    for(let day = 1; day <= daysInMonth; day++){
        // Add some realistic variation to daily spending
        const variation = Math.sin(day * 0.3) * 0.3 + Math.random() * 0.4 - 0.2;
        const isWeekend = new Date(metrics.month + "-".concat(day.toString().padStart(2, '0'))).getDay() % 6 === 0;
        const weekendMultiplier = isWeekend ? 1.2 : 0.9;
        const amount = Math.max(0, baseDailyAmount * (1 + variation) * weekendMultiplier);
        data.push({
            day: day.toString(),
            date: "".concat(metrics.month, "-").concat(day.toString().padStart(2, '0')),
            spending: Math.round(amount),
            cumulative: data.length > 0 ? data[data.length - 1].cumulative + Math.round(amount) : Math.round(amount)
        });
    }
    return data;
}
function TrendLineChart(param) {
    let { metrics, className } = param;
    const dailyData = generateDailySpendingData(metrics);
    const totalSpending = dailyData.reduce((sum, day)=>sum + day.spending, 0);
    const averageDaily = totalSpending / dailyData.length;
    const highestDay = dailyData.reduce((max, day)=>day.spending > max.spending ? day : max, dailyData[0]);
    const isTrendingUp = metrics.trends.weekOverWeek.expenseChange > 0;
    const trendIcon = isTrendingUp ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"];
    const trendColor = isTrendingUp ? "text-red-500" : "text-green-500";
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
            duration: 0.6,
            delay: 0.3
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-bold text-gray-900",
                            children: "Daily Spending Trend"
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "Your spending pattern throughout the month"
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.4
                                    },
                                    className: "text-center p-3 bg-gray-50 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(averageDaily, metrics.totalExpenses.currency, {
                                                showCents: false
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-600",
                                            children: "Daily Average"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.5
                                    },
                                    className: "text-center p-3 bg-gray-50 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: highestDay.day
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-600",
                                            children: "Highest Day"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.6
                                    },
                                    className: "text-center p-3 bg-gray-50 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: dailyData.filter((d)=>d.spending > averageDaily).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-600",
                                            children: "Above Avg Days"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.7
                            },
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viz$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VizLine"], {
                                data: dailyData,
                                xKey: "day",
                                yKey: "spending",
                                title: "Daily Spending Trend",
                                description: "Your spending pattern throughout the month",
                                type: "line",
                                strokeWidth: 2,
                                responsive: true,
                                showTooltip: true,
                                showLegend: false,
                                onPointClick: (data)=>{
                                    // Optional: Handle point clicks for drill-down functionality
                                    console.log('Clicked on day:', data.day, 'Spending:', data.spending);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.8
                            },
                            className: "p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-full", isTrendingUp ? "bg-red-100" : "bg-green-100"),
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(trendIcon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", trendColor)
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900 mb-1",
                                                children: "Spending Trend"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: isTrendingUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Your spending is ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-red-600",
                                                            children: "increasing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 40
                                                        }, this),
                                                        " by ",
                                                        Math.abs(metrics.trends.weekOverWeek.expenseChange).toFixed(1),
                                                        "% week over week."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Your spending is ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-green-600",
                                                            children: "decreasing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 40
                                                        }, this),
                                                        " by ",
                                                        Math.abs(metrics.trends.weekOverWeek.expenseChange).toFixed(1),
                                                        "% week over week."
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sr-only",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                        children: [
                                            "Daily spending data for ",
                                            metrics.month
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Daily Spending"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Cumulative Spending"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: dailyData.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: day.day
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: day.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(day.spending, metrics.totalExpenses.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(day.cumulative, metrics.totalExpenses.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, day.day, true, {
                                                fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/wrapped/TrendLineChart.tsx",
        lineNumber: 57,
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
"[project]/src/components/wrapped/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/WrappedHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedSummaryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/WrappedSummaryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/CategoryBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$CategoryBarChartWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/CategoryBarChartWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TrendLineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/TrendLineChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$TopMerchants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/TopMerchants.tsx [app-client] (ecmascript)");
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
"[project]/src/components/ui/typography.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>Heading,
    "Money",
    ()=>Money,
    "Prose",
    ()=>Prose,
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Heading(param) {
    let { as: Component = "h2", size = "2xl", weight = "semibold", balance = true, className, children, ...props } = param;
    const sizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl md:text-3xl",
        "3xl": "text-3xl md:text-4xl",
        "4xl": "text-4xl md:text-5xl",
        "5xl": "text-5xl md:text-6xl"
    };
    const weightClasses = {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size], weightClasses[weight], balance && "text-balance", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/typography.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = Heading;
function Text(param) {
    let { as: Component = "p", size = "base", weight = "normal", color = "default", pretty = false, hyphens = false, truncate = false, className, children, ...props } = param;
    const sizeClasses = {
        xs: "text-xs",
        sm: "text-sm md:text-base",
        base: "text-sm md:text-base",
        lg: "text-base md:text-lg"
    };
    const weightClasses = {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold"
    };
    const colorClasses = {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        destructive: "text-destructive"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size], weightClasses[weight], colorClasses[color], pretty && "text-pretty", hyphens && "text-hyphens", truncate && "truncate-safe", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/typography.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c1 = Text;
function Prose(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("prose-optimal text-pretty leading-relaxed", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/typography.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c2 = Prose;
function Money(param) {
    let { amount, currency = "USD", showCents = false, className, ...props } = param;
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: showCents ? 2 : 0,
        maximumFractionDigits: showCents ? 2 : 0
    }).format(amount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tabular-nums font-mono", className),
        ...props,
        children: formatted
    }, void 0, false, {
        fileName: "[project]/src/components/ui/typography.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c3 = Money;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Heading");
__turbopack_context__.k.register(_c1, "Text");
__turbopack_context__.k.register(_c2, "Prose");
__turbopack_context__.k.register(_c3, "Money");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/wrapped/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wrapped/WrappedHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-month-metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-transactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const dynamic = 'force-dynamic';
;
;
;
;
;
;
;
;
;
function DashboardContent() {
    var _transactions_data;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const month = searchParams.get('month') || '2025-08';
    // const { data: user } = useCurrentUser()
    const { data: monthMetrics, isLoading: metricsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonthMetrics"])(month);
    const { data: transactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactions"])(1, 5);
    // Show loading state
    if (metricsLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading your financial wrapped..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    // Show error state if no metrics available
    if (!(monthMetrics === null || monthMetrics === void 0 ? void 0 : monthMetrics.data)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        as: "h1",
                        size: "4xl",
                        className: "mb-4 text-balance force-normal-wrap",
                        children: "No Data Available"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        color: "muted",
                        className: "mb-6 text-pretty force-normal-wrap",
                        children: "We couldn't load your financial data. Please try uploading some transactions first."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/upload",
                            children: "Upload Transactions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wrapped$2f$WrappedHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WrappedHero"], {
                metrics: monthMetrics.data
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 md:space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                as: "h2",
                                size: "2xl",
                                className: "mb-6 text-balance force-normal-wrap",
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/upload",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-md transition-shadow cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-medium",
                                                            children: "Upload Transactions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        color: "muted",
                                                        children: "Import your bank statements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/transactions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-md transition-shadow cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-medium",
                                                            children: "View Transactions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        color: "muted",
                                                        children: "Manage your transactions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/calendar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-md transition-shadow cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-medium",
                                                            children: "Calendar View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        color: "muted",
                                                        children: "See your financial calendar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/budget",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-md transition-shadow cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-medium",
                                                            children: "Budget Planning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"], {
                                                            className: "h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        color: "muted",
                                                        children: "Plan and track your budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Recent Transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Your latest financial activity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    (transactions === null || transactions === void 0 ? void 0 : (_transactions_data = transactions.data) === null || _transactions_data === void 0 ? void 0 : _transactions_data.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: transactions.data.map((transaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full ".concat(transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium truncate",
                                                                        title: transaction.description,
                                                                        children: transaction.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-muted-foreground truncate",
                                                                        title: "".concat(transaction.category, " • ").concat(new Date(transaction.date).toLocaleDateString()),
                                                                        children: [
                                                                            transaction.category,
                                                                            " • ",
                                                                            new Date(transaction.date).toLocaleDateString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium tabular-nums ".concat(transaction.type === 'income' ? 'text-green-600' : 'text-red-600'),
                                                        children: [
                                                            transaction.type === 'income' ? '+' : '-',
                                                            "$",
                                                            Math.abs(transaction.amount.amount).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, transaction.id, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "No transactions found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/transactions",
                                                children: "View All Transactions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 136,
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
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DashboardContent, "KE7HzdjEZAXQpglEbgOLrBw1k0w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$month$2d$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonthMetrics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactions"]
    ];
});
_c = DashboardContent;
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading your financial wrapped..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 178,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardContent, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 177,
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

//# sourceMappingURL=src_5c51353f._.js.map