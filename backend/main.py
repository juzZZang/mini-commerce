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

@app.put("/products/{product_id}")
def update_product(
    product_id: int,
    product: schemas.ProductUpdate,
    db = Depends(get_db)
):
    db_product = db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()

    if db_product is None:
        return {"message": "상품을 찾을 수 없습니다."}

    db_product.name = product.name
    db_product.price = product.price
    db_product.category = product.category

    db.commit()
    db.refresh(db_product)

    return db_product

@app.delete("/products/{product_id}")
def delete_product(
    product_id: int,
    db = Depends(get_db)
):
    db_product = db.query(models.Product).filter(
        models.Product.id == product_id
    ).first()

    if db_product is None:
        return {"message": "상품을 찾을 수 없습니다."}

    db.delete(db_product)
    db.commit()

    return {"message": "상품이 삭제되었습니다."}