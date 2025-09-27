import csv
import re
import sys

def extract_transactions_from_csv(csv_path):
	"""
	Reads a CSV file and extracts transactions (amount, date, description).
	Returns a list of dictionaries with keys: 'amount', 'date', 'description'.
	"""
	transactions = []
	with open(csv_path, newline='', encoding='utf-8') as csvfile:
		reader = csv.reader(csvfile)
		header = next(reader, None)
		# Find column indices
		header_lower = [h.lower() for h in header]
		try:
			desc_idx = header_lower.index('description')
		except ValueError:
			desc_idx = None
		try:
			cat_idx = header_lower.index('category')
		except ValueError:
			cat_idx = None
		# Try common amount/date headers
		amount_headers = ['amount', 'debit', 'credit']
		date_headers = ['transaction date', 'date', 'posted date']
		amount_idx = next((header_lower.index(h) for h in amount_headers if h in header_lower), None)
		date_idx = next((header_lower.index(h) for h in date_headers if h in header_lower), None)

		for row in reader:
			# Only add if at least amount or date is found
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
		print("Usage: python csvParser.py <csv_path>")
	else:
		csv_path = sys.argv[1]
		transactions = extract_transactions_from_csv(csv_path)
		print("Extracted Transactions:")
		if transactions:
			for idx, txn in enumerate(transactions, 1):
				print(f"Transaction {idx}:")
				for key, value in txn.items():
					print(f"  {key.capitalize()}: {value if value else 'Not found'}")
		else:
			print("No transactions found.")
