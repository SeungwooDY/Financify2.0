from collections import defaultdict
import datetime
from parser.pdfParser import extract_transactions_from_pdf

def analyze_transaction_data(transactions):
    """
    Analyzes a list of transactions and returns summary statistics.
    Each transaction is a dictionary with keys: 'amount', 'date', 'description', 'category'.
    """

    total_spent = 0.0
    category_totals = defaultdict(float)
    monthly_totals = defaultdict(float)

    for tx in transactions:
        try:
            amount = float(tx['amount'].replace('$', '').replace(',', ''))
            total_spent += amount
            category = tx.get('category', 'uncategorized')
            category_totals[category] += amount

            date_str = tx.get('date')
            if date_str:
                try:
                    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
                except ValueError:
                    try:
                        date_obj = datetime.datetime.strptime(date_str, '%Y-%m-%d')
                    except ValueError:
                        continue
                month_key = date_obj.strftime('%Y-%m')
                monthly_totals[month_key] += amount
        except Exception as e:
            print(f"Error processing transaction {tx}: {e}")
            continue

    avg_monthly_spent = (total_spent / len(monthly_totals)) if monthly_totals else 0.0

    return {
        'total_spent': total_spent,
        'avg_monthly_spent': avg_monthly_spent,
        'category_totals': dict(category_totals),
        'monthly_totals': dict(monthly_totals)
    }

transactions = extract_transactions_from_pdf("/path/to/your/statement.pdf")
# Now you can analyze the transactions list