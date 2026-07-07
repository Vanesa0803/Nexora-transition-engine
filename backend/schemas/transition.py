from pydantic import BaseModel

class TransitionRequest(BaseModel):
    occupation: str

    currentCity: str
    destinationCity: str

    monthlyIncome: int
    savings: int

    familyMembers: int
    housingBudget: int
    educationRequirement: str