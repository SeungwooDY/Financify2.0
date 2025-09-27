import sys
import os
from csvParser import extract_transactions_from_csv
from pdfParser import extract_transactions_from_pdf

def detect_file_type(file_path):
    ext = os.path.splitext(file_path)[1].lower()
    if ext == '.csv':
        return 'csv'
    elif ext == '.pdf':
        return 'pdf'
    else:
        return None

def main():
    if len(sys.argv) < 2:
        print("Usage: python parser.py <file_path> [bank]")
        return
    file_path = sys.argv[1]
    file_type = detect_file_type(file_path)
    if file_type == 'csv':
        transactions = extract_transactions_from_csv(file_path)
    elif file_type == 'pdf':
        transactions = extract_transactions_from_pdf(file_path)
    else:
        print("Unsupported file type. Please provide a .csv or .pdf file.")
        return
    print("Extracted Transactions:")
    if transactions:
        for idx, txn in enumerate(transactions, 1):
            print(f"Transaction {idx}:")
            for key, value in txn.items():
                print(f"  {key.capitalize()}: {value if value else 'Not found'}")
    else:
        print("No transactions found.")

if __name__ == "__main__":
    main()
