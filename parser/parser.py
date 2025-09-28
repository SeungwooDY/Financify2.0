import sys
import os
from csvParser import extract_transactions_from_csv
from pdfParser import extract_transactions_from_pdf
from imageParser import read_image_sentences, extract_transactions

def detect_file_type(file_path):
    ext = os.path.splitext(file_path)[1].lower()
    if ext == '.csv':
        return 'csv'
    elif ext == '.pdf':
        return 'pdf'
    elif ext in ['.png', '.jpg', '.jpeg', '.webp', '.bmp', '.tiff']:
        return 'image'
    else:
        return None

def get_transactions(file_path, bank='capital_one'):
    file_type = detect_file_type(file_path)
    if file_type == 'csv':
        return extract_transactions_from_csv(file_path)
    elif file_type == 'pdf':
        return extract_transactions_from_pdf((file_path, bank))
    elif file_type == 'image':
        sentences = read_image_sentences(file_path)
        return extract_transactions(sentences)
    else:
        raise ValueError("Unsupported file type.")

def main():
    if len(sys.argv) < 2:
        print("Usage: python parser.py <file_path> [bank]")
        return
    file_path = sys.argv[1]
    bank = sys.argv[2] if len(sys.argv) > 2 else 'capital_one'
    try:
        transactions = get_transactions(file_path, bank)
        print("Extracted Transactions:")
        if transactions:
            for idx, txn in enumerate(transactions, 1):
                print(f"Transaction {idx}:")
                for key, value in txn.items():
                    print(f"  {key.capitalize()}: {value if value else 'Not found'}")
        else:
            print("No transactions found.")
    except ValueError as e:
        print(e)

if __name__ == "__main__":
    main()
