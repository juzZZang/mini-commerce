from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import engine, get_db

import models
import schemas
from database import engine

models.Base.metadata.create_all(bind=engine)

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
def get_products(db = Depends(get_db)):
    products = db.query(models.Product).all()
    
    return products

@app.post("/products")
def create_product(product: schemas.ProductCreate, db = Depends(get_db)):
    new_product = models.Product(
        name=product.name,
        price=product.price,
        category=product.category
    )

    db.add(new_product)
    db.commit()

    return new_product