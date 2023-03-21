from pydantic import BaseModel
from typing import List

class BlogBase(BaseModel):
    Plan:str
    Validity:str
    Data:str


class Plan(BlogBase):    
    class Config():
        orm_mode = True

class User(BaseModel):
    name : str
    email : str
    password : str
    confirm_password : str
    phone_number: str

class ShowUser(BaseModel):
    name : str
    email : str
    class Config():
        orm_mode = True


class Login(BaseModel):
    username: str
    password: str  


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None 

class BroadBase(BaseModel):
    name: str
    email:str
    password:str
    plan_name:str     

class Broadband(BroadBase):
    class Config():
        orm_mode = True 

class ShowBroadband(BaseModel):
    name: str
    email:str
    class Config():
        orm_mode = True 


class ShowPlan(BaseModel):
    Plan:str
    Validity: str
    Data:str
    class Config():
        orm_mode = True  

class GuestUser(BaseModel):
    name : str
    email : str
    password : str   


class ShowGuest(BaseModel):
    name:str
    email:str
    class Config():
        orm_mode = True    

