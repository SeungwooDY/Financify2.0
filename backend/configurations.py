import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
# Load variables from .env
load_dotenv()  # looks for .env in the project root

# Get the Mongo URI
MONGO_URI = os.getenv("MONGO_URI")

uri = MONGO_URI
#password = 9MfjR3Mhl2KyTmxN
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client["financify"]
users_collection = db["users"]
finances_collection = db["finances"]
scholarships_information_collection = db["scholarships_information"]
scholarships_collection = db["scholarships"]