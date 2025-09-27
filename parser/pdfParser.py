import re
import sys
import pdfplumber

def extract_transactions_from_pdf(pdf_path):
    """
    Reads a PDF file and extracts transactions (amount, date, description).
    Returns a list of dictionaries with keys: 'amount', 'date', 'description'.
    """
    transactions = []
    # Only match monetary values (with decimal or comma)
    money_pattern = r'\$?([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})|[0-9]+\.[0-9]{2})'
    date_pattern = r'^(\d{1,2}/\d{1,2}(?:/\d{2,4})?|\d{4}-\d{2}-\d{2}|[A-Za-z]{3,9} \d{1,2}, \d{4})'
    exclude_keywords = ['page', 'totals']
    date_pattern = r'^(\d{1,2}/\d{1,2}(?:/\d{2,4})?|\d{4}-\d{2}-\d{2}|[A-Za-z]{3,9} \d{1,2}, \d{4})'

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if not text:
                continue
            lines = text.splitlines()
            for line in lines:
                line_stripped = line.strip()
                # Exclude lines with non-transaction keywords
                if any(kw in line_stripped.lower() for kw in exclude_keywords):
                    continue
                date_match = re.match(date_pattern, line_stripped)
                if date_match:
                    amounts = re.findall(money_pattern, line_stripped)
                    if amounts:
                        # Remove date and all amounts from description
                        desc = line_stripped
                        # Remove date
                        desc = re.sub(date_pattern, '', desc, count=1).strip()
                        # Remove all monetary values
                        desc = re.sub(money_pattern, '', desc).strip()
                        transactions.append({
                            'date': date_match.group(0),
                            'amount': amounts[0],
                            'description': desc
                        })
    return transactions

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python pdfParser.py <pdf_path>")
    else:
        pdf_path = sys.argv[1]
        transactions = extract_transactions_from_pdf(pdf_path)
        print("Extracted Transactions:")
        if transactions:
            for idx, txn in enumerate(transactions, 1):
                print(f"Transaction {idx}:")
                for key, value in txn.items():
                    print(f"  {key.capitalize()}: {value if value else 'Not found'}")
        else:
            print("No transactions found.")
