import unittest
from category_matcher import match_merchant


class TestCategoryMatcher(unittest.TestCase):
    def test_uniqlo_match(self):
        description = "UNIQLO Tysons CornerMcLeanVA"
        from merchant_api import get_merchants
        merchant_map = get_merchants()
        print(f"Description: {description}")
        matched_merchant = match_merchant(description, merchant_map)
        print(f"Matched merchant: {matched_merchant}")
        self.assertEqual(matched_merchant, "UNIQLO")

        if matched_merchant:
            merchant_category = merchant_map.get(matched_merchant)
            print(f"Merchant category: {merchant_category}")
            # Simulate category matching step
            from category_matcher import GENERAL_CATEGORIES, _model, util, _category_embeddings
            import numpy as np
            cat_emb = _model.encode(merchant_category, convert_to_tensor=True)
            cat_scores = util.cos_sim(cat_emb, _category_embeddings)[0].cpu().numpy()
            best_cat_idx = int(np.argmax(cat_scores))
            best_cat_score = float(cat_scores[best_cat_idx])
            print(f"Best category match: {GENERAL_CATEGORIES[best_cat_idx]} (score: {best_cat_score})")

if __name__ == "__main__":
    unittest.main()