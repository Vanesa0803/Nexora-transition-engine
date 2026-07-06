from services.cost_of_living_service import estimate_cost_of_living


def run_cost_of_living_agent(data):

    return estimate_cost_of_living(
        city=data.destinationCity,
        family_members=data.familyMembers,
    )