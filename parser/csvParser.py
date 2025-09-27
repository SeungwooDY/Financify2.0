import csv
import re
import sys
from bank_profiles import BANK_PROFILES

def extract_transactions_from_csv(csv_path):
	"""
	Reads a CSV file and extracts transactions (amount, date, description).
	Returns a list of dictionaries with keys: 'amount', 'date', 'description'.
	"""
	transactions = []
	# Accept bank argument
	if hasattr(csv_path, '__iter__') and len(csv_path) == 2:
		csv_path, bank = csv_path
	else:
		bank = 'capital_one'
	profile = BANK_PROFILES.get(bank, BANK_PROFILES['capital_one'])
	columns = profile['csv_columns']
	with open(csv_path, newline='', encoding='utf-8') as csvfile:
		reader = csv.reader(csvfile)
		header = next(reader, None)
		header_lower = [h.lower() for h in header] if header else []
		def find_idx(possibles):
			for col in possibles:
				if col in header_lower:
					return header_lower.index(col)
			return None
		# If header row is not a real header, treat all rows as data using fallback_columns
		fallback = profile.get('fallback_columns')
		has_named = any(find_idx(columns.get(field, [])) is not None for field in ['date', 'amount', 'description'])
		if fallback and not has_named:
			all_rows = [header] + list(reader) if header else list(reader)
			for row in all_rows:
				transactions.append({
					'amount': row[fallback['amount']] if len(row) > fallback['amount'] else None,
					'date': row[fallback['date']] if len(row) > fallback['date'] else None,
					'category': row[fallback['category']] if len(row) > fallback['category'] else None,
					'description': row[fallback['description']] if len(row) > fallback['description'] else ' '.join(row)
				})
		else:
			date_idx = find_idx(columns.get('date', []))
			amount_idx = find_idx(columns.get('amount', []))
			desc_idx = find_idx(columns.get('description', []))
			cat_idx = find_idx(columns.get('category', []))
			for row in reader:
				amount = row[amount_idx] if amount_idx is not None and amount_idx < len(row) else None
				date = row[date_idx] if date_idx is not None and date_idx < len(row) else None
				category = row[cat_idx] if cat_idx is not None and cat_idx < len(row) else None
				description = row[desc_idx] if desc_idx is not None and desc_idx < len(row) else ' '.join(row)
				if amount or date:
					transactions.append({
						'amount': amount,
						'date': date,
						'category': category,
						'description': description
					})
	return transactions

if __name__ == "__main__":
	if len(sys.argv) < 2:
		print("Usage: python csvParser.py <csv_path> [bank]")
	else:
		csv_path = sys.argv[1]
		bank = sys.argv[2] if len(sys.argv) > 2 else 'capital_one'
		transactions = extract_transactions_from_csv((csv_path, bank))
		print("Extracted Transactions:")
		if transactions:
			for idx, txn in enumerate(transactions, 1):
				print(f"Transaction {idx}:")
				for key, value in txn.items():
					print(f"  {key.capitalize()}: {value if value else 'Not found'}")
		else:
			print("No transactions found.")
