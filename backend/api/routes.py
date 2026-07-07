from fastapi import APIRouter

from services.housing_service import search_houses

from concurrent.futures import ThreadPoolExecutor
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



@router.get("/housing")
def get_housing(city: str):
    return search_houses(city)


@router.post("/plan")
def create_plan(request: TransitionRequest):

    print("===== REQUEST RECEIVED =====")
    print(request.model_dump())
    print("============================")

    # Run independent agents in parallel
    with ThreadPoolExecutor(max_workers=7) as executor:

        jobs_future = executor.submit(run_job_agent, request)
        housing_future = executor.submit(run_housing_agent, request)
        budget_future = executor.submit(run_budget_agent, request)
        schemes_future = executor.submit(run_government_scheme_agent, request)
        healthcare_future = executor.submit(run_healthcare_agent, request)
        education_future = executor.submit(run_education_agent, request)
        cost_future = executor.submit(run_cost_of_living_agent, request)

        jobs = jobs_future.result()
        housing = housing_future.result()
        budget = budget_future.result()
        schemes = schemes_future.result()
        healthcare = healthcare_future.result()
        education = education_future.result()
        print("========== EDUCATION ==========")
        print(education)
        print("===============================")
        cost_of_living = cost_future.result()

    # Planning Agent now works using collected data
    planning = run_planning_agent(request)

    planning["jobs"] = jobs
    planning["housing"] = housing
    planning["budget"] = budget
    planning["governmentSchemes"] = schemes
    planning["healthcare"] = healthcare
    planning["education"] = education
    planning["costOfLiving"] = cost_of_living

    # Final AI Recommendation
    negotiation = run_negotiation_agent(
        planning,
        jobs,
        housing,
        budget,
        schemes,
        cost_of_living,
        education,
        healthcare,
    )

    planning["finalRecommendation"] = negotiation

    return planning

    