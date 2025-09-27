
# Gemini API key (replace with your actual key)
GEMINI_API_KEY = "AIzaSyBjyoWo6LEAHdKrCzarP9mPMrXlkWtPrxI"

import requests

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
        # Map Gemini label to closest GENERAL_CATEGORIES value
        from sentence_transformers import SentenceTransformer, util
        _model = SentenceTransformer('all-MiniLM-L6-v2')
        _category_embeddings = _model.encode(GENERAL_CATEGORIES, convert_to_tensor=True)
        label_emb = _model.encode(category_label, convert_to_tensor=True)
        cat_scores = util.cos_sim(label_emb, _category_embeddings)[0].cpu().numpy()
        best_cat_idx = int(np.argmax(cat_scores))
        best_cat_score = float(cat_scores[best_cat_idx])
        if best_cat_score >= 0.45:
            return GENERAL_CATEGORIES[best_cat_idx]
        else:
            return category_label
    except Exception as e:
        print(f"Gemini API error: {e}")
        return None
    
from sentence_transformers import SentenceTransformer, util
import numpy as np
from merchant_api import get_merchants

# General categories for all banks
GENERAL_CATEGORIES = [
    'food', 'shopping', 'transportation', 'travel', 'entertainment', 'utilities', 'health',
    'insurance', 'banking', 'investment', 'income', 'transfer', 'payment', 'refund', 'fees',
    'education', 'charity', 'housing', 'service', 'online', 'tax', 'other', 'clothing'
]


_model = SentenceTransformer('all-MiniLM-L6-v2')
_category_embeddings = _model.encode(GENERAL_CATEGORIES, convert_to_tensor=True)

# Load merchant map and embeddings

_merchant_map = get_merchants()  # {merchant_name: category}
_merchant_names = list(_merchant_map.keys())
_merchant_embeddings = _model.encode(_merchant_names, convert_to_tensor=True) if _merchant_names else None

def match_merchant(description, merchant_map=None, threshold=0.45):
    """
    Match a transaction description to the best merchant name using ML similarity.
    Returns the merchant name if above threshold, else None.
    """
    if not description:
        return None
    if merchant_map is None:
        merchant_map = _merchant_map
    merchant_names = list(merchant_map.keys())
    if not merchant_names:
        return None
    merchant_embeddings = _model.encode(merchant_names, convert_to_tensor=True)
    desc_emb = _model.encode(description, convert_to_tensor=True)
    merchant_scores = util.cos_sim(desc_emb, merchant_embeddings)[0].cpu().numpy()
    best_merchant_idx = int(np.argmax(merchant_scores))
    best_merchant_score = float(merchant_scores[best_merchant_idx])
    if best_merchant_score >= threshold:
        return merchant_names[best_merchant_idx]
    return None

def categorize_transaction(description, categories=GENERAL_CATEGORIES, merchant_threshold=0.45, category_threshold=0.45):
    """
    1. Try to match description to merchant name using ML similarity.
    2. If merchant match found, match merchant's category to general categories using ML similarity.
    3. If no merchant match, match description to general categories using ML similarity.
    """
    if not description:
        return None
    # Step 1: Match to merchant name using match_merchant
    merchant_name = match_merchant(description, _merchant_map, merchant_threshold)
    if merchant_name:
        merchant_category = _merchant_map.get(merchant_name)
        if merchant_category:
            # Handle multiple categories
            if isinstance(merchant_category, list):
                best_cat_idx = None
                best_cat_score = -float('inf')
                for cat in merchant_category:
                    cat_emb = _model.encode(cat, convert_to_tensor=True)
                    cat_scores = util.cos_sim(cat_emb, _category_embeddings)[0].cpu().numpy()
                    idx = int(np.argmax(cat_scores))
                    score = float(cat_scores[idx])
                    if score > best_cat_score:
                        best_cat_score = score
                        best_cat_idx = idx
                if best_cat_score >= category_threshold:
                    return categories[best_cat_idx]
            else:
                cat_emb = _model.encode(merchant_category, convert_to_tensor=True)
                cat_scores = util.cos_sim(cat_emb, _category_embeddings)[0].cpu().numpy()
                best_cat_idx = int(np.argmax(cat_scores))
                best_cat_score = float(cat_scores[best_cat_idx])
                if best_cat_score >= category_threshold:
                    return categories[best_cat_idx]
    # Step 3: Fallback: match description to general categories
    desc_emb = _model.encode(description, convert_to_tensor=True)
    cosine_scores = util.cos_sim(desc_emb, _category_embeddings)[0].cpu().numpy()
    best_idx = int(np.argmax(cosine_scores))
    best_score = float(cosine_scores[best_idx])
    if best_score >= category_threshold:
        return categories[best_idx]
    return None
