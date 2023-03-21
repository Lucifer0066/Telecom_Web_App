from fastapi import HTTPException, status
from plans import models, schemas
from sqlalchemy.orm import Session
from plans.hashing import Hash


def create(request: schemas.GuestUser ,db: Session):
    new_guest_user = models.GuestUser(name = request.name, email = request.email, password = Hash.bcrypt(request.password))
    db.add(new_guest_user)
    db.commit()
    db.refresh(new_guest_user)
    return request

def show(email:str, db: Session):
    guest_user = db.query(models.GuestUser).filter(models.GuestUser.email == email).first()
    if not guest_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with the email {email} not found.")
    return guest_user

def delete_guest_user(id:int,db: Session):
    guest_user = db.query(models.GuestUser).filter(models.GuestUser.id == id)

    if not guest_user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Blog with id {id} not found")

    guest_user.delete(synchronize_session=False)
    db.commit()
    return 'done'