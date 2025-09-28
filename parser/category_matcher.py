import requests

# Gemini API key (replace with your actual key)
GEMINI_API_KEY = "AIzaSyBjyoWo6LEAHdKrCzarP9mPMrXlkWtPrxI"

# General categories for all banks
GENERAL_CATEGORIES = [
    'food', 'transportation', 'shopping', 'travel', 'entertainment', 'education', 'tax', 'health', 'housing'
]

def gemini_categorize_transaction(description):
    """
    Categorize transaction using Gemini API (Google AI).
    Returns the predicted category mapped to GENERAL_CATEGORIES.
    """
    if not description:
        return None
    url = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent"
    headers = {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY
    }
    # Prompt Gemini to classify the transaction description
    prompt = f"Classify the following transaction description into one of these categories: {', '.join(GENERAL_CATEGORIES)}. Description: {description}. Only return the category name."
    data = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()
        # Extract Gemini's response
        category_label = None
        candidates = result.get("candidates", [])
        if candidates:
            # Gemini's response is in candidates[0]['content']['parts'][0]['text']
            category_label = candidates[0].get("content", {}).get("parts", [{}])[0].get("text", "").strip()
        if not category_label:
            return None
        else:
            return category_label
    except Exception as e:
        print(f"Gemini API error: {e}")
        return None