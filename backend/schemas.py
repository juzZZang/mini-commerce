from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    price: int
    category: str

class ProductUpdate(BaseModel):
    name :str
    price: int
    category: str

