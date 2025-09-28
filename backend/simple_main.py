import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# In-memory storage for development
users_collection = []

class User(BaseModel):
    username: str
    password: str
    logged_in: bool = False

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Financify Backend API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/register")
def register(user: User):
    # Check if user already exists
    existing_user = next((u for u in users_collection if u["username"] == user.username), None)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    new_user = {
        "username": user.username,
        "password": user.password,
        "logged_in": False
    }
    users_collection.append(new_user)
    return {"msg": "User registered successfully"}

@app.post("/login")
async def login(user: User):
    # Find user
    db_user = next((u for u in users_collection if u["username"] == user.username), None)
    if not db_user:
        raise HTTPException(status_code=401, detail="User not found")
    
    if not (user.password == db_user["password"]):
        raise HTTPException(status_code=401, detail="Incorrect password")
    
    # Update logged_in status
    for u in users_collection:
        if u["username"] == user.username:
            u["logged_in"] = True
            break
    
    return {"msg": "Log in complete"}

@app.get("/users")
async def get_users():
    return {"users": users_collection}

if __name__ == "__main__":
    print("Starting Financify Backend...")
    print("Users will be stored in memory for this session")
    uvicorn.run(app, host="0.0.0.0", port=8000)
