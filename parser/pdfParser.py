import re
import sys
import pdfplumber
from bank_profiles import BANK_PROFILES

def extract_transactions_from_pdf(pdf_path):
    """
    Reads a PDF file and extracts transactions (amount, date, description).
    Returns a list of dictionaries with keys: 'amount', 'date', 'description'.
    """
    transactions = []
    def get_profile(bank):
        return BANK_PROFILES.get(bank, BANK_PROFILES['capital_one'])
    # Accept bank argument
    def parse(pdf_path, bank):
        profile = get_profile(bank)
        date_pattern = profile['date_pattern']
        amount_pattern = profile['amount_pattern']
        exclude_keywords = profile['exclude_keywords']
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if not text:
                    continue
                lines = text.splitlines()
                for line in lines:
                    line_stripped = line.strip()
                    if any(kw in line_stripped.lower() for kw in exclude_keywords):
                        continue
                    date_match = re.match(date_pattern, line_stripped)
                    if date_match:
                        amounts = re.findall(amount_pattern, line_stripped)
                        if amounts:
                            desc = line_stripped
                            desc = re.sub(date_pattern, '', desc, count=1).strip()
                            desc = re.sub(amount_pattern, '', desc).strip()
                            transactions.append({
                                'date': date_match.group(0),
                                'amount': amounts[0],
                                'description': desc
                            })
        return transactions
    # Accept bank argument from caller
    if hasattr(pdf_path, '__iter__') and len(pdf_path) == 2:
        pdf_path, bank = pdf_path
    else:
        bank = 'capital_one'
    return parse(pdf_path, bank)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python pdfParser.py <pdf_path> [bank]")
    else:
        pdf_path = sys.argv[1]
        bank = sys.argv[2] if len(sys.argv) > 2 else 'capital_one'
        transactions = extract_transactions_from_pdf((pdf_path, bank))
        print("Extracted Transactions:")
        if transactions:
            for idx, txn in enumerate(transactions, 1):
                print(f"Transaction {idx}:")
                for key, value in txn.items():
                    print(f"  {key.capitalize()}: {value if value else 'Not found'}")
        else:
            print("No transactions found.")
