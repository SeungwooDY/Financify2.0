import csv
import re

def extract_transactions_from_csv(csv_path):
	"""
	Reads a CSV file and extracts transactions (amount, date, description).
	Returns a list of dictionaries with keys: 'amount', 'date', 'description'.
	"""
	transactions = []
	amount_pattern = r'\$?([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})?)'
	date_pattern = r'(\d{1,2}/\d{1,2}/\d{2,4}|\d{4}-\d{2}-\d{2}|[A-Za-z]{3,9} \d{1,2}, \d{4})'

	with open(csv_path, newline='', encoding='utf-8') as csvfile:
		reader = csv.reader(csvfile)
		header = next(reader, None)  # Skip header row
		for row in reader:
			line = ' '.join(row)
			amount_match = re.search(amount_pattern, line)
			date_match = re.search(date_pattern, line)
			# Only add if at least amount or date is found
			if amount_match or date_match:
				transactions.append({
					'amount': amount_match.group(0) if amount_match else None,
					'date': date_match.group(0) if date_match else None,
					'description': line
				})
	return transactions

if __name__ == "__main__":
	import sys
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
