from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from plans.hashing import Hash
from fastapi.security import OAuth2PasswordRequestForm
from plans import db
from .. import models
from .. import token, db

router = APIRouter(
    tags=['Authentication']
)


@router.post("/login")
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(db.get_db)):
    user = db.query(models.User).filter(
        models.User.email == request.username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Invalid Credentials.")
    if not Hash.verify(user.password, request.password):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Incorrect Password.")

    access_token = token.create_access_token(data={"sub": user.email})
    return {"data": "Successfully Login", "result": {"access_token": access_token, "token_type": "bearer"}}


@router.post("/guest_login")
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(db.get_db)):
    guest_user = db.query(models.GuestUser).filter(
        models.GuestUser.email == request.username).first()
    if not guest_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Invalid Credentials.")
    if not Hash.verify(guest_user.password, request.password):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Incorrect Password.")

    access_token = token.create_access_token(data={"sub": guest_user.email})
    return {"access_token": access_token, "token_type": "bearer"}


