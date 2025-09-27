from PIL import Image
import pytesseract

import re

def extract_transactions(sentences):
    """
    Extracts multiple transactions (amount, date, description) from sentences.
    Returns a list of dictionaries, each with keys: 'amount', 'date', 'description'.
    """
    transactions = []
    amount_pattern = r'\$?([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})?)'
    date_pattern = r'(\d{1,2}/\d{1,2}/\d{2,4}|\d{4}-\d{2}-\d{2}|[A-Za-z]{3,9} \d{1,2}, \d{4})'

    for sentence in sentences:
        amount_match = re.search(amount_pattern, sentence)
        date_match = re.search(date_pattern, sentence)
        if amount_match and date_match:
            transactions.append({
                'amount': amount_match.group(0),
                'date': date_match.group(0),
                'description': sentence
            })
        elif amount_match or date_match:
            transactions.append({
                'amount': amount_match.group(0) if amount_match else None,
                'date': date_match.group(0) if date_match else None,
                'description': sentence
            })
    return transactions

def read_image_sentences(image_path):
    """
    Reads an image and extracts sentences using OCR.
    Returns a list of sentences found in the image.
    """
    img = Image.open(image_path)
    # Preprocessing: grayscale
    img = img.convert('L')
    # Preprocessing: increase contrast
    from PIL import ImageEnhance, ImageFilter
    img = ImageEnhance.Contrast(img).enhance(2.0)
    # Preprocessing: binarize (threshold)
    img = img.point(lambda x: 0 if x < 140 else 255, '1')
    # Preprocessing: denoise
    img = img.filter(ImageFilter.MedianFilter(size=3))
    # Preprocessing: upscale (resize)
    base_width = img.width * 2
    base_height = img.height * 2
    img = img.resize((base_width, base_height), Image.LANCZOS)

    text = pytesseract.image_to_string(img)
    sentences = re.split(r'[.!?]\s+', text)
    sentences = [s.strip() for s in sentences if s.strip()]
    return sentences

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python imageReader.py <image_path>")
    else:
        image_path = sys.argv[1]
        sentences = read_image_sentences(image_path)
        print("Sentences found:")
        for i, sentence in enumerate(sentences, 1):
            print(f"{i}. {sentence}")
        print("\nExtracted Transactions:")
        transactions = extract_transactions(sentences)
        if transactions:
            for idx, txn in enumerate(transactions, 1):
                print(f"Transaction {idx}:")
                for key, value in txn.items():
                    print(f"  {key.capitalize()}: {value if value else 'Not found'}")
        else:
            print("No transactions found.")
