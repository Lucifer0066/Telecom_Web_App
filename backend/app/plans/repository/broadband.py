from fastapi import HTTPException, status
from plans import models, schemas
from sqlalchemy.orm import Session
from plans.hashing import Hash


def create(request: schemas.Broadband ,db: Session):
    new_conn = models.Broadband(name = request.name, email = request.email, password = Hash.bcrypt(request.password), plan_name = request.plan_name)
    db.add(new_conn)
    db.commit()
    db.refresh(new_conn)
    return request

def show(id:int, db: Session):
    user = db.query(models.Broadband).filter(models.Broadband.id == id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with the id {id} not found.")
    return user