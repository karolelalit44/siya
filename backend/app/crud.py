from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import database, crud, schemas

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/responses/", response_model=schemas.PlayerResponseOut)
def create_response(response: schemas.PlayerResponseCreate, db: Session = Depends(get_db)):
    return crud.create_player_response(db, response)

@router.get("/responses/", response_model=list[schemas.PlayerResponseOut])
def get_responses(db: Session = Depends(get_db)):
    return crud.get_all_responses(db)
