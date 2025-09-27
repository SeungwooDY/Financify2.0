from PIL import Image
import pytesseract

def read_image_sentences(image_path):
    """
    Reads an image and extracts sentences using OCR.
    Returns a list of sentences found in the image.
    """
    # Open the image file
    img = Image.open(image_path)
    # Use pytesseract to do OCR on the image
    text = pytesseract.image_to_string(img)
    # Split text into sentences (simple split by period/question/exclamation)
    import re
    sentences = re.split(r'[.!?]\s+', text)
    # Remove empty strings and strip whitespace
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
class imageReader (object):
    def __init__(self, path):
        self.path = path

    def read(self):
        with open(self.path, 'rb') as f:
            return f.read()