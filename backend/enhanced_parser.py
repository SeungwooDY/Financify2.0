import re
import json
from datetime import datetime
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass
from enum import Enum
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class TransactionType(Enum):
    INCOME = "income"
    EXPENSE = "expense"
    TRANSFER = "transfer"

class PaymentMethod(Enum):
    DEBIT_CARD = "debit_card"
    CREDIT_CARD = "credit_card"
    DIGITAL_CARD = "mobile_payment"
    BANK_TRANSFER = "bank_transfer"
    CHECK = "check"
    CASH = "cash"
    OTHER = "other"

@dataclass
class ParsedTransaction:
    date: str
    description: str
    amount: float
    category: str
    type: TransactionType
    payment_method: PaymentMethod
    balance: Optional[float] = None
    merchant: Optional[str] = None

class EnhancedBankStatementParser:
    def __init__(self):
        # Enhanced category mapping with more patterns
        self.category_mapping = {
            # Food & Dining
            'food': [
                'giant', 'harris te', 'panda express', 'sweetgreen', 'chipotle',
                'ben gongs tea', 'coffee', 'restaurant', 'cafe', 'dining',
                'food', 'grocery', 'supermarket', 'market', 'mcdonalds', 'burger',
                'pizza', 'subway', 'starbucks', 'dunkin', 'taco', 'kfc',
                'wendys', 'dominos', 'papa johns', 'olive garden', 'outback',
                'applebees', 'chilis', 'red lobster', 'ihop', 'dennys'
            ],
            # Shopping
            'shopping': [
                'best buy', 'jomashop', 'amazon', 'target', 'walmart',
                'shopping', 'retail', 'store', 'mall', 'nordstrom', 'macy',
                'kohls', 'jcpenney', 'sears', 'homedepot', 'lowes',
                'costco', 'sams club', 'bjs', 'tj maxx', 'marshalls',
                'ross', 'burlington', 'old navy', 'gap', 'banana republic'
            ],
            # Education
            'books': [
                'uva bookstore', 'cavalier computers', 'labflow', 'textbook',
                'education', 'school', 'university', 'college', 'course',
                'pearson', 'mcgraw', 'cengage', 'chegg', 'coursera',
                'udemy', 'edx', 'khan academy', 'blackboard', 'canvas'
            ],
            # Entertainment
            'entertainment': [
                'apple', 'netflix', 'spotify', 'entertainment', 'movie',
                'game', 'subscription', 'hulu', 'disney', 'hbo', 'prime',
                'youtube', 'twitch', 'steam', 'playstation', 'xbox',
                'nintendo', 'epic games', 'blizzard', 'ea games'
            ],
            # Transportation
            'transportation': [
                'gas', 'fuel', 'uber', 'lyft', 'taxi', 'parking',
                'transportation', 'metro', 'bus', 'train', 'airline',
                'delta', 'american', 'united', 'southwest', 'jetblue',
                'amtrak', 'greyhound', 'hertz', 'avis', 'enterprise'
            ],
            # Healthcare
            'healthcare': [
                'pharmacy', 'medical', 'doctor', 'hospital', 'health',
                'cvs', 'walgreens', 'rite aid', 'pharmacy', 'clinic',
                'urgent care', 'emergency', 'dental', 'vision', 'optometrist'
            ],
            # Housing
            'housing': [
                'rent', 'mortgage', 'utilities', 'electric', 'water',
                'internet', 'cable', 'housing', 'apartment', 'condo',
                'electric company', 'gas company', 'water company',
                'comcast', 'verizon', 'att', 'spectrum', 'cox'
            ],
            # Income
            'income': [
                'deposit', 'salary', 'payroll', 'income', 'refund',
                'adjustment', 'credit', 'bonus', 'commission', 'dividend',
                'interest', 'pension', 'social security', 'unemployment'
            ]
        }
        
        # Payment method patterns
        self.payment_method_patterns = {
            PaymentMethod.DIGITAL_CARD: r'digital card|mobile payment|apple pay|google pay|samsung pay',
            PaymentMethod.DEBIT_CARD: r'debit card|debit purchase',
            PaymentMethod.CREDIT_CARD: r'credit card|credit purchase',
            PaymentMethod.BANK_TRANSFER: r'deposit|transfer|check deposit|ach|wire',
            PaymentMethod.CHECK: r'check|check payment',
            PaymentMethod.CASH: r'cash|atm|withdrawal'
        }

    def parse_statement(self, ocr_text: str) -> List[ParsedTransaction]:
        """
        Parse bank statement OCR text and extract structured transaction data
        """
        transactions = []
        
        try:
            # Clean and normalize the text
            cleaned_text = self._clean_text(ocr_text)
            logger.info(f"Cleaned text length: {len(cleaned_text)}")
            
            # Try multiple parsing strategies
            transactions = self._parse_with_multiple_strategies(cleaned_text)
            
            if not transactions:
                # Fallback: try to extract any transaction-like patterns
                transactions = self._fallback_parse(cleaned_text)
            
            logger.info(f"Successfully parsed {len(transactions)} transactions")
            return transactions
            
        except Exception as e:
            logger.error(f"Error parsing statement: {e}")
            return []

    def _parse_with_multiple_strategies(self, text: str) -> List[ParsedTransaction]:
        """Try multiple parsing strategies"""
        strategies = [
            self._parse_table_format,
            self._parse_line_by_line,
            self._parse_regex_patterns
        ]
        
        for strategy in strategies:
            try:
                transactions = strategy(text)
                if transactions:
                    logger.info(f"Strategy {strategy.__name__} found {len(transactions)} transactions")
                    return transactions
            except Exception as e:
                logger.warning(f"Strategy {strategy.__name__} failed: {e}")
                continue
        
        return []

    def _parse_table_format(self, text: str) -> List[ParsedTransaction]:
        """Parse table-format bank statements"""
        transactions = []
        
        # Split by lines and look for table structure
        lines = text.split('\n')
        
        # Find header row
        header_line = None
        for i, line in enumerate(lines):
            if any(keyword in line.lower() for keyword in ['date', 'description', 'amount', 'balance']):
                header_line = i
                break
        
        if header_line is None:
            return []
        
        # Process data rows
        for i in range(header_line + 1, len(lines)):
            line = lines[i].strip()
            if not line:
                continue
                
            transaction = self._parse_transaction_line(line)
            if transaction:
                transactions.append(transaction)
        
        return transactions

    def _parse_line_by_line(self, text: str) -> List[ParsedTransaction]:
        """Parse line-by-line format"""
        transactions = []
        
        # Split by common delimiters
        lines = re.split(r'[\n\r]+', text)
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # Look for date patterns
            if re.search(r'\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+', line):
                transaction = self._parse_transaction_line(line)
                if transaction:
                    transactions.append(transaction)
        
        # If we didn't find many transactions, try splitting by date patterns
        if len(transactions) < 3:
            # Split the text by date patterns to separate transactions
            date_pattern = r'(?=Aug \d+|Sep \d+|Oct \d+|Nov \d+|Dec \d+|Jan \d+|Feb \d+|Mar \d+|Apr \d+|May \d+|Jun \d+|Jul \d+)'
            transaction_texts = re.split(date_pattern, text)
            
            for transaction_text in transaction_texts:
                transaction_text = transaction_text.strip()
                if not transaction_text or self._is_header_line(transaction_text):
                    continue
                    
                transaction = self._parse_transaction_line(transaction_text)
                if transaction:
                    transactions.append(transaction)
        
        return transactions

    def _is_header_line(self, line: str) -> bool:
        """Check if line is a header or separator"""
        header_keywords = ['date', 'description', 'category', 'amount', 'balance', '---', '===']
        return any(keyword in line.lower() for keyword in header_keywords)

    def _parse_regex_patterns(self, text: str) -> List[ParsedTransaction]:
        """Parse using regex patterns"""
        transactions = []
        
        # Pattern for transactions with date, description, and amount
        pattern = r'(\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+)\s+(.+?)\s+([+-]?\$?[\d,]+\.?\d*)'
        
        matches = re.findall(pattern, text)
        
        for match in matches:
            date_str, description, amount_str = match
            try:
                transaction = self._create_transaction_from_parts(date_str, description, amount_str)
                if transaction:
                    transactions.append(transaction)
            except Exception as e:
                logger.warning(f"Failed to parse transaction: {match} - {e}")
                continue
        
        return transactions

    def _fallback_parse(self, text: str) -> List[ParsedTransaction]:
        """Fallback parsing for difficult formats"""
        transactions = []
        
        # Look for any amount patterns
        amount_pattern = r'([+-]?\$?[\d,]+\.?\d*)'
        amounts = re.findall(amount_pattern, text)
        
        # Look for date patterns
        date_pattern = r'(\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+)'
        dates = re.findall(date_pattern, text)
        
        # Try to match dates with amounts
        for i, date in enumerate(dates):
            if i < len(amounts):
                # Find description between date and amount
                date_pos = text.find(date)
                amount_pos = text.find(amounts[i], date_pos)
                
                if date_pos != -1 and amount_pos != -1:
                    description = text[date_pos + len(date):amount_pos].strip()
                    description = re.sub(r'\s+', ' ', description)
                    
                    try:
                        transaction = self._create_transaction_from_parts(date, description, amounts[i])
                        if transaction:
                            transactions.append(transaction)
                    except Exception as e:
                        logger.warning(f"Fallback parse failed: {e}")
                        continue
        
        return transactions

    def _create_transaction_from_parts(self, date_str: str, description: str, amount_str: str) -> Optional[ParsedTransaction]:
        """Create a transaction from parsed parts"""
        try:
            # Format date
            formatted_date = self._format_date(date_str)
            
            # Parse amount
            amount = self._parse_amount(amount_str)
            if amount is None:
                return None
            
            # Determine transaction type based on context
            is_income = any(keyword in description.lower() for keyword in ['deposit', 'credit', 'refund', 'adjustment', 'salary'])
            transaction_type = TransactionType.INCOME if is_income else TransactionType.EXPENSE
            
            # Adjust amount for expenses
            if not is_income:
                amount = -abs(amount)
            
            # Determine payment method
            payment_method = self._determine_payment_method(description)
            
            # Categorize transaction
            category = self._categorize_transaction(description)
            
            # Extract merchant
            merchant = self._extract_merchant(description)
            
            return ParsedTransaction(
                date=formatted_date,
                description=description,
                amount=amount,
                category=category,
                type=transaction_type,
                payment_method=payment_method,
                merchant=merchant
            )
            
        except Exception as e:
            logger.warning(f"Failed to create transaction: {e}")
            return None

    def _clean_text(self, text: str) -> str:
        """Clean and normalize OCR text"""
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        
        # Fix common OCR errors
        text = text.replace('|', 'I')
        text = re.sub(r'36O', '360', text)
        text = re.sub(r'XXXXXXXO', 'XXXXXXX0', text)
        text = re.sub(r'(\d)O(\d)', r'\g<1>0\g<2>', text)  # Fix 0 vs O in numbers
        
        return text.strip()

    def _parse_transaction_line(self, line: str) -> Optional[ParsedTransaction]:
        """Parse a single transaction line"""
        try:
            # Look for date pattern
            date_match = re.search(r'\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+', line)
            if not date_match:
                return None
            
            date_str = date_match.group()
            
            # Look for amount patterns
            amount_patterns = [
                r'\+?\$([\d,]+\.?\d*)',
                r'-\$([\d,]+\.?\d*)',
                r'([+-]?\$?[\d,]+\.?\d*)'
            ]
            
            amount = None
            for pattern in amount_patterns:
                amount_match = re.search(pattern, line)
                if amount_match:
                    amount_str = amount_match.group(1) if amount_match.groups() else amount_match.group(0)
                    amount = self._parse_amount(amount_str)
                    if amount is not None:
                        break
            
            if amount is None:
                return None
            
            # Extract description
            date_end = date_match.end()
            amount_start = line.rfind(str(amount)) if amount else len(line)
            description = line[date_end:amount_start].strip()
            description = re.sub(r'\s+', ' ', description)
            
            # Determine if income or expense based on context
            is_income = any(keyword in line.lower() for keyword in ['deposit', 'credit', 'refund', 'adjustment'])
            transaction_type = TransactionType.INCOME if is_income else TransactionType.EXPENSE
            
            # Adjust amount - make expenses negative
            if not is_income:
                amount = -abs(amount)
            
            # Determine payment method and category
            payment_method = self._determine_payment_method(line)
            category = self._categorize_transaction(description)
            merchant = self._extract_merchant(description)
            
            return ParsedTransaction(
                date=self._format_date(date_str),
                description=description,
                amount=amount,
                category=category,
                type=transaction_type,
                payment_method=payment_method,
                merchant=merchant
            )
            
        except Exception as e:
            logger.warning(f"Error parsing transaction line: {line} - {e}")
            return None

    def _parse_amount(self, amount_str: str) -> Optional[float]:
        """Parse amount string to float"""
        try:
            # Remove currency symbols and commas
            cleaned = re.sub(r'[^\d.-]', '', amount_str)
            if not cleaned:
                return None
            return float(cleaned)
        except (ValueError, TypeError):
            return None

    def _format_date(self, date_str: str) -> str:
        """Convert date string to ISO format"""
        try:
            current_year = datetime.now().year
            full_date_str = f"{date_str} {current_year}"
            date_obj = datetime.strptime(full_date_str, "%b %d %Y")
            return date_obj.strftime("%Y-%m-%d")
        except:
            return datetime.now().strftime("%Y-%m-%d")

    def _determine_payment_method(self, line: str) -> PaymentMethod:
        """Determine payment method from transaction line"""
        line_lower = line.lower()
        
        for method, pattern in self.payment_method_patterns.items():
            if re.search(pattern, line_lower):
                return method
        
        return PaymentMethod.OTHER

    def _categorize_transaction(self, description: str) -> str:
        """Categorize transaction based on description"""
        text_lower = description.lower()
        
        for category, keywords in self.category_mapping.items():
            for keyword in keywords:
                if keyword in text_lower:
                    return category
        
        return "other"

    def _extract_merchant(self, description: str) -> Optional[str]:
        """Extract merchant name from description"""
        merchant = description
        
        # Remove payment method indicators
        merchant = re.sub(r'(digital card|debit card|credit card)\s*-\s*', '', merchant, flags=re.IGNORECASE)
        merchant = re.sub(r'(purchase|debit|credit)\s*', '', merchant, flags=re.IGNORECASE)
        
        # Remove location indicators
        merchant = re.sub(r'\s+[A-Z]{2}\s*$', '', merchant)
        merchant = re.sub(r'\s+(US|CA|NY|VA|WA|BE)\s*$', '', merchant)
        
        # Remove phone numbers and account numbers
        merchant = re.sub(r'\d{3,}', '', merchant)
        
        # Remove common suffixes
        merchant = re.sub(r'\s+(COM|INC|LLC|CORP|LTD)\s*$', '', merchant, flags=re.IGNORECASE)
        
        # Clean up
        merchant = re.sub(r'\s+', ' ', merchant).strip()
        
        if ' - ' in merchant:
            merchant = merchant.split(' - ')[0]
        
        return merchant if merchant and len(merchant) > 2 else None

    def to_json(self, transactions: List[ParsedTransaction]) -> str:
        """Convert transactions to JSON format"""
        data = []
        for txn in transactions:
            data.append({
                "date": txn.date,
                "description": txn.description,
                "amount": txn.amount,
                "category": txn.category,
                "type": txn.type.value,
                "payment_method": txn.payment_method.value,
                "merchant": txn.merchant,
                "balance": txn.balance
            })
        return json.dumps(data, indent=2)

# Test the enhanced parser
if __name__ == "__main__":
    # Sample text for testing
    sample_text = """
    Aug 2 Deposit from 360 Checking XXXXXXX2170 Credit +$50.00 $605.65
    Aug 9 Digital Card Purchase - APPLE COM BILL 866 712 7753 CA Debit -$11.99 $593.66
    Aug 13 MONEY Card Adjustment Signature (Credit) AMAZON PRIME PMTS AMZN COM BIL WA Credit +$14.99 $608.65
    Aug 14 Deposit from 360 Performance Savings XXXXXXX0183 Credit +$265.00 $873.65
    Aug 16 Digital Card Purchase - GIANT 0745 13043 LEE J FAIRFAX, VA US Debit -$1.52 $872.13
    """
    
    parser = EnhancedBankStatementParser()
    transactions = parser.parse_statement(sample_text)
    
    print(f"Parsed {len(transactions)} transactions:")
    for txn in transactions:
        print(f"- {txn.date}: {txn.description[:50]}... ${txn.amount:.2f} ({txn.category})")
