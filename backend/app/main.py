from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL="postgresql://questionnaire_user:securepassword@localhost/questionnaire_db"

# Database setup
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Model class
class PlayerResponse(Base):
    __tablename__ = "player_responses"
    id = Column(Integer, primary_key=True, index=True)
    player_type = Column(String, nullable=False)
    sport_type = Column(String, nullable=False)
    experience = Column(Integer, nullable=True)
    position = Column(String, nullable=True)
    training_hours = Column(Integer, nullable=True)
    team_level = Column(String, nullable=True)
    coaching_philosophy = Column(String, nullable=True)
    favorite_team = Column(String, nullable=True)
    watching_frequency = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

# Create database tables
Base.metadata.create_all(bind=engine)

# Pydantic schema
class PlayerResponseBase(BaseModel):
    player_type: str
    sport_type: str
    experience: int | None = None
    position: str | None = None
    training_hours: int | None = None
    team_level: str | None = None
    coaching_philosophy: str | None = None
    favorite_team: str | None = None
    watching_frequency: str | None = None

class PlayerResponseCreate(PlayerResponseBase):
    pass

class PlayerResponseOut(PlayerResponseBase):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True

# FastAPI app setup
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/responses/", response_model=PlayerResponseOut)
def create_response(response: PlayerResponseCreate, db: Session = Depends(get_db)):
    db_response = PlayerResponse(**response.dict())
    db.add(db_response)
    db.commit()
    db.refresh(db_response)
    return db_response

@app.get("/responses/", response_model=list[PlayerResponseOut])
def get_responses(db: Session = Depends(get_db)):
    return db.query(PlayerResponse).all()