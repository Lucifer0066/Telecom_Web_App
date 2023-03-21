from typing import List
from urllib import response
from fastapi import APIRouter, Depends, HTTPException, status
from plans import models, schemas
from plans import db
from plans import oauth2
from sqlalchemy.orm import Session
from plans.repository import guestuser


router = APIRouter(
    prefix='/guest',
    tags=['Guest Users']
)
get_db = db.get_db


@router.post('/', response_model= schemas.GuestUser)
def create_guest_user(request: schemas.GuestUser, db: Session = Depends(get_db)):
    return guestuser.create(request, db)


@router.get('/{id}', response_model=schemas.ShowGuest)
def get_user(id:int, db: Session = Depends(get_db)):
    return guestuser.show(id, db)

@router.delete('/{id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_guest_user(id:int, db: Session = Depends(get_db),current_user: schemas.GuestUser = Depends(oauth2.get_current_user)):
    return guestuser.delete_guest_user(id,db)