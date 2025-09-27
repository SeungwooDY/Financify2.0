from PIL import Image, ImageEnhance, ImageFilter, ImageStat
import pytesseract
import re
import numpy as np
import os
from pdf2image import convert_from_path

def get_optimal_scale(img, target_height=24):
    """
    Determines optimal scale factor so the smallest detected text height reaches target_height pixels.
    Returns scale factor (float).
    """
    # Run OCR to get bounding boxes
    data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)
    heights = [h for h in data['height'] if h > 0]
    if not heights:
        return 1.0
    min_height = min(heights)
    scale = max(target_height / min_height, 1.0)
    return scale

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

def preprocess_image(img):
    img = img.convert('L')

    # Automatic image quality detection
    stat = ImageStat.Stat(img)
    brightness = stat.mean[0]
    try:
        arr = np.array(img)
        laplacian = np.var(np.gradient(arr))
    except Exception:
        laplacian = 0

    # Adaptive contrast
    if brightness < 80:
        contrast_factor = 2.0
    elif brightness < 120:
        contrast_factor = 1.5
    else:
        contrast_factor = 1.2
    img = ImageEnhance.Contrast(img).enhance(contrast_factor)

    # Adaptive denoise
    if laplacian < 10:
        denoise_size = 5
    elif laplacian < 30:
        denoise_size = 3
    else:
        denoise_size = 1
    img = img.filter(ImageFilter.MedianFilter(size=denoise_size))

    # Optimal upscaling based on smallest text height
    scale = get_optimal_scale(img, target_height=24)
    base_width = int(img.width * scale)
    base_height = int(img.height * scale)
    img = img.resize((base_width, base_height), Image.LANCZOS)
    return img

def read_image_sentences(image_path):
    """
    Reads an image and extracts sentences using OCR.
    Returns a list of sentences found in the image.
    """
    img = Image.open(image_path)
    img = preprocess_image(img)

    # Save preprocessed image for inspection
    filename = os.path.basename(image_path)
    name, ext = os.path.splitext(filename)
    out_path = f'./preprocessedImages/{name}_preprocessed.png'
    img.save(out_path)

    text = pytesseract.image_to_string(img)
    lines = text.splitlines()
    # Match lines that start with a date (MM/DD, M/D, MM-DD, M-D, YYYY-MM-DD, etc.)
    date_line_pattern = re.compile(r'^(\d{1,2}[/-]\d{1,2}|\d{4}-\d{1,2}-\d{1,2})')
    date_lines = [line.strip() for line in lines if date_line_pattern.match(line.strip())]
    # Optionally split further into sentences if needed
    sentences = [l for l in date_lines if l]
    return sentences

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python imageReader.py <image_path>")
    else:
        image_path = sys.argv[1]
        sentences = read_image_sentences(image_path)
        transactions = extract_transactions(sentences)
        print("Extracted Transactions:")
        if transactions:
            for idx, txn in enumerate(transactions, 1):
                print(f"Transaction {idx}:")
                for key, value in txn.items():
                    print(f"  {key.capitalize()}: {value if value else 'Not found'}")
        else:
            print("No transactions found.")
