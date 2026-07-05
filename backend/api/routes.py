from fastapi import APIRouter

from agents.negotiation_agent import run_negotiation_agent
from agents.healthcare_agent import run_healthcare_agent
from agents.education_agent import run_education_agent
from agents.cost_of_living_agent import run_cost_of_living_agent
from agents.budget_agent import run_budget_agent
from agents.housing_agent import run_housing_agent
from schemas.transition import TransitionRequest
from agents.planning_agent import run_planning_agent
from agents.job_agent import run_job_agent
from agents.government_scheme_agent import run_government_scheme_agent

router = APIRouter()


@router.post("/plan")
def create_plan(request: TransitionRequest):

    planning = run_planning_agent(request)

    jobs = run_job_agent(request)

    housing = run_housing_agent(request)

    budget = run_budget_agent(request)

    schemes = run_government_scheme_agent(request)

    healthcare = run_healthcare_agent(request)

    planning["healthcare"] = healthcare

    cost_of_living = run_cost_of_living_agent(request)

    education = run_education_agent(request)

    planning["education"] = education
    planning["jobs"] = jobs
    planning["housing"] = housing
    planning["budget"] = budget
    planning["governmentSchemes"] = schemes
    planning["costOfLiving"] = cost_of_living

    negotiation = run_negotiation_agent(
    planning,
    jobs,
    housing,
    budget,
    schemes,
    cost_of_living,
    education,
    healthcare,)
    planning["finalRecommendation"] = negotiation

    return planning