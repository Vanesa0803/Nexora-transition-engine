from pydantic import BaseModel


class TransitionRequest(BaseModel):
    occupation: str
    income: str
    familyMembers: str
    currentCity: str
    destinationCity: str
    housingBudget: str