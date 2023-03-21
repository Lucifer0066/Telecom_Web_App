from typing import List
from urllib import response
from fastapi import APIRouter, Depends, HTTPException, status
from plans import schemas
from plans import db
from sqlalchemy.orm import Session
from plans.repository import plans



router = APIRouter(
    prefix='/plans',
    tags=['Plans']
)

@router.post('/', response_model= schemas.Plan)
def create_plans(request: schemas.Plan, db: Session = Depends(db.get_db)):
    return plans.create(request, db)



@router.get('/', response_model=List[schemas.ShowPlan])
def all(db: Session = Depends(db.get_db)):
   return plans.get_all(db)

 
@router.get('/{id}', status_code=200, response_model=schemas.ShowPlan)
def show(id, db: Session = Depends(db.get_db)):
    return plans.show(id, db)



