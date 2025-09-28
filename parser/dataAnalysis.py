from collections import defaultdict
import datetime
from parser.parser import get_transactions

file_path = "/path/to/your/statement.pdf"  # or .csv, .png, etc.
transactions = get_transactions(file_path)


def analyze_transaction_data_for_finances(transactions, month=None):
    """
    Analyzes a list of transactions and returns a dict matching the Finances model fields.
    Each transaction is a dictionary with keys: 'amount', 'date', 'description', 'category'.
    """
    # Categories as per Finances model
    categories = [
        'food', 'transportation', 'shopping', 'travel', 'entertainment',
        'education', 'tax', 'health', 'housing'
    ]
    # Initialize all fields
    result = {cat: 0.0 for cat in categories}
    total_spendings = 0.0
    total_earnings = 0.0
    selected_month = month
    month_str = None

    for tx in transactions:
        try:
            amount = float(tx['amount'].replace('$', '').replace(',', ''))
            category = tx.get('category', '').lower()
            date_str = tx.get('date')
            # Filter by month if provided
            if date_str:
                try:
                    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
                except ValueError:
                    try:
                        date_obj = datetime.datetime.strptime(date_str, '%Y-%m-%d')
                    except ValueError:
                        continue
                tx_month = date_obj.strftime('%Y-%m')
                if selected_month and tx_month != selected_month:
                    continue
                month_str = tx_month
            # Earnings vs spendings
            if amount > 0:
                total_earnings += amount
            else:
                total_spendings += abs(amount)
                # Map category to Finances fields
                for cat in categories:
                    if cat in category:
                        result[cat] += abs(amount)
                        break
        except Exception as e:
            print(f"Error processing transaction {tx}: {e}")
            continue

    net_balance = total_earnings - total_spendings
    return {
        'month': month_str or selected_month or '',
        'total_spendings': total_spendings,
        'total_earnings': total_earnings,
        'net_balance': net_balance,
        'food': result['food'],
        'transportation': result['transportation'],
        'shopping': result['shopping'],
        'travel': result['travel'],
        'entertainment': result['entertainment'],
        'education': result['education'],
        'tax': result['tax'],
        'health': result['health'],
        'housing': result['housing']
    }