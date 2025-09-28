import uvicorn
from fastapi import FastAPI, File, UploadFile, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
import os
import shutil
import pytesseract
import imageReader
from PIL import Image
#from configurations import users_collection, finances_collection,scholarships_information_collection ,scholarships_collection
# from sqlalchemy import create_engine, Column, Integer, String
# from sqlalchemy.orm import declarative_base, sessionmaker
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Annotated
import re
import io
import os
from pymongo import MongoClient
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

app = FastAPI()

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

class User(BaseModel):
    username: str
    password: str
    logged_in: bool = False

class Finances(BaseModel):
    month: str
    total_spendings: float
    total_earnings:float
    net_balance: float #earnings - spending
    food: float
    transportation: float
    shopping: float
    travel:float
    housing: float
    entertainment: float
    education: float
    tax: float
    health: float 

class ScholarInfo(BaseModel):
    username: str = ""#get this from whichever user is logged in    
    firstName: str
    lastName:str
    email:str
    phone:str
    address:str
    monthlyIncome:str
    monthlyExpenses:str
    savingsGoal:str
    emergencyFund:str
    creditScore:str

class UserSettings(BaseModel):
    personalInfo: dict
    financialInfo: dict
    preferences: dict

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

###
### Post requests here
###

UPLOAD_DIR = "uploads"  # name of file
os.makedirs(
    UPLOAD_DIR, exist_ok=True
)  # creates file if doesn't exist, (exist_ok) = prevents errors if folder is already there


@app.post("/upload-image/")
async def upload_image(
    file: UploadFile = File(...),
):  # async function allows for concurrent requests
    # save the uploaded file
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = process_image(file_path)  # create this endpoint

    return result


# def read_image_sentences_from_file(file) -> list[str]:
#     """
#     Reads an image and extracts sentences using OCR.
#     Returns a list of sentences found in the image.
#     """
#     # Open the image file
#     img = Image.open(file)
#     text = pytesseract.image_to_string(img)
#     sentences = re.split(r"[.!?]\s+", text)
#     sentences = [s.strip() for s in sentences if s.strip()]
#     return sentences


# @app.post("/process-image/")
# async def process_image(file: UploadFile = File(...)):
#     image_bytes = await file.read()
#     img = Image.open(io.BytesIO(image_bytes))
#     sentences = read_image_sentences_from_file(io.BytesIO(image_bytes))
#     return {"sentences": ["Hello world."]}


def extract_sentences_from_image_bytes(image_bytes: bytes) -> List[str]:
    try:
        img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        text = pytesseract.image_to_string(img)
        sentences = re.split(r"[.!?]\s+", text)
        sentences = [s.strip() for s in sentences if s.strip()]
        return sentences
    except Exception as e:
        print("OCR error:", e)
        return []


@app.post("/process-image/")
async def process_image(file: UploadFile = File(...)):
    try:
        content = await file.read()

        # Optional: save the raw upload so you can inspect it
        saved_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(saved_path, "wb") as fh:
            fh.write(content)

        sentences = extract_sentences_from_image_bytes(content)
        # If OCR yields nothing, you might want to return the raw text or a helpful message
        if not sentences:
            return {"sentences": ["(no text found)"]}
        return {"sentences": sentences}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    
#handle user registration
@app.post("/register")
def register(user:User):
    #check if the user already exists
    existing_user = users_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400,detail="Username already exists")
    new_user = {"username": user.username,"password":user.password,"logged_in":False}
    users_collection.insert_one(new_user)
    return {"msg": "User registered successfully"}

#handle logging in
@app.post("/login")
async def login(user:User):
    db_user = users_collection.find_one({"username":user.username})
    if not db_user:
        return HTTPException(status_code=401,detail="User not found")
    if not (user.password == db_user["password"]):
        return HTTPException(status_code=401,detail="Incorrect ")
    users_collection.update_one({"username":user.username},{"$set":{"logged_in":True}})
    return {"msg": "Log in complete"}

#handle logging out tbd

@app.post("/register_scholarship")
async def register_scholarship(scholar: ScholarInfo):
    logged_user = users_collection.find_one({"logged_in": True})
    if not logged_user:
        raise HTTPException(status_code=401, detail="No user logged in")

    scholar_username = logged_user["username"]

    scholar_user = {
        "username": scholar_username,
        **scholar.model_dump()
    }
    scholarships_information_collection.insert_one(scholar_user)
    return {"msg": "Scholarship information registered successfully"}

@app.post("/save_settings")
async def save_settings(settings: UserSettings):
    logged_user = users_collection.find_one({"logged_in": True})
    if not logged_user:
        raise HTTPException(status_code=401, detail="No user logged in")

    username = logged_user["username"]
    
    # Check if user settings already exist
    existing_settings = users_collection.find_one({"username": username, "settings": {"$exists": True}})
    
    if existing_settings:
        # Update existing settings
        users_collection.update_one(
            {"username": username},
            {"$set": {"settings": settings.model_dump()}}
        )
    else:
        # Insert new settings
        users_collection.update_one(
            {"username": username},
            {"$set": {"settings": settings.model_dump()}}
        )
    
    return {"msg": "Preferences updated successfully"}

@app.get("/get_settings")
async def get_settings():
    logged_user = users_collection.find_one({"logged_in": True})
    if not logged_user:
        raise HTTPException(status_code=401, detail="No user logged in")

    username = logged_user["username"]
    user_data = users_collection.find_one({"username": username})
    
    if user_data and "settings" in user_data:
        return {"settings": user_data["settings"]}
    else:
        # Return default settings if none exist
        return {
            "settings": {
                "personalInfo": {
                    "firstName": username.split(' ')[0] if username else '',
                    "lastName": username.split(' ')[1] if len(username.split(' ')) > 1 else '',
                    "email": user_data.get("email", ""),
                    "phone": "",
                    "address": ""
                },
                "financialInfo": {
                    "monthlyIncome": "",
                    "monthlyExpenses": "",
                    "savingsGoal": "",
                    "emergencyFund": "",
                    "creditScore": ""
                },
                "preferences": {
                    "currency": "USD",
                    "timezone": "America/New_York",
                    "notifications": True
                }
            }
        }

