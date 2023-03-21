from fastapi import HTTPException, status
from plans import models, schemas
from sqlalchemy.orm import Session
from plans.hashing import Hash


def create(request: schemas.User ,db: Session):
    new_user = models.User(name = request.name, email = request.email, password = Hash.bcrypt(request.password), confirm_password = Hash.bcrypt(request.password), phone_number = (request.phone_number))
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return request

def show(email:str, db: Session):
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with the email {email} not found.")
    return user