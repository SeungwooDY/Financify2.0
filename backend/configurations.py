from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://baibaiannie_db_user:9MfjR3Mhl2KyTmxN@cluster0.y50qcox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
#password = 9MfjR3Mhl2KyTmxN
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client["financify2.0"]
users_collection = db["users"]
finances_collection = db["finances"]
scholarships_collection = db["scholarships"]