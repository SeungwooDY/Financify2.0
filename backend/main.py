import uvicorn
from fastapi import FastAPI, File, UploadFile, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
import os
import shutil
import pytesseract
import imageReader
from PIL import Image
from configurations import users_collection, finances_collection,scholarships_information_collection ,scholarships_collection
# from sqlalchemy import create_engine, Column, Integer, String
# from sqlalchemy.orm import declarative_base, sessionmaker
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Annotated
import re
import io

app = FastAPI()

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
    entertainment: float
    education: float
    tax: float
    health: float 

class ScholarInfo(BaseModel):
    username: str #get this from whichever user is logged in    
    age: int
    grade: int
    gender: str
    first_gen: bool
    disability: bool
    socioeconomic_status: str #low-income,medium-income,high-income
    military_connections: bool
    gpa: float
    sport: str
    artistic_talent: str
    field_of_study: str
    special_interests: str


origins = [
    "http://localhost:5173",
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
    new_user = {"username": user.username,"password":user.password}
    users_collection.insert_one(new_user)
    return {"msg": "User registered successfully"}

#handle logging in
@app.post("/login")
def login(user:User):
    db_user = users_collection.find_one({"username":user.username})
    if not db_user:
        return HTTPException(status_code=401,detail="User not found")
    if not (user.password == db_user["password"]):
        return HTTPException(status_code=401,detail="Incorrect ")
    users_collection.update_one({"username":user.username},{"$set":{"logged_in":True}})
    return {"msg": "Log in complete"}

#handle logging out tbd

#create a scholarship user
@app.post("/register_scholarship")
def register_scholarship(scholar: ScholarInfo):
    logged_user = users_collection.find_one({"logged_in": True})
    scholar_username = logged_user["username"]
    scholar_user = {
        "username": scholar_username,
        "age": scholar.age,
        "grade":scholar.grade,
        "gender":scholar.gender,
        "first_gen":scholar.first_gen,
        "disability": scholar.disability,
        "socioeconomic_status": scholar.socioeconomic_status,
        "military_connections":scholar.military_connections,
        "gpa":scholar.gpa,
        "sport":scholar.sport,
        "artistic_talent":scholar.artistic_talent,
        "field_of_study": scholar.field_of_study,
        "special_interests":scholar.special_interests
    }
    scholarships_information_collection.insert_one(scholar_user)
    return{"msg": "Scholarship information registration complete!"}

