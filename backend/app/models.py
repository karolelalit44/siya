from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .database import Base
from datetime import datetime

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
