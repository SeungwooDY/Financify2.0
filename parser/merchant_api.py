import requests
from nessie_config import NESSIE_API_KEY

BASE_URL = "http://api.nessieisreal.com"

# Fetch merchants from Nessie API

def get_merchants():
    url = f"{BASE_URL}/merchants?key={NESSIE_API_KEY}"
    response = requests.get(url)
    response.raise_for_status()
    merchants_json = response.json()
    # Return dict mapping merchant name to category
    merchant_map = {}
    for merchant in merchants_json:
        name = merchant.get('name')
        category = merchant.get('category')
        if name:
            merchant_map[name] = category
    return merchant_map

# Example usage (remove or comment out in production):
if __name__ == "__main__":
    merchant_map = get_merchants()
    for name, category in merchant_map.items():
        print(f"Merchant: {name}, Category: {category}")
