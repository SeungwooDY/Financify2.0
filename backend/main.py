import uvicorn
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import os
import shutil
import pytesseract
import imageReader
from PIL import Image

# from sqlalchemy import create_engine, Column, Integer, String
# from sqlalchemy.orm import declarative_base, sessionmaker
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Annotated
import re
import io

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:3001", 
    "http://localhost:3002",
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
