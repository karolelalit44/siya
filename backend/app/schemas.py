from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PlayerResponseBase(BaseModel):
    player_type: str
    sport_type: str
    experience: Optional[int] = None
    position: Optional[str] = None
    training_hours: Optional[int] = None
    team_level: Optional[str] = None
    coaching_philosophy: Optional[str] = None
    favorite_team: Optional[str] = None
    watching_frequency: Optional[str] = None

class PlayerResponseCreate(PlayerResponseBase):
    pass

class PlayerResponseOut(PlayerResponseBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
