import uvicorn
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import os
import shutil
import pytesseract
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Annotated


app = FastAPI()

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


@app.post("/upload_image/")
async def upload_image(
    file: UploadFile = File(...),
):  # async function allows for concurrent requests
    # save the uploaded file
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = process_image(file_path)  # create this endpoint

    return result
