from fastapi import APIRouter, Depends
from plans import models, schemas
from plans import db
from sqlalchemy.orm import Session
from plans.repository import broadband


router = APIRouter(
    prefix='/broadbandconn',
    tags=['Broadband']
)
get_db = db.get_db


@router.post('/', response_model= schemas.Broadband)
def create_conn(request: schemas.Broadband, db: Session = Depends(get_db)):
    return broadband.create(request, db)


@router.get('/{id}', response_model=schemas.ShowBroadband)
def get_user(id:int, db: Session = Depends(get_db)):
    return broadband.show(id, db)