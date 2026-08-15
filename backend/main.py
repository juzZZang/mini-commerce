from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/products")
def get_products():
    return [
        {
            "id": 1,
            "name": "Classic Sneakers",
            "price": 89000,
            "category": "Shoes"
        },
        {
            "id": 2,
            "name": "Minimal Hoodie",
            "price": 59000,
            "category": "Fashion"
        },
        {
            "id": 3,
            "name": "Daily Backpack",
            "price": 49000,
            "category": "Accessories"
        }
    ]