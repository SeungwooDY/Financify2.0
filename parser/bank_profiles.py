BANK_PROFILES = {
    'capital_one': {
        'date_pattern': r'^(?:[A-Za-z]{3,9} \d{1,2}) (?:[A-Za-z]{3,9} \d{1,2})|\d{2}/\d{2}/\d{4}',
        'amount_pattern': r'\$?([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})|[0-9]+\.[0-9]{2})',
        'exclude_keywords': ['page', 'totals', 'summary', 'balance'],
        'csv_columns': {
            'date': ['transaction date', 'date', 'posted date'],
            'amount': ['amount', 'debit', 'credit'],
            'description': ['description', 'transaction description', 'details'],
            'category': ['category', 'type']
        },
        'categories': [
            'payment', 'purchase', 'payroll', 'withdrawal', 'transfer', 'autopay', 'credit', 'debit', 'fee', 'interest', 'cash advance', 'refund', 'adjustment', 'reversal', 'charge', 'deposit', 'cashout', 'verify', 'restaurant', 'retail', 'gas', 'groceries', 'utilities', 'entertainment', 'travel', 'hotel', 'airline', 'online', 'subscription', 'service', 'insurance', 'medical', 'education', 'charity', 'tax', 'atm', 'mobile', 'app', 'store', 'bank', 'card', 'bill', 'payment'
        ],
        'fallback_columns': {'date': 0, 'amount': 1, 'category': 2, 'description': 4}
    },
    'wells_fargo': {
        'date_pattern': r'^(\d{1,2}/\d{1,2}(?:/\d{2,4})?|\d{4}-\d{2}-\d{2}|[A-Za-z]{3,9} \d{1,2}, \d{4})',
        'amount_pattern': r'\$?([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})|[0-9]+\.[0-9]{2})',
        'exclude_keywords': ['page', 'totals'],
        'csv_columns': {
            'date': ['transaction date', 'date', 'posted date'],
            'amount': ['amount', 'debit', 'credit'],
            'description': ['description'],
            'category': ['category']
        },
        'fallback_columns': {'date': 0, 'amount': 1, 'category': 2, 'description': 4}
    }
}