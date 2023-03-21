from fastapi import HTTPException, status
from plans import models, schemas
from sqlalchemy.orm import Session


def create(request: schemas.Plan ,db: Session):
    new_plan = models.Plan(Plan = request.Plan, Validity =  request.Validity, Data = request.Data )
    db.add(new_plan)
    db.commit()
    db.refresh(new_plan)
    return request


def get_all(db: Session):
    plans = db.query(models.Plan).all()
    return plans


def show(id:int, db: Session):
    plan = db.query(models.Plan).filter(models.Plan.id == id).first()
    if not plan:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
        detail= f'Blog with Validity{id} not found.')
    else:
        return plan
