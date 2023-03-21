from typing import List
from urllib import response
from fastapi import APIRouter, Depends, HTTPException, status
from plans import models, schemas
from plans import db
from plans import oauth2
from sqlalchemy.orm import Session
from ..repository import user


router = APIRouter(
    prefix='/user',
    tags=['Users']
)
get_db = db.get_db


@router.post('/', response_model= schemas.User)
def create_user(request: schemas.User, db: Session = Depends(get_db)):
    return user.create(request, db)


@router.get('/{id}', response_model=schemas.ShowUser)
def get_user(id:int, db: Session = Depends(get_db)):
    return user.show(id, db)

